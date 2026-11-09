'use server';

import nodemailer from 'nodemailer';

export type ContactState = { ok: boolean; message: string } | null;

const TO = process.env.CONTACT_TO || 'contact@nextsocial.mn';
const SUBJECTS = ['Санал хүсэлт', 'Үнийн санал'];

function field(f: FormData, name: string, max: number) {
  const v = String(f.get(name) ?? '').trim();
  return v.length <= max ? v : null;
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

// Reference number shown in the subject and body, e.g. BMN-20261109-4F7K.
function refNo(now: Date) {
  const day = now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Ulaanbaatar' }).replace(/-/g, '');
  return `BMN-${day}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

// Inline styles and tables only: Outlook ignores <style> and most CSS layout.
function html(ref: string, sent: string, sections: [string, [string, string][]][], message: string) {
  const label = 'padding:9px 0;width:150px;font-size:13px;color:#5f6170;vertical-align:top;border-bottom:1px solid #eef0f3;';
  const value = 'padding:9px 0;font-size:14px;color:#170f2a;vertical-align:top;border-bottom:1px solid #eef0f3;';
  const heading = 'padding:24px 0 6px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#5f6170;border-bottom:1px solid #d9dce2;';
  return `<!doctype html>
<html><body style="margin:0;padding:32px 16px;background:#f2f3f5;font-family:'Segoe UI',Arial,sans-serif;color:#170f2a;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #dfe1e6;">
  <tr><td style="height:4px;background:#4ce233;font-size:0;line-height:0;">&nbsp;</td></tr>
  <tr><td style="padding:24px 36px;border-bottom:1px solid #dfe1e6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="vertical-align:middle;">
        <div style="font-size:18px;font-weight:700;color:#170f2a;">Business.mongol.net</div>
        <div style="font-size:12px;color:#5f6170;padding-top:2px;">Гишүүнчлэлийн нэгдсэн платформ</div>
      </td>
      <td style="vertical-align:middle;text-align:right;font-size:12px;color:#5f6170;line-height:1.6;">
        Дугаар: <strong style="color:#170f2a;">${ref}</strong><br>${sent}
      </td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:28px 36px 8px;">
    <div style="font-size:20px;font-weight:700;color:#170f2a;">Холбоо барих хүсэлт</div>
    <div style="font-size:14px;line-height:1.6;color:#3d3f4a;padding-top:8px;">Business.mongol.net вэбсайтын холбоо барих маягтаар дараах хүсэлт ирүүлсэн байна.</div>
  </td></tr>
  <tr><td style="padding:0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${sections
  .map(
    ([title, rows]) =>
      `      <tr><td colspan="2" style="${heading}">${title}</td></tr>\n` +
      rows.map(([k, v]) => `      <tr><td style="${label}">${k}</td><td style="${value}">${v}</td></tr>`).join('\n'),
  )
  .join('\n')}
      <tr><td colspan="2" style="${heading}">Хүсэлтийн агуулга</td></tr>
      <tr><td colspan="2" style="padding:14px 0 0;">
        <div style="border:1px solid #dfe1e6;background:#fafbfc;padding:16px 18px;font-size:14px;line-height:1.7;color:#170f2a;">${esc(message).replace(/\r?\n/g, '<br>')}</div>
      </td></tr>
    </table>
  </td></tr>
  <tr><td style="padding:32px 36px 28px;">
    <div style="border-top:1px solid #dfe1e6;padding-top:16px;font-size:12px;line-height:1.6;color:#80838f;">
      Энэхүү и-мэйл нь Business.mongol.net вэбсайтаас автоматаар илгээгдсэн тул хариу бичих шаардлагагүй.<br>
      © ${new Date().getFullYear()} Business.mongol.net
    </div>
  </td></tr>
</table>
</body></html>`;
}

export async function sendContact(_prev: ContactState, f: FormData): Promise<ContactState> {
  // Honeypot: hidden from people, bots fill it in. Pretend it worked.
  if (f.get('website')) return { ok: true, message: 'Таны захидал илгээгдлээ. Баярлалаа!' };

  const name = field(f, 'fullname', 100);
  const phone = field(f, 'number', 30);
  const subject = field(f, 'subject', 50);
  const message = field(f, 'message', 5000);
  if (!name || !phone || !message || !subject || !SUBJECTS.includes(subject)) {
    return { ok: false, message: 'Бүх талбарыг зөв бөглөнө үү.' };
  }

  const { MAIL_HOST, MAIL_PORT, MAIL_NO_REPLY_USER, MAIL_NO_REPLY_PASSWORD, MAIL_NO_REPLY_FROM } = process.env;
  if (!MAIL_NO_REPLY_USER || !MAIL_NO_REPLY_PASSWORD) {
    console.error('contact: MAIL_NO_REPLY_USER / MAIL_NO_REPLY_PASSWORD is not set');
    return { ok: false, message: 'Захидал илгээж чадсангүй. Түр хүлээгээд дахин оролдоно уу.' };
  }

  const port = Number(MAIL_PORT) || 587;
  const transport = nodemailer.createTransport({
    host: MAIL_HOST || 'smtp.office365.com',
    port,
    secure: port === 465,
    auth: { user: MAIL_NO_REPLY_USER, pass: MAIL_NO_REPLY_PASSWORD },
  });

  const now = new Date();
  const ref = refNo(now);
  const sent = now.toLocaleString('mn-MN', { timeZone: 'Asia/Ulaanbaatar' });

  try {
    await transport.sendMail({
      from: { name: 'Business.mongol.net', address: MAIL_NO_REPLY_FROM || MAIL_NO_REPLY_USER },
      to: TO,
      subject: `Холбоо барих хүсэлт №${ref}: ${subject} - ${name.replace(/\s+/g, ' ')}`,
      text: [
        'ХОЛБОО БАРИХ ХҮСЭЛТ',
        `Дугаар: ${ref}`,
        `Огноо: ${sent}`,
        '',
        `Овог, нэр: ${name}`,
        `Утасны дугаар: ${phone}`,
        `Хүсэлтийн төрөл: ${subject}`,
        '',
        'Хүсэлтийн агуулга:',
        message,
        '',
        '--',
        'Энэхүү и-мэйл нь Business.mongol.net вэбсайтаас автоматаар илгээгдсэн.',
      ].join('\n'),
      html: html(
        ref,
        sent,
        [
          [
            'Хүсэлт гаргагч',
            [
              ['Овог, нэр', esc(name)],
              ['Утасны дугаар', `<a href="tel:${esc(phone.replace(/[^\d+]/g, ''))}" style="color:#170f2a;text-decoration:none;">${esc(phone)}</a>`],
            ],
          ],
          [
            'Хүсэлтийн мэдээлэл',
            [
              ['Хүсэлтийн төрөл', esc(subject)],
              ['Илгээсэн огноо', sent],
              ['Эх сурвалж', 'business.mongol.net/contact'],
            ],
          ],
        ],
        message,
      ),
    });
  } catch (err) {
    console.error('contact: sendMail failed', err);
    return { ok: false, message: 'Захидал илгээж чадсангүй. Түр хүлээгээд дахин оролдоно уу.' };
  }

  return { ok: true, message: 'Таны захидал илгээгдлээ. Баярлалаа!' };
}

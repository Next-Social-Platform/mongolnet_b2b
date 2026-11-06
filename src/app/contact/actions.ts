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

// Inline styles and tables only: Outlook ignores <style> and most CSS layout.
function html(rows: [string, string][], message: string) {
  const td = 'padding:10px 14px;border-bottom:1px solid #eceef2;font-size:14px;vertical-align:top;';
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f4f5f8;font-family:Inter,Segoe UI,Arial,sans-serif;color:#170f2a;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">
  <tr><td style="background:#4ce233;padding:18px 24px;font-size:18px;font-weight:600;color:#170f2a;">Вэбээс шинэ захидал ирлээ</td></tr>
  <tr><td style="padding:16px 10px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${rows.map(([k, v]) => `      <tr><td style="${td}width:110px;color:#6b6b7b;">${k}</td><td style="${td}font-weight:600;">${v}</td></tr>`).join('\n')}
    </table>
  </td></tr>
  <tr><td style="padding:20px 24px 4px;font-size:13px;color:#6b6b7b;">Захидал</td></tr>
  <tr><td style="padding:0 24px 24px;">
    <div style="background:#f1fcf0;border-left:4px solid #4ce233;border-radius:6px;padding:14px 16px;font-size:14px;line-height:1.6;">${esc(message).replace(/\r?\n/g, '<br>')}</div>
  </td></tr>
  <tr><td style="padding:14px 24px;background:#fafafb;font-size:12px;color:#9a9aa8;">business.mongol.net · ${new Date().toLocaleString('mn-MN', { timeZone: 'Asia/Ulaanbaatar' })}</td></tr>
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

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('contact: SMTP_USER / SMTP_PASS is not set');
    return { ok: false, message: 'Захидал илгээж чадсангүй. Түр хүлээгээд дахин оролдоно уу.' };
  }

  const port = Number(SMTP_PORT) || 587;
  const transport = nodemailer.createTransport({
    host: SMTP_HOST || 'in-v3.mailjet.com',
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: { name: 'business.mongol.net', address: SMTP_FROM || SMTP_USER },
      to: TO,
      subject: `[Вэб] ${subject} - ${name.replace(/\s+/g, ' ')}`,
      text: [`Нэр: ${name}`, `Утас: ${phone}`, `Төрөл: ${subject}`, '', message].join('\n'),
      html: html(
        [
          ['Нэр', esc(name)],
          ['Утас', `<a href="tel:${esc(phone.replace(/[^\d+]/g, ''))}" style="color:#170f2a;">${esc(phone)}</a>`],
          ['Төрөл', esc(subject)],
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

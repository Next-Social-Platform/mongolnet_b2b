'use client';

import type { FormEvent, ReactNode } from 'react';

// The template's form did not send anything. Without a mail server there is nothing to post to, so this opens the visitor's
// e-mail program with the message filled in. Replace handleSubmit with a fetch() to an API route (Resend, SMTP ...) to send it from the site.
const TO = 'contact@nextsocial.mn';

export default function ContactForm({ children, className }: { children: ReactNode; className?: string }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [`Нэр: ${f.get('fullname') ?? ''}`, `Утас: ${f.get('number') ?? ''}`, '', `${f.get('message') ?? ''}`].join('\n');
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(String(f.get('subject') ?? ''))}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

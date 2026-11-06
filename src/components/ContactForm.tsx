'use client';

import { startTransition, useActionState, useEffect, useRef } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { sendContact } from '@/app/contact/actions';

export default function ContactForm({ children, className }: { children: ReactNode; className?: string }) {
  const [state, formAction, pending] = useActionState(sendContact, null);
  const form = useRef<HTMLFormElement>(null);

  // Dispatch by hand instead of <form action>: React resets the form after every action, and a failed send should keep the text.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => formAction(data));
  }

  useEffect(() => {
    if (state?.ok) form.current?.reset();
  }, [state]);

  return (
    <form ref={form} className={className} onSubmit={handleSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {children}
      {state && (
        <p role="status" className={`text-tagline-2 text-center ${state.ok ? 'text-green-600' : 'text-red-500'}`}>
          {state.message}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full first-letter:uppercase before:content-none disabled:opacity-60">
        {pending ? 'Илгээж байна...' : 'Бидэнд илгээх'}
      </button>
    </form>
  );
}

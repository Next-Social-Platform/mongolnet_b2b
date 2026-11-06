import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Scripts from '@/components/Scripts';

// Order matters: Tailwind + the template's CSS first, then Inter, the site's own tweaks and the brand colour last.
import './globals.css';
import './fonts/fonts.css';
import './site.css';
import './theme.css';

export const metadata: Metadata = {
  title: { default: 'Mongol.net – Гишүүнчлэлийн нэгдсэн платформ', template: '%s | Mongol.net' },
  icons: { icon: '/img/favicon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn" className="light" data-force-theme="light">
      <body id="top" className="bg-white" data-theme="app-builder">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

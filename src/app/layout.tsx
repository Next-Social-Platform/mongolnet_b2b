import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Scripts from '@/components/Scripts';
import { OG_BASE, SITE, TWITTER_BASE } from '@/lib/site';

// Order matters: Tailwind + the template's CSS first, then Inter, the site's own tweaks and the brand colour last.
import './globals.css';
import './fonts/fonts.css';
import './site.css';
import './theme.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s | ' + SITE.name },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: { ...OG_BASE, title: SITE.title, description: SITE.description },
  twitter: { ...TWITTER_BASE, title: SITE.title, description: SITE.description },
  icons: { icon: '/img/favicon.svg' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: SITE.themeColor,
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

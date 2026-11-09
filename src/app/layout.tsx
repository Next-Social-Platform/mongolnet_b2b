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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: SITE.themeColor },
    { media: '(prefers-color-scheme: dark)', color: '#170f2a' },
  ],
};

// Анхдагчаар төхөөрөмжийн (системийн) горимыг дагана. Нар/сарны товчоор гараар сольбол сонголтыг хадгалж, түүнийг баримтална.
const THEME_SCRIPT = `(function(){var K='color-theme',d=document,m=window.matchMedia('(prefers-color-scheme: dark)');function g(){try{return localStorage.getItem(K)}catch(e){return null}}function a(t){var c=d.documentElement.classList;c.toggle('dark',t==='dark');c.toggle('light',t!=='dark')}a(g()||(m.matches?'dark':'light'));function s(){if(!g())a(m.matches?'dark':'light')}if(m.addEventListener)m.addEventListener('change',s);else if(m.addListener)m.addListener(s);d.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-theme-toggle]');if(!b)return;var t=d.documentElement.classList.contains('dark')?'light':'dark';a(t);try{localStorage.setItem(K,t)}catch(x){}})})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body id="top" className="bg-white dark:bg-[#0e1218]" data-theme="app-builder">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

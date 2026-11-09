import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Hero, Features, Pricing, Projects, Audience, Faq } from '@/components/home';
import { OG_BASE, SITE, TWITTER_BASE } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { ...OG_BASE, url: '/', title: SITE.title, description: SITE.description },
  twitter: { ...TWITTER_BASE, title: SITE.title, description: SITE.description },
};

// Хайлтын системд байгууллага болон сайтыг тодорхойлох бүтэцтэй өгөгдөл (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': SITE.url + '/#organization',
      name: SITE.name,
      url: SITE.url,
      logo: SITE.url + '/img/logo.svg',
      email: SITE.email,
      telephone: SITE.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address,
        addressCountry: 'MN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: 'MN',
        availableLanguage: 'mn',
      },
    },
    {
      '@type': 'WebSite',
      '@id': SITE.url + '/#website',
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'mn',
      publisher: { '@id': SITE.url + '/#organization' },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header isHome />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Projects />
        <Audience />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

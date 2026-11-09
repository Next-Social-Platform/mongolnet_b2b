import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { OG_BASE, SITE, TWITTER_BASE } from '@/lib/site';

const title = 'Холбоо барих';
const description =
  'Системийн талаар асуух зүйл, техникийн тусламж эсвэл зөвлөгөө хэрэгтэй бол Business.mongol.net-ийн багтай холбогдоорой. Утас ' +
  SITE.phone +
  ', и-мэйл ' +
  SITE.email +
  '.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { ...OG_BASE, url: '/contact', title: title + ' | ' + SITE.name, description },
  twitter: { ...TWITTER_BASE, title: title + ' | ' + SITE.name, description },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

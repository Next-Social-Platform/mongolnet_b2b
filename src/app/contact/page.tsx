import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata: Metadata = { title: 'Холбоо барих' };

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

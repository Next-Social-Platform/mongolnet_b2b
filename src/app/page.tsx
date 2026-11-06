import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Hero, Features, HowItWorks, Pricing, Audience, Faq } from '@/components/home';

export default function HomePage() {
  return (
    <>
      <Header isHome />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Audience />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

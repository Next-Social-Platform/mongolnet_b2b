import Header from "@/components/Header";
import PageEffects from "@/components/PageEffects";
import Clients from "@/components/sections/Clients";
import Creators from "@/components/sections/Creators";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Integration from "@/components/sections/Integration";
import Pricing from "@/components/sections/Pricing";
import Results from "@/components/sections/Results";
import Steps from "@/components/sections/Steps";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Creators />
        <Steps />
        <Pricing />
        <Results />
        <Integration />
      </main>
      <Footer />
      <PageEffects />
    </>
  );
}

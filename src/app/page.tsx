import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Steps from "@/components/sections/Steps";
import Testimonials from "@/components/sections/Testimonials";
import Waitlist from "@/components/sections/Waitlist";
import QrSection from "@/components/sections/QrSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Solution />
        <Features />
        <Showcase />
        <TechStack />
        <Services />
        <Steps />
        <Testimonials />
        <Waitlist />
        <QrSection />
      </main>
      <Footer />
    </>
  );
}

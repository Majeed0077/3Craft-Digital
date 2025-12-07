// app/page.tsx

import Header from "./components/Header"
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import WhySection from "./components/WhySection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

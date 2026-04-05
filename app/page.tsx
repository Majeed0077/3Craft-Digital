import Header from "./components/Header";
import Hero from "./components/Hero";
// import TeamSection from "./components/TeamSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import WhySection from "./components/WhySection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToggle from "./components/ScrollToggle";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "3Craft Digital",
  url: "https://3craft.digital",
  logo: "https://3craft.digital/Image/3craft%20digital.png",
  image: "https://3craft.digital/Image/3craft%20digital.png",
  email: "info@3craftdigital.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  sameAs: [
    "https://www.instagram.com/3craftdigital/",
    "https://www.linkedin.com/company/3craftdigital/",
    "https://x.com/3Craftdigital",
    "https://www.facebook.com/profile.php?id=61576706516191&sk=about_places",
  ],
  serviceType: [
    "Brand identity design",
    "Website design",
    "Shopify design",
    "WordPress website design",
    "Social media design",
    "Landing page design",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "3Craft Digital",
  url: "https://3craft.digital",
  description:
    "Creative studio delivering branding, websites, Shopify, WordPress, and social media design for Pakistan and global clients.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Hero />
        {/* <TeamSection /> */}
        <ServicesSection />
        <PortfolioSection />
        <WhySection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToggle />
    </>
  );
}

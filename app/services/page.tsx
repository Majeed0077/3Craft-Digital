import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "../data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore 3Craft Digital services for branding, website design, Shopify, WordPress, and social media design for Pakistan and global clients.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="service-page-hero">
        <div className="container">
          <div className="section-header service-page-header">
            <div className="section-kicker">Services</div>
            <h1>Design services built for businesses in Pakistan and beyond.</h1>
            <p>
              Explore focused service pages for branding, websites, Shopify,
              WordPress, and social media design. Each service is built to help
              businesses look sharper and convert more clearly.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-top">
                  <span className="service-pill">{service.kicker}</span>
                </div>
                <h2 className="service-card-title">{service.shortName}</h2>
                <p>{service.metaDescription}</p>
                <div className="service-card-actions">
                  <Link href={`/services/${service.slug}`} className="btn btn-outline">
                    View Service Page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

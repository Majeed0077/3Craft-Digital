import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_CASE_STUDIES } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Browse 3Craft Digital case studies across branding, websites, landing pages, social media design, and packaging projects.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main>
      <section className="service-page-hero">
        <div className="container">
          <div className="section-header service-page-header">
            <div className="section-kicker">Case Studies</div>
            <h1>Selected work across branding, websites, and conversion-focused design.</h1>
            <p>
              These case studies show how we approach visual identity, service
              websites, landing pages, social content systems, and packaging
              with a sharper strategic lens.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container work-case-grid">
          {PORTFOLIO_CASE_STUDIES.map((item) => (
            <article key={item.slug} className="service-detail-card work-case-card">
              <div className="work-case-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="work-case-meta">
                <span className="service-pill">{item.category}</span>
                <span className="portfolio-year">{item.year}</span>
              </div>
              <h2 className="service-card-title">{item.title}</h2>
              <p>{item.summary}</p>
              <div className="service-card-actions">
                <Link href={`/work/${item.slug}`} className="btn btn-outline">
                  View Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

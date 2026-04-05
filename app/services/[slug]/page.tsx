import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SERVICES_BY_SLUG } from "../../data/services";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];

  if (!service) {
    return {};
  }

  const path = `/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: path,
      type: "article",
    },
    twitter: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "3Craft Digital",
      url: "https://3craft.digital",
    },
    areaServed: ["Pakistan", "Worldwide"],
    serviceType: service.name,
    url: `https://3craft.digital/services/${service.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://3craft.digital",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://3craft.digital/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortName,
        item: `https://3craft.digital/services/${service.slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="service-page-hero">
        <div className="container service-page-grid">
          <div className="service-page-copy">
            <div className="section-kicker">{service.kicker}</div>
            <h1>{service.heroTitle}</h1>
            <p className="service-page-lead">{service.heroDescription}</p>
            <div className="service-page-actions">
              <Link href="/#contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link href="/services" className="btn btn-outline">
                View All Services
              </Link>
            </div>
          </div>
          <aside className="service-page-highlight">
            <div className="service-page-panel">
              <span className="service-pill">Why this service</span>
              <p>{service.intro}</p>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="container service-detail-sections">
          <article className="service-detail-card">
            <h2>What’s included</h2>
            <ul className="service-detail-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="service-detail-card">
            <h2>How we approach it</h2>
            <ol className="service-detail-list service-detail-list-numbered">
              {service.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>

          <article className="service-detail-card">
            <h2>Best fit for</h2>
            <ul className="service-detail-list">
              {service.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">FAQs</div>
            <h2>{service.shortName} questions businesses usually ask</h2>
          </div>
          <div className="service-faq-grid">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="service-detail-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <p>
              Planning a {service.shortName.toLowerCase()} project? We can scope
              the work, timeline, and best starting point.
            </p>
            <div className="section-cta-actions">
              <Link href="/#contact" className="btn btn-outline">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

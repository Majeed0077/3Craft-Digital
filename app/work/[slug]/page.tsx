import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_BY_SLUG, PORTFOLIO_CASE_STUDIES } from "../../data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return PORTFOLIO_CASE_STUDIES.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = PORTFOLIO_BY_SLUG[slug];

  if (!item) return {};

  const path = `/work/${item.slug}`;

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: item.metaTitle,
      description: item.metaDescription,
      url: path,
      type: "article",
      images: [item.image],
    },
    twitter: {
      title: item.metaTitle,
      description: item.metaDescription,
      images: [item.image],
    },
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = PORTFOLIO_BY_SLUG[slug];

  if (!item) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: item.title,
    description: item.metaDescription,
    image: item.gallery.map((image) => `https://3craft.digital${image}`),
    author: {
      "@type": "Organization",
      name: "3Craft Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "3Craft Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://3craft.digital/Image/3craft%20digital.png",
      },
    },
    about: item.services,
    url: `https://3craft.digital/work/${item.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="service-page-hero">
        <div className="container service-page-grid">
          <div className="service-page-copy">
            <div className="section-kicker">{item.category}</div>
            <h1>{item.title}</h1>
            <p className="service-page-lead">{item.summary}</p>
            <div className="work-detail-meta">
              <span>{item.client}</span>
              <span>{item.industry}</span>
              <span>{item.location}</span>
            </div>
          </div>
          <aside className="service-page-highlight">
            <div className="service-page-panel">
              <span className="service-pill">Outcome</span>
              <p>{item.outcome}</p>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="work-gallery-grid">
            {item.gallery.map((image, index) => (
              <div key={`${item.slug}-${index}`} className="work-gallery-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={`${item.title} visual ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container service-detail-sections">
          <article className="service-detail-card">
            <h2>The challenge</h2>
            <p>{item.challenge}</p>
          </article>

          <article className="service-detail-card">
            <h2>What we did</h2>
            <ul className="service-detail-list">
              {item.solution.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="service-detail-card">
            <h2>Results</h2>
            <ul className="service-detail-list">
              {item.results.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-cta">
            <p>
              Need similar results for your brand, website, or campaign? We can
              map the right scope and next steps.
            </p>
            <div className="section-cta-actions">
              <Link href="/#contact" className="btn btn-outline">
                Discuss Your Project
              </Link>
              <Link href="/work" className="btn btn-outline">
                Back to Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

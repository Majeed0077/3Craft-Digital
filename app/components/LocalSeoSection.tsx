import Link from "next/link";

export default function LocalSeoSection() {
  return (
    <section className="local-seo">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Local + Global</div>
          <h2>Design studio serving Pakistan and international clients.</h2>
          <p>
            3Craft Digital works with businesses across Pakistan and remotely
            with international brands that need branding, website design,
            Shopify support, WordPress design, and social media visuals.
          </p>
        </div>

        <div className="service-detail-sections">
          <article className="service-detail-card">
            <h3>For businesses across Pakistan</h3>
            <p>
              We help local businesses upgrade how they look online with
              clearer branding, stronger websites, and more consistent social
              media design. That includes companies launching, rebranding, or
              improving lead generation through a better digital presence.
            </p>
          </article>

          <article className="service-detail-card">
            <h3>For global brands and remote teams</h3>
            <p>
              We also collaborate remotely with international startups,
              agencies, and service businesses that need a compact, design-led
              partner for visual systems, conversion-focused pages, and launch
              assets.
            </p>
          </article>

          <article className="service-detail-card">
            <h3>High-intent services we focus on</h3>
            <ul className="service-detail-list">
              <li>Brand identity design and brand kits</li>
              <li>Website design for service businesses and landing pages</li>
              <li>Shopify design and WordPress design support</li>
              <li>Social media design systems and campaign visuals</li>
            </ul>
          </article>
        </div>

        <div className="section-cta">
          <p>Explore focused service pages or review detailed project case studies.</p>
          <div className="section-cta-actions">
            <Link href="/services" className="btn btn-outline">
              Explore Services
            </Link>
            <Link href="/work" className="btn btn-outline">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

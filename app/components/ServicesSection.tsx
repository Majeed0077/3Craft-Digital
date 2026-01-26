// components/ServicesSection.tsx

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Services</div>
          <h2>What we design</h2>
          <p>
            High-impact creative for brands and businesses that need more than
            just a logo.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l7 9-7 9-7-9 7-9z" />
                </svg>
              </div>
              <span className="service-pill">Brand Systems</span>
            </div>
            <h3>Brand Identity Systems</h3>
            <p>
              Logos, typography, color and rules built as a clear, scalable
              identity - not just one file.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 7h14M5 12h14M5 17h14" />
                </svg>
              </div>
              <span className="service-pill">Visual Language</span>
            </div>
            <h3>Visual Branding</h3>
            <p>
              Social assets, layouts, and branded collateral that keep your
              identity consistent everywhere.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9z" />
                </svg>
              </div>
              <span className="service-pill">Web Build</span>
            </div>
            <h3>CMS Website Development</h3>
            <p>
              Clean, fast sites on WordPress, Wix, or Shopify with clear
              structure and messaging.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.7-5.2 2.7 1-5.9L3.5 9.2l5.9-.9L12 3z" />
                </svg>
              </div>
              <span className="service-pill">Toolkit</span>
            </div>
            <h3>Brand Kits</h3>
            <p>
              Logo files, color codes, font choices, and usage guides in one
              simple, ready-to-use system.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16v12H4zM7 9h6M7 13h10" />
                </svg>
              </div>
              <span className="service-pill">UX Layouts</span>
            </div>
            <h3>Web UI Layouts</h3>
            <p>
              Conversion-oriented layouts for landing pages, portfolios, and
              business websites.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 18h9a4 4 0 0 0 0-8 5 5 0 0 0-9-1 3.5 3.5 0 0 0 0 9z" />
                </svg>
              </div>
              <span className="service-pill">Campaigns</span>
            </div>
            <h3>Ad &amp; Campaign Creatives</h3>
            <p>
              Banners and campaign visuals designed to support your brand and
              goals.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 4h12v16H6zM9 8h6M9 12h6M9 16h4" />
                </svg>
              </div>
              <span className="service-pill">Print</span>
            </div>
            <h3>Business Cards &amp; Stationery</h3>
            <p>
              Minimal, premium print-ready assets to match your digital
              identity.
            </p>
          </div>

          <div className="service-card">
            <div className="service-top">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4" />
                </svg>
              </div>
              <span className="service-pill">Packaging</span>
            </div>
            <h3>Packaging &amp; Labels</h3>
            <p>
              On-shelf designs that feel premium and instantly recognizable.
            </p>
          </div>
        </div>

        <div className="section-cta">
          <p>Ready to plan a project? We will map scope, timeline, and next steps.</p>
          <div className="section-cta-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/ServicesSection.tsx

export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>What we design</h2>
          <p>
            High-impact creative for brands and businesses that need more than
            “just a logo”.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">◆</div>
            <h3>Brand Identity Systems</h3>
            <p>
              Logos, typography, color and rules built as a clear, scalable
              identity – not just one file.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">☰</div>
            <h3>Visual Branding</h3>
            <p>
              Social assets, layouts, and branded collateral that keep your
              identity consistent everywhere.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⌂</div>
            <h3>CMS Website Development</h3>
            <p>
              Clean, fast sites on WordPress, Wix, or Shopify with clear
              structure and messaging.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">★</div>
            <h3>Brand Kits</h3>
            <p>
              Logo files, color codes, font choices, and usage guides in one
              simple, ready-to-use system.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▤</div>
            <h3>Web UI Layouts</h3>
            <p>
              Conversion-oriented layouts for landing pages, portfolios, and
              business websites.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">☁</div>
            <h3>Ad &amp; Campaign Creatives</h3>
            <p>
              Banners and campaign visuals designed to support your brand and
              goals.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▤</div>
            <h3>Business Cards &amp; Stationery</h3>
            <p>
              Minimal, premium print-ready assets to match your digital
              identity.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">▣</div>
            <h3>Packaging &amp; Labels</h3>
            <p>
              On-shelf designs that feel premium and instantly recognizable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

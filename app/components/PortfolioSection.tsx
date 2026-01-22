// components/PortfolioSection.tsx

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Portfolio</div>
          <h2>Selected work previews</h2>
          <p>
            A glimpse into the brand identities, visuals, and web directions
            we`ve crafted.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-meta">
              <span className="pill">Brand Identity</span>
              <span className="portfolio-year">2024</span>
            </div>
            <strong className="portfolio-title">Logo + system for a modern startup</strong>
            <span className="portfolio-sub">Identity system, guidelines</span>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-meta">
              <span className="pill">CMS Website</span>
              <span className="portfolio-year">2024</span>
            </div>
            <strong className="portfolio-title">
              Responsive CMS site for a service brand
            </strong>
            <span className="portfolio-sub">UX, UI, development</span>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-meta">
              <span className="pill">Visual Branding</span>
              <span className="portfolio-year">2024</span>
            </div>
            <strong className="portfolio-title">
              Social media and stationery kit
            </strong>
            <span className="portfolio-sub">Brand collateral, assets</span>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-meta">
              <span className="pill">Landing Page</span>
              <span className="portfolio-year">2023</span>
            </div>
            <strong className="portfolio-title">
              Conversion-focused landing page layout
            </strong>
            <span className="portfolio-sub">Messaging, UX flow</span>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-meta">
              <span className="pill">Campaign Assets</span>
              <span className="portfolio-year">2023</span>
            </div>
            <strong className="portfolio-title">
              Ad and banner set for a launch
            </strong>
            <span className="portfolio-sub">Paid + organic formats</span>
          </div>
          <div className="portfolio-item">
            <div className="portfolio-meta">
              <span className="pill">Packaging</span>
              <span className="portfolio-year">2023</span>
            </div>
            <strong className="portfolio-title">
              Minimal product label &amp; box design
            </strong>
            <span className="portfolio-sub">Print, dielines, mockups</span>
          </div>
        </div>
      </div>
    </section>
  );
}

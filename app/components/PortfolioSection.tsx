// components/PortfolioSection.tsx

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Selected work previews</h2>
          <p>
            A glimpse into the brand identities, visuals, and web directions
            we’ve crafted.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item">
            <span className="pill">Brand Identity</span>
            <strong>Logo + system for a modern startup</strong>
          </div>
          <div className="portfolio-item">
            <span className="pill">CMS Website</span>
            <strong>Responsive CMS site for a service brand</strong>
          </div>
          <div className="portfolio-item">
            <span className="pill">Visual Branding</span>
            <strong>Social media and stationery kit</strong>
          </div>
          <div className="portfolio-item">
            <span className="pill">Landing Page</span>
            <strong>Conversion-focused landing page layout</strong>
          </div>
          <div className="portfolio-item">
            <span className="pill">Campaign Assets</span>
            <strong>Ad and banner set for a launch</strong>
          </div>
          <div className="portfolio-item">
            <span className="pill">Packaging</span>
            <strong>Minimal product label &amp; box design</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

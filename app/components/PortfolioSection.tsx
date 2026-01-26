// components/PortfolioSection.tsx

const PORTFOLIO_ITEMS = [
  {
    label: "Brand Identity",
    year: "2024",
    title: "Logo + system for a modern startup",
    sub: "Identity system, guidelines",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Brand+Identity",
  },
  {
    label: "CMS Website",
    year: "2024",
    title: "Responsive CMS site for a service brand",
    sub: "UX, UI, development",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=CMS+Website",
  },
  {
    label: "Visual Branding",
    year: "2024",
    title: "Social media and stationery kit",
    sub: "Brand collateral, assets",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Visual+Branding",
  },
  {
    label: "Landing Page",
    year: "2023",
    title: "Conversion-focused landing page layout",
    sub: "Messaging, UX flow",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Landing+Page",
  },
  {
    label: "Campaign Assets",
    year: "2023",
    title: "Ad and banner set for a launch",
    sub: "Paid + organic formats",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Campaign+Assets",
  },
  {
    label: "Packaging",
    year: "2023",
    title: "Minimal product label & box design",
    sub: "Print, dielines, mockups",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Packaging",
  },
];

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
          {PORTFOLIO_ITEMS.map((item) => (
            <div className="portfolio-item" key={`${item.label}-${item.year}`}>
              <div className="portfolio-media">
                <img src={item.image} alt={`${item.label} preview`} loading="lazy" />
              </div>
              <div className="portfolio-meta">
                <span className="pill">{item.label}</span>
                <span className="portfolio-year">{item.year}</span>
              </div>
              <strong className="portfolio-title">{item.title}</strong>
              <span className="portfolio-sub">{item.sub}</span>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <p>Like what you see? Let us scope a focused, premium build.</p>
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

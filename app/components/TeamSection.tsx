// components/TeamSection.tsx

export default function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2>The 3Craft team structure</h2>
          <p>Three specialists. One unified brand + web system.</p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <h3>Brand Designer</h3>
            <p>
              Crafts the core brand identity, logo system, typography, colors,
              and visual direction for a sharp, modern brand presence.
            </p>
          </div>

          <div className="team-card">
            <h3>Creative Designer</h3>
            <p>
              Builds the extended visual system including social assets,
              packaging, stationery, layouts, and brand collateral for consistent
              real-world use.
            </p>
          </div>

          <div className="team-card">
            <h3>Technical &amp; Business Lead</h3>
            <p>
              Handles CMS website development, UX layouts, hosting setup, and
              technical execution. Manages client communication, proposals, and
              project delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/WhySection.tsx

export default function WhySection() {
  return (
    <section className="why">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Why us</div>
          <h2>Why brands work with 3Craft Digital</h2>
          <p>No fluff. No confusing process. Just sharp design and clear communication.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-top">
              <span className="why-badge">01</span>
              <span className="why-pill">Structure</span>
            </div>
            <h3>3-specialist structure</h3>
            <p>
              Brand, creative, and development handled by specialists - not one
              person guessing everything.
            </p>
          </div>
          <div className="why-card">
            <div className="why-top">
              <span className="why-badge">02</span>
              <span className="why-pill">Speed</span>
            </div>
            <h3>Fast, focused delivery</h3>
            <p>
              Clear timelines, fast revisions, and tight execution so your
              project doesn`t drag.
            </p>
          </div>
          <div className="why-card">
            <div className="why-top">
              <span className="why-badge">03</span>
              <span className="why-pill">Quality</span>
            </div>
            <h3>Clean, premium style</h3>
            <p>
              High-contrast, modern visuals that make your brand look like it
              belongs at the top of the market.
            </p>
          </div>
          <div className="why-card">
            <div className="why-top">
              <span className="why-badge">04</span>
              <span className="why-pill">Communication</span>
            </div>
            <h3>Serious about communication</h3>
            <p>
              Direct, honest communication from a dedicated lead handling all
              client interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

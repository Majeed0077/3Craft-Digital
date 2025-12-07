// components/ProcessSection.tsx

export default function ProcessSection() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-header">
          <h2>How projects run with us</h2>
          <p>A simple 4-step pipeline so you always know what’s happening next.</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="process-circle">1</div>
            <h3>Discover</h3>
            <p>
              We clarify your goals, audience, and style so we’re not guessing
              in Figma.
            </p>
          </div>
          <div className="process-step">
            <div className="process-circle">2</div>
            <h3>Design</h3>
            <p>
              We build bold, clear concepts for your brand identity or website.
            </p>
          </div>
          <div className="process-step">
            <div className="process-circle">3</div>
            <h3>Refine</h3>
            <p>
              You give feedback, we iterate fast, and we clean up every detail.
            </p>
          </div>
          <div className="process-step">
            <div className="process-circle">4</div>
            <h3>Deliver</h3>
            <p>
              Final files, organized, export-ready, and easy to use across your
              platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

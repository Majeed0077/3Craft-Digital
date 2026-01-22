// components/TestimonialsSection.tsx

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Testimonials</div>
          <h2>Clients on working with 3Craft</h2>
          <p>Real feedback from brands and creators we’ve designed for.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="testimonial-rating">5.0</span>
              <span className="testimonial-tag">Brand Identity</span>
            </div>
            <p className="testimonial-quote">
              “They didn’t just design a logo. They built a visual identity that
              finally made my brand feel serious.”
            </p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">SF</div>
              <div>
                <div className="testimonial-name">Startup Founder</div>
                <div className="testimonial-role">B2B SaaS · Karachi</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="testimonial-rating">5.0</span>
              <span className="testimonial-tag">Web + Visuals</span>
            </div>
            <p className="testimonial-quote">
              “Our website and visuals now look like they belong to a top-tier
              brand.”
            </p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">BO</div>
              <div>
                <div className="testimonial-name">Business Owner</div>
                <div className="testimonial-role">Retail Group · Dubai</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="testimonial-rating">5.0</span>
              <span className="testimonial-tag">Design Partner</span>
            </div>
            <p className="testimonial-quote">
              “Communication was sharp, deadlines were clear, and the designs
              were exactly what we needed.”
            </p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">AP</div>
              <div>
                <div className="testimonial-name">Agency Partner</div>
                <div className="testimonial-role">Creative Studio · London</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

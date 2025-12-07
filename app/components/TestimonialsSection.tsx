// components/TestimonialsSection.tsx

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Clients on working with 3Craft</h2>
          <p>Real feedback from brands and creators we’ve designed for.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              “They didn’t just design a logo. They built a visual identity that
              finally made my brand feel serious.”
            </p>
            <div className="testimonial-meta">— Startup Founder</div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              “Our website and visuals now look like they belong to a top-tier
              brand.”
            </p>
            <div className="testimonial-meta">— Business Owner</div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              “Communication was sharp, deadlines were clear, and the designs
              were exactly what we needed.”
            </p>
            <div className="testimonial-meta">— Agency Partner</div>
          </div>
        </div>
      </div>
    </section>
  );
}

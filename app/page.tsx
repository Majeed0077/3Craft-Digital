"use client";
import React from "react";

export default function HomePage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="container header-inner">
          <a href="#hero" className="logo-wrap">
            <div className="logo-mark">
              {/* Replace this svg with your final logo if you want */}
              <span className="logo-icon-svg">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path
                    d="M10 14h32l-9 10h-14l14 16-11 12-12-14 12-12h10"
                    fill="none"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                  />
                </svg>
              </span>
            </div>
            <div className="logo-text-group">
              <div className="logo-text-main">3Craft Digital</div>
              <div className="logo-text-sub">Design that demands attention</div>
            </div>
          </a>

          <nav>
            <a href="#services">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#team">Team</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Clients</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="btn btn-primary">
            Start a Project
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container hero-inner">
          <div>
            <div className="hero-kicker">Performance-Driven Creative Studio</div>
            <h1>Design that demands attention and drives action.</h1>
            <p className="hero-subtext">
              3Craft Digital builds modern brand identities and clean, conversion-focused CMS
              websites. A compact 3-specialist studio combining brand design, visual systems,
              and technical development into one sharp digital experience.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get a custom quote
              </a>
              <a href="#portfolio" className="btn btn-outline">
                See recent work
              </a>
            </div>
            <div className="hero-meta">
              <span className="dot" />
              <span>Average response time: under 1 hour</span>
            </div>
          </div>

          <div className="hero-visual hero-orbit">
            <div className="hero-orbit-circle" />

            <div className="hero-orbit-card hero-orbit-card-left">
              <div className="hero-orbit-pill">CMS Development</div>
              <h4>WordPress, Wix, Shopify</h4>
              <p>Clean, modern and fully responsive.</p>
            </div>

            <div className="hero-orbit-card hero-orbit-card-right">
              <div className="hero-orbit-pill hero-orbit-pill-blue">
                Brand Identity
              </div>
              <h4>Modern, sharp & professional</h4>
              <p>Built to make your business stand out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / TEAM */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>The 3Craft team structure</h2>
            <p>Three specialists. One focused outcome: visuals that perform.</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <h3>Brand Designer</h3>
              <p>
                Crafts the core brand identity — logo system, typography, colors, and
                visual direction for a sharp, modern brand presence.
              </p>
            </div>

            <div className="team-card">
              <h3>Creative Designer</h3>
              <p>
                Builds the extended visual system including social assets, packaging,
                stationery, layouts, and brand collateral for consistent real-world use.
              </p>
            </div>

            <div className="team-card">
              <h3>Technical & Business Lead</h3>
              <p>
                Handles CMS website development, UX layouts, hosting setup, and technical
                execution. Manages client communication, proposals, and project delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>What we design</h2>
            <p>
              High-impact creative for brands and creators who need more than “just
              a logo”.
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
              <div className="service-icon">▶</div>
              <h3>CTR-Optimized Thumbnails</h3>
              <p>
                Bold compositions, focused messaging, and contrast designed to win
                more clicks.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">☰</div>
              <h3>Social Media Creative</h3>
              <p>
                Feed, story, and ad designs that stop the scroll and keep your brand
                recognizable.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">★</div>
              <h3>Brand Kits</h3>
              <p>
                Logo files, color codes, font choices, and usage guides in one
                simple system.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">⌂</div>
              <h3>Conversion-Focused Websites</h3>
              <p>
                Clean, fast sites on WordPress, Wix, or Shopify with clear structure
                and messaging.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">☁</div>
              <h3>Banners &amp; Ad Creative</h3>
              <p>
                Display banners and campaign assets built to match your brand and
                goals.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">▤</div>
              <h3>Business Cards &amp; Stationery</h3>
              <p>
                Minimal, premium offline assets to match your digital identity.
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

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Selected work previews</h2>
            <p>
              Some of the logo, branding, thumbnail and web directions we’ve
              crafted.
            </p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <span className="pill">Brand Identity</span>
              <strong>Logo + system for a modern startup</strong>
            </div>
            <div className="portfolio-item">
              <span className="pill">YouTube</span>
              <strong>High-CTR thumbnail series for creator</strong>
            </div>
            <div className="portfolio-item">
              <span className="pill">Social Pack</span>
              <strong>Instagram grid and story kit</strong>
            </div>
            <div className="portfolio-item">
              <span className="pill">Website</span>
              <strong>Clean, conversion-first landing page</strong>
            </div>
            <div className="portfolio-item">
              <span className="pill">Ads</span>
              <strong>Display ad set for campaign</strong>
            </div>
            <div className="portfolio-item">
              <span className="pill">Packaging</span>
              <strong>Minimal product label &amp; box design</strong>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <div className="container">
          <div className="section-header">
            <h2>Why brands work with 3Craft Digital</h2>
            <p>No fluff. No confusing process. Just sharp creative and clear communication.</p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>3-expert structure</h3>
              <p>
                Branding, content, and development handled by specialists—not one
                person guessing everything.
              </p>
            </div>
            <div className="why-card">
              <h3>Fast, focused delivery</h3>
              <p>
                Clear timelines, fast revisions, and tight execution so your project
                doesn’t drag.
              </p>
            </div>
            <div className="why-card">
              <h3>Clean, premium style</h3>
              <p>
                High-contrast, modern visuals that make your brand look like it
                belongs at the top of the market.
              </p>
            </div>
            <div className="why-card">
              <h3>Serious about communication</h3>
              <p>
                Direct, honest communication from a dedicated lead (you) handling all
                client interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
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
                We clarify your goals, audience, and style so we’re not guessing in
                Figma.
              </p>
            </div>
            <div className="process-step">
              <div className="process-circle">2</div>
              <h3>Design</h3>
              <p>
                We build bold, clear concepts for your brand, thumbnails, or
                website.
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

      {/* TESTIMONIALS */}
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
                “CTR went up, and the thumbnails look like they belong to a top-tier
                channel now.”
              </p>
              <div className="testimonial-meta">— YouTube Creator</div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>
                “Communication was sharp, deadlines were clear, and the designs were
                exactly what we needed.”
              </p>
              <div className="testimonial-meta">— Agency Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container contact-inner">
          <div>
            <div className="contact-tag">Let’s work together</div>
            <h2>Tell us what you need. We’ll tell you how we’d solve it.</h2>
            <p>
              Send a quick overview of your brand, project, and deadline. We’ll reply
              with a clear game plan, pricing, and timeline — no fluff, no pressure.
            </p>
            <p style={{ marginTop: "18px", fontSize: "0.95rem" }}>
              Prefer Upwork? We can also work fully through Upwork with milestones
              and protection.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="form-control"
                type="email"
                placeholder="Your best email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">What do you need?</label>
              <input
                id="service"
                className="form-control"
                type="text"
                placeholder="Branding, thumbnails, website, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="details">Project details</label>
              <textarea
                id="details"
                className="form-control"
                rows={4}
                placeholder="Share a bit about your brand, style, and timeline."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-inner">
          <div>© 2025 3Craft Digital. All rights reserved.</div>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

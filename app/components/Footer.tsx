// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-mark">3Craft Digital</div>
          <p className="footer-tagline">
            Design + Development Studio Crafting Brand Systems and Digital
            Experiences.
          </p>
          <div className="footer-meta">Location: NASTP Karachi</div>
        </div>

        <div className="footer-block">
          <h4>Explore</h4>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-block">
          <h4>Connect</h4>
          <a href="https://www.facebook.com/profile.php?id=61576706516191&sk=about_places" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/3craftdigital/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://behance.net/" target="_blank" rel="noreferrer">
            Behance
          </a>
          
        </div>

        <div className="footer-block">
          <h4>Start a project</h4>
          <p>Tell us your goal and timeline. We reply with a clear plan.</p>
          <a className="btn btn-outline footer-cta" href="#contact">
            Get a quote
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2025 3Craft Digital. All rights reserved.</span>
        <span>Built in Karachi for global brands.</span>
      </div>
    </footer>
  );
}

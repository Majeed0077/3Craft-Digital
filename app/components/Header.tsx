// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container header-inner">
        <a href="#hero" className="logo-wrap">
          <div className="logo-mark">
            <Image
              src="/Image/3-mark.png"
              alt="3Craft Digital logo"
              width={39}
              height={39}
            />
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
  );
}

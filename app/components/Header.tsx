"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <div className="container header-inner">
        <a href="#hero" className="logo-wrap" onClick={closeMenu}>
          <div className="logo-mark">
            <Image
              src="/Image/3-mark.png"
              alt="3Craft Digital logo"
              width={39}
              height={39}
              priority
            />
          </div>
          <div className="logo-text-group">
            <div className="logo-text-main">3Craft Digital</div>
            <div className="logo-text-sub">Design that demands attention</div>
          </div>
        </a>
        {/* Desktop nav */}
        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
          <a href="#team">Team</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Clients</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary desktop-cta">
            Start a Project
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className={`burger ${open ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`mobile-nav-overlay ${open ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Menu Panel */}
      <div
        id={panelId}
        className={`mobile-nav ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-inner">
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#portfolio" onClick={closeMenu}>
            Work
          </a>
          <a href="#team" onClick={closeMenu}>
            Team
          </a>
          <a href="#process" onClick={closeMenu}>
            Process
          </a>
          <a href="#testimonials" onClick={closeMenu}>
            Clients
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelTitleId = useId();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  const toggleMenu = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  const getFocusable = useCallback(() => {
    if (!panelRef.current) return [];
    const nodes = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    return Array.from(nodes);
  }, []);

  // Close on ESC + focus trap
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, getFocusable, open]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [open]);

  // Focus management when menu opens/closes
  useEffect(() => {
    if (open) {
      lastActiveRef.current = document.activeElement as HTMLElement | null;
      const focusable = getFocusable();
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        panelRef.current?.focus();
      }
      return;
    }

    const fallback = toggleRef.current;
    (lastActiveRef.current || fallback)?.focus();
  }, [getFocusable, open]);

  // Close on hash change
  useEffect(() => {
    if (!open) return;
    const onHashChange = () => closeMenu();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [closeMenu, open]);

  // Close when switching to desktop layout
  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth > 1024) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu, open]);

  return (
    <header>
      <div className="container header-inner">
        <a href="#hero" className="logo-wrap" onClick={closeMenu}>
          <div className="logo-mark">
            <Image
              src="/Image/3-mark-logo-design.png"
              alt="3Craft Digital logo"
              width={72}
              height={72}
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
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
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
            onClick={toggleMenu}
            ref={toggleRef}
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
        aria-labelledby={panelTitleId}
        ref={panelRef}
        tabIndex={-1}
      >
        <div id={panelTitleId} className="sr-only">
          Mobile navigation
        </div>
        <div className="mobile-nav-inner">
          <ul className="nav-list mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn btn-primary mobile-cta"
            onClick={closeMenu}
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}

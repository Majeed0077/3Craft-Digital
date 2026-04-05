"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef({ x: 0, y: 0 });
  const reduceMotionRef = useRef(false);
  const pointerFineRef = useRef(true);

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");

    const updateSettings = () => {
      reduceMotionRef.current = reduceQuery.matches;
      pointerFineRef.current = pointerQuery.matches;

      if (reduceMotionRef.current || !pointerFineRef.current) {
        setOffset({ x: 0, y: 0 });
      }
    };

    updateSettings();

    if (reduceQuery.addEventListener) {
      reduceQuery.addEventListener("change", updateSettings);
      pointerQuery.addEventListener("change", updateSettings);
    } else {
      reduceQuery.addListener(updateSettings);
      pointerQuery.addListener(updateSettings);
    }

    return () => {
    const legacy = reduceQuery as MediaQueryList & {
  addListener?: (cb: () => void) => void;
  removeListener?: (cb: () => void) => void;
};

if (legacy.addListener) {
  legacy.addListener(updateSettings);
} else {
  reduceQuery.addEventListener("change", updateSettings);
}

    };
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (reduceMotionRef.current || !pointerFineRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) * 0.025; // was 0.01
      const y = (e.clientY - window.innerHeight / 2) * 0.025; // was 0.01
      lastRef.current = { x, y };

      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        setOffset(lastRef.current);
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        {/* LEFT TEXT BLOCK */}
        <div>
          <div className="hero-kicker">Creative Studio for Pakistan and Global Clients</div>
          <h1>Branding, website design, Shopify, WordPress, and social media visuals that drive action.</h1>
          <p className="hero-subtext">
            3Craft Digital helps businesses across Pakistan and internationally
            with modern branding, conversion-focused website design, Shopify
            storefront direction, WordPress page systems, and social media
            design built to look premium and perform clearly.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View Work
            </a>
          </div>

          <div className="hero-meta">
            <span className="dot" />
            <span>Average response time: under 15 minutes for new project inquiries</span>
          </div>
        </div>

        {/* RIGHT — ANIMATED VISUAL */}
        <div
          className="hero-visual hero-orbit"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: "transform 0.08s ease-out",
          }}
        >
          <div className="hero-orbit-ring ring-1" />
          <div className="hero-orbit-ring ring-2" />
          <div className="hero-orbit-circle" />

          {/* LEFT FLOATING CARD */}
          <div
            className="hero-orbit-card hero-orbit-card-left"
            style={{
              transform: `translate(${offset.x * -0.45}px, ${
                offset.y * -0.45
              }px)`, // was 0.2
            }}
          >
            <div className="hero-orbit-pill">CMS Development</div>
            <h4>WordPress, Wix, Shopify</h4>
            <p>Clean, modern and fully responsive.</p>
          </div>

          {/* RIGHT FLOATING CARD */}
          <div
            className="hero-orbit-card hero-orbit-card-right"
            style={{
              transform: `translate(${offset.x * 0.45}px, ${
                offset.y * 0.45
              }px)`, // was 0.2
            }}
          >
            <div className="hero-orbit-pill hero-orbit-pill-blue">
              Brand Identity
            </div>
            <h4>Modern, sharp &amp; professional</h4>
            <p>Built to make your business stand out.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

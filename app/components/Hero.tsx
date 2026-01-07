"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.025; // was 0.01
      const y = (e.clientY - window.innerHeight / 2) * 0.025; // was 0.01
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        {/* LEFT TEXT BLOCK */}
        <div>
          <div className="hero-kicker">Performance-Driven Creative Studio</div>
          <h1>Design that demands attention and drives action.</h1>
          <p className="hero-subtext">
            3Craft Digital builds modern brand identities and clean,
            conversion-focused CMS websites. A compact 3-specialist studio
            combining brand design, visual systems, and technical development
            into one sharp digital experience.
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
            <span>Average response time: under 15 minutes</span>
          </div>
        </div>

        {/* RIGHT — ANIMATED VISUAL */}
        <div
          className="hero-visual hero-orbit"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: "transform 0.04s ease-out", // was 0.08
          }}
        >
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

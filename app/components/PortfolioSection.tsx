'use client';

import { useState } from "react";

// components/PortfolioSection.tsx

type PortfolioItem = {
  label: string;
  year: string;
  title: string;
  sub: string;
  image: string;
  gallery: string[];
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    label: "Brand Identity",
    year: "2024",
    title: "Logo + system for a modern startup",
    sub: "Identity system, guidelines",
    image: "/Portfolio.jpeg",
    gallery: [
      "/Portfolio.jpeg",
      "https://placehold.co/800x560/001f4a/ffffff?text=Mockup+2",
      "https://placehold.co/800x560/0d3b8f/ffffff?text=Mockup+3",
    ],
  },
  {
    label: "CMS Website",
    year: "2024",
    title: "Responsive CMS site for a service brand",
    sub: "UX, UI, development",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=CMS+Website",
    gallery: ["https://placehold.co/800x560/0b1220/ffffff?text=CMS+Website"],
  },
  {
    label: "Visual Branding",
    year: "2024",
    title: "Social media and stationery kit",
    sub: "Brand collateral, assets",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Visual+Branding",
    gallery: ["https://placehold.co/800x560/0b1220/ffffff?text=Visual+Branding"],
  },
  {
    label: "Landing Page",
    year: "2023",
    title: "Conversion-focused landing page layout",
    sub: "Messaging, UX flow",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Landing+Page",
    gallery: ["https://placehold.co/800x560/0b1220/ffffff?text=Landing+Page"],
  },
  {
    label: "Campaign Assets",
    year: "2023",
    title: "Ad and banner set for a launch",
    sub: "Paid + organic formats",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Campaign+Assets",
    gallery: ["https://placehold.co/800x560/0b1220/ffffff?text=Campaign+Assets"],
  },
  {
    label: "Packaging",
    year: "2023",
    title: "Minimal product label & box design",
    sub: "Print, dielines, mockups",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=Packaging",
    gallery: ["https://placehold.co/800x560/0b1220/ffffff?text=Packaging"],
  },
];

export default function PortfolioSection() {
  const [modalState, setModalState] = useState<
    { itemIndex: number; imageIndex: number } | null
  >(null);

  const handleImageClick = (itemIndex: number) => {
    setModalState({ itemIndex, imageIndex: 0 });
  };

  const closeModal = () => setModalState(null);

  const activeItem =
    modalState !== null ? PORTFOLIO_ITEMS[modalState.itemIndex] : null;
  const activeIndex = modalState?.imageIndex ?? 0;
  const activeImage = activeItem ? activeItem.gallery[activeIndex] : null;

  const canPrev = activeItem ? activeIndex > 0 : false;
  const canNext =
    activeItem ? activeIndex < activeItem.gallery.length - 1 : false;

  const goPrev = () => {
    if (!modalState || !canPrev) return;
    setModalState({ ...modalState, imageIndex: modalState.imageIndex - 1 });
  };

  const goNext = () => {
    if (!modalState || !canNext) return;
    setModalState({ ...modalState, imageIndex: modalState.imageIndex + 1 });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") goPrev();
    if (event.key === "ArrowRight") goNext();
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Portfolio</div>
          <h2>Selected work previews</h2>
          <p>
            A glimpse into the brand identities, visuals, and web directions
            we`ve crafted.
          </p>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div className="portfolio-item" key={`${item.label}-${item.year}`}>
              <div className="portfolio-media">
                <button
                  type="button"
                  className="portfolio-image-btn"
                  onClick={() => handleImageClick(index)}
                >
                  <img src={item.image} alt={`${item.label} preview`} loading="lazy" />
                </button>
              </div>
              <div className="portfolio-meta">
                <span className="pill">{item.label}</span>
                <span className="portfolio-year">{item.year}</span>
              </div>
              <strong className="portfolio-title">{item.title}</strong>
              <span className="portfolio-sub">{item.sub}</span>
            </div>
          ))}
        </div>

        {activeItem && activeImage && (
          <div
            className="portfolio-modal"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            onClick={closeModal}
          >
            <div className="portfolio-modal-content" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="portfolio-modal-close"
                aria-label="Close preview"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="portfolio-modal-body">
                <div className="portfolio-modal-image-frame">
                  <div className="portfolio-modal-hotspot portfolio-modal-hotspot-left">
                    <button
                      type="button"
                      className="portfolio-modal-arrow"
                      onClick={goPrev}
                      disabled={!canPrev}
                      aria-label="Previous"
                    >
                      ‹
                    </button>
                  </div>
                  <div className="portfolio-modal-hotspot portfolio-modal-hotspot-right">
                    <button
                      type="button"
                      className="portfolio-modal-arrow"
                      onClick={goNext}
                      disabled={!canNext}
                      aria-label="Next"
                    >
                      ›
                    </button>
                  </div>
                  <img
                    src={activeImage}
                    alt={`${activeItem.label} preview ${activeIndex + 1}`}
                    loading="lazy"
                  />
                  <div className="portfolio-modal-counter-pill">
                    {String(activeIndex + 1).padStart(2, "0")} —{" "}
                    {String(activeItem.gallery.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="section-cta">
          <p>Like what you see? Let us scope a focused, premium build.</p>
          <div className="section-cta-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

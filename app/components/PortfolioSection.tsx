'use client';

import { useRef, useState } from "react";

// components/PortfolioSection.tsx

type PortfolioItem = {
  label: string;
  year: string;
  title: string;
  sub: string;
  outcome?: string;
  featured?: boolean;
  image: string;
  gallery: string[];
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    label: "Brand Identity",
    year: "2024",
    title: "Logo + system for a modern startup",
    sub: "Identity system, guidelines",
    outcome: "+42% brand recall in audience testing",
    featured: true,
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
    outcome: "3x faster content publishing workflow",
    image: "https://placehold.co/800x560/0b1220/ffffff?text=CMS+Website",
    gallery: ["https://placehold.co/800x560/0b1220/ffffff?text=CMS+Website"],
  },
  {
    label: "Visual Branding",
    year: "2024",
    title: "Social media and stationery kit",
    sub: "Brand collateral, assets",
    outcome: "Unified visual system across 12 channels",
    image: "/VisualBranding.jpeg",
    gallery: ["/VisualBranding.jpeg"],
  },
  {
    label: "Landing Page",
    year: "2023",
    title: "Conversion-focused landing page layout",
    sub: "Messaging, UX flow",
    outcome: "+31% lead-form completion rate",
    image: "/landing%20page.jpg.jpeg",
    gallery: ["/landing%20page.jpg.jpeg"],
  },
  {
    label: "Packaging",
    year: "2023",
    title: "Minimal product label & box design",
    sub: "Print, dielines, mockups",
    outcome: "Shelf-ready design with faster print approvals",
    image: "/packaging%20(1).jpeg",
    gallery: [
      "/packaging%20(1).jpeg",
      "/packaging%20(2).jpeg",
      "/packaging%20(3).jpeg",
      "/packaging%20(4).jpeg",
    ],
  },
];

export default function PortfolioSection() {
  const MODAL_ZOOM_SCALE = 1.9;
  const [modalState, setModalState] = useState<
    { itemIndex: number; imageIndex: number } | null
  >(null);
  const [isModalImageZoomed, setIsModalImageZoomed] = useState(false);
  const [modalImagePan, setModalImagePan] = useState({ x: 0, y: 0 });
  const [isModalImageDragging, setIsModalImageDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });
  const movedDuringDragRef = useRef(false);
  const suppressNextClickRef = useRef(false);

  const resetModalZoomState = () => {
    setIsModalImageZoomed(false);
    setModalImagePan({ x: 0, y: 0 });
    setIsModalImageDragging(false);
  };

  const clampPan = (x: number, y: number, width: number, height: number) => {
    const maxX = ((MODAL_ZOOM_SCALE - 1) * width) / 2;
    const maxY = ((MODAL_ZOOM_SCALE - 1) * height) / 2;
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  };

  const handleImageClick = (itemIndex: number) => {
    setModalState({ itemIndex, imageIndex: 0 });
    resetModalZoomState();
  };

  const closeModal = () => {
    setModalState(null);
    resetModalZoomState();
  };

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
    resetModalZoomState();
  };

  const goNext = () => {
    if (!modalState || !canNext) return;
    setModalState({ ...modalState, imageIndex: modalState.imageIndex + 1 });
    resetModalZoomState();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") goPrev();
    if (event.key === "ArrowRight") goNext();
    if (event.key.toLowerCase() === "z") {
      setIsModalImageZoomed((prev) => {
        const next = !prev;
        if (!next) setModalImagePan({ x: 0, y: 0 });
        return next;
      });
      setIsModalImageDragging(false);
    }
  };

  const handleModalImagePointerDown = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (!isModalImageZoomed) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    panStartRef.current = modalImagePan;
    movedDuringDragRef.current = false;
    setIsModalImageDragging(true);
  };

  const handleModalImagePointerMove = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (!isModalImageZoomed || !isModalImageDragging) return;

    const deltaX = event.clientX - dragStartRef.current.x;
    const deltaY = event.clientY - dragStartRef.current.y;

    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      movedDuringDragRef.current = true;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const nextPan = clampPan(
      panStartRef.current.x + deltaX,
      panStartRef.current.y + deltaY,
      rect.width,
      rect.height
    );

    setModalImagePan(nextPan);
  };

  const handleModalImagePointerEnd = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (movedDuringDragRef.current) {
      suppressNextClickRef.current = true;
    }
    setIsModalImageDragging(false);
  };

  const handleModalImageToggle = () => {
    if (suppressNextClickRef.current) {
      suppressNextClickRef.current = false;
      return;
    }

    setIsModalImageZoomed((prev) => {
      const next = !prev;
      if (!next) setModalImagePan({ x: 0, y: 0 });
      return next;
    });
    setIsModalImageDragging(false);
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
            <div
              className={`portfolio-item${item.featured ? " is-featured" : ""}`}
              key={`${item.label}-${item.year}`}
            >
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
              {item.outcome && <span className="portfolio-outcome">{item.outcome}</span>}
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
                  <button
                    type="button"
                    className={`portfolio-modal-image-toggle${isModalImageZoomed ? " is-zoomed" : ""}${isModalImageDragging ? " is-dragging" : ""}`}
                    onClick={handleModalImageToggle}
                    onPointerDown={handleModalImagePointerDown}
                    onPointerMove={handleModalImagePointerMove}
                    onPointerUp={handleModalImagePointerEnd}
                    onPointerCancel={handleModalImagePointerEnd}
                    aria-label={isModalImageZoomed ? "Zoom out image" : "Zoom in image"}
                    aria-pressed={isModalImageZoomed}
                    style={
                      {
                        "--portfolio-pan-x": `${modalImagePan.x}px`,
                        "--portfolio-pan-y": `${modalImagePan.y}px`,
                      } as React.CSSProperties
                    }
                  >
                    <img
                      src={activeImage}
                      alt={`${activeItem.label} preview ${activeIndex + 1}`}
                      loading="lazy"
                    />
                  </button>
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
            <a href="#contact" className="btn btn-outline">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

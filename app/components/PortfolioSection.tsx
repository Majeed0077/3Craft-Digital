'use client';

import Link from "next/link";
import { useRef, useState } from "react";
import { PORTFOLIO_CASE_STUDIES } from "../data/portfolio";

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
    modalState !== null ? PORTFOLIO_CASE_STUDIES[modalState.itemIndex] : null;
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
          <h2>Case studies across branding, websites, and visual systems</h2>
          <p>
            Browse selected 3Craft Digital projects covering brand identity,
            website design, landing pages, social media systems, and packaging.
          </p>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO_CASE_STUDIES.map((item, index) => (
            <article
              className={`portfolio-item${index === 0 ? " is-featured" : ""}`}
              key={item.slug}
            >
              <div className="portfolio-media">
                <button
                  type="button"
                  className="portfolio-image-btn"
                  onClick={() => handleImageClick(index)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} loading="lazy" />
                </button>
              </div>
              <div className="portfolio-meta">
                <span className="pill">{item.category}</span>
                <span className="portfolio-year">{item.year}</span>
              </div>
              <strong className="portfolio-title">{item.title}</strong>
              <span className="portfolio-sub">{item.summary}</span>
              <span className="portfolio-outcome">{item.outcome}</span>
              <div className="service-card-actions">
                <Link href={`/work/${item.slug}`} className="btn btn-outline">
                  View Case Study
                </Link>
              </div>
            </article>
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeImage}
                      alt={`${activeItem.title} visual ${activeIndex + 1}`}
                      loading="lazy"
                    />
                  </button>
                  <div className="portfolio-modal-counter-pill">
                    {String(activeIndex + 1).padStart(2, "0")} -{" "}
                    {String(activeItem.gallery.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="section-cta">
          <p>Need a sharper brand or website? Review the full case studies or scope your own project.</p>
          <div className="section-cta-actions">
            <Link href="/work" className="btn btn-outline">
              Explore All Case Studies
            </Link>
            <a href="#contact" className="btn btn-outline">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

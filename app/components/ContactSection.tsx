// components/ContactSection.tsx
"use client";

import React from "react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // TODO: hook into API / email service
  };

  return (
    <section id="contact">
      <div className="container contact-inner">
        <div>
          <div className="contact-tag">Let’s work together</div>
          <h2>Tell us what you need. We’ll tell you how we’d solve it.</h2>
          <p>
            Send a quick overview of your brand, project, and deadline. We’ll
            reply with a clear game plan, pricing, and timeline — no fluff, no
            pressure.
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
              placeholder="Brand identity, CMS website, packaging, etc."
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
  );
}

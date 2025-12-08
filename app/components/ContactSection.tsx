// components/ContactSection.tsx
"use client";

import React, { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const details = String(formData.get("details") || "").trim();

    // Basic validation
    if (!name || !email || !service || !details) {
      setError("Please fill in all fields before sending.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, service, details }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || "Something went wrong.");
  }

  setStatus("success");
  form.reset();
} catch (err: unknown) {
  setStatus("error");

  if (err instanceof Error) {
    setError(err.message || "Failed to send message. Please try again.");
  } else {
    setError("Failed to send message. Please try again.");
  }
} finally {
  setTimeout(() => {
    setStatus("idle");
  }, 5000);
}

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

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="form-control"
              type="email"
              placeholder="Your best email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">What do you need?</label>
            <input
              id="service"
              name="service"
              className="form-control"
              type="text"
              placeholder="Brand identity, CMS website, packaging, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">Project details</label>
            <textarea
              id="details"
              name="details"
              className="form-control"
              rows={4}
              placeholder="Share a bit about your brand, style, and timeline."
            />
          </div>

          {error && (
            <div className="form-feedback form-feedback-error">{error}</div>
          )}

          {status === "success" && !error && (
            <div className="form-feedback form-feedback-success">
              Message sent. We’ll get back to you shortly.
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

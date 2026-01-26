"use client";

import React, { useEffect, useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  service: string;
  details: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
  "Brand Identity Systems",
  "Visual Branding",
  "CMS Website Development",
  "Brand Kits",
  "Web UI Layouts",
  "Ad & Campaign Creatives",
  "Business Cards & Stationery",
  "Packaging & Labels",
] as const;

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    details: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  // Optional: auto-clear success/error after some time
  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const t = window.setTimeout(() => {
      setStatus("idle");
      setGlobalError(null);
    }, 5000);

    return () => window.clearTimeout(t);
  }, [status]);

  const isLoading = status === "loading";

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      EMAIL_REGEX.test(form.email.trim()) &&
      form.service.trim().length > 0 &&
      form.details.trim().length > 0 &&
      !isLoading
    );
  }, [form, isLoading]);

  const validate = (data: FormState): FieldErrors => {
    const e: FieldErrors = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    if (!data.email.trim()) e.email = "Please enter your email.";
    else if (!EMAIL_REGEX.test(data.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!data.service.trim()) e.service = "Please select a service.";
    if (!data.details.trim()) e.details = "Please add project details.";
    return e;
  };

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    // live clear: user changes field => remove that field error
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });

    // global error bhi clear
    if (globalError) setGlobalError(null);
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGlobalError(null);

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service.trim(),
          details: form.details.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", service: "", details: "" });
      setErrors({});
    } catch (err: unknown) {
      setStatus("error");
      const msg =
        err instanceof Error
          ? err.message || "Failed to send message. Please try again."
          : "Failed to send message. Please try again.";
      setGlobalError(msg);
    }
  };

  return (
    <section id="contact">
      <div className="container contact-inner">
        <div>
          <div className="section-kicker">Contact</div>
          <div className="contact-tag">Start your project</div>
          <h2>Tell us what you need. We'll tell you how we'd solve it.</h2>
          <p>
            Send a quick overview of your brand, project, and deadline. We'll
            reply with a clear game plan, pricing, and timeline, no fluff, no
            pressure.
          </p>
          <div className="contact-meta">
            <div>
              <span className="contact-meta-label">Response time</span>
              <strong>Under 15 minutes</strong>
            </div>
            <div>
              <span className="contact-meta-label">Availability</span>
              <strong>Mon - Sat</strong>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="form-control"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <div id="name-error" className="form-feedback form-feedback-error">
                {errors.name}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="form-control"
              type="email"
              placeholder="Your best email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div
                id="email-error"
                className="form-feedback form-feedback-error"
              >
                {errors.email}
              </div>
            )}
          </div>

          {/* Service */}
          <div className="form-group">
            <label htmlFor="service">What do you need?</label>
            <select
              id="service"
              name="service"
              className="form-control"
              value={form.service}
              onChange={(e) => setField("service", e.target.value)}
              required
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
            >
              <option value="" disabled>
                Select a service...
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {errors.service && (
              <div
                id="service-error"
                className="form-feedback form-feedback-error"
              >
                {errors.service}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="form-group">
            <label htmlFor="details">Project details</label>
            <textarea
              id="details"
              name="details"
              className="form-control"
              rows={4}
              placeholder="Share a bit about your brand, style, and timeline."
              value={form.details}
              onChange={(e) => setField("details", e.target.value)}
              required
              aria-invalid={Boolean(errors.details)}
              aria-describedby={errors.details ? "details-error" : undefined}
            />
            {errors.details && (
              <div
                id="details-error"
                className="form-feedback form-feedback-error"
              >
                {errors.details}
              </div>
            )}
          </div>

          {/* Global feedback */}
          {globalError && (
            <div className="form-feedback form-feedback-error">{globalError}</div>
          )}

          {status === "success" && !globalError && (
            <div className="form-feedback form-feedback-success">
              Message sent. We'll get back to you shortly.
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
            disabled={!canSubmit}
          >
            {isLoading ? "Sending..." : "Start a Project"}
          </button>
        </form>
      </div>
    </section>
  );
}

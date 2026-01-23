import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO || from;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { message: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const service = payload.service?.trim() ?? "";
  const details = payload.details?.trim() ?? "";

  if (!name || !email || !service || !details) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const subject = `New inquiry: ${service}`;
  const html = `
    <div style="font-family: Arial, sans-serif; color:#0f172a;">
      <h2>New contact inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p><strong>Details:</strong><br/>${escapeHtml(details).replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      replyTo: email,
      html,
    });

    if (error) {
      return NextResponse.json(
        { message: "Failed to send email." },
        { status: 500 }
      );
    }

    // Auto-reply disabled until a verified domain is available.

    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}

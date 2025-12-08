// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  service: string;
  details: string;
};

export async function POST(req: Request) {
  console.log("RESEND KEY IN RUNTIME:", process.env.RESEND_API_KEY);

  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const service = body.service?.trim();
    const details = body.details?.trim();

    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

const resend = new Resend("re_ccU63pxN_3Lvqv8pM9bRTwCFQAzCycmyVs"); // yahan NEW wali key daalna, jo Resend se li ho


    await resend.emails.send({
      from: "3Craft Digital <onboarding@resend.dev>",
      to: ["puzzleloom070@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Details:</strong><br>${details}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: unknown) {
    console.error("Error in /api/contact:", err);
    return NextResponse.json(
      { ok: false, message: "Internal server error while sending email." },
      { status: 500 }
    );
  }
}

import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: `${name} <neel-messages@docpilot.dev>`,
      to: "and24903@gmail.com",
      subject: `${name} sent you a message!`,
      replyTo: email,
      text: `${message} \n\n\nEmail from ${email}`,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

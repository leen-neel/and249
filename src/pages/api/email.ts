// re_Cmrc4nSx_N9CbqyWxhJXCfWJzq2Gnbeq1

import { Resend } from "resend";
import type { APIRoute } from "astro";

const resend = new Resend("re_Cmrc4nSx_N9CbqyWxhJXCfWJzq2Gnbeq1");

interface IMessage {
  name: string;
  email: string;
  message: string;
}

export const POST: APIRoute = async ({ request }) => {
  const message: IMessage = await request.json();

  try {
    const data = await resend.emails.send({
      from: `${message.name} <onboarding@resend.dev>`,
      to: "and24903@gmail.com",
      subject: `${message.name} sent you a message!`,
      text: message.message,
    });

    return new Response(
      JSON.stringify({
        message: "Message sent!",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Message failed to send!",
      }),
      { status: 500 }
    );
  }
};

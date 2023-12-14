import type { APIRoute } from "astro";
import { Resend } from "resend";

import { config } from "@vue-email/compiler";

const resend = new Resend("re_Cmrc4nSx_N9CbqyWxhJXCfWJzq2Gnbeq1");

const vueEmail = config("./src/pages/api");

export const GET: APIRoute = async () => {
  const template = await vueEmail.render("./EmailTemplate.vue", {
    props: {
      url: "https://vuemail.net/",
    },
  });

  console.log(template);

  try {
    const data = await resend.emails.send({
      from: "Neel <onboarding@resend.dev>",
      to: "and24903@gmail.com",
      subject: `sent you a message!`,
      html: template,
    });

    return new Response(
      JSON.stringify({
        message: "ok",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
};

// re_Cmrc4nSx_N9CbqyWxhJXCfWJzq2Gnbeq1

import { Resend } from "resend";

const resend = new Resend("re_Cmrc4nSx_N9CbqyWxhJXCfWJzq2Gnbeq1");

export async function sendEmail() {
  const data = await resend.emails.send({
    from: "Neel <onboarding@resend.dev>",
    to: "and24903@gmail.com",
    subject: "Hello from Resend!",
    text: "Hello World!",
  });

  console.log(data);

  return data;
}

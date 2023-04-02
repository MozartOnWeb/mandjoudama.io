import FormData from "form-data";
import Mailgun from "mailgun.js";

// export async function GET(request: Request) {
//   const data = await request.json();
//   console.log(data);
// }

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const API_KEY = process.env.MAILGUN_API_KEY || "";
  const DOMAIN = process.env.MAILGUN_DOMAIN || "";

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: `${name} <contact@mg.mandjoudama.com>`,
    to: "mandjoudama@gmail.com",
    subject: "Let's Build Something Great Together!",
    text: ` Hello,

    You have a new message from : ${name} ${email},

    ${message}
    `,
  };

  try {
    const emailResponse = await client.messages.create(DOMAIN, messageData);
    console.log(emailResponse);
  } catch (error) {
    console.log(error);
  }

  return new Response("submitted");
}

import nodemailer from "nodemailer";
import process from "process";

export async function POST(request: Request) {
  const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_EMAIL,
      pass: process.env.NEXT_PASS,
    },
  });

  const req = await request.json();

  const { email, text, subject, name } = req;

  const message = `
  <strong>Subject:</strong> ${subject} <br/>
  <strong>Name:</strong> ${name} <br/>
  <strong>From:</strong> ${email} <br/>

  <p>
    ${text}
  </p>

  `;

  const config = {
    from: process.env.NEXT_EMAIL,
    to: process.env.NEXT_EMAIL_RECEIVER,
    subject: "Contact request from portfolio.",
    html: message,
  };

  const smtpRes = await new Promise((resolved, rejected) => {
    smtp
      .sendMail(config)
      .then((res) => {
        smtp.close();
        return resolved(true);
      })
      .catch((err) => {
        smtp.close();
        return rejected(false);
      });
  });

  if (!smtpRes) return Response.json({ send: false }, { status: 500 });
  return Response.json({ send: true }, { status: 200 });
}

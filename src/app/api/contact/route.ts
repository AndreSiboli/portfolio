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

  const { email, message, subject, name } = req;

  const emailSkeleton = `
  <section style="width: 100%; padding: 2em 1em; font-family: 'Segoe UI', Arial, sans-serif; box-sizing: border-box; background-color: #f4f4f4;">
    <div style="margin: 0 auto; max-width: 600px; background: #fff; border-radius: 8px; padding: 2em; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">
      <h1 style="text-align: center; margin-bottom: 1.5em; color: #222; font-size: 1.8em; border-bottom: 1px solid #e0e0e0; padding-bottom: 0.5em;">🚀 ${subject}</h1>
    
      <p style="text-align: center; margin-bottom: 1.5em; line-height: 1.6; font-size: 1em; color: #555;">
        ${message}
      </p>
    
      <hr style="border: none; border-top: 1px solid #eee; margin: 2em 0;" />
    
      <p style="font-size: 1em; color: #333; margin: 0.5em 0;">
        <span style="font-weight: bold; color: #000;">👤 Name:</span> ${name}
      </p>
    
      <p style="font-size: 1em; color: #333; margin: 0.5em 0;">
        <span style="font-weight: bold; color: #000;">📧 From:</span> ${email}
      </p>
    </div>
  </section>
  `;

  const config = {
    from: process.env.NEXT_EMAIL,
    to: process.env.NEXT_EMAIL_RECEIVER,
    subject: "Contact request from portfolio.",
    html: emailSkeleton,
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

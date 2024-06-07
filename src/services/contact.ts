import axios from "axios";

const domain = "/api/contact";

interface SendEmailProps {
  name: string;
  email: string;
  subject: string;
  text: string;
}

export async function sendEmail(req: SendEmailProps) {
  try {
    const res = await axios.post(`${domain}`, req);
    return res.status;
  } catch (error) {
    return 500;
  }
}

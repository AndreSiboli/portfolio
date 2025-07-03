import axios from "axios";

const domain = "/api/contact";

export async function sendEmail(req: Record<string, string>) {
  try {
    const res = await axios.post(`${domain}`, req);
    return res.status;
  } catch (error) {
    return 500;
  }
}

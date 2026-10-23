import { Resend } from "resend";

export type ContactEmailPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  enquiryType: string;
  message: string;
  budget?: string;
  timeframe?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !destination || !from) {
    return { ok: false, error: "Contact email delivery is not configured." };
  }

  const resend = new Resend(apiKey);
  const textBody = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : undefined,
    payload.phone ? `Telephone: ${payload.phone}` : undefined,
    `Enquiry type: ${payload.enquiryType}`,
    payload.budget ? `Estimated project budget: ${payload.budget}` : undefined,
    payload.timeframe ? `Preferred timeframe: ${payload.timeframe}` : undefined,
    "",
    "Message:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = [
    "<h2>New Canhub enquiry</h2>",
    `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
    payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : "",
    payload.phone ? `<p><strong>Telephone:</strong> ${escapeHtml(payload.phone)}</p>` : "",
    `<p><strong>Enquiry type:</strong> ${escapeHtml(payload.enquiryType)}</p>`,
    payload.budget ? `<p><strong>Estimated project budget:</strong> ${escapeHtml(payload.budget)}</p>` : "",
    payload.timeframe ? `<p><strong>Preferred timeframe:</strong> ${escapeHtml(payload.timeframe)}</p>` : "",
    "<p><strong>Message:</strong></p>",
    `<p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>`,
  ].join("");

  try {
    const result = await resend.emails.send({
      from,
      to: [destination],
      replyTo: payload.email,
      subject: `New Canhub Enquiry — ${payload.enquiryType}`,
      text: textBody,
      html: htmlBody,
    });

    if (result.error) {
      return {
        ok: false,
        error: result.error.message ?? "Email provider rejected the submission.",
      };
    }

    return { ok: true, id: result.data?.id ?? null };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Custom email delivery failed.";
    return { ok: false, error: message };
  }
}

import { NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/contact";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > 65536) {
      return NextResponse.json(
        { success: false, message: "Your enquiry is too large to submit." },
        { status: 413 },
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Your enquiry could not be read. Please try again." },
        { status: 400 },
      );
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const rateLimit = await checkRateLimit(ip);
    if (rateLimit === null) {
      console.warn("[contact-form] rate limiter unavailable: missing Upstash config or Redis error", {
        hasUpstashUrl: Boolean(process.env.UPSTASH_REDIS_REST_URL),
        hasUpstashToken: Boolean(process.env.UPSTASH_REDIS_REST_TOKEN),
        ipHash: ip === "unknown" ? "unknown" : ip.slice(0, 6),
      });
      return NextResponse.json(
        {
          success: false,
          message: "The contact form is temporarily unavailable. Please email contact@canhubsoftware.com.",
        },
        { status: 503 },
      );
    }

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many enquiries received. Please try again shortly.",
        },
        { status: 429 },
      );
    }

    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      const flattenedErrors = result.error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(flattenedErrors)
        .flatMap((messages) => messages ?? [])
        .find((message) => Boolean(message));

      return NextResponse.json(
        {
          success: false,
          message: firstErrorMessage ?? "Please review the highlighted fields and try again.",
          errors: Object.fromEntries(
            Object.entries(flattenedErrors).map(([key, messages]) => [key, messages?.[0] ?? "Invalid value"]),
          ),
        },
        { status: 400 },
      );
    }

    const payload = result.data;
    if (payload.website && payload.website.trim().length > 0) {
      return NextResponse.json(
        { success: false, message: "Invalid submission." },
        { status: 400 },
      );
    }

    const emailConfigMissing = !process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO || !process.env.CONTACT_EMAIL_FROM;
    if (emailConfigMissing) {
      console.warn("[contact-form] email delivery unavailable: required env vars are missing", {
        hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
        hasContactEmailTo: Boolean(process.env.CONTACT_EMAIL_TO),
        hasContactEmailFrom: Boolean(process.env.CONTACT_EMAIL_FROM),
      });
      return NextResponse.json(
        {
          success: false,
          message: "The contact form is temporarily unavailable. Please email contact@canhubsoftware.com.",
        },
        { status: 503 },
      );
    }

    const emailResult = await sendContactEmail({
      name: payload.name,
      email: payload.email,
      company: payload.company || undefined,
      phone: payload.phone || undefined,
      enquiryType: payload.enquiryType,
      message: payload.message,
      budget: payload.budget || undefined,
      timeframe: payload.timeframe || undefined,
    });

    if (!emailResult.ok) {
      console.error("[contact-form] Resend email send failed", {
        error: emailResult.error,
      });
      return NextResponse.json(
        {
          success: false,
          message: "We could not send your enquiry right now. Please email contact@canhubsoftware.com.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your enquiry has been submitted and a member of the team will review it.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "We could not submit your enquiry right now. Please email contact@canhubsoftware.com.",
      },
      { status: 500 },
    );
  }
}

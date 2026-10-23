import { render, screen } from "@testing-library/react";

import ContactPage from "@/app/contact/page";
import { POST } from "@/app/api/contact/route";
import { checkRateLimit } from "@/lib/rate-limit";

const makeRequest = (body: unknown, headers: Record<string, string> = {}) =>
  ({
    headers: new Headers(headers),
    json: async () => body,
  }) as Request;

const mockSend = jest.fn();
const mockCheckRateLimit = jest.fn();

jest.mock("resend", () => ({
  Resend: jest.fn(() => ({ emails: { send: mockSend } })),
}));

jest.mock("@/lib/rate-limit", () => ({
  checkRateLimit: (...args: unknown[]) => mockCheckRateLimit(...args),
}));

describe("contact page", () => {
  it("renders the contact page and email CTA", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: /contact canhub/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /contact@canhubsoftware.com/i })[0]).toHaveAttribute(
      "href",
      "mailto:contact@canhubsoftware.com?subject=Project%20Enquiry",
    );
    expect(screen.getByRole("button", { name: /send enquiry/i })).toBeInTheDocument();
  });
});

describe("contact api", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.RESEND_API_KEY = "test_key";
    process.env.CONTACT_EMAIL_TO = "contact@canhubsoftware.com";
    process.env.CONTACT_EMAIL_FROM = "noreply@canhub.example";
    mockSend.mockReset();
    mockSend.mockResolvedValue({ data: { id: "abc-123" }, error: null });
    mockCheckRateLimit.mockReset();
    mockCheckRateLimit.mockResolvedValue({ allowed: true, retryAfterSeconds: 0 });
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("accepts a valid submission for a known enquiry type", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        company: "Example Ltd",
        enquiryType: "Web & Application Development",
        message: "We need a 12", // 10+ chars after trimming
        phone: "+44 7700 900123",
        budget: "£12k - £25k",
        timeframe: "Within 1-2 months",
        website: "",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ["contact@canhubsoftware.com"],
        replyTo: "jane@example.com",
      }),
    );
  });

  it("rejects message content shorter than 10 characters after trimming", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        enquiryType: "General Enquiry",
        message: "  nine  ",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.message).toContain("Please enter at least 10 characters.");
  });

  it("rejects missing required fields", async () => {
    const response = await POST(
      makeRequest({
        name: "",
        email: "not-an-email",
        enquiryType: "General Enquiry",
        message: "",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body.success).toBe(false);
  });

  it("rejects invalid enquiry categories", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        enquiryType: "Definitely Not A Valid Enquiry Type",
        message: "We need help with a digital transformation project and system review.",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(400);
  });

  it("rejects honeypot submissions", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        enquiryType: "General Enquiry",
        message: "We need help with a problem that requires careful planning.",
        website: "https://spam.example",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(400);
  });

  it("rejects rate limited submissions", async () => {
    mockCheckRateLimit.mockResolvedValueOnce({ allowed: false, retryAfterSeconds: 60 });

    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        enquiryType: "General Enquiry",
        message: "We need help with a digital project and would like to discuss the options.",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(429);
  });

  it("handles provider failures without pretending delivery succeeded", async () => {
    mockSend.mockResolvedValueOnce({
      data: null,
      error: { message: "Provider rejected the message." },
    });

    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        enquiryType: "General Enquiry",
        message: "We need a consultation about a new enterprise platform and digital roadmap.",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(502);
  });

  it("returns a temporary error when email delivery is not configured", async () => {
    delete process.env.RESEND_API_KEY;

    const response = await POST(
      makeRequest({
        name: "Jane Smith",
        email: "jane@example.com",
        enquiryType: "General Enquiry",
        message: "We need a consultation about a new integration and automation initiative.",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(503);
  });

  it("escapes untrusted HTML in the email template", async () => {
    const response = await POST(
      makeRequest({
        name: "Jane <script>alert(1)</script>",
        email: "jane@example.com",
        enquiryType: "General Enquiry",
        message: "We need help with a project that involves <script>alert(1)</script> content.",
      }, { "content-type": "application/json" }),
    );

    expect(response.status).toBe(200);
    const html = mockSend.mock.calls[0][0].html;
    expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
  });
});

export { checkRateLimit };

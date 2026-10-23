import { z } from "zod";

export const enquiryTypes = [
  "Web & Application Development",
  "Salesforce & CRM Engineering",
  "Banking & nCino Solutions",
  "Enterprise Integrations & APIs",
  "Cloud & Data Engineering",
  "Technical Consulting & Support",
  "General Enquiry",
] as const;

export type EnquiryType = (typeof enquiryTypes)[number];

const optionalText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength)
    .optional()
    .or(z.literal(""));

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(254),
    company: optionalText(120),
    phone: optionalText(40),
    enquiryType: z.enum(enquiryTypes),
    message: z
      .string()
      .trim()
      .min(10, "Please enter at least 10 characters.")
      .max(5000, "Please keep your message under 5000 characters."),
    budget: optionalText(80),
    timeframe: optionalText(80),
    website: optionalText(255),
  })
  .superRefine((data, ctx) => {
    if (data.website && data.website.length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["website"],
        message: "Invalid submission.",
      });
    }
  });

export const contactFieldConfig = {
  name: { max: 120, label: "Full name" },
  email: { max: 254, label: "Email address" },
  company: { max: 120, label: "Company or organisation" },
  phone: { max: 40, label: "Telephone number" },
  enquiryType: { label: "Enquiry type" },
  message: { max: 5000, label: "Message" },
  budget: { max: 80, label: "Estimated project budget" },
  timeframe: { max: 80, label: "Preferred project timeframe" },
} as const;

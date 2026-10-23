"use client";

import { useState } from "react";

import { enquiryTypes } from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  enquiryType: string;
  message: string;
  budget: string;
  timeframe: string;
  website: string;
};

const initialValues: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  enquiryType: "Web & Application Development",
  message: "",
  budget: "",
  timeframe: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");
    setErrors({});

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const payload = (await response.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
      errors?: Record<string, string>;
    };

    if (!response.ok) {
      setErrors(payload.errors ?? {});
      setMessage(payload.message ?? "We could not submit your enquiry right now.");
      setSubmitState("error");
      return;
    }

    setMessage(payload.message ?? "Your enquiry was submitted successfully.");
    setSubmitState("success");
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="contact-form-status">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
            maxLength={120}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
          {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-700">{errors.name}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
          {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-700">{errors.email}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Company or organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            maxLength={120}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Telephone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            maxLength={40}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="enquiryType" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Enquiry type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.enquiryType)}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.enquiryType ? <p className="mt-2 text-sm text-red-700">{errors.enquiryType}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Estimated project budget
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={values.budget}
            onChange={handleChange}
            maxLength={80}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="timeframe" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Preferred project timeframe
          </label>
          <input
            id="timeframe"
            name="timeframe"
            type="text"
            value={values.timeframe}
            onChange={handleChange}
            maxLength={80}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--brand-ink)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full rounded-xl border border-[var(--brand-border)] bg-white px-3 py-3 text-base text-[var(--brand-ink)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-2 focus:ring-[var(--brand-accent-soft)]"
          />
          {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-700">{errors.message}</p> : null}
        </div>

        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <div id="contact-form-status" aria-live="polite" className="min-h-6">
        {message ? (
          <p className={submitState === "success" ? "text-sm font-medium text-green-700" : "text-sm font-medium text-red-700"}>
            {message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(43,93,80,0.18)] transition hover:bg-[var(--brand-accent-deep)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitState === "submitting" ? "Sending..." : "Send enquiry"}
        </button>
        <p className="text-sm text-[var(--brand-muted)]">
          We use your details only to assess and respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

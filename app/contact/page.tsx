import type { Metadata } from "next";

import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageShell } from "@/components/ui/page-shell";
import { getContactEmail, getContactHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Canhub | Canhub Software",
  description:
    "Get in touch with Canhub Software to discuss a project, system challenge or digital delivery requirement.",
};

export default function ContactPage() {
  const contactEmail = getContactEmail();
  const contactEmailHref = getContactHref();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-accent)]">Contact</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-ink)] sm:text-5xl">
                  Contact Canhub
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--brand-muted)]">
                  We’d welcome the opportunity to understand your business challenge, delivery priorities and the practical next step that would make the most sense.
                </p>

                <div className="mt-8 rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">Email</p>
                  <a
                    href={contactEmailHref}
                    className="mt-3 inline-flex text-lg font-semibold text-[var(--brand-ink)] underline-offset-4 hover:underline"
                  >
                    {contactEmail}
                  </a>
                  <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
                    Send us your project brief, challenge, or enquiry. We will review the information and respond in the most appropriate way for the request.
                  </p>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] p-6 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">What happens next</p>
                  <ul className="mt-5 space-y-3 text-base leading-7 text-white/80">
                    <li>• We review the enquiry and the nature of the challenge.</li>
                    <li>• We confirm the right next step, capability match or suitable discussion route.</li>
                    <li>• We respond using the contact details you provide.</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-5 shadow-[0_22px_50px_rgba(15,23,42,0.04)] sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Project enquiry</h2>
                <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">
                  Share a few details about your requirement and the kind of support you are looking for.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Relevant services</h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  <li>• <Link href="/services/web-application-development" className="font-medium text-[var(--brand-accent)] hover:underline">Web & Application Development</Link></li>
                  <li>• <Link href="/services/salesforce-crm" className="font-medium text-[var(--brand-accent)] hover:underline">Salesforce & CRM Engineering</Link></li>
                  <li>• <Link href="/services/banking-ncino" className="font-medium text-[var(--brand-accent)] hover:underline">Banking & nCino Solutions</Link></li>
                  <li>• <Link href="/services/enterprise-integrations" className="font-medium text-[var(--brand-accent)] hover:underline">Enterprise Integrations & APIs</Link></li>
                  <li>• <Link href="/services/cloud-data-engineering" className="font-medium text-[var(--brand-accent)] hover:underline">Cloud & Data Engineering</Link></li>
                  <li>• <Link href="/services/technical-consulting" className="font-medium text-[var(--brand-accent)] hover:underline">Technical Consulting & Support</Link></li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Privacy and handling</h2>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
                  This form is used to assess and respond to an enquiry. Information submitted through the form is processed for the purpose of responding to your message, identifying relevant services and discussing whether a suitable engagement pathway exists.
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
                  A full privacy notice is available in draft form and is intended for review before production use. Please see the <Link href="/privacy" className="font-medium text-[var(--brand-accent)] hover:underline">privacy notice</Link> for the current handling summary and owner review points.
                </p>
              </div>
            </div>
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

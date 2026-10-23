import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageShell } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Privacy Notice | Canhub Software",
  description:
    "Draft privacy notice for Canhub Software website enquiries, including handling, retention and owner review requirements.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-accent)]">Draft notice</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-ink)] sm:text-5xl">
              Privacy notice
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--brand-muted)]">
              This page is a draft privacy notice for website support and project enquiry handling. It is intended for review and approval before production use.
            </p>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="prose prose-lg max-w-3xl space-y-6 text-[var(--brand-muted)]">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Purpose of processing</h2>
                <p className="mt-3 text-base leading-7">
                  Canhub may process personal information submitted via the contact or project enquiry form to understand a requirement, identify a suitable service or discuss the next step in a project conversation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Data collected</h2>
                <p className="mt-3 text-base leading-7">
                  The information requested in the form may include a name, email address, company or organisation, telephone number, enquiry type, message and optional project details such as budget or timeframe.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Email delivery provider</h2>
                <p className="mt-3 text-base leading-7">
                  Enquiries may be delivered using a transactional email provider such as Resend. The specific provider configuration and sending domain must be confirmed and approved by the business owner before production launch.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Contacting Canhub</h2>
                <p className="mt-3 text-base leading-7">
                  If you would like to ask about personal information, correction, deletion or processing questions, contact Canhub at <a href="mailto:contact@canhubsoftware.com" className="font-medium text-[var(--brand-accent)] hover:underline">contact@canhubsoftware.com</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Retention and deletion</h2>
                <p className="mt-3 text-base leading-7">
                  A retention period has not yet been approved by the business owner. Enquiries should be retained only for as long as necessary to manage the request and comply with approved business processes. Deletion or archiving arrangements require owner confirmation before production deployment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">International transfer and compliance</h2>
                <p className="mt-3 text-base leading-7">
                  International data transfer and legal processing arrangements require verification before production launch, including confirmation of any provider arrangements and relevant regulatory obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Status</h2>
                <p className="mt-3 text-base leading-7">
                  This notice is draft-only and must be reviewed and approved by the business owner before any production use or public legal reliance.
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

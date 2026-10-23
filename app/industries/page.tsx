import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageShell } from "@/components/ui/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/industries";
import { getContactPageHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries | Canhub Software",
  description:
    "Learn how Canhub supports financial services, insurance, healthcare and life sciences, and growing businesses with digital engineering capability.",
};

export default function IndustriesOverviewPage() {
  const contactHref = getContactPageHref();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Industries"
              title="Technology support tailored to how businesses actually operate"
              description="The right digital solution depends on the sector, the operating model and the pressure points a business is trying to resolve."
            />

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={contactHref}>Discuss Your Requirements</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore services
              </ButtonLink>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              {industries.map((industry) => (
                <article
                  key={industry.slug}
                  className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.03)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                    Industry
                  </p>
                  <Link href={`/industries/${industry.slug}`} className="mt-4 block">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                      {industry.title}
                    </h2>
                  </Link>
                  <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{industry.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--brand-muted)]">
                    {industry.services.map((service) => (
                      <li key={service}>• {service}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] hover:text-[var(--brand-accent-deep)]"
                  >
                    Explore this sector
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageShell } from "@/components/ui/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPublishedCaseStudies } from "@/lib/case-studies";
import { getContactPageHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work | Canhub Software",
  description:
    "Explore Canhub's project approach and approved work. Selected case studies are published only when approval and publication status are confirmed.",
};

export default function WorkPage() {
  const contactHref = getContactPageHref();
  const publishedCaseStudies = getPublishedCaseStudies();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <h1 className="sr-only">Our Work</h1>
            <SectionHeading
              label="Our Work"
              title="Project work shaped around clear business need"
              description="Canhub works with organisations navigating complexity, platform change and operational delivery constraints. We focus on sustainable systems, practical delivery and technical clarity."
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
            {publishedCaseStudies.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {publishedCaseStudies.map((study) => (
                  <article key={study.slug} className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                      {study.industry ?? "Project work"}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                      {study.title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{study.summary}</p>
                    <a href={`/work/${study.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] hover:text-[var(--brand-accent-deep)]">
                      View case study
                      <span aria-hidden="true">→</span>
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-8 text-center">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  Approved case studies are being prepared
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--brand-muted)]">
                  We keep your project approach clear, factual and review-ready. At the moment, no publicly approved case studies are available for display, but we are ready to discuss a suitable engagement and the relevant project context.
                </p>
              </div>
            )}
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

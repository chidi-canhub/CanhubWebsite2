import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageShell } from "@/components/ui/page-shell";
import { getIndustryBySlug, industries } from "@/lib/industries";
import { getContactPageHref } from "@/lib/site";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    return {
      title: "Industry not found | Canhub Software",
      description: "The requested industry page could not be found.",
    };
  }

  return {
    title: `${industry.title} | Canhub Software`,
    description: industry.summary,
  };
}

export default function IndustryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustryBySlug(params.slug);
  const contactHref = getContactPageHref();

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--brand-muted)]">
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/" className="transition-colors hover:text-[var(--brand-accent)]">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/industries" className="transition-colors hover:text-[var(--brand-accent)]">
                  Industries
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-[var(--brand-ink)]">{industry.title}</span>
              </div>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                  Industry
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)] sm:text-5xl">
                  {industry.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--brand-muted)]">
                  {industry.summary}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={contactHref}>{industry.cta}</ButtonLink>
                  <ButtonLink href="/industries" variant="secondary">
                    Back to all industries
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                  Sector overview
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{industry.intro}</p>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  Common challenges
                </h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  {industry.challenges.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-[var(--brand-accent)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  Relevant solutions
                </h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  {industry.solutions.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-[var(--brand-accent)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-accent)]">
                Related services
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)]">
                Relevant Canhub capabilities
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {industry.services.map((serviceName) => (
                <Link
                  key={serviceName}
                  href="/services"
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 transition-colors hover:border-[var(--brand-accent)]"
                >
                  <p className="text-lg font-semibold text-[var(--brand-ink)]">{serviceName}</p>
                </Link>
              ))}
            </div>
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

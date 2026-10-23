import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageShell } from "@/components/ui/page-shell";
import { getCaseStudyBySlug, getPublishedCaseStudies } from "@/lib/case-studies";
import { getContactPageHref } from "@/lib/site";

const serviceRouteMap: Record<string, string> = {
  "Web & Application Development": "/services/web-application-development",
  "Salesforce & CRM Engineering": "/services/salesforce-crm",
  "Banking & nCino Solutions": "/services/banking-ncino",
  "Enterprise Integrations & APIs": "/services/enterprise-integrations",
  "Cloud & Data Engineering": "/services/cloud-data-engineering",
  "Technical Consulting & Support": "/services/technical-consulting",
};

export async function generateStaticParams() {
  const studies = getPublishedCaseStudies();

  if (studies.length === 0) {
    return [{ slug: "placeholder" }];
  }

  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const study = getPublishedCaseStudies().find((entry) => entry.slug === resolvedParams.slug) ?? null;

  if (!study) {
    return {
      title: "Case study not found | Canhub Software",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${study.title} | Canhub Software`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const contactHref = getContactPageHref();
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study || getPublishedCaseStudies().every((entry) => entry.slug !== study.slug)) {
    notFound();
  }

  const relatedServices = (study.services ?? []).filter((service) => serviceRouteMap[service]);

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
                <Link href="/work" className="transition-colors hover:text-[var(--brand-accent)]">
                  Our Work
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-[var(--brand-ink)]">{study.title}</span>
              </div>
            </nav>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-accent)]">
                {study.industry ?? "Project work"}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)] sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--brand-muted)]">{study.summary}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={contactHref}>Discuss Your Requirements</ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  Back to our work
                </ButtonLink>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              {study.businessContext ? (
                <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Project overview</h2>
                  <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{study.businessContext}</p>
                </div>
              ) : null}

              {study.challenge ? (
                <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Business requirement</h2>
                  <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{study.challenge}</p>
                </div>
              ) : null}
            </div>

            {study.deliveredSolution ? (
              <div className="mt-8 rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Solution delivered</h2>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{study.deliveredSolution}</p>
              </div>
            ) : null}

            {study.technologies && study.technologies.length > 0 ? (
              <div className="mt-8 rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Technologies</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {study.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-[var(--brand-accent-soft)] px-3 py-1 text-sm font-medium text-[var(--brand-accent-deep)]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {relatedServices.length > 0 ? (
              <div className="mt-8 rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">Related Canhub services</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedServices.map((serviceName) => (
                    <li key={serviceName}>
                      <Link
                        href={serviceRouteMap[serviceName]}
                        className="inline-flex items-center gap-2 text-base font-medium text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent-deep)]"
                      >
                        {serviceName}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

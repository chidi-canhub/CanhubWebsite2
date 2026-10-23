import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/components/ui/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getContactPageHref } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Canhub Software",
  description:
    "Explore Canhub's software engineering services, including web development, Salesforce, integrations, cloud data, and technical consulting.",
};

export default function ServicesOverviewPage() {
  const contactHref = getContactPageHref();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Services"
              title="Software engineering capabilities"
              description="Canhub works with businesses navigating complexity, operational pressure and digital change. Our service mix is designed to help teams build, connect and support practical technology that works in the real world."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                  How we help
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)]">
                  Clear technical direction for complex business needs
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">
                  We combine engineering discipline, business context and delivery support so teams can improve digital systems without adding unnecessary friction or operational risk.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={contactHref}>Discuss Your Requirements</ButtonLink>
                  <ButtonLink href="/" variant="secondary">
                    Return home
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  Delivery model
                </p>
                <ul className="mt-5 space-y-4 text-base leading-7 text-white/75">
                  <li>• Technical discovery grounded in operational reality.</li>
                  <li>• Clear solution design that fits the business and the platform.</li>
                  <li>• Delivery that balances speed, reliability and maintainability.</li>
                  <li>• Support that helps teams keep momentum as requirements evolve.</li>
                </ul>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                    {service.eyebrow}
                  </p>
                  <Link href={`/services/${service.slug}`} className="mt-4 block">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{service.summary}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent-deep)]"
                  >
                    Explore this service
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Together"
              title="Services that work better together"
              description="Many of the most valuable outcomes come from combining capability areas, rather than treating them as isolated projects."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">01</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">Discovery and alignment</h3>
                <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">
                  We clarify business goals, constraints and current technical realities before proposing a practical path.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">02</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">Connected delivery</h3>
                <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">
                  Product, platform, integration and data work connect more effectively when they are designed and evolved as one system.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">03</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">Ongoing support</h3>
                <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">
                  We help teams improve, troubleshoot and evolve systems as operations, regulations and requirements change.
                </p>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] px-6 py-10 text-white sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Start a conversation
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    Discuss your current challenge with Canhub
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/75">
                    We can help you clarify where a platform, integration or digital delivery initiative should begin.
                  </p>
                </div>

                <ButtonLink href={contactHref} variant="light">
                  Discuss Your Requirements
                </ButtonLink>
              </div>
            </div>
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

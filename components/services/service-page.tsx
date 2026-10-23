import Link from "next/link";

import { PageShell } from "@/components/ui/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { getContactPageHref } from "@/lib/site";
import { serviceMap, type Service } from "@/lib/services";

export function ServiceDetailLayout({ service }: { service: Service }) {
  const contactHref = getContactPageHref();
  const relatedServices = service.related
    .map((slug) => serviceMap[slug])
    .filter(Boolean) as Service[];

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-12 sm:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--brand-muted)]">
              <div className="flex flex-wrap items-center gap-2">
                <Link href="/" className="transition-colors hover:text-[var(--brand-accent)]">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/services" className="transition-colors hover:text-[var(--brand-accent)]">
                  Services
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-[var(--brand-ink)]">{service.title}</span>
              </div>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                  {service.eyebrow}
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)] sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--brand-muted)]">{service.summary}</p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={contactHref}>Discuss Your Requirements</ButtonLink>
                  <ButtonLink href="/services" variant="secondary">
                    Back to all services
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                  Business value
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--brand-muted)]">{service.description}</p>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  Business challenges
                </h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  {service.challenges.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-[var(--brand-accent)]">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  What we deliver
                </h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-[var(--brand-accent)]">
                        •
                      </span>
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
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  Technical capabilities
                </h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-[var(--brand-accent)]">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--brand-ink)]">
                  Our approach
                </h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--brand-muted)]">
                  {service.approach.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-1 text-[var(--brand-accent)]">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-accent)]">
                Related services
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)]">
                Complimentary capabilities for broader delivery needs
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                    {relatedService.eyebrow}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">{relatedService.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{relatedService.summary}</p>
                </Link>
              ))}
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] px-6 py-10 text-white sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Next step</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    Discuss your requirements with Canhub
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/75">
                    Whether you need a focused delivery partner or practical technical guidance, we can help clarify the right next step.
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
    </div>
  );
}

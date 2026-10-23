import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ButtonLink } from "@/components/ui/button-link";
import { PageShell } from "@/components/ui/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-bg)]">
          <PageShell className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-accent)]">
                {siteConfig.homepage.eyebrow}
              </p>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
                {siteConfig.homepage.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--brand-muted)]">
                {siteConfig.homepage.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={siteConfig.homepage.primaryCta.href}>
                  {siteConfig.homepage.primaryCta.label}
                </ButtonLink>
                <ButtonLink href={siteConfig.homepage.secondaryCta.href} variant="secondary">
                  {siteConfig.homepage.secondaryCta.label}
                </ButtonLink>
              </div>

              <ul className="mt-10 flex flex-wrap gap-3">
                {siteConfig.homepage.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 py-2 text-sm font-medium text-[var(--brand-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[0_28px_60px_rgba(18,25,35,0.08)] sm:p-8">
              <div className="rounded-[1.5rem] bg-[var(--brand-ink)] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
                  Project direction
                </p>
                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-sm text-[rgba(255,255,255,0.7)]">Focus</p>
                    <p className="mt-2 text-xl font-medium">Clear positioning</p>
                  </div>
                  <div>
                    <p className="text-sm text-[rgba(255,255,255,0.7)]">Experience</p>
                    <p className="mt-2 text-xl font-medium">Connected customer journeys</p>
                  </div>
                  <div>
                    <p className="text-sm text-[rgba(255,255,255,0.7)]">Delivery</p>
                    <p className="mt-2 text-xl font-medium">Measured, maintainable systems</p>
                  </div>
                </div>
              </div>
            </div>
          </PageShell>
        </section>

        <section id="services" className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Services"
              title="Built for clarity, momentum, and long-term value"
              description="We shape the digital foundation that helps teams communicate clearly and deliver better experiences across the customer journey."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {siteConfig.homepage.services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent-soft)] text-lg font-semibold text-[var(--brand-accent)]">
                    {service.title.charAt(0)}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--brand-ink)]">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{service.description}</p>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section id="approach" className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Approach"
              title="A focused process that keeps momentum practical"
              description="The work moves from understanding to structure to implementation so the final experience is grounded in both strategy and usability."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {siteConfig.homepage.approach.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section id="contact" className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-ink)] px-6 py-10 text-white sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.7)]">
                    Start a conversation
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Bring clarity to your next digital move.
                  </h2>
                </div>

                <ButtonLink href="mailto:hello@canhub.com">Book a discovery call</ButtonLink>
              </div>
            </div>
          </PageShell>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

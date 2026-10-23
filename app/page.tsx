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
        <section id="top" className="relative overflow-hidden border-b border-[var(--brand-border)] bg-[var(--brand-bg)]">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(62,107,99,0.22),_transparent_60%)]" />
          <PageShell className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                {siteConfig.homepage.eyebrow}
              </p>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
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

              <ul className="mt-10 flex flex-wrap gap-3" aria-label="Canhub capability highlights">
                {siteConfig.homepage.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--brand-border)] bg-[var(--brand-surface)] px-3 py-2 text-sm font-medium text-[var(--brand-muted)] shadow-[0_6px_18px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[rgba(10,20,30,0.98)] p-5 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.72)]">
                      Delivery blueprint
                    </p>
                    <p className="mt-2 text-xl font-semibold">Connected systems</p>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-[var(--brand-accent-soft)]">
                    C
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[rgba(255,255,255,0.72)]">
                      Platform
                    </p>
                    <p className="mt-3 text-lg font-semibold">Strategy</p>
                    <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.75)]">
                      Architecture that keeps growth and operational complexity in balance.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[var(--brand-accent)]/90 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[rgba(255,255,255,0.78)]">
                      Delivery
                    </p>
                    <p className="mt-3 text-lg font-semibold">Engineering</p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Clear implementation plans and maintainable systems from day one.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-[rgba(255,255,255,0.72)]">
                    <span>System map</span>
                    <span>Live</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      { label: "CRM", value: "96%" },
                      { label: "Integrations", value: "24/7" },
                      { label: "Ops visibility", value: "100%" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="text-sm text-[rgba(255,255,255,0.8)]">{item.label}</span>
                        <span className="text-sm font-semibold text-white">{item.value}</span>
                      </div>
                    ))}
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
              title="Technology that supports ambitious growth"
              description="From bespoke development to enterprise integrations, we design practical digital systems that help business teams move with more clarity and less friction."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {siteConfig.homepage.services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-accent-soft)] text-lg font-semibold text-[var(--brand-accent)]">
                    {service.title.charAt(0)}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--brand-ink)]">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{service.description}</p>
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent-deep)]"
                  >
                    Discuss this capability
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section id="about" className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Why Canhub"
              title="Strategic thinking, technical depth and practical delivery"
              description="We help businesses shape digital systems that do more than look good — they support operations, scale effectively and remain maintainable over time."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {siteConfig.homepage.valueProps.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6"
                >
                  <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section id="industries" className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Industries"
              title="Technology challenges, tailored to the realities of your sector"
              description="We work across regulated, operationally complex and growth-focused environments, helping teams bring structure and momentum to digital change."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {siteConfig.homepage.industries.map((industry) => (
                <article
                  key={industry.title}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-accent-soft)] text-sm font-semibold text-[var(--brand-accent)]">
                    {industry.title.charAt(0)}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--brand-ink)]">{industry.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{industry.description}</p>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section id="work" className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Our Work"
              title="A portfolio framework built for verified project stories"
              description="The case study list below is intentionally draft-only and clearly marked until approved content and publication permission are confirmed."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {siteConfig.homepage.work.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                    {project.tag}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--brand-ink)]">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{project.description}</p>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section id="process" className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="How We Work"
              title="A collaborative process designed for clarity and momentum"
              description="Each engagement is shaped around the real business problem, practical constraints and delivery priorities that matter most."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {siteConfig.homepage.process.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6"
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

        <section id="contact" className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-ink)] px-6 py-10 text-white shadow-[0_30px_60px_rgba(15,23,42,0.12)] sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.7)]">
                    Start a conversation
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Have a project in mind?
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-[rgba(255,255,255,0.72)]">
                    Whether you&apos;re developing something new or improving existing systems, we&apos;d welcome the opportunity to discuss your requirements.
                  </p>
                </div>

                <ButtonLink href={`mailto:${siteConfig.contact.email}?subject=${siteConfig.contact.subject}`}>
                  Start a Conversation
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

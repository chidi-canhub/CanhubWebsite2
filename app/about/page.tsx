import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageShell } from "@/components/ui/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { getContactPageHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Canhub | Canhub Software",
  description:
    "Learn about Canhub Software Ltd, its engineering philosophy and the capabilities it brings to complex business and technology delivery.",
};

export default function AboutPage() {
  const contactHref = getContactPageHref();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-bg)] text-[var(--brand-ink)]">
      <SiteHeader />

      <main className="flex-1">
        <section className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="About"
              title="About Canhub"
              description="Canhub Software Ltd is a UK-based software engineering and technology consultancy helping organisations design, build, integrate and support technology that serves real operations."
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)]">
                  A broad engineering company with specialist depth
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--brand-muted)]">
                  Canhub works across bespoke web and application development, Salesforce and CRM engineering, banking and nCino technology, enterprise integrations, cloud and data engineering, and technical consulting and support.
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--brand-muted)]">
                  The company focuses on practical, maintainable software systems that solve operational problems, improve data flow and support long-term digital resilience.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Capabilities</p>
                <ul className="mt-5 space-y-3 text-base leading-7 text-white/80">
                  <li>• Bespoke web and application development</li>
                  <li>• Salesforce and CRM engineering</li>
                  <li>• Banking and nCino technology</li>
                  <li>• Enterprise integrations and APIs</li>
                  <li>• Cloud and data engineering</li>
                  <li>• Technical consulting and support</li>
                </ul>
              </div>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Approach"
              title="Engineering principles that support sustainable delivery"
              description="Canhub's work is guided by practical engineering discipline rather than abstract theory."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Understand before building",
                  description: "Technology decisions should be shaped by business requirements, operational realities and constraints, not by trend alone.",
                },
                {
                  title: "Design for maintainability",
                  description: "Solutions are expected to remain understandable, supportable and adaptable as the business and platform evolve.",
                },
                {
                  title: "Build reliable integrations",
                  description: "Information flow needs to be dependable, observable and secure across systems that matter to operations.",
                },
                {
                  title: "Protect quality and data integrity",
                  description: "Security, validation and responsible delivery remain central to every design decision and implementation approach.",
                },
                {
                  title: "Keep stakeholders informed",
                  description: "Clear communication, practical planning and relevant decision-making help teams move with confidence.",
                },
                {
                  title: "Support long-term change",
                  description: "The right solution is one that can continue to support the organisation after launch, not only at the point of delivery.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6">
                  <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Background"
              title="Founder-led engineering experience"
              description="The founder, Chidi Anthony Njoku, is a software engineer with experience spanning enterprise Salesforce, banking technology, integrations and software delivery."
            />

            <div className="mt-10 rounded-[1.75rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] p-6 sm:p-8">
              <p className="text-base leading-8 text-[var(--brand-muted)]">
                Chidi&apos;s professional background includes engineering roles at Miller Insurance, LHV Bank, nCino Inc., Mercy Ships and other technology organisations, alongside an academic and professional background in biomedical sciences. This combination has informed an approach to complex, regulated and operationally demanding digital environments.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--brand-muted)]">
                A concise company profile is published here. Further founder biography detail remains subject to owner approval and is not being published as fixed content until the required review is complete.
              </p>
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-bg)]">
          <PageShell className="py-16 sm:py-20">
            <SectionHeading
              label="Values"
              title="Practical engineering values"
              description="The business approach is shaped by clear, useful principles rather than formal corporate slogan content."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Engineering quality",
                "Clear communication",
                "Practical problem solving",
                "Long-term maintainability",
              ].map((value) => (
                <div key={value} className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 text-center text-base font-medium text-[var(--brand-ink)]">
                  {value}
                </div>
              ))}
            </div>
          </PageShell>
        </section>

        <section className="bg-[var(--brand-surface)]">
          <PageShell className="py-16 sm:py-20">
            <div className="rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] px-6 py-10 text-white sm:px-8 lg:px-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Get in touch</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    Talk to Canhub about your next digital project
                  </h2>
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

import Link from "next/link";

import { PageShell } from "@/components/ui/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ApprovedProject } from "@/lib/projects";

type WorkSectionProps = {
  projects: readonly ApprovedProject[];
};

export function WorkSection({ projects }: WorkSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section id="work" className="bg-[var(--brand-bg)]">
      <PageShell className="py-16 sm:py-20">
        <SectionHeading
          label="Our Work"
          title="Selected projects"
          description="A look at the problems we have helped clients solve."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-[1.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
            >
              {project.sector ? (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                  {project.sector}
                </p>
              ) : null}
              <h3 className="mt-4 text-2xl font-semibold text-[var(--brand-ink)]">{project.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--brand-muted)]">{project.summary}</p>
              {project.capabilities?.length ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="rounded-full bg-[var(--brand-accent-soft)] px-3 py-1 text-sm font-medium text-[var(--brand-accent-deep)]"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link
                href={`/work/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-accent-deep)]"
              >
                View case study
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}

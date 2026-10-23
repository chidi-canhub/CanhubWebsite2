import { siteConfig } from "@/lib/site";

export function ArchitectureDiagram() {
  return (
    <div
      aria-hidden="true"
      className="surface-dark rounded-[2rem] border border-[var(--brand-border)] bg-[var(--brand-navy)] p-5 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:p-7"
    >
      <div className="mb-6 flex items-center justify-between">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/75">
          System architecture
        </p>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-[var(--brand-accent-soft)]">
          C
        </span>
      </div>

      <ol className="relative space-y-3">
        <span className="absolute bottom-6 left-5 top-6 w-px bg-white/15" />
        {siteConfig.homepage.architecture.map((item, index) => (
          <li
            key={item.layer}
            className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <span
              className={`relative z-10 h-3 w-3 shrink-0 rounded-full ${
                index === 0 ? "bg-[var(--brand-focus-on-dark)]" : "bg-white/60"
              }`}
            />
            <div className="min-w-0">
              <p className="text-base font-semibold">{item.layer}</p>
              <p className="text-sm leading-6 text-white/75">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

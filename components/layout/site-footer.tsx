import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--brand-border)] bg-[var(--brand-surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-semibold text-white">
              C
            </span>
            <span className="text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--brand-muted)]">
            Strategic digital experiences designed to help teams move with greater clarity and confidence.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-ink)]">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--brand-muted)]">
            {siteConfig.nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-[var(--brand-ink)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-ink)]">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--brand-muted)]">
            <li>
              <a href="mailto:hello@canhub.com" className="transition-colors hover:text-[var(--brand-ink)]">
                hello@canhub.com
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-[var(--brand-ink)]">
                Book a discovery call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

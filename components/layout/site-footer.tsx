import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--brand-border)] bg-[var(--brand-surface)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-semibold text-white">
              C
            </span>
            <span className="text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
              {siteConfig.companyName}
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--brand-muted)]">
            Bespoke software engineering and digital solutions for ambitious teams working through complexity.
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
              <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-[var(--brand-ink)]">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-[var(--brand-ink)]">
                Start a conversation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--brand-border)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-sm text-[var(--brand-muted)] sm:px-6 lg:px-8">
          <p>© {currentYear} {siteConfig.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

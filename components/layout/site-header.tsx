"use client";

import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--brand-border)] bg-[rgba(10,20,30,0.82)] text-white backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-left" aria-label="Canhub home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,96,88,0.35)]">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">{siteConfig.companyName}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[rgba(255,255,255,0.82)] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[var(--brand-accent)] hover:text-white"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          >
            <span className="sr-only">Toggle Navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

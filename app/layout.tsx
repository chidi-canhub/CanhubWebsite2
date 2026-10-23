import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canhub Software | Software Engineering & Digital Solutions",
  description:
    "Canhub Software provides bespoke software development, Salesforce and CRM engineering, banking technology, integrations, and cloud and data solutions.",
  openGraph: {
    title: "Canhub Software | Software Engineering & Digital Solutions",
    description:
      "Canhub Software provides bespoke software development, Salesforce and CRM engineering, banking technology, integrations, and cloud and data solutions.",
    siteName: "Canhub Software",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canhub Software | Software Engineering & Digital Solutions",
    description:
      "Canhub Software provides bespoke software development, Salesforce and CRM engineering, banking technology, integrations, and cloud and data solutions.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--brand-bg)] text-[var(--brand-ink)]">{children}</body>
    </html>
  );
}

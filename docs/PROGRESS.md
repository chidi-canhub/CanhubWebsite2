# Canhub Website V2 — Progress Log

## Milestone 1 status

Status: Complete

## Milestone 2 status

Status: Complete

## Milestone 2.1 status (quality refinement)

Status: Complete, pending a live visual review in a real browser (see limitations).

- Removed visible draft labels, placeholder descriptions and internal development wording from the public homepage.
- Portfolio data moved to `lib/projects.ts` with a `draft` / `approved` status. Only approved entries render; the "Our Work" section and nav link are hidden while none are approved. Amazing Grace Biomedical Laboratory and ESH Services remain as drafts.
- Replaced the hero metrics (CRM 96%, Integrations 24/7, Ops visibility 100%) with a non-numerical architecture diagram (Experience, Integration, Platform, Data & Cloud). Removed the "Live" label.
- Business email is a single setting, `siteConfig.contact.email` in `lib/site.ts`, set to the confirmed address `contact@canhubsoftware.com`. The footer and contact CTA read it via `getContactEmail()` / `getContactHref()`. No provisional addresses remain. It is the intended recipient for future contact forms; delivery is to be configured and tested separately.
- Navigation: every anchor resolves to an existing section (covered by a test). "Our Work" is derived from published projects.
- Accessibility and layout: Escape closes the mobile menu and returns focus to the toggle; 44px touch targets in the mobile menu; "Let's Talk" moves into the mobile menu below 640px to prevent header overflow; focus ring switches to a light colour on dark surfaces; sticky-header scroll offset for anchors; light button variant for the dark CTA panel; horizontal overflow clipped on body.
- Tests expanded to 15 (draft/metric absence, anchor integrity, contact configuration, mobile navigation, portfolio filtering).

### Outstanding items

- Contact form delivery (mailbox routing, spam protection, testing) is not yet configured; the address is currently used only for mailto links.
- Case study content and publication permission for the two portfolio entries.
- Footer copyright year is a static value (2026) because reading the current date during prerender fails under Cache Components; revisit when a rendering approach is chosen.

### Limitations

- No browser, screenshot or device tooling was available. Desktop, tablet and mobile layouts, rendered contrast, focus rings, and the real mobile menu were reviewed from source only. Contrast values were estimated from the design tokens, not measured on rendered output. The deployed site could not be inspected from this environment; the review was of the repository source.

## Completed

- Next.js app initialized with TypeScript, Tailwind CSS, and App Router.
- Strict TypeScript configuration and ESLint foundation established.
- Responsive shell implemented with reusable header and footer.
- Centralized provisional brand tokens and typography foundation added in the global CSS system.
- Shared UI primitives created for buttons, headings, layout shells, and section structure.
- Central content configuration implemented for navigation and homepage messaging.
- Premium corporate homepage implemented with navigation, hero, services, industries, work, process, and CTA sections.
- SEO metadata updated for the homepage and updated brand positioning.
- Portfolio data is kept as unpublished drafts and is not rendered until approved (see Milestone 2.1).
- Documentation created for project specification, implementation plan, and progress tracking.
- JEST + Testing Library smoke tests configured and passing.
- Local development instructions documented in the README.

## Validation performed

- ESLint validation passed.
- TypeScript compile check passed.
- Homepage smoke tests passed.
- Production build passed.

## Notes

- No fabricated achievements, testimonials, or client results were added.
- Portfolio entries remain unpublished until content and permission are confirmed.
- Remaining website pages are intentionally deferred to the next milestone.
- No production deployment was performed.
- Browser-based visual review was not possible in this environment; see Milestone 2.1 limitations.

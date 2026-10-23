# Canhub Website V2 — Implementation Plan

## 1. Purpose

This document translates the product specification into an execution plan across Milestone 1 and Milestone 2. It defines implementation order, page scoping, architecture decisions, and verification steps required before moving to later milestones.

## 2. Scope for Milestone 1

Milestone 1 includes the foundation required to support future page development without rework:

- project bootsrapping and tooling alignment
- responsive app shell
- shared components and layout primitives
- central brand tokens and typography settings
- homepage implementation
- metadata and content configuration foundation
- documentation and validation baseline

Milestone 1 intentionally excludes:

- full service page implementation
- detailed company/about page
- case study or blog content pages
- final production deployment
- production SEO configuration beyond foundational metadata

## 3. Scope for Milestone 2

Milestone 2 adds the premium homepage experience required for launch preparation and stakeholder review:

- polished responsive navigation
- refined hero section with software architecture visual treatment
- service overview with six capability cards
- value proposition section and industry overview
- reusable draft work section with clearly identified placeholder case study data
- process section and final CTA
- complete footer and homepage metadata refinements

## 3a. Scope for Milestone 2.1 (quality refinement)

- Public pages must not show draft labels, placeholder copy or internal development language.
- Portfolio entries live in `lib/projects.ts` and render only when `status` is `approved`; the Our Work section and navigation link are derived from that data.
- Illustrative numeric metrics are not permitted; the hero visual uses architecture layer labels only.
- The business contact email is defined once in `siteConfig.contact` (`lib/site.ts`) and is never hard-coded in components.
- Every in-page anchor must resolve to an existing section (enforced by tests).

## 4. Implementation sequence

### Phase 1 — Project setup

1. Initialize the Next.js app with TypeScript, Tailwind CSS, and App Router.
2. Confirm strict TypeScript settings and baseline linting.
3. Add a minimal testing setup for component-level smoke tests.
4. Establish project directory conventions for docs, components, configuration, and tests.

### Phase 2 — App foundation

1. Create the root layout and metadata configuration.
2. Define the site shell with responsive header and footer.
3. Create reusable UI primitives for buttons, section headings, and page containers.
4. Introduce central site/configuration objects for navigation and brand primitives.

### Phase 3 — Homepage implementation

1. Build a hero section with clear positioning and CTA.
2. Implement the full service overview band.
3. Add a value proposition and industry overview.
4. Add a draft work showcase and process section.
5. Add a final CTA and polished footer.

### Phase 4 — Validation and documentation

1. Run linting and TypeScript checks.
2. Execute homepage smoke tests.
3. Review README and project docs.
4. Confirm milestone acceptance criteria before concluding the phase.

## 5. Page and content strategy

### Home page structure

- Hero with headline, supporting copy, primary CTA, secondary CTA
- Service summary cards
- Why Canhub value proposition
- Industry categories
- Draft portfolio layout for future verified case studies
- Process or capability overview
- Final contact CTA

### Content principles

- Keep copy factual and unembellished.
- Use clear service and positioning language.
- Avoid unsupported claims or metrics.
- Clearly label draft case study content until verified.
- Make CTAs actionable without requiring invented proof points.

## 6. Shared component plan

### Layout

- Root shell with consistent max-width spacing
- Header with navigation and mobile-friendly menu behaviour
- Footer with core navigation and contact details

### UI primitives

- Button variants for primary and secondary actions
- Container wrapper for page sections
- Section header component for consistent headings and labels
- Card component for service, industry and portfolio blocks

### Styling system

- Centralized color variables in CSS tokens
- Typography scale using a defined headline and body pattern
- Spacing scale based on consistent rhythm
- Responsive mobile-first design baseline
- Reduced motion support and accessible focus states

## 7. Technical decisions

- App Router is used because it is the default modern Next.js pattern and supports metadata and route-based structure cleanly.
- TypeScript strict mode remains enabled to prevent weak typing and future regressions.
- Tailwind CSS is used for utility-first styling consistency and speed of iteration.
- Configuration objects are used instead of repeated hard-coded strings for navigation and marketing content.
- Testing focuses on real DOM output and user-facing text so the app behavior is verified rather than mocked.
- Dynamic values like the current year are deferred to the client to avoid prerender instability.

## 8. Testing and validation plan

### Automated checks

- ESLint for code quality and Next.js rules
- TypeScript compiler for structural correctness
- Jest + Testing Library for homepage smoke tests
- Production build verification with Next build

### Manual checks

- Responsive layout at mobile, tablet, and desktop widths
- Header navigation behaviour and footer rendering
- Visual clarity of brand palette and typography
- CTA visibility and hierarchy
- Accessibility review with semantic headings and visible focus states

## 9. Acceptance checklist

- App is initialized and running locally
- The app shell is responsive and reusable
- Global CSS tokens exist for color and typography
- Core UI components are in place
- Homepage contains the full required sections
- Metadata is in place for the homepage
- README and docs are complete
- All validation checks pass

## 10. Dependencies and risks

Potential risks:

- Over-specifying page details before future milestones begin
- Using mock or placeholder content beyond the approved brand direction
- Ignoring responsive edge cases while the shell is still being built
- Publishing unverified case study content without approval

Mitigations:

- Keep the content model intentionally modular
- Store provisional copy in one place and label it clearly as draft
- Validate the shell before implementing more pages
- Maintain conservative brand language until approved content arrives

## 11. Exit criteria for Milestone 3

The project can move to Milestone 3 when the homepage is stable, fully responsive, documented, and all checks pass without blocking issues. Content placeholders should be clearly flagged as provisional and should not be treated as final client proof.

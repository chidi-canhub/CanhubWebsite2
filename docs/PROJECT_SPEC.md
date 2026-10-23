# Canhub Website V2 — Project Specification

## 1. Project overview

Canhub Website V2 is the next iteration of the company website, designed to present the brand, service proposition, and conversion paths in a clearer and more conversion-focused structure. The site must feel modern, credible, and easy to maintain as it grows across future milestones.

This milestone focuses on establishing the foundation: architecture, shared design system, content model, and a stable app shell. It does not include full implementation of every marketing page yet. The remaining pages are intentionally deferred to later milestones.

## 2. Business goals

- Present Canhub as a clear and credible digital partner.
- Communicate the value proposition in a structured, easy-to-scan format.
- Provide a strong path from landing page attention to inquiry and next-step conversion.
- Create a scalable content architecture that can support multi-page growth without rework.
- Establish a maintainable design system with consistent components and brand tokens.

## 3. What this project is not

- No fabricated achievements, testimonials, client results, awards, or partnership claims.
- No unrealistic performance claims or inflated metrics.
- No final conversion design for all pages before the architecture is validated.

## 4. Audience and primary use cases

Primary audiences:

- Prospective clients investigating a digital partner.
- Prospective team members discovering the company culture and capabilities.
- Existing stakeholders reviewing project direction and content structure.

Core use cases:

- Understand who Canhub is and what it offers.
- Navigate the homepage and key service overview quickly.
- Discover a clear path to contact or project inquiry.
- Review the site as a quality benchmark for future page development.

## 5. Product goals by milestone

### Milestone 1 — Foundation and homepage

- Establish project architecture and technical standards.
- Create responsive app shell, shared components, and website metadata foundation.
- Implement a branded homepage that demonstrates the system and content direction.
- Set up validation, linting, and testing baseline.

### Milestone 2 — Service and company pages

- Add service overview and detailed service pages.
- Add company/about content structure.
- Add CTA, contact, and conversion-focused sections.

### Milestone 3 — Content, proof, and refinement

- Expand deep content sections and conversion copies.
- Validate content quality and editorial consistency.
- Refine responsive states and interactions.

### Milestone 4 — Launch readiness

- Final QA, SEO validation, accessibility review, and launch preparation.

## 6. Planned site architecture

The site will be built with Next.js, TypeScript, Tailwind CSS, and the App Router. The content model will keep each page configurable via central site data objects to reduce hard-coded duplication and support future content changes.

### Planned pages

1. Home
   - Hero section
   - Value proposition
   - Capabilities overview
   - Service summary cards
   - CTA flow
   - Trust-building narrative without fabricated results

2. Services
   - Overview of service offerings
   - Individual service detail sections
   - Process or delivery explanation

3. About / Company
   - Narrative about the company
   - Values or positioning
   - Team and company culture overview if needed

4. Work / Case Studies
   - Selected project examples with real, approved content only
   - Clear context and outcomes if approved

5. Insights / Blog
   - Editorial or thought-leadership content
   - Category structure and article listing

6. Contact
   - Inquiry form or call-to-action
   - Contact details and response process

7. Legal / Utility pages
   - Privacy policy
   - Terms
   - Cookie information if necessary

## 7. Shared components

- App shell and layout frame
- Header with navigation and mobile menu
- Footer with navigation, contact links, and legal links
- Reusable button styles
- Section heading component
- Content card component
- CTA band component
- Form field styles and layout helpers
- Metadata helpers for page titles and descriptions

## 8. Content structure

The site will rely on a central content configuration file containing:

- brand identity values
- navigation items
- footer links
- homepage marketing copy
- contact details
- social/media references if approved

This reduces hard-coded duplication across pages and keeps future copy changes centralized.

## 9. Technical decisions

- Next.js App Router for routing and metadata support
- TypeScript strict mode for safer component contracts
- Tailwind CSS for fast visual consistency and responsive layout
- Reusable layout primitives for predictable spacing and structure
- Centralized site configuration to support future content branching
- Minimal dependency footprint for early-stage maintainability

## 10. Testing strategy

Quality gates will focus on lightweight verification that is stable and maintainable:

- Linting via ESLint
- TypeScript compilation checks
- Component smoke tests for the homepage and core layout
- Build verification before milestone acceptance

Testing will prioritize real rendered behavior rather than mock-only assertions.

## 11. Milestone acceptance criteria

Milestone 1 is accepted when all of the following are true:

- Project is initialized with Next.js, TypeScript, Tailwind, App Router, and strict TS config.
- Documentation is in place and describes the project architecture and milestones.
- Responsive layout shell is implemented with reusable header and footer.
- Shared brand colors and typography foundation are centralized.
- Basic homepage is implemented and matches the planned brand direction.
- SEO metadata foundation is present in the root layout.
- Linting, TypeScript validation, and component tests pass.
- README documents the local development process.
- No fabricated client achievements, testimonials, or results are included.

## 12. Risks and constraints

- Future content must be validated against approval and factual accuracy requirements.
- Early design choices should remain flexible enough for future page expansion.
- The system should avoid over-fitting to one specific marketing pattern too early.

## 13. Definition of done for foundation work

The project is ready to move to Milestone 2 only after the foundation is stable, documented, and validated. The app shell must be reusable and the homepage must serve as a reliable baseline for the remaining website pages.

# Canhub Website V2

This project is the foundation for the Canhub Website V2 build using Next.js, TypeScript, Tailwind CSS, and the App Router.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in a browser.

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — run the production build
- `npm run lint` — run ESLint validation
- `npm run test` — run the frontend smoke tests
- `npm run typecheck` — run the TypeScript compiler in no-emit mode

## Configuration

The confirmed public contact address for Canhub Software Ltd (`contact@canhubsoftware.com`) is defined once, in `siteConfig.contact` in `lib/site.ts`. Components must use `getContactEmail()` and `getContactHref()` rather than hard-coding it. It is also the intended recipient for future contact forms; delivery must be configured and tested separately.

## Portfolio content

Projects are defined in `lib/projects.ts`. Only entries with `status: "approved"` are rendered; drafts stay hidden, and the "Our Work" section and navigation link appear only when at least one approved project exists. Approve an entry only after its summary is accurate and the client has given permission to publish.

## Project notes

- The site currently uses a provisional brand palette and content structure.
- Remaining pages are intentionally deferred to later milestones.
- Content claims remain conservative and factual, with no invented achievements or client results.

## Validation

Before considering a milestone complete, run:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

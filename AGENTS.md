# Repository Guidelines

## Project Structure & Module Organization

Beachline Cleaners is an Astro website using TypeScript and Tailwind CSS 4. Routes live in `src/pages/`; reusable Astro components live in `src/components/`, with the shared shell in `src/layouts/BaseLayout.astro`. Business copy lives in `src/data/content.ts`, public pricing and estimator logic in `src/data/pricing.ts`, and machine-readable content helpers in `src/data/agent-content.ts`.

Store photography in `src/assets/images/` and serve it through `SiteImage.astro`. Static files belong in `public/`. Shared styles live in `src/styles/`; development utilities live in `scripts/`. Treat `dist/` and `.astro/` as generated output.

## Build, Test, and Development Commands

Use Node.js 22.12 or newer and npm with the committed lockfile.

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Astro development server.
- `npm run build`: generate the production site in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run typecheck`: run Astro's TypeScript and template checks.
- `npm run screenshots`: build, start preview, and capture pages with Playwright into `artifacts/screenshots/`.
- `npx playwright install chromium`: install the browser needed for captures.

## Coding Style & Naming Conventions

Follow existing two-space indentation, single-quoted TypeScript imports, and semicolons. Use PascalCase component filenames (`ServiceCard.astro`) and lowercase hyphenated route filenames (`deep-cleaning.astro`). TypeScript extends Astro's strict configuration; no dedicated formatter or linter is configured.

Reuse `src/styles/ui.ts` utilities. Define canonical colors in `src/data/design-tokens.ts` using OKLCH; consume named tokens in components instead of independent color literals.

## Testing Guidelines

No unit-test suite or coverage threshold is configured. Before submitting changes, run `npm run typecheck` and `npm run build`. For UI changes, inspect Playwright captures at 375, 768, and 1440 pixels. Captures do not assert behavior: manually check affected navigation, estimator inputs, and form validation.

## Commit & Pull Request Guidelines

Recent commit subjects do not establish a meaningful convention. Use concise, imperative messages describing the change. PRs should explain purpose, affected routes, and validation performed; link relevant issues and include screenshots for visual changes. Keep unrelated edits out of the change.

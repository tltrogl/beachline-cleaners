# Beachline Cleaners — Astro Website

Beachline Cleaners is a responsive, multi-page Astro site for a Brevard County cleaning business offering:

- Home Cleaning
- Deep Cleaning
- Move-In / Move-Out Cleaning
- Vacation Rental Turnovers
- Commercial Cleaning

This repository is the application source snapshot assembled on October 4, 2026. The final business pricing model is maintained separately in `Beachline_Cleaners_Pricing_Framework_v2_Final.docx`; do not infer or revise pricing from this README.

## Current source status

This cumulative source includes the October 4 pricing/estimator implementation and site polish pass. Website pricing used by the public site is centralized in `src/data/pricing.ts`, with visible service pricing, quote-estimator behavior, agent-readable content, and `site-info.json` synchronized to that source where practical.

The Quote page now provides client-side estimates for supported Home Cleaning, Deep Cleaning, Move-In / Move-Out, and Vacation Rental configurations. Commercial, oversized, unusual, rush, and otherwise unsupported requests resolve to **Custom quote** instead of a fabricated automatic price. The internal commercial square-footage rate card is intentionally not included in public/browser-facing pricing data.

Customer-facing quote CTAs use **Request a Quote** consistently. The actual form submission button remains **Send Quote Request**.

## Project structure

```text
.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public/
│   ├── .well-known/api-catalog
│   ├── _headers
│   ├── api-docs.txt
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── openapi.json
│   └── robots.txt
├── scripts/
│   └── capture-site.mjs
└── src/
    ├── assets/images/
    ├── components/
    ├── data/
    ├── layouts/
    ├── pages/
    └── styles/
```

## Requirements

- Node.js 22.12 or newer
- npm 9.6.5 or newer

## Start locally

```bash
npm install
npm run dev
```

Then open the local URL Astro prints in the terminal.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
npm run screenshots
```

`npm run screenshots` builds the site, starts the Astro preview server, and uses Playwright to capture the main pages at approximately 375 px, 768 px, and 1440 px widths. Screenshots are written to `artifacts/screenshots/`.

If Playwright's Chromium browser is not installed locally, install the browser once with:

```bash
npx playwright install chromium
```

## Styling

Tailwind CSS 4 is compiled through `@tailwindcss/vite`; no runtime CDN is used.

- `src/styles/site.css` defines the shared fonts, color tokens, breakpoints, and shadows.
- `src/styles/ui.ts` contains shared utility-class strings.
- `src/components/Button.astro` provides common button variants.
- Page layout and component styling primarily use Tailwind utility classes.

The current visual system uses Beachline's blue/navy, teal, mint/seafoam, white, and pink accent palette.

## Content and business configuration

Shared business and page content lives in:

```text
src/data/content.ts
```

Agent-readable text generation lives in:

```text
src/data/agent-content.ts
```

The business name, contact information, service areas, service copy, and quote-form configuration are defined through these shared data files. Public pricing constants and estimator functions live in `src/data/pricing.ts` so exact current prices are not maintained independently across pages.

## Quote form

Quote requests are submitted through Formspree from `src/pages/quote.astro`. The endpoint is configured in `src/data/content.ts`.

The form includes:

- a honeypot field
- native browser validation
- an explicit privacy disclosure
- conditional service fields
- a client-side instant estimator for supported services
- Custom quote handling for unsupported/over-limit requests
- hidden submission fields recording the displayed estimate and relevant pricing inputs
- a successful-submission redirect to `/quote-success/`

After deployment changes, use a clearly marked test submission and verify both the Formspree receipt and the success redirect before relying on the form for leads.

The mobile quick-action bar provides Call, Text, and quote actions and is hidden on pages that opt out of the mobile bar, including the quote flow where appropriate.

## Images and alt text

Site photography is stored under:

```text
src/assets/images/
```

Pages can continue to refer to `/images/...` paths because `src/components/SiteImage.astro` maps supported image names to Astro image assets.

Photography is illustrative and should not be treated as proof of Beachline staff, completed jobs, or business history unless authentic business photography is supplied and identified as such.

## Agent discovery and public machine-readable information

`/llms.txt` provides a plain-text site guide. `/markdown/index.md` and `/markdown/<page-name>.md` provide Markdown versions of public site content generated from the same shared content data used by the HTML pages.

`/site-info.json` exposes read-only public business information as Schema.org JSON-LD. There is **no** booking, quote-submission, payment, account, or live-availability API.

Static discovery files are in `public/`:

- `/.well-known/api-catalog`
- `/openapi.json`
- `/api-docs.txt`
- `/robots.txt`

`public/_headers` sets the required media types for the agent-readable static resources on Cloudflare Pages.

The homepage also uses a Cloudflare response-header Transform Rule named `Homepage agent discovery`. Its match expression is:

```text
(http.host eq "beachlinecleaners.com" and http.request.uri.path eq "/")
```

The static `Link` response header should preserve other Link values and include:

```text
</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </openapi.json>; rel="service-desc"; type="application/json", </api-docs.txt>; rel="service-doc"; type="text/plain", </site-info.json>; rel="describedby"; type="application/json"
```

This Cloudflare rule is infrastructure configuration and is not stored in the Git repository.

## Build and deployment

Production hosting is handled by Cloudflare Pages.

- Repository: `https://github.com/tltrogl/beachline-cleaners.git`
- Pages project: `beachline-cleaners.pages.dev`
- Custom domain: `https://beachlinecleaners.com`
- Build command: `npm run build`
- Build output directory: `dist`

`astro.config.mjs` uses directory-format output, trailing slashes, and the Astro sitemap integration. Quote-success and 404 routes are excluded from the sitemap.

## Trust and claims

Do not add claims that have not been verified. In particular, do not invent or imply:

- ratings or review counts
- insurance or bonding
- background checks
- guarantees
- response-time promises
- years in business
- staff size
- awards or certifications

Current positioning can rely on concrete, supportable statements already present in the content, such as direct phone/text communication, property-specific quotes, agreed cleaning scope, supplied standard cleaning equipment, and service arrangements that are explicitly defined.

Add an owner name, owner portrait, staff claims, or completed-job photography only when authentic material is available.

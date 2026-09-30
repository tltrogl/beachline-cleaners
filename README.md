# Beachline Cleaners — Astro Website

## Agent discovery

The homepage advertises public discovery resources through the Cloudflare response
header Transform Rule `Homepage agent discovery`. Match expression:

```text
(http.host eq "beachlinecleaners.com" and http.request.uri.path eq "/")
```

Add a static `Link` response header (preserving other Link values):

```text
</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json", </openapi.json>; rel="service-desc"; type="application/json", </api-docs.txt>; rel="service-doc"; type="text/plain", </site-info.json>; rel="describedby"; type="application/json"
```

`site-info.json` is generated from the site's existing public content at build
time. The OpenAPI description documents only this read-only resource. No booking
or quote-submission API is exposed. `public/_headers` supplies the catalog's
required media type on Cloudflare Pages/Workers static hosting. The homepage
header rule lives in Cloudflare and must be preserved separately from GitHub.

Validate by posting `{"url":"https://beachlinecleaners.com"}` as JSON to
`https://isitagentready.com/api/scan` and checking
`checks.discoverability.linkHeaders.status` equals `"pass"`.

A responsive multi-page Astro site for a cleaning company offering:
- Residential cleaning
- Vacation-rental turnovers
- Deep cleaning
- Move-in / move-out cleaning

## Start locally

```bash
npm install
npm run dev
```

Then open the local URL Astro prints in the terminal.

## Styling

Tailwind CSS 4 is compiled through `@tailwindcss/vite`; no runtime CDN is used.
`src/styles/site.css` imports Tailwind and defines the shared fonts, colors,
breakpoints, and shadows with `@theme`.

Use utility classes for layout, spacing, typography, responsive behavior, and
common states. Shared utility strings live in `src/styles/ui.ts`, and
`src/components/Button.astro` provides the common button variants. Keep custom
CSS in `site.css` for decorative pseudo-elements and disclosure markers.

## Build

```bash
npm run build
```

## Deployment

Production hosting is handled by Cloudflare Pages.

- Source repository: `https://github.com/tltrogl/beachline-cleaners.git`
- Production Pages project: `beachline-cleaners.pages.dev`
- Custom domain: `https://beachlinecleaners.com`
- Build command: `npm run build`
- Build output directory: `dist`

Pushes to the production branch connected in Cloudflare Pages trigger a new build and deployment. GitHub Pages is not used.

## Rename the business

The brand is Beachline Cleaners. Its name and details are configured in:

`src/data/content.ts`

Update:
- `name`
- `shortName`
- `tagline`
- phone
- service area

Most pages pull the brand name automatically.

## Quote form

Quote requests are submitted through Formspree from `src/pages/quote.astro`. The endpoint is configured in `src/data/content.ts`. The form includes a honeypot field, native browser validation, an explicit privacy disclosure, and redirects successful submissions to `/quote-success/`.

After deployment changes, send a clearly marked test submission and verify both Formspree receipt and the success redirect before relying on the form for leads.

The mobile quick action bar provides Call, Text, and Get a Quote buttons and is hidden on `/quote/` and `/quote-success/`.

## Images & Alt Text

The homepage hero uses `public/images/cleaner-counter.webp`. The rental section uses `public/images/rental-bedroom.jpg`. Service photography is illustrative stock, not evidence of company staff or completed jobs. The replacement photos are stored locally:

- `deep-cleaning-kitchen.jpg`: [RDNE Stock project / Pexels](https://www.pexels.com/photo/close-up-shot-of-a-woman-wiping-the-refrigerator-5591926/), wiping a refrigerator.
- `move-out-empty-room.jpg`: [Max Vakhtbovych / Pexels](https://www.pexels.com/photo/empty-room-of-modern-apartment-7031599/), unfurnished room with wood flooring.

## Trust claims & Verified credentials

Rating, insurance, background-check, guarantee, and 24-hour response promises are removed. Unconfirmed free-estimate, no-contract, immediate-scheduling, fixed cancellation-notice, and deep-clean duration claims are also removed. Quotes may need photos or additional details. Current positioning includes:
- Locally owned & operated
- Quotes based on the property and requested scope
- Direct phone/text communication
- Checklist-based service
- Operational policies (linens, restocking, same-day turns) noted as available by arrangement

The owner still needs to confirm that service inclusions, supplies, pet/access arrangements, cancellation terms, and communication channels reflect actual operations. Wording changes do not verify business policies. Add an owner name/photo only when authentic material is provided.

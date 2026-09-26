# Beachline Cleaners — Astro Website

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

## Build

```bash
npm run build
```

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

The quote form is prepared for Netlify form processing (`data-netlify="true"`), with separate required Phone and Email inputs. Phone syntax accepts 10–15 digits with common formatting; email uses native browser validation. These checks cannot verify ownership or reachability of a contact method.

There is no deployment yet. Local Astro preview does not process inquiries, and successful delivery has not been verified. After deploying with Netlify form detection enabled, submit a clearly marked test, verify its receipt in Netlify and the configured notification destination, and check the success redirect before accepting online leads.

The mobile quick action bar provides Call, Text, and Get a Quote buttons. On mobile screens, it is fixed to the bottom of the viewport with guaranteed bottom padding clearance on the footer so page content and footer links are never covered. It remains completely hidden on `/quote/` and `/quote-success/`.

## Images & Alt Text

The homepage hero uses `public/images/hero-living-room.jpg`. The rental section uses `public/images/rental-bedroom.jpg`. Service photography is illustrative stock, not evidence of company staff or completed jobs. The replacement photos are stored locally:

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

# Remaining content and pricing changes

Local implementation plan, reviewed September 30, 2026.

## Goal and boundary

Finish the existing content pass with visible pricing and a clearer quote request.
Preserve the current design, routes, contact details, and Formspree submission.
Keep the earlier AI-discovery work. Owner biography remains deferred. No deployment,
commit, new guarantees, cancellation fees, or credentials are part of this pass.

The owner approved these Beachline starting rates on September 30, 2026:
home $125, deep $275, move-in/out $350; STR studio/1BR/1BA $125,
2BR/2BA $150, 3BR/2BA $175, 4BR/3BA $225. Larger rentals and commercial work use a
custom quote. All numeric rates are starting prices. Laundry, restocking, and
appliance/cabinet/window interiors remain separately quoted as already described.

## Source and graph findings

The installed codebase-memory-mcp CLI indexed C-cleaning: 232 nodes, 503 edges,
zero partial or unusable parses. Its query traced homeContent/servicesDetail to
agent-content.ts and pageMarkdown to the Markdown route. Direct source inspection
confirms Astro service pages also use servicesDetail and the shared ServicePage.
The graph is a locator; source controls the implementation.

## Ordered tasks and acceptance

1. **Shared prices and conditions:** update src/data/content.ts with service price
   labels and rental size rows. Homepage service summaries reference those same
   values. FAQ explains starting prices and separately quoted extras. STR linen
   resets with supplied clean linens remain distinct from laundry/restocking.
2. **Visible presentation:** update src/pages/index.astro and
   src/components/ServicePage.astro; add a small reusable RentalPricing table.
   Existing service cards show prices. The homepage rental section and rental
   service page show the same table. Commercial work shows Custom quote. Mobile
   labels and prices must remain readable without horizontal page overflow.
3. **Quote details and wording:** update src/pages/quote.astro and shared labels.
   Show size, bed/bath count, and date/frequency without opening optional details.
   Keep them optional and retain existing field names and form behavior. Keep
   additional notes optional; explain rental timing/linen information in its prompt.
   Move remaining homepage section descriptions into shared content so Markdown
   includes the same context. About and service coverage need no new invented facts.
4. **Markdown parity:** update src/data/agent-content.ts to render the shared prices,
   rental rows, price conditions, and quote-field guidance. Never edit dist directly.

## Plan review

- Each presentation change uses existing content/layout patterns; no redesign.
- Prices, units, rental sizes, and extras have one source for HTML and Markdown.
- No universal exact quote, booked appointment, deposit refund, or competitor
  guarantee is implied. The owner has approved the numeric starting rates.
- No new submission endpoint, required field, or external message is introduced.
- Previously completed content sections are preserved rather than redone.
- Implementation is authorized; publishing these changes remains outside this pass.

## Verification

Run npm run build and npm run typecheck, then git diff --check. Inspect generated
HTML/Markdown for every affected page: correct rate/unit, matching rental rows,
extras, and existing quote form contract. Capture the site with the existing
scripts/capture-site.mjs command and visually inspect the changed homepage, rental
page, and quote form at desktop/mobile sizes. Do not send a real inquiry.
Refresh the graph after the edits and read its status. Stop after required checks.

## Implementation result

Completed locally September 30, 2026. Shared price labels, five rental size rows,
service-card/service-page presentation, FAQ pricing, linen/laundry clarification,
visible optional property fields, and Markdown parity are implemented.

- Build passed; typecheck reported 0 errors, 0 warnings, and one existing
  CommonJS hint in fix_slashes.js.
- Generated-output assertions passed for 10 HTML/Markdown pairs, all five service
  labels, matching five-row rental tables, separately quoted laundry/restocking,
  and the preserved POST endpoint and four required form fields.
- Screenshot run: screenshots/2026-09-30T21-25-31-806Z/manifest.json; 22 captures,
  errors=[]. Manually inspected homepage, vacation-rental, and quote desktop/mobile
  images; no obvious clipping. No real quote was submitted.
- Final graph refresh: C-cleaning, 248 nodes, 532 edges; zero partial/unusable parses.
- No deployment or commit. The owner has approved the starting rates; owner
  biography remains deferred. This approval does not deploy the local changes.

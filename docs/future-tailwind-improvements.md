# Future Tailwind improvements

Status: planned only. Saved September 30, 2026.

The site currently uses Tailwind 4.3.3. Preserve the approved content, prices,
blue/teal identity, and quote submission behavior. This plan does not authorize
implementation or deployment.

## 1. Let quote notes grow with their content

**File:** src/pages/quote.astro

Use `field-sizing-content` on the notes textarea with sensible minimum and maximum
heights. Preserve vertical resizing and a usable fixed-height fallback in browsers
that do not support content sizing. Keep the field optional and its name unchanged.

**Check:** short and long notes remain readable at mobile and desktop widths;
long content can scroll after the maximum height; the fallback remains usable.

Source: https://tailwindcss.com/docs/field-sizing

## 2. Align the STR pricing column

**File:** src/components/RentalPricing.astro

Use `tabular-nums` for numeric prices and right-align the price column and its
heading. Keep Custom quote readable in the narrow sidebar. Confirm the installed
font supports tabular digits before claiming a visible typography improvement.

**Check:** inspect the homepage and rental service page at mobile and desktop
widths. All amounts, labels, and Markdown values must remain unchanged.

Source: https://tailwindcss.com/docs/font-variant-numeric

## 3. Standardize breakpoint units

**Files:** src/styles/site.css and affected responsive classes in src/styles/ui.ts,
src/components/, and src/pages/.

Review custom px breakpoints alongside Tailwind's retained rem defaults. Choose a
consistent unit scheme and account for arbitrary px breakpoints where they overlap
theme breakpoints. Preserve intended layout thresholds and check generated rule
ordering. Mixed units are a maintenance concern; no current visible bug was proven.

**Check:** test just below and above each affected threshold, including the mobile
menu and tablet layouts. Check text zoom. Avoid changing layout thresholds solely
to make values look cleaner.

Source: https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints

## 4. Complete reduced-motion handling

**Files:** src/components/Button.astro, src/styles/ui.ts, and other active components
with transitions identified during implementation.

Add `motion-reduce:transition-none` where appropriate. Preserve existing motion-safe
movement rules and keyboard focus indicators. No additional animations are needed.

**Check:** emulate reduced motion and verify that relevant transitions are suppressed;
normal preferences retain current feedback. Verify focus and validation styling.

Source: https://tailwindcss.com/docs/transition-property#supporting-reduced-motion

## 5. Consider container queries for rental pricing

**File:** src/components/RentalPricing.astro

Lower priority. The table is reused in a wide homepage block and a narrow service
sidebar. Use a named container and container-query spacing only if visual checks
show a concrete improvement. Preserve the semantic table and all pricing content.
Existing container-query usage is in ServiceCard.astro, which current pages do not
import; changing that unused component would not improve the current pages.

**Check:** inspect both placements at narrow, intermediate, and wide sizes. Avoid
horizontal page overflow or reducing text below a comfortable reading size.

Source: https://tailwindcss.com/docs/responsive-design#container-queries

## Execution and verification

Implement items 1 and 2 first, then 3 and 4. Item 5 depends on a demonstrated layout
benefit. Reinspect affected source and relevant browser support when work begins.
After implementation, run npm run build, npm run typecheck, and git diff --check.
Use focused browser checks for the behaviors above and the existing screenshot
command for changed layouts. Do not send a real quote request during verification.
Deployment remains a separate step.

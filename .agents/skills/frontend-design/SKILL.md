---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Establish the requested outcome, audience, and desired degree of visual change from the brief. Treat missing context as unknown. Make deliberate choices about palette, typography, and layout that serve the subject and the user's goals; take aesthetic risk when the brief justifies it.

## Match the workflow to the request

For an existing site, inspect the affected page, relevant shared components, design tokens, typography, and responsive behavior before choosing a direction. Reuse established design choices unless the requested outcome calls for changing them. If source or rendered access is unavailable, state the limitation and work from the available evidence.

| Request | Approach |
| --- | --- |
| Small copy, component, or styling change | Preserve the existing design; make the requested change and check its affected behavior and layout. Skip a new visual direction or full design plan. |
| New interface or substantial redesign | Use the full planning, review, build, and critique process below. |
| Scope or essential context is unclear | Ask only about missing information that materially affects the result; continue independent work supported by the brief. |

Follow the requested work stage. A request for a plan or critique produces that deliverable; implementation requires a request to build or apply changes.

## Ground your designs in the subject matter

Use the brief and existing project to establish the product, audience, and interface's primary job. If essential context remains missing, ask a focused question or present a clearly labeled proposal for confirmation. Treat remembered preferences as hints to check against the current brief. The subject's industry, materials, and visual language should inform the design. Build with real content wherever available.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Draft copy from supplied or verified facts. Do not invent prices, services, coverage areas, qualifications, testimonials, guarantees, or results. Clearly label any placeholder in drafts and prototypes; replace or omit it before presenting content as ready to publish. Ask for missing facts when they are essential to the requested deliverable. See the writing guidance below.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757 — Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell);
2. a near-black background with a single bright acid-green or vermilion accent;
3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;
4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;
5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. As with a hired human designer, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

For new interfaces and substantial redesigns, work in two passes. First, create a short design plan based on the brief and inspected project context. Reuse or adapt existing tokens where appropriate; define color, type, layout, and principles.
- Color: describe the core base palette as 4–6 named hex values.
- Type: the typefaces and their roles.
- Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Include alignment guidance; should the content be left aligned, center aligned, justified?
- Principles: the high-level guidance for what makes this page unique.

Then review the plan against the brief: does it support the audience's task, make the primary action clear, and establish a coherent visual direction? Revise choices that lack a reason grounded in the subject or project. Treat distinctiveness as a design goal, not a requirement to prove uniqueness. When implementation is requested, build from the reviewed plan.

When writing CSS, inspect the cascade, selector specificity, inheritance, and source order before adding overrides. `.section` and `.cta` are both class selectors; `section` is a type selector. Resolve conflicting declarations at their source where practical, especially duplicated padding and margin rules. Check computed styles when the rendered result differs from the intended spacing.

## Restraint and self-critique

Spend your boldness in one place. Let one element be memorable, keep everything around it disciplined, and cut decoration that does not serve the brief. Preserve a quality floor of mobile responsiveness, visible keyboard focus, reduced motion support, visual accessibility, and harmonious color palettes.

Verify the implemented change in proportion to its scope:
- Inspect the affected page at desktop and mobile widths, using screenshots when available. Check text wrapping and overflow, image crops, spacing, and the visibility of the primary action.
- For changed controls or interactions, check keyboard access, visible focus, and relevant states such as expanded, error, empty, loading, or success. Check reduced motion when adding or changing animation.
- Run applicable project checks. Fix defects introduced by the change; a small edit needs only checks relevant to its effects and required project checks.
- Report what was actually inspected and any unavailable checks. Do not claim rendered verification from source inspection alone.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand and use. They are design content, not decoration. Bring the same intentionality and minimalism to copywriting that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's perspective. Name things by what users will understand in simple language, not by how the system is built. A user manages notifications, not webhook config. Describe what something is or does in plain terms rather than selling it. Being specific and legible to new users is always better than being clever.

Use active voice as default. A CTA says exactly what happens when it is used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the tone conversational: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each written element do exactly one job.

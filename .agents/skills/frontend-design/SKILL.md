---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Create a coherent visual direction grounded in the product, audience, real content, and primary user task. Follow the brief's aesthetic choices; use deliberate choices where it leaves room. Distinctiveness should improve the experience, not compete with usability.

## Choose the smallest sufficient workflow

| Request | Action |
| --- | --- |
| Small copy, component, or styling change | Preserve the existing design. Inspect the affected source and shared styles, change only the requested scope, and check its effects. Skip direction-setting. |
| New interface or substantial redesign | Inspect relevant project context, choose one direction, briefly check it against the brief, implement when authorized, then verify the result. |
| Plan or critique only | Deliver the requested plan or evidence-backed critique; do not implement. |
| Essential context unclear | Ask only for information that materially affects correctness or scope. Continue independent work and label assumptions. |

For existing projects, reuse their framework, components, tokens, fonts, and assets unless the brief requires a change. Inspect the affected render when available. If source, assets, or rendered access is missing, state the limitation and work from available evidence; do not describe guessed conditions as observed.

## Keep model calls and context small

- Work in the current agent by default. Do not launch extra models, subagents, fresh sessions, competing designs, or reviewer panels unless explicitly requested or required by applicable instructions.
- Read the brief and relevant source once. Batch independent, bounded reads and checks; return relevant excerpts or concise results. Reuse inspected context and shared-component findings. Do not inventory the whole repository for a local change.
- Use one short direction and one focused self-review in the current response. Compare alternatives or draw wireframes only when requested or when they resolve a consequential layout decision. Do not create a separate plan file or pause for approval when a clear build request already authorizes implementation.
- Do not load adjacent design skills, research trends, browse inspiration, or generate images by default. Use them only when requested or when a specific unresolved need warrants them; use required platform tools for their actual tasks.
- Batch implementation before verification. Check representative affected layouts and states, repair concrete failures, and rerun affected checks. Stop once the brief and required checks pass; do not repeat aesthetic cycles for marginal gains.
- Preserve reusable context: keep stable instructions unchanged and append new task information where possible. Do not pad prompts to qualify for caching, repeat material solely to increase cache hits, or change host/API cache settings without authorization. Evaluate efficiency using total cost, latency, and model-call count, not cache-hit percentage alone.

Minimize unnecessary calls, not necessary evidence. Do not skip project checks or rendered review to save tokens. Report measured savings only with comparable usage evidence.

## Set the direction

For substantial work, state the primary task, content hierarchy, and one memorable visual choice. Briefly define palette roles and color values, type roles and scale, layout/alignment, and mobile adaptation. Reuse existing tokens; add only those needed. Explain consequential choices in terms of the brief, rather than trying to prove uniqueness.

Choose an opening appropriate to the interface: a subject-specific headline or image for a landing page, or the user's next task for an application. Make the primary action easy to identify. Avoid imposing a marketing hero on every screen.

Use one or two deliberate type families with clear roles. Keep body text comfortably readable, generally below 80 characters per line; tune line-height to the actual font and size. Let display typography carry personality without sacrificing legibility.

Use structure to communicate relationships. Number items only for a sequence; group content by meaning rather than splitting everything into identical cards. Make borders, labels, spacing, and alignment serve hierarchy. Spend visual boldness in one place and keep surrounding elements disciplined.

Treat familiar recipes as choices to justify, not forbidden styles: cream/serif/clay palettes, dark/neon palettes, broadsheet rules, uniform rounded cards, decorative gradients, all-caps eyebrows, monospace labels, and a highlighted word in every headline. Follow an explicit brief that calls for them. Avoid applying the same recipe regardless of subject.

Use motion to explain actions and changes. Keep unsolicited animation sparse, respect reduced-motion preferences, and avoid blanket reveal effects.

## Build usable, truthful interfaces

Use supplied or verified facts. Do not invent prices, services, coverage areas, qualifications, testimonials, guarantees, or results. Label draft placeholders and replace or omit them before describing content as ready to publish. Ask for missing facts only when essential.

Write from the user's perspective in plain language and sentence case. Name the action precisely and consistently throughout the flow. Errors explain the problem and recovery; empty states offer a useful next step. Cover loading, error, empty, success, and disabled states only where the changed flow needs them. Do not imply successful delivery or persistence without the supporting behavior.

Use semantic controls and meaningful labels. Preserve keyboard access, visible focus, appropriate reading order, and text alternatives for meaningful images. Check text contrast: at least 4.5:1 for ordinary text and 3:1 for WCAG-defined large text, subject to the standard's exceptions. Prefer comfortably sized controls; use at least 24 by 24 CSS pixels or an applicable WCAG target-size exception. Do not use color alone to convey state.

Make ordinary page content reflow at 320 CSS pixels without lost content or functionality; handle genuinely two-dimensional content separately. Use content-driven breakpoints, flexible sizing, and intentional image crops. Avoid layout shifts by reserving media space. Reuse available fonts and assets before adding downloads, dependencies, or client-side behavior for decoration.

Inspect CSS cascade, specificity, inheritance, and source order before adding overrides. Resolve conflicts at their source where practical. When spacing differs from intent, inspect computed styles instead of stacking guessed declarations.

## Verify and finish

Inspect the affected render at a representative desktop and narrow mobile width; include 320 CSS pixels when changing responsive layout. Check hierarchy, wrapping, overflow, spacing, crops, and the primary action. For changed controls, check keyboard/focus and the relevant interaction states; check reduced motion when animation changes. Inspect screenshots when available rather than inferring visual quality from code.

Run required project checks and focused checks justified by the change. Repair defects introduced by the work and verify the repair. Broaden sampling only for shared changes, a discovered failure, or an explicit full-review request. A representative check does not establish full accessibility conformance.

Deliver the authorized result with a concise account of changes, checks actually performed, and material limitations. Distinguish source inspection from rendered verification and working interactions from static mockups.

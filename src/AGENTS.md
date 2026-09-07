# Agent instructions — UI/UX work

**Path:** `src/AGENTS.md`

Any request to design, redesign, critique, or build a website, app, landing page, dashboard,
color palette, type system, theme, or animation is UI/UX work. For all of it:

1. Read `.agents/skills/uiux-storybook-architect/SKILL.md` before doing anything else.
2. **Read `references/00-design-reasoning.md` before any design decision.** Generic output is
   caused by unreasoned repetition, not by familiar patterns. The test is interchangeability:
   could this be reused for an unrelated company by changing only logo, headline, accent, and
   images? Neither the old defaults (indigo, Inter, centered hero, three cards) nor the new ones
   (editorial asymmetry, warm paper, one burnt accent, oversized type, bento) are banned. Both
   need a reason traceable to the brief.
3. **Reason before styling.** No hue, typeface, radius, type ratio, surface, or layout style is
   chosen before context, users, jobs, tasks, content, business goal, trust, and information
   architecture are written. The pipeline order is in `SKILL.md`.
4. **Fork by surface.** Marketing surfaces reason about persuasion, proof, trust, and conversion
   (`references/02-marketing-ux.md`). Product surfaces reason about workflows, navigation, data,
   states, forms, keyboard, and permissions (`references/03-product-ux.md`). Never apply
   landing-page logic to a dashboard, or app density to a story. Decide per surface.
5. **Interview only when starting new work.** No `design/00-brief.md` on a new site, app, or
   full redesign → run discovery: up to 8 numbered questions, each with 3–4 drafted options,
   a recommendation, and a one-line consequence, so the user replies `1b, 2 rec, 3 skip`. Then a
   second round by surface type. If the brief exists, read it and never ask again. For a small
   change or a single decision, infer, state the assumption in one line specific to this product,
   and proceed.
6. **Three strategic directions before any spec.** `/ux-direction` is mandatory on new design
   work. Directions differ in information priority, strategy, hierarchy, interaction, and density;
   visual differences follow. A human picks.
7. **Every decision traces** to `[USER]` `[TASK]` `[CONTENT]` `[BUSINESS]` `[BRAND]` `[CONTEXT]`
   or `[A11Y]` with one line. "Looks clean" is not a trace.
8. **Never ship a template default.** Every value in the references and asset templates is
   illustrative. The token templates carry magenta and lime tripwires on purpose.
9. Write the Design Storybook to `design/` before building. Build order: tokens → primitives →
   layout → sections or screens → pages → motion → 3D. Use only tokens from
   `design/tokens/tokens.css`; no raw hex, off-scale spacing, or hardcoded durations in components.
10. **Motion has a job** (feedback, causality, orientation, continuity, state, storytelling) and
    exists in `design/07-motion-spec.md` with a `prefers-reduced-motion` fallback before it is built.
11. **WCAG 2.2 AA** is designed in at every stage and gated with evidence at the end: contrast in
    every theme, keyboard operability, visible and unobscured focus, ≥24px targets (≥44px touch),
    reduced motion, no redundant entry, accessible authentication.
12. **Never invent evidence.** No fabricated testimonials, customer names, logos, or statistics,
    even as placeholders. Use a clearly marked empty slot.

Eight slash commands, in workflow order:

`/ux-discover` → `/ux-direction` → `/ux-spec` → `/ux-copy` → `/ux-motion` → `/ux-build` →
`/ux-audit` · `/ux-critique`

Run `ls .agents/workflows` (or the equivalent command folder for this IDE) to see them.

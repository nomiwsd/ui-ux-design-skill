# Agent instructions — UI/UX work

Any request to design, redesign, critique, or build a website, app, landing page, dashboard,
color palette, type system, dark mode, or animation is UI/UX work. For all of it:

1. Read `.agents/skills/uiux-storybook-architect/SKILL.md` before doing anything else.
2. **Read `references/00-anti-slop.md` before producing any visual output.** Unconstrained, an
   agent reproduces the training-data average: centered hero, indigo accent, Inter, three icon
   cards, uniform padding, "transform your workflow". That file contains the ban list and the
   self-check every visual deliverable is measured against.
3. **Interview only when starting new work.** New site, app, or full redesign with no
   `design/00-brief.md` → run the discovery interview: one batch of 8 numbered questions, then a
   second batch on build constraints. **Every question carries 3–4 drafted options with a
   recommendation and a one-line consequence**, so the user replies `1b, 2 rec, 3 skip`. Never
   send a bare open question. If the brief exists, read it and never ask again. For a small change
   to an existing codebase, or a single decision, do not interview: infer, state the assumption in
   one line specific to this product, and proceed.
4. **Never go from brief straight to spec.** `/ux-direction` is mandatory on new design work: three
   structurally distinct directions, presented, and a human picks one. One brief with no fork
   collapses to the one obvious execution, and the obvious execution is the average.
5. **Never ship a template default.** Every hex, font, radius, and duration in the skill's
   references and asset templates is illustrative. The token templates use loud magenta/lime
   tripwire values on purpose — if they render, the tokens were never chosen.
6. Write the Design Storybook to `design/` before building a new site. Build order is tokens →
   primitives → layout → sections → pages → motion → 3D, never page by page.
7. Use only tokens from `design/tokens/tokens.css`. No raw hex, no off-scale spacing, no
   hardcoded durations anywhere in component code.
8. Every animation must exist in `design/07-motion-spec.md` with a `prefers-reduced-motion`
   fallback before it is implemented.
9. WCAG 2.2 AA is a gate, not a suggestion: 4.5:1 body contrast in both themes, visible focus
   states, ≥44px touch targets, keyboard operability.
10. **Never invent evidence.** No fabricated testimonials, customer names, logos, or statistics,
    even as placeholder content. Use a clearly marked empty slot.

Eight slash commands, in workflow order:

`/ux-discover` → `/ux-direction` → `/ux-spec` → `/ux-copy` → `/ux-motion` → `/ux-build` →
`/ux-audit` · `/ux-critique`

Run `ls .agents/workflows` (or the equivalent command folder for this IDE) to see them.

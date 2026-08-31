---
description: Implement the design storybook in code, in the correct order, and verify handoff
argument-hint: [page or component to build, "all", or "handoff"]
---

# /ux-build — Build from the storybook

**Path:** `src/commands/ux-build.md`

Target: $ARGUMENTS

## Preflight

- `design/00-brief.md` exists → read it and every file in `design/`. Design from them, ask nothing. Name in one line which persona and which of the top-3 tasks this serves.
- Missing, new site or full redesign → run `/ux-discover` then `/ux-direction`. Say so in one line and stop; do not produce partial output.
- Missing, addition to an existing codebase → no interview. Read existing tokens, components and styles, match them, state in one line what you matched.

Read `{{SKILL_PATH}}/references/13-implementation-handoff.md`. If any new visual decision has to be made during the build, read `references/00-anti-slop.md` before making it.

## Build order — never page by page

```
tokens → primitives → layout → sections → pages → motion → 3D
```

Building page-by-page is what produces nine slightly different buttons.

## Rules

- Use only tokens from `design/tokens/tokens.css`. No raw hex, no off-scale spacing, no hardcoded durations.
- Implement every state from `design/05-components.md` in the same commit as the component. States added later are states that get forgotten.
- Build the static, motion-free version first and confirm it holds up. A site that only works once it animates is broken.
- Add motion only from `design/07-motion-spec.md`, by ID, behind reduced-motion guards.
- Use the real draft copy from the blueprints. Do not write copy at build time — if a slot is empty, leave the marked placeholder visible rather than inventing a testimonial or a statistic.
- The signature element from `design/01-art-direction.md` gets built, not quietly dropped because it was awkward. If it genuinely can't be built, say so and propose a replacement.
- If something needed is missing from the spec, ask rather than improvising — then add it to the spec.

## Fidelity check

The most common failure is a build that drifts back toward the default while technically following the tokens. Before reporting done, verify against `design/01-art-direction.md`:

- [ ] Section rhythm matches the written sequence — not uniform padding everywhere
- [ ] The grid break specified in the direction is present
- [ ] Display-to-body scale ratio matches the spec, measured on the rendered page
- [ ] The signature element exists and is visible
- [ ] Radius, shadow, and border treatment match the direction — no stray defaults from a component library
- [ ] Nothing from the `00-anti-slop.md` ban list crept in during implementation

State each as pass/fail with the file where you checked it.

## Acceptance

Run the criteria in `design/09-build-plan.md` and report each as pass/fail:

- [ ] Renders correctly at 320 / 375 / 768 / 1280 / 1440 / 1920
- [ ] Usable at 200% zoom
- [ ] Keyboard-only walkthrough of the primary flow completes
- [ ] Contrast spot-checked in both themes
- [ ] Lighthouse mobile ≥90 performance, 100 accessibility
- [ ] Every animation matches its MOT-xx spec and its reduced-motion fallback works
- [ ] No console errors, no layout shift on load
- [ ] Empty, loading, and error states exist for every data-driven view

## Mode: handoff

With `handoff` as the argument, instead produce:

1. A verification pass that `design/` is complete — every file present, no `TODO`, no unresolved contrast failure, no animation without a fallback, no unfilled `[CLAIM]` slot that shipped as real copy.
2. The definition-of-done checklist from `references/13-implementation-handoff.md`, marked for this project.
3. A copy-paste build prompt for a fresh agent session:

> Read `design/00-brief.md` through `design/09-build-plan.md`, then implement in the order in the build plan. Use only tokens from `design/tokens/tokens.css`. Follow the chosen direction in `design/01-art-direction.md` exactly, including the section rhythm and the signature element. Do not invent colors, spacing, copy, or animations that are not in the spec — if something is missing, ask before improvising.

4. If handing to a human: the redlines a static mockup doesn't carry — states, breakpoints, motion timings, token locations.
5. Optionally scaffold Storybook.js with the a11y addon and a dark-theme toolbar toggle, if the component count justifies it (roughly 15+ components or more than one developer).

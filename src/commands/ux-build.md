---
description: Implement the design storybook in code, in the correct order, and verify fidelity and handoff
argument-hint: [page, screen, or component to build, "all", or "handoff"]
---

# /ux-build — Build from the storybook

**Path:** `src/commands/ux-build.md`

Target: $ARGUMENTS

## Preflight

- `design/00-brief.md` exists → read it and every file in `design/`. Build from them, ask nothing. Name in one line the surface type and which top task this target serves.
- Missing, new site or full redesign → run `/ux-discover` then `/ux-direction`. Say so in one line and stop; do not produce partial output.
- Missing, addition to an existing codebase → no interview. Read existing tokens, components, styles; match them; state in one line what you matched.

Read `{{SKILL_PATH}}/references/12-implementation-handoff.md`. If any new design decision has to be made during the build, read `references/00-design-reasoning.md` first and record the decision with its tag in the relevant storybook file.

## Build order — never page by page

```
tokens → primitives → layout → sections or screens → pages → motion → 3D
```

Building page by page is what produces nine slightly different buttons.

## Rules

- Use only tokens from `design/tokens/tokens.css`. No raw hex, off-scale spacing, or hardcoded durations.
- Implement every state from `design/05-components.md` in the same commit as the component. States added later are states that get forgotten.
- Build the static, motion-free version first and confirm it holds up.
- Add motion only from `design/07-motion-spec.md`, by ID, behind reduced-motion guards.
- Use the real draft copy from the blueprints. Do not write copy at build time; if a slot is empty, leave the marked placeholder visible rather than inventing a testimonial or a number.
- Implement every reflow decision from the blueprints as specified, not as "stacks."
- If something needed is missing from the spec, ask rather than improvising — then add it to the spec with its tag.

## Fidelity check

Drift toward the probable happens during implementation even when tokens are followed. Before reporting done, run `13-validation.md` §6 against `design/01-direction.md`:

- [ ] Every tagged decision in the direction is present, or its replacement is recorded with a new tag
- [ ] No component-library default (radius, shadow, font, color) survived where the token system specified otherwise
- [ ] Density matches the context profile, measured on the rendered page: rows per viewport on the primary table, or words per screen on the primary reading surface
- [ ] Reflow decisions implemented per section or region, not just stacking
- [ ] No motion exists outside the spec; nothing entrance-animates on a product surface
- [ ] Specificity Score on the rendered output within 10 points of the spec
- [ ] Interchangeability question re-answered on the built product: still *no, because…*

State each as pass/fail with the file where you checked it.

## Acceptance

Run the criteria in `design/09-build-plan.md` and report each as pass/fail:

- [ ] Renders correctly at 320 / 375 / 768 / 1280 / 1440 / 1920
- [ ] Usable at 200% zoom; text spacing overrides do not break layout
- [ ] Keyboard-only walkthrough of the primary flow completes; focus never obscured by sticky chrome
- [ ] Contrast spot-checked in every theme
- [ ] Targets ≥24px everywhere, ≥44px on touch
- [ ] Lighthouse mobile ≥90 performance, 100 accessibility
- [ ] Every animation matches its MOT-xx row and its reduced-motion fallback works
- [ ] No console errors, no layout shift on load
- [ ] Empty, loading, error, no-results, and partial states exist for every data view

## Mode: handoff

With `handoff` as the argument, instead produce:

1. A verification that `design/` is complete: every file present, no `TODO`, no unresolved contrast failure, no animation without a job and a fallback, no `[CLAIM]` slot that shipped as real copy, every surface labelled.
2. The definition-of-done checklist from `references/12-implementation-handoff.md`, marked for this project.
3. A copy-paste build prompt for a fresh agent session:

> Read `design/00-brief.md` through `design/09-build-plan.md`, then implement in the order in the build plan. Use only tokens from `design/tokens/tokens.css`. Follow the chosen direction in `design/01-direction.md` exactly, including the navigation model or section order, the density decision, and every reflow decision. Do not invent colors, spacing, copy, or animations that are not in the spec — if something is missing, ask before improvising.

4. If handing to a human: the redlines a static mockup does not carry — states, breakpoints and reflow behavior, motion timings, keyboard behavior, token locations.
5. Optionally scaffold Storybook.js with the a11y addon and a theme toolbar toggle, if the component count justifies it (roughly 15+ components or more than one developer).

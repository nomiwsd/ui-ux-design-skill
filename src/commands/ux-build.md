---
description: Implement the design storybook in code, in the correct order
argument-hint: [page or component to build, or "all"]
---

# /ux-build — Build from the storybook

## Preflight

- `design/00-brief.md` exists → read it, design from it, ask nothing. Name in one line which
  persona and which of the top-3 tasks this serves.
- Missing, and this is a **new site or full redesign** → run `/ux-discover` first. Say so in one
  line and stop; do not produce partial output.
- Missing, but this is an **addition to an existing codebase** → do not interview. Read the
  existing tokens, components and styles, match them, and state in one line what you matched.


Read `{{SKILL_PATH}}/references/13-implementation-handoff.md` and every file in `design/`.

Target: $ARGUMENTS

Build order, never page-by-page: tokens → primitives → layout → sections → pages → motion → 3D.

Rules:
- Use only tokens from `design/tokens/tokens.css`. No raw hex, no off-scale spacing, no hardcoded durations.
- Implement every state from `design/04-components.md` in the same commit as the component.
- Build the static, motion-free version first and confirm it holds up. Motion is layered after.
- Add motion only from `design/06-motion-spec.md`, by ID, behind reduced-motion guards.
- If something needed is missing from the spec, ask rather than improvising — then add it to the spec.

Finish by running the acceptance criteria in `design/08-build-plan.md` and reporting each as pass/fail.

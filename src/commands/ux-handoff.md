---
description: Produce the handoff package and a build prompt for another agent or developer
argument-hint: [target: "developer", "agent", or an IDE name]
---

# /ux-handoff — Handoff

## Preflight

- `design/00-brief.md` exists → read it, design from it, ask nothing. Name in one line which
  persona and which of the top-3 tasks this serves.
- Missing, and this is a **new site or full redesign** → run `/ux-discover` first. Say so in one
  line and stop; do not produce partial output.
- Missing, but this is an **addition to an existing codebase** → do not interview. Read the
  existing tokens, components and styles, match them, and state in one line what you matched.


Read `{{SKILL_PATH}}/references/13-implementation-handoff.md`.

Target: $ARGUMENTS

Produce:
1. A verification pass that `design/` is complete — every storybook file present, no `TODO`, no unresolved contrast failure, no animation without a fallback.
2. The definition-of-done checklist for this specific project.
3. A copy-paste build prompt for a fresh agent session that points at `design/00-brief.md` through `08-build-plan.md`, names the token file as the only source of color and spacing, and forbids inventing anything not in the spec.
4. If handing to a human: the redlines and specs that a static mockup does not carry — states, breakpoints, motion timings, and where the tokens live.
5. Optionally scaffold Storybook.js with the a11y addon and a dark-theme toolbar toggle, if the component count justifies it.

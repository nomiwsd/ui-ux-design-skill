---
description: Generate the complete Design Storybook from the discovery answers
argument-hint: [optional: output folder, defaults to design/]
---

# /ux-storybook — Full Design Storybook

## Preflight

- `design/00-brief.md` exists → read it, design from it, ask nothing. Name in one line which
  persona and which of the top-3 tasks this serves.
- Missing, and this is a **new site or full redesign** → run `/ux-discover` first. Say so in one
  line and stop; do not produce partial output.
- Missing, but this is an **addition to an existing codebase** → do not interview. Read the
  existing tokens, components and styles, match them, and state in one line what you matched.


Read `{{SKILL_PATH}}/SKILL.md` and `{{SKILL_PATH}}/references/12-storybook-template.md`.

Output folder: $ARGUMENTS (default `design/`)

1. If `design/00-brief.md` does not exist, run `/ux-discover` first — do not invent an audience.
2. Load the reference files that match this project: product type (`05`), audience age (`06`), style direction (`04`), plus `02`, `03`, `07`, `08`.
3. Produce every file in the storybook structure:
   `00-brief.md`, `01-information-architecture.md`, `02-design-tokens.md`, `03-typography-and-color.md`, `04-components.md`, `05-page-blueprints.md`, `06-motion-spec.md`, `07-accessibility.md`, `08-build-plan.md`, `tokens/tokens.css`, `tokens/tokens.json`.
4. Start the token files from `{{SKILL_PATH}}/assets/tokens.template.css` and `tokens.template.json`, replacing values — do not ship the template defaults unchanged.
5. Measure and record every contrast ratio in the table in `03-typography-and-color.md`. Fix failures before presenting.
6. Run the Storybook quality gate in SKILL.md. Do not present until every box passes.

Finish with a short summary: the design direction in 3 lines, the 3 decisions most worth challenging, and the next command (`/ux-build`).

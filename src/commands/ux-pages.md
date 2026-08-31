---
description: Write section-by-section page blueprints with real copy intent
argument-hint: [page names, e.g. "home, pricing, product"]
---

# /ux-pages — Page blueprints

## Preflight

- `design/00-brief.md` exists → read it, design from it, ask nothing. Name in one line which
  persona and which of the top-3 tasks this serves.
- Missing, and this is a **new site or full redesign** → run `/ux-discover` first. Say so in one
  line and stop; do not produce partial output.
- Missing, but this is an **addition to an existing codebase** → do not interview. Read the
  existing tokens, components and styles, match them, and state in one line what you matched.


Read `{{SKILL_PATH}}/references/05-website-type-patterns.md` and `references/12-storybook-template.md` (blueprint section).

Pages: $ARGUMENTS

For each page: goal, primary action, what sits above the fold on mobile, then numbered sections in order with layout, draft copy (real intent, never lorem ipsum), visual treatment, motion IDs, and spacing values. Close with mobile changes and edge cases (long headline, missing testimonials, empty states).

Check every section against the top 3 tasks from the brief. Cut anything that serves none of them. Write to `design/05-page-blueprints.md`.

---
description: Produce sitemap, user flows, page inventory, and content model
argument-hint: [product type or list of known pages]
---

# /ux-ia — Information architecture

## Preflight

- `design/00-brief.md` exists → read it, design from it, ask nothing. Name in one line which
  persona and which of the top-3 tasks this serves.
- Missing, and this is a **new site or full redesign** → run `/ux-discover` first. Say so in one
  line and stop; do not produce partial output.
- Missing, but this is an **addition to an existing codebase** → do not interview. Read the
  existing tokens, components and styles, match them, and state in one line what you matched.


Read `{{SKILL_PATH}}/references/02-foundations.md` (IA section) and `references/05-website-type-patterns.md`.

Input: $ARGUMENTS

Produce `design/01-information-architecture.md`: sitemap, one flow per top-3 task written as a step sequence with friction points and design responses, a page inventory table with purpose/primary action/priority, and the content model for anything CMS-driven.

Flag any page where the primary action is more than one click from an entry point, and any hierarchy deeper than three levels.

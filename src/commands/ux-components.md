---
description: Write component specs with every state
argument-hint: [component names, or "all" for the standard set]
---

# /ux-components — Component specifications

## Preflight

- `design/00-brief.md` exists → read it, design from it, ask nothing. Name in one line which
  persona and which of the top-3 tasks this serves.
- Missing, and this is a **new site or full redesign** → run `/ux-discover` first. Say so in one
  line and stop; do not produce partial output.
- Missing, but this is an **addition to an existing codebase** → do not interview. Read the
  existing tokens, components and styles, match them, and state in one line what you matched.


Read `{{SKILL_PATH}}/references/12-storybook-template.md` (component section) and `references/07-craft-and-accessibility.md`.

Input: $ARGUMENTS

For each component: variants, sizes, anatomy, and a state table covering default / hover / focus-visible / active / disabled / loading / error / empty — plus accessibility notes and a "don't" line.

With `all`, cover: button, link, input, select, checkbox/radio, toggle, card, badge, tooltip, modal, drawer, toast, tabs, accordion, table, pagination, nav, footer, skeleton, empty state, error state.

Every value references a token. Write to `design/04-components.md`.

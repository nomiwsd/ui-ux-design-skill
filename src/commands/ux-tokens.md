---
description: Generate or update the design token set for both themes
argument-hint: [brand color, framework, or path to existing tokens]
---

# /ux-tokens — Design tokens

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/03-typography-color-theming.md` and start from `{{SKILL_PATH}}/assets/tokens.template.css` + `tokens.template.json`.

Input: $ARGUMENTS

1. Produce the full token set: color (light + dark), typography, spacing (base-4), radius, elevation, layout, motion.
2. Name every token by **role**, never by value (`--accent`, not `--purple-600`).
3. Dark mode is designed independently: base `#121212`–`#1E1E1E`, elevation by lightness, accents desaturated ~20 points, off-white text.
4. Write `design/tokens/tokens.css`, `design/tokens/tokens.json`, and `design/02-design-tokens.md` (tables with a one-line reason per group).
5. If a framework was named, also emit the mapping: Tailwind v4 `@theme` block, Tailwind v3 `theme.extend`, or the equivalent for the stack in use.
6. Include the pre-paint theme script so there is no flash of the wrong theme.

End with the contrast table for every pairing that will actually appear, in both themes.

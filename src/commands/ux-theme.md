---
description: Design or fix the dark mode system (not an inversion)
argument-hint: [path to existing CSS/tokens, or "from scratch"]
---

# /ux-theme — Light/dark theming

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/03-typography-color-theming.md` (theming section).

Input: $ARGUMENTS

1. If existing CSS was given, audit it first: pure black backgrounds, pure white text, saturated accents, shadow-based elevation, hardcoded hex, images with baked white backgrounds, missing `color-scheme`.
2. Produce the dark palette as its own decision: base 8–12% lightness, 4–5 elevation steps by lightness, accents desaturated ~20 points, text around `#E0E0E0`.
3. Re-run contrast checks independently for the dark set and show the table.
4. Deliver the switching mechanism: `prefers-color-scheme` default, manual toggle persisted to localStorage, applied before first paint, `color-scheme: light dark` set.
5. List every non-token surface that will break in dark mode: images, iframes, third-party widgets, charts, code blocks, maps.

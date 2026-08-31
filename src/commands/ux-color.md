---
description: Build a palette with 60/30/10, neutral ramp, semantics, and contrast proof
argument-hint: [industry/audience, or an existing brand hex]
---

# /ux-color — Color system

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/03-typography-color-theming.md` (color section).

Input: $ARGUMENTS

1. Pick the hue direction from audience and category, not taste — state the reason in one line.
2. Deliver: dominant (60%), secondary (30%), one accent (10%, CTAs only), a 7–9 step neutral ramp tinted toward the brand hue, and the four semantic colors.
3. Produce both themes.
4. Measure every foreground/background pairing and present the ratios in a table with pass/fail against 4.5:1 body and 3:1 large/UI. Fix failures before presenting.
5. State explicitly what the accent is reserved for and what must never use it.

If a logo was supplied, sample from it rather than inventing a competing palette.

---
description: Pick the visual style direction and the premium detail vocabulary
argument-hint: [product type + audience, or reference site URLs]
---

# /ux-style — Visual style direction

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/04-visual-styles.md` and `references/05-website-type-patterns.md`.

Input: $ARGUMENTS

1. Answer the selection question explicitly: what must this audience feel in order to trust this product?
2. Recommend one direction (flat/material default, or a justified accent style), plus what is deliberately excluded and why.
3. Specify the premium details that carry the look: spacing discipline, border and shadow treatment, radius scale, imagery approach, and any aurora/grain/bento/editorial devices with the CSS to implement them.
4. Cross-check against the style decision matrix — if the recommendation conflicts with the product category, name the tension and propose the compromise (expressive hero, conventional product surfaces).
5. Write to `design/03-typography-and-color.md` or a `style direction` section of the brief.

If the user asked to "make it look premium", say plainly that restraint, spacing, and type discipline do more than effects — then deliver those first.

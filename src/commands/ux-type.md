---
description: Choose a font pairing and build the type scale
argument-hint: [three brand adjectives, or existing fonts]
---

# /ux-type — Typography system

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/03-typography-color-theming.md` (typography section).

Input: $ARGUMENTS

1. If no adjectives were given, ask for three in one line — nothing else.
2. Recommend one pairing (display + body, plus mono only if there is data or code), with one sentence of reasoning each and two alternates.
3. Build the type scale from a ratio (1.25 dense / 1.333 marketing), as `clamp()` values.
4. Assign every font + weight + size to exactly one role and document it.
5. Give the loading strategy: self-hosted variable woff2, `font-display: swap`, which single file to preload, fallback stack with `size-adjust`.
6. Write to `design/03-typography-and-color.md` (typography half) and update the type tokens.

Test the body font choice on legibility at 16px in a real paragraph, not on personality.

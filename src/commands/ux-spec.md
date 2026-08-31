---
description: Write the Design Storybook — tokens, type, color, themes, IA, components, page blueprints
argument-hint: [scope: all | tokens | type | color | dark-mode | ia | components | pages]
---

# /ux-spec — The Design Storybook

**Path:** `src/commands/ux-spec.md`

One command for the whole specification. Scope it to run a slice, or leave it empty for the full storybook.

Scope: $ARGUMENTS  (default `all`)

## Preflight

- `design/00-brief.md` **and** `design/01-art-direction.md` with a chosen direction exist → read both, design from them, ask nothing. Name in one line which persona and which of the top-3 tasks this serves.
- Brief missing, new site or full redesign → run `/ux-discover`, then `/ux-direction`. Say so in one line and stop. Do not produce partial output.
- Brief exists but no chosen direction, and scope is `all`, `tokens`, `type`, `color`, or `pages` → run `/ux-direction` first. These are the outputs that carry the look, and picking them without a direction is how the average gets built.
- Existing codebase, small addition → no interview. Read existing tokens, components, styles; match them; state in one line what you matched. Ban list still applies to anything new.
- Single narrow decision (`dark-mode`, one component) → proceed directly, stating any inference in one line, specific to this product. Never use a stock assumption sentence.

Always read `{{SKILL_PATH}}/references/00-anti-slop.md` before producing values.

## Scopes

| Scope | Reads | Writes |
|---|---|---|
| `tokens` | `03-typography-color-theming.md`, `assets/tokens.template.*` | `tokens/tokens.css`, `tokens/tokens.json`, `03-design-tokens.md` |
| `type` | `03-typography-color-theming.md`, `15-composition.md` | `04-typography-and-color.md` (type half) + type tokens |
| `color` | `03-typography-color-theming.md` | `04-typography-and-color.md` (color half) + color tokens |
| `dark-mode` | `03-typography-color-theming.md` (theming) | dark token set + contrast table |
| `ia` | `02-foundations.md`, `05-website-type-patterns.md` | `02-information-architecture.md` |
| `components` | `12-storybook-template.md`, `07-craft-and-accessibility.md` | `05-components.md` |
| `pages` | `references/17-section-library.md`, `references/blueprints/00-index.md` + the matching `references/blueprints/<type>.md`, `15-composition.md`, `16-copy-voice.md` | `06-page-blueprints.md` |
| `all` | the above plus `06-age-inclusive-design.md`, `08-motion-system.md` | the full `design/` tree |

## Rules that apply to every scope

**Never ship a template default.** The starter files are illustrative. If the output contains the example accent, the example neutral ramp, the example font pairing, or the example radius scale unchanged, the command has failed. Diff your output against the templates before presenting and state what changed.

**Name tokens by role, never by value.** `--accent`, not `--purple-600`.

**Measure, don't estimate.** Every foreground/background pairing that will actually appear gets a computed contrast ratio in a table, in both themes, with pass/fail against 4.5:1 body and 3:1 large/UI. Fix failures before presenting. "Looks fine" is not a measurement.

**Dark mode is designed, not inverted.** Base 8–12% lightness, elevation by lightness rather than shadow, accents desaturated ~20 points, text near `#E0E0E0`. Run its contrast checks independently.

## Scope specifics

**tokens** — full set: color (light + dark), typography, spacing (base-4), radius, elevation, layout, motion. Emit the framework mapping if a stack is known (Tailwind v4 `@theme`, v3 `theme.extend`, or equivalent) and the pre-paint theme script so there's no flash of the wrong theme.

**type** — one recommended pairing plus two alternates, one line of reasoning each. Body face judged on legibility at 16px in a real paragraph, not on personality. Build the scale from a ratio as `clamp()` values, and push display-to-body past 3.5× unless the density pole is utilitarian. Loading strategy: self-hosted variable woff2, `font-display: swap`, one preloaded file, fallback stack with `size-adjust`.

**color** — hue direction from audience and category with the reason in one line. 60/30/10 split, a 7–9 step neutral ramp **tinted toward the brand hue**, four semantics, both themes. State explicitly what the accent is reserved for and what must never use it. If a logo exists, sample from it rather than inventing a competing palette.

**dark-mode** — if existing CSS was given, audit it first for pure black, pure white text, saturated accents, shadow-based elevation, hardcoded hex, missing `color-scheme`. Then deliver the palette, the switching mechanism, and a list of every non-token surface that will break: images, iframes, third-party widgets, charts, code blocks, maps.

**ia** — sitemap, one flow per top-3 task as a step sequence with friction points and design responses, page inventory table, content model for anything CMS-driven. Flag any page where the primary action is more than one click from an entry point, and any hierarchy deeper than three levels.

**components** — variants, sizes, anatomy, and a state table covering default / hover / focus-visible / active / disabled / loading / error / empty, plus accessibility notes and a "don't" line. With `all`: button, link, input, select, checkbox/radio, toggle, card, badge, tooltip, modal, drawer, toast, tabs, accordion, table, pagination, nav, footer, skeleton, empty state, error state. Every value references a token.

**pages** — read `references/17-section-library.md` for section anatomy and the matching file in `references/blueprints/` for the category page inventory. Per page: goal, primary action, what sits above the fold on mobile, then numbered sections with layout, real draft copy, visual treatment, motion IDs, spacing, and states. Also required:
- **The belief sequence written out first**, and the section order derived from it — not from a category template (method: `references/blueprints/00-index.md`).
- **A named layout variant per section** from `references/17-section-library.md`. Never variant 1 by reflex; state why each was chosen.
- **A written rhythm sequence** (`full-bleed → tight → tight → open → dense → open → tight`). If it's uniform, redo it.
- **The signature element** from the art direction, placed on a specific page in a specific section.
- Real draft copy per `16-copy-voice.md`. Never lorem ipsum, never invented testimonials or statistics — use `[TESTIMONIAL — needs a real customer quote]`.
- Mobile changes and edge cases: longest realistic headline, missing testimonials, empty states.

Check every section against the top 3 tasks. Cut anything serving none of them.

## Finish

Run the Storybook quality gate in `SKILL.md`. Do not present until every box passes — including the ban-list self-check and the "no template default survived" check.

Close with: the design direction in 3 lines, the 3 decisions most worth challenging, and the next command (`/ux-copy` or `/ux-build`).

---
description: Write the Design Storybook — tokens, type, color, themes, IA, components, page and screen blueprints
argument-hint: [scope: all | tokens | type | color | theme | ia | components | pages]
---

# /ux-spec — The Design Storybook

**Path:** `src/commands/ux-spec.md`

One command for the whole specification. Scope it to run a slice, or leave it empty for the full storybook.

Scope: $ARGUMENTS  (default `all`)

## Preflight

- `design/00-brief.md` **and** `design/01-direction.md` (or legacy `01-art-direction.md`) with a chosen direction exist → read both, design from them, ask nothing. Name in one line the context profile, the surface type, and which top task this scope serves.
- Brief missing, new site or full redesign → run `/ux-discover`, then `/ux-direction`. Say so in one line and stop. Do not produce partial output.
- Brief exists but no chosen direction, and scope is `all`, `ia`, or `pages` → run `/ux-direction` first. These are the outputs that carry the strategy.
- Brief exists, no direction, and scope is `tokens`, `type`, `color`, or `theme` → proceed, stating the assumed direction in one line with its trace; flag that `/ux-direction` would sharpen it.
- Existing codebase, small addition → no interview. Read existing tokens, components, styles; match them; state in one line what you matched and which surface type this is.
- Single narrow decision → proceed directly, stating the inferred context profile in one line specific to this product.

Always read `{{SKILL_PATH}}/references/00-design-reasoning.md` before producing values.

## Scopes

| Scope | Reads | Writes |
|---|---|---|
| `tokens` | `04-visual-system.md` §2–4, `assets/tokens.template.*` | `tokens/tokens.css`, `tokens/tokens.json`, `03-design-tokens.md` |
| `type` | `04-visual-system.md` §2 | `04-typography-and-color.md` (type half) + type tokens |
| `color` | `04-visual-system.md` §3 | `04-typography-and-color.md` (color half) + color tokens |
| `theme` | `04-visual-system.md` §3.6 | second-theme token set + contrast table, or a recorded decision not to ship one |
| `ia` | `02-marketing-ux.md` §1 and/or `03-product-ux.md` §1–3 by surface | `02-information-architecture.md` |
| `components` | `11-storybook-template.md`, `03-product-ux.md` §3–4, `05-responsive-accessibility.md` §1 | `05-components.md` |
| `pages` | `02-marketing-ux.md` §1, §3–4 and/or `03-product-ux.md` §4, §7 by surface; `10-copy-voice.md`; `05-responsive-accessibility.md` §5 | `06-page-blueprints.md` |
| `all` | the above plus `05-responsive-accessibility.md` §1–4, `06-motion.md` | the full `design/` tree |

## Rules that apply to every scope

**Reason before styling.** Every value derives from the brief, the direction, and the interaction model. A value with no trace is not finished.

**Never ship a template default.** The starter files are tripwires. If the output contains the placeholder colors, the placeholder fonts, or any example value from a reference, the command has failed. Diff against the templates and state what changed.

**Name tokens by role, never by value.** `--action`, not `--purple-600`.

**Separate color layers.** Brand, semantic, state, surface, text, border, and (for data-led products) data. Never let two layers share a hue by accident.

**Measure, don't estimate.** Every foreground/background pairing that will appear gets a computed ratio in a table, in every theme, against 4.5:1 body and 3:1 large, UI, and focus. Fix failures before presenting.

**Surface-aware.** Marketing pages get message hierarchy and derived order. Product screens get navigation model, home job, interaction model, density, and five states. Never mix.

## Scope specifics

**tokens** — full set: color layers (every theme), typography, spacing, radius, elevation, layout, motion. Tiering per `04` §3.7: flat semantic roles unless multiple themes, platforms, or brands justify tiers. Framework mapping if the stack is known (Tailwind v4 `@theme`, v3 `theme.extend`, or equivalent) and the pre-paint theme script if a second theme exists.

**type** — faces chosen by property (`04` §2.1) with script coverage confirmed; one recommended pairing (or a single face, if that is correct) plus two alternates, one line of reasoning each with tags. Ratio from reading context (`04` §2.2), generated as `clamp()` values. Longest real headline tested at 375px. Loading strategy: self-hosted variable woff2, `font-display: swap`, one preload, fallback with `size-adjust`.

**color** — brand hue from assets, differentiation, and cultural context (`04` §3.2), never from a psychology table. Neutral tint decision with its trace (`04` §3.3). Distribution rule by surface (`04` §3.4). Semantic and state layers distinct from brand. Data palette when data-led. If a logo exists, sample it.

**theme** — first decide whether a second theme is warranted (`04` §3.6 WHEN); record the decision either way. If yes and existing CSS was given, audit it first for pure black, pure white text, saturated accents, shadow-based elevation, hardcoded hex, missing `color-scheme`. Deliver the palette, the switching mechanism, and every non-token surface that will break: images, iframes, embeds, charts, code blocks, maps.

**ia** — by surface. Marketing: sitemap, message hierarchy, decision journey, content model, navigation. Product: entity model, navigation model with trace, home-screen job, screen inventory, one flow per top task with path length against budget, interaction model (input, disclosure tiers, feedback tiers, state visibility, error prevention, destructive-action model, permissions, validation). Flag any top task over its path budget and any hierarchy deeper than three levels on a marketing site.

**components** — variants, sizes, anatomy, and a state table covering default / hover / focus-visible / active / disabled / loading / error / empty (and selected where relevant), plus responsive behavior, accessibility notes (name, role, keyboard, focus), and a "don't" line. With `all`: button, link, input, select, checkbox/radio, toggle, card, badge, tooltip, dialog, drawer, toast, tabs, accordion, table, pagination, nav, footer, skeleton, empty state, error state. Every value references a token.

**pages** — by surface. **Marketing:** message hierarchy written first; section order derived from the decision journey with a reason per row (`02` §1.2); a named option per section with its trace (`02` §4); rhythm following stated weights; real draft copy per `10-copy-voice.md`; a reflow decision per section (`05` §5); first screen at 375×667. **Product:** navigation model and home job; per screen: purpose, primary action, regions with density, five states, keyboard behavior, reflow decision per region (`03` §4, `05` §5). Both: mobile changes and edge cases (longest real headline or name, no imagery, zero data, slow network).

Check every section or screen against the top tasks. Cut anything serving none.

## Finish

Run the Storybook gate in `SKILL.md`, the self-check in `00-design-reasoning.md`, and the Specificity Score in `13-validation.md`. Do not present under 70, or with the interchangeability question unanswered.

Close with: the strategy in 3 lines, the 3 decisions most worth challenging with their tags, and the next command (`/ux-copy`, `/ux-motion`, or `/ux-build`).

# File Manifest

**Path:** `src/docs/FILE-MANIFEST.md`

Every file in the skill, where it lives, what it does, and when an agent loads it.

## Root of `src/`

| Path | Purpose | Loaded |
|---|---|---|
| `src/SKILL.md` | Router, operating rules, workflow, storybook quality gate | Always, first |
| `src/AGENTS.md` | Agent entry rules; canonical copy | Always, first |
| `src/agents/openai.yaml` | Interface metadata (display name, default prompt) | Registry only |

## `src/agents/` — agent entry points

| Path | Purpose |
|---|---|
| `src/agents/AGENTS.md` | Portable copy of the canonical agent rules |
| `src/agents/CLAUDE.md` | Claude Code pointer to the canonical rules |
| `src/agents/README.md` | Which agent reads which file |

## `src/commands/` — eight slash commands

Workflow order: discover → direction → spec → copy → motion → build. Audit and critique run any time.

| Path | Command | Does |
|---|---|---|
| `src/commands/ux-discover.md` | `/ux-discover` | Interview with drafted options → `00-brief.md` |
| `src/commands/ux-direction.md` | `/ux-direction` | **Three distinct art directions → pick one.** The anti-slop fork |
| `src/commands/ux-spec.md` | `/ux-spec [scope]` | Tokens, type, color, theme, IA, components, pages. Scoped or full |
| `src/commands/ux-copy.md` | `/ux-copy [page]` | Real draft copy in the project's voice |
| `src/commands/ux-motion.md` | `/ux-motion [mode]` | Motion spec, implementation, 3D, and audit |
| `src/commands/ux-build.md` | `/ux-build [target]` | Implement from the storybook; `handoff` mode verifies |
| `src/commands/ux-audit.md` | `/ux-audit [scope]` | a11y + performance + responsive as one fix list |
| `src/commands/ux-critique.md` | `/ux-critique [target]` | Why it looks cheap, plus the generic-AI-site detector |

## `src/references/` — loaded on demand

| Path | Purpose | Loaded when |
|---|---|---|
| `00-anti-slop.md` | Ban list, divergence law, signature element, self-check | **Any visual output. Always.** |
| `01-discovery-interview.md` | Question bank, drafted-option mechanic, personas | `/ux-discover` |
| `02-foundations.md` | Research → design inputs, IA method, hierarchy, gestalt, spacing, grid | IA and layout work |
| `03-typography-color-theming.md` | Pairing, scales, palette construction, light/dark systems | Type, color, theming |
| `04-visual-styles.md` | Flat, glass, neumorphism, neubrutalism, premium vocabulary, style matrix | `/ux-direction` |
| `05-website-type-patterns.md` | Category principles and how to use a convention without templating | IA and pages |
| `06-age-inclusive-design.md` | Children, teens, adults, seniors, wide-range products | Whenever the audience skews young or old |
| `07-craft-and-accessibility.md` | Nav, forms, states, iconography, responsive, microcopy, the a11y gate | Components, `/ux-audit` |
| `08-motion-system.md` | Four rules, intensity levels, tokens, choreography, effects catalogue, budget | `/ux-motion` |
| `09-gsap-recipes.md` | ScrollTrigger, SplitText, Flip, Lenis, React setup | GSAP implementation |
| `10-motion-react-recipes.md` | Motion/Framer variants, exits, layout, springs, gestures | React motion |
| `11-threejs-webgl.md` | Cost, R3F setup, performance rules, fallbacks, lighter alternatives | 3D work |
| `12-storybook-template.md` | Templates for all ten storybook files | `/ux-spec` |
| `13-implementation-handoff.md` | Tokens in code, build order, fonts, images, definition of done | `/ux-build` |
| `14-ai-workflow.md` | Where AI helps, where human judgment leads, designing AI features | Product strategy |
| `15-composition.md` | Scale contrast, rhythm, asymmetry, grids, density, edges, images | **Any layout work** |
| `16-copy-voice.md` | The word-level tells, length discipline, microcopy | `/ux-copy` |
| `17-section-library.md` | Detailed anatomy of every section: job, needs, variants, failure modes | **Any page blueprint** |

## `src/references/blueprints/` — per-category page inventories

| Path | Covers |
|---|---|
| `blueprints/00-index.md` | Router + the belief-sequence method that prevents templating |
| `blueprints/saas.md` | SaaS product site: home, pricing, product, use cases, customers, docs, security |
| `blueprints/landing-page.md` | Single-conversion pages: constraints, sections, forms, speed |
| `blueprints/ecommerce.md` | Home, category, PDP, cart, checkout, trust placement |
| `blueprints/content-blog.md` | Article, index, reading experience, SEO, content model |
| `blueprints/portfolio-agency.md` | Index, case studies, motion licence, contact |
| `blueprints/corporate.md` | Institutional pages, documents, accessibility obligations, governance |
| `blueprints/app-dashboard.md` | App shell, dashboard, tables, forms, onboarding, states, density |

## `src/assets/` — files copied into the project

| Path | Purpose | Note |
|---|---|---|
| `assets/tokens.template.css` | Token structure for both themes | **Tripwire values.** Magenta/lime placeholders must be replaced |
| `assets/tokens.template.json` | Machine-readable equivalent | Same tripwires |
| `assets/motion-snippets.css` | JS-free motion: reveals, stagger, marquee, skeleton, aurora, nav shrink | Safe to copy as-is |

## `src/docs/`

| Path | Purpose |
|---|---|
| `docs/FILE-MANIFEST.md` | This file |
| `docs/WORKFLOW.md` | The end-to-end run, with what to expect at each step |
| `docs/ANTI-SLOP-RATIONALE.md` | Why each defense exists and what it prevents |

## Load order in practice

```
Every session          SKILL.md + AGENTS.md
Any visual output      + 00-anti-slop.md
Any layout work        + 15-composition.md
Any page blueprint     + 17-section-library.md + blueprints/<type>.md
Then                   only the references the current command names
```

Never load all references at once. The skill is designed for progressive disclosure — an agent holding 25 files skims them and falls back on its priors, which is the failure this whole skill exists to prevent.

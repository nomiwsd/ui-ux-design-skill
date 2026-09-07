# File Manifest

**Path:** `src/docs/FILE-MANIFEST.md`

Every file in the skill, what it does, and when an agent loads it.

## Root of `src/`

| Path | Purpose | Loaded |
|---|---|---|
| `src/SKILL.md` | Operating rules, the pipeline, the surface fork, storybook gate, commands | Always, first |
| `src/AGENTS.md` | Agent entry rules; appended to the project's `AGENTS.md` / `CLAUDE.md` by the installer | Always, first |
| `src/agents/openai.yaml` | Interface metadata (display name, default prompt) | Registry only |
| `src/agents/CLAUDE.md`, `src/agents/README.md` | Pointers to the canonical rules | — |

## `src/commands/` — eight slash commands

Workflow order: discover → direction → spec → copy → motion → build. Audit and critique run any time.

| Path | Command | Does |
|---|---|---|
| `ux-discover.md` | `/ux-discover` | Interview with drafted options → `00-brief.md` with context profile and surfaces |
| `ux-direction.md` | `/ux-direction` | **Three strategically different directions → pick one** |
| `ux-spec.md` | `/ux-spec [scope]` | Tokens, type, color, theme, IA, components, pages. Scoped or full |
| `ux-copy.md` | `/ux-copy [page]` | Real draft copy in the product's voice |
| `ux-motion.md` | `/ux-motion [mode]` | Motion spec by job, implementation, 3D, audit |
| `ux-build.md` | `/ux-build [target]` | Implement from the storybook; fidelity check; `handoff` mode |
| `ux-audit.md` | `/ux-audit [scope]` | WCAG 2.2 AA + performance + responsive as one fix list |
| `ux-critique.md` | `/ux-critique [target]` | Slop Detector 2.0 and Specificity Score, surface-aware |

## `src/references/` — fourteen files, loaded by pipeline stage and surface type

| Path | Purpose | Loaded when |
|---|---|---|
| `00-design-reasoning.md` | The pipeline, the context model, the marketing/product fork, principles as decisions, traceability, defaults that need a reason, vague-prompt table, self-check. **No visual values.** | **Every design task. Always.** |
| `01-discovery.md` | Question bank mapped to the decision each question changes; two tracks; persona and brief format | `/ux-discover` |
| `02-marketing-ux.md` | Content-first structure (message hierarchy → section order), strategic directions, category notes (SaaS, landing, store front, institutional, portfolio, content), section anatomy with WHEN per option | Marketing surfaces: direction, IA, pages, critique |
| `03-product-ux.md` | Entity and navigation models, home-screen job, path budgets, strategic directions, interaction model, screen anatomy, density, category notes (dashboard, enterprise, mobile app, transactional commerce, design system) | Product surfaces: direction, IA, components, pages, critique |
| `04-visual-system.md` | Hierarchy, typography by property and reading context, color architecture in layers, token tiering, surfaces, composition principles, optional-techniques appendix | Visual hierarchy, design language, composition, tokens |
| `05-responsive-accessibility.md` | Accessibility by pipeline stage, WCAG 2.2 AA gate, cognitive accessibility, age and ability adaptations, per-region reflow model | Every spec; `/ux-audit` |
| `06-motion.md` | Six motion jobs, budget from context, tokens, patterns by job, libraries, budget, accessibility | `/ux-motion` |
| `07-gsap-recipes.md` | ScrollTrigger, SplitText, Flip, Lenis, React setup | GSAP implementation |
| `08-motion-react-recipes.md` | Motion (Framer) variants, exits, layout, springs, gestures | React motion |
| `09-threejs-webgl.md` | Cost, R3F setup, performance rules, fallbacks, lighter alternatives | 3D work |
| `10-copy-voice.md` | Word-level tells, length discipline, functional microcopy, voice from brand axes | `/ux-copy`, pages |
| `11-storybook-template.md` | Templates for all ten storybook files, surface-aware | `/ux-spec` |
| `12-implementation-handoff.md` | Tokens in code, build order, fonts, images, definition of done | `/ux-build` |
| `13-validation.md` | AI-Slop Detector 2.0, Design Specificity Score, cross-project sameness test, critique method, build fidelity | `/ux-critique`, `/ux-direction`, `/ux-spec` gate, `/ux-build` |

## `src/assets/` — files copied into the project

| Path | Purpose | Note |
|---|---|---|
| `tokens.template.css` | Token structure by layer, one or two themes | **Tripwire values.** Magenta/lime placeholders must be replaced |
| `tokens.template.json` | Machine-readable equivalent | Same tripwires |
| `motion-snippets.css` | JS-free patterns: press, reveal (storytelling only), skeleton, nav shrink, marquee | Every snippet is opt-in and maps to a MOT-xx row |

## `src/docs/`

| Path | Purpose |
|---|---|
| `FILE-MANIFEST.md` | This file |
| `WORKFLOW.md` | The end-to-end run and what to expect at each step |
| `DESIGN-RATIONALE.md` | Why each guard exists, what it replaced, and what it prevents |
| `SAMENESS-TEST.md` | The twelve-brief cross-project test and its reference run |

## Load order in practice

```
Every session              SKILL.md + AGENTS.md
Any design decision        + 00-design-reasoning.md
Discovery                  + 01-discovery.md
Marketing surface          + 02-marketing-ux.md
Product surface            + 03-product-ux.md
Visual language / tokens   + 04-visual-system.md
Any spec                   + 05-responsive-accessibility.md
Motion                     + 06-motion.md (+ 07 / 08 / 09 as needed)
Copy                       + 10-copy-voice.md
Writing the storybook      + 11-storybook-template.md
Build                      + 12-implementation-handoff.md
Direction, gate, critique  + 13-validation.md
```

Never load everything. The skill is designed for progressive disclosure by pipeline stage and surface: a dashboard never loads the marketing file; a landing page never loads the product file; nothing loads a style catalogue unless it reaches the optional-techniques appendix by a stated WHEN.

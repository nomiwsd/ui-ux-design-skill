<div align="center">

# UI/UX Storybook Architect

### Design reasoning before code—not another interchangeable AI interface.

An interview-driven design skill for Claude Code, OpenAI Codex, Google Antigravity, Cursor, Windsurf, and GitHub Copilot.

[![npm version](https://img.shields.io/npm/v/uiux-storybook-architect?color=cb3837&logo=npm)](https://www.npmjs.com/package/uiux-storybook-architect)
[![CI](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/uiux-storybook-architect?color=22a06b)](LICENSE)

[Quick start](#quick-start) · [How it works](#how-it-works) · [Commands](#the-8-commands) · [Technical guide](#technical-guide) · [Troubleshooting](#troubleshooting)

</div>

---

## In one sentence

You describe the product; the skill interviews you with easy multiple-choice questions, reasons from your users, tasks, content, and business goal before choosing any look, proposes three strategically different directions, turns your choice into a complete design specification in which every decision is traceable, and helps your coding agent build it accurately.

No design vocabulary is required.

## Why this exists

AI can generate a polished interface quickly, but unconstrained output converges on whatever is most probable. First it was centered heroes, indigo, Inter, three feature cards, and uniform spacing. Then it became asymmetric editorial heroes, warm paper with one burnt accent, oversized type, bento grids, and hairline rules. Both are the same failure: an interface that could be reused for an unrelated company by changing only the logo, headline, accent color, and images.

This skill treats that interchangeability as the defect. It reasons from users, tasks, content, business goal, trust, and accessibility before choosing any visual value; it separates marketing surfaces (persuasion, proof, conversion) from product surfaces (workflows, data, states, keyboard); it presents three strategically different directions; and it requires every decision to trace back to the brief. Familiar patterns are allowed when they fit. Unreasoned repetition is not.

| Without the skill | With the skill |
|---|---|
| The agent guesses what “premium” means | The agent resolves “premium” for this audience and category, then designs from context |
| Dashboards get landing-page layouts | Marketing and product surfaces are reasoned separately |
| Three directions are three color schemes | Three directions differ in strategy: what the user sees and does first |
| Design decisions change while coding | Decisions are recorded with a reason before implementation |
| Pages follow a category template | Section order follows the reader’s decision journey; screens follow the task model |
| Colors and spacing drift between components | Values come from shared design tokens, organized in layers |
| Motion is added for decoration | Motion has a job, a budget, and a reduced-motion fallback |
| Accessibility is checked at the end | WCAG 2.2 AA shapes decisions at every stage and is gated with evidence |

## Who it is for

### If you are not a designer

Use it when you know what you want to build but do not know how to turn “clean,” “premium,” “playful,” or “trustworthy” into specific design decisions.

The interview uses drafted options and recommendations. You can reply with short answers such as:

```text
1b, 2 recommended, 3 skip, 4a
```

Skipped answers become visible assumptions, so the process keeps moving.

### If you are a developer

Use it to create a decision-complete specification before touching components. You get design tokens, page blueprints, component states, responsive rules, motion IDs, accessibility criteria, and a build order your agent can follow.

### If you are a designer or product team

Use it to accelerate discovery, explore divergent directions, document a chosen system, critique an existing interface, or create a consistent handoff for implementation.

## Quick start

### 1. Install the skill

Run this inside your project:

```bash
npx uiux-storybook-architect init
```

The installer detects supported tools and asks where to install the skill. Node.js 18 or newer is required; the CLI has no runtime dependencies.

For a non-interactive install:

```bash
npx uiux-storybook-architect init --all --yes
```

### 2. Restart your coding agent

Start a new chat or agent session so it discovers the installed skill and commands.

### 3. Describe the product normally

You can use plain language:

> Design a trustworthy retirement-planning dashboard for adults over 55. It should feel calm and clear without looking old-fashioned.

Or start explicitly:

```text
/ux-discover a trustworthy retirement-planning dashboard for adults over 55
```

The agent should begin with drafted discovery questions—not a color palette or code.

### 4. Choose a direction, then build

For a new product, the full workflow is:

```text
Discover → Choose direction → Specify → Write copy → Plan motion → Build → Audit

/ux-discover
      ↓
/ux-direction
      ↓
/ux-spec → /ux-copy → /ux-motion
      ↓
/ux-build
      ↓
/ux-audit
```

`/ux-critique` can be used at any time on an existing design or implementation.

## How it works

### 1. Discovery without the blank-page problem

The skill asks focused questions with concrete answer choices, a recommended option, and the consequence of each choice. Every question changes a design decision: who uses it and how often, what they must do, what the business needs, what happens if it goes wrong, what content exists, where the brand sits. It records a one-line context profile, a marketing-or-product label for every surface, users, tasks, and assumptions in `design/00-brief.md`.

### 2. Three directions that are actually different

Before writing tokens or components, the skill proposes three directions that differ in **strategy**: what the user sees and does first, how the page persuades or how the app is navigated, how dense it is, and how it handles proof or state. For a site that might be proof-first, product-demo-first, and problem-first; for an app, overview-first, exceptions-first, and task-first. Visual language follows from the chosen strategy. The user chooses one. This prevents “three shades of the same template.”

### 3. A Design Storybook

The selected direction becomes a written, buildable system:

```text
design/
├── 00-brief.md
├── 01-direction.md
├── 02-information-architecture.md
├── 03-design-tokens.md
├── 04-typography-and-color.md
├── 05-components.md
├── 06-page-blueprints.md
├── 07-motion-spec.md
├── 08-accessibility.md
├── 09-build-plan.md
└── tokens/
    ├── tokens.css
    └── tokens.json
```

This is not Storybook.js. “Design Storybook” means the complete written source of truth for the product’s visual and interaction design. Storybook.js can still be added during implementation if useful.

### 4. Token-first implementation

The build phase works in this order:

```text
tokens → primitives → layout → sections → pages → motion → 3D
```

That order keeps one visual language across the product and prevents each page from inventing its own buttons, spacing, or motion.

### 5. A measurable final audit

The audit returns a prioritized fix list for accessibility, performance, and responsive behavior. Findings include evidence, location, severity, and the smallest useful fix.

## The 8 commands

| Command | Use it when… | Main result |
|---|---|---|
| `/ux-discover` | Starting a new site, app, or full redesign | Context profile, surface labels, users, tasks, assumptions |
| `/ux-direction` | The brief is ready and a strategy must be chosen | Three strategically different directions and one recorded choice |
| `/ux-spec [scope]` | Creating the full system or a focused part of it | Tokens, type, color, theme, IA, components, or pages — every decision traced |
| `/ux-copy [page]` | Page or interface copy is missing or generic | Draft copy in the product’s voice |
| `/ux-motion [mode]` | Planning or implementing motion, scroll, or justified 3D | Motion spec by job, with fallbacks and performance limits |
| `/ux-build [target]` | Implementing the approved Design Storybook | Token-first build plus fidelity verification |
| `/ux-audit [scope]` | Checking accessibility, performance, or responsiveness | One prioritized, evidence-based fix list against WCAG 2.2 AA |
| `/ux-critique [target]` | An existing interface feels weak, generic, or machine-made | Slop Detector 2.0, Specificity Score, and a prioritized fix list |

<details>
<summary><strong>Command modes and focused scopes</strong></summary>

- `/ux-spec tokens` — design tokens and token files
- `/ux-spec type` — typography system
- `/ux-spec color` — palette and contrast pairings
- `/ux-spec theme` — a second theme, or a recorded decision not to ship one
- `/ux-spec ia` — information architecture
- `/ux-spec components` — component anatomy, variants, and states
- `/ux-spec pages` — page blueprints and section rhythm
- `/ux-motion 3d` — evaluate and specify a WebGL/Three.js layer
- `/ux-motion audit` — review existing motion
- `/ux-audit a11y` — accessibility
- `/ux-audit perf` — performance
- `/ux-audit responsive` — responsive behavior
- `/ux-audit all` — combined audit

Omit a scope when you want the complete phase.

</details>

## Common ways to use it

### Build a new marketing site

```text
/ux-discover a legal-tech product for small law firms
/ux-direction
/ux-spec
/ux-copy home
/ux-motion restrained
/ux-build
/ux-audit all
```

### Improve an existing interface

You do not need to repeat discovery for a small change:

```text
/ux-critique src/app/dashboard
/ux-audit all
```

The skill reads the existing tokens, components, and layout before recommending changes.

### Choose only fonts, colors, or dark mode

Use a focused specification:

```text
/ux-spec type
/ux-spec color
/ux-spec theme
```

The agent states its product/audience assumption and answers directly instead of forcing a full interview.

### Add motion to an existing site

```text
/ux-motion audit
/ux-motion restrained
```

The skill inventories existing sections, specifies motion before implementation, and includes a `prefers-reduced-motion` fallback.

---

# Technical guide

## Supported tools and install locations

| `--ide` value | Tool | Project skill | Global skill |
|---|---|---|---|
| `claude` | Claude Code | `.claude/skills/uiux-storybook-architect/` | `~/.claude/skills/uiux-storybook-architect/` |
| `codex` | OpenAI Codex | `.agents/skills/uiux-storybook-architect/` | `~/.codex/skills/uiux-storybook-architect/` |
| `antigravity` | Google Antigravity IDE | `.agents/skills/uiux-storybook-architect/` | `~/.gemini/config/skills/uiux-storybook-architect/` |
| `cursor` | Cursor | `.agents/skills/uiux-storybook-architect/` | `~/.cursor/skills/uiux-storybook-architect/` |
| `windsurf` | Windsurf | `.agents/skills/uiux-storybook-architect/` | `~/.codeium/windsurf/skills/uiux-storybook-architect/` |
| `copilot` | VS Code / GitHub Copilot | `.agents/skills/uiux-storybook-architect/` | `~/.copilot/skills/uiux-storybook-architect/` |

Project commands/workflows are installed into each tool's native command directory. Global command files are installed where the tool supports them: `~/.claude/commands/`, `~/.codex/prompts/`, and `~/.gemini/config/global_workflows/`. In Cursor, Windsurf, and Copilot, invoke the globally installed skill itself from the skill picker or let the agent select it automatically.

Project instruction files are updated additively. Existing `AGENTS.md`, `CLAUDE.md`, Cursor rules, Windsurf rules, and Copilot instructions are not replaced.

### Install selected tools

```bash
npx uiux-storybook-architect init --ide claude,codex --yes
```

### Install into another project

```bash
npx uiux-storybook-architect init \
  --ide cursor \
  --dest ../my-app \
  --yes
```

### Install globally

```bash
npx uiux-storybook-architect init --all --global --yes
```

All six supported tools receive the skill in their native global location. No project files are written by a global install.

### Other package runners

```bash
pnpm dlx uiux-storybook-architect init --all --yes
yarn dlx uiux-storybook-architect init --all --yes
bunx uiux-storybook-architect init --all --yes
```

## CLI reference

```text
uiux-storybook-architect <command> [options]

Commands:
  init          install the skill and commands
  list          show all 8 UX commands
  doctor        verify installed skills and commands
  eject         copy the editable skill source
  uninstall     remove installed skills and ux-* commands
  version       print the package version

Options:
  --all                  select every supported tool
  --ide claude,codex     select specific tools
  --global               request global scope
  --dest <directory>     choose the project root
  --yes, -y              skip interactive prompts
  --src <directory>      install an ejected or custom source
```

The shorter `uiux` binary is equivalent:

```bash
uiux list
uiux doctor --dest .
```

## Verify the installation

```bash
npx uiux-storybook-architect doctor --dest .
npx uiux-storybook-architect list
```

A behavioral smoke test is even better:

1. Start a new agent session.
2. Ask it to design a new product.
3. Confirm it begins with drafted discovery options.
4. Confirm `/ux-direction` presents three strategically different directions before `/ux-spec`.
5. Ask it for a dashboard and confirm it does not propose a hero, section rhythm, or scroll reveals.

## Design and implementation guarantees

The skill treats these as gates:

- no hue, typeface, radius, type ratio, or layout style is chosen before users, tasks, content, business goal, trust, and information architecture are written;
- every major decision carries a trace to `[USER]`, `[TASK]`, `[CONTENT]`, `[BUSINESS]`, `[BRAND]`, `[CONTEXT]`, or `[A11Y]`;
- marketing surfaces and product surfaces are reasoned separately, per surface;
- example colors, fonts, radii, and durations cannot ship unchanged;
- color layers (brand, semantic, state, surface, text, data) are separated and every pairing is measured in every theme;
- a second theme exists only when warranted, and is designed rather than inverted;
- components specify default, hover, focus-visible, active, disabled, loading, error, and empty states;
- every section or region has a reflow decision, not just “stacks”;
- blueprints contain real draft copy—not lorem ipsum or invented proof;
- every animation has a job and a reduced-motion fallback;
- WCAG 2.2 AA is gated with evidence;
- the final build is checked for fidelity to the chosen strategy, and the interchangeability question is re-answered on the built product.

## Progressive reference loading

The skill does not load its full library into every task. It routes by pipeline stage and surface type:

```text
Any design decision     → design reasoning (pipeline, context model, principles)
Discovery               → discovery question bank
Marketing surface       → marketing UX (content-first structure, section anatomy)
Product surface         → product UX (navigation, interaction model, screens, states)
Visual language, tokens → visual system
Any spec, any audit     → responsive behavior and accessibility (WCAG 2.2 AA)
Motion                  → motion by job + relevant implementation recipe
Build                   → implementation handoff
Direction, gate, critique → validation (Slop Detector 2.0, Specificity Score)
```

A dashboard never loads the marketing file. A landing page never loads the product file. Nothing loads a style catalogue unless it reaches the optional-techniques appendix by a stated reason.

## Customize the skill

Create an editable copy:

```bash
npx uiux-storybook-architect eject --dest ./my-uiux-skill
```

Install the customized source:

```bash
npx uiux-storybook-architect init \
  --all \
  --src ./my-uiux-skill \
  --yes
```

Useful customization points:

| File | What to change |
|---|---|
| `SKILL.md` | Operating rules, the pipeline, gates |
| `references/00-design-reasoning.md` | Context model, principles-as-decisions, vague-prompt table, defaults that need a reason |
| `references/02-marketing-ux.md` | Category notes and section anatomy for marketing surfaces |
| `references/03-product-ux.md` | Navigation models, interaction model, screen anatomy, category notes for apps |
| `references/04-visual-system.md` | Type, color, composition rules; the optional-techniques appendix |
| `references/10-copy-voice.md` | Voice and copy constraints |
| `assets/tokens.template.css` | Token structure for generated systems |

## Repository structure

```text
bin/cli.js
src/
├── SKILL.md
├── AGENTS.md
├── agents/
├── assets/
├── commands/              # 8 workflow commands
├── docs/
└── references/            # 14 files, loaded by pipeline stage and surface type
test/
├── cli.test.js            # installer integrity
└── skill-structure.test.js # link integrity, pipeline presence, prescriptive-rule lint
```

- [File manifest](src/docs/FILE-MANIFEST.md) — purpose and load rule for every bundled file
- [Workflow guide](src/docs/WORKFLOW.md) — expected end-to-end behavior
- [Design rationale](src/docs/DESIGN-RATIONALE.md) — why each guard exists and what it replaced
- [Sameness test](src/docs/SAMENESS-TEST.md) — the twelve-brief cross-project test
- [Publishing guide](PUBLISHING.md) — release process for maintainers

## Development

```bash
npm test
npm run check
```

`npm run check` runs the CLI test suite and an npm package dry run. CI runs on pushes and pull requests to `main`.

## Automatic npm releases

Every direct commit to `main` is published automatically after the complete CI workflow passes. The release workflow reruns the primary tests, inspects the npm tarball, increments the patch version from npm's current `latest`, publishes with provenance, and creates the synchronized version commit, Git tag, and GitHub release.

To intentionally release a new minor or major version, update the package version in the feature commit with `npm version minor --no-git-tag-version` or `npm version major --no-git-tag-version`. See the [publishing guide](PUBLISHING.md) for authentication, versioning, race protection, and recovery details.

## Update

Re-run the installer from the latest package:

```bash
npx uiux-storybook-architect@latest init --all --yes
```

For a global CLI installation:

```bash
npm install --global uiux-storybook-architect@latest
```

## Uninstall

```bash
npx uiux-storybook-architect uninstall --dest .
```

The uninstaller removes skill directories and `ux-*` command files. It deliberately leaves shared project instruction files in place because they may contain unrelated user rules.

## Troubleshooting

<details>
<summary><strong>The commands do not appear</strong></summary>

1. Run `npx uiux-storybook-architect doctor --dest .`.
2. Restart the IDE or open a new agent session.
3. Confirm the tool-specific command directory from the table above.
4. Reinstall with an explicit tool: `npx uiux-storybook-architect init --ide codex --yes`.

</details>

<details>
<summary><strong>The agent starts designing immediately</strong></summary>

Confirm the installed folder contains `SKILL.md` and that the skill is visible to your tool. For a genuinely new product with no `design/00-brief.md`, the first behavior should be the drafted discovery interview.

A focused request such as “choose one accent color” or a critique of an existing interface intentionally skips the full interview.

</details>

<details>
<summary><strong>The interview keeps repeating</strong></summary>

Keep `design/00-brief.md` in the project. It is the workflow memory; later commands read it instead of asking the same questions again.

</details>

<details>
<summary><strong>I only want one design decision</strong></summary>

Ask for it directly or use a focused `/ux-spec` scope. Single decisions, small existing-code changes, critiques, and audits use the fast path and do not require the full workflow.

</details>

<details>
<summary><strong>Antigravity does not show the skill</strong></summary>

Current Antigravity IDE releases discover global skills from `~/.gemini/config/skills/` and global workflows from `~/.gemini/config/global_workflows/`. Versions of this package before this fix used the internal `~/.gemini/antigravity/` data directory, which Antigravity does not index for custom skills. Reinstall globally, then fully restart Antigravity or start a new agent session.

</details>

## Contributing

Issues and pull requests are welcome at [nomiwsd/ui-ux-design-skill](https://github.com/nomiwsd/ui-ux-design-skill).

Please run `npm run check` before opening a pull request.

## License

MIT © Muhammad Nouman. See [LICENSE](LICENSE).

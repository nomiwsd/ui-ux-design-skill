<div align="center">

# UI/UX Storybook Architect

### Design direction before code—not another generic AI landing page.

An interview-driven design skill for Claude Code, OpenAI Codex, Google Antigravity, Cursor, Windsurf, and GitHub Copilot.

[![npm version](https://img.shields.io/npm/v/uiux-storybook-architect?color=cb3837&logo=npm)](https://www.npmjs.com/package/uiux-storybook-architect)
[![CI](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/uiux-storybook-architect?color=22a06b)](LICENSE)

[Quick start](#quick-start) · [How it works](#how-it-works) · [Commands](#the-8-commands) · [Technical guide](#technical-guide) · [Troubleshooting](#troubleshooting)

</div>

---

## In one sentence

You describe the product; the skill interviews you with easy multiple-choice questions, proposes three genuinely different design directions, turns your choice into a complete design specification, and helps your coding agent build it accurately.

No design vocabulary is required.

## Why this exists

AI can generate a polished interface quickly, but unconstrained output often converges on the same defaults:

- centered hero copy;
- blue or purple accent colors;
- Inter everywhere;
- three feature cards;
- identical spacing between every section;
- vague copy about “transforming your workflow.”

This skill adds the missing design process before implementation. It grounds decisions in the audience and product, forces meaningful visual divergence, records the chosen direction, and checks the build for accessibility and fidelity.

| Without the skill | With the skill |
|---|---|
| The agent guesses what “premium” means | The agent offers three concrete art directions |
| Design decisions change while coding | Decisions are recorded before implementation |
| Pages follow a familiar template | Page order follows the buyer’s belief sequence |
| Colors and spacing drift between components | Values come from shared design tokens |
| Motion is added for decoration | Motion has a purpose, budget, and reduced-motion fallback |
| Accessibility is checked at the end | Accessibility is part of the specification and audit |

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

The skill asks eight focused questions with concrete answer choices, a recommended option, and the consequence of each choice. It records the audience, their top tasks, product constraints, brand character, success measures, and assumptions in `design/00-brief.md`.

### 2. Three directions that are actually different

Before writing tokens or components, the skill proposes three directions that differ in layout logic, typography, palette, density, surface treatment, and signature idea. The user chooses one. This prevents “three shades of the same template.”

### 3. A Design Storybook

The selected direction becomes a written, buildable system:

```text
design/
├── 00-brief.md
├── 01-art-direction.md
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
| `/ux-discover` | Starting a new site, app, or full redesign | Audience brief and explicit assumptions |
| `/ux-direction` | The brief is ready and a visual direction must be chosen | Three distinct directions and one recorded choice |
| `/ux-spec [scope]` | Creating the full system or a focused part of it | Tokens, type, color, IA, components, or pages |
| `/ux-copy [page]` | Page or interface copy is missing or generic | Draft copy in the product’s voice |
| `/ux-motion [mode]` | Planning or implementing motion, scroll, or justified 3D | Motion spec with fallbacks and performance limits |
| `/ux-build [target]` | Implementing the approved Design Storybook | Token-first build plus fidelity verification |
| `/ux-audit [scope]` | Checking accessibility, performance, or responsiveness | One prioritized, evidence-based fix list |
| `/ux-critique [target]` | An existing interface feels weak, cheap, or machine-made | Specific diagnosis and corrective direction |

<details>
<summary><strong>Command modes and focused scopes</strong></summary>

- `/ux-spec tokens` — design tokens and token files
- `/ux-spec type` — typography system
- `/ux-spec color` — palette and contrast pairings
- `/ux-spec theme` — light and dark themes
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

| `--ide` value | Tool | Skill location in a project | Command/workflow location |
|---|---|---|---|
| `claude` | Claude Code | `.claude/skills/uiux-storybook-architect/` | `.claude/commands/` |
| `codex` | OpenAI Codex | `.agents/skills/uiux-storybook-architect/` | `~/.codex/prompts/` |
| `antigravity` | Google Antigravity | `.agents/skills/uiux-storybook-architect/` | `.agents/workflows/` |
| `cursor` | Cursor | `.agents/skills/uiux-storybook-architect/` | `.cursor/commands/` |
| `windsurf` | Windsurf | `.agents/skills/uiux-storybook-architect/` | `.windsurf/workflows/` |
| `copilot` | VS Code / GitHub Copilot | `.agents/skills/uiux-storybook-architect/` | `.github/prompts/` |

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

Claude Code, Codex, and Antigravity support global skill locations. Tools without a global target fall back to project scope and report that choice.

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
4. Confirm `/ux-direction` presents three structurally different directions before `/ux-spec`.

## Design and implementation guarantees

The skill treats these as gates:

- every visual decision has a product, audience, trust, or accessibility reason;
- example colors, fonts, radii, and durations cannot ship unchanged;
- light and dark themes are independently designed;
- foreground/background contrast is measured in both themes;
- components specify default, hover, focus-visible, active, disabled, loading, error, and empty states;
- page blueprints contain real draft copy—not lorem ipsum or invented proof;
- every animation has a named trigger and reduced-motion fallback;
- testimonials, customers, logos, and statistics are never fabricated;
- the final build is checked against the chosen art direction and signature element.

## Progressive reference loading

The skill does not load its full design library into every task. It routes to focused references:

```text
Any visual output      → anti-slop rules
Layout work            → composition
Page blueprint         → section library + matching category blueprint
Typography/color       → typography, color, and theming
Motion                 → motion system + relevant implementation recipe
Build                  → implementation handoff
Audit                  → craft and accessibility
```

This keeps the active context relevant and reduces fallback to generic model defaults.

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
| `SKILL.md` | Workflow rules, defaults, and quality gates |
| `references/00-anti-slop.md` | Visual defaults to reject or allow |
| `references/04-visual-styles.md` | House styles and direction vocabulary |
| `references/16-copy-voice.md` | Voice and copy constraints |
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
└── references/
    └── blueprints/        # category-specific page inventories
test/cli.test.js
```

- [File manifest](src/docs/FILE-MANIFEST.md) — purpose and load rule for every bundled file
- [Workflow guide](src/docs/WORKFLOW.md) — expected end-to-end behavior
- [Anti-slop rationale](src/docs/ANTI-SLOP-RATIONALE.md) — why the divergence and quality defenses exist
- [Publishing guide](PUBLISHING.md) — release process for maintainers

## Development

```bash
npm test
npm run check
```

`npm run check` runs the CLI test suite and an npm package dry run. CI runs on pushes and pull requests to `main`.

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
<summary><strong>A global installation wrote project files</strong></summary>

Cursor, Windsurf, and GitHub Copilot do not have a supported global target in this CLI. They fall back to project scope and print a warning.

</details>

## Contributing

Issues and pull requests are welcome at [nomiwsd/ui-ux-design-skill](https://github.com/nomiwsd/ui-ux-design-skill).

Please run `npm run check` before opening a pull request.

## License

MIT © Muhammad Nouman. See [LICENSE](LICENSE).

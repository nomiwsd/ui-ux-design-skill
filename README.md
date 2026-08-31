# UI/UX Storybook Architect

[![CI](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/uiux-storybook-architect.svg)](https://www.npmjs.com/package/uiux-storybook-architect)
[![npm downloads](https://img.shields.io/npm/dm/uiux-storybook-architect.svg)](https://www.npmjs.com/package/uiux-storybook-architect)
[![license](https://img.shields.io/npm/l/uiux-storybook-architect.svg)](LICENSE)

An interview-first UI/UX design skill plus 21 focused commands for Claude Code, OpenAI Codex, Google Antigravity, Cursor, Windsurf, and VS Code with GitHub Copilot.

It turns a vague product idea into a decision-complete **Design Storybook** before implementation: product brief, audience, information architecture, design tokens, typography, color, light and dark themes, component states, page blueprints, motion, accessibility, performance, and a build plan.

```bash
npx uiux-storybook-architect init
```

## Table of contents

- [Who this is for](#who-this-is-for)
- [What the skill produces](#what-the-skill-produces)
- [Requirements](#requirements)
- [Installation](#installation)
- [Install for each IDE](#install-for-each-ide)
- [Verify the installation](#verify-the-installation)
- [Beginner workflow](#beginner-workflow)
- [All 21 design commands](#all-21-design-commands)
- [CLI reference](#cli-reference)
- [Practical workflows](#practical-workflows)
- [Advanced usage and customization](#advanced-usage-and-customization)
- [Update or uninstall](#update-or-uninstall)
- [Troubleshooting](#troubleshooting)
- [Repository structure](#repository-structure)
- [Development and releases](#development-and-releases)

## Who this is for

Use this package when you want an AI coding agent to make deliberate design decisions instead of immediately generating a generic page.

It works especially well for:

- developers who can implement a product but want stronger UI/UX direction;
- designers who want a written, buildable handoff rather than isolated mockups;
- teams that need consistent tokens, component states, accessibility, and motion rules;
- agencies working across multiple projects or multiple agentic IDEs;
- existing products that need a critique, redesign, dark mode, responsive pass, or accessibility audit.

For a new site or application, the skill interviews you first. For a small change, audit, or single design decision, it reads the existing project and takes the appropriate fast path.

## What the skill produces

The complete workflow writes a `design/` directory into your project:

```text
design/
├── 00-brief.md
├── 01-information-architecture.md
├── 02-design-tokens.md
├── 03-typography-and-color.md
├── 04-components.md
├── 05-page-blueprints.md
├── 06-motion-spec.md
├── 07-accessibility.md
├── 08-build-plan.md
└── tokens/
    ├── tokens.css
    └── tokens.json
```

This directory becomes the shared source of truth for the human team and every AI agent. Commit it to Git so a new session can continue without rediscovering design decisions.

## Requirements

- Node.js 18 or newer
- npm, pnpm, Yarn, or Bun
- one of the supported IDEs/agents, or any assistant that can read Markdown instructions

The installer has zero runtime dependencies.

## Installation

### Recommended: run with npm without installing globally

From the root of the project you want to design:

```bash
npx uiux-storybook-architect init
```

The installer detects supported IDEs and asks where to install the skill.

### Non-interactive installation

```bash
# Install for every supported IDE in this project
npx uiux-storybook-architect init --all --yes

# Install only for selected IDEs
npx uiux-storybook-architect init --ide claude,codex --yes

# Install into another project directory
npx uiux-storybook-architect init --ide cursor --dest ../my-app --yes

# Install globally where the selected IDE supports global skills
npx uiux-storybook-architect init --all --global --yes
```

Supported IDE identifiers are:

```text
claude, codex, antigravity, cursor, windsurf, copilot
```

### Other package managers

```bash
pnpm dlx uiux-storybook-architect init --all --yes
yarn dlx uiux-storybook-architect init --all --yes
bunx uiux-storybook-architect init --all --yes
```

### Install the CLI globally

```bash
npm install --global uiux-storybook-architect
uiux init
```

Both `uiux` and `uiux-storybook-architect` point to the same CLI.

### Install directly from GitHub

This is useful for testing the repository version before it reaches npm:

```bash
npx github:nomiwsd/ui-ux-design-skill init --all --yes
```

## Install for each IDE

Run these commands from your project root unless the example uses `--global`.

### Claude Code

Project installation, recommended for a shared team repository:

```bash
npx uiux-storybook-architect init --ide claude --yes
```

Global installation, available in every project:

```bash
npx uiux-storybook-architect init --ide claude --global --yes
```

Installed locations:

```text
.claude/skills/uiux-storybook-architect/   # project skill
.claude/commands/ux-*.md                   # project commands
CLAUDE.md                                  # standing rules are appended
```

Global equivalents are under `~/.claude/skills/` and `~/.claude/commands/`.

Verify with `/help`, then run:

```text
/ux-discover a SaaS dashboard for warehouse managers
```

Detailed guide: [Claude Code setup](src/docs/01-claude-code.md).

### OpenAI Codex

Project-scoped skill:

```bash
npx uiux-storybook-architect init --ide codex --yes
```

Global skill:

```bash
npx uiux-storybook-architect init --ide codex --global --yes
```

Installed locations:

```text
.agents/skills/uiux-storybook-architect/   # project skill
AGENTS.md                                  # standing rules are appended
~/.codex/prompts/ux-*.md                   # Codex custom prompts are global
```

The global skill lives at `~/.codex/skills/uiux-storybook-architect/`.

Verify with `/skills`. You can force explicit invocation when needed:

```text
$uiux-storybook-architect design a portfolio for a 3D motion designer
```

Detailed guide: [OpenAI Codex setup](src/docs/02-codex.md).

### Google Antigravity

Project installation:

```bash
npx uiux-storybook-architect init --ide antigravity --yes
```

Global installation:

```bash
npx uiux-storybook-architect init --ide antigravity --global --yes
```

Installed project locations:

```text
.agents/skills/uiux-storybook-architect/
.agents/workflows/ux-*.md
AGENTS.md
```

Global equivalents are under `~/.gemini/antigravity/skills/` and `~/.gemini/antigravity/global_workflows/`.

Open the agent panel, type `/`, and confirm that the `ux-*` workflows appear.

Detailed guide: [Google Antigravity setup](src/docs/03-antigravity.md).

### Cursor

Cursor uses a project-scoped skill, command files, and a pointer rule:

```bash
npx uiux-storybook-architect init --ide cursor --yes
```

Installed locations:

```text
.agents/skills/uiux-storybook-architect/
.cursor/commands/ux-*.md
.cursor/rules/uiux.mdc
```

Open Cursor Chat, switch to Agent mode, type `/`, and select a `ux-*` command. Use Agent mode for commands that write files.

Detailed guide: [Cursor setup](src/docs/04-cursor.md).

### Windsurf

```bash
npx uiux-storybook-architect init --ide windsurf --yes
```

Installed locations:

```text
.agents/skills/uiux-storybook-architect/
.windsurf/workflows/ux-*.md
.windsurf/rules/uiux.md
```

Open Cascade, type `/`, and confirm that the `ux-*` workflows appear.

Detailed guide: [Windsurf setup](src/docs/05-windsurf.md).

### VS Code with GitHub Copilot

```bash
npx uiux-storybook-architect init --ide copilot --yes
```

Installed locations:

```text
.agents/skills/uiux-storybook-architect/
.github/prompts/ux-*.prompt.md
.github/copilot-instructions.md
```

In VS Code settings, enable prompt files:

```json
{
  "chat.promptFiles": true
}
```

Reload VS Code, open Copilot Chat in Agent mode, type `/`, and choose a `ux-*` prompt.

Detailed guides: [VS Code Copilot setup](src/docs/06-vscode-copilot.md) and [complete VS Code guide](src/docs/11-vscode-guide.md).

## Verify the installation

Run the built-in diagnostic from your project root:

```bash
npx uiux-storybook-architect doctor --dest .
```

It checks installed skill locations, command counts, and the interview gate. Then perform the behavioral test:

```text
/ux-discover a landing page for a fintech app aimed at users over 55
```

A correct installation asks the first batch of eight numbered questions. It should not immediately generate colors or code.

After installing or updating, restart the IDE or begin a new agent session so it reloads its skills and commands.

## Beginner workflow

For a brand-new website or application, use this path:

```text
/ux-discover <one-line product description>
/ux-storybook
/ux-build all
/ux-a11y src
/ux-perf
/ux-handoff developer
```

### Step 1: discovery

```text
/ux-discover a booking website for a physiotherapy clinic serving mostly 50+ patients
```

The command asks two batches of questions. Recommended defaults are provided, so you can answer quickly with `defaults` where you do not have a preference. The result is saved to `design/00-brief.md`.

### Step 2: generate the Design Storybook

```text
/ux-storybook
```

Review the generated `design/` files before implementation. Change decisions you disagree with; these files are intended to be edited and committed.

### Step 3: build from the approved specification

```text
/ux-build all
```

The agent implements tokens first, then primitives, layout, sections, pages, motion, and finally optional 3D.

### Step 4: audit and hand off

```text
/ux-a11y src
/ux-perf
/ux-responsive src
/ux-handoff developer
```

The final commands verify accessibility, performance, responsive behavior, completeness, and implementation handoff.

## All 21 design commands

Every command accepts free-text context after its name. Paths, URLs, page names, component names, motion IDs, brand colors, and framework details can all be passed directly.

### Research and structure

#### `/ux-discover`

Runs the complete discovery interview for a new site, app, or full redesign.

- Input: a one-line project description, optional URL, or repository path.
- Output: `design/00-brief.md` with audience, tasks, conversion, brand direction, constraints, and assumptions.
- Behavior: asks two batches of up to eight questions, then plays back a short summary for correction.
- Next command: `/ux-storybook`.

```text
/ux-discover a multilingual e-commerce store for handmade ceramics
```

#### `/ux-brief`

Creates only the product brief, personas, and jobs-to-be-done when you do not need the full storybook yet.

- Input: project description or a path to existing notes.
- Output: `design/00-brief.md`.
- Includes: primary conversion, one to three concise personas, top three tasks, brand direction, constraints, metrics, and assumptions.

```text
/ux-brief use docs/client-kickoff.md and focus on mobile shoppers
```

#### `/ux-ia`

Designs the information architecture from the approved brief.

- Input: product type, known pages, or requested user flows.
- Output: `design/01-information-architecture.md`.
- Includes: sitemap, flow for each top task, friction points, page inventory, primary actions, and CMS content model.

```text
/ux-ia home, services, practitioner profiles, booking, account
```

### Full deliverable

#### `/ux-storybook`

Generates the complete Design Storybook and runs its quality gate.

- Input: optional output directory; defaults to `design/`.
- Output: all nine design documents plus CSS and JSON tokens.
- Requires: an existing brief for new work; use `/ux-discover` first.
- Checks: contrast, state coverage, assumptions, primary actions, motion fallbacks, and build acceptance criteria.

```text
/ux-storybook
/ux-storybook docs/product-design
```

### Foundations

#### `/ux-tokens`

Creates or updates the complete token system.

- Input: brand color, framework, or path to existing tokens.
- Output: `design/tokens/tokens.css`, `design/tokens/tokens.json`, and `design/02-design-tokens.md`.
- Covers: light/dark color, type, spacing, radii, elevation, layout, and motion.
- Can emit: Tailwind v3/v4 or stack-specific mappings.

```text
/ux-tokens brand green is #0F9D58, Next.js with Tailwind v4
```

#### `/ux-type`

Chooses a font pairing and creates a responsive type system.

- Input: three brand adjectives or existing font names.
- Output: typography section and updated type tokens.
- Includes: recommended pairing, two alternatives, modular scale, `clamp()` values, roles, weights, loading, preload, and fallback strategy.

```text
/ux-type calm, precise, premium
```

#### `/ux-color`

Builds an accessible light and dark color system.

- Input: product category, audience, brand color, or logo reference.
- Output: dominant/secondary/accent roles, neutral ramp, semantic colors, and measured contrast table.
- Gate: failures against 4.5:1 body text and 3:1 large/UI text are fixed before delivery.

```text
/ux-color fintech for adults 30-50, existing brand blue #1E3A8A
```

#### `/ux-theme`

Designs dark mode as an independent system or audits an existing implementation.

- Input: CSS/token path or `from scratch`.
- Output: dark palette, elevation surfaces, contrast results, pre-paint switching logic, persistence, and a list of non-token surfaces to fix.

```text
/ux-theme src/styles/globals.css
```

#### `/ux-style`

Selects a defensible visual direction instead of mixing trend effects.

- Input: product type, audience, brand adjectives, or reference URLs.
- Output: one recommended direction, deliberate exclusions, spacing/border/radius/imagery treatment, and implementation details.

```text
/ux-style B2B analytics for finance teams; trustworthy, calm, expensive
```

### Component and page specifications

#### `/ux-components`

Writes implementation-ready component specifications.

- Input: component names or `all`.
- Output: `design/04-components.md`.
- Covers: anatomy, variants, sizes, accessibility, token references, and default, hover, focus-visible, active, disabled, loading, error, and empty states.

```text
/ux-components button, input, modal, pricing card
/ux-components all
```

#### `/ux-pages`

Creates page blueprints section by section.

- Input: one or more page names.
- Output: `design/05-page-blueprints.md`.
- Includes: page goal, primary action, mobile above-the-fold priority, section order, copy intent, layout, visual treatment, motion IDs, spacing, responsive changes, and edge cases.

```text
/ux-pages home, pricing, case studies, contact
```

### Motion and 3D

#### `/ux-motion`

Writes the motion specification before animation code is added.

- Input: intensity `1` to `4`, or `audit` for an existing site.
- Output: `design/06-motion-spec.md`.
- Includes: motion tokens and one `MOT-xx` row per animation with trigger, property, timing, easing, library, and reduced-motion fallback.

```text
/ux-motion 2
/ux-motion audit
```

#### `/ux-gsap`

Implements GSAP and ScrollTrigger effects from the approved motion IDs.

- Input: `MOT-xx` IDs or a requested effect.
- Covers: React `useGSAP`, `gsap.context`, Next.js client boundaries, ScrollTrigger refresh, responsive matching, reduced motion, pinning, SplitText, Flip, and Lenis patterns.
- Rule: if no motion spec exists, the agent writes the required rows before implementation.

```text
/ux-gsap MOT-01, MOT-03
/ux-gsap pinned process section
```

#### `/ux-framer`

Implements Motion/Framer Motion animations for React components.

- Input: component names, interactions, or motion IDs.
- Covers: `MotionConfig`, variants, `AnimatePresence`, `layoutId`, scroll reveal, focus parity, page transitions, and `LazyMotion`.

```text
/ux-framer modal, tabs, shared-element page transition
```

#### `/ux-3d`

Evaluates and implements Three.js or React Three Fiber only when 3D earns its cost.

- Input: what the scene should communicate.
- Covers: 2D alternatives, dynamic import, static poster, DOM fallback, device-pixel-ratio cap, performance degradation, reduced motion, WebGL failure, asset optimization, and bundle/Lighthouse impact.

```text
/ux-3d interactive product viewer for a headphone brand
```

### Audits

#### `/ux-critique`

Critiques an existing interface and returns a prioritized fix list.

- Input: URL, screenshot, design, or component path.
- Output: what works, what breaks ordered by user impact, concrete fixes, effort estimates, and an 8px blur hierarchy test.

```text
/ux-critique https://example.com
/ux-critique src/app/page.tsx
```

#### `/ux-a11y`

Runs the complete accessibility gate against design files or code.

- Input: path, URL, or `design`.
- Output: `design/07-accessibility.md` with pass/fail/not-applicable evidence and concrete fixes.
- Checks: perceivable, operable, understandable, robust; both themes; keyboard-only flow; focus; 200% zoom; 320px width; and reduced motion.

```text
/ux-a11y design
/ux-a11y src/components
```

#### `/ux-perf`

Audits interface, motion, fonts, imagery, and WebGL against a mobile performance budget.

- Input: project path or URL.
- Checks: LCP, CLS, INP, animation bundle weight, font loading, image delivery, WebGL cost, and non-composited animated properties.
- Output: fixes ordered by measured impact and an expected Lighthouse change.

```text
/ux-perf
/ux-perf https://staging.example.com
```

#### `/ux-responsive`

Plans or audits responsive behavior based on information priority.

- Input: page or component path.
- Checks: 320 through 1920 widths, 44px touch targets, overflow, 200% zoom, `dvh`, safe areas, sticky headers, tables, hover-only controls, intrinsic layout, and container queries.

```text
/ux-responsive src/app
```

### Implementation and handoff

#### `/ux-build`

Implements an approved Design Storybook in the correct system-first order.

- Input: page/component name or `all`.
- Build order: tokens → primitives → layout → sections → pages → motion → 3D.
- Rules: no raw color/spacing/duration values, every component state ships together, static UI comes before motion, and animation follows motion IDs.
- Completion: runs the acceptance criteria from `design/08-build-plan.md` and reports pass/fail.

```text
/ux-build pricing page
/ux-build all
```

#### `/ux-handoff`

Produces a complete handoff for a human developer or a fresh agent session.

- Input: `developer`, `agent`, or an IDE name.
- Output: completeness check, definition of done, paste-ready build prompt, token locations, state/breakpoint/motion redlines, and optional Storybook.js setup.

```text
/ux-handoff developer
/ux-handoff codex
```

## CLI reference

The npm package also provides a setup and maintenance CLI:

```bash
npx uiux-storybook-architect <command> [options]
```

### `init`

Detects IDEs, copies the skill, creates IDE-specific commands, and appends standing rules.

```bash
npx uiux-storybook-architect init
npx uiux-storybook-architect init --ide claude,codex --yes
npx uiux-storybook-architect init --all --global --yes
npx uiux-storybook-architect init --dest ../my-project --ide cursor --yes
```

### `list`

Prints all bundled design commands grouped by workflow phase:

```bash
npx uiux-storybook-architect list
```

### `doctor`

Checks installation locations, command counts, and interview logic. It exits with status `1` if no installation is found, so it can be used in setup scripts or CI.

```bash
npx uiux-storybook-architect doctor --dest .
```

### `eject`

Copies the bundled skill source into a folder you own:

```bash
npx uiux-storybook-architect eject --dest ./my-uiux-skill
```

Install the edited source with:

```bash
npx uiux-storybook-architect init --all --src ./my-uiux-skill --yes
```

### `uninstall`

Removes the installed skill and `ux-*` commands. It intentionally leaves project rules and your generated `design/` directory in place.

```bash
npx uiux-storybook-architect uninstall --dest .
```

### `version`

```bash
npx uiux-storybook-architect version
```

### CLI options

| Option | Meaning |
|---|---|
| `--all` | Target every supported IDE |
| `--ide <list>` | Target a comma-separated IDE list |
| `--global` | Use global locations where supported |
| `--dest <directory>` | Set the project root; defaults to the current directory |
| `--yes` or `-y` | Run without interactive selection |
| `--src <directory>` | Install from an ejected/custom skill source |
| `--help` or `-h` | Show CLI help |

## Practical workflows

### New marketing site

```text
/ux-discover a marketing site for a Lahore interior design studio; premium but approachable
/ux-storybook
/ux-build all
/ux-a11y src
/ux-perf
/ux-handoff developer
```

### Redesign an existing product

```text
/ux-critique https://current-product.example
/ux-discover redesign the audited product; keep the logo and brand green
/ux-storybook
/ux-build all
```

### Add animation to an existing site

```text
/ux-motion audit
/ux-gsap MOT-01, MOT-03
/ux-framer modal, tabs, page transition
/ux-perf
```

### Build only a design system

```text
/ux-type calm, precise, premium
/ux-color healthcare SaaS for adults, existing brand blue #1E3A8A
/ux-tokens React with Tailwind v4
/ux-components all
```

### Fix an existing dark mode

```text
/ux-theme src/styles/globals.css
/ux-a11y src/styles
```

### Continue work in another IDE or session

Commit `design/`, then run:

```text
/ux-handoff agent
```

Paste the generated handoff prompt into the fresh session. The written storybook carries the decisions across tools and context windows.

## Advanced usage and customization

### Use project scope for teams

Project installs can be committed so every team member receives the same skill, commands, and rules. Review the installed rule file before committing it, especially if the repository already has agent instructions.

### Use global scope for personal defaults

Global installation is useful when you work across many repositories. A project-scoped skill can still override or specialize your global defaults.

### Customize the design knowledge

```bash
npx uiux-storybook-architect eject --dest ./my-uiux-skill
```

High-impact customization points:

- `SKILL.md`: workflow and decision rules;
- `references/04-visual-styles.md`: house visual direction;
- `references/03-typography-color-theming.md`: typography and palette methodology;
- `assets/tokens.template.css`: default token shape;
- `commands/`: command-specific workflows.

Install the customized copy:

```bash
npx uiux-storybook-architect init --all --src ./my-uiux-skill --yes
```

### Use without slash commands

Skills that support automatic discovery can activate from a normal prompt:

```text
Design a dashboard for warehouse managers and create the Design Storybook before coding.
```

In Codex, explicit invocation is also available:

```text
$uiux-storybook-architect audit this interface for accessibility and responsive problems
```

### Use individual references

For focused work, tell the agent exactly which reference to load. Example:

```text
Read references/09-gsap-recipes.md from the installed skill and implement MOT-04.
```

This is helpful in IDEs that aggressively reduce context.

## Update or uninstall

### Update from npm

`npx` automatically resolves the current release. Re-run installation to refresh copied skill files:

```bash
npx uiux-storybook-architect@latest init --all --yes
```

For a global CLI installation:

```bash
npm install --global uiux-storybook-architect@latest
uiux init --all --global --yes
```

The installer refreshes the installed skill and command files. It does not delete or overwrite the project's generated `design/` directory.

### Uninstall

```bash
npx uiux-storybook-architect uninstall --dest .
```

Review standing rule files such as `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/uiux.mdc`, `.windsurf/rules/uiux.md`, or `.github/copilot-instructions.md` if you also want to remove the appended pointer text.

## Troubleshooting

### The `ux-*` commands do not appear

1. Restart the IDE or open a new agent session.
2. Run `npx uiux-storybook-architect doctor --dest .`.
3. Confirm that you used the correct IDE identifier.
4. Check the installed paths in the per-IDE section above.
5. For VS Code Copilot, enable `chat.promptFiles` and use Agent mode.

### The agent starts designing without discovery

Run:

```text
/ux-discover <your project description>
```

Then confirm the skill folder is named `uiux-storybook-architect` and contains `SKILL.md`. In Codex, check `/skills`; in Claude Code, check `/help`.

### The interview repeats

Confirm that `design/00-brief.md` exists in the current project root and that the IDE can read it. The brief is the workflow memory; once present, later phases should reuse it.

### Commands show `$ARGUMENTS` literally

Some IDE versions do not substitute prompt arguments. Keep typing the command and context on the same line; the agent can read the full message even if the placeholder remains visible.

### A global install writes project files

Cursor, Windsurf, and VS Code Copilot use project-specific rule and command locations. When global scope is unsupported, the CLI reports that it is installing into the selected project instead.

### Installation paths are stale after an update

Re-run the `init` command and restart the IDE:

```bash
npx uiux-storybook-architect@latest init --ide <your-ide> --yes
```

## Repository structure

```text
bin/
└── cli.js                         zero-dependency installer and diagnostic CLI
src/
├── SKILL.md                       skill entry point and operating guidelines
├── AGENTS.md                      standing project rules template
├── agents/openai.yaml             OpenAI skill metadata
├── assets/                        token and motion templates
├── commands/                      21 cross-IDE command definitions
├── docs/                          per-IDE and workflow guides
└── references/                    14 on-demand UI/UX knowledge modules
test/
└── cli.test.js                    CLI and clean-install tests
.github/workflows/
├── ci.yml                         Windows/Linux and Node version matrix
└── publish.yml                    npm and GitHub release automation
```

## Development and releases

Clone and verify locally:

```bash
git clone https://github.com/nomiwsd/ui-ux-design-skill.git
cd ui-ux-design-skill
npm ci
npm test
npm run check
```

`npm run check` runs the test suite and previews the exact npm tarball contents.

CI runs on Windows and Linux with Node.js 18, 22, and 24. Version tags matching `v*` trigger the release workflow, which validates the tag, avoids duplicate registry uploads, publishes to npm, and creates a GitHub release.

Maintainers should follow [PUBLISHING.md](PUBLISHING.md).

## Links

- [npm package](https://www.npmjs.com/package/uiux-storybook-architect)
- [GitHub repository](https://github.com/nomiwsd/ui-ux-design-skill)
- [Issues](https://github.com/nomiwsd/ui-ux-design-skill/issues)
- [Command quick reference](src/docs/00-commands-reference.md)
- [End-to-end recipes](src/docs/09-workflows.md)

## License

[MIT](LICENSE) © 2026 Muhammad Nouman

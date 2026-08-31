# UI/UX Storybook Architect

[![CI](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/nomiwsd/ui-ux-design-skill/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/uiux-storybook-architect.svg)](https://www.npmjs.com/package/uiux-storybook-architect)
[![license](https://img.shields.io/npm/l/uiux-storybook-architect.svg)](LICENSE)

An interview-first UI/UX design skill and 21 slash commands for Claude Code, OpenAI Codex, Google Antigravity, Cursor, Windsurf, and VS Code Copilot.

It turns a vague product idea into a decision-complete **Design Storybook**: audience and task research, information architecture, design tokens, typography, color, light and dark themes, component states, page blueprints, motion, accessibility, and an implementation plan.

## Quick start

Install the skill into the current project:

```bash
npx uiux-storybook-architect init
```

The interactive installer detects supported agentic IDEs. For CI, scripts, or a known setup, use a non-interactive command:

```bash
# Install for every supported IDE in the current project
npx uiux-storybook-architect init --all --yes

# Install only for selected IDEs
npx uiux-storybook-architect init --ide claude,codex --yes

# Install globally for every IDE that supports global skills
npx uiux-storybook-architect init --all --global --yes
```

You can also run it with pnpm, Yarn, or Bun:

```bash
pnpm dlx uiux-storybook-architect init --all
yarn dlx uiux-storybook-architect init --all
bunx uiux-storybook-architect init --all
```

Until the npm release is available, install directly from GitHub:

```bash
npx github:nomiwsd/ui-ux-design-skill init --all --yes
```

Restart the IDE or begin a new agent session after installation.

## Use the skill

Start a new design with a plain prompt or the discovery command:

```text
Design a booking site for a physiotherapy clinic serving mostly 50+ patients.

/ux-discover a booking site for a physiotherapy clinic serving mostly 50+ patients
```

For a new product, the skill asks two short batches of questions with recommended defaults. It then writes the reusable design specification to `design/`.

```text
/ux-storybook    Create the full written design system and build plan
/ux-build all    Implement from the approved Design Storybook
/ux-a11y src     Run the accessibility gate against the implementation
/ux-handoff      Prepare the final implementation handoff
```

The interview runs once per project. When `design/00-brief.md` exists, the skill reads it instead of asking again. Small additions, single design decisions, critiques, accessibility audits, and performance audits use focused fast paths.

## Commands

| Group | Commands |
|---|---|
| Research and structure | `/ux-discover` `/ux-brief` `/ux-ia` |
| Full deliverable | `/ux-storybook` |
| Foundations | `/ux-tokens` `/ux-type` `/ux-color` `/ux-theme` `/ux-style` |
| Specifications | `/ux-components` `/ux-pages` |
| Motion and 3D | `/ux-motion` `/ux-gsap` `/ux-framer` `/ux-3d` |
| Audits | `/ux-critique` `/ux-a11y` `/ux-perf` `/ux-responsive` |
| Implementation | `/ux-build` `/ux-handoff` |

Run `npx uiux-storybook-architect list` to print every command and its description.

## Supported IDEs

| IDE | Skill location | Command location | Project rules |
|---|---|---|---|
| Claude Code | `.claude/skills/` or `~/.claude/skills/` | `.claude/commands/` | `CLAUDE.md` |
| OpenAI Codex | `.agents/skills/` or `~/.codex/skills/` | `~/.codex/prompts/` | `AGENTS.md` |
| Google Antigravity | `.agents/skills/` or `~/.gemini/antigravity/skills/` | `.agents/workflows/` | `AGENTS.md` |
| Cursor | `.agents/skills/` | `.cursor/commands/` | `.cursor/rules/uiux.mdc` |
| Windsurf | `.agents/skills/` | `.windsurf/workflows/` | `.windsurf/rules/uiux.md` |
| VS Code Copilot | `.agents/skills/` | `.github/prompts/*.prompt.md` | `.github/copilot-instructions.md` |

Existing rule files are appended to, not overwritten. Re-running the installer refreshes the bundled skill and commands without touching the project's `design/` output.

## CLI reference

| Command | Purpose |
|---|---|
| `init` | Detect and install the skill and slash commands |
| `list` | List all bundled commands |
| `doctor` | Check installed locations and interview logic |
| `eject` | Copy the source into a directory for customization |
| `uninstall` | Remove installed skill and `ux-*` commands |
| `version` | Print the package version |

Common options:

```text
--all                    target every supported IDE
--ide claude,codex       target selected IDEs
--global                 use global installation locations
--dest <directory>       set the project root (default: current directory)
--yes                    run non-interactively
--src <directory>        install an ejected/customized skill source
```

Check an installation with:

```bash
npx uiux-storybook-architect doctor --dest .
```

## Customize it

Eject a copy, edit it, and install from that copy:

```bash
npx uiux-storybook-architect eject --dest ./my-uiux-skill
npx uiux-storybook-architect init --all --src ./my-uiux-skill --yes
```

The installed skill includes detailed guides under `docs/`, including per-IDE setup, the npm CLI, customization, and end-to-end workflows.

## Repository structure

```text
bin/                    zero-dependency installer CLI
src/SKILL.md            skill entry point and operating guidelines
src/agents/             skill UI metadata
src/commands/           21 slash-command definitions
src/references/         14 on-demand design references
src/assets/             reusable token and motion templates
src/docs/               setup and usage guides
test/                   installer and package tests
.github/workflows/      CI and npm release automation
```

## Development

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm test
npm run check
```

`npm run check` runs the test suite and previews the exact npm tarball contents. See [PUBLISHING.md](PUBLISHING.md) for the release procedure.

## License

[MIT](LICENSE) © 2026 Muhammad Nouman

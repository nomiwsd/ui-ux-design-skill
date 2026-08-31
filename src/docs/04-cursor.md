# Cursor

Cursor has no skill-discovery system, so the setup uses two pieces: a **rule** that points at the
skill, and **commands** for the slash menu.

## Install

```bash
./scripts/install.sh cursor --project
```

Layout:

```
.agents/skills/uiux-storybook-architect/   the knowledge base
.cursor/commands/ux-*.md                   slash commands
.cursor/rules/uiux.mdc                     pointer rule (appended, not overwritten)
```

## Verify

Open the chat panel, type `/` — the `ux-` commands appear. Run:

```
/ux-discover a marketing site for a B2B analytics product
```

## Make the rule always-on (recommended)

Open `.cursor/rules/uiux.mdc` and set the frontmatter so it applies to design work automatically:

```mdc
---
description: UI/UX design workflow — interview first, storybook before code
globs: ["**/*.tsx", "**/*.jsx", "**/*.css", "design/**"]
alwaysApply: false
---
```

`alwaysApply: true` is heavier but guarantees the interview-first behaviour on every message.

## Tips specific to Cursor

- Cursor aggressively trims context. Reference the file you want it to read explicitly:
  `@.agents/skills/uiux-storybook-architect/references/08-motion-system.md`.
- Use Agent mode (not Ask) for `/ux-build` — Ask mode won't write files.
- After `/ux-storybook`, add `design/` to `.cursorignore` **exceptions** if you have a broad ignore
  file; the storybook needs to stay readable.
- For big builds, run `/ux-build` one section at a time (`/ux-build hero section`) rather than
  `all` — Cursor's diffs are easier to review in smaller chunks.

# OpenAI Codex CLI

Codex discovers skills by description and supports custom prompts as slash commands.

## Install

```bash
./scripts/install.sh codex --global
```

Layout:

```
~/.codex/skills/uiux-storybook-architect/    skill (auto-discovered)
~/.codex/prompts/ux-*.md                     slash commands
```

For a repo-scoped skill instead, `./scripts/install.sh codex --project` puts the skill in
`.agents/skills/` and still installs the prompts globally (Codex reads custom prompts from your
home config).

## Verify

```bash
codex
> /skills          # uiux-storybook-architect should be listed
> /ux-discover a portfolio site for a 3D motion designer
```

You can also force the skill explicitly with `$uiux-storybook-architect` at the start of a message.

## Day-to-day use

```
> /ux-discover an e-commerce store for handmade ceramics
> /ux-storybook
> /ux-build all
> /ux-perf
```

## Tips specific to Codex

- Codex is token-frugal and will sometimes answer from the SKILL.md summary without opening a
  reference file. If an answer feels thin, say: "open
  `references/03-typography-color-theming.md` and follow it" — it will.
- Put the contents of `AGENTS.md` from this package into your repo's `AGENTS.md` (Codex reads it
  before every task). That makes the interview-first rule apply even without a command.
- Codex runs under GPT models — nothing in this skill depends on Claude-specific behaviour, but
  it does benefit from you being explicit about which phase you're in.
- Review before applying: run `/ux-build` with approval mode on for the first pass, so you can see
  how it maps tokens into your stack.

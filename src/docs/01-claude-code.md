# Claude Code

Best support of any tool here: skills auto-trigger by description *and* the slash commands work.

## Install

```bash
# global — available in every project
./scripts/install.sh claude --global

# or per project, committed to the repo so your team gets it
./scripts/install.sh claude --project
```

Layout after installing:

```
~/.claude/skills/uiux-storybook-architect/   (or .claude/skills/ in the repo)
~/.claude/commands/ux-*.md                   (or .claude/commands/)
```

## Verify

Start a session and run `/help` — the `ux-*` commands should be listed. Then:

```
/ux-discover a landing page for a fintech app aimed at 55+ users
```

It should ask 8 numbered questions, not produce a palette. If it designs immediately, the skill
isn't loading — check the folder name matches the `name:` in the frontmatter, and restart.

## Day-to-day use

```bash
claude
> /ux-discover a SaaS dashboard for warehouse managers
  … answer the questions, or type: defaults
> /ux-storybook
  … review design/ and edit anything you disagree with
> /ux-build all
> /ux-a11y src
```

**Editing the storybook is expected.** The files in `design/` are yours; change a token, then run
`/ux-build` again and it rebuilds from your edit.

## Tips specific to Claude Code

- Add `design/` to git. The storybook is the most valuable artifact — it survives context loss and
  lets a new session pick up cold.
- Reference specific files with `@`: `> /ux-critique @src/app/page.tsx`.
- If a long session drifts, run `/ux-handoff` and start fresh — the build prompt it produces
  restores full context in one message.
- `CLAUDE.md` in the repo root: paste the contents of `AGENTS.md` from this package so the rules
  apply even when you don't use a command.
- Plan mode (`shift+tab` twice) pairs well with `/ux-build all` on a large site.

## Project vs global

Global is right for freelance work across many repos. Project scope is right when a team should
share the same design rules — commit `.claude/skills/` and `.claude/commands/` to the repo.

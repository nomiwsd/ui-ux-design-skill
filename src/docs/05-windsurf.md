# Windsurf

Same shape as Cursor: workflows for the slash commands, a rule for the standing behaviour.

## Install

```bash
./scripts/install.sh windsurf --project
```

Layout:

```
.agents/skills/uiux-storybook-architect/   knowledge base
.windsurf/workflows/ux-*.md                slash commands
.windsurf/rules/uiux.md                    pointer rule
```

## Verify

In Cascade, type `/` and look for the `ux-` workflows. Then:

```
/ux-discover a recipe app for home cooks
```

## Notes

- Windsurf workflows have a step limit per file; these commands are short enough to fit, but if you
  add long custom steps, split them into two workflows rather than one long one.
- Set the rule's activation mode to **Model Decision** with a description like "UI/UX design,
  styling, animation, accessibility work", or **Always On** if you mostly do frontend work in this
  repo.
- Cascade's memory occasionally holds stale design decisions from earlier in a session. If output
  contradicts `design/tokens/tokens.css`, say "re-read design/tokens/tokens.css and use only those
  values".

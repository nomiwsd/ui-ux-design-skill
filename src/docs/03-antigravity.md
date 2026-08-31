# Google Antigravity

Antigravity reads the same `SKILL.md` format, and workflows give you the slash commands.

## Install

```bash
# in the project you're working on
./scripts/install.sh antigravity --project

# or globally
./scripts/install.sh antigravity --global
```

Layout (project):

```
.agents/skills/uiux-storybook-architect/     skill, discovered by description
.agents/workflows/ux-*.md                    slash commands
AGENTS.md                                    standing rules (copy from this package)
```

Global equivalents live under `~/.gemini/antigravity/` — `skills/` and `global_workflows/`.

## Verify

Open the agent panel and type `/` — the `ux-` workflows should appear. Then:

```
/ux-discover a booking site for a dental clinic
```

If workflows don't appear, check **Settings → Agent** for the workflows folder path; older builds
used `.agent/` (singular) rather than `.agents/`, and both are still read for compatibility.

## Rules, workflows, and skills — which to use

- **`AGENTS.md`** (project root): standing rules read before every task. Copy the `AGENTS.md` from
  this package here — that is what makes the agent interview you even when you didn't run a command.
- **`.agents/rules/`**: additional rule files if you want to split concerns (one for design, one
  for your stack).
- **`.agents/workflows/`**: the `ux-*` slash commands.
- **`.agents/skills/`**: the skill itself, loaded progressively — the agent sees only the
  description until a task matches, then reads the full SKILL.md.

## Tips specific to Antigravity

- Antigravity is agent-first and will happily run long autonomous chains. Use **review-driven**
  autonomy for `/ux-build` the first few times so you can catch a token mapping you don't like
  before it's applied across 40 files.
- It may run under Gemini rather than Claude. Nothing in this skill is model-specific, but Gemini
  tends to be more literal — if it skips the interview, say "run the discovery interview from
  SKILL.md step by step".
- The browser tooling is genuinely useful here: after `/ux-build`, ask it to open the page and
  screenshot at 375px and 1440px, then run `/ux-critique` on its own screenshots.
- Artifacts (task lists, walkthroughs) pair well with `/ux-storybook` — ask it to produce an
  implementation plan artifact from `design/08-build-plan.md`.

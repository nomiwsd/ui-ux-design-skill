# VS Code (GitHub Copilot)

Copilot Chat supports prompt files as slash commands and repo-wide custom instructions.

## Install

```bash
./scripts/install.sh copilot --project
```

Layout:

```
.agents/skills/uiux-storybook-architect/   knowledge base
.github/prompts/ux-*.prompt.md             slash commands
.github/copilot-instructions.md            standing instructions (appended)
```

## Enable prompt files

In VS Code settings, ensure `chat.promptFiles` is enabled (`"chat.promptFiles": true` in
`settings.json`). Reload the window.

## Verify

Open Copilot Chat, switch to **Agent** mode, type `/` — the `ux-` prompts appear. Run:

```
/ux-discover a landing page for a language-learning app
```

## Tips specific to Copilot

- Agent mode is required for anything that writes files. Ask mode will only print.
- Copilot reads `.github/copilot-instructions.md` on every request — this is the highest-leverage
  file in the setup. Keep it short and imperative.
- Attach the reference file explicitly when you want depth: use the paperclip / `#file` to add
  `references/09-gsap-recipes.md` before asking for scroll animation.
- Copilot's context window is smaller than the others here. Prefer the piece-by-piece commands
  (`/ux-tokens`, `/ux-pages home`) over `/ux-storybook` on large projects.

## Using this without Copilot at all

The `design/` folder and `.agents/skills/` are plain markdown. You can read them yourself, or paste
a reference file into any chat interface. Nothing here requires a specific vendor.

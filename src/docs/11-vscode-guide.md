# Running it in VS Code — start to finish

VS Code is where you'll live: the source repo, the installed skill, and whichever agent extension
you use all sit in the same window.

## One-time setup

```bash
# 1. get the package
npx uiux-storybook-architect eject        # gives you an editable copy
cd uiux-storybook-architect
code .                                    # open it in VS Code

# 2. install it into whatever agent you use
npx uiux-storybook-architect init --all --global
```

Or if you only want to *use* it and not customize it, skip the eject:

```bash
cd ~/projects/my-client-site
npx uiux-storybook-architect init
code .
```

## Which agent inside VS Code

| Agent | How you run commands | Notes |
|---|---|---|
| **Claude Code** (extension or integrated terminal) | `/ux-discover …` in the Claude panel | Best support — skills auto-trigger and commands work |
| **GitHub Copilot** | Agent mode → `/ux-discover` | Needs `"chat.promptFiles": true`; Ask mode can't write files |
| **Codex CLI** in the terminal | `codex` then `/ux-discover` | Terminal-based, edits files in the open workspace |
| **Cline / Roo / Continue** | Paste `@.agents/skills/uiux-storybook-architect/SKILL.md` | No command menu, but the skill still works as context |

Cursor, Windsurf, and Antigravity are VS Code forks — same layout, their own panel.

## Recommended workspace settings

`.vscode/settings.json` in the project you're designing:

```json
{
  "chat.promptFiles": true,
  "files.associations": { "*.mdc": "markdown" },
  "search.exclude": { "**/.agents/skills/**": true },
  "markdown.validate.enabled": true,
  "editor.wordWrap": "on",
  "editor.rulers": [100]
}
```

`search.exclude` keeps the skill's 14 reference files out of your Ctrl+Shift+F results while
leaving them readable by the agent. `wordWrap` matters because every file here is prose.

## The daily loop

```
1. Open the project folder in VS Code
2. Open your agent panel
3. /ux-discover a booking site for a physiotherapy clinic, mostly 50+ patients
     → answer the 8 questions (or type: defaults)
     → answer the second 8
4. /ux-storybook
     → design/ appears in the explorer. Open it. Read 00-brief.md and 05-page-blueprints.md.
5. Disagree with something? Edit the file directly.
     e.g. change --accent in design/tokens/tokens.css
6. /ux-build all
7. /ux-a11y src
```

After step 4, **the interview never runs again for this project** — `design/00-brief.md` is the
memory. `/ux-color`, `/ux-motion`, `/ux-build` all read it silently.

## Editing the skill itself

Two windows is the comfortable setup:

- **Window A** — the ejected source (`uiux-storybook-architect/`), where you edit `SKILL.md`,
  `references/`, `commands/`.
- **Window B** — a real client project, where you test the result.

After any edit in A, re-install and restart the agent session in B:

```bash
npx uiux-storybook-architect init --all --global --src /path/to/your/uiux-storybook-architect
```

Add a VS Code task so it's one keystroke — `.vscode/tasks.json` in the source repo:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "reinstall skill (all IDEs)",
      "type": "shell",
      "command": "npx uiux-storybook-architect init --all --global --src ${workspaceFolder}",
      "problemMatcher": [],
      "presentation": { "reveal": "always", "panel": "shared" }
    },
    {
      "label": "doctor",
      "type": "shell",
      "command": "npx uiux-storybook-architect doctor",
      "problemMatcher": []
    }
  ]
}
```

Then **Ctrl/Cmd+Shift+P → Tasks: Run Task → reinstall skill**. Bind it to a key in
`keybindings.json` if you're iterating a lot:

```json
{ "key": "ctrl+alt+r", "command": "workbench.action.tasks.runTask", "args": "reinstall skill (all IDEs)" }
```

## Useful extensions while editing

- **Markdown All in One** — table formatting, TOC; the reference files are dense with tables.
- **markdownlint** — catches broken headings that would confuse the agent's file navigation.
- **Error Lens** — for when you're in the built site, not the skill.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Agent designs immediately, no questions | Skill not loaded | `npx uiux-storybook-architect doctor`, then restart the session |
| `/ux-*` not in the slash menu | Commands in the wrong folder for that agent | Re-run `init` and pick that IDE explicitly |
| It asks questions on every message | Old version installed, or `design/00-brief.md` missing | Re-run `init` to update; check the brief exists |
| Copilot prints instead of writing files | Ask mode | Switch to Agent mode |
| Output ignores your tokens | Agent lost context in a long session | "Re-read design/tokens/tokens.css and use only those values" |
| Edits to the skill have no effect | You edited the installed copy, not the source | Edit the ejected source, then re-run `init --src` |

## Keep it in git

Commit `design/` — it's the most valuable artifact and survives context loss. Commit the project's
`.claude/` or `.agents/` folder too if your team should share the same design rules. Add
`design/tokens/tokens.css` to your build so the tokens are the actual source of truth, not a doc.

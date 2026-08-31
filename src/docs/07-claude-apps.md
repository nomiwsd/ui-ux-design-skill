# Claude web, desktop, and mobile

No filesystem in the browser chat, so the workflow adapts: the storybook is delivered as documents
rather than a folder, and commands become plain text.

## Install the skill

```bash
zip -r uiux-storybook-architect.skill uiux-storybook-architect
```

Then **Settings → Capabilities → Skills → Upload**, or upload the `.skill` file into any chat and
press **Save skill** on the file card.

## Using it

There are no slash commands in the app, so type the command name as text — the skill body reads it:

```
Run the ux-discover workflow: a landing page for a boutique hotel in Lahore
```

or simply describe the work; the skill triggers from its description:

```
Design a landing page for a boutique hotel. Interview me first.
```

## Getting the storybook out

With **Code execution / File creation** enabled (toggle in the chat input), Claude writes the real
`design/` folder and gives you a download. Without it, ask for the storybook as a single markdown
document and save it into your repo yourself.

Once the storybook exists in your repo, switch to Claude Code, Codex, or Antigravity for the build —
those have the filesystem and the commands.

## Claude Cowork and the desktop app

Cowork handles the multi-file version of this well: it can run `/ux-storybook`-equivalent work
across many files and hand you the folder. The desktop app plus Claude Code in the Code tab gives
you the full command set with a GUI.

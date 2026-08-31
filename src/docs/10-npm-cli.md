# The CLI

Installed with the package; also usable without installing anything via `npx`.

```bash
npx uiux-storybook-architect <command> [options]
# short alias once installed globally:
uiux <command>
```

## init

Detects which IDEs are present, asks which to install for, then copies the skill, writes the 21
commands with the correct path substitution, and appends the rules pointer.

```bash
npx uiux-storybook-architect init                      # interactive
npx uiux-storybook-architect init --all --global       # everything, home config
npx uiux-storybook-architect init --ide claude,cursor  # specific
npx uiux-storybook-architect init --dest ~/work/site   # a different project root
```

Re-running is safe: the skill and commands are overwritten, rules files are appended to only once,
and `design/` is never touched.

## list

Prints all 21 commands grouped by phase, with descriptions read from the command files — so if you
add your own command it appears here automatically.

## doctor

Reports every detected installation, how many commands are in place, and whether the interview gate
is still present in `SKILL.md`. Run it when the agent starts designing without asking questions.

## eject

Copies the whole source (SKILL.md, references, assets, commands, docs) into a folder you own, so you
can edit it. Install your edited version with `--src`:

```bash
npx uiux-storybook-architect eject
# edit ./uiux-storybook-architect/...
npx uiux-storybook-architect init --all --src ./uiux-storybook-architect
```

## uninstall

Removes the skill folders and every `ux-*` command file. Leaves your rules files (`CLAUDE.md`,
`AGENTS.md`, `.cursor/rules/`) alone, because you may have edited them.

## Exit codes

`doctor` exits `1` when nothing is installed, so it works in CI or a setup script.

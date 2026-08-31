# Customizing the skill in VS Code

The whole package is markdown and CSS. Open the folder in VS Code and edit it like any repo —
nothing is compiled, and changes take effect on the next session.

## Layout

```
uiux-storybook-architect/
├── SKILL.md            the workflow, interview script, defaults table, quality gates
├── AGENTS.md           standing rules to paste into a project's AGENTS.md / CLAUDE.md
├── references/         the knowledge, loaded on demand (14 files)
├── assets/             token and motion templates that get copied into projects
├── commands/           the 21 slash commands, one file each
├── scripts/            install.sh, install.ps1
└── docs/               these guides
```

## The five edits worth making first

**1. Your defaults.** In `SKILL.md`, the "Decision defaults" table is what the agent falls back to
when you say "defaults". Change the stack default from Next.js + Tailwind if you use something
else, change the radius scale, change the base spacing.

**2. Your interview questions.** In `SKILL.md` Phase 1 and `references/01-discovery-interview.md`.
Add whatever you always end up asking clients — budget, CMS, who signs off, launch date.

**3. Your house style.** In `references/04-visual-styles.md`, add a section describing the look you
actually ship, and make it the recommended default for your common project types. This is the
single biggest lever on output quality.

**4. Your token starting point.** Replace `assets/tokens.template.css` with your own base tokens.
Every project you generate starts from these.

**5. Your stack.** In `references/13-implementation-handoff.md`, replace the Tailwind mapping with
whatever you use, and add your standard file structure.

## Adding a command

Create `commands/ux-seo.md`:

```markdown
---
description: Audit the design for SEO structure and metadata
argument-hint: [page path or URL]
---

# /ux-seo — SEO structure audit

Read `{{SKILL_PATH}}/references/05-website-type-patterns.md`.

Target: $ARGUMENTS

Check heading hierarchy (one h1, no skipped levels), semantic landmarks, image alt coverage,
metadata and Open Graph, internal linking depth, and whether any content only exists inside a
canvas or after an animation. Report failures with the fix.
```

`{{SKILL_PATH}}` is replaced by the installer with the real path, so don't hardcode it. Re-run
`./scripts/install.sh <target>` to pick up new commands.

## Adding a reference file

Drop it in `references/` with a number prefix, then add one line to the reference map in `SKILL.md`
saying **when** to read it. A reference the SKILL.md never points at will rarely be opened.

## Keeping it under version control

```bash
git init && git add . && git commit -m "uiux-storybook-architect v1"
```

Then `./scripts/install.sh all --global` after each change. Treat the repo as the source of truth
and the installed copies as build output — never edit the installed copy directly, or your next
install will overwrite it.

Bump a `version:` line in the SKILL.md frontmatter when you make a breaking change to the storybook
structure, so old `design/` folders can be identified.

## Trimming it down

If the skill feels heavy for small jobs, the safe cuts are `06-age-inclusive-design.md` (unless you
build for kids or seniors), `11-threejs-webgl.md` (unless you do 3D), and `14-ai-workflow.md`.
Delete the file and its line in the SKILL.md map. Do not cut `01`, `03`, `07`, `08`, or `12` — those
carry the interview, the token system, the accessibility gate, and the deliverable format.

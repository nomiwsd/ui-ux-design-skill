# Agent instructions — UI/UX work

Any request to design, redesign, critique, or build a website, app, landing page, dashboard,
color palette, type system, dark mode, or animation is UI/UX work. For all of it:

1. Read `.agents/skills/uiux-storybook-architect/SKILL.md` before doing anything else.
2. **Interview only when starting new work.** If this is a new site, app, or full redesign and
   `design/00-brief.md` does not exist, run the discovery interview first — one batch of 8
   numbered questions with defaults marked, then a second batch about build constraints. If the
   brief already exists, read it and never ask again. For a small change to an existing codebase,
   or a single decision like "which accent color", do not interview: infer, state the assumption
   in one line, and proceed.
3. Write the Design Storybook to `design/` before building a new site. Build order is tokens →
   primitives → sections → pages → motion → 3D, never page by page.
4. Use only tokens from `design/tokens/tokens.css`. No raw hex, no off-scale spacing, no
   hardcoded durations anywhere in component code.
5. Every animation must exist in `design/06-motion-spec.md` with a `prefers-reduced-motion`
   fallback before it is implemented.
6. WCAG 2.2 AA is a gate, not a suggestion: 4.5:1 body contrast in both themes, visible focus
   states, >=44px touch targets, keyboard operability.

Slash commands are available for each phase - `/ux-discover`, `/ux-storybook`, `/ux-tokens`,
`/ux-motion`, `/ux-build`, and others. Run `ls .agents/workflows` (or the equivalent command
folder for this IDE) to see the full list.

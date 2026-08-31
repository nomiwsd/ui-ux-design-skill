---
description: Generate three structurally distinct art directions and pick one before any spec is written
argument-hint: [optional: a steer, e.g. "warmer", "denser", or reference URLs]
---

# /ux-direction — Art direction fork

**Path:** `src/commands/ux-direction.md`

This command is **mandatory between the brief and the spec** on any new design work. Skipping it is what makes output generic: one brief with no fork collapses to the one obvious execution, and the obvious execution is the training-data average.

## Preflight

- `design/00-brief.md` exists → read it. Ask nothing.
- Missing, new project → run `/ux-discover` first. Say so in one line and stop.
- Missing, existing codebase → read the current tokens and components, and treat the existing design as **Direction A**, then generate two genuine alternatives against it.

Read `{{SKILL_PATH}}/references/00-anti-slop.md` in full, plus `references/15-composition.md`, `references/04-visual-styles.md`, and `references/03-typography-color-theming.md`.

Steer: $ARGUMENTS

## What to produce

Three directions. Each is a **whole design position**, not a color scheme. They must differ on at least **four** of these axes, and you must state which four in the comparison table:

1. Layout logic — centered symmetry / editorial asymmetry / split-screen / grid-and-rule / dense-utilitarian / full-bleed image-led
2. Type strategy — which face carries personality, and the display-to-body ratio
3. Palette temperature and value — light-dominant / dark-dominant / mid-tone / high-chroma-on-neutral / near-monochrome-with-one-signal
4. Density pole — editorial-generous vs. utilitarian-dense
5. Surface treatment — hairline rules / soft elevation / hard-edged blocks / paper and texture / glass over depth
6. Signature element

**Validity test before presenting:** if the three could be swapped by changing CSS variables alone, they are one direction in three colors. Start over.

One direction may be the safe category-conventional option — but conventional structure still requires a considered execution. It does not get to be the default palette and Inter.

## Format for each direction

```markdown
### Direction B — "Field Notes"

**One line:** Swiss editorial grid with hairline rules, near-monochrome, and real data
treated as the ornament.

| | |
|---|---|
| Layout | 2-column editorial: 7-col measure + 3-col margin rail for labels and notes |
| Type | [Display face] at 72/1.05/-0.03em over [body face] at 17/1.6 — 4.2× ratio |
| Palette | Warm paper `#FAF8F3` base, ink `#1A1917`, single signal `#C2410C` at <8% coverage |
| Density | Utilitarian-dense; information-forward, small labels, tight blocks |
| Surface | 1px rules at 8% opacity. No cards, no shadows anywhere. |
| Motion | Level 2 — reveals only, no parallax |
| **Signature** | The margin rail carries live shipment counts as running marginalia down every page |

**Why this fits the brief:** Maya reads exceptions in 10-minute bursts; density means
fewer scroll actions and the rail keeps context visible while she scans.

**What it costs:** unforgiving of weak content — needs real data and real copy to work.
Hostile to stock photography.

**Differs from A and C on:** layout, density, surface, signature.

**Reference mechanism:** takes the margin-note structure from technical documentation;
deliberately not taking its academic coldness — the warm paper base does that work.
```

Add a short **comparison table** across all three so they can be scanned at once, then a **recommendation** with one line of reasoning tied to the persona.

## Rules

- Name real, specific fonts and hexes. "A geometric sans" is not a direction.
- Do not use the same accent hue in two directions.
- No direction may use a banned item from `00-anti-slop.md` without a written justification.
- Each signature element must be one sentence and cheap to build.
- For every reference site in the brief, state the *mechanism* being borrowed and what is deliberately not being taken.

## Ban-list check

Before presenting, answer in writing:

1. Which ban-list items appear in each direction, and what justifies each?
2. Could any direction be applied unchanged to a competitor in an unrelated industry?
3. Name three things that would be different if the audience were the opposite of the real audience.

If the honest answer to (2) is yes for a direction, replace that direction.

## Optional preview

If the environment can render HTML, also write `design/previews/direction-[a|b|c].html`: a single self-contained file per direction showing a hero and two real sections with real draft copy, real fonts, and real tokens. Seeing them beats reading them. Keep each under ~150 lines and use no framework.

## Output and stop

Write `design/01-art-direction.md` containing all three, the comparison table, the recommendation, and the ban-list check.

Then **stop and wait for a choice.** Do not write tokens, do not write the spec, do not build. Tell the user they can reply `B`, or `B but the palette from C`, or `none — go weirder / go safer`.

Once a direction is chosen, record the decision and the rejected alternatives at the top of `01-art-direction.md` — the rejects are useful later when someone asks why the site looks like this — then point at `/ux-spec`.

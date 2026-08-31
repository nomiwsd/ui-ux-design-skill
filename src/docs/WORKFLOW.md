# Workflow — the end-to-end run

**Path:** `src/docs/WORKFLOW.md`

What a full project looks like, what each step produces, and where it stops for you.

```
/ux-discover  ->  /ux-direction  ->  /ux-spec  ->  /ux-copy  ->  /ux-motion  ->  /ux-build
                      ^ STOPS                                                        |
                      | you pick one of three                                        v
                                                                    /ux-audit  ·  /ux-critique
```

## 1. `/ux-discover "one line about the project"`

**You get:** eight numbered questions, each with 3-4 drafted options, one marked recommended, each showing what it changes.

**You reply:** `1b, 2 rec, 3a, 4 skip` — shorthand. Anything skipped becomes a labelled assumption.

**Then:** a second round on build constraints, a six-line playback for correction, and `design/00-brief.md`.

**Time:** two exchanges. If you say "no time", it drops to three questions.

## 2. `/ux-direction`

The step that matters most, and the one that did not exist before.

**You get:** three structurally different directions — not three palettes over one layout — each with layout logic, type strategy with a real ratio, palette, density pole, surface treatment, and a one-sentence signature element. Plus a comparison table, a recommendation, and a ban-list check. Optionally an HTML preview per direction.

**It stops here.** Nothing is built until you choose.

**You reply:** `B`, or `B but the palette from C`, or `none - go weirder`.

**Why it exists:** one brief with no fork collapses to the one obvious execution, and the obvious execution is the training-data average. A design that survived a choice is not the average, because the average was one of the options that lost.

## 3. `/ux-spec` (or a scope: `tokens`, `type`, `color`, `dark-mode`, `ia`, `components`, `pages`)

**You get:** the full `design/` folder — tokens for both themes with measured contrast tables, type scale, IA and flows, component specs with every state, and page blueprints with real draft copy.

**Guards:** it won't run `all`, `tokens`, `type`, `color`, or `pages` without a chosen direction. It diffs its output against the tripwire templates and reports what changed. It runs the storybook quality gate before presenting.

**Scoped runs work standalone:** `/ux-spec dark-mode` on an existing codebase audits and fixes without any interview.

## 4. `/ux-copy [page]`

**You get:** real draft copy in the project's voice, with two options for the H1 and the primary CTA, plus microcopy for errors, empty states, and confirmations.

**You also get:** a list of every `[CLAIM]` and `[TESTIMONIAL]` slot needing real information. Nothing is invented.

## 5. `/ux-motion [level | implement | 3d | audit]`

**You get:** the MOT-xx table, then implementation behind reduced-motion guards. 3D mode challenges the requirement first and offers lighter alternatives before writing any Three.js.

## 6. `/ux-build [target | handoff]`

**You get:** implementation in the correct order (tokens -> primitives -> layout -> sections -> pages -> motion -> 3D), a fidelity check against the chosen direction, and acceptance criteria reported pass/fail.

`handoff` mode verifies the storybook is complete and writes a copy-paste prompt for a fresh agent session.

## 7. `/ux-audit [a11y | perf | responsive | all]` and `/ux-critique [target]`

Run before shipping. Audit gives one prioritized fix list with concrete values, separating gate-level blockers from improvements. Critique includes the generic-AI-site detector: eighteen tells, scored, with six or more meaning the page reads as machine-generated regardless of individual quality.

## Where it stops for you

Two places only:

1. After each interview round in `/ux-discover`
2. After the three directions in `/ux-direction`

Everywhere else it proceeds on stated assumptions you can correct in three words.

## Partial and existing-project entry points

| Situation | Start at |
|---|---|
| New site or app | `/ux-discover` |
| Brief already written | `/ux-direction` |
| Existing codebase, small addition | `/ux-spec [scope]` — no interview |
| Just need a palette or dark mode | `/ux-spec tokens` or `/ux-spec dark-mode` |
| Existing site feels generic | `/ux-critique`, then `/ux-direction` to reset the look |
| Pre-launch check | `/ux-audit all` |

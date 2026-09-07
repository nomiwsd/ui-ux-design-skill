# Workflow — the end-to-end run

**Path:** `src/docs/WORKFLOW.md`

What a full project looks like, what each step produces, and where it stops for you.

```
/ux-discover  ->  /ux-direction  ->  /ux-spec  ->  /ux-copy  ->  /ux-motion  ->  /ux-build
                      ^ STOPS                                                        |
                      | you pick one of three strategies                             v
                                                                    /ux-audit  ·  /ux-critique
```

## 1. `/ux-discover "one line about the project"`

**You get:** up to eight numbered questions, each with 3–4 drafted options, one recommended, each showing what it changes. The questions cover who uses it and how often, what they must do, what the business needs, what happens if it goes wrong, what content exists, and where the brand sits.

**You reply:** `1b, 2 rec, 3a, 4 skip`. Anything skipped becomes a labelled assumption.

**Then:** a second round that depends on whether you are building a marketing surface (objections, evidence, traffic), a product surface (entities, workflows, roles, input model, consequential actions), or both; constraints; a six-line playback; and `design/00-brief.md` with a one-line **context profile** and a label for every surface.

Theming, motion level, 3D, and density are not asked. They are derived from the profile and stated as assumptions you can correct.

## 2. `/ux-direction`

The step that matters most.

**You get:** three **strategically** different directions, each named by what it does — for a site, something like proof-first / product-demo-first / problem-first; for an app, overview-first / exceptions-first / task-first. Each states the first screen or home-screen job, the derived order or navigation model, density, and the visual consequences with a reason on each. Plus a comparison table, a recommendation tied to your primary user, and an interchangeability check per direction.

**It stops here.** Nothing is specified until you choose.

**You reply:** `B`, or `B with the density from C`, or `none — go safer / go further`.

**Why it exists:** one brief collapses to the most probable execution. Three strategies force a choice about what the product *does first*, and the look follows from that choice rather than preceding it.

## 3. `/ux-spec` (or `tokens`, `type`, `color`, `theme`, `ia`, `components`, `pages`)

**You get:** the full `design/` folder — tokens by color layer with measured contrast in every theme, a type system derived from reading context, IA (message hierarchy or entity and navigation model), component specs with every state, and page or screen blueprints with real draft copy, a reflow decision per section or region, and five states per data view.

**Guards:** it will not run `all`, `ia`, or `pages` without a chosen direction. It diffs its output against the tripwire templates. It runs the storybook gate, the self-check, and the Specificity Score (≥70) before presenting.

**Scoped runs work standalone:** `/ux-spec theme` on an existing codebase audits and fixes without any interview.

## 4. `/ux-copy [page]`

**You get:** real draft copy in the product's voice, with two options for the headline and the primary action, plus functional microcopy for every data view's five states and every destructive confirmation.

**You also get:** a list of every `[CLAIM]` and `[TESTIMONIAL]` slot needing real information. Nothing is invented.

## 5. `/ux-motion [spec | implement | 3d | audit]`

**You get:** a motion budget derived from your context profile, then the MOT-xx table where every row names its job (feedback, causality, orientation, continuity, state, storytelling), then implementation behind reduced-motion guards. Rows without a job are cut. 3D mode challenges the requirement first.

## 6. `/ux-build [target | handoff]`

**You get:** implementation in the correct order (tokens → primitives → layout → sections or screens → pages → motion → 3D), a fidelity check against the chosen direction (density measured, reflow decisions implemented, no library defaults surviving, interchangeability re-answered on the built product), and acceptance criteria reported pass/fail.

`handoff` mode verifies the storybook is complete and writes a copy-paste prompt for a fresh agent session.

## 7. `/ux-audit [a11y | perf | responsive | all]` and `/ux-critique [target]`

Run before shipping. Audit gives one prioritized fix list against WCAG 2.2 AA, performance budgets, and the per-region reflow model, separating gate-level blockers from improvements. Critique identifies the surface, answers the interchangeability question, runs the Slop Detector 2.0 tell list for that surface, scores specificity across eleven dimensions, and leads with the single highest-leverage change.

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
| Just need a palette, type, or a second theme | `/ux-spec tokens`, `type`, or `theme` |
| Existing product feels generic | `/ux-critique`, then `/ux-direction` to reset the strategy |
| Dashboard or app that inherited a marketing look | `/ux-critique` — it will identify the surface mismatch first |
| Pre-launch check | `/ux-audit all` |

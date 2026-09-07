---
description: Generate three strategically different directions and pick one before any spec is written
argument-hint: [optional: a steer, e.g. "more conservative", "denser", or reference URLs]
---

# /ux-direction — Strategic direction fork

**Path:** `src/commands/ux-direction.md`

Mandatory between the brief and the spec on any new design work. Its job is to make the human choose a **strategy**, not a skin. Visual language is derived afterward from the strategy that won.

## Preflight

- `design/00-brief.md` exists → read it. Ask nothing. (A legacy `design/01-art-direction.md` is read as a prior direction if present.)
- Missing, new project → run `/ux-discover` first. Say so in one line and stop.
- Missing, existing codebase → read the current IA, tokens, and components; treat the existing product as **Direction A**; generate two genuine strategic alternatives against it.

Read `{{SKILL_PATH}}/references/00-design-reasoning.md` and `{{SKILL_PATH}}/references/13-validation.md`. Then, by surface type from the brief: `references/02-marketing-ux.md` §1–2 for marketing surfaces, `references/03-product-ux.md` §1–3 for product surfaces, both for hybrid projects. Read `references/04-visual-system.md` only when deriving the visual consequences at the end.

Steer: $ARGUMENTS

## Before writing directions

Complete pipeline stage 8 in outline for the primary surface:

- **Marketing:** the message hierarchy (primary message, supporting messages, evidence, trust signals, objections, dependencies, primary and secondary action, decision journey) from `02` §1.1.
- **Product:** the entity model, candidate navigation models, the home-screen job, and the path-length budget for the top three tasks from `03` §1.

No direction is written until this exists. Directions are different answers to *this* structure, not different looks.

## What to produce

Three directions. Each is a **whole strategy** with a name that says what it does.

**Marketing surfaces must differ on** information priority · persuasion strategy · proof placement · content hierarchy · interaction approach · density · brand expression. Vocabulary: proof-first, product-demo-first, problem-first, offer-first, people-first, comparison-first, route-first (`02` §2.2).

**Product surfaces must differ on** navigation model · home strategy (overview / exceptions / task / resume) · density · disclosure strategy · input priority · state visibility · action model (`03` §2.1).

**Validity test:** if the three share the first screen, the section or screen order, and the primary visual, they are one direction in three skins. Start over. "Editorial / Bento / Dark" is a failed set. "Proof-first / Demo-first / Problem-first" is a valid set.

One direction may be the category-conventional one. Convention is a legitimate strategy when users are occasional, novice, or under stress, or when the category's mental model is strong; it still gets a considered execution and a trace.

## Format

Use the direction record from `02` §2.3 (marketing) or `03` §2.2 (product): strategy in one line · first screen or home job · order or navigation model · content carrying the argument, or density and disclosure · brand expression · **visual consequences with a tag on each** (type role, color role, surface, composition) · why it fits the persona · what it costs · which axes it differs on.

Then a **comparison table** across the three (rows: first screen, order or nav model, density, proof or state strategy, visual consequence), and a **recommendation** with one line tied to the persona's frequency, expertise, and top task.

## Validation before presenting

For each direction, in writing:

1. **Interchangeability:** could it be reused by an unrelated company changing only logo, headline, accent, and images? Answer *no, because…* or replace the direction.
2. **Opposite user:** what would change if the user were the opposite on two context axes? If nothing, the direction did not use the profile.
3. **Traceability:** the five most consequential decisions, each with a tag.
4. **Surface check:** no marketing chrome (hero, section rhythm, grid break, signature element, scroll reveal) proposed for a product surface; no app density proposed for a narrative that needs pacing.

## Visual consequences — rules

- Derive them from the strategy and the context profile. Type ratio from reading context (`04` §2.2); color layers from the meanings the surface must encode (`04` §3); density from frequency × expertise × volume (`03` §5); balance and grid from content (`04` §5).
- Name specific faces and hues only after stating the property they were chosen for, and only in the record — they are proposals to be confirmed in `/ux-spec`, not tokens yet.
- Do not use the same brand hue in two directions unless the brand owns it.
- Any technique from `04` §7 (bento, aurora, glass, oversized type, hairline editorial, dark-glow) appears only with its WHEN satisfied and its cost stated.

## Optional preview

If the environment can render HTML, write `design/previews/direction-[a|b|c].html`: one self-contained file per direction showing the first screen and two sections (marketing) or the home screen and one list or form (product), with real draft copy. Under ~150 lines, no framework.

## Output and stop

Write `design/01-direction.md` with all three, the comparison table, the recommendation, and the validation answers.

Then **stop and wait for a choice.** Do not write tokens, spec, or code. Tell the user they can reply `B`, or `B with the density from C`, or `none — go safer / go further`.

Once chosen, record the decision and the rejected alternatives at the top of `01-direction.md` — the rejects are the answer when someone asks later why the product works this way — then point at `/ux-spec`.

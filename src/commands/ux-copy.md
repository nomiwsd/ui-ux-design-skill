---
description: Write real product copy in the project's voice, without the AI tells
argument-hint: [page or slot, e.g. "home hero", "pricing", "error states", "all"]
---

# /ux-copy — Copy and microcopy

**Path:** `src/commands/ux-copy.md`

An AI-generated interface is usually identified by its words before its pixels. Copy written at build time gets written as slop; this command writes it during design.

Read `{{SKILL_PATH}}/references/10-copy-voice.md`. For slot-by-slot rules per section, `references/02-marketing-ux.md` §4; for functional microcopy per screen, `references/03-product-ux.md` §3–4.

Target: $ARGUMENTS

## Preflight

- `design/00-brief.md` exists → use the persona's **vocabulary** line, the brand position on the four axes, and the surface type. Ask nothing.
- Missing → ask exactly two questions: who the reader is (expertise and frequency), and what would make them choose this over the obvious alternative. Nothing else.

## Before writing

Translate the brand's four axis positions into voice rules, one line each:

> **Authoritative** — declaratives, no hedging, no exclamation marks.
> **Serious** — no jokes in functional copy; warmth allowed in onboarding.
> **Premium** — understatement; the product does not ask for attention.
> **Conservative** — category vocabulary the reader already knows; no coined terms.

Write against those rules; check against them afterward.

## Rules

- **Specific enough to be falsifiable.** "Close the books in 3 days instead of 11" beats "streamline your accounting." Unknown number → `[CLAIM — needs a real number]`. Never invent one.
- **The persona's vocabulary, not the category's.** Ops managers say "exceptions" and "chasing," not "workflow optimization."
- **Say what a competitor can't.** If a rival could run the same headline, it is noise.
- **The subhead adds new information.** It never restates the H1.
- **Vary sentence length.** Uniform 12–18-word sentences are the rhythm tell.
- **Match the surface.** Marketing copy carries voice. Functional copy is plain, direct, and without personality: buttons name outcomes, errors name field + problem + fix, empty states name what will appear and the first action.
- Cut adverbs first. Concrete nouns, plain verbs.

## Banned outright

The tells list in `10-copy-voice.md`: supercharge · unlock · unleash · empower · revolutionize · transform your workflow · next level · seamlessly · effortlessly · elevate · leverage · dive into · built for modern teams · the all-in-one platform · say goodbye to X · whether you're a X or a Y · it's that simple · "Tired of…?" openers · single-abstract-noun feature headings · invented testimonials · unsourced round numbers.

If a banned construction is genuinely right, use it and say why in one line.

## Length discipline

| Slot | Target |
|---|---|
| H1 | ≤12 words, an outcome, not a category |
| Subhead | one sentence, ≤22 words, new information |
| Section heading | ≤8 words, a claim not a label |
| Feature body | 15–35 words, one mechanism or result |
| Primary action | 2–4 words naming the outcome |
| Eyebrow | 1–3 words |
| Error message | field + problem + fix, ≤20 words |
| Empty state | what appears + why empty + one action, ≤30 words |

## Deliver

Write into `design/06-page-blueprints.md` in the section or screen slots, or `design/copy.md` if blueprints do not exist yet.

Give **two options for the H1 and the primary action** with a recommendation — these two strings carry more weight than everything else.

For product surfaces, cover every data view's five states and every destructive confirmation.

Finish by listing every `[CLAIM]` and `[TESTIMONIAL]` slot the user must fill with real information.

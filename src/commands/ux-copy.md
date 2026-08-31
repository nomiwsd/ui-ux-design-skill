---
description: Write real product copy in the project's voice, without the AI tells
argument-hint: [page or slot, e.g. "home hero", "pricing", "error states", "all"]
---

# /ux-copy — Copy and microcopy

**Path:** `src/commands/ux-copy.md`

An AI-generated site is usually identified by its words before its pixels. This command exists because copy written at build time gets written as slop.

Read `{{SKILL_PATH}}/references/16-copy-voice.md`. For slot-by-slot copy requirements per section type, read `references/17-section-library.md`.

Target: $ARGUMENTS

## Preflight

- `design/00-brief.md` exists → use the persona's **vocabulary** line and the three brand adjectives. Ask nothing.
- Missing → ask exactly two questions: who the reader is, and what would make them choose this over the obvious alternative. Nothing else.

## Before writing

Translate the three brand adjectives into voice rules, one line each:

> **Precise** — numbers over adjectives, no hedging, short declaratives.
> **Calm** — no urgency devices, no countdown language, no exclamation marks.

Then write the copy against those rules and check it against them afterwards.

## Rules

- **Specific enough to be falsifiable.** "Close the books in 3 days instead of 11" beats "streamline your accounting". If the number isn't known, mark the slot `[CLAIM — needs a real number]` and move on. Never invent one.
- **Use the persona's vocabulary, not the category's.** Ops managers say "exceptions" and "chasing", not "workflow optimization".
- **Say what a competitor can't.** If a rival could put the same headline on their site, it's noise, not positioning.
- **Vary sentence length.** Uniform 12–18 word sentences are the rhythm tell.
- **The subhead adds new information.** It never restates the H1 in longer form.
- Cut adverbs first. Prefer concrete nouns and plain verbs.

## Banned outright

supercharge · unlock · unleash · empower · revolutionize · transform your workflow · take it to the next level · seamlessly · effortlessly · elevate · leverage · dive into · built for modern teams · the all-in-one platform · say goodbye to X · whether you're a X or a Y · it's that simple · "Tired of...?" openers · single-abstract-noun feature headings ("Analytics.") · invented testimonials · unsourced round-number statistics

If a banned construction is genuinely the right call, use it and say why in one line.

## Length discipline

| Slot | Target |
|---|---|
| H1 | ≤12 words, an outcome, not a category |
| Subhead | one sentence, ≤22 words, new information |
| Section heading | ≤8 words, a claim not a label |
| Feature body | 15–35 words, one specific mechanism or result |
| Primary CTA | 2–4 words naming the outcome |
| Eyebrow | 1–3 words |

## Functional microcopy

Different voice — plain, direct, no personality. Cover for every data-driven view:

- Buttons that name the outcome ("Delete 3 invoices")
- Errors stating what happened **and** the fix, never a raw code, never blaming the user
- Empty states: what appears here, why it's empty, one first action
- Destructive confirmations restating the consequence in plain terms
- Loading and offline states

## Deliver

Write into `design/06-page-blueprints.md` in the section slots, or a `design/copy.md` if the blueprints don't exist yet.

Give **two options for the H1 and primary CTA** with a recommendation — these two strings carry more weight than everything else combined.

Finish by listing every `[CLAIM]` and `[TESTIMONIAL]` slot the user needs to fill with real information.

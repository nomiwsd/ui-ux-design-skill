# Copy and Voice

**Path:** `src/references/16-copy-voice.md`

An AI-generated site is usually identified by its words before its pixels. Copy is part of the design, not something written afterwards by someone else.

## The tells

Ban these outright:

**Verbs and intensifiers** — supercharge, unlock, unleash, empower, revolutionize, transform, elevate, streamline, seamlessly, effortlessly, simply, just, dive into, leverage.

**Constructions**
- "Transform your [noun] with [product]"
- "Take your [noun] to the next level"
- "Built for modern [teams / businesses / creators]"
- "The all-in-one platform for..."
- "Say goodbye to [problem]. Say hello to [product]."
- "Whether you're a X or a Y, [product] has you covered."
- "It's that simple." / "It's that easy."
- Rhetorical question openers: "Tired of...?" "What if you could...?"
- Three-item lists where the third item is abstract: "Fast, reliable, and built for you."

**Structural tells**
- Feature headings that are a single abstract noun with a period ("Analytics." "Security.")
- Body copy that restates the heading in longer form
- Benefit copy with no object: "Work smarter" — smarter at what?
- Testimonials with invented names, invented companies, and no specific outcome
- Stats with no source and suspiciously round numbers (10x faster, 99.9%, 50% more productive)

## What good product copy does instead

**Be specific enough to be falsifiable.** "Close the books in 3 days instead of 11" beats "Streamline your accounting". Specificity is the single strongest signal of a real product with real users. If you don't have the number, ask for it or leave a clearly marked slot — don't invent one.

**Name the reader's actual situation.** The headline should be recognizable to the primary persona and slightly alienating to everyone else. Copy that could address anyone addresses no one.

**Use the customer's vocabulary, not the category's.** Ops managers say "exceptions" and "chasing"; the marketing site says "workflow optimization". Use the former.

**Say the thing the competitor can't say.** If a competitor could put the same headline on their site, it isn't positioning, it's noise.

**Concrete nouns and plain verbs.** Prefer short Anglo-Saxon words. Cut adverbs first.

**Vary sentence length.** Slop has uniform rhythm — every sentence 12 to 18 words. Real writing runs a 4-word sentence against a 30-word one.

## Length discipline by slot

| Slot | Target |
|---|---|
| H1 | ≤ 12 words, states an outcome, not a category |
| Subhead | One sentence, ≤ 22 words, adds new information — never restates the H1 |
| Section heading | ≤ 8 words, a claim rather than a label |
| Feature body | 15–35 words, one specific mechanism or result |
| Primary CTA | 2–4 words, names the outcome ("Start free trial", not "Get started") |
| Eyebrow/label | 1–3 words, sentence case, no ALL CAPS unless tracked out deliberately |

## Functional UI microcopy

Different job, different voice: plain, direct, zero personality.

- Buttons name the outcome: "Delete 3 invoices", not "Confirm"
- Errors state what happened **and** the fix: "Card expired — try another card or update the expiry date"
- Empty states: what will appear here, why it's empty, one clear first action
- Destructive confirmations restate the consequence in plain terms
- Never blame the user; never show a raw error code to a general audience
- Write these during design, not at the end. They are the highest-stress text in the product.

## Real copy in the blueprint

Page blueprints carry **draft real copy**, never `lorem ipsum` and never a description of the copy ("compelling headline about speed"). A layout designed against placeholder text breaks the moment real words arrive, and a headline slot filled at build time gets filled with slop.

Mark anything unverifiable clearly:
- `[CLAIM — needs a real number]`
- `[TESTIMONIAL — needs a real customer quote]`

Fabricating testimonials, customer logos, or statistics is never acceptable, including as filler. Show the empty slot with its intended shape and character count instead.

## Voice from the brief

The three brand adjectives from discovery govern voice, not just visuals. Write one line per adjective describing what it means in words:

> **Precise** — numbers over adjectives; no hedging; short declaratives.
> **Calm** — no urgency devices, no countdown language, no exclamation marks.
> **Expensive** — understatement. The product doesn't ask for attention; it assumes it.

Put those three lines in the direction document, and check the drafted copy against them before presenting.

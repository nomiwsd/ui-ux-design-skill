# Copy and Voice

**Path:** `src/references/10-copy-voice.md`

An AI-generated interface is usually identified by its words before its pixels. Copy is part of the design, written during design, in the reader's vocabulary. Marketing copy carries voice; functional copy on product surfaces carries none.

## The tells

These have no trace available. Ban them outright unless a written reason says otherwise.

**Verbs and intensifiers** — supercharge, unlock, unleash, empower, revolutionize, transform, elevate, streamline, seamlessly, effortlessly, simply, just, dive into, leverage.

**Constructions**
- "Transform your [noun] with [product]"
- "Take your [noun] to the next level"
- "Built for modern [teams / businesses / creators]"
- "The all-in-one platform for…"
- "Say goodbye to [problem]. Say hello to [product]."
- "Whether you're a X or a Y, [product] has you covered."
- "It's that simple." / "It's that easy."
- Rhetorical question openers: "Tired of…?" "What if you could…?"
- Three-item lists where the third item is abstract: "Fast, reliable, and built for you."

**Structural tells**
- Feature headings that are a single abstract noun with a period ("Analytics." "Security.")
- Body copy that restates the heading in longer form
- Benefit copy with no object: "Work smarter" — smarter at what?
- Testimonials with invented names, invented companies, and no specific outcome
- Statistics with no source and suspiciously round numbers (10×, 99.9%, 50% more productive)
- Every sentence 12–18 words long

## What good copy does instead

**Specific enough to be falsifiable.** "Close the books in 3 days instead of 11" beats "Streamline your accounting." Specificity is the strongest signal of a real product with real users. No number → a marked slot, never an invention.

**Names the reader's actual situation.** The headline is recognizable to the primary persona and slightly alienating to everyone else. Copy that could address anyone addresses no one.

**Uses the reader's vocabulary, not the category's.** The persona's vocabulary line in the brief governs every slot. Ops managers say "exceptions" and "chasing"; the category says "workflow optimization." Use the former.

**Says what a competitor cannot.** If a rival could run the same headline, it is noise.

**Concrete nouns, plain verbs.** Short words. Cut adverbs first.

**Varied sentence length.** A four-word sentence against a thirty-word one.

## Voice from the brand axes

The four brand axis positions from discovery govern voice. Write one line per axis stating what it means in words, and put the lines in `01-direction.md`:

> **Conservative** — category vocabulary the reader already knows; no coined terms.
> **Authoritative** — declaratives; no hedging; no exclamation marks.
> **Premium** — understatement; the product does not ask for attention.
> **Serious** — no jokes in functional copy; warmth allowed in onboarding.

Check drafted copy against those four lines before presenting.

## Length discipline by slot

| Slot | Target |
|---|---|
| H1 | ≤12 words; an outcome, not a category |
| Subhead | One sentence, ≤22 words; adds information, never restates the H1 |
| Section heading | ≤8 words; a claim, not a label |
| Feature body | 15–35 words; one mechanism or result |
| Primary action | 2–4 words naming the outcome ("Start free trial", not "Get started") |
| Eyebrow / label | 1–3 words; sentence case unless deliberately tracked caps |
| Error message | Field + problem + fix; ≤20 words |
| Empty state | What will appear + why it is empty + one action; ≤30 words |
| Destructive confirmation | The consequence in plain terms; the button names the action ("Delete 3 invoices") |

## Functional microcopy — product surfaces

A different job and a different voice: plain, direct, no personality.

- Buttons name the outcome, never "Submit" or "Confirm" alone
- Errors state what happened **and** the fix: "Card expired — try another card or update the expiry date"
- Empty states: what will appear here, why it is empty, one first action
- Loading: what is loading, and a way out if it is slow
- Partial or stale: say so
- Permission-denied: why, and how to request access
- Never blame the user; never show a raw error code to a general audience
- Write these during design, not at the end. They are the highest-stress text in the product.

## Real copy in the blueprint

Blueprints carry **draft real copy**, never `lorem ipsum` and never a description of the copy ("compelling headline about speed"). A layout designed against placeholder text breaks when real words arrive; a slot left empty gets filled at build time with slop.

Mark anything unverifiable:
- `[CLAIM — needs a real number]`
- `[TESTIMONIAL — needs a real customer quote]`
- `[LOGO — needs permission]`

Fabricating testimonials, customer names, logos, or statistics is never acceptable, including as filler. Show the empty slot with its intended shape and character count instead.

## Language and locale

Design with the longest supported language, not English. German and Finnish labels run 30–50% longer; Arabic and Urdu need RTL and larger nominal sizes. Date, number, and currency formats follow locale. Never machine-translate functional copy without review; an error message is where a bad translation costs the most.

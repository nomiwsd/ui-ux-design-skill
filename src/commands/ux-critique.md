---
description: Critique a design and say specifically why it looks cheap or machine-made
argument-hint: [URL, screenshot, or path to components]
---

# /ux-critique — Design critique

**Path:** `src/commands/ux-critique.md`

Read `{{SKILL_PATH}}/references/00-anti-slop.md`, `references/15-composition.md`, `references/17-section-library.md` (for the failure modes per section), `references/07-craft-and-accessibility.md`, and `references/02-foundations.md`.

Target: $ARGUMENTS

Never interview. The artifact is in front of you.

## Start with the two fast diagnostics

**Blur test.** Describe what survives at 8px blur. If everything flattens into one gray mass, hierarchy is the root problem and nothing else matters until it's fixed.

**Generic-AI-site detector.** Score the target against these tells and report the count. Six or more means the page reads as machine-generated regardless of its individual quality, and that is the headline finding.

- [ ] Centered hero: headline, subhead, two buttons, stacked mid-viewport
- [ ] Three equal cards in a row, icon in a rounded square above a bold title
- [ ] Indigo/violet accent (`#4F46E5`, `#6366F1`, `#8B5CF6`)
- [ ] Purple-to-blue or blue-to-cyan gradient anywhere
- [ ] Gradient text on the headline
- [ ] Inter, Poppins, or Montserrat as the display face
- [ ] Untinted Tailwind Slate/Gray neutrals
- [ ] Identical section padding top to bottom; uniform rhythm
- [ ] One radius value on everything
- [ ] One soft drop shadow on every card
- [ ] Display type under 3× body size
- [ ] Emoji as feature icons or section markers
- [ ] Generic 3D blob, isometric people, or abstract mesh as the hero visual
- [ ] Copy containing "transform", "supercharge", "seamlessly", "elevate", "next level"
- [ ] Feature headings that are one abstract noun with a period
- [ ] Testimonials with plausible-but-unverifiable names and no specific outcome
- [ ] Every section content-centered with no asymmetry anywhere
- [ ] No single memorable element — nothing you could describe afterwards

## Then the structured critique

**1. What works** — specific. Vague praise is worthless.

**2. What breaks**, ordered by user impact. Check in this order, because this is the order that actually determines perceived quality:

spacing consistency → type scale and hierarchy → contrast → color discipline (how many colors, is the accent reserved to ~10%) → alignment and grid → radius and border consistency → imagery quality → composition (rhythm, asymmetry, density pole) → state coverage → copy → motion

**3. What it's missing** — the things absent rather than wrong: no signature element, no considered empty states, no rhythm variation, no evidence, no real photography.

**4. Fix list** — numbered by priority, with concrete values and code, and an effort estimate. "Increase whitespace" is not a fix; "section padding 96px → alternate 64/128 on the sequence tight-open-tight" is.

## Rules

- Be direct. A polite critique that leaves the design unchanged has failed.
- Separate **broken** (accessibility failures, unusable states) from **weak** (generic, forgettable). Both matter; they have different urgency.
- If the design is conventional *and that is correct for the audience* — high-trust, senior users, dense operational tooling — say so, and critique the execution instead of the convention. Conventional structure still doesn't require a default palette and default type.
- Give the single highest-leverage change first, in one line, before the full list. Most users will only act on one thing.

# Product-Type Patterns

**Path:** `src/references/05-website-type-patterns.md`

This file covers the *principles* per category. For the full page inventory, per-page detail, and acceptance criteria of a category, use `references/blueprints/<type>.md`. For the anatomy of any individual section, use `references/17-section-library.md`.

Each category has earned conventions. Users arrive carrying expectations, and violating them without reason adds friction rather than delight.

**Read this correctly.** What follows is a list of the *jobs a page in this category must do* and the *conventions worth keeping*. It is deliberately not a section order to output. Reproducing a canonical section sequence is the primary cause of generic output — the sequence below exists in every AI-generated site precisely because it is written down in every design reference.

## How to use a convention without producing a template

For each category, separate three things:

1. **Non-negotiable jobs** — what a visitor must be able to do. These are fixed.
2. **Conventions worth keeping** — patterns where deviating costs more than it gains.
3. **Open territory** — where the design should differ from the category average.

Then decide the section *sequence* from the persona's decision path, not from a list. Ask: what does this specific person need to believe, in what order, before they act? That order is the page. Two products in the same category with different buyers should produce different pages.

---

## SaaS / product

**Non-negotiable jobs**: state what it does within the first screen; show the product itself; make pricing findable; give one obvious way to start.

**Conventions worth keeping**
- Nav with 4–6 links and one visually distinct CTA
- A headline that states the outcome in ≤12 words, not the category
- Real product UI shown at real fidelity — screenshots, an interactive demo, actual output. Illustration-led heroes read as dated and as having nothing to show.
- Pricing on the site. Gated "request a demo" measurably hurts small and mid-market conversion.
- Objections answered plainly somewhere on the page

**Open territory**: the order and shape of everything else. Evidence can lead instead of features. The pricing table can *be* the hero for a product whose pricing is the differentiator. A product with one killer capability doesn't need three benefit sections. A tool for engineers can open with a code block and no marketing copy at all.

**Deliberately avoid**: the logo bar directly under the hero followed by three equal icon cards. It is the single most reproduced sequence on the web.

**In-app**
- Sidebar nav with an obvious active state — background fill or accent border, not just bold text
- One primary metric per view; secondary metrics visibly subordinate
- Onboarding as a checklist plus contextual tooltips, not a tutorial
- Designed empty states for every list and table
- Bulk actions, keyboard shortcuts, command palette (`Cmd+K`)
- Settings organized by task, not by database table

## E-commerce

**Non-negotiable jobs**: find a product; judge it; understand cost and delivery; buy without friction.

**Conventions worth keeping**
- Image-dominant grid cards; price and rating visible without hover; fast filters that don't reload
- Product detail: gallery first with zoom, price and add-to-cart above the fold on mobile, variant state never ambiguous, delivery estimate near the buy button
- Cart editable inline with full costs including shipping
- Checkout: guest option, minimum fields, progress shown, address autocomplete, no late surprise costs, errors that never wipe entered data
- Trust signals at the decision point, not only the footer

**Open territory**: the category and editorial layer above the grid. This is where every store looks identical and where brand actually lives.

Photography quality outranks nearly every other design decision here.

## Corporate / institutional

**Non-negotiable jobs**: establish credibility; make the organization's structure legible; provide obvious contact routes.

**Conventions worth keeping**: consistent typographic system, verified case studies near decision points, shallow IA, accessible document handling, conservative motion.

**Open territory**: typography and editorial layout. Institutional does not mean visually mute — a strict Swiss grid with real type discipline reads far more credible than another stock-photo-and-blue-gradient corporate page. Restraint is the license here, not blandness.

## Portfolio / creative agency

The site is itself a work sample, so there is real licence for motion, bold type, and unconventional layout — and a correspondingly higher bar. A templated portfolio is worse than a plain one.

**Non-negotiable jobs**: show the work; show the thinking behind it; make contact trivially findable.

Case studies show process and outcome, not just a hero image. Load fast regardless — a slow portfolio reads as an inability to ship.

## Content / media / blog

Typography *is* the product.

- 680–760px measure, 18–20px body, 1.6–1.75 line-height, generous paragraph spacing
- Minimal chrome; ads and newsletter prompts never compete with the reading hierarchy
- Reading time, publish date, and author near the title
- Sticky progress is welcome; sticky share bars that eat the measure are not
- Real support for pull quotes, figures with captions, code blocks, footnotes

**Open territory**: the index and article furniture. Margin notes, a numbered spine, drop caps, and asymmetric figure placement are all cheap and immediately distinguish an editorial site from a blog template.

## Dashboards and data-heavy apps

- One screen answers one question. If it needs a legend to be understood, restructure it.
- Tables past ~8 items; cards when the visual is the content
- Tabular numerals, consistent decimals, units labelled once
- Filters persist in the URL so views are shareable
- Charts: ≤6 series, direct labels over legends, never color alone

**Open territory**: density and type. This is the category where utilitarian-dense composition (see `15-composition.md`) is not just acceptable but correct, and where most generated work wrongly applies marketing-site spacing.

## Mobile-native and mobile web

- Thumb reach: primary actions in the lower half of the screen
- Follow platform conventions (iOS HIG / Material) unless there's a strong reason to diverge
- Touch targets ≥44×44px with more generous spacing than desktop
- Bottom tab bar: 3–5 destinations, icon **and** label — icon-only measurably hurts findability
- Respect safe areas (`env(safe-area-inset-bottom)`); use `dvh`, not `vh`
- Assume interruption: preserve state on return

---

## Deriving the section sequence

Before writing any page blueprint, write the decision path for the primary persona as a short list of beliefs:

```
Maya needs to believe, in this order:
1. This handles exceptions specifically, not "operations" generally   → hero must name exceptions
2. It works with the systems she already has                          → integrations before features
3. Someone like her already trusts it                                 → evidence with her job title on it
4. She can try it without a sales call                                → pricing + self-serve start
5. It won't create work for her team                                  → migration/effort answered
```

That list is the page. It produces a different order for a different persona in the same category — which is exactly the point.

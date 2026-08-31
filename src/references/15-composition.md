# Composition — the craft that separates designed from assembled

**Path:** `src/references/15-composition.md`

Tokens, contrast ratios, and component states make a design *correct*. Composition makes it *good*. This is the layer most often missing from AI-generated work, because correctness is checkable and composition is not.

## Scale contrast is the cheapest premium signal

Most generated pages run a 2–2.5× ratio between display type and body. That is the safe middle, and it reads as flat.

| Ratio (display : body) | Reads as |
|---|---|
| 1.5–2× | Undesigned, or a dashboard |
| 2.5–3× | Competent, default, forgettable |
| 4–6× | Editorial, confident, premium |
| 8×+ | Statement, poster, portfolio — needs everything else to be quiet |

The move is not "make the headline bigger". It is **widen the gap at both ends**: push display up *and* let secondary text be genuinely small (13–14px labels, captions, metadata). A page with 76px headlines and 13px eyebrow labels has hierarchy. A page where everything is between 16 and 40px does not.

The same applies to weight and color: a 300-weight subhead next to a 700 headline says more than two 500s.

## Rhythm — the thing that is uniform in every template

Section padding of 96px, repeated eleven times, is what makes a page feel machine-generated even when every individual section is fine.

Deliberate rhythm:
- **Compress then release.** A dense section (tight spacing, small type, multiple columns) directly before an open one (one sentence, enormous margins) makes both stronger.
- Vary section height meaningfully — some sections earn a full viewport, most do not.
- Vary internal alignment: not every section is centered, and not every section is left-aligned either.
- The gap *between* sections should not always equal the padding *within* them.

Write the rhythm out as a sequence before building, e.g. `full-bleed → tight → tight → open → dense grid → open → tight → footer`. If that sequence is all one word, the page is a template.

## Asymmetry and the deliberate break

Symmetry is stable and safe; asymmetry is dynamic and memorable. The premium approach is a strict grid with one intentional violation.

- Split content 7/5 or 8/4 rather than 6/6. Equal columns have no hierarchy.
- Let one element bleed past the container edge or cross the gutter.
- Offset a heading from its content block so it sits in the margin.
- Use the negative space as a shape, not as leftover.

One break per page or per major section. Several breaks is not asymmetry, it is disorder.

## Grid systems worth using

- **12-column** — the flexible default; only interesting if you actually use uneven spans
- **Editorial 2-column with a wide margin** — body text in a 7-column measure, notes/labels in a 3-column margin rail. Instantly reads as considered.
- **Bento** — asymmetric spans of varying size in a fixed grid. Good for feature sets. Fails when all tiles are the same size, which makes it a card grid again.
- **Modular / Swiss** — a strict baseline grid with hairline rules. Excellent for dense, data-forward, institutional work.
- **Full-bleed alternating** — image-led, edge to edge, for e-commerce and hospitality.

Pick one and name it in the direction document. A page built without a named grid is built by accident.

## Density is a design choice, not a default

Two premium poles, both valid, chosen from the audience:

**Editorial-generous** — few elements, large type, wide margins, one idea per screen. Right for brand, launch, portfolio, luxury, and low-frequency visitors.

**Utilitarian-dense** — small type, tight spacing, many elements visible at once, information rich. Right for tools, dashboards, trading, developer products, and daily-use software. Bloomberg and Linear's issue list are dense and expensive-looking.

The failure mode is the middle: medium type, medium spacing, medium information. Choose a pole.

## Edges, rules, and depth

- **Hairline rules** (1px at 6–12% opacity) organize a page more elegantly than boxes and shadows, and are the fastest way to move away from card soup.
- **Layered shadows** — one tight and dark (`0 1px 2px / 6%`) plus one wide and soft (`0 12px 32px / 8%`) instead of one blurry mid shadow.
- **Radius carries meaning.** Sharp corners read technical, precise, editorial. Large radii read soft, consumer, friendly. Pick a position and hold it. Mixing 4px and 24px in the same view is the most common tell of an unconsidered surface.
- **Depth alternatives to shadow**: overlap, scale, contrast, blur, and simple stacking order. A card that overlaps a section edge creates depth with no shadow at all.

## Images

Photography quality outranks nearly every other decision on a page that has photography at all.

- Treat images as content, not decoration. If a stock image could be swapped for any other stock image without loss, delete it.
- Consistent treatment across a page: one crop logic, one color grade, one aspect-ratio family.
- Prefer real product output, real people from the actual company, and real screenshots at full fidelity over illustration.
- If good imagery is unavailable, say so and go type-led. A well-set type-only page beats a page carrying bad stock photography, every time.
- Duotone, a consistent grade, or a shared aspect ratio can rescue mixed-quality photography.

## Composition checklist

- [ ] Display-to-body ratio is at least 3.5×, and small text is genuinely small
- [ ] The section rhythm sequence is written down and is not uniform
- [ ] The grid is named, and at least one span is uneven
- [ ] There is exactly one deliberate grid break, and it is intentional
- [ ] Density pole is chosen and consistent
- [ ] One radius position, one shadow logic, hairline rules where boxes were tempting
- [ ] Every image earns its place; treatment is consistent
- [ ] The 8px blur test shows a clear first, second, and third stop

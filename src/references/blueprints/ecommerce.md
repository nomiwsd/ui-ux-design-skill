# Blueprint — E-commerce

**Path:** `src/references/blueprints/ecommerce.md`
Section anatomy: `references/17-section-library.md` · Method: `blueprints/00-index.md`

Photography quality outranks nearly every other design decision in this category. If the imagery is weak, fixing it beats anything else on this page.

## Page inventory

| Page | Purpose | Primary action | Priority |
|---|---|---|---|
| Home | Orient and route to categories | Enter a category | P0 |
| Category / listing | Narrow to a shortlist | Open a product | P0 |
| Product detail (PDP) | Decide | Add to cart | P0 |
| Cart | Confirm and continue | Checkout | P0 |
| Checkout | Complete payment | Place order | P0 |
| Search results | Same job as category, from intent | Open a product | P0 |
| Account / orders | Track and reorder | — | P1 |
| Returns, shipping, contact | Remove purchase risk | — | P1 |
| Editorial / lookbook | Brand and discovery | Enter a category | P2 |

## Home

Home is a routing surface, not a brochure. Its job is to get a visitor into the right category in one action.

Sections: brand statement or seasonal hero (real photography, one message) · category entry points as large image tiles, not a text menu · a curated selection with a reason ("New in", "Back in stock") · trust strip near the first product interaction (returns window, shipping threshold, payment marks) · editorial block if the brand earns it.

Avoid a carousel as the hero. Carousel slides past the first are seen by a small fraction of visitors, and autoplay is an accessibility problem.

## Category / listing

The working page of the store.

**Card:** consistent image crop and background · name · price, with the original struck through when discounted · variant or availability signal · rating and count · wishlist control. No hover-only price.

**Filters:** visible without a click on desktop; a bottom sheet with a live result count and an apply button on mobile. Applied without a full reload, reflected in the URL so views are shareable, with a clear-all. Show the result count at all times.

**Sort** is separate from filter and defaults to something defensible — never "relevance" on a browsing page with no query.

**No results** is a designed state: what was searched, what to relax, and a route to something adjacent.

**Performance:** set `aspect-ratio` on every card image so the grid doesn't reflow as images load. Lazy-load below the fold, `fetchpriority="high"` on the first row.

## Product detail

**Above the fold on mobile:** image, name, price, variant selector, add-to-cart.

- **Gallery** — multiple angles, one scale or in-context shot, zoom on desktop and pinch on mobile. Changing a variant changes the image.
- **Variants** — unavailable combinations visibly unavailable, never silently broken. Show what's left when stock is low, honestly.
- **Delivery** — estimated date near the buy button, not in the footer. Free-shipping threshold shown with the gap to reach it.
- **Returns** — window and cost stated at the decision point.
- **Specs** — complete, including dimensions, materials, care, and compatibility. Missing specs cause returns.
- **Reviews** — distribution as well as average, sortable, filterable by variant, with photos where they exist.
- **Related** — complements before alternatives. Showing alternatives above the fold sends buyers away.

## Cart

Editable inline. Full cost breakdown including shipping and tax. One clear continue. A visible route back to browsing. Show the free-shipping gap if there is one. Persist the cart across sessions and devices where accounts exist.

## Checkout

The highest-stakes screen in the product.

Guest checkout available. Minimum fields. Progress shown. Address autocomplete. Saved payment methods. No cost revealed late — every charge visible before the final step. Errors never wipe entered data. Remove the primary navigation; every link is an exit.

Order confirmation states what happens next, when it ships, and how to change or cancel.

## Trust placement

Reviews, returns policy, secure-payment marks, and contact routes belong **at the decision point** — the PDP and cart — not only in the footer. Footer-only trust signals are invisible at the moment they matter.

## Acceptance criteria

- [ ] Price and availability visible on every card without hover
- [ ] Filters reflected in the URL; result count always visible
- [ ] No layout shift as product images load
- [ ] Variant selection updates image, price, and availability together
- [ ] Delivery estimate and returns policy visible on the PDP
- [ ] Guest checkout available; no surprise costs before the final step
- [ ] Cart and checkout errors preserve all entered data
- [ ] Empty cart, no search results, and out-of-stock are designed states

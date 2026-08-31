# Product-Type Patterns

Each category has earned conventions. Users arrive carrying expectations; violating them without a strong reason adds friction, not delight.

## SaaS / product

**Marketing site section order**
1. Nav — logo, 4–6 links, one visually distinct CTA button
2. Hero — headline ≤12 words stating the *outcome*, one-line subhead, primary CTA + secondary, and a real product screenshot or interactive demo (illustration-heavy heroes read as dated)
3. Social proof bar — customer logos, immediately below the fold
4. 3–4 benefit sections, each tied to an actual persona task, alternating layout, each with a visual
5. How it works — 3 steps, numbered
6. Testimonials / case studies with real names, roles, photos
7. Pricing — visible on the site itself; gated "request a demo" flows measurably hurt small and mid-market conversion
8. FAQ — the real objections, answered plainly
9. Final CTA + footer

**In-app**
- Sidebar navigation with an obvious active state (background fill or accent border — not just bold text)
- Strong data hierarchy: one primary metric per view, secondary metrics subordinate
- Onboarding as a checklist plus contextual tooltips, not a long tutorial
- Designed empty states for every list and table
- Bulk actions, keyboard shortcuts, and a command palette (`Cmd+K`) for power users
- Settings organized by task, not by database table

**Style**: flat/material default; glass accents acceptable on consumer-leaning products; never on data-dense screens.

## E-commerce

**Flow**: category or search → filterable grid → product detail → cart → checkout.

- **Grid**: image-dominant cards, price and rating visible without hover, wishlist affordance, fast filters that don't reload the page.
- **Product detail**: image gallery first with zoom, price and add-to-cart above the fold on mobile, variant selection that never leaves the user guessing what's out of stock, delivery estimate near the buy button, reviews below.
- **Cart**: editable inline, total costs shown including shipping, one clear continue action.
- **Checkout**: the highest-stakes screen in the product. Guest checkout available, minimum fields, progress shown, address autocomplete, no surprise costs revealed late, error recovery that never wipes entered data.
- **Trust signals** (reviews, returns policy, secure-payment marks) belong *at the decision point*, not only in the footer.
- Photography quality outranks nearly every other design decision here.

## Corporate / institutional

Credibility over cleverness. Consistent typographic system, verified testimonials and case studies placed near decision points, clean IA that signals organizational competence, obvious contact routes, accessible PDF/document handling, and conservative color and motion. Heavy trend styles are usually the wrong call.

## Portfolio / creative agency

The site is itself a work sample, so there is more licence for motion, bold type, and unconventional layout. Still: the path to contact must be obvious and never buried under art direction. Case studies should show process and outcome, not just a hero image. Load fast anyway — a slow portfolio reads as an inability to ship.

## Content / media / blog

Typography *is* the product.
- 680–760px measure, 18–20px body, 1.6–1.75 line-height, generous paragraph spacing
- Minimal chrome; ads and newsletter prompts must never compete with the reading hierarchy
- Reading time, publish date, and author near the title
- Sticky progress indicator is welcome; sticky share bars that eat the measure are not
- Strong support for pull quotes, figures with captions, code blocks, and footnotes

## Dashboards and data-heavy apps

- One screen, one question answered. If a dashboard needs a legend to be understood, restructure it.
- Tables over cards once there are more than ~8 items; cards over tables when the visual is the content.
- Number formatting: tabular numerals, consistent decimal places, units labelled once.
- Filters persist in the URL so views are shareable.
- Charts: no more than 6 series, direct labels over legends where possible, never color alone to distinguish series.

## Mobile-native and mobile web

- Design for thumb reach: primary actions in the lower half of the screen.
- Follow platform conventions (iOS HIG / Android Material) unless there's a strong reason to diverge; users bring muscle memory with them.
- Touch targets ≥44×44px with more generous spacing than desktop.
- Bottom tab bar: 3–5 destinations, icon + label together (icon-only measurably hurts findability).
- Respect safe areas (`env(safe-area-inset-bottom)`) and account for browser chrome with `dvh` rather than `vh`.
- Assume interruption: preserve state when the user returns.

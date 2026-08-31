# Page Blueprints — index

**Path:** `src/references/blueprints/00-index.md`

Per-type blueprints, loaded on demand. Each file gives the page inventory, the sections that earn their place, the decisions specific to that category, and the acceptance criteria for that page type.

| Product type | File |
|---|---|
| SaaS product site | `blueprints/saas.md` |
| Single-purpose landing page | `blueprints/landing-page.md` |
| E-commerce store | `blueprints/ecommerce.md` |
| Blog / content / media | `blueprints/content-blog.md` |
| Portfolio / creative agency | `blueprints/portfolio-agency.md` |
| Corporate / institutional | `blueprints/corporate.md` |
| Web app / dashboard | `blueprints/app-dashboard.md` |

Section anatomy for everything referenced in these files: `references/17-section-library.md`.

## How to use a blueprint without producing a template

These files are **inventories and constraints**, not section orders to output. Reproducing a canonical sequence is exactly what makes generated sites identical, and the sequence is written down in every design reference — including, until recently, this one.

The required method, every time:

**1. Write the belief sequence first.** What must this specific persona come to believe, in what order, before they act?

```
Maya needs to believe, in this order:
1. This handles exceptions specifically, not "operations" generally  → hero names exceptions
2. It works with the systems she already has                         → integrations early, before features
3. Someone like her already trusts it                                → evidence carrying her job title
4. She can try it without a sales call                               → pricing + self-serve start
5. It won't create work for her team                                 → migration effort answered
```

**2. That list is the page.** Map each belief to one section from the library. A belief with no section is an unanswered objection; a section with no belief is filler — cut it.

**3. Choose a variant per section**, and write down which. Never take variant 1 by reflex.

**4. Write the rhythm sequence** before any spacing values: `full-bleed → tight → tight → open → dense → open → tight → footer`. If it comes out uniform, redo it. Uniform section padding is the strongest template tell there is.

**5. Place the signature element** from `design/01-art-direction.md` in a specific named section.

**6. Write real draft copy** in every slot, per `references/16-copy-voice.md`. No lorem ipsum, no invented testimonials, no unsourced statistics.

Two products in the same category with different buyers must produce different pages. If your SaaS blueprint would work unchanged for a different SaaS product, the belief sequence step was skipped.

## Blueprint output format

Each page in `design/06-page-blueprints.md` follows this shape:

```markdown
## [Page name]

**Goal:** [one sentence] · **Primary action:** [the one CTA]
**Above the fold on mobile:** [what must be visible at 375×667]
**Belief sequence:** [the numbered list this page's order comes from]
**Rhythm:** full-bleed → tight → open → dense → open → tight → footer
**Signature element appears in:** [section number]

### 1. [Section name] — [library variant chosen, and why]
- **Job:** [the belief this moves]
- **Layout:** [columns, alignment, span, any grid break]
- **Content:** [real draft copy — H1, subhead, CTA labels, body]
- **Visual:** [what it is, aspect ratio, treatment; or "none — type-led"]
- **Motion:** [MOT-xx reference]
- **Spacing:** [top/bottom desktop · mobile]
- **States:** [empty / loading / error, where the section is data-driven]

### 2. …

**Mobile changes:** [what reorders, collapses, or is dropped entirely]
**Edge cases:** [longest realistic headline, missing testimonials, no imagery, zero data]
```

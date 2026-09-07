# Design Reasoning — the file that loads before any design decision

**Path:** `src/references/00-design-reasoning.md`

This is the only reference that loads on every design task. It contains no visual values, no style names, and no defaults table. It contains the order in which decisions are made, the context model that shapes them, the principles that force them, and the tests that check them.

## The problem this skill solves

Generic output is not caused by familiar patterns. Centered heroes, cards, Inter, gradients, asymmetry, and bento grids are each correct somewhere. Generic output is caused by **unreasoned repetition**: choosing a pattern because it is probable rather than because this user, this task, this content, or this brand asked for it.

The test is interchangeability. **Could this interface be reused for an unrelated company by changing only the logo, headline, accent color, and images?** If yes, the decisions were not made from context. That is the failure, regardless of how the interface looks.

Two consequences:

1. Prohibiting patterns cannot fix this. Removing one default installs the next most probable one.
2. A style cannot fix this. "Editorial", "bento", "dark premium", and "warm paper with one burnt accent" are as reusable as indigo and Inter once they become the answer to every brief.

The fix is an order of reasoning in which every visual decision is downstream of a decision about the user, the task, the content, the business, the brand, the context, or accessibility, and a validation step that scores specificity rather than conformance.

---

## The pipeline

Work in this order. Each stage produces an output the next stage consumes. **No hue, typeface, radius, type ratio, surface treatment, or layout style is chosen before INFORMATION ARCHITECTURE is complete.**

| Stage | Produces | Reference |
|---|---|---|
| **1 CONTEXT** | The context profile (five dimensions, below) | this file |
| **2 USER** | Primary and secondary users: expertise, frequency, goals, motivations, pain points, objections, abilities, vocabulary | `01-discovery.md` |
| **3 JOB** | Jobs-to-be-done: what each user is trying to accomplish in their own words | `01` |
| **4 TASK** | Top tasks, ranked by frequency × importance; the path length each can afford | `01` |
| **5 CONTENT** | What exists, what is missing, what leads: primary message, supporting message, evidence, trust signals, information dependencies | `01`, `02` or `03` |
| **6 BUSINESS GOAL** | The measurable outcome; primary action; secondary action; what must not be sacrificed for it | `01` |
| **7 TRUST / RISK** | Consequence of error for the user; regulatory and evidence requirements; what must be visible before commitment | `01`, `05` |
| **— FORK —** | **Marketing surface or product surface** (or hybrid, decided per surface) | below |
| **8 INFORMATION ARCHITECTURE** | Sitemap or screen map; flows for top tasks; content model; navigation model; for marketing, the message hierarchy that produces section order; for product, the entity model that produces screen structure | `02` / `03` |
| **— DIRECTION —** | Three strategically different directions; a human chooses | `02` / `03`, `13` |
| **9 INTERACTION MODEL** | How the user acts: primary input (touch / pointer / keyboard), disclosure strategy, state visibility, feedback tiers, error prevention and recovery, destructive-action model | `03`, `05` |
| **10 VISUAL HIERARCHY** | What reads first, second, third on each surface, and by which means (size, weight, contrast, position, space) | `04` |
| **11 DESIGN LANGUAGE** | Type system, color architecture, surfaces, radius, elevation, iconography, imagery treatment — each derived from stages 1–10 | `04` |
| **12 COMPOSITION** | Grid, alignment, density, whitespace, rhythm, reading order, emphasis per surface | `04` |
| **13 COMPONENTS** | Anatomy, variants, all states, token references | `11`, `03` |
| **14 RESPONSIVE BEHAVIOR** | Per major section or screen region: reflows / stacks / stays horizontal / scrolls / disappears / changes priority / becomes sticky / changes interaction model | `05` |
| **15 MOTION** | Only motion with a job: feedback, causality, orientation, continuity, state transition, storytelling | `06` |
| **16 ACCESSIBILITY** | Threaded through every stage; WCAG 2.2 AA gated at the end with evidence | `05` |
| **17 IMPLEMENTATION** | Tokens → primitives → layout → sections → pages → motion → 3D | `12` |
| **18 VALIDATION** | Slop Detector 2.0, Design Specificity Score, traceability check | `13` |

Stages 1–7 are the brief. They are cheap and they determine everything. Stages 10–12 are where generic output is manufactured when 1–9 were skipped.

---

## The context model

Five dimensions. Each pole implies **questions and constraints**, never a look. Two products with the same profile may correctly look nothing alike; two with opposite profiles must not look the same.

### User

| Axis | Toward this pole | Constraints it implies |
|---|---|---|
| Novice ↔ Expert | Novice | Recognition over recall; labels on everything; fewer options per screen; guidance in place; conventional structure |
| | Expert | Density allowed; shortcuts and bulk operations; terse labels acceptable; customization; speed over hand-holding |
| Casual ↔ Professional | Casual | Tolerance for personality and pace; low stakes; delight has a place |
| | Professional | Predictability, reliability, efficiency; personality stays out of functional surfaces |
| Occasional ↔ Frequent | Occasional | Re-orientation on every visit; convention; visible help; no reliance on memory |
| | Frequent | Speed; remembered state; progressive shortcuts; less explanation each visit |

### Product

| Axis | Toward this pole | Constraints it implies |
|---|---|---|
| Informational ↔ Transactional | Informational | Reading, wayfinding, information scent, scannable structure |
| | Transactional | Forms, status visibility, confirmation, recovery, progress |
| Simple ↔ Complex | Simple | One surface may be enough; avoid inventing structure |
| | Complex | IA, search, disclosure tiers, navigation model become P0 decisions |
| Low-risk ↔ High-risk | High-risk | Consequence statements before actions; conservative structure; evidence near commitment; undo; no ambiguity in state |
| Exploratory ↔ Task-driven | Exploratory | Browse, discovery, related items, serendipity; longer sessions |
| | Task-driven | Shortest path; one primary action per view; nothing decorative in the path |

### Brand

| Axis | Governs |
|---|---|
| Conservative ↔ Expressive | How far the design language may deviate from category convention |
| Friendly ↔ Authoritative | Tone of copy, roundness, warmth, imagery of people |
| Mass-market ↔ Premium | Premium: restraint, fewer elements, material quality, unhurried pacing. Mass-market: clarity, familiarity, price visibility, speed |
| Playful ↔ Serious | License for motion, illustration, color energy, humor |

Premium is a brand position, not a type size. Restraint is not a font list.

### Content

| Type | What it means for design |
|---|---|
| Text-led | Typography is the design: measure, rhythm, heading hierarchy, reading comfort |
| Image-led | Images set color and mood; type recedes; grid serves the images; photography quality is the first constraint |
| Product-led | The product interface or output is the visual; show it real, at fidelity, cropped to meaning |
| Data-led | Tables, charts, numerals, density; color is encoding, not decoration; tabular figures |
| Interaction-led | The demo or tool is the surface; states, feedback, and latency dominate |

### Device

| Type | Constraints it implies |
|---|---|
| Mobile-first | Thumb zone; one column; bottom navigation; stacking order is a decision |
| Desktop-first | Horizontal space; sidebars; hover exists; keyboard exists |
| Touch-heavy | Targets ≥44px; no hover-only affordances; gestures have visible alternatives |
| Keyboard-heavy | Focus order, shortcuts, command surface, tab model are designed, not inherited |
| Cross-device | State continuity; responsive behavior is priority change, not shrinking |

**Rule:** write the profile in one line at the top of the brief. Example: *"frequent · expert · professional · complex · high-risk · task-driven · authoritative · serious · data-led · desktop + keyboard."* That line licenses density, forbids decorative motion, requires a keyboard model, and says nothing about color.

---

## The fork: marketing surface or product surface

Decide **per surface**, not per project. An e-commerce home page is marketing; its checkout is product. A SaaS pricing page is marketing; the app behind it is product.

| | Marketing surface | Product surface |
|---|---|---|
| Reasons about | positioning, persuasion, proof, trust, narrative, conversion | workflows, navigation, search and filters, forms, tables, bulk actions, permissions, loading, empty states, errors, validation, keyboard, destructive actions, data density, repeated use |
| Structure comes from | the message hierarchy and the reader's decision journey | the entity model, the task paths, and the navigation model |
| Directions differ on | information priority, persuasion strategy, proof placement, content hierarchy, interaction approach, density, brand expression | navigation model, overview-first vs task-first, density, disclosure strategy, keyboard vs pointer priority, state-visibility strategy |
| Load | `02-marketing-ux.md` | `03-product-ux.md` |
| Never | apply app density and chrome to a story that needs pacing | apply hero, section rhythm, grid breaks, or signature elements to a screen used daily |

---

## Principles as decisions

Theory is useless until it forces a choice. Each row is a principle, the decision it forces, and the test that checks the decision. Apply the rows relevant to the surface; do not recite them.

| Principle | Decision it forces | Test |
|---|---|---|
| **Hierarchy** | One element reads first on each surface; second and third are deliberate; the means (size, weight, contrast, position, space) is chosen, not defaulted | Blur to 8px: three stops visible, in the intended order |
| **Proximity** (Gestalt) | Spacing inside a group is always smaller than spacing between groups | A label sits closer to its field than to the previous field |
| **Similarity** | Same job → same look; different job → visibly different | No two controls that look alike do different things |
| **Common region** | Enclose items in a box or card only when they share an action or destination | Every enclosure has a reason; remove the box and see if grouping survives |
| **Figure–ground** | The interactive layer is unambiguously above content | Text over any translucent or image layer keeps ≥4.5:1 against the busiest background |
| **Continuity and alignment** | Everything sits on a grid; deviation is singular and intentional | No near-aligned elements; one break at most, and it is the element you want noticed |
| **Affordances and signifiers** | Interactive things look interactive; static things do not | A stranger points at what is clickable and is right |
| **Feedback** (Doherty) | Response tiers: <100ms feels immediate; <400ms feels instant; >1s shows progress; >10s allows leaving and returning | Every action has an assigned tier and a visible response |
| **System status** | Current state, saved state, sync state, and long operations are visible without asking | User can answer "did it work?" and "where am I?" from the screen |
| **Mental models** (Jakob's Law) | Keep the category convention for structure users have already learned: nav placement, cart, checkout, settings, search | A first-time user finds the top task without instruction |
| **Recognition over recall** | Show options; never require remembered syntax; surface recent and suggested items | No field or command requires memory of a format |
| **Cognitive load** | One primary decision per screen; chunk into groups of ≤7; defer secondary decisions | Count decisions on the screen; justify each above one |
| **Progressive disclosure** | Primary → secondary → advanced; the advanced tier sits behind one explicit control | Most users never need to open the advanced tier |
| **Information scent** | Labels and links predict what the user will get | A user predicts the next screen from the label alone |
| **Hick's Law** | Fewer, clearer choices at each decision point; group; provide a default | Nav ≤7 destinations; plan choices ≤4; filters grouped by facet |
| **Fitts's Law** | Targets ≥44px touch / ≥24px pointer; frequent actions large and near; destructive actions distant from safe ones | Measure the gap between Delete and Save |
| **Tesler's Law** | Complexity moves into the system: defaults, inference, autocomplete, remembered choices | Count fields the system could have filled |
| **Error prevention** | Constrain input, confirm consequential actions, choose safe defaults, validate at the right moment (on blur or on submit, not mid-keystroke) | A destructive path has one deliberate step the user cannot take by accident |
| **Error recovery** | Errors name the field, the problem, and the fix; input is preserved; undo where possible | Every error message passes the three-part test |
| **User control** | Cancel, back, undo, and exit from every flow; nothing auto-advances without a control | Every multi-step flow can be left with data kept |
| **Trust** | Evidence at the decision point; consequences stated before commitment; no fabricated proof | A trust signal sits within one screen of every commitment |
| **Scanning behavior** | Text-heavy: front-load the left edge and the first words of each block. Visual: guide a Z or a layered path. Long pages: layer-cake with headings that carry meaning alone | Read only the first three words of every block; the page still makes sense |
| **Accessibility** | Contrast, keyboard, focus, zoom, semantics, reduced motion, target size, labels, error text, color independence, plain language at every stage | `05-responsive-accessibility.md` gate with evidence |

---

## Traceability

Every major decision carries a source tag and one line of reasoning:

`[USER]` `[TASK]` `[CONTENT]` `[BUSINESS]` `[BRAND]` `[CONTEXT]` `[A11Y]`

Example: *"Dense table with 13px body and tabular numerals `[USER: daily expert]` `[CONTENT: 40+ rows compared at once]`."*

A decision without a tag is not finished. "It looks clean" is not a tag. This replaces prohibition: a pattern is never wrong by itself; an untraced pattern is.

---

## Defaults that need a reason

These are the patterns an agent reaches for when it has not reasoned. **None is banned.** Each may be exactly right. If one appears in the work, its trace must be present, and the trace must not be "it looks fine." The list deliberately includes both the first-generation defaults and the second-generation "anti-generic" defaults, because both are reusable across unrelated companies.

**Structure**
- Centered hero with headline, subhead, two buttons — right when the message is one sentence and there is no visual to carry the argument
- Asymmetric or "editorial" hero — right when a visual or a long statement needs weight on one side
- Three equal cards with icons — right when three things are genuinely parallel and equally weighted
- Bento grid — right when features are unequal and the grid expresses that inequality
- Logo bar directly under the hero — right when borrowed credibility is the first objection
- Hero → features → testimonials → pricing → CTA → footer — right only when the message hierarchy produced that order
- Uniform section spacing — right for a reference or documentation page; wrong for a narrative page with sections of unequal weight
- One deliberate grid break — right when a marketing page needs a single focal moment; never on a form or a table
- Card grid of KPI tiles on a dashboard — right when the metrics are peers; wrong when one question matters and the rest are context
- Sidebar plus top bar app shell — right for most apps; state which navigation model it is and why

**Color**
- Indigo or violet accent — right when the brand owns it
- One accent under 10% coverage — right for a single-action marketing page; wrong for a data surface with states and categories
- Warm-tinted neutrals with one burnt accent — right for a warm brand on a text-led surface; not a synonym for "considered"
- Neutral gray surfaces — right for data, clinical, and governmental surfaces where tint competes with meaning
- Purple-to-blue or blue-to-cyan gradient — right when the brand owns it and text contrast is preserved
- Dark theme by default — right for low-light or long-session use, or platform expectation

**Type**
- Inter, Roboto, or a system face as the only voice — right for tools, platform-native apps, and multilingual products where neutrality and script coverage matter
- A serif display face — right when the brand is expressive and the headline carries voice; not a synonym for premium
- Display type 4× body or larger — right for one-message-per-screen pages read once; wrong for anything read repeatedly
- Display type under 2× body — right for dense, frequent-use surfaces

**Surface and motion**
- Glass, aurora, mesh, grain, glow, spotlight — right when the brand is expressive and the surface is not task-critical; each has a performance and contrast cost
- Hairline rules instead of cards — right when content is sequential and not individually targetable on touch
- Fade-up on scroll — right for a long narrative page where progressive reveal paces reading; never on repeated-use surfaces
- Stagger, slide-in, count-up — right when the order or the number is the message

**Copy**
- "Transform", "seamlessly", "supercharge", "all-in-one", "built for modern teams" — see `10-copy-voice.md`; these have no trace available

---

## Vague prompts

Resolve the phrase through the context model before touching a value. Each row: what the user probably means, what to ask or infer, and what the phrase does **not** license.

| Phrase | Probably means | Resolve by | Does not license |
|---|---|---|---|
| "Make it premium" | Premium to *whom*, in *this* category | Luxury goods: restraint, material, photography, slow pacing. Developer tool: precision, density, speed. Finance: clarity, stability, evidence. Consumer app: polish in states and transitions | Oversized type, a signature element, a specific palette, a serif |
| "Build a modern SaaS site" | Not dated; credible to software buyers | Who buys, what the product shows, what proof exists, what the buyer must believe first | Dark theme, gradient, bento, logo bar, glow |
| "Make it futuristic" | Signal innovation | What is actually new; the audience's tolerance for unfamiliarity; whether the product's own output can demonstrate the future | Neon, glow, dark-only, sci-fi type, particles, 3D blobs |
| "Use shadcn" | An implementation constraint on components | Which components, how theming maps to the token system, which defaults to override | shadcn's default look (zinc, its radius, Inter) as the design |
| "Use bento" | "A feature section that is not three cards" | Are features unequal in importance? How many? Does the grid express that? | Bento on every section; equal tiles |
| "Make it like Linear / Stripe / Apple" | A mechanism the user admires | Name the mechanism (restraint, real product UI, precision, pacing) and apply it to this brand | Dark page, purple gradient, glow, their type |
| "Create a modern dashboard" | Clear, not cluttered, current | The one question the screen answers; user frequency and expertise; entity count; keyboard vs pointer | A grid of KPI cards with sparklines and a donut chart |
| "Make it pop" / "more exciting" | Something is flat | Run the blur test; fix hierarchy before adding color or motion | Gradients, motion, more color |
| "Clean and minimal" | Nothing competes with the task | Remove untraced elements; increase hierarchy contrast; check density against frequency | Giant whitespace on a dense tool; hiding needed controls |

---

## Self-check before any visual output

Answer in writing. An unanswered check is a failed check.

1. **Interchangeability.** Could this be reused for an unrelated company by changing only logo, headline, accent, and images? If yes, list the untraced decisions.
2. **Traceability.** Name the five most consequential decisions and their tags.
3. **Opposite user.** What would change if the user were the opposite on two axes (novice↔expert, occasional↔frequent)? If nothing, the context model was not used.
4. **Hierarchy.** In the blur test, what reads first, second, third, and did the content hierarchy put them there?
5. **Accessibility before the gate.** Where did accessibility change a decision in stages 8–15, not just pass a check in stage 16?
6. **Surface.** Is this a marketing surface or a product surface, and did the right reference load?

Full scoring: `13-validation.md`.

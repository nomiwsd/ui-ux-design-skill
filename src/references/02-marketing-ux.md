# Marketing UX — positioning, persuasion, proof, trust, narrative, conversion

**Path:** `src/references/02-marketing-ux.md`

Load for any surface whose job is to make a stranger understand, believe, and act: marketing sites, landing pages, store fronts and category pages, institutional sites, portfolios, content sites. Do not load for application screens; those use `03-product-ux.md`. A store's product detail, cart, checkout, and account are product surfaces.

---

## 1. Content drives structure

No section is chosen until the message hierarchy exists. Write it before any blueprint.

### 1.1 Message hierarchy

| Item | Question | Source |
|---|---|---|
| **Primary message** | What must the reader understand in the first screen, in their words? | Discovery Q5, "what makes them choose you" |
| **Supporting messages** | What 2–4 claims make the primary message credible or complete? | Discovery, product |
| **Evidence** | What proof exists for each claim, with permission? Numbers, names, outcomes, credentials | Discovery M2 |
| **Trust signals** | What must be visible before the reader commits? Security, policy, people, address, accreditation | Discovery Q6 |
| **Objections** | The 3–5 real reasons a prospect does not act | Discovery M1 |
| **Information dependencies** | What must be understood before something else makes sense? (Pricing before plan comparison; the problem before the mechanism) | Product logic |
| **Primary action** | The one thing a first-time reader should do | Discovery Q5 |
| **Secondary action** | The one thing a not-yet-ready reader should do (see a demo, read a case, save for later) | Discovery M4 |
| **Decision journey** | One visit or many; alone or with others; how long; from what traffic and promise | Discovery M3, M4 |

If evidence is missing for a claim, the claim moves down or out. If the primary message cannot be stated in one sentence a competitor could not use, discovery is not finished.

### 1.2 Deriving the section order

The decision journey is a sequence of things the reader must come to believe or understand. Map each step to the message, evidence, or objection that serves it, then to a section that delivers it. That ordered list is the page.

```
Reader arrives from [source] believing [promise]. In order, they need to:
1. Recognize their situation          → message: [primary]        → section: [x]
2. Believe it works for people like them → evidence: [named case]  → section: [y]
3. Understand what it costs / involves → dependency: [price/effort] → section: [z]
4. Have [objection] answered          → objection: [n]            → section: [w]
5. Act                                 → primary action           → section: [CTA]
```

Rules:
- A section serving no row is cut. A row with no section is an unanswered objection.
- Two products in the same category with different readers produce different orders. If the order would work for a competitor, the journey was not written from this reader.
- The first screen contains the primary message, the primary action, and one credibility signal, visible at 375×667 without scrolling `[TASK] [BUSINESS]`.
- The order is not a template. It may open with proof, with price, with the problem, with the product, or with a comparison, depending on what the reader must believe first.

### 1.3 Rhythm follows weight

Section spacing and size follow the weight of the message, not a rule that spacing must vary. The claim that decides the sale gets room; the evidence that supports it sits close; a list of secondary features is tight. A documentation-like page with equal-weight sections is correctly uniform. Write the weights down; the spacing follows.

---

## 2. Strategic directions for marketing surfaces

Three directions, each a different **strategy**, not a different skin. The human chooses. Visual language is derived from the chosen strategy afterward.

### 2.1 Axes on which directions must differ

| Axis | What changes |
|---|---|
| **Information priority** | What is first, second, third on the first screen and down the page |
| **Persuasion strategy** | What the reader is asked to believe first: the proof, the product, the problem, the price, the people, the comparison |
| **Proof placement** | Leads, supports, or is absent and honestly so |
| **Content hierarchy** | Which content type carries the argument: copy, product UI, photography, data, an interactive demo |
| **Interaction approach** | Read-through page; demo-in-page; guided flow; comparison tool; calculator |
| **Density** | Long argument with many sections vs short page with one claim |
| **Brand expression** | How far from category convention the structure and tone go |

Visual differences (layout, type, color, surface) must follow from these. Three directions that share first screen, section order, and primary visual are one direction in three skins; start over.

### 2.2 Strategy vocabulary

Name directions by strategy. Examples, not a menu:

| Strategy | First screen | When it fits | Visual consequence |
|---|---|---|---|
| **Proof-first** | The strongest outcome or customer at display scale | Evidence is the real differentiator; buyer is skeptical | Numbers and names carry the visual; type restrained |
| **Product-demo-first** | The product working, real, cropped to its value | The product is visually self-explanatory in under 10 seconds | Product UI dominates; copy is captions |
| **Problem / education-first** | The reader's situation named before any product claim | Category is new or misunderstood; long decision journey | Text-led opening; reading rhythm; illustration only if it explains |
| **Offer-first** | Price or plan comparison on the first screen | Pricing is the differentiator; buyer has already compared | Table or calculator as hero |
| **People / story-first** | Who is behind this and why | Trust in people is the purchase driver (services, healthcare, local business) | Real photography of real people; narrative pacing |
| **Comparison-first** | "Versus the alternative" | Buyer is switching from a known incumbent | Two-column honesty; the alternative wins at least one row |
| **Route-first** | Category or task entry points | The reader knows what they want (stores, portals, institutions) | Wayfinding over persuasion; large legible entry points |

### 2.3 Direction record

For each direction, in `design/01-direction.md`:

```markdown
### Direction B — "Proof-first"
**Strategy in one line:** [what the reader believes first and why that wins here]
**First screen:** [primary message, visual, action, credibility signal]
**Section order:** [derived list from §1.2, one line each with its row]
**Content carrying the argument:** [copy / product UI / photography / data / demo]
**Density:** [long argument / short page] because [journey length, commitment]
**Brand expression:** [where it deviates from category convention and why]
**Visual consequences:** type role, color role, imagery treatment, composition — each with a tag
**Why this fits:** [persona + journey]
**What it costs:** [what this direction cannot do]
**Differs from A and C on:** [axes]
```

Then the interchangeability question from `13-validation.md`, answered per direction.

---

## 3. Category notes

Each category lists the **jobs the surface must do** (fixed), **conventions worth keeping** (readers have learned them; Jakob's Law), **open territory** (where differentiation belongs), and **acceptance criteria**. No category has a section order. Order comes from §1.2.

### 3.1 SaaS product site

**Jobs:** state what it does in the first screen; show the product itself; make pricing findable; give one obvious way to start; answer the buyer's objections somewhere on the page.

**Conventions worth keeping:** a nav with 4–6 destinations and one visually distinct action `[USER: occasional; Hick]`; a headline that states an outcome in ≤12 words; the product shown at real fidelity; pricing on the site (gated pricing measurably hurts small and mid-market conversion); a security or trust page for anyone selling to companies.

**Open territory:** what leads. Evidence, price, a code block, a working demo, or the problem can open the page. A product with one killer capability needs one feature section, not three. A developer tool can open with code and no marketing copy.

**Pages:** home · pricing · product or features · use case or industry pages (only if each contains something only that segment cares about) · customers · docs (P0 for developer tools; docs carry more conversion weight than the site) · changelog (only if it will be kept current) · security and trust · blog · about, careers, contact, legal.

**Pricing page specifics:** what each plan is *for* in one line; differentiating features before shared ones; monthly and annual with the real saving shown; billing unit defined; whether a card is required; currency and tax handling; what happens at the limit; the recommended plan with a reason. Below plans, the uncomfortable FAQ: cancellation, data export, price changes, overage. "Contact us" is acceptable as the top tier only.

**Case studies:** situation before, what changed, measured result, timeframe, and the friction hit. A case with no obstacle reads as fiction.

**Acceptance:** pricing reachable in one click with real numbers · hero states an outcome, not a category · every feature section maps to a top task · no fabricated logos, quotes, or numbers · primary action above the fold at 375×667 · section order traces to the written journey.

### 3.2 Single-conversion landing page

**Defining constraints:** one action, repeated identically; no primary nav or a logo-only header (every link is an exit); the headline echoes the promise that brought the visitor (mismatch is the largest bounce source on paid traffic); length follows commitment (a free download converts on one screen; a high-consideration purchase needs every objection answered).

**Jobs:** match the promise; state the offer; reduce risk next to the action; answer objections; repeat the action.

**Conventions worth keeping:** risk reducer adjacent to the first action ("No card required", "Free returns"); first-person outcome on the button ("Start my trial", never "Submit"); the price stated or the reason it can't be; success state on the page with what happens next.

**Forms:** ask only what fulfilment requires; email-only converts far better than email + name + company + phone; place the form in the first screen for low commitment, after the argument for high commitment; validate on blur; preserve input on failure.

**Speed:** paid traffic makes load time a direct cost. LCP under 2s on mid-range Android over 4G; no hero video blocking paint; no web font delaying the headline; CSS-only motion.

**Acceptance:** one action worded identically everywhere · no primary nav · headline matches the source promise · headline, subhead, action, one credibility signal fit at 375×667 · every section maps to a journey row · form asks only what the offer requires.

### 3.3 E-commerce (marketing surfaces: home, category, editorial)

Product detail, cart, checkout, and account are product surfaces — see `03-product-ux.md` §7.4.

**Jobs:** get a visitor into the right category in one action; let them narrow to a shortlist; show price and availability without interaction; establish return and delivery terms before the decision point.

**Conventions worth keeping:** category entry as large image tiles, not a text menu `[CONTENT: image-led]`; price and rating on every card without hover; filters visible on desktop and in a bottom sheet with a live count on mobile; filter state in the URL; sort separate from filter; a trust strip near the first product interaction.

**Open territory:** the editorial layer above the grid — where brand lives and where every store looks identical. A curated selection needs a reason ("Back in stock", "Under 50").

**Avoid a carousel hero:** slides past the first are seen by a small fraction of visitors, and autoplay is an accessibility problem.

**Photography quality outranks nearly every other decision.** If imagery is weak, fixing it beats anything else on the page.

**Acceptance:** price and availability visible on every card · filters in the URL, count always visible · no layout shift as images load (`aspect-ratio` set) · no-results is a designed state with an adjacent route · trust terms visible before the product detail.

### 3.4 Corporate / institutional

**Jobs:** say what the organization does in plain language above the fold ("We manage water infrastructure for 14 councils" beats "Delivering integrated solutions"); make the structure legible; route to the three or four most-visited areas; provide obvious contact.

**Visitors are usually on a task**: find a document, find a person, verify a claim, contact someone. Wayfinding outranks persuasion `[USER: occasional, task-driven]`.

**Documents:** every listing shows title, format, size, date, language. PDFs are tagged and accessible, or paired with HTML. Never a PDF that opens without warning on mobile.

**Trust and governance:** leadership named with real photographs and biographies; registration numbers; accreditations with dates; policies within two clicks; a physical address; named press and enquiry contacts; an accessibility statement with a named contact and complaints route where the law requires it.

**Conventions worth keeping:** conservative structure. Credibility comes from typographic discipline, real evidence, and consistent execution, not from decoration. Restraint is the license, not blandness, and it does not require oversized type.

**Acceptance:** plain-language statement above the fold · contact on every page · nothing deeper than three levels · documents show format, size, date · accessibility statement present where required · full keyboard operability · plain-language review passed.

### 3.5 Portfolio / creative agency

The site is a work sample. There is license for motion, bold type, and unconventional layout, and a higher bar: a templated portfolio demonstrates the thing the visitor is checking for.

**Jobs:** show the work in the first screen; show the thinking behind it; make contact reachable in one action from anywhere.

**Home options:** a full-bleed project grid; one featured project at full viewport then an index; a text-led index with imagery on hover or focus (with a touch equivalent). Every tile carries name, discipline, year, and one line on the outcome.

**Case study — required per project:** the brief and constraint; what was decided and why; process including something that did not work; measured outcome; the role (what *you* did); tools and timeline. Real fidelity, full screens, no mockups floating on gradients.

**Motion license:** this is the category where storytelling motion is defensible. Constraints still hold: usable with JS disabled and reduced motion on; the path to contact never buried; a slow portfolio reads as an inability to ship. One memorable moment beats effects on every section.

**Acceptance:** work visible in the first screen · every project states role, outcome, process · contact in one action from any page · fully usable with JS off and reduced motion on · hover-revealed content has touch and keyboard equivalents · Lighthouse mobile ≥90 despite motion.

### 3.6 Content / blog / media

Typography *is* the product.

**Article:** title is the largest type on the page; standfirst adds context rather than repeating the title; author with photo; publish and update dates; reading time; tags. A strong type-only header often beats a cover image.

**Body:** measure 60–75 characters at every breakpoint; body 18–20px; line-height 1.6–1.75; paragraph spacing over indentation; subheads every 3–5 paragraphs as real `h2`/`h3`; links distinct without color alone; figures with captions allowed to break the measure; pull quotes from text already in the article; code blocks with language label and copy; footnotes for anything factual; tables that reflow.

**Reading rules:** nothing interrupts the first screen; ads and prompts never sit inside the reading column; sticky elements never reduce the measure below 60 characters; dark theme, if offered, gets its own contrast pass; 200% zoom keeps the measure.

**Index:** consistent excerpt length, real dates, topic filters, visible total. A lead article can carry more weight. Pagination or a real "load more"; never infinite scroll with an unreachable footer.

**Content model before card design:** `title, slug, excerpt(≤160), cover(16:9), author, publishedAt, updatedAt, tags[], readingTime, body`.

**Editorial devices** (options, not requirements): margin notes, section numbering, drop caps, running headers, asymmetric figure placement. Each is a choice traced to the content's structure, not a premium signal.

**Acceptance:** measure 60–75ch at every breakpoint · body ≥18px, line-height ≥1.6 · heading hierarchy semantic and unbroken · nothing overlays the first screen · both themes pass contrast on body, links, captions, code · index shows dates, topics, total · renders at 320px and 200% zoom.

---

## 4. Section anatomy

For every section: **Job** · **Needs** (content that must exist before it can be designed) · **Options** with a WHEN each · **Copy** · **A11y** · **Fails when**. Motion is specified in `06-motion.md` by job, never here.

A section is included only if it serves a row in §1.2. Options are unordered; choose by fit, and name the choice and its trace in the blueprint.

### 4.1 Primary navigation

**Job:** let a visitor understand the scope and reach any primary destination in one action, without competing with the page.

**Needs:** logo (SVG, both themes); 4–7 destination labels of one or two words; one primary action; sign-in if accounts exist.

**Options**
- **Horizontal bar, logo left** — WHEN wayfinding matters and the audience is occasional. The convention readers know.
- **Bar with the action visually separated** from the link group — WHEN one action must be found instantly.
- **Minimal bar + full-screen overlay menu** — WHEN the site is brand-led with few destinations and wayfinding is not the primary job. Wrong for institutions, stores, docs.
- **No primary nav / logo only** — WHEN the surface is a single-conversion landing page.
- **Sidebar rail** — product surfaces; see `03`.

**Dropdowns** only when a section has 4+ children; a mega-menu needs group headers and a description per item. Never open on hover alone.

**Sticky:** shrink rather than hide and reappear; translucent background only over busy content; reserve height to avoid shift. Under 64px on mobile.

**Copy:** destinations are nouns the user recognizes ("Pricing", "Docs"), not invented categories ("Solutions", "Platform") unless the company owns that language. The action names the outcome.

**Mobile:** full-height panel; close control thumb-reachable; focus trapped and restored; closes on Escape and route change.

**A11y:** `<nav>`; `aria-current="page"`; skip link first in tab order; keyboard-operable dropdowns; targets ≥44px.

**Fails when:** more than 7 destinations; two buttons of equal weight; the action looks like a link; active state is weight only; the mobile menu does not trap focus; a sticky header eats a quarter of a phone viewport.

### 4.2 Footer

**Job:** catch readers who reached the bottom without acting, and carry obligations (legal, contact, trust) that do not belong higher.

**Options:** multi-column link groups with a brand block — WHEN the site has many pages · a final action merged in — WHEN the footer is the last conversion chance · single row — WHEN a big footer would dilute a focused page · brand-forward with newsletter — WHEN the brand is the product.

**Copy:** group headings are real categories, not "Company / Product / Resources" by reflex. A group with two items is not a group.

**Fails when:** it is the only place contact exists; groups are padded with pages that do not exist; social icons without accessible names; a newsletter form that does not say what is sent or how often.

### 4.3 Hero / first screen

**Job:** in one screen, tell the reader what this is, who it is for, why it is different, and what to do — in that order of priority, not necessarily that order of layout.

**Needs:** H1 (≤12 words, an outcome); subhead (one sentence, ≤22 words, new information); primary action; optional secondary action; a visual that is real (product UI, photography, actual output) or no visual.

**Options** (each traced to CONTENT and the persuasion strategy)
- **Centered statement** — WHEN the message is one sentence and there is no visual that carries the argument. Needs the type to hold the screen and a subhead that adds information.
- **Split, copy beside visual** — WHEN a product visual or photograph carries part of the argument. The side with the primary content is wider; equal columns when the two are peers.
- **Type-led full width** — WHEN there is no honest visual and the brand is expressive. Needs a display face that can hold the width.
- **Product-first** — WHEN the product is visually self-explanatory. The interface or output is the hero; copy sits beneath or beside.
- **Data-first** — WHEN a real number is the argument. Set at display scale with its source.
- **Photography with overlaid type** — WHEN the subject is physical, place, or people, and the photography is good. Needs a scrim; contrast tested on the busiest frame.
- **Working demo** — WHEN the product demos in under 10 seconds and the audience will engage. A liability otherwise.
- **Route entry** — WHEN the reader arrives knowing what they want (store, portal). Large legible entry points, not a statement.

**First screen on mobile:** headline, subhead, primary action, one credibility signal at 375×667. If the visual pushes the action below the fold, restructure.

**Copy:** the H1 states an outcome, not a category. The subhead adds information; if it restates the H1 it is decoration. Two actions maximum; one is a button.

**A11y:** the H1 is the LCP element and is never hidden or animated in; text over imagery has a scrim; the visual has `alt` that states what it shows, or `alt=""` if decorative.

**Fails when:** three actions; a headline naming the category; a subhead restating the headline; stock illustration standing in for a product that exists; the visual delaying LCP past 2.5s; autoplaying sound; `100vh` with no cue that content follows.

### 4.4 Sub-page header

**Job:** orient someone who landed deep and state the page's job in one line. Title, one-line description, breadcrumb where depth exceeds two levels, page-level action if there is one. Short: it is not a second hero.

### 4.5 Proof strip (logos, numbers)

**Job:** borrow credibility in under two seconds.

**Needs:** 5–8 logos with permission, monochrome-normalized, optically sized. Or one sourced number.

**Options:** static muted row with a qualifying line ("Used by teams at") — WHEN logos are recognizable to this reader · a number leading ("Used by 400 logistics teams, including") — WHEN the count does more work than the names · two-row grid with rules — WHEN there are many and the tone is quiet · slow marquee — only with 12+, paused on hover, respecting reduced motion.

**Placement is a §1.2 decision.** Directly under the hero is correct when borrowed credibility is the first objection, and only then.

**Fails when:** logos at mixed sizes or colors; fake or unpermitted logos; a marquee that cannot be paused; placed by reflex.

### 4.6 Testimonials

**Job:** let a peer of the reader say what the company cannot say about itself.

**Needs per quote:** verbatim text, full name, role, company, photo, and **a specific outcome**. A quote with no outcome is filler.

**Options:** one long-form quote with a portrait — WHEN one strong quote exists (it outperforms three weak ones) · the quote embedded in the feature section it proves — WHEN each claim has its own evidence · case-study strip (logo + metric + line + link) — WHEN outcomes are quantified · several quotes — WHEN they are genuinely different in role or outcome; equal cards when the voices are peers.

**Copy:** trim to the sentence that carries the outcome; never rewrite a customer's words. Attribution is specific: "Ops lead, 40-person logistics firm."

**Fails when:** invented names; generic praise; stock avatars; five quotes saying the same thing.

### 4.7 Numbers band

**Job:** compress proof into scannable numbers. 3–4, each with a label and a source or method where credibility matters. Tabular numerals. Avoid suspiciously round marketing numbers unless real and attributable.

### 4.8 Feature sections

**Job:** show one capability doing one job a persona named.

**Needs:** a claim heading, 15–35 words naming a specific mechanism or result, and a visual showing the feature working.

**Options**
- **Equal cards** — WHEN the things are genuinely parallel and equally weighted, and there are 3–4 of them.
- **Alternating rows, copy beside visual** — WHEN each feature needs room and a visual. Vary weight or it becomes monotonous by the third row.
- **Unequal grid (one large, several small)** — WHEN features are unequal in importance and the grid should express that. Fails when tiles are equal.
- **One lead feature + compact list** — WHEN one capability decides the sale and the rest are supporting.
- **Tabs or switcher** — WHEN depth matters more than page length; costs a click and hides content from search.
- **Prose with a notes rail** — WHEN the audience reads (technical buyers, institutions) and the features are arguments rather than tiles.

**Copy:** headings are claims, not labels — "Catches the exception before your customer does", not "Alerts." Every feature ties to a top task; cut the rest.

**Fails when:** icons in shapes carrying no information; body restating the heading; features listed by what the code does; every section says "and it's fast."

### 4.9 How it works

**Job:** remove the fear that adoption will be hard. 3–4 steps, verb-led, one line each. Five reads as complicated. Options: numbered row · vertical sequence · before/after pair · scroll-linked sequence only on a narrative page. **Fails when:** steps describe the company's process rather than the user's actions; step 1 is "Sign up."

### 4.10 Comparison

**Job:** answer "why you and not the alternative" without making the reader research it. Honest rows including one the alternative wins. Row labels are user outcomes. Sticky header. On mobile, one column per competitor rather than horizontal scroll.

### 4.11 Integrations

**Job:** answer "does it work with what I have." Grid with search or filter past ~12; grouped by category; every logo links somewhere real; a "request an integration" route.

### 4.12 Pricing

**Job:** a decision tool, not a display. Anatomy: plan name · who it is for, one line · price with period · primary action · differentiating features first · recommended plan with a reason. Options: cards — WHEN 2–4 plans differ on a few dimensions · feature matrix — WHEN differences are many and technical · usage calculator — WHEN pricing is consumption-based · single plan with add-ons — WHEN that is the truth. Required details in §3.1.

**Fails when:** prices hidden behind a demo request; differences require reading two columns to find; "unlimited" with an asterisk; annual saving claimed but not shown.

### 4.13 Call to action

**Job:** convert the reader who is now persuaded, where they are. One heading restating the outcome, one action, one risk reducer. A band with two competing buttons converts worse than either alone.

**Fails when:** it is a full-width colored rectangle with centered white text and no relation to the page's language — the reader recognizes it as a template element.

### 4.14 FAQ

**Job:** answer the real objections. Sourced from sales and support, not imagination. 5–8, including the uncomfortable ones. Accordion is expected; keep answers in the DOM; consider the first open. **Fails when:** questions are marketing statements shaped like questions; the hard ones are missing.

### 4.15 Contact

Multiple routes with stated response times. If a form is the only route, say what happens after and when. Physical address where trust or jurisdiction matters.

### 4.16 Forms on marketing surfaces

Rules live in `03-product-ux.md` §4.6. Marketing-specific: fewest fields that fulfil the promise; success state on the page.

### 4.17 Product grid, detail, cart, checkout

Grid and category are marketing (§3.3). Detail, cart, checkout, account: `03-product-ux.md` §7.4.

### 4.18 Article header, body, index

See §3.6.

---

## 5. Blueprint gate for marketing surfaces

- [ ] Message hierarchy (§1.1) written before any section
- [ ] Section order derived from the decision journey (§1.2), one reason per row
- [ ] First screen: primary message, primary action, one credibility signal at 375×667
- [ ] Every section option named with its trace
- [ ] Rhythm follows stated weights
- [ ] Every evidence slot is real or marked `[NEEDS: real quote / number / logo]`
- [ ] Copy passes `10-copy-voice.md`
- [ ] Reflow decisions per section (`05-responsive-accessibility.md` §5)
- [ ] Interchangeability question answered *no, because…* (`13-validation.md`)

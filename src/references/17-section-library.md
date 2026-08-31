# Section Library — the anatomy of every section, in detail

**Path:** `src/references/17-section-library.md`

This is the reference an agent reads when writing page blueprints. Every section below has a stated **job**, a required **content set**, at least three **layout variants** (so the first one isn't automatically chosen), and a **failure mode** list.

Two rules govern use of this file:

1. **A section is only included if it does a job the persona needs done.** Sections are not a checklist to complete. A page with four sections that each move a decision forward beats a page with nine that fill space.
2. **Never take variant 1 by default.** The first variant listed is usually the most conventional. Pick from the audience and the chosen art direction, and name which variant you picked in the blueprint.

Notation used throughout: **Job** = what it must accomplish · **Needs** = content that must exist before it can be designed · **Variants** = layout options · **Copy** = rules for the words · **Motion** = default treatment at intensity 2 · **Fails when** = the specific ways this section goes wrong.

---

# 1. Global chrome

## 1.1 Primary navigation

**Job:** Let a visitor understand the scope of the product and reach any primary destination in one action, without the nav competing with the page.

**Needs:** logo (SVG, light + dark), 4–7 destination labels of one or two words, one primary CTA, sign-in if the product has accounts.

**Anatomy:** logo (left, 24–32px tall) · destinations · utility cluster (search, theme, locale) · sign-in (text link) · primary CTA (button, visually distinct). Height 64px desktop, ≤56px mobile.

**Variants**
1. **Horizontal bar, logo left, links center or right** — the default. Safe, invisible, forgettable.
2. **Split bar** — logo left, links right, CTA in a contrasting pill offset from the link group. Reads more considered at zero cost.
3. **Minimal + overlay menu** — logo and one menu control only, opening a full-screen navigation with oversized type. Right for portfolio, editorial, and brand-led sites; wrong wherever wayfinding matters.
4. **Sidebar rail** — persistent vertical nav. For apps, docs, and dense products.
5. **Bottom tab bar (mobile)** — 3–5 destinations, icon **and** label.

**Dropdowns:** only when a section has 4+ children. A mega-menu needs grouping headers and a description line per item, or it is just a long list. Never open on hover alone — hover-only menus are inoperable on touch and hostile to keyboard users.

**Sticky behavior:** shrink on scroll, don't disappear and reappear. Use a translucent background with `backdrop-filter` only if the underlying content is busy. Reserve the height so nothing shifts.

**Copy:** destination labels are nouns the user recognizes ("Pricing", "Docs"), never invented category names ("Solutions", "Platform") unless the company genuinely owns that language. The CTA names the outcome: "Start free trial", not "Get started".

**Motion:** height and background transition 250ms `--ease-out`. Mobile menu opens 200ms, closes 150ms.

**Mobile:** hamburger opens a full-height panel, not a cramped dropdown. Close control top-right, thumb-reachable. Trap focus, restore on close, close on Escape and on route change.

**A11y:** `<nav>` landmark, `aria-current="page"` on the active link, skip-to-content as the first focusable element, keyboard-operable dropdowns, ≥44px targets.

**Fails when:** more than 7 destinations; two buttons of equal weight; the CTA looks like a link; the active state is bold text only; the mobile menu doesn't trap focus; a sticky header eats 25% of a phone viewport.

## 1.2 Footer

**Job:** Catch everyone who reached the bottom without converting, and carry the obligations (legal, contact, trust) that don't belong higher.

**Needs:** link groups with real headings, contact route, legal links, copyright, locale/theme controls if they exist.

**Variants**
1. **4–5 column link grid** with a brand block on the left — the standard.
2. **Fat footer with a final CTA band merged in** — for marketing sites where the footer is the last conversion chance.
3. **Minimal single row** — logo, three links, copyright. For focused landing pages and portfolios where a big footer would dilute.
4. **Editorial footer** — oversized wordmark, newsletter capture, sparse links. Brand-led sites.

**Copy:** group headings are real categories, not "Company / Product / Resources" by reflex. If a group has two items, it isn't a group.

**Fails when:** it's the only place contact info exists; link groups are padded with pages that don't exist; social icons with no accessible names; a newsletter form with no statement of what gets sent or how often.

---

# 2. Entry sections

## 2.1 Hero

The most over-templated section on the web. Treat the variant choice as a real decision.

**Job:** In one screen, tell the visitor what this is, who it's for, why it's different, and what to do next — in that order of priority, not necessarily that order of layout.

**Needs:** H1 (≤12 words, an outcome), subhead (one sentence, ≤22 words, **new information**), primary CTA, optional secondary CTA, and a visual that is real (product UI, photography, actual output) or no visual at all.

**Variants**
1. **Centered stack** — headline, subhead, buttons, screenshot below. The single most reproduced layout in generated design. Only choose it deliberately, and only with a strong type treatment carrying it.
2. **Split 7/5 or 8/4** — copy left, product right. Asymmetric split beats 6/6, which has no hierarchy.
3. **Editorial full-bleed type** — oversized headline crossing most of the viewport width, no image, small metadata rail. Zero JS, fastest premium result, needs a real display face.
4. **Product-first / inverted** — the interface or the output *is* the hero; copy sits beneath or in the margin. Correct when the product is visually self-explanatory.
5. **Data hero** — the product's actual numbers set at display scale as the visual. Strong for analytics, fintech, and anything measurable.
6. **Full-bleed photography with an overlaid type block** — hospitality, commerce, physical products. Needs genuinely good photography and a scrim for contrast.
7. **Interactive demo hero** — a working slice of the product. Highest converting when the product demos in under 10 seconds; a liability otherwise.

**Above the fold on mobile:** headline, subhead, primary CTA. If the visual pushes the CTA below the fold on a 375×667 screen, restructure.

**Copy:** the H1 states an outcome, not a category. "Close the books in three days" over "Modern accounting software". The subhead must add information — if it restates the H1 it's decoration. Two CTAs maximum, and only one of them is a button.

**Motion:** the H1 is almost always the LCP element and is **never** animated in or hidden at `opacity: 0`. Animate the visual, 100ms after paint, 16px rise + fade, 500ms. Word-mask reveals on the headline are acceptable only when text is in the DOM and readable if JS fails.

**Fails when:** three CTAs; a headline that describes the category; a subhead restating the headline; stock illustration standing in for a product that exists; the visual delaying LCP past 2.5s; a video autoplaying with sound; the hero occupying `100vh` with no indication anything is below.

## 2.2 Sub-page header

**Job:** Orient someone who landed deep, and set the page's job in one line.

**Needs:** page title, one-line description, breadcrumb where hierarchy is deeper than two levels, page-level action if there is one.

Keep it short — 40–56px of type, not a second hero. Sub-pages that repeat the hero treatment make a site feel like it has one page repeated.

---

# 3. Evidence sections

Evidence is what generated sites fake and real sites earn. **Never invent a customer, a logo, a quote, or a statistic.** An empty marked slot is honest; a fabricated testimonial is a liability for the client.

## 3.1 Logo bar / social proof strip

**Job:** Borrow credibility in under two seconds.

**Needs:** 5–8 logos with usage permission, all monochrome-normalized to one weight, optically sized (not scaled to equal width).

**Variants**
1. Static row, muted, with a short qualifying line above ("Used by teams at").
2. Two-row grid with a rule above and below — quieter, more editorial.
3. Slow marquee — only with 12+ logos, paused on hover, respecting reduced motion.
4. **Logos with a number** — "Used by 400+ logistics teams, including" — the number does more work than the logos.

**Fails when:** placed directly under the hero as reflex (the most template-identifying sequence on the web); logos at mixed sizes and colors; fake or unpermitted logos; a marquee that can't be paused.

## 3.2 Testimonials

**Job:** Let a peer of the reader say the thing the company can't say about itself.

**Needs per quote:** verbatim text, full name, role, company, photo, and — this is the one that matters — **a specific outcome**. A quote with no outcome is filler.

**Variants**
1. Three equal cards in a row — the default; readable but forgettable.
2. **One long-form quote** at 24–32px with a portrait. Single strong quotes outperform three weak ones.
3. Quote embedded inside the feature section it proves, rather than pooled in a testimonial zone.
4. Case-study strip: logo + metric + one line + link to the full story.
5. Asymmetric mixed grid: one large quote and two small ones.

**Copy:** trim to the sentence that carries the outcome; keep it verbatim, never rewrite a customer's words. Attribution lines are specific: "Ops Lead, 40-person logistics firm" beats "Customer".

**Fails when:** invented names; generic praise ("Great product, highly recommend"); stock-photo avatars; five testimonials that all say the same thing.

## 3.3 Stats / metrics band

**Job:** Compress proof into numbers that can be scanned.

**Needs:** 3–4 numbers, each with a label and, where credibility matters, a source or method note.

Use tabular numerals so counters don't jitter. Numbers get display-scale type; labels get small type — the contrast is the design. Avoid suspiciously round marketing numbers (10x, 99.9%, 50% more productive) unless they're real and attributable.

---

# 4. Explanation sections

## 4.1 Feature section

**Job:** Show one capability doing one job the persona named in discovery.

**Needs:** a claim heading, 15–35 words of body naming a specific mechanism or result, and a visual that shows the feature actually working.

**Variants**
1. **Three equal cards with icons** — the most template-identifying layout in existence. Use only when the three things are genuinely parallel and equally weighted, and even then reach for variant 2 first.
2. **Alternating full-width rows** — copy and visual swapping sides down the page. Gives each feature room; needs rhythm variation or it becomes monotonous by the third row.
3. **Bento grid** — asymmetric spans, one large tile and several small. Works when features are unequal in importance, which they usually are. Fails when all tiles are the same size, which makes it a card grid again.
4. **One hero feature + a compact list** — lead with the differentiator at full width, then the rest as a dense two-column list. Honest about what matters.
5. **Tabbed / switcher** — one visual area, several states. Good for feature depth without page length; costs a click and hides content from search.
6. **Editorial with margin notes** — feature prose in a 7-column measure, labels and specs in a 3-column rail.

**Copy:** headings are claims, not labels — "Catches the exception before your customer does", not "Alerts". Every feature ties to a top-3 task; cut anything that ties to none.

**Motion:** reveal the group, not each atom. Fade + 24px rise, once, 60ms stagger, capped at 6.

**Fails when:** icons in rounded squares carrying no information; body copy restating the heading; features listed by what the code does rather than what the user gets; six sections that each say "and it's fast".

## 4.2 How it works

**Job:** Remove the fear that this will be hard to adopt.

**Needs:** 3–4 steps, each with a verb-led label and one line of detail. Four is the ceiling — five steps reads as complicated.

**Variants:** numbered horizontal row · vertical timeline with a connecting rule · scroll-linked sequence where the visual changes per step (intensity 3) · before/after pair.

**Fails when:** steps describe the company's internal process rather than the user's actions; step 1 is "Sign up" (that's the CTA, not a step).

## 4.3 Comparison table

**Job:** Answer "why you and not the obvious alternative" without making the reader research it.

**Needs:** honest rows, including at least one where the alternative wins. A table where you win every row reads as marketing and is discounted entirely.

Row labels are user outcomes, not feature names. Sticky header row on scroll. On mobile, transpose to one column per competitor rather than horizontal scrolling.

## 4.4 Integrations / ecosystem

**Job:** Answer "will this work with what I already have".

Logo grid with search or filter once past ~12 items. Group by category. Every logo links somewhere real. Include a "request an integration" route — the absence of a logo is a common silent exit.

---

# 5. Conversion sections

## 5.1 Pricing

The most-scrutinized page on a SaaS site. Design it as a decision tool, not a display.

**Needs:** 2–4 plans, price, billing period, what each plan is *for* (not just what it contains), the feature differences that actually decide, and the answer to "what happens when I outgrow this".

**Anatomy:** plan name · who it's for, one line · price with period · primary CTA · the differentiating features first, shared features after · one plan marked recommended with a reason, not just a badge.

**Variants**
1. Three cards, middle one highlighted — standard, expected, and fine.
2. Feature-matrix table — for products where plan differences are numerous and technical.
3. Usage calculator — for consumption pricing; show an estimate before signup.
4. Single plan with add-ons — the most trustworthy layout when it's true.

**Required details:** monthly/annual toggle showing the actual saving; currency and tax handling stated; "what counts as a seat/unit" defined; a free-trial line that says whether a card is required. Enterprise "Contact us" is acceptable only as the top tier, never as the only option.

**Copy:** name plans by who they're for (Solo / Team / Business) rather than metal tiers when possible. The recommended plan gets a reason: "Most teams of 5–20 pick this."

**Fails when:** prices are hidden behind a demo request (measurably hurts SMB conversion); the differences between plans require reading two columns side by side to find; "unlimited" appears with an asterisk; the annual saving is claimed but not shown.

## 5.2 CTA band

**Job:** Convert the reader who is now persuaded, without making them scroll back up.

One heading restating the core outcome, one button, optionally one risk-reducer line ("No card required. Cancel anytime."). One CTA — a band with two competing buttons converts worse than either alone.

**Fails when:** it's a full-width gradient rectangle with centered white text, which is the single most recognizable AI-site element after the hero.

## 5.3 Forms (signup, contact, lead capture)

**Job:** Collect the minimum needed to start, and nothing else.

**Rules that materially change completion:**
- One column, one input per line. Multi-column forms increase time and error rate.
- Labels above the field, always visible. Never placeholder-as-label.
- Correct `type`, `inputmode`, and `autocomplete` on every field — the single highest-impact mobile change.
- Validate on blur, not mid-keystroke. Success states only where genuinely reassuring.
- Errors name the field, the problem, and the fix.
- Never disable submit as the only error signal.
- Preserve every entered value across a failure.
- Multi-step: show progress, allow back without data loss, keep steps to 3–4.

Every field must justify itself. "Phone number" on a trial signup costs conversions; ask for it later.

---

# 6. Support sections

## 6.1 FAQ

**Job:** Answer the real objections that stop a purchase.

Source questions from sales calls and support tickets, not imagination. 5–8 questions. Answer plainly, including the uncomfortable ones (pricing changes, data export, cancellation, security).

Accordion is fine and expected; keep the answers in the DOM for SEO. Consider leaving the first item open so the pattern is obvious.

**Fails when:** questions are marketing statements shaped like questions ("Why is [product] the best choice for teams?"); the hard questions are missing, which readers notice.

## 6.2 Contact

Multiple routes, with expected response times stated. If a form is the only route, say what happens after submission and when. Include a physical address where trust or jurisdiction matters.

---

# 7. E-commerce sections

## 7.1 Category / product grid

**Needs per card:** image (consistent crop and background), name, price, variant or availability signal, rating with count.

Filters: visible without a click on desktop, applied without a page reload, reflected in the URL, with a clear-all and a count of results. Sort separate from filter. On mobile, a bottom-sheet filter panel with an apply button and a live result count.

**Fails when:** price appears only on hover; the grid reflows as images load (set `aspect-ratio`); filtering resets scroll position; "no results" is a dead end with no suggestion.

## 7.2 Product detail

**Above the fold on mobile:** image, name, price, variant selector, add-to-cart.

**Needs:** gallery with zoom and at least one scale/context shot, complete variant state (out-of-stock combinations visibly unavailable, not silently broken), delivery estimate near the buy button, returns policy at the decision point, full specs, reviews with the distribution not just the average.

**Fails when:** the selected variant doesn't change the image; stock status appears only after add-to-cart; shipping cost is first revealed in checkout; reviews are unsorted and unfiltered.

## 7.3 Cart and checkout

The highest-stakes screens in the product.

Cart: editable inline, full cost breakdown including shipping and tax, one clear continue, and a visible route back to browsing.

Checkout: guest option, minimum fields, progress indicator, address autocomplete, saved payment methods, no surprise costs, and error recovery that never wipes entered data. Remove the primary nav from checkout — every link is an exit.

---

# 8. Content and editorial sections

## 8.1 Article header

Title (the largest type on the page), standfirst/deck, author with photo, publish and update dates, reading time, and topic tags. Cover image optional — a strong type-only header often reads better.

## 8.2 Article body

Typography *is* the product here.
- 680–760px measure, 18–20px body, 1.6–1.75 line-height
- Paragraph spacing over indentation for screen reading
- Subheads every 3–5 paragraphs, in the document outline (`h2`/`h3`), not styled `div`s
- Full support for pull quotes, figures with captions, code blocks with copy buttons and language labels, footnotes, callouts, and tables that reflow
- Inline links visibly distinct from body text without relying on color alone

**Editorial devices that cost nothing and immediately separate this from a blog template:** a margin rail carrying notes and figure captions, a drop cap, section numbering, a running header with the current section, asymmetric figure placement that breaks the measure.

**Fails when:** newsletter modals interrupt the first screen; sticky share bars eat the measure; ads sit inside the reading column; the measure runs past 90 characters on large screens.

## 8.3 Index / archive

Filterable by topic, sorted by date, with excerpts of consistent length. Show the total count. Paginate or infinite-scroll with a real "load more" control — never infinite scroll with a footer the user can't reach.

---

# 9. Application sections

## 9.1 App shell

Sidebar or top nav with an unambiguous active state (background fill or accent border, never bold text alone), workspace/account switcher, global search or command palette (`Cmd+K`), user menu, and a notification surface that doesn't interrupt.

Collapse the sidebar to icons at narrow widths, with labels on focus and hover — never icons alone permanently.

## 9.2 Dashboard

**One screen answers one question.** Lead with the single most important number at display scale, secondary metrics visibly subordinate, then the detail table.

Every metric states its period and comparison ("vs. previous 30 days"). Charts: ≤6 series, direct labels over legends, never color alone, and a stated empty and loading state. If a dashboard needs a legend to be understood, restructure it.

## 9.3 Data table

Sticky header, sortable columns with visible direction, tabular numerals, right-aligned numbers, consistent decimals, units labelled once in the header. Row actions visible on focus as well as hover. Selection with a count and bulk actions. Pagination or virtualized scroll with the total count shown. Column visibility and density controls for power users. Filters persist in the URL so views are shareable.

Mobile: transpose rows to cards rather than horizontally scrolling a wide table blindly.

## 9.4 Empty, loading, and error states

Every list, table, search result, and dashboard needs all three designed. This is the most commonly skipped work and the most visible when missing.

- **Empty (first use):** what will appear here, why it's empty, one clear first action. This is an onboarding opportunity, not an apology.
- **Empty (no results):** what was searched, what to try instead, a clear-filters action.
- **Loading:** skeletons matching the eventual layout for anything over ~1s; reserve space to avoid shift; show nothing under ~300ms — a flash of loader is worse than a small wait.
- **Error:** plain language, no raw codes for general users, a retry action, and user input preserved.

## 9.5 Onboarding

A checklist with visible progress plus contextual tooltips, not a modal tour. Let users skip and return. Get to one real outcome inside the first session — the "first value moment" from the flow in the IA — and defer everything not needed to reach it.

## 9.6 Settings

Organize by task, not by database table. Group into ≤6 sections. Autosave with a visible saved state, or an explicit save with a dirty-state guard on navigation — never ambiguous. Destructive actions isolated at the bottom, confirmed by typing the resource name, with the consequence stated in plain terms.

---

# 10. Section selection checklist

Before a blueprint is finished, verify:

- [ ] Every section serves a named belief in the persona's decision path
- [ ] No section exists only because the category usually has one
- [ ] The section *order* was derived from the decision path, not copied from a template
- [ ] The rhythm sequence is written out and is not uniform
- [ ] Variant choices are named, and at least two are non-default
- [ ] Every evidence section has real content or a clearly marked empty slot
- [ ] Every data-driven section has empty, loading, and error states specified
- [ ] The signature element from the art direction appears in a specific named section
- [ ] The page has exactly one primary action, and it's reachable above the fold on mobile

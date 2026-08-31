# Blueprint — SaaS product site

**Path:** `src/references/blueprints/saas.md`
Section anatomy: `references/17-section-library.md` · Method: `blueprints/00-index.md`

## Page inventory

| Page | Purpose | Primary action | Priority |
|---|---|---|---|
| Home | Explain what it is and who it's for | Start trial | P0 |
| Pricing | Let a buyer self-qualify and commit | Start trial | P0 |
| Product / features | Depth for the evaluator | Start trial | P0 |
| Use case or industry pages | Land specific search intent | Start trial | P1 |
| Customers / case studies | Evidence for the skeptical | Read a story → trial | P1 |
| Docs | Prove it's real and buildable | — | P1 (P0 for developer tools) |
| Changelog | Prove it's alive | — | P1 |
| Blog | Organic acquisition | Subscribe | P2 |
| Security / trust | Unblock enterprise review | Contact | P1 if selling to companies |
| About, Careers, Contact, Legal | Table stakes | — | P2 |

Cut anything the team can't keep current. An abandoned changelog is worse than no changelog.

## Home

**The job:** a visitor arriving cold decides within roughly eight seconds whether this is for them. The hero must answer *what is it, who is it for, why is it different*.

**Sections that earn their place** — chosen from the belief sequence, not all of them:

1. **Hero** — pick a variant deliberately. Split 7/5 with real product UI, or editorial full-bleed type if the product isn't visually self-explanatory. Centered stack only with strong type carrying it.
2. **Differentiator** — the one thing competitors can't claim, given room immediately after the hero. This slot is where most SaaS sites put a logo bar instead, which is why they all look the same.
3. **Evidence** — logos with a number, or one strong customer quote with a specific outcome. Placement is a decision: it can lead if the customers are the strongest asset.
4. **Feature sections tied to persona tasks** — one per top-3 task, no more. Bento or hero-feature-plus-list before three equal cards.
5. **How it works** — 3–4 steps, only if adoption effort is a real objection.
6. **Integrations** — early rather than late if "does it work with my stack" is a gating question, which for infrastructure and ops tools it usually is.
7. **Objection handling** — comparison table or FAQ, whichever matches how the buyer actually shops.
8. **Pricing preview or full pricing** — even a summary with a link outperforms hiding it.
9. **Final CTA + footer.**

**Deliberately avoid** the sequence hero → logo bar → three icon cards. It is the most reproduced section order in generated web design and readers recognize it instantly.

**Above the fold on mobile:** H1, subhead, primary CTA. If the product screenshot pushes the CTA below 667px, restructure.

**Rhythm example:** `full-bleed hero → tight evidence → open differentiator → dense feature grid → tight how-it-works → open testimonial → tight FAQ → CTA → footer`

**Edge cases:** no customer logos yet (lead with the differentiator and a founder-voice line, don't fake logos) · pre-launch (waitlist CTA, be honest about status) · the product screenshot is ugly (crop to one meaningful region rather than showing the whole app).

## Pricing

The most-scrutinized page. Design it as a decision tool.

Required: what each plan is *for* in one line, the differentiating features listed before the shared ones, monthly/annual toggle showing the real saving, a stated definition of the billing unit, whether a card is required for trial, currency and tax handling, and what happens at the plan limit.

The recommended plan gets a reason, not just a badge: "Most teams of 5–20 pick this."

Below the plans: an FAQ answering the uncomfortable questions — cancellation, data export, price changes, overage, what counts as a seat. A pricing page that avoids these is read as evasive.

**Enterprise:** "Contact us" is acceptable as the top tier only. If it's the only option, small and mid-market conversion drops measurably.

## Product / features page

Depth for someone already interested. One section per capability, each with a real interface visual, the specific mechanism, and its limits. Stating limits builds more trust than any testimonial — "works with Postgres 12+; no MySQL support yet" reads as honest.

Cross-link to the docs. For developer-facing products, a real code block outperforms any amount of marketing copy.

## Use case / industry pages

The same product framed for one segment: their vocabulary, their workflow, their objections, evidence from their industry. These are the highest-converting pages on most SaaS sites and the ones most often filled with recycled copy.

Do not ship these as the home page with three nouns swapped. If the page doesn't contain something only that segment cares about, don't build it.

## Customers / case studies

Per study: the situation before, what specifically changed, the measured result, and the timeframe. Include the friction they hit — a case study with no obstacle reads as fiction.

Index sortable by industry and company size, so an evaluator can find someone like themselves.

## Docs (P0 for developer tools)

Persistent sidebar with the current section expanded · search with keyboard shortcut · quickstart reachable in one click · runnable code samples with copy buttons and language tabs · versioned when the API is versioned · every page with an "edit" and a "was this helpful" route.

Docs are a design surface. For developer tools they carry more conversion weight than the marketing site.

## Security / trust page

Certifications with dates, data residency, encryption at rest and in transit, subprocessor list, incident history and status page link, retention and deletion policy, DPA availability. Written plainly. This page unblocks procurement and its absence stalls deals silently.

## Acceptance criteria

- [ ] Pricing is reachable from the home page in one click and shows real numbers
- [ ] The hero states an outcome, not a category, in ≤12 words
- [ ] Every feature section maps to one of the top-3 persona tasks
- [ ] No fabricated logos, quotes, or statistics anywhere
- [ ] The primary CTA is above the fold on a 375×667 viewport
- [ ] Section rhythm is non-uniform and written down
- [ ] The differentiator appears before any generic feature content

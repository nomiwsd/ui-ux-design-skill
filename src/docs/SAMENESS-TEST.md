# Cross-Project Sameness Test

**Path:** `src/docs/SAMENESS-TEST.md`

Run this whenever the skill's references change, and whenever a team has produced several projects with the skill and suspects a house style. It answers one question: **do unrelated products receive the same visual grammar, and if so, which rule produced it?**

## The twelve briefs

Fixed. Do not substitute. Each is one line; the agent must derive the rest.

| # | Brief |
|---|---|
| 1 | AI developer SaaS — an API and CLI for running evaluations on LLM outputs; marketing site plus a web console |
| 2 | Pakistani construction company — commercial and residential builder in Lahore; needs a site for developers, landowners, and government tenders |
| 3 | Luxury architecture studio — twelve-person practice; site for private clients and developers who commission by reputation |
| 4 | Hospital patient portal — appointments, results, prescriptions, messages; users of all ages, many first-time |
| 5 | Fintech dashboard — treasury operations tool for finance teams at mid-size companies; daily use |
| 6 | Children's education app — reading practice for ages 6–9, used at home with a parent nearby |
| 7 | Enterprise document management system — contracts, policies, and records for a regulated firm; roles and audit |
| 8 | Fashion e-commerce — mid-market womenswear brand; store front through checkout |
| 9 | Photographer portfolio — wedding and editorial photographer; site for prospective clients and editors |
| 10 | Government services portal — apply for permits, pay fees, check status; every resident |
| 11 | Restaurant website — neighborhood restaurant; menu, hours, booking, location |
| 12 | Productivity mobile app — personal task manager; daily use on a phone |

## Protocol

1. For each brief, run the skill from `/ux-discover` in compressed mode (three questions, skill drafts the rest) through `/ux-direction`, and take the recommended direction. Then run `/ux-spec tokens type pages` for the primary surface.
2. Record the **context profile line** the skill produced and the **surface label** for the primary surface.
3. Record the eleven compared attributes below for the primary surface.
4. Fill the comparison matrix. For every attribute, count how many briefs share the same value.
5. Apply the pass criterion.

## Compared attributes

| Attribute | What to record |
|---|---|
| First screen / hero structure | Layout of the first screen and what leads (message, product, proof, task list, route entry) |
| Typography | Number of faces; how the display face was chosen (property named); display:body ratio |
| Color architecture | Brand hue count; action color distinct from state/data; neutral tint decision; data palette present or not |
| Grid / layout | Named grid; symmetric or asymmetric; any grid break |
| Cards | Where cards are used and the stated reason |
| Navigation | Model and destination count |
| Spacing / density | Density decision and its trace; rhythm uniform or weighted |
| CTA / primary action pattern | Wording style; count; placement |
| Section or screen order | Derived list, first three items |
| Motion | Jobs licensed; storytelling present or not |
| Component style | Radius position; elevation method; border approach |

## Pass criterion

An attribute value shared by **more than four** of the twelve briefs must trace to a **shared context factor present in exactly those briefs**. Examples of legitimate sharing:

- "Dense tables, 1.5–2× ratio" across fintech dashboard, enterprise documents, and the AI SaaS console → shared factor: frequent · expert · data-led.
- "Symmetric single-column forms, no decoration" across hospital portal, government portal, and checkout → shared factor: transactional · high-risk · occasional · novice.

Illegitimate sharing — a house style:

- Same neutral tint direction across construction, hospital, luxury, and fintech.
- Same display face family (a serif, or a specific grotesque) across restaurant, government, SaaS, and photographer.
- A grid break or signature element on the hospital portal, the fintech dashboard, and the document system.
- Scroll reveal on any product surface.
- The same display:body ratio (within 0.5×) across more than four briefs of different reading contexts.

When a house style is found, **fix the rule that produced it**, not the outputs. Find the reference and line that made that value probable, and convert it to a WHEN / CONSIDER / BECAUSE / VALIDATE form.

## Comparison matrix template

```
Attribute                | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Max shared | Shared factor?
First screen             |   |   |   |   |   |   |   |   |   |    |    |    |            |
Typography               |   |   |   |   |   |   |   |   |   |    |    |    |            |
Color architecture       |   |   |   |   |   |   |   |   |   |    |    |    |            |
Grid / layout            |   |   |   |   |   |   |   |   |   |    |    |    |            |
Cards                    |   |   |   |   |   |   |   |   |   |    |    |    |            |
Navigation               |   |   |   |   |   |   |   |   |   |    |    |    |            |
Spacing / density        |   |   |   |   |   |   |   |   |   |    |    |    |            |
CTA pattern              |   |   |   |   |   |   |   |   |   |    |    |    |            |
Section / screen order   |   |   |   |   |   |   |   |   |   |    |    |    |            |
Motion                   |   |   |   |   |   |   |   |   |   |    |    |    |            |
Component style          |   |   |   |   |   |   |   |   |   |    |    |    |            |
```

## Expected differentiators (what a passing run must show)

These are not answers to copy. They are the minimum ways the twelve must differ, each traceable to the brief.

| Brief | Must be visibly true |
|---|---|
| AI developer SaaS | Site opens with the product or code, not a claim; console is dense, keyboard-first, single or system face acceptable |
| Construction company | Route-first or proof-first for three distinct audiences; evidence is built work and credentials; feels nothing like a SaaS site; Urdu/English script coverage considered |
| Luxury architecture | Restraint without giant type; photography sets color; near-absent UI color; slow pacing; no signature gimmick |
| Hospital portal | Task-first or status-first home; symmetric single-column forms; 1.75–2.25× ratio; neutral surfaces; consequence statements; state-only motion; no signature element |
| Fintech dashboard | Exceptions- or overview-first; dense with toggle; data palette separate from brand; tabular numerals; keyboard model; no marketing chrome |
| Children's app | Very large targets; icons with labels; immediate feedback; parent gate; playful motion licensed; high contrast |
| Enterprise documents | Sidebar + search; permission-aware UI; audit visible; consistent metadata rows; bulk actions; zero decoration |
| Fashion e-commerce | Image-led front; category tiles; product detail with variant/delivery/returns at decision point; checkout stripped of nav |
| Photographer portfolio | Work in the first screen; type recedes; storytelling motion licensed but budgeted; contact one action away |
| Government portal | Plain language above the fold; hub-and-spoke; WCAG 2.2 AA with accessible authentication and no redundant entry; neutral gray; system or highly legible face |
| Restaurant | Menu, hours, booking, location reachable in one action; photography if real; warm brand allowed but traced; no SaaS section order |
| Productivity mobile app | Platform conventions; bottom tabs with labels; thumb-zone actions; task-first home; state survives interruption |

## Vague-prompt companion test

Feed each with a minimal brief and check the response resolves it through the context model without emitting the cliché:

| Phrase | Must not produce |
|---|---|
| "Make it premium" | Oversized type, a signature element, a serif, a specific palette by default |
| "Build a modern SaaS site" | Dark theme + gradient + bento + logo bar |
| "Make it futuristic" | Neon, glow, dark-only, particles |
| "Use shadcn" | shadcn's default zinc/radius/Inter as the design |
| "Use bento" | Bento on every section; equal tiles |
| "Make it like Linear" | Dark page, purple gradient, glow |
| "Create a modern dashboard" | Grid of KPI cards with sparklines and a donut |

## Reference run

Recorded when the test is executed against a version of the skill. Each run states the version, the date, the method, the matrix, and the verdict.

### Run 1 — skill v3 reasoning architecture, 2026-09-07

**Method.** Dry run: the rebuilt references (`00`–`13`) were applied to each brief by the author of the rebuild acting as the agent, compressed-discovery mode, recommended direction taken. This is a reasoning-level check of what the rules produce, not an independent multi-agent evaluation; see the limitation at the end.

#### Context profiles produced

| # | Profile (abridged) | Primary surface |
|---|---|---|
| 1 | expert · professional · frequent (console) / occasional (site) · complex · task-driven · technical-expressive · product-led (site), data-led (console) · desktop + keyboard | site: marketing · console: product |
| 2 | novice-to-mixed · professional · occasional · informational + contact · high-risk (large sums) · task-driven · conservative · authoritative · image + credentials · mobile-first · Urdu + English | marketing |
| 3 | sophisticated non-designer · occasional · informational · high-consideration · exploratory · expressive-restrained · quiet-authoritative · premium · image-led · desktop-heavy | marketing |
| 4 | novice · casual · occasional (some frequent) · transactional · complex · high-risk · task-driven · conservative · friendly-authoritative · form-led · mobile-heavy · older users, multilingual | product |
| 5 | expert · professional · frequent · transactional · complex · high-risk · task-driven · conservative · authoritative · data-led · desktop + keyboard | product |
| 6 | novice (age 6–9) · casual · frequent · interaction-led · simple · child-safety · task (a session) · expressive · friendly · playful · tablet/phone touch | product (+ parent surface) |
| 7 | mixed expertise · professional · frequent · transactional · complex · high-risk (compliance) · task-driven · conservative · authoritative · data-led (metadata) · desktop + keyboard + assistive tech | product |
| 8 | mixed · casual · occasional-to-returning · transactional · exploratory → task-driven · expressive · friendly · image-led · mobile-first touch | front/category: marketing · PDP/cart/checkout: product |
| 9 | novice · occasional · informational → contact · exploratory · expressive · warm · premium-ish · image-led · mobile-heavy | marketing |
| 10 | novice · casual · occasional · transactional · complex · high-risk (legal, deadlines) · task-driven · conservative · authoritative · form-led · mobile-heavy · widest ability range | product (with informational hub) |
| 11 | novice · casual · occasional · informational + booking · simple · low-risk · task-driven · brand from venue · image + menu text · mobile-first | marketing |
| 12 | mixed → frequent · frequent (many/day) · transactional · low-risk · task-driven · friendly · interaction-led · mobile touch, platform-native | product |

#### Comparison matrix

| Attribute | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Max shared | Shared factor? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| First screen | demo-first: real CLI + result table | route + proof: 3 audience entries over built work, real number slot | work-first: one photograph, no claim | task-first: 4 verbs + next appointment | exceptions-first queue + balance strip | task launcher: today's reading | inbox-first: awaiting my review + search | route via seasonal photo + category tiles | work-first, two audience entries | task-first hub: search + plain-language verbs | task-first: open-now, book, menu, address | today list + quick-add in thumb zone | 4 (task-first: 4, 10, 11, 12) | Yes — task-driven, user must *do*; executions differ (verb hub / open-now strip / list) |
| Typography | 1 neutral face + mono; tabular figures; 2.5× site, 2× console | 1 face with Urdu coverage + Latin companion; 2.5× | 1–2 quiet faces; 2×; small captions | 1 legible large-x-height face; 18px; 2× | 1 face, tabular, 13–14px; 1.5–1.75×; mono for account IDs | early-reader face, 20px+; 2× on a large base | 1 neutral/system; 14px; 2× | brand display for campaign + neutral UI; 3× campaign, 2× PDP | 1 face + quiet serif for name; 2.5× | system or public-sector face; 18–19px; 2× | 1–2; legible menu body; 2.5× | platform face, Dynamic Type; ~2× | 6 (single neutral face: 1c, 4, 5, 7, 10, 12) · 7 (≤2× ratio: 1c, 3, 4, 5, 7, 10, 12) | Yes — all six single-face cases are product surfaces (`04` §2.1 platform/neutrality); ≤2× = product surfaces + luxury restraint (3, traced to `[BRAND: premium = restraint]`) |
| Color architecture | brand 1; neutral gray; data pass/fail/pending separate; 2 themes | brand from logo; neutrals tinted toward photography grade; 1 theme | near-absent; photography sets; 1 theme | neutral gray; brand sparse; semantic critical with icons; 1 theme + high contrast | neutral gray; data-state + categorical separate; 2 themes | multi-hue expressive; high contrast; 1 theme | neutral gray; status colors distinct from brand and danger; 1 theme | photography sets; brand as action; sale as distinct semantic; 1 theme | photography sets; tint follows photo grade | neutral gray; official hue for identity; high-contrast action; 1 theme + HC | venue identity; warm only if brand is warm | brand 1 as action; state colors; 2 themes | 5 (neutral gray: 1c, 4, 5, 7, 10) · 3 (two themes: 1, 5, 12) | Yes — neutral gray = data/clinical/governmental (`04` §3.3); two themes = long sessions / platform (`04` §3.6). Dark theme is not universal |
| Grid / layout | site 12-col; console app grid, sidebar | 12-col; 3 equal audience tiles (peers); full-bleed photos | full-bleed image grid + column | single column, hub-and-spoke | app grid, fixed sidebar | single column, big elements | app grid, master–detail | full-bleed + product grid; editorial blocks in lookbook | full-bleed image grid | single column ≤66ch, hub + wizard | single column mobile; menu list | single column list, platform | 4 (single column: 4, 10, 11, 12) | Yes — forms, lists, mobile-first. No grid break anywhere except optionally 8's lookbook `[BRAND: expressive]` |
| Cards | none; tables | yes: projects, audience tiles | no; edge-to-edge images | yes: appointments, results | minimal; tables | yes: large tappable tiles | no; metadata rows | yes: product cards | no | minimal; strong links | no; menu list | no; rows with swipe + alternatives | 4 (cards: 2, 4, 6, 8) | Yes — each is parallel, individually actionable items (`00` common region) |
| Navigation | site top bar 5, Docs prominent; console sidebar + palette | top bar 5–6 + visible phone + WhatsApp | minimal 3, overlay acceptable | hub; bottom tabs 5 with labels | sidebar + palette + saved views | 2–3 destinations, icons + labels, parent gate | sidebar + search + breadcrumbs | top bar categories + search + bag; bottom-sheet filters | minimal 4, contact one action away | hub + search + breadcrumb; consistent help | 4 + tel; sticky Book on mobile | bottom tabs 3–4 + quick-add | 4 (top bar: 1s, 2, 8, 11) · 3 (sidebar: 1c, 5, 7) · 3 (bottom tabs: 4, 6, 12) | Yes — marketing sites / many-entity desktop apps / mobile products (`03` §1.2) |
| Spacing / density | site comfortable; console dense + toggle | comfortable; proof section weighted | generous; slow pacing | generous; one decision per screen | dense + toggle | very generous | comfortable + compact toggle | comfortable; grid moderately dense | generous | generous; one question per page | comfortable; menu moderately dense | comfortable + compact | 5 (comfortable: 1s, 2, 8, 11, 12) · 5 (generous: 3, 4, 6, 9, 10) | Partly — density is a three-value attribute, so sharing is structurally expected. "Generous" traces to two factors (novice/high-risk: 4, 10; image-led premium or children: 3, 6, 9). "Comfortable" is the residual middle for occasional marketing and mixed-frequency mobile. Per-brief traces hold; flagged for observation |
| CTA pattern | "Run your first eval"; secondary "Read the docs" | "Call [n]" / "Request a quote"; WhatsApp | understated "Contact"; email visible | verb buttons; consequence before book/cancel | inline approve/reject; typed confirm over threshold; undo | one big button; immediate feedback | inline approve; publish = preview + confirm; soft delete + undo | "Add to bag"; sticky total + action; nav-free checkout | "Check my date"; price range stated | one action per page; save-and-return; no redundant entry | "Book a table" + tel, sticky | quick-add; check with undo toast; swipe with undo | 3 (sticky mobile action: 8, 11, 12) · 3 (undo model: 5, 7, 12) | Yes — mobile-first single action; reversible frequent actions (`03` §3.6). Outcome-named labels everywhere is a copy principle, not a style |
| Section / screen order | demo → results → docs/integration → pricing → security | route + proof → projects → credentials → services by audience → tender docs → contact + map | featured work → index → practice statement → contact | tasks + status → wizard → results with plain-language → messages | queue → transactions → account → approvals → reports | today → session → reward → progress (parent) | inbox → search → detail + audit → approval → admin | photo + categories → new in → trust strip → lookbook; PDP: image/name/price/variant/add | work → galleries → about → pricing → contact | hub → service start (needs, time, cost) → wizard → confirmation + reference | open-now + book + menu → menu → story → location | today → add sheet → detail → project → settings | 2 (hub → wizard → confirm: 4, 10) · 2 (work → index → about → contact: 3, 9) · 2 (queue → list → detail: 5, 7) | Yes — each pair shares a real factor (transactional occasional novice; portfolio; operational inbox). No canonical marketing order appears |
| Motion | feedback + value-change state | feedback; image continuity | continuity (crossfade) only | state only; reduced by default | state + feedback; sort continuity | feedback celebration, causality; playful licensed | feedback + state; zero decoration | continuity (gallery), feedback; storytelling in lookbook only | continuity; one budgeted storytelling moment | focus/state only | feedback only | feedback, continuity, causality (sheet) | 7 (feedback/state only: 1c, 2, 4, 5, 7, 10, 11) | Yes — product surfaces and occasional-use marketing (`06` §2). No brief received scroll reveal by default; storytelling appears only where licensed (8 lookbook, 9 one moment) |
| Component style | 4px; border elevation | 8px or square; light shadow | square; no shadows; rules or none | 8–12px; light elevation; ≥48px targets | 2–4px; border elevation; no shadow | 16–24px; bold outlines | 4px; border; no shadow | brand-dependent 2–8px; minimal elevation | square or soft per brand; no shadows | 2–4px; strong borders; no shadow | brand-dependent; light | platform radius and sheets | 5 (sharp 2–4px: 1, 3, 5, 7, 10) · 3 (border elevation: 1c, 5, 7) | Yes — authoritative/precise brand axis (1, 5, 7, 10) and architectural precision (3); border elevation = dense data surfaces |

#### Findings

- **No attribute exceeded four shared values without a traceable shared context factor.** Every case above four is explained by the surface fork (product vs marketing) or by a named axis of the context model, and the reference section that produces it is cited.
- **No second-generation house style appeared.** No brief received a grid break, a signature element, warm-paper neutrals, a serif display face, oversized type, hairline-rule editorial grid, or a bento section by default. Construction (2) and hospital (4) share nothing visible with SaaS (1).
- **No first-generation default appeared unreasoned.** Equal three-tile layout appears once (2) with a peer-content trace. Cards appear four times, each traced. Single-face type appears six times, all on product surfaces.
- **Universal motion default is gone.** Seven briefs received feedback/state only; none received fade-up reveals.
- **Weakest attribute: density.** Five briefs share "comfortable" as a residual middle. Traces hold per brief, but density has only three values and will always cluster. The guard against the real failure (marketing spacing on daily-use apps, or dense chrome on a narrative) held in all twelve.
- **User-brief expectations met:** construction feels different from SaaS (2 vs 1); healthcare prioritizes safety and trust (4); fintech prioritizes comprehension and repeated workflow (5); luxury uses restraint without giant type (3); developer tools allow density (1 console); e-commerce prioritizes discovery then purchase (8); government prioritizes accessibility and retrieval (10); portfolios prioritize work presentation (3, 9).

#### Vague-prompt results

| Phrase | Resolution the references produce | Cliché avoided |
|---|---|---|
| "Make it premium" | `00` vague-prompt table → premium *to whom*, in *this* category; luxury = restraint, material, pacing; developer tool = precision, density; finance = clarity, evidence | Oversized type, signature element, serif, fixed palette |
| "Build a modern SaaS site" | `00` table + `02` §2 → who buys, what the product shows, what proof exists; three strategies (demo / proof / problem) | Dark + gradient + bento + logo bar |
| "Make it futuristic" | `00` table → what is actually new; can the product's own output demonstrate it; audience tolerance | Neon, glow, dark-only, particles, 3D blobs |
| "Use shadcn" | `00` table → implementation constraint; tokens from `04` §3.7 map onto its theme; its defaults (zinc, radius, Inter) overridden per the design's traces | shadcn's default look as the design |
| "Use bento" | `00` table + `04` §7 → are features unequal? if yes, one section with unequal tiles; if no, decline with reason | Bento everywhere; equal tiles |
| "Make it like Linear" | `00` table + `01` probe → name the mechanism (restraint, real product UI, precision, speed), ask which matters here, apply to this brand | Dark page, purple gradient, glow |
| "Create a modern dashboard" | `00` table + `03` §1.3 → the one question the screen answers; frequency; expertise; entities; home-screen job | Grid of KPI cards with sparklines and a donut |

#### Verdict

**Pass** at the reasoning level. The rule set produces differences from context, not from randomness, and no rule was found that manufactures a shared value across unrelated briefs.

**Limitation.** This run was a dry run by the rebuild's author acting as the agent. A live run against several independent agent sessions is needed to confirm that agents actually follow the pipeline order under real prompts, that the always-loaded core is not skimmed, and that density does not drift to a single value in practice. Repeat this run with independent agents before the next release and record it here as Run 2.

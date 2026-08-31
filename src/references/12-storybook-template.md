# The Design Storybook — templates

**Path:** `src/references/12-storybook-template.md`

Write these files into `design/`. They have two readers: the human who must agree with the decisions, and the coding agent that will build from them. **Every statement must be specific enough to implement without a follow-up question.** If a line could be satisfied two different ways, it isn't finished.

The test for each file: hand it to an agent with no memory of this conversation. Could it build what you intended? If not, the missing information is what's wrong with the file.

```
design/
├── 00-brief.md
├── 01-art-direction.md
├── 02-information-architecture.md
├── 03-design-tokens.md
├── 04-typography-and-color.md
├── 05-components.md
├── 06-page-blueprints.md
├── 07-motion-spec.md
├── 08-accessibility.md
├── 09-build-plan.md
├── previews/                 (optional, from /ux-direction)
└── tokens/
    ├── tokens.json
    └── tokens.css
```

---

## `00-brief.md`

```markdown
# Design Brief — [Project name]

## What this is
[One paragraph: what the product does, who it serves, what success looks like.
Written so a stranger understands the business, not just the software.]

## Primary conversion
[The single most important action. One only. If you wrote three, pick one.]

## Personas
### Persona: "[Name, the role in five words]"
- **Who:** [age, role, org size, tech comfort, device split with a number]
- **Context:** [when and where they use it, in what state of attention]
- **Jobs to be done:** [three, as verbs]
- **Frustrations:** [what currently fails them — specific, not "bad UX"]
- **Trust signals that matter:** [what makes them believe a vendor]
- **Vocabulary they use:** [their actual words for the problem — this governs the copy]
- **Design implications:** [what each of the above forces in the interface]

## Top 3 tasks (the north star)
1. …
2. …
3. …
[Every layout decision is checked against these. A section serving none is cut.]

## What makes this different
[One sentence a direct competitor could NOT write about their own product.
If this is empty, the design will be generic no matter what follows.]

## Brand direction
- **Adjectives:** [three]
- **References:** [URL — the mechanism we want / what we are deliberately not taking]
- **Deliberately not:** [named sites or styles this must not resemble]

## Constraints
| Area | Constraint |
|---|---|
| Stack | [framework, styling, component library, CMS, hosting] |
| Content | [real copy? real photography? what exists today] |
| Accessibility target | WCAG 2.2 AA [+ any legal requirement] |
| Performance budget | LCP <2.5s, CLS <0.1, INP <200ms on mid-range Android/4G |
| Animation intensity | Level [1-4] |
| Theming | [light / dark / both, system default] |
| Locales / RTL | |
| Forbidden | [existing design system, brand rules, third-party widgets] |

## Success metrics
[How we'll know the design worked: conversion rate, task completion time, support
ticket volume, bounce. With current baselines if they exist.]

## Assumptions
| Assumption | What it affects | Confidence |
|---|---|---|
[Everything guessed rather than confirmed, so the client can correct it cheaply.]
```

---

## `01-art-direction.md`

Written by `/ux-direction` **before** any tokens exist. The file that stops the output being generic. Keep the rejected directions — they are the answer when someone asks six months later why the site looks like this.

```markdown
# Art Direction — [Project name]

## Chosen: Direction [B] — "[name]"
Decided [date] by [who]. Rejected A and C — see below.

**One line:** [the whole position in a sentence]

| | |
|---|---|
| Layout logic | [e.g. 2-column editorial: 7-col measure + 3-col margin rail] |
| Type strategy | [display face] over [body face], [X.X]x ratio |
| Palette | [temperature and value position], one signal at <10% coverage |
| Density pole | editorial-generous / utilitarian-dense |
| Surface | [hairline rules / soft elevation / hard blocks / paper / glass] |
| Motion level | [1-4] |

**Signature element:** [one sentence — the memorable, project-specific idea a
competitor could not paste into their own site]

**Section rhythm:** full-bleed -> tight -> tight -> open -> dense grid -> open -> tight -> footer

**Grid:** [named system]. Deliberate break: [what, where].

**Why this fits the brief:** [tied to the persona and their decision path]

**What it costs:** [what this direction is unforgiving of]

## Voice
- **[Adjective]** — [what it means in words]
- **[Adjective]** — [what it means in words]
- **[Adjective]** — [what it means in words]

## Reference mechanisms
| Reference | What we want from it | What we are deliberately not taking |
|---|---|---|

## Ban-list check
| Banned item used | Justification |
|---|---|
- Could this be applied unchanged to a competitor in an unrelated industry? [no, because...]
- Three things that would differ if the audience were the opposite: [1] [2] [3]

## Rejected directions
### Direction A — "[name]" — [one line]. Rejected because [reason].
### Direction C — "[name]" — [one line]. Rejected because [reason].
```

---

## `02-information-architecture.md`

```markdown
# Information Architecture

## Sitemap
- / (Home)
  - /product
  - /pricing
  - /customers -> /customers/[slug]
  - /blog -> /blog/[slug]
  - /contact
- /app (authenticated)
  - /app/dashboard ...

[Nothing deeper than three levels on a marketing site.]

## Primary flows
### Flow 1 — [task name from the top 3]

Entry (hero CTA) -> Pricing (compare plans) -> Signup (email + password)
  -> Verify email -> Onboarding checklist (3 steps) -> First value moment

- **Drop-off risks:** [where and why — from analytics if they exist]
- **Design responses:** [the specific decision each risk forces]
- **First value moment:** [the exact thing that must happen in session one]

## Page inventory
| Page | Purpose | Primary action | Persona served | Priority |
|---|---|---|---|---|
| Home | | | | P0 |

## Navigation model
- **Primary:** [what's in the nav and why those items]
- **Secondary:** [footer, in-page, contextual]
- The primary action is never more than one click from any entry point

## Content model
| Entity | Fields | Notes |
|---|---|---|
| Post | title, slug, excerpt, cover(16:9), author, publishedAt, updatedAt, tags[], readingTime, body | excerpt max 160 chars |

[Define fields BEFORE designing the card that displays them. Designing a card for
content that doesn't exist is the most common cause of "the real site looks nothing
like the mockup".]

## URL and state
[Which view state lives in the URL: filters, sort, pagination, tabs, theme.]
```

---

## `03-design-tokens.md` + `tokens/tokens.css` + `tokens/tokens.json`

Start from `assets/tokens.template.css` and `tokens.template.json`, which ship deliberate magenta/lime tripwire values. **If those colors render anywhere, the tokens were never chosen.**

Document each group with the value **and** the reason.

```markdown
# Design Tokens

## Color — light
| Token | Value | Use | Reason |
|---|---|---|---|
| --bg-canvas | #FAF8F3 | Page background | Warm paper base; direction is editorial, not clinical |
| --accent | #C2410C | Primary CTA and active states ONLY | Single signal, kept under 10% of surface |

## Color — dark
[Same table. Base #121212-#1A1A1A, elevation by lightness, accents desaturated ~20
points. Designed independently — state what changed from light and why.]

## Typography
| Token | Font / size / line-height / weight / tracking | Use |
|---|---|---|
| --text-display | [Face] 76/1.05/700/-0.03em | Hero headline only |

## Spacing, radius, elevation, layout, motion
[Each scale with one sentence of reasoning. State the radius position on the
sharp<->soft axis and why.]

## Framework mapping
[Tailwind v4 @theme block, v3 theme.extend, or the equivalent for this stack.]

## Pre-paint theme script
[The inline script that sets data-theme before first paint.]
```

---

## `04-typography-and-color.md`

```markdown
# Typography and Color Rationale

## Font pairing
- **Display:** [font] — chosen because [ties to a brand adjective and the audience]
- **Body:** [font] — chosen for legibility at 16px in long paragraphs
- **Mono:** [font, if any] — data and code only
- **Rejected:** [what was considered and why it lost]
- **Loading:** self-hosted variable woff2, `font-display: swap`, preload [one file],
  fallback stack with `size-adjust: [X]%`

## Type scale
| Role | Mobile | Desktop | clamp() | Line-height | Weight | Tracking |
|---|---|---|---|---|---|---|
| Display | 40 | 76 | clamp(...) | 1.05 | 700 | -0.03em |

**Display-to-body ratio:** [X.X]x — [why this ratio for this density pole]

## Palette rationale
[Why this hue family, tied to audience and category. The neutral tint direction and
why. What the accent is reserved for, and what must never use it.]

## Contrast results (measured, both themes)
| Foreground | Background | Ratio | Required | Pass |
|---|---|---|---|---|
| --text-primary | --bg-canvas | 16.1:1 | 4.5 | PASS |
| --accent-fg | --accent | 5.9:1 | 4.5 | PASS |
| --text-muted | --bg-surface | 4.6:1 | 4.5 | PASS |

[EVERY pairing that will actually appear, in BOTH themes. Fix anything that fails
before this document is signed off. "Looks fine" is not a measurement.]
```

---

## `05-components.md`

One entry per component. Anything missing a state here becomes a bug later.

```markdown
### Button
- **Variants:** primary, secondary, ghost, destructive
- **Sizes:** sm 32px / md 40px / lg 48px (mobile min touch area 44px via padding)
- **Anatomy:** [icon?] + label + [icon?], 8px gap, radius --radius-md
- **States:**
  | State | Spec |
  |---|---|
  | default | bg --accent, text --accent-fg |
  | hover | bg --accent-hover, translateY(-1px), 150ms --ease-out |
  | focus-visible | 2px outline --accent, 2px offset, >=3:1 against background |
  | active | translateY(0), scale .99 |
  | disabled | bg --border-strong, text --text-muted, cursor not-allowed, no hover |
  | loading | spinner replaces label, width locked, aria-busy="true" |
- **Responsive:** [what changes below 768px]
- **Accessibility:** real `<button>`; icon-only requires `aria-label`; never disabled
  as the only error signal
- **Don't:** more than one primary button per view
```

Cover at minimum: button, link, input, textarea, select, checkbox/radio, toggle, slider, card, badge, avatar, tooltip, popover, modal/dialog, drawer, toast, tabs, accordion, table, pagination, breadcrumb, nav bar, sidebar, footer, skeleton, empty state, error state, loading state.

For each: every value references a token, every interactive element has a focus-visible style, and every state that can occur is specified.

---

## `06-page-blueprints.md`

The largest file, and the one an agent leans on hardest.

**Before writing any page**, complete three things (method: `references/blueprints/00-index.md`):

1. The **belief sequence** — what this persona must come to believe, in order. That list is the page.
2. The **rhythm sequence** — if it comes out uniform, redo it.
3. The **variant choice** per section, named. Never variant 1 by reflex.

```markdown
## Home

**Goal:** [one sentence] · **Primary action:** [the one CTA]
**Above the fold on mobile (375x667):** headline, subhead, primary CTA
**Belief sequence:**
1. [belief] -> served by section [n]
2. ...
**Rhythm:** full-bleed -> tight -> open -> dense -> open -> tight -> footer
**Signature element appears in:** section [n]

### 1. Nav — sticky, 64px, shrinks to 56px past 100px scroll
Logo · Product · Pricing · Customers · Docs · [Sign in] [Start free ->]
- **Mobile:** full-height panel, focus trapped, closes on Escape and on route change

### 2. Hero — library variant 2 (split 7/5), chosen because the product UI is the argument
- **Job:** belief 1 — this handles exceptions specifically
- **Layout:** two-column 7/5 desktop, stacked mobile; visual bleeds 40px past the
  container right edge (this is the deliberate grid break)
- **H1** (<=12 words, states the outcome): "Catch the exception before your customer does"
- **Subhead** (<=22 words, new information): "[draft copy]"
- **CTA primary:** "Start free trial" · **secondary:** "See a 2-min demo"
- **Visual:** real screenshot of the exceptions queue, 16:10, layered shadow, no device frame
- **Motion:** MOT-01 (headline is LCP — never animated in), MOT-02 (visual, +100ms)
- **Spacing:** 96 top / 128 bottom desktop; 56 / 72 mobile
- **States:** n/a

### 3. ...
### n. Footer

**Mobile changes:** [what reorders, collapses, or is dropped entirely]
**Edge cases:** longest realistic headline [X chars] · no testimonials yet · no logo
permissions · zero data · slow network with no images
```

Rules for every page:
- **Real draft copy in every slot.** No lorem ipsum, no descriptions of copy ("compelling headline about speed"), no invented testimonials or statistics. Unverifiable content gets a marked slot: `[CLAIM — needs a real number]`.
- Every section maps to a belief. A section serving none is cut.
- Every data-driven section specifies empty, loading, and error states.

Per-category page inventories and category-specific requirements: `references/blueprints/`.

---

## `07-motion-spec.md`

Every animation gets an ID so the build plan and QA can reference it.

```markdown
# Motion Spec — Intensity level [n]

Global tokens: see 03-design-tokens.md. All motion reduces to end-state under
`prefers-reduced-motion: reduce`.

| ID | Element | Trigger | Property | Duration / easing | Library | Reduced-motion |
|---|---|---|---|---|---|---|
| MOT-01 | Hero H1 | Page load | none — LCP, never animated | — | — | — |
| MOT-02 | Hero visual | Load +100ms | opacity 0->1, y 16->0 | 500ms / --ease-out | CSS | Static |
| MOT-03 | Section reveals | Scroll, top 85%, once | opacity 0->1, y 24->0 | 600ms / power3.out | GSAP ScrollTrigger | Static |
| MOT-04 | Feature cards | In view, once | as MOT-03, 60ms stagger, max 6 | 500ms | Motion variants | Static |
| MOT-05 | Buttons | Hover / focus | y -2px, bg shift | 150ms / --ease-out | CSS | Colour only |
| MOT-06 | Route change | Navigation | opacity + y 8px | 250ms | Motion AnimatePresence | Instant swap |

## Rules for this project
- LCP element ([name it]) is never hidden or animated from opacity 0 in CSS
- No animation repeats on scroll-up (`once: true`)
- Library split: [CSS for state, GSAP for scroll, Motion for component] — justified because [...]
- Total animation JS budget: [X]KB gzip
- Every row has a job stateable in four words. Rows that didn't were cut.
```

---

## `08-accessibility.md`

Copy the gate from `07-craft-and-accessibility.md`, then mark each item with **status, evidence, and owner**, plus any deliberate exception with its justification. An empty checklist is not a pass.

```markdown
| Item | Status | Evidence | Owner |
|---|---|---|---|
| Body contrast >=4.5:1 both themes | PASS | 04-typography-and-color.md table | — |
| Keyboard-only primary flow | FAIL | Modal traps focus but doesn't restore on close | [name] |
```

---

## `09-build-plan.md`

```markdown
# Build Plan

## Order
1. Tokens -> `app/globals.css` + framework theme mapping
2. Primitives: Button, Input, Card, Badge, Skeleton
3. Layout: Nav, Footer, Section wrapper, Container
4. Sections in blueprint order
5. Pages assembled from sections
6. Motion layer (MOT-01...n) behind reduced-motion guards
7. 3D / heavy assets, lazy-loaded, with poster fallbacks
8. Accessibility pass, then performance pass

## File structure
[Proposed tree for the chosen framework]

## Acceptance criteria per page
- [ ] Renders correctly at 320 / 375 / 768 / 1280 / 1440 / 1920
- [ ] Usable at 200% zoom
- [ ] Keyboard-only walkthrough of the primary flow completes
- [ ] Contrast spot-checked in both themes
- [ ] Lighthouse mobile >=90 performance, 100 accessibility
- [ ] Every animation matches its MOT-xx spec; reduced-motion fallback works
- [ ] No console errors; no layout shift on load
- [ ] Empty, loading, and error states exist for every data-driven view

## Fidelity criteria (build drift check)
- [ ] Section rhythm matches the written sequence — not uniform padding
- [ ] The specified grid break is present
- [ ] Display-to-body ratio measured on the rendered page matches the spec
- [ ] The signature element exists and is visible
- [ ] Nothing from the anti-slop ban list crept in during implementation
```

---

## Chat-only fallback

Without a filesystem, deliver the same ten sections as headings in one document, in the same order, with the same specificity. Do not shorten the tokens, the contrast table, or the motion table — those are the parts that get copied into code.

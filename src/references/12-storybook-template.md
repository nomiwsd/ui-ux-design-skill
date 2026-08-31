# The Design Storybook — templates

Write these files into `design/`. They are written for two readers: the human who needs to agree with the decisions, and the coding agent that will build from them. Keep every statement specific enough to implement without asking a follow-up question.

---

## `00-brief.md`

```markdown
# Design Brief — [Project name]

## What this is
[One paragraph: what the product does, who it serves, what success looks like.]

## Primary conversion
[The single most important action. One only.]

## Personas
[1–3 personas in the format from 01-discovery-interview.md]

## Top 3 tasks (the north star)
1. …
2. …
3. …

## Brand direction
- Adjectives: [three]
- Reference points: [URLs and what specifically is being borrowed — layout? type? restraint?]
- Deliberately not: [what this should not look like]

## Constraints
| Area | Constraint |
|---|---|
| Stack | |
| Content | |
| Accessibility target | WCAG 2.2 AA |
| Performance budget | LCP <2.5s, CLS <0.1, INP <200ms on mid-range Android/4G |
| Animation intensity | Level [1–4] |
| Theming | Light + dark, system default |
| Locales / RTL | |

## Success metrics
[How we'll know the design worked: conversion rate, task completion, support ticket volume, bounce.]

## Assumptions
[Everything guessed rather than confirmed. This list exists so the client can correct it cheaply.]
```

---

## `01-information-architecture.md`

```markdown
# Information Architecture

## Sitemap
- / (Home)
  - /product
  - /pricing
  - /customers
  - /blog → /blog/[slug]
  - /contact
- /app (authenticated)
  - /app/dashboard …

## Primary flows
### Flow 1 — [task name]
Entry → step → step → success state
- Friction points: …
- Design response: …

## Page inventory
| Page | Purpose | Primary action | Priority |
|---|---|---|---|
| Home | | | P0 |

## Content model
| Entity | Fields | Notes |
|---|---|---|
| Post | title, slug, excerpt, cover(16:9), author, publishedAt, tags[], body | excerpt max 160 chars |
```

---

## `02-design-tokens.md` + `tokens/tokens.json` + `tokens/tokens.css`

Document each token group with the value **and** the reason. Start from `assets/tokens.template.json` and `assets/tokens.template.css`.

```markdown
# Design Tokens

## Color — light
| Token | Value | Use |
|---|---|---|
| --bg-canvas | #F8FAFC | Page background |
| --bg-surface | #FFFFFF | Cards, panels |
| --text-primary | #0F172A | Headings, body |
| --accent | #4F46E5 | Primary CTA only |
…
## Color — dark
[Same table. Base #121212–#1E1E1E, elevation by lightness, accents desaturated ~20 points.]

## Typography
| Token | Font / size / line-height / weight / tracking | Use |
|---|---|---|
| --text-display | Fraunces 76/1.05/700/-0.03em | Hero headline only |

## Spacing, radius, elevation, motion
[Scales, with the single sentence of reasoning each.]
```

---

## `03-typography-and-color.md`

```markdown
# Typography and Color Rationale

## Font pairing
- Display: [font] — chosen because [ties to adjective / audience]
- Body: [font] — chosen for legibility at 16px in long paragraphs
- Mono: [font, if any] — data and code only
- Loading: self-hosted variable woff2, `font-display: swap`, preload [one file]

## Type scale
[Table of roles → size/line-height/weight, mobile and desktop, with clamp() values]

## Palette rationale
[Why this hue family, tied to audience and category. What the accent is reserved for.]

## Contrast results (measured, both themes)
| Foreground | Background | Ratio | Required | Pass |
|---|---|---|---|---|
| --text-primary | --bg-canvas | 16.1:1 | 4.5 | ✅ |
| --accent-fg | --accent | 5.9:1 | 4.5 | ✅ |
| --text-muted | --bg-surface | 4.6:1 | 4.5 | ✅ |
[Every pairing that will actually appear. Fix anything that fails before this document is signed off.]
```

---

## `04-components.md`

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
  | focus-visible | 2px outline --accent, 2px offset, ≥3:1 against background |
  | active | translateY(0), scale .99 |
  | disabled | bg --border-strong, text --text-muted, cursor not-allowed, no hover |
  | loading | spinner replaces label, width locked, aria-busy="true" |
- **Accessibility:** real `<button>`; icon-only requires `aria-label`; never disabled as the only error signal
- **Don't:** more than one primary button per view
```

Cover at minimum: button, link, input, select, checkbox/radio, toggle, card, badge, tooltip, modal/dialog, drawer, toast, tabs, accordion, table, pagination, nav bar, footer, skeleton, empty state, error state.

---

## `05-page-blueprints.md`

Section-by-section, in order, with the actual content intent — not lorem ipsum.

```markdown
## Home

**Goal:** [one sentence] · **Primary action:** [CTA] · **Above the fold on mobile:** headline, subhead, primary CTA

### 1. Nav (sticky, 64px, shrinks to 56px past 100px scroll)
Logo · Product · Pricing · Customers · Docs · [Sign in] [Start free →]

### 2. Hero
- Layout: two-column desktop (7/5), stacked mobile
- H1: ≤12 words, states the outcome. Draft: "…"
- Subhead: one sentence, ≤22 words
- CTA primary: "Start free trial" · secondary: "See a 2-min demo"
- Visual: real product screenshot, 16:10, subtle drop shadow, no device frame
- Motion: headline word-mask reveal (see MOT-01), screenshot fades + rises 16px, 100ms after
- Spacing: 96px top / 128px bottom desktop; 56/72 mobile

### 3. Logo bar …
### 4. Feature 1 — [persona task it serves] …
### 5. …
### 9. Footer

**Mobile changes:** [what reorders, what collapses, what is dropped entirely]
**Empty/edge cases:** [long headline, no logo permissions, no testimonials yet]
```

---

## `06-motion-spec.md`

Every animation gets an ID so the build plan and QA can reference it.

```markdown
# Motion Spec — Intensity level 2

Global tokens: see 02-design-tokens.md. All motion is disabled to end-state under `prefers-reduced-motion: reduce`.

| ID | Element | Trigger | Property | Duration / easing | Library | Reduced-motion |
|---|---|---|---|---|---|---|
| MOT-01 | Hero H1 words | Page load | yPercent 110→0, mask | 800ms / power4.out, 30ms stagger | GSAP SplitText | Static, fully visible |
| MOT-02 | Hero screenshot | Load +100ms | opacity 0→1, y 16→0 | 500ms / --ease-out | CSS | Static |
| MOT-03 | Section reveals | Scroll, top 85%, once | opacity 0→1, y 24→0 | 600ms / power3.out | GSAP ScrollTrigger | Static |
| MOT-04 | Feature cards | In view, once | as MOT-03, 60ms stagger, max 6 | 500ms | Motion variants | Static |
| MOT-05 | Buttons | Hover / focus | y -2px, bg shift | 150ms / --ease-out | CSS | Color only, no move |
| MOT-06 | Route change | Navigation | opacity + y 8px | 250ms | Motion AnimatePresence | Instant swap |
| MOT-07 | Stat counters | In view, once | 0→value | 1600ms | GSAP | Final value shown |

## Rules for this project
- LCP element (hero H1) is never hidden or animated from opacity 0 in CSS.
- No animation repeats on scroll-up.
- Total animation JS budget: [X]KB gzip.
```

---

## `07-accessibility.md`

Copy the gate from `07-craft-and-accessibility.md`, then mark each item with status, the person responsible, and any deliberate exception with its justification. An empty checklist is not a pass.

---

## `08-build-plan.md`

```markdown
# Build Plan

## Order
1. Tokens → `app/globals.css` + `tailwind.config.ts`
2. Primitives: Button, Input, Card, Badge, Skeleton
3. Layout: Nav, Footer, Section wrapper, Container
4. Sections in blueprint order
5. Pages assembled from sections
6. Motion layer (MOT-01…07) behind reduced-motion guards
7. 3D / heavy assets, lazy-loaded, with poster fallbacks
8. Accessibility pass, then performance pass

## File structure
[Proposed tree for the chosen framework]

## Acceptance criteria per page
- [ ] Renders correctly at 320 / 375 / 768 / 1280 / 1440 / 1920
- [ ] Usable at 200% zoom
- [ ] Keyboard-only walkthrough of the primary flow completes
- [ ] Contrast spot-checked in both themes
- [ ] Lighthouse mobile ≥90 performance, 100 accessibility
- [ ] Every animation matches its MOT-xx spec and its reduced-motion fallback works
- [ ] No console errors; no layout shift on load
```

---

## Chat-only fallback

Without a filesystem, deliver the same eight sections as headings in one document, in the same order, with the same specificity. Do not shorten the tokens or the motion table — those are the parts that get copied into code.

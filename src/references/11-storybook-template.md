# The Design Storybook — templates

**Path:** `src/references/11-storybook-template.md`

Write these files into `design/`. They have two readers: the human who must agree with the decisions, and the coding agent that will build from them. **Every statement is specific enough to implement without a follow-up question, and every major decision carries a trace tag** — `[USER]` `[TASK]` `[CONTENT]` `[BUSINESS]` `[BRAND]` `[CONTEXT]` `[A11Y]` — with one line of reasoning.

The test for each file: hand it to an agent with no memory of this conversation. Could it build what you intended, and could it say *why* each decision was made? If not, the missing information is what is wrong with the file.

Every value shown below in `[brackets]` is a placeholder. This file carries no example colors, fonts, or copy on purpose; examples become defaults.

```
design/
├── 00-brief.md
├── 01-direction.md
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

**Context profile:** [novice|expert] · [casual|professional] · [occasional|frequent] ·
[informational|transactional] · [simple|complex] · [low|high-risk] · [exploratory|task-driven] ·
[conservative|expressive] · [friendly|authoritative] · [mass|premium] · [playful|serious] ·
[text|image|product|data|interaction]-led · [mobile|desktop]-first, [touch|keyboard|cross]

## Surfaces
| Surface | Type | Primary user | Primary action |
|---|---|---|---|
| [Home page] | marketing | | |
| [App console] | product | | |

## What this is
[One paragraph a stranger would understand: what it does, who it serves, what success looks like.]

## What makes this different
[One sentence a direct competitor could NOT write about their own product.]

## Users
### Primary persona: "[Name], the [role in five words]"
- **Who:** expertise, frequency, role, device split with a number, abilities and constraints
- **Context:** when, where, on what, in what state of attention or stress
- **Jobs to be done:** three, in their words
- **Top tasks:** three verbs, each with frequency (daily / weekly / occasional / once)
- **Motivations:** what they gain
- **Pain points:** what fails them today, specifically
- **Objections:** what stops them acting
- **Trust signals that matter:** what makes them believe
- **Vocabulary they use:** their words for the problem — governs the copy
- **Design implications:** what each line forces, with tags

### Secondary persona: "[Name]"
[Same shape, shorter. What they need that the primary user does not.]

## Business objective
- **Measurable outcome:** [sign-up rate / task time / support volume / retention / compliance]
- **Primary action:** [the one thing a first-time user should do]
- **Secondary action:** [what a not-yet-ready user should do]
- **Must not be sacrificed:** [what the business will not trade for the outcome]

## Trust and risk
- **If it goes wrong for the user:** [money / health / legal / data / reputation / time]
- **Regulatory or evidence requirements:** [ ]
- **Must be visible before commitment:** [ ]

## Content inventory
| Content | Exists? | Quality | Notes |
|---|---|---|---|
| Copy | | | |
| Photography / product visuals | | | |
| Evidence (customers, numbers, credentials) with permission | | | |
| Data (volume, entities) | | | |
**Content type:** [text|image|product|data|interaction]-led — [why]
**Missing at launch and what that changes:** [ ]

## Brand
- **Axes:** conservative ↔ expressive [position]; friendly ↔ authoritative [position];
  mass ↔ premium [position]; playful ↔ serious [position]
- **Fixed assets:** [logo, colors, fonts, guidelines]
- **Competitors:** [name — what they claim — what they look like]
- **Deliberately not:** [what this must not be confused with]
- **Reference mechanisms:** [reference — what it does that we want / what we are not taking]

## Constraints
| Area | Constraint |
|---|---|
| Stack | |
| Devices and network | |
| Accessibility | WCAG 2.2 AA + [legal obligation] + [known audience needs] |
| Performance | LCP <2.5s, CLS <0.1, INP <200ms on mid-range Android / 4G |
| Locale, language, RTL | |
| Forbidden | |

## Derived (not asked)
| Decision | Value | Trace |
|---|---|---|
| Theming | [one / two] | |
| Motion budget | [jobs licensed] | |
| 3D | [no / only if…] | |
| Density | [dense / comfortable / generous / toggle] | |

## Success metrics
[How we will know the design worked, with baselines if they exist.]

## Assumptions
| Assumption | What it affects | Confidence | Trace |
|---|---|---|---|
```

---

## `01-direction.md`

Written by `/ux-direction` before any tokens exist. Keep the rejected directions.

```markdown
# Direction — [Project name]

## Chosen: Direction [B] — "[Strategy name]"
Decided [date] by [who]. Rejected A and C — see below.

**Strategy in one line:** [what the user sees or does first, and why that wins here]

### Marketing surface record
| | |
|---|---|
| First screen | [primary message · visual · action · credibility signal] |
| Section order | [derived list from the decision journey, one line each with its row] |
| Content carrying the argument | [copy / product UI / photography / data / demo] |
| Density | [long argument / short page] — [journey length, commitment] |
| Brand expression | [where it deviates from category convention and why] |

### Product surface record
| | |
|---|---|
| Navigation model | [model] — [entities, frequency, device] |
| Home screen job | [overview / exceptions / task launcher / resume / feed] — [role, frequency] |
| Density | [dense / comfortable / toggle] — [frequency × expertise × volume] |
| Disclosure | [strategy] — [expertise range] |
| Input priority | [keyboard / pointer / touch] |
| State visibility | [strategy] — [risk, collaboration] |
| Action model | [inline / modal / page; undo / confirm] — [reversibility, frequency] |
| Path length, top 3 tasks | [n / n / n] against budget |

### Visual consequences (each with a tag)
| Decision | Value | Trace |
|---|---|---|
| Type: faces by property | [property → face] | |
| Type: ratio from reading context | [ratio] | |
| Color: layers and action color | [ ] | |
| Color: neutral tint | [tinted / neutral] | |
| Surfaces: radius, elevation, borders | [ ] | |
| Composition: grid, balance | [ ] | |
| Motion budget | [jobs] | |

**Why this fits:** [persona, frequency, top task]
**What it costs:** [what this direction cannot do]

## Voice
- **[Axis position]** — [what it means in words] (four lines, from `10-copy-voice.md`)

## Validation
- Interchangeability: could this be reused for an unrelated company changing only logo, headline, accent, images? **No, because** [ ]
- Opposite user: [two axes] would change [ ]
- Five most consequential decisions and tags: [ ]
- Specificity pre-score: [n]/100; lowest dimension: [ ]

## Rejected directions
### Direction A — "[Strategy]" — [one line]. Rejected because [ ].
### Direction C — "[Strategy]" — [one line]. Rejected because [ ].
```

---

## `02-information-architecture.md`

```markdown
# Information Architecture

## Marketing surfaces
### Sitemap
- / ([Home])
  - /[page]
[Nothing deeper than three levels.]

### Message hierarchy
| Item | Content | Source |
|---|---|---|
| Primary message | | |
| Supporting messages | | |
| Evidence | | |
| Trust signals | | |
| Objections | | |
| Information dependencies | | |
| Primary action / secondary action | | |
| Decision journey | | |

### Content model
| Entity | Fields | Notes |
|---|---|---|
[Define fields BEFORE designing the component that displays them.]

### Navigation
- **Primary:** [destinations and why]  ·  **Secondary:** [footer, in-page]
- The primary action is never more than one action from any entry point.

## Product surfaces
### Entity model
| Entity | Count | Relationships | States |
|---|---|---|---|

### Navigation model
[model] — [trace]. Command surface: [yes / no] — [trace].

### Home screen job
[overview / exceptions / task launcher / resume / feed] — [trace]

### Screen inventory
| Screen | Purpose | Primary action | Persona | Priority |
|---|---|---|---|---|

### Flows — one per top task
#### Flow 1 — [task], [frequency], budget [n] actions
Entry → [step] → [step] → outcome. **Path length:** [n]. **Drop-off risks:** [ ]. **Design responses:** [ ].

### Interaction model
| Item | Decision | Trace |
|---|---|---|
| Input model | | |
| Disclosure tiers | | |
| Feedback tiers | | |
| State visibility | | |
| Error prevention | | |
| Destructive-action model | | |
| Permission-aware UI | | |
| Validation strategy | | |

## URL and state
[Which view state lives in the URL: filters, sort, pagination, tabs, theme.]
```

---

## `03-design-tokens.md` + `tokens/tokens.css` + `tokens/tokens.json`

Start from `assets/tokens.template.css` and `tokens.template.json`, which ship magenta and lime tripwires. **If those colors render anywhere, the tokens were never chosen.**

```markdown
# Design Tokens

**Tiering:** [flat semantic / primitive→semantic / primitive→semantic→component] — [why this tier count and no more]
**Themes:** [one / two] — [trace]

## Color — [theme name]
| Layer | Token | Value | Use | Trace |
|---|---|---|---|---|
| Surface | --bg-canvas | [hex] | Page background | |
| Text | --text-primary | [hex] | | |
| Action | --accent | [hex] | Primary action and active states | |
| Semantic | --success / --warning / --danger / --info | | | |
| State | --state-selected / --focus-ring | | | |
| Data (if data-led) | --data-positive / --data-negative / --data-1…n | | Never sharing a hue with brand or semantic | |

## Color — [second theme, if any]
[Same table. Designed independently. State what changed and why.]

## Typography
| Token | Font / size / line-height / weight / tracking | Use | Trace |
|---|---|---|---|

## Spacing, radius, elevation, layout, motion
[Each scale with one line of reasoning and a tag.]

## Framework mapping
[Tailwind v4 @theme block, v3 theme.extend, or the equivalent.]

## Pre-paint theme script
[Only if a second theme exists.]
```

---

## `04-typography-and-color.md`

```markdown
# Typography and Color Rationale

## Reading context
[glance / scan / read] · content length [ ] · density [ ] · platform [ ] · languages and scripts [ ]

## Faces
- **Body:** [face] — chosen for [properties: x-height, aperture, width, script coverage, tabular figures] `[tag]`
- **Display (if any):** [face] — chosen because [the headline must carry voice; property] `[tag]`
- **Mono (if any):** [face] — code and data only
- **Number of faces:** [1 / 2 / 3] — [why]
- **Ubiquity check:** [is this face the category's current default? if so, what else is specific]
- **Rejected:** [what was considered and why it lost]
- **Loading:** self-hosted variable woff2, `font-display: swap`, one preload, fallback with `size-adjust`

## Type scale
**Ratio:** [n] from reading context `[tag]`. **Display : body:** [n]× — a consequence, tested with the longest real headline at 375px.
| Role | Mobile | Desktop | clamp() | Line-height | Weight | Tracking |
|---|---|---|---|---|---|---|

## Color architecture
- **Brand hue(s):** [from assets / differentiation / cultural context] `[tag]`
- **Action color:** [distinct from state and data because …]
- **Neutral tint:** [tinted / neutral] `[tag]`
- **Distribution rule:** [single-action / multi-state / image-led]
- **Second theme:** [warranted because … / not shipped because …]

## Contrast results (measured, every theme)
| Foreground | Background | Ratio | Required | Pass |
|---|---|---|---|---|
| --text-primary | --bg-canvas | [n.n]:1 | 4.5 | |
| --accent-fg | --accent | [n.n]:1 | 4.5 | |
| --focus-ring | [every surface it appears on] | [n.n]:1 | 3 | |
[Every pairing that will appear. Fix failures before sign-off.]
```

---

## `05-components.md`

One entry per component. A state missing here becomes a bug later.

```markdown
### [Component]
- **Variants:** [by meaning: primary, secondary, destructive]
- **Sizes:** [ ] (touch target ≥44px via padding; pointer ≥24px)
- **Anatomy:** [parts, gaps, tokens]
- **States:**
  | State | Spec |
  |---|---|
  | default | |
  | hover (pointer only) | |
  | focus-visible | ≥3:1 ring, never obscured |
  | active | |
  | selected (where relevant) | distinct from hover |
  | disabled | with a reason exposed where permissions apply |
  | loading | width locked, `aria-busy` |
  | error | field + problem + fix |
  | empty | |
- **Keyboard:** [keys and focus behavior]
- **Responsive:** [what changes, from the reflow table]
- **Accessibility:** [name, role, state exposure; semantic element]
- **Don't:** [one line]
- **Trace:** [why this component exists and looks this way]
```

Cover at minimum: button, link, input, textarea, select, checkbox/radio, toggle, card, badge, avatar, tooltip, popover, dialog, drawer, toast, tabs, accordion, table, pagination, breadcrumb, nav, footer, skeleton, empty state, error state.

---

## `06-page-blueprints.md`

The largest file, and the one an agent leans on hardest. **Surface-aware:** marketing pages and product screens use different shapes.

### Marketing page

```markdown
## [Page]  — marketing surface

**Goal:** [one sentence] · **Primary action:** [one] · **Secondary action:** [one]
**First screen at 375×667:** primary message, primary action, credibility signal
**Message hierarchy:** see 02-information-architecture.md
**Derived order:**
1. [belief / objection] → section [n] — [reason]
2. …
**Weights → spacing:** [section n heavy, section m tight …]

### 1. [Section] — option "[name]" `[tag]`
- **Row served:** [n]
- **Layout:** [columns, alignment, balance]
- **Content:** [real draft copy: heading, body, action labels]
- **Visual:** [what, aspect, treatment; or "none — type-led"] `[CONTENT]`
- **Reflow:** [reflows / stacks (order) / stays horizontal / scrolls / disappears (to where) / changes priority / sticky / changes model]
- **Motion:** [MOT-xx or none]
- **States:** [if data-driven]

### n. Footer

**Edge cases:** longest real headline [n chars] · no evidence yet · no imagery · slow network
```

### Product screen

```markdown
## [Screen]  — product surface

**Job:** [the one thing this screen is for] · **Primary action:** [one]
**Persona and frequency:** [ ] · **Path from home:** [n] actions (budget [n])
**Density:** [dense / comfortable / generous] `[USER][CONTENT]`
**Navigation state:** [what is active, breadcrumb, title]

### Regions
| Region | Contains | Priority | Reflow | Keyboard |
|---|---|---|---|---|
| [header] | | | | |
| [primary list / form / chart] | | | | |
| [detail / secondary] | | | | |

### States (every data view)
| State | Copy | Action |
|---|---|---|
| Empty, first use | | |
| Empty, no results | | |
| Loading | | |
| Error | | |
| Partial / stale | | |

### Actions
| Action | Feedback tier | Destructive model | Permission behavior |
|---|---|---|---|

**Motion:** [MOT-xx by job, or none]
**Edge cases:** longest name · 10k rows · zero permissions · offline
```

Rules for every page or screen:
- Real draft copy in every slot, per `10-copy-voice.md`. Unverifiable content is a marked slot.
- Marketing: every section maps to a row of the derived order. Product: every region maps to the screen's job or a top task.
- A reflow decision per section or region. "Stacks" alone is not a decision.

---

## `07-motion-spec.md`

```markdown
# Motion Spec

**Budget from context profile:** licensed jobs [ ]; forbidden [ ] `[USER][BRAND][CONTEXT]`
Tokens: see 03-design-tokens.md. Everything reduces to its end state under `prefers-reduced-motion`.

| ID | Element | Job | Trigger | Property | Duration / easing | Library | Reduced-motion |
|---|---|---|---|---|---|---|---|
| MOT-01 | [LCP element] | — | — | never animated | — | — | — |
| MOT-02 | [button] | feedback | press | scale .98 | 100ms / --ease-out | CSS | none needed |
| MOT-03 | [dialog] | causality | open from trigger | opacity, scale .96→1 | 200ms / --ease-out | [ ] | instant |
| … | | | | | | | |

## Rules for this project
- LCP element ([name]) is never hidden or animated in
- No animation repeats on scroll-up
- Library split: [ ] — justified because [ ]
- Animation JS budget: [n]KB gzip
- Every row names its job in the Job column; rows without one were cut
```

---

## `08-accessibility.md`

Copy the WCAG 2.2 AA gate from `05-responsive-accessibility.md` §2, then mark each item with **status, evidence, and owner**, plus any deliberate exception with its justification. An empty checklist is not a pass.

```markdown
# Accessibility

## Decisions accessibility changed before the gate
| Stage | Decision | Trace |
|---|---|---|
| IA | | [A11Y] |
| Interaction | | [A11Y] |
| Visual | | [A11Y] |
| Motion | | [A11Y] |

## WCAG 2.2 AA gate
| Item | Status | Evidence | Owner |
|---|---|---|---|
| Text contrast ≥4.5:1, every theme | | 04-typography-and-color.md table | |
| Focus not obscured (2.4.11) | | | |
| Target size ≥24px (2.5.8) | | | |
| No redundant entry (3.3.7) | | | |
| Accessible authentication (3.3.8) | | | |
| … | | | |

## Cognitive accessibility
[decisions per screen, consistency, plain language, memory load, time, error tolerance]

## Deliberate exceptions
| Item | Justification | Approved by |
|---|---|---|
```

---

## `09-build-plan.md`

```markdown
# Build Plan

## Order
1. Tokens → [globals] + framework mapping
2. Primitives: Button, Input, Card, Badge, Skeleton
3. Layout: shell or nav, footer, containers
4. Sections or screens in blueprint order
5. Pages assembled
6. Motion layer (MOT-xx) behind reduced-motion guards
7. 3D / heavy assets, lazy-loaded, poster fallbacks
8. Accessibility pass, then performance pass

## File structure
[Proposed tree for the chosen framework]

## Acceptance criteria per page or screen
- [ ] Renders at 320 / 375 / 768 / 1280 / 1440 / 1920
- [ ] Usable at 200% zoom; text spacing overrides survive
- [ ] Keyboard-only walkthrough of the primary flow completes; focus never obscured
- [ ] Contrast spot-checked in every theme
- [ ] Targets ≥24px everywhere, ≥44px on touch
- [ ] Lighthouse mobile ≥90 performance, 100 accessibility
- [ ] Every animation matches its MOT-xx row; reduced-motion works
- [ ] No console errors; no layout shift on load
- [ ] Five states exist for every data view

## Fidelity criteria (drift check, from 13-validation.md §6)
- [ ] Every tagged decision in 01-direction.md is present, or its replacement is recorded with a tag
- [ ] No component-library default survived where the token system specified otherwise
- [ ] Density measured on the rendered page matches the profile
- [ ] Reflow decisions implemented per section or region
- [ ] No motion outside the spec; nothing entrance-animates on a product surface
- [ ] Specificity Score within 10 points of the spec
- [ ] Interchangeability question re-answered on the build: still no
```

---

## Chat-only fallback

Without a filesystem, deliver the same ten sections as headings in one document, in the same order, with the same specificity. Do not shorten the tokens, the contrast table, the states tables, or the motion table — those are the parts that get copied into code.

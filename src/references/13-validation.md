# Validation — AI-Slop Detector 2.0, Design Specificity Score, sameness test

**Path:** `src/references/13-validation.md`

Loaded by `/ux-critique`, `/ux-direction`, the `/ux-spec` gate, and the `/ux-build` fidelity check. This file measures **specificity**, not conformance to a style. A beautiful design that could belong to anyone fails here.

---

## 1. AI-Slop Detector 2.0

### The primary question

**Could this interface be reused for an unrelated company by changing only the logo, headline, accent color, and images?**

Answer it honestly, then list which decisions would have to change for the answer to be *no*. Those are the untraced decisions. If nothing would have to change, the design is generic regardless of quality.

### Secondary tells

A tell is not a pattern. A tell is a pattern **without a trace** to USER, TASK, CONTENT, BUSINESS, BRAND, CONTEXT, or A11Y. Score each item as: traced (0), untraced (1), or absent (0). Report the count and the list of untraced items.

**Marketing surfaces**

| Tell | Untraced when |
|---|---|
| Hero structure (centered, split, editorial, product-first) | Chosen without reference to whether a visual carries the argument and what the first belief is |
| Section order | Not derived from a written message hierarchy or decision journey |
| Feature presentation (cards, bento, alternating rows, list) | Chosen without reference to whether features are parallel, unequal, or sequential |
| Logo bar or testimonial block placement | Placed by convention rather than where the objection it answers occurs |
| Accent hue and count | Not traced to brand assets or to the number of meanings the surface must encode |
| Display face and type ratio | Not traced to brand expressiveness, content length, and reading context |
| Neutral tint (warm, cool, none) | Not traced to brand temperature and content type |
| Spacing rhythm (uniform or varied) | Not traced to section weight |
| Grid break, asymmetry, or signature element | Present without a stated focal purpose; or absent when brand memory is the business goal |
| Motion (reveal, stagger, parallax) | Not traced to reading pace, causality, or state; present on any repeated-use section |
| Surface effects (glass, aurora, grain, glow, gradient) | Not traced to brand expressiveness; contrast or performance cost not stated |
| CTA wording and repetition | Generic verb ("Get started"); repeated with different wording |
| Copy | Contains phrases from `10-copy-voice.md` tells; headline could be a competitor's |
| Evidence | Placeholder testimonials, unsourced numbers, unpermitted logos |
| Imagery | Stock that could be swapped for any other stock without loss |

**Product surfaces**

| Tell | Untraced when |
|---|---|
| Navigation model (sidebar, top tabs, bottom tabs, hub) | Not traced to entity count, task frequency, and device |
| Home screen content | A grid of KPI cards not traced to the one question the user starts with |
| Density | Not traced to frequency × expertise × volume; or marketing spacing on a daily-use screen |
| Table design | Missing sort direction, tabular numerals, sticky header, bulk selection, or row actions the tasks require |
| Search and filter | Filters not grouped by facet; state not in URL; no result count; no empty result design |
| Forms | Multi-column; placeholder-as-label; validation mid-keystroke; submit disabled as the only error signal |
| States | Any data view missing empty-first-use, empty-no-results, loading, error, or partial |
| Destructive actions | Confirm dialog as the only protection; no undo; Delete adjacent to Save |
| Keyboard | Focus order inherited from DOM accident; no shortcuts for daily tasks on keyboard-heavy surfaces |
| Permissions | UI identical across roles when roles differ; disabled controls with no explanation |
| Feedback | Actions without an assigned response tier; long operations without progress or background option |
| Motion | Scroll reveals, staggers, or entrance animations on any screen used more than once a day |
| Type | Display type above 2.5× body on a repeated-use screen without a stated reason |
| Color | State colors (selected, positive, negative, pending) sharing a hue with brand or with each other |
| Chrome | Marketing hero, section rhythm, or signature element inside the app |

**Both**

| Tell | Untraced when |
|---|---|
| Any decision | Its stated reason is "looks clean", "feels premium", "modern", or a style name |
| Accessibility | Contrast, target size, focus, zoom, or reduced motion first considered at the gate |
| Responsiveness | Mobile behavior described as "stacks" for every section |

### Reading the score

- **0–2 untraced:** specific; proceed.
- **3–5 untraced:** partially reasoned; fix the untraced items before presenting.
- **6+ untraced, or primary question answered *yes*:** generic. Return to the pipeline stage where reasoning stopped; do not patch visually.

---

## 2. Design Specificity Score (0–100)

Eleven dimensions. Score each 0–10 with the criteria below, weight, and sum. Beautiful-but-generic designs score high on hierarchy, usability, and accessibility and fail on the first five.

| Dimension | Weight | 0 | 5 | 10 |
|---|---|---|---|---|
| **Audience specificity** | 1.5 | Design would serve any audience | Serves the category's typical user | Serves *this* user's expertise, frequency, context, and abilities; the opposite user would need visible changes |
| **Product specificity** | 1.5 | Would work for any product in the category | Reflects the category's conventions correctly | Reflects *this* product's entities, risk level, and what it does differently |
| **Content specificity** | 1.5 | Layout built for content that does not exist; placeholders | Real copy in most slots | Structure follows the real content's hierarchy, volume, and gaps; missing content is honestly marked and changed the direction |
| **Brand specificity** | 1.0 | Style name or trend applied | Brand assets used correctly | Brand position on all four axes is legible without the logo; competitors named and avoided |
| **Interaction specificity** | 1.5 | Default interaction patterns | Conventions applied correctly | Input model, disclosure, feedback tiers, and destructive-action model are designed for this task frequency and risk |
| **Hierarchy** | 1.0 | Blur test shows one mass | Two stops | Three deliberate stops that match the content hierarchy |
| **Usability** | 1.0 | Top task path unclear | Top task reachable | Top tasks reachable within the path length their frequency allows; all states designed |
| **Accessibility** | 1.0 | Gate not run | Gate passes | Accessibility changed decisions at IA, interaction, visual, and motion stages, with evidence |
| **Responsiveness** | 0.5 | Desktop shrunk | Stacks sensibly | Per-section reflow decisions; priority and interaction model change where they should |
| **Credibility** | 0.5 | Fabricated or missing proof | Real proof present | Proof placed at the decision point; consequential actions state consequences; nothing invented |
| **Memorability** | 0.5 | Nothing describable afterward | One notable element | One idea tied to the product's subject matter that a competitor could not paste in — **only scored when the business goal needs recall**; otherwise award 10 for correctly having none |

Maximum raw = 115; report as `round(raw / 115 × 100)`.

**Thresholds**
- Storybook gate: ≥70 overall, and ≥5 on each of audience, product, content, brand, interaction individually.
- Build fidelity: score must not drop more than 10 points from spec to build.
- Critique headline: the lowest-scoring dimension is the first finding.

---

## 3. Cross-project sameness test

Run when changing the skill, or when a team has produced several projects and suspects drift. Full protocol with the twelve briefs: `docs/SAMENESS-TEST.md`.

**Briefs (fixed):** AI developer SaaS · Pakistani construction company · luxury architecture studio · hospital patient portal · fintech dashboard · children's education app · enterprise document management system · fashion e-commerce · photographer portfolio · government services portal · restaurant website · productivity mobile app.

**Compare across all twelve:** first-screen or hero structure · typography (faces, ratio, measure) · color architecture (brand count, accent count, neutral tint, state/data palettes) · grid and layout · card usage · navigation model · spacing and density · CTA pattern · section or screen order · motion · component style (radius, elevation, borders).

**Pass criterion:** any attribute shared by more than four of the twelve must trace to a shared context factor across exactly those briefs (for example, "dense tables" shared by fintech dashboard, enterprise documents, and developer SaaS traces to *frequent + expert + data-led*). An attribute shared by unrelated briefs with no shared factor is a house style. Fix the rule that produced it, not the outputs.

---

## 4. Vague-prompt test

Feed each phrase with a minimal brief. Pass if the response resolves the phrase through the context model (asks or infers audience, category, and what the phrase signals *here*) and does not emit the cliché in the right-hand column of the table in `00-design-reasoning.md`.

Phrases: "Make it premium" · "Build a modern SaaS site" · "Make it futuristic" · "Use shadcn" · "Use bento" · "Make it like Linear" · "Create a modern dashboard".

---

## 5. Critique method

For `/ux-critique`. Never interview; the artifact is in front of you.

1. **Identify the surface.** Marketing, product, or hybrid. Load the matching tell list. Critiquing a settings page against marketing tells is itself a failure.
2. **Primary question.** Answer the interchangeability question and list the untraced decisions.
3. **Blur test.** What survives at 8px? If one mass, hierarchy is the root finding and nothing else matters until it is fixed.
4. **Specificity score.** Eleven dimensions; the lowest is the headline.
5. **What works** — specific, not polite.
6. **What breaks**, ordered by user impact: hierarchy → task path → states → contrast and a11y → density vs frequency → alignment and grouping → color architecture → type system → responsiveness → copy → motion → surface effects.
7. **What is missing** — states, evidence, reflow decisions, keyboard model, consequence statements.
8. **Fix list** — numbered, with concrete values or code and effort (S/M/L). "Increase whitespace" is not a fix; "section 3 padding 96→64px so it reads as support for section 2, which is the claim it proves" is.

Rules:
- Separate **broken** (accessibility failures, unusable states, unreachable tasks) from **weak** (generic, untraced). Both matter; they have different urgency.
- If the design is conventional *and convention is correct for this user* (high-trust, novice, occasional, high-frequency operational), say so and critique execution, not convention. Familiarity is not a defect.
- If the design is expressive *and the surface is repeated-use or high-risk*, that is a finding: the brand won an argument it should have lost.
- Lead with the single highest-leverage change in one line. Most people act on one thing.

---

## 6. Build fidelity check

For `/ux-build`. Drift toward the probable happens during implementation even when tokens are followed.

- [ ] Every decision tagged in `01-direction.md` is present in the build, or its replacement is recorded with a new tag
- [ ] Specificity score on the rendered output is within 10 points of the spec
- [ ] No component-library default (radius, shadow, font, color) survived where the token system specified otherwise
- [ ] Density matches the context profile, measured: rows visible per viewport on the primary table, or words visible per screen on the primary reading surface
- [ ] Every reflow decision in the blueprint is implemented, not just "stacks"
- [ ] No motion exists that is not in the motion spec
- [ ] Interchangeability question re-answered on the built product: still *no*

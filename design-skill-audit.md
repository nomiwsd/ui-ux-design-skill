# Design Skill Audit — `uiux-storybook-architect` v2.0.2

Audit date: 2026-09-07. Scope: every file in the repository and the published npm tarball (50 files, identical to `src/`). No files were modified before this document was written.

---

## 1. Executive diagnosis

The skill fixed the first-generation problem (indigo, Inter, centered hero, three cards) by building a second-generation template and calling it "anti-slop." Every always-loaded file now carries a positive aesthetic prescription — one accent under 10 percent, type ratio past 3.5×, tinted neutrals, one deliberate grid break, hairline rules, uneven section rhythm, a mandatory signature element — and the worked examples repeat one specific look (warm paper `#FAF8F3`, ink `#1A1917`, burnt-orange signal `#C2410C`, Swiss editorial grid with a margin rail) across four files. An agent following the skill faithfully will produce that look for a hospital, a construction firm, and a children's app alike.

Three structural causes sit underneath the aesthetic one:

1. **Visual direction is decided before user, task, content, and business reasoning.** The workflow puts art direction at Phase 2 and information architecture at Phase 3. The three "directions" differ on six visual axes (layout logic, type, palette, density, surface, signature) and on nothing strategic.
2. **Marketing-page logic loads for every product type.** The always-loaded anti-slop file is 90 percent about heroes, feature cards, logo bars, CTA bands, and section rhythm. Dashboards, enterprise apps, and mobile apps receive the same fork, the same quality gate, and the same critique detector.
3. **Rules are absolute, not conditional.** The skill has one lever: ban. Bans are overridable "with a written reason," but the reason is judged against a checklist that treats centered layouts, cards, equal columns, and small type ratios as tells. The result is a bias, not a judgment.

The skill's own maintainers half-saw this. The eject message in `bin/cli.js:441` calls `04-visual-styles.md` "your house style." The file manifest warns that "an agent holding 25 files skims them and falls back on its priors." The section library says "never take variant 1 by default," which mechanically selects variant 2 everywhere.

What is genuinely strong — the drafted-option interview, the brief-as-memory rule, never inventing evidence, token-first build, the motion spec format, the accessibility gate, the copy tells, the implementation recipes — should be kept. What needs rebuilding is the reasoning layer between brief and visual output.

---

## 2. Current architecture

### 2.1 Files

| Layer | Files | Words | Role |
|---|---|---|---|
| Entry | `SKILL.md`, `AGENTS.md`, `agents/*` | 2,700 | Router, operating rules, defaults table, quality gate |
| Always-loaded reference | `references/00-anti-slop.md` | 1,498 | Ban list, divergence law, signature element, premium formula, self-check |
| Conditional references | `01`–`17` (17 files) | 22,000 | Discovery, foundations, type/color, styles, category patterns, age, craft/a11y, motion ×4, templates, handoff, AI, composition, copy, section library |
| Blueprints | `blueprints/*` (8 files) | 5,900 | Per-category page inventories |
| Commands | `commands/ux-*.md` (8) | 5,500 | Per-phase instructions naming which references to load |
| Assets | tokens CSS/JSON, motion CSS | 1,650 | Tripwire token templates, JS-free motion snippets |
| Docs | 3 files | 2,300 | Rationale, manifest, workflow |
| CLI + tests | `bin/cli.js`, `test/cli.test.js` | — | Multi-IDE installer; 5 install-integrity tests |

Total: 58 tracked files, 39,816 words in `src/`.

### 2.2 What actually loads, per scenario

Traced from `SKILL.md` Phase table (L61–79), each command's "Read" lines, and `docs/FILE-MANIFEST.md`.

| Scenario | Loads unconditionally | Loads via command chain | Never loads but is needed |
|---|---|---|---|
| **Landing page** (new) | SKILL, AGENTS, `00-anti-slop` | discover→`01`; direction→`00,15,04,03`; spec all→`03,15,02,05,12,07,17,bp/00,bp/landing,16,06,08`; copy→`16,17`; motion→`08`+recipe; build→`13` | `02-foundations` is not read at direction time, so Gestalt/hierarchy reasoning never informs the fork |
| **SaaS site** | same | same, `bp/saas` | same |
| **Dashboard** | same — including the marketing ban list and "premium is subtraction, then one asymmetry" | same fork with the same six visual axes; `bp/app-dashboard` only under `/ux-spec pages` | Any product-UX reasoning file (none exists); workflow, permission, bulk-action, validation, keyboard depth |
| **Mobile app** | same | no blueprint exists; `05` §Mobile is six bullets, loaded only under `/ux-spec ia` | Platform conventions, gesture model, navigation patterns, thumb-zone layout |
| **E-commerce** | same | `bp/ecommerce` | Discovery/search/filter depth lives only in `17` §7 |
| **Portfolio** | same | `bp/portfolio-agency` | — (adequate) |
| **Redesign** | same | Full interview per SKILL L45; direction treats existing as "Direction A" | No audit-before-interview step; critique is optional |
| **Critique** | SKILL, `00` | `15,17,07,02` | Product-UX critique criteria; 18-tell detector is marketing-only |
| **Design system** | SKILL, `00` | `/ux-spec tokens`/`components` → `03`, `12`, `07` | Token tiering, component API reasoning, governance; no blueprint |

### 2.3 The reasoning order the skill enforces

```
Phase 1 Discovery → Phase 2 ART DIRECTION (visual) → Phase 3 Foundations + IA → Phase 4 Type/Color → Phase 5 Patterns → ...
```

Palette temperature, type ratio, surface treatment, and layout logic are chosen in Phase 2. Sitemap, flows, content model, and the belief sequence are Phase 3–5. Visual precedes structure.

---

## 3. Strengths (preserve these)

| Strength | Where | Why it matters |
|---|---|---|
| Drafted-option interview: agent proposes 3–4 answers with consequences, user replies `1b, 2 rec` | `01` L9–31, `ux-discover` | Removes the blank-page problem for non-designers; produces richer input than open questions |
| Brief-as-memory: interview once, never re-ask | SKILL L43–57 | Prevents the most common skill-usability failure |
| Never invent evidence | SKILL L37, `16` L75, `17` L104 | Ethical and legal; marked empty slots are honest |
| Tripwire token values (magenta/lime) | `assets/tokens.template.*` | A mechanism, not an instruction; genuinely prevents example-value shipping |
| Token-first build order; role-named tokens | `13`, `ux-build` | Consistency across agent-generated files |
| MOT-xx motion spec format with reduced-motion column | `12` L364–370 | Makes motion auditable |
| Accessibility gate grouped by POUR | `07` L61–92 | Solid WCAG 2.1 AA baseline |
| Copy tells list and length discipline per slot | `16` | Words are where AI output is identified first |
| Persona template with vocabulary line | `01` L98–107 | Vocabulary is what makes copy specific |
| Belief-sequence method (content → order) | `05` L110–123, `bp/00-index` | The right idea, under-applied |
| Product-UX fragments | `bp/app-dashboard`, `17` §9 | Correct instincts (density is correct, states are mandatory) |
| Implementation recipes (GSAP, Motion, R3F) | `09`, `10`, `11` | Accurate, current, well-scoped |
| CLI: zero-dep, six IDEs, additive rule files, `doctor` | `bin/cli.js` | Works; tests pass on 3 Node versions × 2 OSes |
| "Mechanism, not appearance" for reference sites | `00` L101–108 | Right framing for "make it like X" |

---

## 4. Critical weaknesses — major findings

Format: Severity · File · Problem · Evidence · Impact · Root cause · Recommended fix.

### F1 — CRITICAL — The anti-slop layer is a house style

**File:** `references/00-anti-slop.md`, `references/15-composition.md`, `SKILL.md`, `references/12-storybook-template.md`, `commands/ux-direction.md`

**Problem:** The skill replaces "the training-data average" with a specific alternative aesthetic and enforces it through defaults tables, checklists, and gates that load for every project.

**Evidence:**
- `00` L88–99, "Premium is subtraction, then one asymmetry": a six-step recipe — one accent, uneven whitespace, 5–6× type ratio, one grid break, real content, hairline rules at 6–10% opacity.
- `00` L120, self-check item 7: "Is there exactly one accent, and is it used on ~10% or less of the surface?" — asked of every project.
- `15` L84–91 composition checklist: "Display-to-body ratio is at least 3.5×", "exactly one deliberate grid break", "hairline rules where boxes were tempting", "at least one span is uneven".
- `15` L9–16 ratio table: 1.5–2× is "Undesigned, or a dashboard"; 4–6× is "Editorial, confident, premium".
- `15` L38: "Split content 7/5 or 8/4 rather than 6/6. Equal columns have no hierarchy."
- `15` L63: "The failure mode is the middle. Choose a pole."
- `SKILL.md` L115–132 defaults table: "push display-to-body past 3.5×", "Not Inter-as-display", "Neutrals: Always tinted toward the brand hue. Untinted gray is a tell", "Radius: One position, 3 steps".
- `SKILL.md` L163, L171 quality gate: signature element must appear in blueprints; section rhythm must be non-uniform — for every project.
- `12` L102–116 art-direction template: mandatory fields for "one signal at <10% coverage", "Section rhythm", "Grid: Deliberate break".
- `ux-direction` L40–65 worked example "Field Notes": warm paper `#FAF8F3`, ink `#1A1917`, `#C2410C` at <8%, Swiss editorial grid, 7-col measure + 3-col margin rail, hairline rules, 4.2× ratio, no cards, no shadows.
- `12` L208–209: the same `#FAF8F3` and `#C2410C` appear again as the token-doc example, with the reason "Warm paper base; direction is editorial, not clinical."
- The word "editorial" appears 40+ times across `src/`; "hairline" 10+; "asymmetr" 15+.

**Impact:** A hospital portal, a Pakistani construction company, and a children's education app all receive warm-tinted neutrals, one accent under 10%, a 4×+ type ratio, hairline rules, an asymmetric hero, and a "signature element." Unrelated products share a visual grammar. This is the exact failure the skill claims to prevent, one aesthetic generation later.

**Root cause:** The skill has one mechanism — prescription — and applies it in both directions. Bans remove the old default; positive rules install the new one. Nothing in the architecture makes a rule conditional on user, task, content, or brand.

**Recommended fix:** Replace every positive aesthetic rule in always-loaded files with a conditional principle in WHEN / CONSIDER / BECAUSE / VALIDATE form (see §6). Remove the "premium formula." Remove the mandatory signature element, grid break, and rhythm fields from the universal gate; keep them as marketing-site options. Replace the worked examples with three deliberately dissimilar examples, or with structural placeholders carrying no values.

---

### F2 — CRITICAL — Visual direction is chosen before user, task, content, and business reasoning

**File:** `SKILL.md` L61–79, `commands/ux-direction.md` L18–33, `references/00-anti-slop.md` L59–72

**Problem:** The mandatory fork between brief and spec generates three visual positions. Information architecture, flows, content model, and message hierarchy come later. The direction that is chosen constrains everything downstream, and it was chosen without knowing what the page has to say or what the app has to do.

**Evidence:**
- `SKILL.md` L62–66: Phase 2 "ART DIRECTION (3 options)" precedes Phase 3 "Foundations + IA."
- `ux-direction` L18: reads `00-anti-slop`, `15-composition`, `04-visual-styles`, `03-typography-color-theming` — four visual files, zero structural or content files.
- `ux-direction` L24–31 and `00` L63–72: the six axes on which directions must differ are layout logic, type strategy, palette temperature, density pole, surface treatment, signature element. All six are visual.
- `ux-direction` L33 validity test: "if the three could be swapped by changing CSS variables alone, they are one direction in three colors." The test for divergence is itself a CSS test.
- `ux-direction` L70: "Name real, specific fonts and hexes." Hex values are required before the content model exists.

**Impact:** Directions are skins. The user asked for exactly this to stop: "Bad directions: Editorial, Bento, Dark Premium." Nothing in the skill produces "Proof-first / Product-demo-first / Problem-first."

**Root cause:** The skill's theory of genericness is that the average *look* is the problem, so it forks the look. The actual problem is that the average *reasoning* produces the average look.

**Recommended fix:** Move direction generation after context, user, job, task, content, business goal, and trust reasoning. Directions differ first on information priority, persuasion or workflow strategy, content hierarchy, interaction approach, and density. Visual differences follow from those. For products (not marketing), directions differ on navigation model, workflow-first vs overview-first, and density, not on palette.

---

### F3 — CRITICAL — Marketing composition logic is applied to applications

**File:** `references/00-anti-slop.md` (always loaded), `SKILL.md` gate, `references/12-storybook-template.md`, `commands/ux-critique.md`

**Problem:** Every rule about heroes, section rhythm, grid breaks, signature elements, logo bars, and CTA bands loads for dashboards, enterprise systems, and mobile apps, and the gates require them.

**Evidence:**
- `SKILL.md` L19: "Read `references/00-anti-slop.md` before producing any visual output on any project." The file's ban list (L23–57) has 30 items; 26 concern marketing pages (hero, feature cards, section rhythm, logos, testimonials, CTA band, gradient text, hero illustration).
- `SKILL.md` L163: "The signature element is stated in one sentence and appears in the page blueprints" — required for a data table.
- `SKILL.md` L171: "Section rhythm is written out as a sequence and is not uniform" — an app shell has no section rhythm.
- `12` L114–116: the art-direction file every project writes has mandatory "Section rhythm" and "Grid: Deliberate break" lines.
- `ux-critique` L32: "Display type under 3× body size" is a slop tell. `bp/app-dashboard` L6 says dense is "correct, not a compromise." A correctly dense dashboard fails critique.
- `ux-critique` L38: "Every section content-centered with no asymmetry anywhere" is a tell. A settings page is centered content; it is now slop.
- `17-section-library` §9 (application sections) is 36 lines (L314–349). §1–8 (marketing) is 290 lines.
- `bp/app-dashboard` is 78 lines and loads only under `/ux-spec pages`. There is no product-UX reference for direction, IA, or interaction modeling.
- No mention anywhere of: permissions or roles, bulk-action design beyond one phrase, validation timing beyond "on blur", keyboard behavior beyond "shortcuts with `?`", destructive-action design beyond "type the name", data density decisions, or repeated-use ergonomics. `secondary user` appears zero times.

**Impact:** Fintech dashboards, hospital portals, and enterprise document systems get landing-page thinking. The user's brief names this explicitly: "Never apply landing-page composition logic to dashboards or enterprise applications."

**Root cause:** The skill grew from a marketing-site tool. Product UX was added as a blueprint, not as a reasoning branch.

**Recommended fix:** Fork the skill at the product-type decision. Marketing sites reason about positioning, persuasion, proof, trust, narrative, conversion. Applications reason about workflows, navigation, search, filters, forms, tables, bulk actions, permissions, loading, empty states, errors, validation, keyboard, destructive actions, data density, repeated usage. Separate reference files, separate direction axes, separate gates, separate critique criteria.

---

### F4 — CRITICAL — "Directions" are visually different, not strategically different

**File:** `references/00-anti-slop.md` L59–72, `commands/ux-direction.md`

**Problem:** Covered in F2 but deserves its own finding because `docs/ANTI-SLOP-RATIONALE.md` L23 calls divergence "the highest-leverage item in the skill." The leverage is real; the axes are wrong.

**Evidence:** `ux-direction` L61: "Differs from A and C on: layout, density, surface, signature." The example direction is named "Field Notes" — a visual name. No axis for "what does this audience need to believe first," "which task is the home screen for," "does proof lead or does the product demo lead," "is this a browse-first or search-first store."

**Impact:** Three skins over one strategy. The human picks a color temperature, not a design.

**Root cause:** Same as F2.

**Recommended fix:** Direction template requires: information priority (what is first, second, third), persuasion or workflow strategy, content hierarchy, interaction approach, density, then composition and brand expression as consequences. Name directions by strategy ("Proof-first", "Demo-first", "Problem-first", "Search-first", "Overview-first", "Task-first").

---

### F5 — HIGH — Example values repeated across files become the new defaults

**File:** `commands/ux-direction.md`, `references/12-storybook-template.md`, `references/15-composition.md`, `references/blueprints/00-index.md`, `commands/ux-spec.md`, `references/05-website-type-patterns.md`, `references/01-discovery-interview.md`

**Problem:** The skill's own Defense 3 (`ANTI-SLOP-RATIONALE` L25–29) says example values get copied. Then the skill repeats the same example values in multiple files.

**Evidence:**
- `#FAF8F3` / `#C2410C` / warm paper + editorial: `ux-direction` L49, `12` L208–209.
- Rhythm string `full-bleed → tight → tight → open → dense → open → tight → footer`: `15` L32, `12` L114, `12` L318, `bp/00-index` L40 and L58, `ux-spec` L64. Six occurrences.
- "Maya, the overloaded ops lead / exceptions / logistics": `01` L99–107, `05` L115–121, `bp/00-index` L28–34, `12` L326–332, `ux-direction` L55, `16` L37, `ux-copy` L33. Seven occurrences.
- `76/1.05/700/-0.03em`: `12` L218, `12` L249, `15` L18.
- "7-col measure + 3-col margin rail": `ux-direction` L47, `12` L104, `15` L48, `17` L161.
- Fade-up 16–24px, once, 60ms stagger: see F7.

**Impact:** An agent pattern-matches on repetition. Values that appear in three files read as canonical, regardless of "illustrative" labels.

**Root cause:** Templates were written once and copied into every file that referenced them.

**Recommended fix:** One worked example per concept, in one file, and where possible with structural placeholders instead of values. Where a value must be shown, show two deliberately dissimilar ones side by side.

---

### F6 — HIGH — "Never variant 1" mechanically produces a second template

**File:** `references/17-section-library.md`

**Problem:** Every section lists variants with the conventional one first and a rule against choosing it by default. The rule does not say "choose from context." It says "not the first one." Variant 2 becomes the default.

**Evidence:**
- L10: "Never take variant 1 by default. The first variant listed is usually the most conventional."
- L27: nav variant 1 "the default. Safe, invisible, forgettable."
- L76–77: hero variant 1 "Only choose it deliberately"; variant 2 "Split 7/5 or 8/4 — Asymmetric split beats 6/6."
- L156: feature variant 1 "the most template-identifying layout in existence. Use only when the three things are genuinely parallel and equally weighted, and even then reach for variant 2 first."
- L113–116: logo bar variant 1 static row; variant 2 "Two-row grid with a rule above and below — quieter, more editorial."
- L127: testimonials variant 1 "readable but forgettable"; variant 2 "One long-form quote at 24–32px."

**Impact:** Split 7/5 hero + alternating feature rows + rule-bounded logo grid + one large quote = the new page. The skill has replaced one template with a reliably selected alternative.

**Root cause:** Variant ordering encodes a preference. The selection rule references position, not context.

**Recommended fix:** Variants become unordered options each tagged with WHEN it fits. Remove positional language. Keep the failure-mode lists — they are the genuinely useful part.

---

### F7 — HIGH — Motion default is fade-up, and fade-up is banned

**File:** `references/00-anti-slop.md` L57, `references/08-motion-system.md`, `references/17-section-library.md`, `references/12-storybook-template.md`, `references/09-gsap-recipes.md`, `assets/motion-snippets.css`

**Problem:** Direct contradiction between the ban list and every implementation file.

**Evidence:**
- Ban: `00` L57 "Everything fading up 20px on scroll, in order, forever."
- Default: `08` L19 Level 2 "Tasteful (default)" contains "fade-up on scroll"; `08` L90 "Fade-up reveal on scroll | 16–24px travel, 400ms, once only."
- `17` L88 hero: "Animate the visual, 100ms after paint, 16px rise + fade, 500ms." `17` L165 features: "Fade + 24px rise, once, 60ms stagger, capped at 6."
- `12` L366–369 the MOT-xx template: MOT-02 "opacity 0→1, y 16→0", MOT-03 "Section reveals… y 24→0", MOT-04 "as MOT-03, 60ms stagger."
- `09` L65: "Reveal on scroll (the 80% case)."
- `motion-snippets.css` L4–24: `[data-reveal]` translates 24px and fades.
- `ux-motion` L32 has an anti-slop check against "every row is fade up 20px" — but the template it copies from is fade up 24px.

**Impact:** Every project ships scroll-reveal fade-up. Motion is decorative by default, not tied to feedback, causality, orientation, continuity, state, or storytelling.

**Root cause:** Motion is specified as an effects catalogue with intensity levels, not derived from purpose.

**Recommended fix:** Motion system organized by job (feedback, causality, orientation, continuity, state transition, storytelling). No default rows. Scroll-reveal becomes a technique with a WHEN clause (long narrative marketing page where progressive reveal supports reading order) and an explicit "not for" list (apps, dashboards, forms, any repeated-use surface).

---

### F8 — HIGH — Discovery asks questions that do not change decisions and skips ones that do

**File:** `references/01-discovery-interview.md`, `commands/ux-discover.md`

**Problem:** Sixteen questions in two rounds. Several are outputs of design reasoning masquerading as inputs. Several inputs that materially change design are absent.

**Evidence — asked but low-value:**
- Round 2 Q2 "Animation intensity (1–4)" (L64) — asked of a hospital portal. Intensity is a consequence of user, task, and trust, not a preference.
- Round 2 Q3 "3D / WebGL appetite" (L66) — asked of every project.
- Round 2 Q4 "Theming: Light / dark / both — Both is the modern default and effectively mandatory for developer-facing products" (L68) — the drafted answer is a trend statement.
- Round 1 Q6 adjective sets (L54): "calm / precise / expensive · loud / playful / young · warm / human / handmade · technical / dense / serious · quiet / editorial / considered." Two of five sets steer toward the house style.

**Evidence — missing:**
- Task frequency (daily / weekly / once). Determines whether recognition or efficiency wins. Zero mentions outside a GSAP `quickTo` comment.
- Expertise level (novice → expert). Determines density, disclosure, terminology. "Tech comfort" is a proxy for one dimension only.
- Secondary users. Zero mentions.
- Objections and motivations. "Objection" appears only in section-library and blueprints, never as a discovery input.
- Business objective beyond "primary conversion." Retention, support-cost reduction, compliance, and time-to-task are never asked.
- Competitor positioning as opposed to reference-site aesthetics (Q5 conflates them).
- Accessibility constraints of the actual audience (low vision, motor, cognitive, language) — only "legal requirement" is asked (Round 2 Q5).
- Context of use is a sub-clause of Q3.

**Impact:** The brief captures a look preference and a product category; it does not capture the inputs the pipeline needs.

**Root cause:** The question bank predates the pipeline. Questions were not derived from "which decision does this answer change."

**Recommended fix:** Rebuild the bank so each question names the decision it changes. Two tracks (marketing / product) with a shared core. Drop intensity, 3D, and theming as questions; derive them. Add frequency, expertise, secondary users, objections, business objective, competitor positioning, audience accessibility needs.

---

### F9 — HIGH — Section order is still pre-listed in canonical order

**File:** `references/blueprints/saas.md` L27–37, `references/blueprints/landing-page.md` L15–27

**Problem:** `05-website-type-patterns.md` L9 says "It is deliberately not a section order to output." The SaaS and landing blueprints then output one.

**Evidence:**
- `saas.md` L29–37: numbered 1–9: Hero → Differentiator → Evidence → Features → How it works → Integrations → Objection handling → Pricing → Final CTA + footer. Preceded by "chosen from the belief sequence, not all of them" — but the numbers and order are on the page.
- `landing-page.md` L19–27: numbered 1–9: Hero → Risk reducer → Problem → Mechanism → Evidence → Objections → Offer → Repeat CTA → Footer.
- `saas.md` L43: a full rhythm example string.

**Impact:** An agent reads a numbered list as an outline. The differentiator-after-hero slot is an improvement over logo-bar-after-hero, but it is still a fixed order that content did not produce.

**Root cause:** Category knowledge was written as a sequence because sequences are easy to write.

**Recommended fix:** Category files list *jobs the page must do* and *sections that can do them*, unordered. Order is produced by the content-first method: primary message, supporting message, evidence, trust signals, objections, information dependencies, primary action, secondary action, decision journey. Method lives in one place and is mandatory before any blueprint.

---

### F10 — HIGH — Reference loading puts house style in always-loaded files and reasoning in optional ones

**File:** `SKILL.md`, `docs/FILE-MANIFEST.md`, `commands/ux-spec.md` L28–35

**Problem:** The two files every session reads (`SKILL.md`, `00-anti-slop.md`) carry the aesthetic defaults. The files carrying UX reasoning are conditional and rarely triggered.

**Evidence:**
- `02-foundations.md` (hierarchy, Gestalt, IA method) loads for "IA and layout work" (manifest L44) — in practice `/ux-spec ia` and `/ux-critique` only. Not at `/ux-direction`.
- `06-age-inclusive-design.md` loads only under `/ux-spec all` (ux-spec L35).
- `05-website-type-patterns.md` (marketing vs app distinction, belief sequence) loads only under `/ux-spec ia`.
- `SKILL.md` L115–132 defaults table (the house-style rules) loads always.
- `00-anti-slop.md` 1,498 words loads always; 26 of 30 bans are marketing-only.
- Manifest L100: "an agent holding 25 files skims them and falls back on its priors." 26 references + 8 blueprints = 34 files, plus 8 commands.

**Impact:** The skill's reasoning is opt-in; its aesthetic is mandatory.

**Root cause:** Progressive disclosure was designed around *commands*, not around *reasoning stages*.

**Recommended fix:** One always-loaded reasoning file (context model, pipeline, UX laws as decisions, traceability rule, slop detector). Everything visual becomes conditional on pipeline stage and product type. Reduce reference count by merging duplicates (§13).

---

### F11 — HIGH — Typography treats oversized type as premium and ships the anti-Inter cliché set

**File:** `references/15-composition.md` L7–20, `references/03-typography-color-theming.md` L19–27, `SKILL.md` L119, `references/00-anti-slop.md` L39, L94

**Problem:** Type scale is prescribed as a premium signal rather than derived from brand, readability, content length, density, platform, language, and accessibility. The pairing table is a list of the fonts every 2024–2025 "anti-generic" site used, and it contradicts the ban list.

**Evidence:**
- `15` L9–16: "1.5–2× — Undesigned, or a dashboard. 4–6× — Editorial, confident, premium."
- `00` L94: "If display is 3× body, push to 5–6×."
- `SKILL.md` L119: "push display-to-body past 3.5×."
- `03` L22: "Modern SaaS, neutral | Inter, Geist, or Satoshi" as *heading* — `00` L39 bans Inter as display; `SKILL.md` L34 calls shipping Inter a build failure.
- `03` L25: "Warm / human | Bricolage Grotesque, Poppins" — `00` L39 bans Poppins as display.
- `03` L23–26: Fraunces, Instrument Serif, Playfair, Space Grotesk, Geist, Bricolage, Clash Display, Cabinet Grotesk, Satoshi, General Sans. This is the recognizable 2024–2025 "not-Inter" set. `SKILL.md` L34 half-admits it: "Shipping … Inter/Fraunces unchanged is a build failure."
- `13` L34: `--font-display: "Fraunces"` in the Tailwind example.
- No consideration of: script/language support (Urdu, Arabic, CJK), platform type systems (SF, Roboto on native), content length (long-form vs UI labels), density-driven scale, dyslexia-friendly criteria.

**Impact:** Luxury gets giant type; dashboards get flagged for not having it. Every "premium" project gets a serif display from the same six fonts.

**Root cause:** Type is treated as a style signal, not as a reading system.

**Recommended fix:** Type derived from: reading context (glance / scan / read), content length, density, brand character, platform, language, accessibility. Ratio is a consequence with a WHEN clause. Pairing guidance describes *properties* to look for (x-height, contrast, width, script coverage), not a font list. Named fonts appear only as "examples of the property," with the note that named fonts are themselves a repetition risk.

---

### F12 — MEDIUM — Color forces one accent universally and does not separate brand, semantic, state, surface, and text

**File:** `references/03-typography-color-theming.md` L69–104, `assets/tokens.template.css`, `references/00-anti-slop.md` L36, L92, L120

**Problem:** 60/30/10 and "one accent" are universal. The token structure has surface/text/border/accent/semantic roles but no brand-vs-accent distinction, no state layer, no data-viz layer, and no tiering.

**Evidence:**
- `00` L92: "One accent. Everything else is the neutral ramp." L120 self-check: "exactly one accent."
- `03` L81: "One accent (rarely two)." `03` L71–76: 60-30-10 as *the* rule.
- `tokens.template.css` L41: `--accent: /* the one accent */`. No `--brand-*`, no `--state-selected`, `--state-focus`, no `--chart-*`.
- `03` L106–116 color-psychology table: "Blue — trust, calm — finance, healthcare, B2B SaaS." Stereotype table, low decision value.
- No primitive → semantic → component tiering. `03` L173 "Name tokens by role" is the only guidance.

**Impact:** E-commerce with brand + sale + category colors, dashboards with 6-series charts and 4 status colors, children's apps, and government portals with multiple service categories are all told "one accent." Fintech dashboards need distinct state colors (positive, negative, neutral, pending) that are not "the accent."

**Root cause:** Color guidance was written for a marketing hero.

**Recommended fix:** Color architecture: brand (1–3), semantic (success/warning/danger/info), state (selected/focus/hover/disabled/active), surface (canvas/surface/raised/inset/overlay), text (primary/secondary/muted/inverse/link), data (categorical/sequential/diverging when relevant). Tiering primitive → semantic → component *when* the system has more than one theme or platform; flat role tokens otherwise. 60/30/10 becomes a WHEN (marketing page with one primary action).

---

### F13 — MEDIUM — Responsive behavior is "what reorders, collapses, or is dropped"

**File:** `references/12-storybook-template.md` L340, `references/07-craft-and-accessibility.md` L41–46, `commands/ux-audit.md` L48–54

**Problem:** No per-section reflow model. The only concrete pattern is "tables → cards."

**Evidence:** `12` L340: "**Mobile changes:** [what reorders, collapses, or is dropped entirely]." `07` L44: "Rethink information *priority* per breakpoint" — one line, no method. `17` L332 and `bp/app-dashboard` L41: "transpose rows to cards."

**Impact:** Desktop rows stack vertically. Sticky behaviors, horizontal-scroll rails, priority changes, interaction-model changes (hover → tap, sidebar → bottom tabs, filter panel → bottom sheet) are unspecified.

**Recommended fix:** Per major section, the blueprint states: reflows / stacks / stays horizontal / scrolls / disappears / changes priority / becomes sticky / changes interaction model. Provide the decision table once.

---

### F14 — MEDIUM — Accessibility is an end gate; WCAG 2.2-specific criteria and cognitive accessibility are absent

**File:** `references/07-craft-and-accessibility.md` L61–92, `SKILL.md` L36, `commands/ux-audit.md`

**Problem:** The gate is a WCAG 2.1 AA checklist run "before anything is called done." Accessibility does not enter discovery, IA, or composition.

**Evidence:**
- `SKILL.md` L36: "Accessibility is a gate, not a section." Correct intent, but it means accessibility is checked, not designed.
- `07` gate: no WCAG 2.2 criteria — 2.4.11 Focus Not Obscured, 2.5.7 Dragging Movements, 2.5.8 Target Size Minimum (24×24), 3.2.6 Consistent Help, 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication. The skill says "WCAG 2.2 AA" (`AGENTS.md` L32) but checks 2.1.
- Cognitive accessibility (reading level, plain language, consistent patterns, memory load, time limits) appears only in the seniors section of `06`.
- `06-age-inclusive-design.md` is good content, loaded only under `/ux-spec all`.
- `SKILL.md` L128: "≥60×80px for children and seniors" — `06` L12 specifies 60×80 for ages 3–5 only. Overgeneralized.

**Recommended fix:** Accessibility inputs in discovery (audience abilities, assistive tech, language). Accessibility decisions at each pipeline stage (IA: heading structure, landmarks; interaction: keyboard model, focus order; visual: contrast, color independence, zoom reflow; motion: reduced-motion; copy: plain language, error messaging). Gate updated to WCAG 2.2 AA. Age/ability content merged into the accessibility reference and loaded whenever the audience is known.

---

### F15 — MEDIUM — Trend dependency, dated by year, with trend CSS in banned hues

**File:** `references/04-visual-styles.md`, `references/03-typography-color-theming.md` L29, `references/07-craft-and-accessibility.md` L33, `references/14-ai-workflow.md` L14, `assets/motion-snippets.css`

**Evidence:**
- `04` L52: "The 2026 premium vocabulary" — bento, editorial, aurora, grain, ultra-fine borders, micro-typography.
- `04` L19: "Currently at its peak thanks to Apple's Liquid Glass direction — which also means it is starting to date fast." The file then lists glass as an allowed accent for consumer apps (L92) and B2B SaaS nav (L87).
- `04` L66–80: aurora CSS with `oklch(… 280)`, `oklch(… 200)`, `oklch(… 330)` — violet, cyan, pink. `00` L33 bans "purple-to-blue, blue-to-cyan, or pink-to-orange linear gradients." The skill ships the banned gradient as a radial.
- `04` L85–94 style matrix assigns trends by product: "B2B SaaS — Subtle glass nav, aurora hero"; "Consumer app — Glass, aurora, playful motion."
- `03` L29: "Variable fonts are the default choice in 2026." `07` L33: "The 2026 mood favors calm…" `14` L14: "increasingly expected in 2026 products."
- `motion-snippets.css` L38–48 `.spotlight` (card cursor-follow glow) and L65–67 `.aurora` — two of the most recognizable 2023–2025 SaaS tells, shipped as "safe to copy as-is" (manifest L80).

**Recommended fix:** Move all styles (bento, aurora, mesh, glass, grain, brutalism, oversized editorial, futuristic) into one "optional techniques" appendix with a WHEN / cost / accessibility-risk line each and an explicit "never a default" header. Remove year references. Remove `.aurora` and `.spotlight` from the asset file, or move them into the appendix as examples.

---

### F16 — MEDIUM — Vague prompts map to the house style; several are unhandled

**File:** `SKILL.md` L209–215, `references/01-discovery-interview.md` L92

**Evidence:**
- `SKILL.md` L214: "Make it look premium" → "spacing discipline, a wider type scale, fewer colors, real imagery, consistent radii, and one signature idea." That is the house style, stated as the meaning of premium. Luxury is frequently *restraint without giant type*.
- `01` L92: "Make it look like Apple/Linear/Stripe" → "one accent, a strict scale, generous whitespace, real product imagery, motion in milliseconds." Same list.
- Unhandled: "Build a modern SaaS site," "Make it futuristic," "Use shadcn," "Use bento," "Create a modern dashboard." Each of these currently has no interception and will be translated into its cliché.

**Recommended fix:** A vague-prompt translation table in the always-loaded reasoning file: phrase → what the user probably means → the questions that resolve it → what it does *not* license.

---

### F17 — MEDIUM — Product UX depth is thin; mobile app and design system have no path

**File:** `references/17-section-library.md` §9, `references/blueprints/app-dashboard.md`, `SKILL.md` description

**Evidence:**
- `SKILL.md` L3 description promises "dashboards, portfolios, e-commerce … mobile apps." No mobile-app blueprint exists. `05` §Mobile is six bullets (L99–106).
- `17` §9 covers app shell, dashboard, table, states, onboarding, settings in 36 lines. Missing: search and filter design, permission-aware UI, bulk-selection model, form validation strategy, keyboard navigation model, destructive-action patterns (undo vs confirm vs soft-delete), data density controls, notification design, multi-step wizards, detail/master patterns.
- Design systems: `/ux-spec tokens` and `components` exist but no reasoning about token tiers, component API surface, variants vs props, documentation, or governance.

**Recommended fix:** A product-UX reference at parity with the marketing one. Category notes for dashboard, enterprise/document system, mobile app, design system.

---

### F18 — MEDIUM — The critique detector is marketing-only and penalizes legitimate conventions

**File:** `commands/ux-critique.md` L20–39

**Evidence:** 18 tells; 6 or more = "machine-generated regardless of individual quality." Tells include "Centered hero" (L22), "One radius value on everything" (L29), "Display type under 3× body size" (L32), "Every section content-centered with no asymmetry anywhere" (L38). A well-designed government form page, a checkout, or a settings screen hits 4–6 of these by being correct.

**Recommended fix:** AI-Slop Detector 2.0 built on the interchangeability test ("could this be reused for an unrelated company by changing only logo, headline, accent, and images?"), plus a Design Specificity Score (0–100) across audience, product, content, brand, interaction, hierarchy, usability, accessibility, responsiveness, credibility, memorability. Separate tell lists for marketing and product surfaces. Familiar patterns are never tells by themselves; unreasoned repetition is.

---

### F19 — MEDIUM — Contradictions

| # | Rule A | Rule B |
|---|---|---|
| C1 | `00` L39 bans Inter, Poppins as display | `03` L22, L25 recommend Inter/Geist/Satoshi and Poppins as heading faces |
| C2 | `00` L57 bans "everything fading up on scroll" | `08` L19/L90, `17` L88/L165, `12` L366–369, `09` L65, `motion-snippets` L4–24 specify fade-up as default |
| C3 | `05` L9 "deliberately not a section order to output" | `bp/saas` L29–37, `bp/landing` L19–27 numbered section orders |
| C4 | `00` L124 "convention governs structure" for high-trust products | `00` L24–28 bans centered heroes and cards, which are conventional structure |
| C5 | `04` L19 glass "starting to date fast" | `04` L87, L92 glass allowed for SaaS nav and consumer apps |
| C6 | `00` L33 bans purple-blue / blue-cyan / pink gradients | `04` L66–80 aurora CSS in oklch 280 / 200 / 330 (violet / cyan / pink) |
| C7 | `bp/app-dashboard` L6 dense is "correct, not a compromise" | `ux-critique` L32 "Display type under 3× body size" is a slop tell |
| C8 | `15` L43 "One break per page" | same line "or per major section" |
| C9 | `SKILL.md` L128 "≥60×80px for children and seniors" | `06` L12 60×80 is for ages 3–5 only |
| C10 | `04` L11 "flat is the correct structural baseline for most products" | `04` L85–94 matrix assigns aurora/glass/bento to most product rows |
| C11 | `00` L21 bans overridable with "a specific, written reason" | `SKILL.md` L164 gate: "justification for every ban knowingly used" — a design that correctly uses five conventions writes five justifications; the process taxes correctness |
| C12 | `01` L92 "these look expensive because of restraint" | `15` L9–18 "premium" = 4–6× ratio, 76px headlines. Restraint and oversized type are presented as the same thing |

---

### F20 — MEDIUM — Duplication

| Content | Files |
|---|---|
| Forms rules | `07` L13–20, `17` L229–239 (near-identical) |
| Empty / loading / error states | `07` L22–26, `17` L334–341, `bp/app-dashboard` L51–59 |
| Navigation rules | `07` L5–11, `17` L18–45 |
| Dashboard rules | `05` L89–97, `17` L322–326, `bp/app-dashboard` L29–35 |
| Accessibility gate | `07` L61–92, `ux-audit` L20–30 |
| Reference-mechanism form | `00` L101–108, `01` L52, `ux-discover` L41, `ux-direction` L75, `12` L127–129 |
| Ban list | `00` L23–57, `ux-critique` L22–39 (as detector) |
| Belief sequence + Maya | `05`, `bp/00-index`, `12`, `01` |
| Persona vocabulary rule | `01` L109, `16` L37, `ux-copy` L33, `12` L48 |
| Storybook folder tree | `SKILL.md` L140–155, `README` L139–154, `12` L9–25 |
| AGENTS.md | `src/AGENTS.md` and `src/agents/AGENTS.md` — identical text, two files |
| Rhythm string | six occurrences (F5) |

---

### F21 — LOW — Tests check install integrity only; `doctor` checks a heading string

**File:** `test/cli.test.js` L78–79, `bin/cli.js` L382

**Evidence:** Tests assert 26 references and 3 docs by count. Nothing checks that commands reference files that exist, that SKILL.md contains the pipeline, or that references avoid absolute aesthetic rules. `doctor` verifies `"When to interview"` is present in SKILL.md as the proof that "interview logic" exists.

**Recommended fix:** Add structural tests: link integrity (every `references/…` path named in a command or SKILL.md exists), pipeline presence, a lint that fails if references contain absolute aesthetic prescriptions (regex list), marketing/product fork presence. Keep the "When to interview" heading so existing `doctor` installs keep working.

---

### F22 — LOW — Duplicate AGENTS.md; CLAUDE.md is a pointer, not content

**File:** `src/AGENTS.md`, `src/agents/AGENTS.md`, `src/agents/CLAUDE.md`

The installer copies `src/AGENTS.md` into the skill root and appends its text to the project rules file. `src/agents/AGENTS.md` is a byte-different duplicate (path line missing). `agents/CLAUDE.md` says "see ../AGENTS.md." Keep one canonical file.

### F23 — LOW — Color psychology table

`03` L106–116. "Blue — trust — finance, healthcare, B2B SaaS" is the reasoning that produces every blue fintech. Replace with "derive hue from brand assets, category differentiation, cultural context, and semantic needs; validate with the audience."

### F24 — LOW — `14-ai-workflow.md` is mostly essay

Only "Designing the AI *in* the product" (L24–33) is actionable. Merge those ten lines into the product-UX reference; remove the rest.

### F25 — LOW — README markets the buyer framing only

`README.md` L42: "Page order follows the buyer's belief sequence." Applications have no buyer. Update once the fork exists.

---

## 5. Repetitive design causes (root-cause summary)

1. **Positive aesthetic rules in always-loaded files** (`SKILL.md` defaults table, `00` premium formula) define a target look.
2. **Example values repeated across files** (`#FAF8F3`, `#C2410C`, "Field Notes", "Maya", the rhythm string, 76px) become de facto defaults.
3. **"Never variant 1"** mechanically selects variant 2 (split hero, alternating rows, rule-bounded logo grid, single large quote).
4. **Directions differ on visual axes** → three skins over one strategy.
5. **Art direction precedes IA and content** → visuals are fixed before there is anything to arrange.
6. **Marketing rules load universally** → dashboards inherit hero and rhythm logic.
7. **Motion default is fade-up** despite the ban.
8. **"Premium" has a fixed recipe** → luxury, developer tools, and SaaS all get it.
9. **Critique penalizes centered layouts and small type ratios** → pushes every design toward asymmetry and giant type.
10. **Font table is a fixed list** → the same six display faces.
11. **Adjective sets in discovery** steer toward "editorial / considered / precise / expensive."
12. **60/30/10 + one accent** → every palette has the same structure.

---

## 6. Over-prescriptive rules and their conditional replacements

Format: WHEN context · CONSIDER principle · BECAUSE user impact · VALIDATE with test.

| # | Current rule (file) | Replacement |
|---|---|---|
| R1 | "Push display-to-body past 3.5×" (`SKILL` L119, `15` L84, `00` L94) | WHEN the page is read once, has one message per screen, and the brand is expressive · CONSIDER a wide scale (4×+) · BECAUSE a single dominant statement is scanned faster · VALIDATE the longest real headline fits above the fold at 375px. WHEN the surface is read repeatedly or is dense · CONSIDER 1.5–2.5× · BECAUSE repeated readers need information, not emphasis · VALIDATE task time on the top task. |
| R2 | "Exactly one accent, ≤10% of surface" (`00` L92, L120) | WHEN the surface has one primary action · CONSIDER one action color and reserve it · BECAUSE the action must be found in one glance · VALIDATE the blur test shows the CTA. WHEN the surface carries multiple states, categories, or data series · CONSIDER a state and data palette separate from brand · BECAUSE one hue cannot encode four meanings · VALIDATE every meaning survives grayscale. |
| R3 | "Neutrals always tinted toward the brand hue; untinted gray is a tell" (`SKILL` L126) | WHEN the brand has a hue and surfaces are large · CONSIDER tinting neutrals · BECAUSE tinted neutrals unify without adding color · VALIDATE text contrast still passes. WHEN the product is clinical, governmental, or data-dense · CONSIDER neutral gray · BECAUSE tint competes with data color and reads as brand over content · VALIDATE chart colors are not shifted by the surface. |
| R4 | "One deliberate grid break per page" (`00` L95, `15` L87) | WHEN a marketing page needs a focal moment and the brand is expressive · CONSIDER one element that breaks the grid · BECAUSE a single violation directs attention · VALIDATE it is the element you want noticed. Never for forms, tables, or repeated-use screens. |
| R5 | "Section rhythm must be non-uniform" (`SKILL` L171, `15` L24–32) | WHEN a narrative marketing page has sections of unequal weight · CONSIDER spacing that follows weight · BECAUSE rhythm signals what matters · VALIDATE the heaviest section reads first in the blur test. Not applicable to app screens. |
| R6 | "Every project ships one signature element" (`00` L76, `SKILL` L163) | WHEN the product competes on brand memory (consumer, portfolio, launch) · CONSIDER one memorable device tied to the subject matter · BECAUSE recall drives return visits · VALIDATE a user can describe it afterward. WHEN the product competes on task efficiency · CONSIDER none · BECAUSE memorability is noise in a tool. |
| R7 | "Never take variant 1" (`17` L10) | Each variant gets a WHEN. Selection is by fit to user, content, and task. The conventional variant is chosen when the task is high-frequency, high-trust, or the audience expects it (Jakob's Law). |
| R8 | "Centered hero banned" (`00` L24) | WHEN the message is one sentence and the visual is secondary or absent · CONSIDER centered · BECAUSE symmetry reads as stable and the eye lands on one point · VALIDATE the subhead adds information. WHEN a product visual carries the argument · CONSIDER split or product-first · BECAUSE the image needs room. |
| R9 | "Cards for content that isn't card-shaped banned" (`00` L28) | WHEN items are parallel, independently actionable, and scanned · CONSIDER cards · BECAUSE common region groups actions with content · VALIDATE each card has a distinct action or destination. WHEN content is sequential prose · CONSIDER open layout with rules · BECAUSE boxes interrupt reading. |
| R10 | "Split 7/5 or 8/4, never 6/6" (`15` L38) | WHEN one side carries the primary content · CONSIDER an uneven split · BECAUSE width signals weight · VALIDATE the primary is wider. WHEN two items are peers (compare, before/after) · CONSIDER equal · BECAUSE equality is the message. |
| R11 | "Choose a density pole; the middle is the failure" (`15` L63) | Density is set by task frequency × expertise × information volume. WHEN daily expert use · dense. WHEN occasional novice use · generous. WHEN mixed · default comfortable with a density control. VALIDATE with the top task's completion path length. |
| R12 | "Radius: one position, 3 steps, mixing reads sloppy" (`SKILL` L125) | WHEN one component family · CONSIDER one radius scale · BECAUSE consistency reads as intent. Nested radii (inner = outer − padding) are correct, not mixing. Radius position derives from brand character and platform, not from a premium rule. |
| R13 | "Fade-up on scroll (Level 2 default)" (`08` L19) | Motion is derived by job. WHEN a long narrative page benefits from progressive reveal · CONSIDER reveal on scroll, once · BECAUSE it paces reading · VALIDATE content is readable with JS off. Never on repeated-use surfaces. |
| R14 | "Both themes is the modern default" (`01` L68) | WHEN users work in low light, long sessions, or the platform expects it · CONSIDER dark theme · BECAUSE glare and preference · VALIDATE contrast independently. Otherwise one well-executed theme is complete. |
| R15 | "Premium = spacing discipline, wider type scale, fewer colors, signature idea" (`SKILL` L214) | "Premium" is resolved by asking: premium *to whom*, signaled by *what* in this category. Luxury goods: restraint, material, photography, slow pace. Developer tools: density, precision, speed. Finance: clarity, stability, evidence. Never a fixed recipe. |
| R16 | "Inter/Poppins/Montserrat/Roboto/Open Sans banned as display" (`00` L39) | WHEN the display face must carry personality and the brand is expressive · CONSIDER a face with distinctive letterforms · BECAUSE the headline is the brand's voice · VALIDATE it is legible at the smallest display size used. WHEN the product is a tool, platform-native, or multilingual · CONSIDER a neutral or system face · BECAUSE neutrality, script coverage, and performance matter more than personality. A ubiquitous face is a risk only when nothing else in the design is specific. |
| R17 | "60/30/10" (`03` L71) | WHEN one primary action per view (marketing, landing) · CONSIDER a dominant-neutral / supporting / single-action split · BECAUSE the action must dominate attention · VALIDATE the CTA survives the blur test. Not a rule for apps, stores, or data surfaces. |
| R18 | "Hairline rules instead of cards; fastest way out of card soup" (`15` L67) | WHEN content is sequential and the grid is strong · CONSIDER rules · BECAUSE they separate without enclosing. WHEN items must be individually targetable on touch · CONSIDER cards · BECAUSE the whole region is the target (Fitts). |

---

## 7. Contradictions

See F19 table (C1–C12).

---

## 8. Missing UX reasoning

Presence check across `src/`:

| Principle | Present? | Where / how | Gap |
|---|---|---|---|
| Gestalt: proximity, similarity, common region, continuity, figure-ground | Partial | `02` L45–51, five bullets | Loads only for IA work and critique; never at direction or composition |
| Affordances / signifiers | No | "power-user affordances" heading only | No rule that interactive things look interactive; no signifier check for custom controls |
| Feedback | Partial | motion "gives feedback"; optimistic UI | No latency-tier rule (instant / <400ms / progress / background) |
| Mental models / Jakob's Law | Implicit | "conventions worth keeping" in `05` | Never named as the reason to keep convention; the ban list works against it |
| Recognition over recall | No | — | No rule for visible options over memorized commands, recent items, autocomplete |
| Cognitive load | 1 mention | seniors section `06` | No per-screen decision-count or chunking rule |
| Progressive disclosure | No (as design) | used only for skill-loading | No rule for primary / secondary / advanced tiers in forms, settings, filters |
| Information scent | No | — | Nav copy rule ("nouns the user recognizes") is adjacent |
| Hick's Law | Implicit | nav 4–7 items | Not applied to filters, plan choices, settings |
| Fitts's Law | Implicit | 44px targets, thumb zone | Not applied to spacing between destructive and safe actions |
| Tesler's Law | No | — | No rule to push complexity into the system (defaults, inference, autocomplete) |
| Doherty Threshold | Partial | 300ms / 1s loading rule | Not tied to response-time tiers |
| Error prevention | Partial | destructive confirmations | No constraint / default / inline-validation-timing model |
| Error recovery | Yes | forms, states | Good |
| System status visibility | Partial | saved state, loading | No rule for long operations, background jobs, sync state |
| User control / freedom | 1 mention | AI personalization off-switch | No undo model, no escape from flows, no cancel on long ops |
| Accessibility | Yes, as gate | `07` | Not as design input; WCAG 2.2 criteria missing |
| Trust | Yes, marketing | evidence sections | Not for apps: permission transparency, audit trails, confirmation of consequential actions |
| Scanning behavior (F / Z / layer-cake) | No | blur test only | No rule connecting reading pattern to layout for text-heavy vs visual pages |

The fix is not to add theory. It is one table in the always-loaded file: principle → the decision it forces → the test that checks it.

---

## 9. Trend dependency

Items to demote from default or recommendation to "optional technique, with WHEN, cost, and accessibility risk":

| Trend | Where promoted |
|---|---|
| Bento grids | `04` L56, `15` L49, `17` L158, `bp/saas` L32 ("Bento … before three equal cards") |
| Aurora / mesh gradients | `04` L58, L66–75, `08` L103, `motion-snippets` L65 |
| Grain / noise | `04` L59, L76–80 |
| Glassmorphism | `04` L18–42, matrix L87/L92 |
| Neubrutalism | `04` L47–50, matrix L91, `03` L26 |
| Oversized editorial type | `15` L9–18, `04` L57, `17` L78, `00` L94 |
| Hairline rules at 6–10% | `00` L97, `15` L67, `tokens.template` L38 |
| Card spotlight cursor glow | `motion-snippets` L38–48 |
| Margin-rail editorial grid | `15` L48, `17` L161, `ux-direction` L47, `12` L104 |
| Warm paper neutrals | `03` L89, `ux-direction` L49, `12` L208 |
| Dark mode as default | `01` L68 |
| Year-stamped claims | `04` L19, L52; `03` L29; `07` L33; `14` L14; `09` L5 |

Durable principles to build the core on instead: hierarchy, contrast, balance, rhythm, scale, proportion, alignment, grouping, density, whitespace, reading order, visual flow, emphasis. None of these is a style.

---

## 10. Reference-loading issues

1. Always-loaded: `SKILL.md` (2,293 words, carries the defaults table) + `00-anti-slop` (1,498 words, marketing-biased). ~3,800 words of mandatory context, most of it aesthetic.
2. Reasoning files (`02`, `05`, `06`) load conditionally and rarely.
3. 34 reference and blueprint files; the manifest acknowledges over-loading causes fallback to priors.
4. Commands name 4–12 references each. `/ux-spec all` names 15.
5. Blueprints load only under `/ux-spec pages`, so category reasoning arrives after direction and tokens are set.
6. No product-type fork at load time: a dashboard loads exactly what a landing page loads.

---

## 11. The anti-slop paradox

The skill's rationale document (`ANTI-SLOP-RATIONALE.md` L13) states the theory: "positive guidance alone does not prevent defaults … telling it 'not indigo, not gradient text, not three icon cards' removes the default from the option set." That is true and incomplete. Removing the default from the option set leaves the *next most probable* option, which the skill then reinforces with positive rules, repeated examples, and a variant-2 preference. The next most probable option in 2025 training data is the editorial-warm-paper-burnt-orange-hairline look. The skill converged on it because the model would have anyway; the skill just made it mandatory.

Test: could the "Field Notes" direction in `ux-direction.md` L40–65 be applied to a different company by changing the logo, headline, accent hue, and images? Yes. It is a logistics dashboard's marketing site; swap "shipment counts" for "patient counts" and it is a hospital's. The skill's own test (`00` L117) fails on the skill's own example.

The way out is not a third ban list. It is to make every visual decision downstream of a decision about user, task, content, business, brand, context, or accessibility, and to test specificity rather than conformance.

---

## 12. Proposed architecture

### 12.1 Reasoning pipeline (mandatory order)

```
CONTEXT → USER → JOB → TASK → CONTENT → BUSINESS GOAL → TRUST / RISK
→ INFORMATION ARCHITECTURE → INTERACTION MODEL → VISUAL HIERARCHY
→ DESIGN LANGUAGE → COMPOSITION → COMPONENTS → RESPONSIVE BEHAVIOR
→ MOTION → ACCESSIBILITY (threaded through every stage, gated at the end)
→ IMPLEMENTATION → VALIDATION
```

No visual value (hue, face, radius, ratio, surface) is chosen before INFORMATION ARCHITECTURE is complete. The direction fork sits between TRUST / RISK and INFORMATION ARCHITECTURE and differs on strategy; visual language is a consequence of the chosen strategy.

### 12.2 Context model (lightweight, five dimensions, no fixed aesthetics)

| Dimension | Poles |
|---|---|
| **User** | novice ↔ expert · casual ↔ professional · occasional ↔ frequent |
| **Product** | informational ↔ transactional · simple ↔ complex · low-risk ↔ high-risk · exploratory ↔ task-driven |
| **Brand** | conservative ↔ expressive · friendly ↔ authoritative · mass-market ↔ premium · playful ↔ serious |
| **Content** | text-led · image-led · product-led · data-led · interaction-led |
| **Device** | mobile-first · desktop-first · touch-heavy · keyboard-heavy · cross-device |

Each pole position implies *questions* and *constraints*, not a style. Example: "frequent + expert + task-driven + data-led + keyboard-heavy" implies density is allowed, recognition over recall is mandatory, keyboard model is a P0 decision, motion is state-only. It does not imply a palette.

### 12.3 The marketing / product fork

| | Marketing surface | Product surface |
|---|---|---|
| Reasons about | positioning, persuasion, proof, trust, narrative, conversion | workflows, navigation, search, filters, forms, tables, bulk actions, permissions, loading, empty, errors, validation, keyboard, destructive actions, density, repeated use |
| Direction axes | information priority · persuasion strategy · content hierarchy · proof placement · interaction approach · density · brand expression | navigation model · overview-first vs task-first · density · disclosure strategy · keyboard vs pointer priority · state-visibility strategy |
| Gate | message hierarchy stated · every section traces to a belief or objection · primary action above the fold · specificity score | top task path length · every data view has 5 states · keyboard-complete · destructive actions recoverable · specificity score |
| Critique | marketing tells | product tells |

E-commerce is a hybrid: home and category pages are marketing-weighted; PDP, cart, checkout, and account are product-weighted. The fork is per surface, not per project.

### 12.4 Traceability rule

Every major decision in the storybook carries a tag: `[USER]`, `[TASK]`, `[CONTENT]`, `[BUSINESS]`, `[BRAND]`, `[CONTEXT]`, or `[A11Y]`, and one line of reasoning. A decision with no tag is not finished. This replaces "every ban knowingly used has a justification."

### 12.5 Validation layer

- **AI-Slop Detector 2.0** — primary question: could this be reused for an unrelated company by changing only logo, headline, accent color, and images? Then per-surface tell lists (marketing / product), each tell phrased as "X *without a reason traceable to* Y."
- **Design Specificity Score (0–100)** — eleven dimensions, weighted; beautiful-but-generic fails on audience, product, content, brand, and memorability specificity even if hierarchy, usability, and accessibility are perfect.
- **Cross-project sameness test** — twelve fixed briefs; compare hero/first-screen structure, typography, color architecture, grid, cards, navigation, spacing, CTA pattern, section or screen order, motion, component style. Any attribute shared by more than four unrelated briefs must trace to a shared context factor, or it is a house style.
- **Vague-prompt test** — seven phrases, each with the expected non-cliché translation.

### 12.6 Reference file plan

Always loaded: `SKILL.md` (rewritten, shorter, no defaults table) + `references/00-design-reasoning.md` (context model, pipeline, UX laws as decisions, traceability, vague-prompt table, "defaults that need a reason").

Conditional by stage and surface type:

| # | File | Loads when | Built from |
|---|---|---|---|
| 01 | `discovery.md` | `/ux-discover` | `01` rebuilt |
| 02 | `marketing-ux.md` | marketing surfaces: direction, IA, pages | `05` (marketing), `17` §1–8, `bp/saas`, `bp/landing`, `bp/ecommerce` (home/category), `bp/corporate`, `bp/portfolio`, `bp/content-blog` |
| 03 | `product-ux.md` | product surfaces: direction, IA, screens | `05` (app, mobile), `17` §9, `bp/app-dashboard`, `bp/ecommerce` (PDP/cart/checkout), `14` (AI in product), new: mobile app, enterprise, design system, permissions, bulk, validation, keyboard, destructive |
| 04 | `visual-system.md` | design language, composition, tokens | `02` (hierarchy, Gestalt), `03`, `15`, `04` (as optional-techniques appendix) |
| 05 | `responsive-accessibility.md` | responsive, a11y at every stage, audit | `07`, `06`, new reflow model, WCAG 2.2 |
| 06 | `motion.md` | `/ux-motion` | `08` rewritten by purpose |
| 07 | `gsap-recipes.md` | GSAP implementation | `09` kept |
| 08 | `motion-react-recipes.md` | React motion | `10` kept |
| 09 | `threejs-webgl.md` | 3D | `11` kept |
| 10 | `copy-voice.md` | `/ux-copy`, pages | `16` kept, trimmed |
| 11 | `storybook-template.md` | `/ux-spec` | `12` rewritten: context model file, strategy-first direction, surface-type-aware fields |
| 12 | `implementation-handoff.md` | `/ux-build` | `13` kept |
| 13 | `validation.md` | `/ux-critique`, `/ux-direction`, `/ux-spec` gate, `/ux-build` fidelity | new: Slop Detector 2.0, Specificity Score, sameness test, critique method |

14 references instead of 26 (+8 blueprints). Every file that remains is either reasoning or implementation; none is a style catalogue except the explicitly labelled appendix.

---

## 13. Files to modify, merge/remove, add

### Modify (rewrite in place)
- `src/SKILL.md` — pipeline, context model summary, operating rules (kept), interview table (kept), fork, traceability, gates by surface type, fast paths rewritten, no defaults table
- `src/AGENTS.md` — shorter; pipeline-first
- `src/commands/ux-discover.md` — decision-mapped questions; two tracks
- `src/commands/ux-direction.md` — strategy-first directions; per-surface axes; specificity check
- `src/commands/ux-spec.md` — scopes load by surface type; gate = traceability + specificity
- `src/commands/ux-copy.md` — minor: reference renames
- `src/commands/ux-motion.md` — purpose-driven; no default rows
- `src/commands/ux-build.md` — fidelity = traceability check; remove universal grid-break/rhythm checks
- `src/commands/ux-audit.md` — WCAG 2.2 additions; responsive reflow checks
- `src/commands/ux-critique.md` — Slop Detector 2.0 + Specificity Score; surface-aware
- `src/references/09,10,11` → renumbered `07,08,09`; GSAP header "80% case" framing removed
- `src/references/16` → `10-copy-voice.md`; trimmed duplicates
- `src/references/13` → `12-implementation-handoff.md`; Fraunces example removed
- `src/assets/motion-snippets.css` — remove `.aurora`, `.spotlight`; keep reveal as opt-in with comment
- `src/assets/tokens.template.*` — add brand/state/data layers as optional blocks; remove "the one accent" comment
- `src/docs/*` — rewrite manifest, workflow, rationale (→ `DESIGN-RATIONALE.md`)
- `README.md` — update structure, remove buyer-only framing, update customization table
- `test/cli.test.js` — update counts; add structural tests
- `bin/cli.js` — eject hint text; keep `doctor` heading check

### Merge / remove
- `references/00-anti-slop.md` → replaced by `00-design-reasoning.md` (ban list becomes "defaults that need a reason" + detector in `13`)
- `references/02-foundations.md` → into `00` (UX laws) and `04` (hierarchy, Gestalt)
- `references/04-visual-styles.md` → into `04-visual-system.md` appendix
- `references/05-website-type-patterns.md` → split into `02` and `03`
- `references/06-age-inclusive-design.md` → into `05-responsive-accessibility.md`
- `references/07-craft-and-accessibility.md` → into `05` (a11y, responsive) and `03` (forms, states, nav)
- `references/14-ai-workflow.md` → "AI in the product" into `03`; rest removed
- `references/15-composition.md` → into `04`
- `references/17-section-library.md` → split into `02` (§1–8) and `03` (§9), variants made conditional, motion defaults removed
- `references/blueprints/*` (8 files) → category notes inside `02` and `03`
- `src/agents/AGENTS.md` → removed (installer uses `src/AGENTS.md`); `agents/CLAUDE.md` and `README.md` updated

### Add
- `references/00-design-reasoning.md`
- `references/02-marketing-ux.md`
- `references/03-product-ux.md`
- `references/04-visual-system.md`
- `references/05-responsive-accessibility.md`
- `references/13-validation.md`
- `docs/SAMENESS-TEST.md` — the twelve briefs and the comparison protocol
- `test/skill-structure.test.js` — link integrity, pipeline presence, prescriptive-rule lint

---

## 14. Before / after examples

### 14.1 Hospital patient portal

**Before (v2.0.2 behavior):** `/ux-direction` loads `00, 15, 04, 03`. Three directions differ on layout logic / type / palette / density / surface / signature. `00` L124 says high-trust products deviate less, "even then the ban list mostly still applies," so the centered layout and cards are discouraged. Directions come back as: A) editorial warm-paper with hairline rules and a margin rail; B) dark-dominant dense; C) split-screen with a "data hero." Type ratio ≥3.5× enforced by the gate. Signature element required. Section rhythm required. The result is a magazine about a hospital.

**After:** Context model: user = occasional, novice-to-mixed, often stressed, possibly low-vision or older; product = transactional, high-risk, task-driven; brand = authoritative, conservative; content = text-and-form-led; device = cross-device, mobile-heavy. TRUST/RISK stage: every action has a consequence statement; system status is always visible; no ambiguous states. Directions differ on strategy: A) **Task-first** — "what do you need to do today" with three verbs above the fold; B) **Status-first** — upcoming appointments and results lead, actions follow; C) **Guided** — a single question-flow for first-time users with a switch to the dashboard for returning ones. All three: 1.75–2.25× type ratio `[A11Y: readers zoom; hierarchy by weight and space]`, centered single-column forms `[TASK: one decision per screen]`, cards for appointments `[CONTENT: parallel, individually actionable]`, neutral surfaces `[BRAND: authority; A11Y: contrast headroom]`, motion state-only `[USER: stress; A11Y: vestibular]`. No signature element `[BUSINESS: efficiency, not recall]`.

### 14.2 Fintech dashboard

**Before:** Same visual fork. `ux-critique` L32 flags any type ratio under 3× as slop. `bp/app-dashboard` says dense is correct. Contradiction resolved by whichever file the agent read last. Marketing ban list loaded; "premium is subtraction, then one asymmetry" loaded.

**After:** Context: frequent, professional, expert-leaning; complex, high-risk, task-driven; data-led; desktop and keyboard-heavy. Product-UX branch loads; marketing branch does not. Directions: A) **Overview-first** (portfolio state, then exceptions); B) **Exceptions-first** (what needs action now, everything else one click away); C) **Workflow-first** (the day's sequence as the nav). Density: dense with a comfortable toggle `[USER: daily expert]`. Color: brand 1 + semantic 4 + data-state 3 (positive / negative / pending) + categorical chart palette, all grayscale-distinct `[CONTENT: data; A11Y: color independence]`. Type: 1.5–2× `[TASK: comprehension across many values]`, tabular numerals mandatory. Keyboard model specified before visuals `[CONTEXT: keyboard-heavy]`. Motion: value-change highlights and sort transitions only `[TASK: track what changed]`.

### 14.3 Luxury architecture studio

**Before:** "Premium" fast path (`SKILL` L214) → wider type scale, one signature idea. Composition table → 4–6× or 8×+ "statement, poster." Result: 96px headlines over photographs, an asymmetric grid break, warm paper, burnt-orange accent.

**After:** Context: occasional, professional (developers, private clients); informational, high-consideration, exploratory; brand = premium, serious, authoritative-to-quiet; image-led; cross-device. CONTENT stage: the work is the message; text is captions and one statement. Directions: A) **Work-first** — projects at full bleed, minimal type, index as a secondary layer; B) **Practice-first** — one statement of philosophy, then work, for clients who buy the thinking; C) **Place-first** — organized by site and material, for a studio whose differentiator is context sensitivity. Type: restrained scale (2–2.5×), generous leading, small confident captions `[BRAND: premium = restraint; CONTENT: photography carries]`. Color: near-absent; photography sets it `[CONTENT: image-led]`. Grid: strict, symmetrical or asymmetrical as the photography demands, no mandatory break. Motion: image-load and transition continuity only `[BRAND: quiet]`.

### 14.4 "Make it premium"

**Before:** `SKILL` L214 answer: spacing discipline, wider type scale, fewer colors, real imagery, consistent radii, one signature idea.

**After:** Vague-prompt table: "premium" → ask (or infer) *premium to whom, in what category, signaled by what*. Luxury retail: restraint, material, photography, unhurried pacing. Developer tool: precision, density, speed, zero decoration. B2B finance: clarity, stability, evidence, conservative motion. Consumer app: polish in states and transitions, not in type size. Then design from the context model. Explicitly does not license: oversized type, a signature element, or a specific palette.

---

## 15. Evaluation strategy

### 15.1 Structural tests (automated, in `test/`)
- Every reference path named in `SKILL.md` and `commands/*.md` exists.
- `SKILL.md` contains every pipeline stage name in order.
- `SKILL.md` and `references/00-design-reasoning.md` contain the marketing / product fork.
- Prescriptive-rule lint: references fail the test if they contain absolute aesthetic rules matching a regex list (`always tinted`, `exactly one accent`, `at least 3\.5`, `never (take|choose) variant 1`, `push .* past`, `one deliberate grid break`, `the one accent`). The lint allows these phrases only inside a WHEN clause or in `13-validation.md` as a tell.
- Install tests updated for the new file set.

### 15.2 Behavioral tests (documented protocol, run manually or by an evaluator agent)
- **Cross-project sameness test** (`docs/SAMENESS-TEST.md`): twelve briefs — AI developer SaaS, Pakistani construction company, luxury architecture studio, hospital portal, fintech dashboard, children's education app, enterprise document system, fashion e-commerce, photographer portfolio, government portal, restaurant website, productivity mobile app. Output the context model and the eleven compared attributes per brief. Any attribute shared by more than four unrelated briefs must trace to a shared context factor.
- **Vague-prompt test**: "Make it premium", "Build a modern SaaS site", "Make it futuristic", "Use shadcn", "Use bento", "Make it like Linear", "Create a modern dashboard." Pass if the response resolves the phrase through the context model and does not emit the cliché.
- **Interchangeability test**: for every direction and every blueprint, answer "could this be reused by an unrelated company changing only logo, headline, accent, images?" Must be *no, because [trace]*.
- **Specificity Score**: every storybook scores ≥70 before build; ≥50 on each of audience, product, content, brand specificity individually.
- **Traceability**: every decision in `01-direction.md`, `03-tokens.md`, `06-blueprints.md` carries a source tag.

### 15.3 Regression guards
- The prescriptive-rule lint runs in CI.
- `docs/DESIGN-RATIONALE.md` records why each guard exists so a future contributor does not reintroduce a defaults table.

---

*Implementation begins after this document. Order: AUDIT (this) → ROOT CAUSE (§5, §11) → REASONING ARCHITECTURE (§12) → IMPLEMENTATION (§13) → TESTING (§15.1) → CROSS-PROJECT VALIDATION (§15.2).*

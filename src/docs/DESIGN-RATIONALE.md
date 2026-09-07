# Why each guard exists

**Path:** `src/docs/DESIGN-RATIONALE.md`

Notes for anyone maintaining this skill. Every guard below was added to fix an observed failure. Removing one brings its failure back. The structural tests in `test/skill-structure.test.js` enforce several of them.

## The two failures being prevented

**First generation.** An agent designing without constraint reproduces the statistical center of its training data: a centered hero, an indigo accent, Inter, three icon cards with rounded-square icons, uniform section padding, "Transform your workflow." Competent, forgettable, recognizably machine-made.

**Second generation.** Version 2 of this skill fixed the first failure with a ban list and a set of positive prescriptions — one accent under 10%, type ratio past 3.5×, tinted neutrals, one grid break, hairline rules, uneven rhythm, a mandatory signature element — and a worked example (warm paper, ink, one burnt-orange signal, Swiss editorial grid with a margin rail) repeated across four files. The result was a second template. A hospital portal, a construction company, and a children's app received the same visual grammar. The skill's own interchangeability test failed on the skill's own example.

Both failures have one cause: **visual decisions made before reasoning about the user, the task, the content, the business, and the brand.** Bans and prescriptions operate at the visual layer and cannot fix a reasoning-layer problem. They only change which template wins.

## Guard 1 — reasoning before styling (the pipeline)

**Fixes:** art direction chosen at Phase 2, before information architecture, content model, or task analysis existed.

**Mechanism:** an eighteen-stage pipeline in `SKILL.md` and `00-design-reasoning.md`. No hue, typeface, radius, type ratio, surface, or layout style is chosen before stage 8 (information architecture) is complete. The structural test checks that the stages appear in order.

## Guard 2 — the context model

**Fixes:** "premium", "modern", "clean" translated directly into a look. Product categories mapped to fixed aesthetics.

**Mechanism:** five dimensions (user, product, brand, content, device) with poles that imply *questions and constraints*, never a style. A profile line at the top of every brief. The opposite-user test in the self-check: if flipping two axes changes nothing, the profile was not used.

## Guard 3 — the marketing / product fork

**Fixes:** hero, section rhythm, grid break, signature element, and scroll reveal applied to dashboards, enterprise systems, and mobile apps; app density applied to narrative pages.

**Mechanism:** two reference files (`02-marketing-ux.md`, `03-product-ux.md`) with different structure methods, different direction axes, different gates, and different critique tell lists. The fork is per surface, not per project, so a store's front and checkout are reasoned differently. The product file explicitly forbids marketing chrome; the structural test checks that it does.

## Guard 4 — strategic directions

**Fixes:** three "directions" that differed on layout logic, type, palette, density, surface, and signature — six visual axes — and so were three skins over one strategy. "Editorial / Bento / Dark Premium."

**Mechanism:** directions must differ on information priority, persuasion or workflow strategy, content hierarchy, interaction approach, and density (marketing), or on navigation model, home-screen job, density, disclosure, input priority, and action model (product). They are named by strategy. Visual consequences are derived afterward, each with a tag. The validity test: three directions sharing the first screen, the order, and the primary visual are one direction.

## Guard 5 — traceability tags

**Fixes:** "every ban knowingly used has a justification" — a process that taxed correct conventional choices and let stylistic choices through with "it looks considered."

**Mechanism:** every major decision carries `[USER]` `[TASK]` `[CONTENT]` `[BUSINESS]` `[BRAND]` `[CONTEXT]` or `[A11Y]` and one line. A pattern is never wrong by itself; an untraced pattern is. This is what makes centered heroes, cards, Inter, gradients, asymmetry, and bento all legitimate when they fit and all suspect when they do not.

## Guard 6 — defaults that need a reason, not a ban list

**Fixes:** a ban list that removed one default and installed the next most probable one, and that discouraged conventional structure on the high-trust products that need it.

**Mechanism:** a list in `00-design-reasoning.md` of the high-probability patterns from *both* generations, each with the WHEN under which it is right. Nothing is banned. The structural test fails if the phrase "ban list" or any of the old absolute rules ("exactly one accent", "at least 3.5×", "never take variant 1", "untinted gray is a tell") reappears in a reference.

## Guard 7 — tripwire token values (kept from v2)

**Fixes:** example values in a reference being copied as output values.

**Mechanism:** magenta and lime placeholders that cannot be missed in a browser. A mechanism, not an instruction. The structural test checks that the templates still carry them and carry no example brand colors or named fonts.

## Guard 8 — no example values in the always-loaded file

**Fixes:** `#FAF8F3` and `#C2410C` appearing in two files and becoming the default palette; the same rhythm string in six files; the same persona in seven.

**Mechanism:** `00-design-reasoning.md` contains no hex values (tested). The storybook template uses `[brackets]` for every value. Worked examples that must show a value show it once, in one conditional file.

## Guard 9 — content-first structure (generalized from v2's belief sequence)

**Fixes:** category blueprints that listed sections in a numbered canonical order, which agents read as an outline.

**Mechanism:** marketing structure is derived from a written message hierarchy and decision journey (`02` §1); product structure from an entity model, navigation model, and home-screen job (`03` §1). Category notes list jobs and options, never an order.

## Guard 10 — options with WHEN, not ordered variants

**Fixes:** "never take variant 1 by default", which mechanically selected variant 2 everywhere and produced the split-hero / alternating-rows / rule-bounded-logo-grid / single-large-quote page.

**Mechanism:** every section option carries a WHEN. Selection is by fit to user, content, and task, and is recorded with a trace. The conventional option is legitimate when convention serves the user.

## Guard 11 — motion by job

**Fixes:** fade-up on scroll banned in one file and specified as the default in six others.

**Mechanism:** six motion jobs; a budget derived from the context profile; no default rows; scroll reveal licensed only for narrative marketing pages and explicitly never for repeated-use surfaces. Every snippet in the asset file is opt-in and maps to a spec row.

## Guard 12 — validation by specificity, not conformance

**Fixes:** an eighteen-tell detector that counted centered layouts and type ratios under 3× as slop, penalizing correct conventional design and pushing everything toward asymmetry and giant type.

**Mechanism:** the interchangeability question first; then tell lists per surface where a tell is a pattern *without a trace*; then a Design Specificity Score across eleven dimensions in which beautiful-but-generic fails on audience, product, content, brand, and memorability specificity. The cross-project sameness test in `docs/SAMENESS-TEST.md` catches house styles at the rule level.

## Guard 13 — progressive disclosure by stage and surface

**Fixes:** the always-loaded files carrying the aesthetic rules while the reasoning files loaded rarely; thirty-four reference and blueprint files.

**Mechanism:** fourteen references. One always-loaded reasoning file with no visual values. Everything else loads by pipeline stage and surface type. A dashboard never loads the marketing file.

## Guard 14 — structural tests

**Fixes:** regressions that reintroduce a defaults table, a ban list, a year-stamped trend, or a dangling reference.

**Mechanism:** `test/skill-structure.test.js` runs in CI: link integrity, pipeline order, fork presence, no hex in the core file, prescriptive-rule lint, no year-stamped trend claims, command frontmatter, product file forbids marketing chrome, token templates carry tripwires only.

## What was deliberately not done

- **No enforced novelty.** "Be different" produces bad design as reliably as "be safe" produces boring design. Every guard forces a *reason*, not a deviation.
- **No bans.** Centered layouts, cards, Inter, gradients, asymmetry, and bento are neither good nor bad. The problem is not familiarity; it is unreasoned repetition.
- **No style catalogue as guidance.** Bento, aurora, glass, grain, brutalism, oversized editorial type, and dark-glow live in one appendix labelled "optional techniques, never defaults", each with a WHEN and a cost.
- **No fabrication to fill gaps.** A marked empty slot is honest; a fabricated testimonial is a liability.
- **No new theory.** Gestalt, Hick, Fitts, Jakob, Tesler, Doherty, progressive disclosure, recognition over recall, and the rest appear only as the decision each forces and the test that checks it.

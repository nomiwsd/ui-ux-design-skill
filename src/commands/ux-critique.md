---
description: Critique a design — AI-Slop Detector 2.0 and Design Specificity Score — and say specifically why it is generic, weak, or broken
argument-hint: [URL, screenshot, or path to components]
---

# /ux-critique — Design critique

**Path:** `src/commands/ux-critique.md`

Read `{{SKILL_PATH}}/references/13-validation.md` and `{{SKILL_PATH}}/references/00-design-reasoning.md`. Then, by surface: `references/02-marketing-ux.md` §4 (section anatomy and failure modes) for marketing surfaces, `references/03-product-ux.md` §3–4 for product surfaces. Read `references/04-visual-system.md` for hierarchy, type, color, and composition criteria.

Target: $ARGUMENTS

Never interview. The artifact is in front of you.

## 1. Identify the surface

Marketing, product, or hybrid — and infer the context profile from what you can see (who this is for, how often, how expert, how risky). Critiquing a settings screen against marketing tells, or a launch page against app density, is itself a failure. State the surface and profile in one line.

## 2. The primary question

**Could this interface be reused for an unrelated company by changing only the logo, headline, accent color, and images?**

Answer honestly. Then list the decisions that would have to change for the answer to be *no*. Those are the untraced decisions and the headline finding if the answer is *yes*.

## 3. The blur test

Describe what survives at 8px blur. One gray mass means hierarchy is the root problem and nothing else matters until it is fixed. Three deliberate stops in the right order means hierarchy is not the problem.

## 4. Slop Detector 2.0

Run the tell list for the identified surface from `13-validation.md` §1. Each tell is a pattern **without a trace**, not a pattern. Report the count of untraced items and list them. Interpretation:

- 0–2: specific
- 3–5: partially reasoned; fix before shipping
- 6+ or primary question *yes*: generic; the remedy is at the reasoning stage, not the visual one

Do not count a conventional pattern as a tell when convention is correct for this user (occasional, novice, high-trust, or high-frequency operational). Do count expressive treatments on repeated-use or high-risk surfaces.

## 5. Design Specificity Score

Score the eleven dimensions in `13-validation.md` §2. Report the total (0–100) and the lowest dimension; the lowest dimension is the first structured finding. Memorability is scored only when the business goal needs recall; otherwise correctly having no signature device scores full marks.

## 6. Structured critique

**What works** — specific. Vague praise is worthless.

**What breaks**, ordered by user impact:
hierarchy → task path and navigation → states (empty, loading, error, partial) → contrast, focus, targets → density vs frequency → grouping and alignment → color architecture (layers separated? action distinct from state and data?) → type system (faces by property? ratio by reading context? script coverage?) → responsiveness (reflow decisions or accidents?) → copy → motion (jobs or decoration?) → surface effects.

**What is missing** — states, evidence at the decision point, reflow decisions, a keyboard model, consequence statements, a home-screen job, a message hierarchy.

**Fix list** — numbered by priority, with concrete values or code, and effort (S/M/L). "Increase whitespace" is not a fix; "section 3 padding 96→64px so it reads as support for section 2, which is the claim it proves" is.

## Rules

- Lead with the single highest-leverage change in one line, before everything else. Most people act on one thing.
- Separate **broken** (accessibility failures, unusable states, unreachable tasks) from **weak** (generic, untraced). Both matter; they have different urgency.
- If the design is conventional *and convention is correct for this user*, say so and critique execution, not convention. Familiarity is not a defect.
- If the design is expressive *and the surface is repeated-use or high-risk*, that is a finding: the brand won an argument it should have lost.
- Never recommend a style ("make it more editorial", "try a bento") as a fix. Recommend a decision with its trace.
- Be direct. A polite critique that leaves the design unchanged has failed.

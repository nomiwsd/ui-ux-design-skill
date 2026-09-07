---
description: Run the discovery interview with drafted answer options before any design work
argument-hint: [one-line project description, optional URL or repo path]
---

# /ux-discover — Discovery

**Path:** `src/commands/ux-discover.md`

Read `{{SKILL_PATH}}/references/00-design-reasoning.md` (context model) and `{{SKILL_PATH}}/references/01-discovery.md` (question bank).

Context: $ARGUMENTS

## The mechanic

**Do not ask open questions.** For every question, infer the most likely answer from the request, then present 3–4 lettered options with one marked recommended and a one-clause consequence each. The user replies `1b, 2 rec, 3a, 4 skip`.

An option is useful only if it leads somewhere visibly different. Two options that produce the same design are padding; replace one.

Required shape:

> **2. Primary user** — from "site for my friend's coffee roastery" I'd guess:
> **a)** ☑ *recommended* — 28–45, buys for home, occasional visitor, ~75% phone → mobile-first, image-led, generous density
> **b)** 45–65, gift buyers → larger type, gifting flow, conventional structure
> **c)** Wholesale cafés ordering weekly → frequent, professional; order history first — a product surface, not a brochure
> **d)** Something else — a few words is enough

## Steps

1. **Infer first.** Given a URL, repo, Figma file, or logo, inspect it and state what you found (stack, colors, fonts, product type, existing IA). Confirm rather than ask from zero.
2. **Round 1** — the 8 shared questions from `01-discovery.md`: surfaces, primary user, secondary users, jobs and tasks with frequency, business objective and primary action, trust and risk, content available, brand and competitors. State the reply format once. Stop and wait.
3. **Round 2** — by surface: the marketing questions (objections, evidence, traffic and message match, decision journey) and/or the product questions (entities and volume, workflows, roles, input model, consequential actions), plus constraints (stack, devices, accessibility needs and obligations, locale). Max 8. Stop and wait.
4. **Derive, do not ask:** theming, motion level, 3D, density. State each as an assumption with its trace.
5. **Play back** in ~6 lines: context profile in one line, surfaces and their type, primary user, top tasks with frequency, primary action, trust level. Ask for one correction pass.
6. **Write** `design/00-brief.md` per `references/11-storybook-template.md`, with the context profile line at the top and an **Assumptions** table for everything skipped or guessed.

## Two questions to include even in a compressed run

- *"What would make someone choose you over the obvious alternative?"* — the primary message, or the reason the product exists.
- *"Name something whose feel you envy, and something you'd hate to be compared to."* — record each as a **mechanism** (what it does that we want / what we are not taking), never as an appearance.

## Rules

- Never design, name a palette, or write code in this command.
- Never more than 8 questions per message, never more than 2 rounds.
- Skipped → choose the default, log it, continue. Never stall.
- Capture the persona's **vocabulary**. It is what keeps the copy from sounding like the category.
- Capture **task frequency** and **expertise**. They decide density and disclosure later, and nothing else does.

## Gate before finishing

Both must be true:

1. *"This is for ___, who needs to ___ [how often], while ___, and if it goes wrong ___."*
2. One sentence about this product that a direct competitor could not write about theirs.

If either fails, ask one more targeted question rather than writing a brief you will design badly from.

Finish by saying the next command is `/ux-direction`, and that it returns three strategically different options to choose from, not a finished design.

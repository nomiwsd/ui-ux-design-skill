---
description: Run the discovery interview with drafted answer options before any design work
argument-hint: [one-line project description, optional URL or repo path]
---

# /ux-discover — Discovery interview

**Path:** `src/commands/ux-discover.md`

Read `{{SKILL_PATH}}/references/01-discovery-interview.md`.

Context: $ARGUMENTS

## The mechanic

**Do not ask open questions.** For every question, infer the most likely answer from the request, then present 3–4 concrete lettered options with one marked recommended and a one-clause consequence for each. The user should be able to reply `1b, 2 rec, 3a, 4 skip`.

An option is only useful if it leads somewhere visibly different. If two options would produce the same design, one of them is padding — replace it.

Example of the required shape:

> **3. Primary user** — my guess:
> **a)** ☑ *recommended* — 28–45, buys specialty coffee for home, ~75% phone → mobile-first, image-led, subscription framing
> **b)** 45–65, gift and occasional buyers → larger type, gifting flows, less subscription emphasis
> **c)** Wholesale and cafés → trade pricing, spec sheets, ordering accounts — a very different site
> **d)** Something else — a few words is enough

## Steps

1. **Infer first.** If a URL, repo, Figma link, or logo was given, inspect it before asking anything and state what you found (stack, existing colors, fonts, product type, current IA). Ask for confirmation rather than asking from zero.
2. **Round 1** — all 8 audience-and-product questions, each with drafted options. State the reply format once. Then stop and wait.
3. **Round 2** — the 8 build-constraint questions, same format. Then stop and wait.
4. **Play back** in ~6 lines: product, primary user in one sentence, top 3 tasks, primary conversion, tone adjectives, key constraints. Ask for one correction pass.
5. **Write** `design/00-brief.md` using the template in `references/12-storybook-template.md`, with an **Assumptions** section for everything skipped or guessed.

## Two questions to include even in a compressed run

- *"What would make a visitor choose you over the obvious alternative?"* — this is the hero content and the one thing no template can supply.
- *"Name a site whose feel you envy, and one you'd hate to be compared to."* — the negative is the more useful half and users answer it more confidently.

For every reference site named, record it in mechanism form: **what this does that we want / what we are deliberately not taking.** A reference recorded as an appearance produces a copy; a reference recorded as a mechanism produces a design.

## Rules

- Never design, name a palette, or write code in this command.
- Never more than 8 questions per message, never more than 2 rounds.
- "Defaults" → choose them, log them as assumptions, continue. Never stall.
- Capture the persona's **vocabulary** — the words they actually use for their problem. This is what keeps the copy from sounding like every other product in the category.

## Gate before finishing

You cannot close this command until both are true:

1. You can complete *"This is for ___, who needs to ___, while ___."*
2. You can write one sentence about this product that a direct competitor could not write about theirs.

If either fails, ask one more targeted question rather than writing a brief you'll design badly from.

Finish by telling the user the next command is `/ux-direction` — and that it will come back with three options to choose from, not a finished design.

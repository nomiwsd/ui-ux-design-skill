---
description: Run the UI/UX discovery interview before any design work
argument-hint: [one-line project description, optional URL or repo path]
---

# /ux-discover — Discovery interview

Read `{{SKILL_PATH}}/references/01-discovery-interview.md`.

Context provided by the user: $ARGUMENTS

1. If a URL, repo path, or existing design files were given, inspect them FIRST and state what you inferred (stack, existing colors, fonts, product type). Ask the user to confirm or correct rather than asking from zero.
2. Ask **Round 1** — all 8 questions, numbered, each with its default marked. Then stop and wait.
3. When answers arrive, ask **Round 2** — all 8 build-constraint questions. Then stop and wait.
4. Play the answers back in ~6 lines: product, primary user in one sentence, top 3 tasks, primary conversion, tone adjectives, key constraints. Ask for one correction pass.
5. Write the result to `design/00-brief.md` using the template in `references/12-storybook-template.md`, including an **Assumptions** section for anything skipped.

Rules: never design, name a color, or write code in this command. Never ask more than 8 questions per message. If the user says "defaults", choose defaults, log them as assumptions, and continue.

Finish by telling the user the next command is `/ux-storybook`.

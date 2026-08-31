---
description: Run the full accessibility gate against the design or the code
argument-hint: [path to files, URL, or "design" to check the storybook]
---

# /ux-a11y — Accessibility audit

Read `{{SKILL_PATH}}/references/07-craft-and-accessibility.md` (accessibility gate).

Target: $ARGUMENTS

Work through the gate in four groups — perceivable, operable, understandable, robust — and report each item as pass / fail / not applicable with the specific evidence (file and line, or the measured ratio). Never mark an item passed without checking it.

Order the failures by user impact, and give each one a concrete fix with the exact value or code change, not a principle.

Check both themes. Include the manual checks automated tools miss: keyboard-only walkthrough of the primary flow, focus visibility on every interactive element, 200% zoom, 320px width, and reduced-motion behaviour.

Write the result to `design/07-accessibility.md` with any deliberate exception recorded alongside its justification.

---
description: Write the motion spec — every animation with trigger, timing, library, fallback
argument-hint: [intensity level 1-4, or "audit" to inventory an existing site]
---

# /ux-motion — Motion specification

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/08-motion-system.md`.

Input: $ARGUMENTS

1. Confirm the intensity level (1 near-static → 4 showcase). If not given, infer from product type and say what you inferred.
2. Define the motion tokens (durations, easings, stagger) if they do not already exist.
3. Produce the `MOT-xx` table: ID, element, trigger, property, duration/easing, library, reduced-motion fallback. One row per animation that will exist — nothing gets built that is not in this table.
4. Add the project rules: which element is LCP and therefore never animated in, no repeat-on-scroll-up, the JS budget in KB.
5. State the library split (CSS for state, GSAP for scroll sequences, Motion for component state) and justify shipping more than one library if you do.
6. Write to `design/06-motion-spec.md`.

Only `transform` and `opacity` for anything at 60fps. Entrances 200–300ms ease-out, exits 120–200ms ease-in, stagger 40–80ms capped at ~6 items.

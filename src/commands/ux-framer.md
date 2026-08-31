---
description: Implement Motion (Framer Motion) animations for React components
argument-hint: [component or MOT ids, e.g. "modal, tabs, page transition"]
---

# /ux-framer — Motion / Framer Motion implementation

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/10-motion-react-recipes.md`.

Target: $ARGUMENTS

1. Detect whether the project has `motion` or `framer-motion` and match the existing import style.
2. Wrap the app in `<MotionConfig reducedMotion="user">` once, rather than guarding every component.
3. Use variants for choreography, `viewport={{ once: true }}` for scroll reveals, `AnimatePresence` with stable keys for exits, `layoutId` for shared elements.
4. Pair every `whileHover` with an equivalent focus state.
5. Keep page transitions under 300ms and never animate the LCP element in.
6. Define variant objects at module scope, and use `LazyMotion` if the app is large.

---
description: Implement GSAP + ScrollTrigger animations from the motion spec
argument-hint: [MOT ids, or the effect wanted e.g. "pinned process section"]
---

# /ux-gsap — GSAP implementation

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/09-gsap-recipes.md`.

Target: $ARGUMENTS

1. If `design/06-motion-spec.md` exists, implement only the listed IDs. If it does not, write the spec rows for what you are about to build first.
2. Use the correct setup for the stack: `useGSAP` with `scope` in React, `gsap.context()` elsewhere, `"use client"` in Next App Router, `registerPlugin` for every plugin used.
3. Wrap everything in `gsap.matchMedia()` with a `prefers-reduced-motion` branch that sets the end state and returns.
4. Refresh ScrollTrigger after fonts and images load. Use `invalidateOnRefresh` on anything with computed start/end.
5. Never leave critical content at `opacity: 0` in CSS with no JS fallback.
6. After writing the code, list what to verify: mobile pin behaviour, keyboard access to any horizontally scrolled content, and the Lighthouse impact.

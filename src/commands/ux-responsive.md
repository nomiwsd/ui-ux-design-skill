---
description: Audit or plan responsive behaviour across breakpoints
argument-hint: [page or component path]
---

# /ux-responsive — Responsive audit

Read `{{SKILL_PATH}}/references/07-craft-and-accessibility.md` (responsive section).

Target: $ARGUMENTS

For each breakpoint (320, 375, 768, 1024, 1280, 1440, 1920) state what changes and why — information priority, not just shrinking. Check: touch targets ≥44px, no horizontal overflow at 320px, readable at 200% zoom, `dvh` instead of `vh` for full-height sections, safe-area insets, sticky headers under 64px on mobile, tables that reflow rather than scroll blindly, and hover-only affordances that disappear on touch.

Prefer intrinsic layout (`auto-fit` + `minmax`, `clamp()`, container queries) over adding breakpoints. Recommend a new breakpoint only where the layout actually breaks.

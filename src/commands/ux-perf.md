---
description: Audit performance of the design and animation layer against the budget
argument-hint: [URL or project path]
---

# /ux-perf — Performance and motion budget

Read `{{SKILL_PATH}}/references/08-motion-system.md` (performance budget) and `references/11-threejs-webgl.md`.

Target: $ARGUMENTS

Check and report: LCP element and whether anything animates or delays it, CLS sources (unsized images, injected banners, layout-animating transitions), INP risks (scroll handlers, unthrottled pointer events, heavy re-renders), animation JS weight by library, font loading strategy, image formats and sizing, and any WebGL cost.

Flag every animated property that is not `transform` or `opacity`.

Give the fix list ordered by measured impact, and state the expected Lighthouse mobile score before and after. Profile assumptions against a mid-range Android on 4G, not a desktop.

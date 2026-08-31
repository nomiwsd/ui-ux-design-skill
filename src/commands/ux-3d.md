---
description: Add a Three.js / R3F scene with fallbacks and a performance budget
argument-hint: [what the 3D shows, e.g. "product viewer" or "particle hero"]
---

# /ux-3d — Three.js / WebGL

## Preflight

Do not interview for this. It is a single decision.

- If `design/00-brief.md` exists, use it.
- If not, infer from the request and the codebase, then state your assumption in one line —
  *"Assuming B2B SaaS, adults, medium tech comfort; say if that's off."*
- Ask at most **one** question, and only when the answer genuinely changes the output.


Read `{{SKILL_PATH}}/references/11-threejs-webgl.md`.

Target: $ARGUMENTS

1. First, challenge the requirement honestly: does this answer a question 2D cannot? State the cost (KB, battery, LCP risk) and offer the lighter alternatives (video with poster, Lottie, animated SVG, Spline, a single shader with OGL). Proceed only if 3D still wins.
2. Implement with the required pattern: dynamic import with `ssr: false`, a poster image as the loading fallback, LCP content as plain DOM outside the canvas, DPR capped at 1.5–2, `PerformanceMonitor` degradation, `frameloop="demand"` under reduced motion.
3. Add the guards: WebGL capability check, low-power detection, `webglcontextlost` handling, pause when off-screen.
4. Give the asset pipeline: `gltf-transform optimize`, Draco/Meshopt geometry, KTX2 textures, target <100k triangles and <100 draw calls.
5. Ensure everything the scene communicates also exists in the DOM, and mark a decorative canvas `aria-hidden="true"`.
6. Report the measured bundle delta and the Lighthouse mobile score before and after.

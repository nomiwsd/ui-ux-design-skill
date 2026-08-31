---
description: Spec and implement the motion layer, including scroll sequences and WebGL
argument-hint: [level 1-4 | implement | 3d | audit]
---

# /ux-motion — Motion spec and implementation

**Path:** `src/commands/ux-motion.md`

Covers the spec, the CSS/GSAP/Motion implementation, and 3D. Motion is one discipline with one budget; splitting it across commands is how sites end up shipping two animation libraries that do the same thing.

Mode: $ARGUMENTS  (default: spec if none exists, else `implement`)

## Preflight

- `design/00-brief.md` exists → read the intensity level from it. Ask nothing.
- Missing → infer the level from the product type and say what you inferred, specific to this product. Ask at most one question, only if the answer genuinely changes the output.

Read `{{SKILL_PATH}}/references/08-motion-system.md`. Then, by mode: `09-gsap-recipes.md` for scroll work, `10-motion-react-recipes.md` for React component state, `11-threejs-webgl.md` for 3D.

---

## Mode: spec

1. Confirm the intensity level (1 near-static → 4 showcase). Level 3+ requires a working level-1 version underneath — the site must be fully usable and readable with JS disabled.
2. Define motion tokens (durations, easings, stagger) if they don't exist.
3. Produce the `MOT-xx` table: ID, element, trigger, property, duration/easing, library, reduced-motion fallback. **One row per animation that will exist.** Nothing gets built that isn't in this table.
4. Project rules: which element is LCP and therefore never animated in, no repeat-on-scroll-up, the JS budget in KB.
5. State the library split and justify shipping more than one. A defensible split: CSS for state, Motion for component state, GSAP for scroll sequences. Shipping both GSAP and Motion for overlapping jobs is ~60–100KB of duplicate capability.
6. Write `design/07-motion-spec.md`.

**Anti-slop check on the spec:** if every row is "fade up 20px on scroll", that isn't a motion system, it's a default. Motion should reflect the art direction — a dense utilitarian direction earns crisp instant state changes, not gentle reveals; an editorial direction earns considered mask reveals on a few key elements rather than every section. Cut any row whose job you can't name in four words.

---

## Mode: implement

1. Implement only IDs listed in the spec. If a spec row doesn't exist for something, write the row first.
2. **CSS first.** Anything achievable with a transition or `animation-timeline: view()` does not need a library. Start from `{{SKILL_PATH}}/assets/motion-snippets.css`.
3. **GSAP**: `useGSAP` with `scope` in React, `gsap.context()` elsewhere, `"use client"` in Next App Router, `registerPlugin` for every plugin. Wrap in `gsap.matchMedia()` with a `prefers-reduced-motion` branch that sets the end state and returns. Refresh ScrollTrigger after fonts and images load; `invalidateOnRefresh` on anything with computed start/end.
4. **Motion (Framer)**: match the project's existing import (`motion` or `framer-motion`). Wrap once in `<MotionConfig reducedMotion="user">` rather than guarding every component. Variants at module scope, `viewport={{ once: true }}`, `AnimatePresence` with stable keys, `layoutId` for shared elements. Pair every `whileHover` with an equivalent focus state.
5. Never leave critical content at `opacity: 0` in CSS with no JS fallback. Never animate the LCP element in.
6. Keep page transitions under 300ms.
7. Keep animation code in one place per section so it can be audited against the spec.

After writing, list what to verify: mobile pin behaviour, keyboard access to any horizontally scrolled content, and the Lighthouse delta.

---

## Mode: 3d

1. **Challenge the requirement first.** 3D must answer a question 2D cannot — showing a physical product, spatial data, or being the brand statement itself. State the cost honestly (KB, battery, LCP risk) and offer the lighter alternatives: a looping video with a poster, Lottie, animated SVG, Spline, or a single shader with OGL. Proceed only if 3D still wins. A decorative blob behind a hero never wins.
2. Required pattern: dynamic import with `ssr: false`, poster image as the loading fallback, LCP content as plain DOM outside the canvas, DPR capped at 1.5–2, `PerformanceMonitor` degradation, `frameloop="demand"` under reduced motion.
3. Guards: WebGL capability check, low-power detection, `webglcontextlost` handling, pause when off-screen.
4. Asset pipeline: `gltf-transform optimize`, Draco/Meshopt geometry, KTX2 textures, <100k triangles, <100 draw calls.
5. Everything the scene communicates must also exist in the DOM. Decorative canvas gets `aria-hidden="true"`.
6. Report the measured bundle delta and the Lighthouse mobile score before and after.

---

## Mode: audit

Inventory every animation on the existing site into the `MOT-xx` table format, then report: animations with no job, animated properties that aren't `transform`/`opacity`, missing reduced-motion fallbacks, anything animating the LCP element, repeat-on-scroll-up, total animation JS weight by library, and duplicate-capability libraries.

Give the fix list ordered by user impact.

---

## Always

- `transform` and `opacity` only for anything at 60fps.
- Entrances 200–300ms ease-out; exits 120–200ms ease-in.
- Stagger 40–80ms, capped at ~6 items. Twelve staggered cards means the last arrives a second late.
- Entrance travel 12–32px, never 100px. Long travel reads as cheap.
- One focal point per view.
- Every animation needs a reduced-motion answer, usually the end state applied instantly.
- Profile on a mid-range Android, not a laptop.

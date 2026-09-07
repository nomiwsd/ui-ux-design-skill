---
description: Spec and implement motion by job — feedback, causality, orientation, continuity, state, storytelling — including scroll sequences and WebGL
argument-hint: [spec | implement | 3d | audit]
---

# /ux-motion — Motion by job

**Path:** `src/commands/ux-motion.md`

Motion is one discipline with one budget. There is no default animation: every row in the spec names its job, or it is cut.

Mode: $ARGUMENTS  (default: `spec` if none exists, else `implement`)

## Preflight

- `design/00-brief.md` exists → derive the motion budget from the context profile (`06-motion.md` §2). Ask nothing.
- Missing → infer the profile from the product type and say what you inferred, specific to this product. Ask at most one question.

Read `{{SKILL_PATH}}/references/06-motion.md`. Then by mode: `07-gsap-recipes.md` for scroll and timeline work, `08-motion-react-recipes.md` for React component state, `09-threejs-webgl.md` for 3D.

---

## Mode: spec

1. **Budget from context.** State which of the six jobs the profile licenses and which it forbids (`06` §2), with tags. A frequent, professional, task-driven product gets feedback, state, causality, orientation. Storytelling is licensed only on narrative marketing surfaces read once.
2. **Motion tokens** (durations, easings, stagger) if they do not exist.
3. **The MOT-xx table:** ID · element · **job** · trigger · property · duration and easing · library · reduced-motion answer. One row per animation that will exist. Nothing is built that is not here.
4. **Project rules:** the LCP element, which is never animated in; no repeat on scroll-up; the JS budget in KB; the library split with justification for more than one.
5. Write `design/07-motion-spec.md`.

**Check on the spec:** if the job column is the same word in every row, or every row is a reveal, it is not a motion system. A dense product direction earns crisp state changes and continuity in lists; a narrative marketing direction may earn a few storytelling moments; nothing earns a fade-up on every section. Cut any row whose job you cannot name in four words.

---

## Mode: implement

1. Implement only IDs in the spec. Missing → write the row first.
2. **CSS first.** Transitions and `animation-timeline` need no library. Start from `{{SKILL_PATH}}/assets/motion-snippets.css`; every snippet there is opt-in.
3. **GSAP:** `useGSAP` with `scope` in React, `gsap.context()` elsewhere; `"use client"` in Next App Router; `registerPlugin` for every plugin; `gsap.matchMedia()` with a reduced-motion branch that sets the end state and returns; refresh ScrollTrigger after fonts and images load.
4. **Motion (Framer):** match the project's import; `<MotionConfig reducedMotion="user">` once; variants at module scope; `viewport={{ once: true }}`; `AnimatePresence` with stable keys; `layoutId` for shared elements; every `whileHover` paired with a focus equivalent.
5. Never leave critical content at `opacity: 0` in CSS without a JS fallback. Never animate the LCP element in.
6. Route transitions under 300ms total; prefer the View Transitions API where supported.
7. Motion code in one place per section or screen so it can be audited against the spec.

After writing, list what to verify: mobile pin behavior, keyboard access to any horizontally scrolled content, the Lighthouse delta.

---

## Mode: 3d

1. **Challenge the requirement.** 3D must answer a question 2D cannot: a physical product, spatial data, or the brand statement itself on a portfolio. State the cost (KB, battery, LCP) and offer the lighter alternatives: looping video with a poster, Lottie, animated SVG, a pre-rendered sequence, a single shader. Proceed only if 3D still wins. Decoration behind a headline never wins.
2. Required pattern: dynamic import with `ssr: false`; poster as the loading fallback; LCP content as plain DOM outside the canvas; DPR capped at 1.5–2; `PerformanceMonitor` degradation; `frameloop="demand"` under reduced motion.
3. Guards: WebGL capability, low-power detection, `webglcontextlost`, pause off-screen.
4. Assets: `gltf-transform optimize`, Draco or Meshopt, KTX2, <100k triangles, <100 draw calls.
5. Everything the scene communicates exists in the DOM. Decorative canvas gets `aria-hidden="true"`.
6. Report bundle delta and Lighthouse mobile before and after.

---

## Mode: audit

Inventory every animation on the existing product into the MOT-xx format with a **job** column. Report: animations with no job; animated properties that are not `transform` or `opacity`; missing reduced-motion fallbacks; anything animating the LCP element; repeat-on-scroll-up; scroll reveals or entrance animations on repeated-use surfaces; total animation JS by library; duplicate-capability libraries.

Fix list ordered by user impact. The first item is usually "remove."

---

## Always

- `transform` and `opacity` only for anything at 60fps.
- Entrances 200–300ms ease-out; exits 120–200ms ease-in.
- Stagger 40–80ms, capped at ~6. Entrance travel 8–32px.
- One focal point per view. Once, never per scroll pass.
- Every animation has a reduced-motion answer, usually the end state.
- Profile on a mid-range Android.

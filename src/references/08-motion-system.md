# Motion System — the spec that makes animation look designed rather than added

Premium motion is **fast, consistent, and purposeful**. Amateur motion is slow, decorative, and inconsistent. The difference is a system, not a library.

## Four rules

1. **Motion has a job.** Show a relationship (this modal came from that button), give feedback (received your click), direct attention (this number changed), or maintain continuity (this list re-ordered). Anything with no job gets cut.
2. **Only `transform` and `opacity`** for anything that must hit 60fps. Animating `width`, `height`, `top`, `left`, `margin`, `filter`, or `box-shadow` forces layout or paint on every frame. Use `scale`/`translate` instead; for shadows, cross-fade two stacked pseudo-elements.
3. **Fast in, slower out.** Entrances 200–300ms with `ease-out`; exits 120–200ms with `ease-in`. Users wait for exits, so exits are always quicker.
4. **Every animation needs a reduced-motion answer** — usually the end state, applied instantly.

## Intensity levels (pick one in discovery, then hold the line)

| Level | Description | Contains | Typical for |
|---|---|---|---|
| **1 — Near static** | Only state feedback | Hover/focus color shifts, instant transitions | Gov, medical, high-accessibility, dashboards |
| **2 — Tasteful** (default) | Micro-interactions + gentle reveals | Button/card hover, fade-up on scroll, page transitions, skeletons | SaaS, corporate, e-commerce, most client work |
| **3 — Scroll storytelling** | Sequenced narrative | Pinned sections, parallax, scrub-linked reveals, text splitting, counters | Product launches, marketing sites, consumer brands |
| **4 — Showcase** | The motion is the product | WebGL, custom cursors, complex choreography, transitions between routes | Portfolios, agencies, award-seeking sites |

Level 3+ requires a working level-1 version underneath: the site must be fully usable and readable with JavaScript disabled or reduced motion on.

## Motion tokens

Define these once and reference them everywhere; hardcoded durations are why sites feel inconsistent.

```css
:root {
  /* durations */
  --dur-instant: 80ms;
  --dur-fast:    150ms;   /* hover, focus, small state changes */
  --dur-base:    250ms;   /* most transitions, entrances */
  --dur-slow:    400ms;   /* modals, drawers, larger surfaces */
  --dur-slower:  600ms;   /* full-section or page-level reveals */

  /* easings */
  --ease-out:      cubic-bezier(0.22, 1, 0.36, 1);      /* entrances — the workhorse */
  --ease-in:       cubic-bezier(0.55, 0, 1, 0.45);      /* exits */
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);      /* movement between two on-screen states */
  --ease-emphasis: cubic-bezier(0.34, 1.56, 0.64, 1);   /* slight overshoot — buttons, toggles, delight only */

  /* choreography */
  --stagger: 60ms;
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-instant:1ms; --dur-fast:1ms; --dur-base:1ms; --dur-slow:1ms; --dur-slower:1ms; --stagger:0ms; }
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Choreography

- **Stagger** siblings by 40–80ms, and cap the sequence at ~6 items. Twelve staggered cards means the last one arrives a second late and the user has already scrolled past.
- **Distance**: entrances move 12–32px, never 100px. Long travel reads as cheap.
- **One focal point per view.** If three things animate at once, none of them is emphasized.
- **Order communicates hierarchy**: heading, then subhead, then CTA, then supporting visual.
- **Never animate on every scroll pass.** Fire reveals once (`once: true`); repeating animations on scroll-up are irritating and make content feel unstable.
- **Never delay content.** Text should be in the DOM and readable immediately; if an animation fails, the page must still be complete. Never set `opacity: 0` in CSS on critical content without a JS-failure fallback.

## Library selection

| Need | Reach for | Why |
|---|---|---|
| Hover, focus, simple state changes | CSS transitions | Zero JS, best performance, always the first choice |
| Component enter/exit, layout changes, gestures in React | Motion (Framer Motion) | Declarative, `AnimatePresence`, `layout` animations, springs |
| Scroll-driven sequences, pinning, timelines, SVG, text splitting | GSAP + ScrollTrigger | Best-in-class timeline control; framework-agnostic |
| Simple scroll reveals with no library | CSS scroll-driven animations / IntersectionObserver | Native, cheap; check browser support for scroll-timeline |
| 3D, shaders, particles, product viewers | Three.js (+ React Three Fiber) | Only when it earns its cost |
| Smooth scrolling / scroll normalization | Lenis | Pair carefully with ScrollTrigger; see `09-gsap-recipes.md` |
| Lottie/After Effects handoff | lottie-web / dotLottie | For illustrated brand animation from a designer |

Don't ship both GSAP and Motion unless both are genuinely used — that's ~60–100KB of duplicate capability. A common, defensible split: Motion for component/UI state, GSAP for scroll sequences.

## The premium effects catalogue

Cost is rough JS weight plus runtime risk. Match the level column to the chosen intensity.

| Effect | Level | Library | Cost | Notes |
|---|---|---|---|---|
| Button/card hover lift | 2 | CSS | none | `translateY(-2px)` + shadow swap; 150ms |
| Focus ring animation | 1 | CSS | none | Never remove focus rings to make them pretty |
| Fade-up reveal on scroll | 2 | CSS/IO/GSAP | tiny | 16–24px travel, 400ms, once only |
| Staggered list/grid reveal | 2 | GSAP/Motion | tiny | Cap at 6 items |
| Number count-up | 2 | GSAP | tiny | Tabular numerals so the layout doesn't jitter |
| Sticky nav shrink | 2 | CSS + IO | tiny | Height/padding change, not disappearance |
| Page/route transition | 2–3 | Motion / View Transitions API | small | 250–400ms, never blocks input |
| Marquee / logo ticker | 2 | CSS | none | Pause on hover, respect reduced motion |
| Split-text line/word reveal | 3 | GSAP SplitText | small | Mask overflow; keep the text in the DOM for SEO |
| Parallax layers | 3 | GSAP ScrollTrigger | small | Max ~15% differential, or it induces nausea |
| Pinned scroll sequence | 3 | ScrollTrigger `pin` | medium | Test on mobile; consider disabling under 768px |
| Horizontal scroll gallery | 3 | ScrollTrigger | medium | Always give a visible progress cue and an escape |
| Image reveal via clip-path | 3 | GSAP/CSS | tiny | Cheaper and cleaner than a scale-in |
| Magnetic button / custom cursor | 4 | GSAP quickTo | small | Pointer-fine devices only; never on touch |
| Scroll-linked SVG draw | 3 | GSAP DrawSVG | small | Great for process/timeline sections |
| Aurora gradient drift | 2 | CSS keyframes | none | Slow (20s+), subtle, pause under reduced motion |
| WebGL image hover distortion | 4 | Three.js/OGL | large | Needs a plain `<img>` fallback |
| 3D product viewer | 3–4 | R3F + drei | large | Lazy-load, poster fallback, see `11-threejs-webgl.md` |
| Particle/shader hero | 4 | Three.js | large | Guard LCP; do not render behind the H1 |

## Performance budget for motion

- Lighthouse Performance ≥90 on mobile *with* animations enabled.
- LCP < 2.5s — the LCP element (usually the hero headline or image) must never be animated in or hidden behind a loader.
- CLS < 0.1 — reserve space for anything that animates in; never animate layout properties.
- INP < 200ms — heavy scroll handlers are the usual culprit; keep work off the main thread and throttle.
- Total animation JS budget: ~50KB gzip for levels 1–2, ~120KB for level 3, plus a lazy-loaded 3D chunk for level 4.
- Profile on a mid-range Android, not a MacBook. That is where scroll-driven sites actually fail.

## Accessibility of motion

- Honor `prefers-reduced-motion` everywhere, including 3D (freeze the scene or render a static frame).
- Avoid large-area parallax and rapid zoom — these trigger vestibular disorders.
- Nothing flashes more than three times per second.
- Auto-playing carousels need a visible pause control, or should not autoplay at all.
- Never make an animation the only way to learn something; the information exists in the DOM regardless.
- Scroll-hijacking blocks keyboard users and screen readers. If used, keep native scrolling functional and provide skip links.

# Motion — only motion with a job

**Path:** `src/references/06-motion.md`

Motion is specified from **purpose**, then budgeted from **context**, then implemented from the spec. There is no default animation. A row in the motion spec that cannot name its job in four words is cut.

---

## 1. The six jobs

| Job | What it does for the user | Typical patterns |
|---|---|---|
| **Feedback** | Confirms an input was received | Press state, toggle, selection highlight, focus ring appearance |
| **Causality** | Shows that this came from that | Dialog grows from its trigger; panel slides from the edge it lives on; expansion in place |
| **Orientation** | Shows where the user is and where they went | Route transition direction; scroll position indicator; tab underline moving |
| **Continuity** | Keeps an object identifiable while it changes | Shared-element transition; list reorder; item moving between containers |
| **State transition** | Makes a change legible | Loading skeleton; value-change highlight; sort or filter re-layout; saved indicator |
| **Storytelling** | Paces a narrative the reader has chosen to follow | Scroll-linked sequence; pinned steps; progressive reveal on a launch page |

Anything else — reveals for their own sake, ambient drift, staggered entrances on content the user came to read — is decoration. Decoration is licensed only by an expressive brand on a non-task surface, and it is recorded as a choice with its cost.

---

## 2. Motion budget from context

Not asked in discovery; derived from the profile and stated as an assumption.

| Profile signal | What it licenses | What it forbids |
|---|---|---|
| Frequent · professional · task-driven | Feedback, state transition, causality, orientation — all short | Storytelling; entrance animations; anything that repeats per visit |
| High-risk · stressed users · health, finance, government | Feedback and state only; instant where possible | Parallax, large movement, anything ambient |
| Occasional · novice | Causality and orientation carry weight (they teach the model) | Speed that hides what happened |
| Expressive brand · marketing narrative · read once | Storytelling on a few key moments; one memorable transition | Effects on every section |
| Portfolio / agency | Storytelling and continuity as a demonstration of craft | A site that only works when it animates |
| Older adults · vestibular sensitivity known | Reduce by default | Parallax, zoom, auto-advance |
| Mobile-first · mid-range devices | CSS transitions; transform and opacity only | Heavy scroll handlers; `backdrop-filter` animation; WebGL without fallback |

---

## 3. Four technical rules

1. **Only `transform` and `opacity`** for anything that must hold 60fps. Animating `width`, `height`, `top`, `left`, `margin`, `filter`, or `box-shadow` forces layout or paint every frame; use scale and translate; cross-fade two shadows.
2. **Exits are faster than entrances.** Entrances 200–300ms ease-out; exits 120–200ms ease-in. Users wait for exits.
3. **Every animation has a reduced-motion answer**, usually the end state applied instantly. Including 3D: freeze the scene or show a poster.
4. **Never delay content.** Text is in the DOM and readable immediately; the LCP element is never animated in or hidden at `opacity: 0`; if the script fails, the page is complete.

---

## 4. Motion tokens

Define once, reference everywhere. Hardcoded durations are why sites feel inconsistent.

```css
:root {
  --dur-instant: 80ms;    /* feedback: press, toggle */
  --dur-fast:    150ms;   /* hover, focus, small state changes */
  --dur-base:    250ms;   /* most transitions, entrances */
  --dur-slow:    400ms;   /* dialogs, drawers, larger surfaces */
  --dur-slower:  600ms;   /* full-section or page-level, storytelling only */

  --ease-out:      cubic-bezier(0.22, 1, 0.36, 1);      /* entrances */
  --ease-in:       cubic-bezier(0.55, 0, 1, 0.45);      /* exits */
  --ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);      /* on-screen moves */
  --ease-emphasis: cubic-bezier(0.34, 1.56, 0.64, 1);   /* slight overshoot; toggles, playful brands only */

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

---

## 5. Patterns by job

| Job | Pattern | Duration | WHEN | Not for |
|---|---|---|---|---|
| Feedback | Press: scale .98 or translateY(1px) | 80–120ms | Every button and tappable item | — |
| Feedback | Hover lift or color shift | 150ms | Pointer devices; pair with an equivalent focus state | Touch-only surfaces (no hover) |
| Feedback | Focus ring appears | instant or ≤100ms | Always; never removed to look clean | — |
| Feedback | Toggle thumb travel | 150–200ms | Switches | — |
| Causality | Dialog scales from .96 at the trigger's position + fade | 200–250ms in, 150ms out | Modals, popovers | Full-screen takeovers (use a slide from the edge instead) |
| Causality | Drawer slides from the edge it belongs to | 250–300ms | Side panels, sheets | — |
| Causality | Expand in place (height via `grid-template-rows` or FLIP) | 200–300ms | Accordions, row expansion | Long lists (too many simultaneous) |
| Orientation | Route transition: fade + 8px in the direction of travel | ≤250ms total | Apps and sites with a sense of hierarchy; consider the View Transitions API | Anything over 300ms — the delay outlives the effect |
| Orientation | Tab indicator slides | 200ms | Tabs, segmented controls | — |
| Orientation | Scroll or reading progress | linked | Long articles; multi-step flows | Short pages |
| Continuity | Shared element (`layoutId`, View Transitions) | 250–400ms | Card → detail; list ↔ grid; item between columns | — |
| Continuity | List reorder / filter re-layout (FLIP) | 250–400ms, 20ms stagger | Sortable, filterable lists | Very long lists (virtualize instead) |
| State | Skeleton shimmer | 1.2–1.6s loop | Loads over ~1s; nothing under 300ms | — |
| State | Value-change highlight (brief background flash) | 600–1000ms fade | Live data, totals, counters | — |
| State | Saved / synced indicator | 150ms in, holds, 150ms out | Autosave surfaces | — |
| State | Count-up | 1–1.6s, tabular numerals | A number is the message | Anything the user waits on |
| Storytelling | Reveal on scroll (once, 16–24px, fade) | 400–600ms | Long narrative marketing page; reader has chosen to read; paces sections | **Any repeated-use surface; any app; any content the user came to find** |
| Storytelling | Pinned scroll sequence | scrubbed | Launch pages, a process that has stages | Mobile without testing; anything high-trust |
| Storytelling | Masked text reveal on a headline | 600–800ms | A launch or portfolio with a strong display face; text in DOM | The H1 when it is the LCP element |
| Storytelling | Parallax | ≤15% differential | Image-led brand pages | Vestibular-sensitive audiences; text layers |

---

## 6. Choreography rules

- **Stagger** siblings 40–80ms, capped at ~6 items. The seventh arrives after the user has scrolled on.
- **Distance:** entrances travel 8–32px. Long travel reads as cheap.
- **One focal point per view.** Three things animating at once emphasize nothing.
- **Order communicates hierarchy**: what matters most moves first.
- **Once.** Scroll-triggered motion fires once; repeating on scroll-up makes content feel unstable.
- **Never on the LCP element.**

---

## 7. Library selection

| Need | Reach for | Why |
|---|---|---|
| Hover, focus, press, simple state | CSS transitions | Zero JS; always the first choice |
| Component enter/exit, layout, gestures in React | Motion (Framer Motion) — `08-motion-react-recipes.md` | Declarative; `AnimatePresence`; `layout`; springs |
| Scroll-linked sequences, pinning, timelines, SVG, text splitting | GSAP + ScrollTrigger — `07-gsap-recipes.md` | Timeline control; framework-agnostic |
| Simple in-view reveals without a library | CSS scroll-driven animations or IntersectionObserver | Native; check support for `animation-timeline` |
| Route transitions | View Transitions API | Native; cheap; degrade gracefully |
| 3D, shaders, product viewers | Three.js / R3F — `09-threejs-webgl.md` | Only when it answers a question 2D cannot |
| Smooth scroll | Lenis (with care) | A taste decision; never on content-heavy or accessibility-critical sites |

Do not ship both GSAP and Motion unless each has a distinct job. A defensible split: CSS for state, Motion for component state, GSAP for scroll sequences.

---

## 8. Performance budget

- Lighthouse Performance ≥90 on mobile with animations enabled
- LCP < 2.5s; the LCP element never animated in or hidden behind a loader
- CLS < 0.1; reserve space for anything that animates in; never animate layout properties
- INP < 200ms; scroll handlers throttled and off the main thread where possible
- Animation JS: ~50KB gzip when only feedback, state, causality, and orientation are used; ~120KB when storytelling is licensed; a lazy-loaded chunk for 3D
- Profile on a mid-range Android, not a laptop

---

## 9. Accessibility of motion

- `prefers-reduced-motion` honored everywhere, including canvas and video
- No large-area parallax or rapid zoom; these trigger vestibular disorders
- Nothing flashes more than three times per second
- Auto-playing carousels and video have a visible pause, or do not autoplay
- No information exists only in an animation; the end state is in the DOM
- Scroll hijacking blocks keyboard and screen-reader users; if used, native scrolling stays functional and skip links exist

---

## 10. The spec

Every animation gets an ID, a **job**, and a reduced-motion answer. Format in `11-storybook-template.md` §07. The anti-repetition check on a finished spec: if the job column is the same word in every row, or if every row is "reveal", it is not a motion system; it is a default. Cut the rows whose job you cannot name.

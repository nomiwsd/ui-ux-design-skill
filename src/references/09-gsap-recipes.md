# GSAP Recipes (ScrollTrigger, SplitText, Flip, Lenis)

**Path:** `src/references/09-gsap-recipes.md`

GSAP and its plugins — ScrollTrigger, SplitText, ScrollSmoother, Flip, DrawSVG, MorphSVG — are free for commercial use since the Webflow acquisition (2025). Install `gsap` and, for React, `@gsap/react`.

```bash
npm i gsap @gsap/react
```

## React setup (the part people get wrong)

Always scope animations and let `useGSAP` handle cleanup, otherwise Strict Mode double-invocation and route changes leave orphaned tweens and ScrollTriggers.

```jsx
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Section() {
  const root = useRef(null);

  useGSAP(() => {
    gsap.from(".reveal", {
      y: 24, opacity: 0, duration: 0.5, ease: "power2.out",
      stagger: 0.06,
      scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
    });
  }, { scope: root });          // selectors resolve inside root; all tweens auto-reverted

  return <section ref={root}>{/* ... .reveal children ... */}</section>;
}
```

In Next.js App Router, any component using GSAP needs `"use client"`. Call `ScrollTrigger.refresh()` after fonts load or content changes height (`document.fonts.ready.then(() => ScrollTrigger.refresh())`).

## Reduced motion and breakpoints in one place

`gsap.matchMedia()` is the correct mechanism — it cleans up automatically when a query stops matching.

```js
const mm = gsap.matchMedia();

mm.add({
  isDesktop: "(min-width: 768px)",
  isMobile:  "(max-width: 767px)",
  reduced:   "(prefers-reduced-motion: reduce)",
}, (ctx) => {
  const { isDesktop, reduced } = ctx.conditions;
  if (reduced) {
    gsap.set(".reveal", { clearProps: "all", opacity: 1, y: 0 });
    return;                                   // ship the end state, nothing more
  }
  gsap.from(".reveal", {
    y: isDesktop ? 32 : 16, opacity: 0, duration: 0.5, ease: "power2.out",
    stagger: 0.06,
    scrollTrigger: { trigger: ".reveal", start: "top 85%", once: true },
  });
});
```

## Reveal on scroll (the 80% case)

```js
gsap.utils.toArray("[data-reveal]").forEach((el) => {
  gsap.from(el, {
    y: 24, opacity: 0, duration: 0.6, ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%", once: true },
  });
});
```

Put `[data-reveal]` on section wrappers, not on every element. Reveal groups, not atoms.

## Scrubbed timeline (scroll-linked, not scroll-triggered)

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".process",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1,            // 1 = ~1s of smoothing; `true` is instant and feels jittery
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});
tl.from(".step-1", { autoAlpha: 0, y: 40 })
  .from(".step-2", { autoAlpha: 0, y: 40 }, "+=0.3")
  .from(".step-3", { autoAlpha: 0, y: 40 }, "+=0.3");
```

Pinning rules: the pinned element needs a fixed height, `pin-spacing` handles the layout offset, and pinning inside a transformed ancestor breaks — keep pinned sections out of transformed parents. Disable pinning under 768px unless it has been tested on a real phone.

## Horizontal scroll gallery

```js
const track = document.querySelector(".track");
gsap.to(track, {
  x: () => -(track.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".gallery",
    start: "top top",
    end: () => "+=" + (track.scrollWidth - innerWidth),
    pin: true, scrub: 1, invalidateOnRefresh: true,
  },
});
```

Give the user a progress bar and make sure the same content is reachable by keyboard (arrow keys or focusable cards that scroll into view).

## Split-text headline reveal

```js
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const split = new SplitText(".headline", { type: "lines,words", linesClass: "line" });
// .line { overflow: hidden; }  →  words rise out of a mask, which is the premium look
gsap.from(split.words, {
  yPercent: 110, duration: 0.8, ease: "power4.out", stagger: 0.03,
});
```

Re-split on resize (`split.revert()` then re-create), and skip splitting entirely under reduced motion. The text stays in the DOM, so SEO and screen readers are unaffected — but never split content that a screen reader must read as one continuous string without checking it first.

## Parallax

```js
gsap.to(".hero-bg", {
  yPercent: 15, ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
});
```

Keep the differential under ~15%. Use `yPercent` rather than `y` so it scales across viewports.

## Magnetic button (pointer-fine only)

```js
const btn = document.querySelector(".magnetic");
const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

if (matchMedia("(pointer: fine)").matches) {
  btn.addEventListener("pointermove", (e) => {
    const r = btn.getBoundingClientRect();
    xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
    yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
  });
  btn.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
}
```

`quickTo` exists precisely for high-frequency events — never create a new tween inside `pointermove`.

## Counters

```js
gsap.from(".stat", {
  textContent: 0, duration: 1.6, ease: "power1.out", snap: { textContent: 1 },
  scrollTrigger: { trigger: ".stats", start: "top 80%", once: true },
  onUpdate() { this.targets()[0].textContent = Number(this.targets()[0].textContent).toLocaleString(); },
});
```

Use `font-variant-numeric: tabular-nums` so the width doesn't jump.

## Flip (layout changes that would otherwise be impossible)

```js
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const state = Flip.getState(".card");
container.classList.toggle("grid-expanded");     // do the DOM/CSS change
Flip.from(state, { duration: 0.5, ease: "power2.inOut", absolute: true, stagger: 0.02 });
```

Ideal for filtering grids, expanding a card into a detail view, and moving an element between containers.

## Lenis smooth scroll + ScrollTrigger

Smooth scroll is a taste decision — it can feel premium and can equally feel broken. Never use it on content-heavy or accessibility-critical sites. If used, wire it to GSAP's ticker so ScrollTrigger stays in sync:

```js
import Lenis from "lenis";

const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// disable entirely for users who asked for less motion
if (matchMedia("(prefers-reduced-motion: reduce)").matches) lenis.destroy();
```

Also verify: anchor links still work (`lenis.scrollTo`), focus scrolling still works for keyboard users, and `position: sticky` behaves.

## Common GSAP mistakes

- Forgetting `gsap.registerPlugin` — plugins silently do nothing.
- Animating `opacity` from 0 in CSS with no JS fallback → invisible content if the script fails. Use `autoAlpha` and set the initial state in JS, or accept a flash.
- Creating ScrollTriggers before images load, so `start`/`end` are computed from the wrong height. Refresh after load.
- Using `scrub: true` where `scrub: 1` is wanted; the smoothing is what makes it feel expensive.
- Not killing triggers on route change in SPAs → memory leaks and ghost animations. `useGSAP` solves this in React; elsewhere use `gsap.context()`.

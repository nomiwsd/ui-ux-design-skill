# Motion (Framer Motion) Recipes

Framer Motion is now published as **Motion** (`npm i motion`, imported from `motion/react`). The older `framer-motion` package still works and the API is the same; use whichever the project already has.

```bash
npm i motion         # then: import { motion, AnimatePresence } from "motion/react"
```

Motion is the right tool for **component state**: enter/exit, layout changes, gestures, drag, and shared-element transitions. For long scroll-linked sequences, GSAP's timeline control is better. Using both is fine if each has a clear job.

## Variants — the pattern that keeps choreography readable

```jsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

<motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
  {features.map((f) => <motion.li key={f.id} variants={item}>{f.title}</motion.li>)}
</motion.ul>
```

`viewport={{ once: true }}` is almost always what you want — re-animating on every scroll-up makes a page feel unstable.

## Reduced motion, done once

```jsx
import { MotionConfig, useReducedMotion } from "motion/react";

export default function App({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

`reducedMotion="user"` makes Motion skip transform/layout animations for users who asked for less motion, while keeping opacity changes. For custom logic:

```jsx
const shouldReduce = useReducedMotion();
<motion.div animate={{ y: shouldReduce ? 0 : -8 }} />
```

## Exit animations

```jsx
<AnimatePresence mode="wait">
  {open && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  )}
</AnimatePresence>
```

`mode="wait"` for full swaps (route/tab changes), default mode for lists. Every child needs a stable `key`.

## Layout animations (the thing CSS genuinely can't do)

```jsx
<motion.div layout transition={{ type: "spring", stiffness: 400, damping: 40 }} />

/* shared element between two components */
{tabs.map(t => (
  <button key={t.id} onClick={() => setActive(t.id)} className="relative">
    {t.label}
    {active === t.id && <motion.div layoutId="tab-pill" className="absolute inset-0 rounded-full bg-[var(--accent)]" />}
  </button>
))}
```

`layoutId` gives free shared-element transitions — animated tab pills, cards expanding into detail views, list-to-grid switches. Add `layout="position"` when only position should animate (avoids text stretching).

## Spring tuning

Springs feel more natural than duration curves for anything the user directly manipulates.

| Feel | Config |
|---|---|
| Snappy UI (tabs, toggles) | `{ type: "spring", stiffness: 400, damping: 40 }` |
| Smooth panel/drawer | `{ type: "spring", stiffness: 260, damping: 30 }` |
| Gentle, weighty | `{ type: "spring", stiffness: 150, damping: 26 }` |
| Playful bounce (use rarely) | `{ type: "spring", stiffness: 300, damping: 12 }` |

Rule of thumb: if it bounces more than once, it's too bouncy for a professional interface.

## Scroll-linked progress and parallax

```jsx
import { useScroll, useTransform, motion } from "motion/react";

const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

<motion.div ref={ref} style={{ y }} />
```

For a top-of-page reading progress bar:

```jsx
const { scrollYProgress } = useScroll();
<motion.div style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} className="h-1 bg-[var(--accent)]" />
```

## Gestures

```jsx
<motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  whileFocus={{ scale: 1.01 }}
  transition={{ duration: 0.15 }}
/>
```

Always pair `whileHover` with an equivalent focus state, or keyboard users get a dead interface. `whileTap` is one of the cheapest ways to make an app feel responsive on mobile.

## Page transitions (Next.js App Router)

```jsx
"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
```

Keep page transitions under 300ms total. Anything longer makes navigation feel sluggish, and the effect wears off after the second click while the delay never does. Consider the native **View Transitions API** instead where support allows — it's cheaper and works without a client-side animation library.

## Performance

- Prefer `LazyMotion` with `domAnimation` features to cut bundle size in large apps.
- Animate `transform` and `opacity`; avoid animating `width`/`height` outside of `layout`.
- Don't wrap every element in `motion.*` — the wrapper has a cost, and a page with 200 motion components will stutter on mid-range devices.
- Use `will-change` sparingly and only during the animation; leaving it on permanently wastes GPU memory.

## Common mistakes

- Animating in content that is needed for LCP — the hero headline should render immediately, not fade in over 600ms.
- Missing `key` on `AnimatePresence` children, so exits never fire.
- Re-creating variant objects inside render, defeating memoization; define them at module scope.
- Using `whileInView` without `once: true`, so the page constantly re-animates.
- Nesting `layout` components several levels deep and then wondering why text warps mid-animation — add `layout="position"`.

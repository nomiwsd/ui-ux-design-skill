# Implementation Handoff

## Tokens first, always

Nothing else gets built until the tokens exist in code. Every subsequent component references tokens; no component contains a raw hex value, a raw pixel spacing outside the scale, or a raw duration.

### CSS custom properties (framework-agnostic)
Use `assets/tokens.template.css`. Apply the theme with a `data-theme` attribute on `<html>`, set before first paint:

```html
<script>
  // inline in <head>, before any CSS that paints — prevents a flash of the wrong theme
  (function () {
    var t = localStorage.getItem("theme");
    if (!t) t = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = t;
    document.documentElement.style.colorScheme = t;
  })();
</script>
```

### Tailwind v4
Tailwind v4 reads CSS variables directly, so tokens and utilities stay in one place:

```css
@import "tailwindcss";

@theme {
  --color-canvas: var(--bg-canvas);
  --color-surface: var(--bg-surface);
  --color-accent: var(--accent);
  --font-display: "Fraunces", serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-md: 12px;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

For Tailwind v3, map the same variables in `theme.extend` (`colors: { accent: "var(--accent)" }`) and use `darkMode: ["class", '[data-theme="dark"]']`.

## Component build order

Primitives → compositions → sections → pages. Building page-by-page is what produces nine slightly different buttons.

For each component, implement every state from `04-components.md` in the same commit as the component. States added later are states that get forgotten.

## Fonts

- Self-host variable woff2 (`next/font/local` or `@font-face`).
- `font-display: swap`, preload only the single most important face.
- Set `size-adjust` or a matching fallback stack to minimize layout shift on swap.
- Never load more than 3 font files total.

## Images

- AVIF with WebP fallback; explicit `width`/`height` or `aspect-ratio` on every image.
- `loading="lazy"` and `decoding="async"` below the fold; the LCP image gets `fetchpriority="high"` and no lazy loading.
- Responsive `srcset` at the breakpoints that actually exist in the design.

## Motion layer

Add motion only after the static build is verified. Every animation goes behind the reduced-motion guard and matches its MOT-xx ID from the spec. Keep animation code in one place per section rather than scattered inline, so it can be audited against the spec.

## Optional: Storybook.js

If the project has more than ~15 components or more than one developer, a component workshop pays for itself. It is not the same thing as the Design Storybook in `design/` — that is the specification; Storybook.js is the living implementation of it.

```bash
npx storybook@latest init
npm i -D @storybook/addon-a11y
```

Give every component a story per variant and per state, add the a11y addon (it runs axe on each story), and add a dark-theme toolbar toggle so both themes are reviewable side by side. Suggest it; don't impose it on a small marketing site.

## Definition of done

- [ ] Every token in code matches `02-design-tokens.md` exactly
- [ ] No hardcoded colors, spacings, durations outside the token files
- [ ] Every component state from `04-components.md` implemented and visually verified
- [ ] Both themes verified on every page, including images and third-party embeds
- [ ] Keyboard-only pass through each primary flow
- [ ] Screen-reader pass on the primary flow
- [ ] `prefers-reduced-motion` pass — the site is complete and usable with all motion off
- [ ] Lighthouse mobile: performance ≥90, accessibility 100, best practices ≥95
- [ ] Tested at 320px width and 200% zoom
- [ ] Empty, loading, and error states exist for every data-driven view
- [ ] README documents how to change a token and where the design storybook lives

## Handing the storybook to another agent

The `design/` folder is written so a fresh agent session can build from it cold. When starting a build in a new session or a different IDE, point at it explicitly:

> Read `design/00-brief.md` through `design/08-build-plan.md`, then implement in the order given in the build plan. Use only tokens from `design/tokens/tokens.css`. Do not invent colors, spacing, or animations that are not in the spec — if something is missing, ask before improvising.

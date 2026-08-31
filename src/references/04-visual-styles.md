# Visual Style Direction

**Path:** `src/references/04-visual-styles.md`

A style is a skin over the foundations (hierarchy, contrast, spacing) — never a substitute for them. Choose it *after* the audience and product type are known.

## The selection question

**What does this audience need to feel in order to trust this product?** A frosted-glass hero is a great first impression for a consumer lifestyle app; the same choice on a hospital patient portal is a liability, because every second of confusion has a real cost.

**On "default to flat".** Flat/material is the correct *structural* baseline for most products — it is legible, accessible, and doesn't fight the content. But "flat" is a statement about ornamentation, not a complete visual direction, and treating it as one is how every project ends up looking the same. A flat design still has to decide: warm or cool neutrals, sharp or soft corners, hairline rules or elevated cards, editorial-generous or utilitarian-dense, which face carries personality, and what the signature element is. Those decisions are the design. Reaching for flat is not an excuse to skip them.

The distinctive work in most projects comes from composition, type, and palette (see `15-composition.md`) rather than from an accent style. A flat, restrained page with a real type pairing, a considered warm palette, and one grid break looks more expensive than the same page with glassmorphism bolted on.

## Flat / material
The safe, accessible baseline for most products. Clean surfaces, minimal ornamentation, elevation via subtle shadow or surface color. Still correct for most SaaS, e-commerce, and business apps.

## Glassmorphism (frosted glass)
Translucent panels with background blur, thin light borders, soft shadows, layered over a colorful or complex background. Currently at its peak thanks to Apple's Liquid Glass direction — which also means it is starting to date fast.

**Workflow**
1. Apply to a small number of floating elements only — nav bar, modal, a single widget card. Never the whole layout.
2. Place over a rich, colorful, or blurred background; glass over plain white does nothing.
3. Put a semi-opaque tint layer behind any text on glass, so legibility doesn't depend on what happens to scroll behind it.
4. Match text tone to glass tone: dark text on light glass, light text on dark glass.
5. Contrast-test against the busiest realistic background, not the cleanest mockup.
6. Watch performance: `backdrop-filter` is expensive, and several stacked glass layers will drop frames on mid-range mobile. Consider disabling blur below a breakpoint.

**Avoid for**: data-dense dashboards, forms, finance, healthcare, and accessibility-first products.

```css
.glass {
  background: rgb(255 255 255 / 0.12);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgb(255 255 255 / 0.18);
  box-shadow: 0 8px 32px rgb(0 0 0 / 0.18);
}
@supports not (backdrop-filter: blur(1px)) {
  .glass { background: rgb(20 20 25 / 0.85); }
}
```

## Neumorphism (soft UI)
Elements extruded from or pressed into a single-color background via dual shadows. Peaked in 2019–2020 and has largely left professional use, because it produces very low contrast between interactive and non-interactive elements — a genuine usability and accessibility problem. Acceptable as a single decorative accent; a poor choice for navigation, buttons, or forms.

## Neubrutalism
Raw and deliberately "undesigned": thick black borders, flat saturated color, chunky offset shadows, unpolished type.
- **Good fit**: indie products, creative portfolios, youth brands, anything signalling difference from polished-SaaS sameness.
- **Poor fit**: enterprise, healthcare, trust-sensitive finance — anywhere the product needs to read as calm.

## The 2026 premium vocabulary
These are the details that separate "expensive-looking" from "template". Most cost almost nothing in performance.

- **Restraint as luxury.** One accent color, one type scale, generous whitespace, few borders. Perceived quality tracks *reduction*, not addition.
- **Bento grids.** Asymmetric card grids of varying spans for feature sections; more interesting than three equal columns and still scannable.
- **Editorial layout.** Oversized display type, deliberate asymmetry, generous margins, real photography — borrowed from print, and the fastest route to a premium feel with zero JavaScript.
- **Aurora / mesh gradients.** Soft, blurred, multi-hue background fields behind hero sections. Use CSS radial gradients with heavy blur rather than an image; keep the contrast of anything on top intact.
- **Grain / noise overlay.** A 2–4% opacity noise texture over gradients kills banding and adds a tactile, film-like quality. One tiny tiled PNG or an SVG `feTurbulence`.
- **Ultra-fine borders and layered shadows.** `1px` borders at 6–10% opacity, plus multi-layer shadows (a tight dark one and a wide soft one) instead of a single blurry drop shadow.
- **Micro-typography.** Tightened tracking on display sizes, optical size axes on variable fonts, tabular numerals for data, real quotes and dashes.
- **Considered empty states and loading skeletons.** Nothing signals amateur faster than a spinner and a blank screen.
- **Motion measured in milliseconds** (see `08-motion-system.md`) — premium motion is quick, subtle, and consistent, not long and showy.

```css
/* Aurora field + grain, cheap and effective */
.aurora {
  position: relative; isolation: isolate;
  background:
    radial-gradient(60% 60% at 20% 20%, oklch(70% 0.18 280 / 0.55), transparent 70%),
    radial-gradient(50% 50% at 80% 30%, oklch(75% 0.16 200 / 0.45), transparent 70%),
    radial-gradient(60% 60% at 50% 90%, oklch(72% 0.15 330 / 0.40), transparent 70%),
    var(--bg-canvas);
  filter: blur(0.5px);
}
.grain::after {
  content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  opacity: .035; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

## Style decision matrix

| Product | Default style | Allowed accent | Avoid |
|---|---|---|---|
| B2B SaaS | Flat + editorial type | Subtle glass nav, aurora hero | Neubrutalism, heavy 3D |
| Fintech / banking | Flat, conservative | Fine borders, restrained motion | Glass, neubrutalism, playful motion |
| Healthcare | Flat, high contrast | Nothing decorative on clinical screens | Glass, low-contrast anything |
| E-commerce | Flat, image-led | Bento grids, hover micro-motion | Anything competing with product photos |
| Portfolio / agency | Editorial + expressive | 3D, scroll storytelling, neubrutalism | Templated card grids |
| Consumer app | Flat + soft depth | Glass, aurora, playful motion | Dense enterprise patterns |
| Children | Flat, high-contrast, illustrative | Big playful motion, sound | Glass, low contrast, small targets |
| Seniors / gov | Flat, plain, high contrast | Mild skeuomorphic cues on icons | Glass, neumorphism, motion-heavy |

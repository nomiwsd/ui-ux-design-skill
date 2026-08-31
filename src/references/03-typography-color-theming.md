# Typography, Color, and Theming

## Typography

### Pairing rules
- Two typefaces is the professional default. A third (usually monospace for data/code) only with a clearly distinct job.
- Pair for **contrast with cohesion**: different enough to build hierarchy, close enough in era, proportion, and x-height to feel deliberate.
- Reliable pattern: an expressive/distinctive face for headings + a highly legible neutral for body. Serif-heading/sans-body or the reverse both work — the contrast matters, not which family goes where.
- Never pair two faces from the same sub-style (two geometric sans). Too similar to harmonize, not similar enough to match.
- Give every font a fixed job (display / body / UI / data) and never let it wander.

### Pairings that work, by tone
| Tone | Heading | Body | Notes |
|---|---|---|---|
| Modern SaaS, neutral | Inter, Geist, or Satoshi | same family, lighter weight | One-family systems look clean and load fast |
| Premium / editorial | Fraunces, Instrument Serif, Playfair Display | Inter, Söhne-alike, Karla | The serif does all the personality work |
| Technical / developer | Space Grotesk, Geist | Inter, IBM Plex Sans | Add JetBrains Mono or Geist Mono for code |
| Warm / human | Bricolage Grotesque, Poppins | Nunito Sans, Source Sans 3 | Rounder shapes read friendlier |
| Bold / youth | Clash Display, Cabinet Grotesk | Satoshi, General Sans | Pairs with high-contrast and neubrutalist styles |
| Institutional / trust | Source Serif 4, Libre Baskerville | Source Sans 3, Public Sans | Public Sans is built for government use |

Variable fonts are the default choice in 2026: one file, every weight, smaller total payload. Self-host with `font-display: swap` and preload the single most important face only.

### Workflow
1. Write three brand-personality adjectives *before* opening a font library.
2. Shortlist 3–5 heading faces matching those adjectives.
3. Choose the body face second, judged on legibility at 16px with real paragraph copy — not on personality.
4. Pair for contrast + shared DNA.
5. Build a modular type scale.
6. Assign each font+weight+size to exactly one documented role.
7. Test with real content, real widths, both themes, before sign-off.

### Type scale
Pick a ratio and generate; don't hand-pick sizes.

| Role | 1.25 ratio (app/dense) | 1.333 ratio (marketing) |
|---|---|---|
| Display | 48 | 76 |
| H1 | 39 | 57 |
| H2 | 31 | 43 |
| H3 | 25 | 32 |
| Body large | 20 | 24 |
| Body | 16 | 18 |
| Small / caption | 13 | 14 |

Use `clamp()` for fluid sizing rather than three fixed breakpoints:
`font-size: clamp(2.5rem, 1.5rem + 4vw, 4.75rem);`

### Sizing baselines
| Element | Guideline |
|---|---|
| Body text | 16–18px minimum (never below 16 on mobile — iOS zooms inputs under 16px) |
| Line height, body | 1.5–1.7× |
| Line height, headings | 1.05–1.25× |
| Line length | 60–75 characters (`max-width: 65ch`) |
| Heading-to-body ratio | ~2×–3× |
| Letter-spacing | Tighten large display type (-0.02em to -0.04em); loosen small caps (+0.05em) |
| Weight contrast | Prefer a weight jump (400→700) over a style change |

---

## Color and palette construction

### The 60-30-10 rule
- **60% dominant/neutral** — backgrounds and large surfaces; sets the tone.
- **30% secondary** — supporting surfaces (cards, sidebars, sections) that contrast without competing.
- **10% accent** — primary CTAs and active states only. Used sparingly, so the eye goes straight to it.

The most common palette failure is an accent used at 40%, which makes the actual CTA invisible.

### Full palette checklist
1. Primary brand color
2. Secondary/supporting color
3. One accent (rarely two)
4. Neutral ramp, 7–9 steps, for text/borders/backgrounds
5. Semantic set: success, warning, error, info — each defined in both themes
6. Optional data-viz set (6–8 hues, distinguishable in grayscale and for color-blind users)

### Building the neutral ramp
Neutrals are never pure gray in good design. Tint them toward the brand hue — a blue-brand product uses grays with a few points of blue. It is invisible individually and unmistakable across a whole interface.

```
50   #F8FAFC   page background (light)
100  #F1F5F9   subtle surface
200  #E2E8F0   borders, dividers
300  #CBD5E1   disabled text/borders
400  #94A3B8   placeholder text
500  #64748B   secondary text  (4.5:1 on white — the lightest usable body gray)
600  #475569   body text
700  #334155   headings
800  #1E293B   high emphasis
900  #0F172A   maximum contrast
```

### Color psychology (a starting hypothesis, always validated against the real audience)
| Color | Associations | Common industries |
|---|---|---|
| Blue | trust, calm, security | finance, healthcare, B2B SaaS |
| Green | growth, health, "go" | wellness, sustainability, fintech |
| Red | urgency, appetite, alerts | food, retail sales, error states |
| Orange/Yellow | energy, optimism, affordability | e-commerce, youth brands |
| Purple | creativity, luxury, premium | beauty, creative tools |
| Black/neutral | sophistication, minimalism | luxury, editorial, tech |

Cultural meaning varies — check the target market before leaning on a single association.

### Accessibility floor
4.5:1 for normal text, 3:1 for large text (18pt+/14pt bold) and for UI component boundaries — WCAG AA. Run every pairing through a checker (WebAIM, Stark, or the Figma/DevTools contrast tools) and record the numbers in `design/03-typography-and-color.md`. "Looks fine to me" is not a measurement.

Note that APCA (the algorithm coming with WCAG 3) treats dark themes more accurately than the current ratio math; if a dark palette passes AA but still feels harsh, trust your eye and soften it.

---

## Light and dark mode — a parallel system, not an inversion

**Light mode**: the challenge is glare and legibility on bright surfaces. Use genuinely dark text (light gray on white commonly fails). Shadows communicate elevation.

**Dark mode**: the challenge is controlling contrast without harshness.
- **Never pure black backgrounds.** `#000` causes halation — text appears to glow and vibrate, especially on OLED. Use `#121212`–`#1E1E1E`.
- **Never pure white text.** Use off-white around `#E0E0E0`; reserve near-white for the highest-emphasis text only.
- **Desaturate accents** by roughly 20 points versus light mode; saturated colors vibrate on dark backgrounds.
- **Elevation via lightness, not shadow.** Shadows barely read on dark. Each layer forward gets lighter: base `#121212` → card `#1E1E1E` → raised `#242424` → modal `#2C2C2C` → tooltip `#333333`.
- **Reduce large blocks of pure white surface**; big bright areas in a dark UI are the main source of eye strain.
- **Images and illustrations need attention too** — a white-background PNG in a dark UI is a glaring rectangle. Provide dark variants or apply a subtle scrim.

### Token structure (build this from day one; retrofitting dark mode is where most accessibility failures happen)

```css
:root {
  --bg-canvas:      #F8FAFC;
  --bg-surface:     #FFFFFF;
  --bg-raised:      #FFFFFF;
  --text-primary:   #0F172A;
  --text-secondary: #475569;
  --text-muted:     #64748B;
  --border-subtle:  #E2E8F0;
  --border-strong:  #CBD5E1;
  --accent:         #4F46E5;
  --accent-hover:   #4338CA;
  --accent-fg:      #FFFFFF;
  --shadow-md:      0 4px 12px rgb(15 23 42 / 0.08);
}

[data-theme="dark"] {
  --bg-canvas:      #121212;
  --bg-surface:     #1E1E1E;
  --bg-raised:      #242424;
  --text-primary:   #E8E8E8;
  --text-secondary: #A9A9A9;
  --text-muted:     #8A8A8A;
  --border-subtle:  #2E2E2E;
  --border-strong:  #3D3D3D;
  --accent:         #8B85F0;   /* desaturated + lightened */
  --accent-hover:   #A29CF5;
  --accent-fg:      #12121A;
  --shadow-md:      0 4px 12px rgb(0 0 0 / 0.4);
}
```

Name tokens by **role**, never by value. `--accent`, not `--purple-600`; `--bg-surface`, not `--white`. Role names survive a rebrand and make dark mode a swap rather than a rewrite.

### Theme switching workflow
1. Design and approve light mode first.
2. Convert every color to a token; zero hardcoded hex in components.
3. Build the dark palette as its own decision, not a filter.
4. Re-run contrast checks independently for the dark set.
5. Default to `prefers-color-scheme` with a manual override persisted to `localStorage`, applied before first paint to avoid a flash of the wrong theme.
6. Set `color-scheme: light dark` so form controls and scrollbars follow the theme.

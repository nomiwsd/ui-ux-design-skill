# Command reference

21 commands. Every one works in every IDE — only the folder they live in changes.
All take free-text arguments after the command name.

## Workflow order (the normal path)

```
/ux-discover  →  /ux-storybook  →  /ux-build  →  /ux-a11y  →  /ux-perf  →  /ux-handoff
```

| Command | What it does | Writes to |
|---|---|---|
| `/ux-discover` | Two rounds of 8 questions with defaults, then the played-back summary | `design/00-brief.md` |
| `/ux-storybook` | The full 9-file storybook, gated on the quality checklist | `design/` |
| `/ux-build` | Implements in code: tokens → primitives → sections → pages → motion → 3D | source files |
| `/ux-handoff` | Completeness check, definition of done, build prompt for another agent | `design/` |

## Piece-by-piece (use when you don't want the whole workflow)

| Command | Use when |
|---|---|
| `/ux-brief` | You only need the brief and personas |
| `/ux-ia` | Sitemap, user flows, page inventory, content model |
| `/ux-tokens` | Generate or update the token set for both themes |
| `/ux-type` | Font pairing + type scale + loading strategy |
| `/ux-color` | Palette with 60/30/10, neutral ramp, semantics, contrast proof |
| `/ux-theme` | Design or fix dark mode |
| `/ux-style` | Pick the visual direction and the premium detail vocabulary |
| `/ux-components` | Component specs with every state |
| `/ux-pages` | Section-by-section page blueprints |

## Motion and 3D

| Command | Use when |
|---|---|
| `/ux-motion` | Write the `MOT-xx` spec table — always before implementing |
| `/ux-gsap` | Implement GSAP + ScrollTrigger, pinning, SplitText, Flip, Lenis |
| `/ux-framer` | Implement Motion / Framer Motion component animation |
| `/ux-3d` | Three.js / R3F with fallbacks and a performance budget |

## Audits

| Command | Use when |
|---|---|
| `/ux-critique` | "Why does this look cheap" — ordered, specific, with fixes |
| `/ux-a11y` | Full WCAG gate against design or code |
| `/ux-perf` | LCP/CLS/INP and animation budget |
| `/ux-responsive` | Breakpoint behaviour, touch targets, zoom, overflow |

## Examples

```
/ux-discover a booking site for a physiotherapy clinic, mostly 50+ patients
/ux-tokens brand green is #0F9D58, Next.js + Tailwind v4
/ux-motion 3
/ux-gsap MOT-01, MOT-03
/ux-pages home, pricing, case-studies
/ux-critique https://example.com
/ux-a11y src/components
/ux-3d product viewer for a headphone brand
/ux-build all
```

## If your IDE doesn't substitute arguments

Some tools pass `$ARGUMENTS` through literally. If you see that in the output, just type the
command and the context on the same line anyway — the agent reads the whole message. Or drop the
argument and answer the follow-up question.

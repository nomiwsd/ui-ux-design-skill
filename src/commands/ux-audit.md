---
description: Audit accessibility (WCAG 2.2 AA), performance, and responsive behavior as one prioritized fix list
argument-hint: [a11y | perf | responsive | all] [+ path or URL]
---

# /ux-audit — Pre-ship audit

**Path:** `src/commands/ux-audit.md`

Nobody runs three separate audits. They run one before shipping. Default scope is `all`.

Target and scope: $ARGUMENTS

Never interview for this — the artifact is in front of you. Identify the surface type (marketing, product, hybrid) first; some checks differ.

Read `{{SKILL_PATH}}/references/05-responsive-accessibility.md`. Add `references/06-motion.md` §8 and `references/09-threejs-webgl.md` for `perf`.

---

## Scope: a11y

Work the WCAG 2.2 AA gate in `05` §2 in four groups and report each item as pass / fail / not applicable **with specific evidence** — file and line, measured ratio, or the test performed. Never mark an item passed without checking it.

**Perceivable** — text contrast ≥4.5:1, large text and UI boundaries and focus indicators ≥3:1, verified in every theme; color never alone; meaningful `alt` and `alt=""` for decorative; readable at 200% zoom and 320px width; text spacing overrides survive; orientation not locked; captions or transcript for media; hover/focus content dismissible.

**Operable** — everything keyboard-reachable in a logical order; no traps; visible `:focus-visible` at ≥3:1; **focus not obscured** by sticky headers or overlays (2.4.11); **targets ≥24×24 CSS px** with spacing, ≥44 on touch (2.5.8); **dragging has a single-pointer alternative** (2.5.7); skip link first; unique page titles; reduced motion honored; nothing auto-advances without a pause; nothing flashes >3/s; time limits adjustable.

**Understandable** — `<html lang>`; persistent visible labels programmatically associated; errors identify field, problem, fix; consequential submissions reversible or confirmed; **no redundant entry** in multi-step flows (3.3.7); **accessible authentication** — no cognitive test without an alternative, paste allowed (3.3.8); consistent navigation with the current page indicated; **help in a consistent location** (3.2.6); no unexpected context change on focus or input.

**Robust** — semantic HTML first, ARIA only where semantics fall short; landmarks present; dynamic updates announced; screen-reader tested on the primary flow.

Then **cognitive accessibility** (`05` §3): decisions per screen, consistency, plain language, memory load, time pressure, error tolerance, predictability.

Automated tools catch roughly a third of real issues. The keyboard-only walkthrough of the primary flow is the highest-value manual check — do it every time.

---

## Scope: perf

Report: the LCP element and whether anything animates or delays it; CLS sources (unsized images, injected banners, layout-animating transitions); INP risks (scroll handlers, unthrottled pointer events, heavy re-renders); animation JS by library and duplicate capability; font loading strategy and file count; image formats, sizing, lazy-loading; any WebGL cost and its fallback.

Flag every animated property that is not `transform` or `opacity`. Flag entrance animations or scroll reveals on product surfaces as both a performance and a design finding.

Budget: LCP <2.5s, CLS <0.1, INP <200ms, Lighthouse mobile ≥90 with animations on. Animation JS ~50KB gzip without storytelling, ~120KB with, plus a lazy 3D chunk.

Profile assumptions against a mid-range Android on 4G.

---

## Scope: responsive

For each major section (marketing) or region (product), state which behavior it exhibits at each breakpoint — reflows / stacks (in what order) / stays horizontal / scrolls / disappears (to where) / changes priority / becomes sticky / changes interaction model — and whether that behavior was a decision or an accident (`05` §5).

Check: no horizontal overflow at 320px; readable and operable at 200% zoom; targets ≥44px on touch with spacing; hover-only affordances have alternatives; sticky chrome under 25% of viewport and never hiding focus; `dvh` not `vh`; safe-area insets; tables and filters change interaction model rather than scrolling blindly; long-content cases (longest real headline, name, price, label in the longest supported language).

Prefer intrinsic layout (`auto-fit` + `minmax`, `clamp()`, container queries) over new breakpoints. Recommend a breakpoint only where the layout actually breaks.

---

## Output

One list, not three. Merge findings and order by **user impact**: a contrast failure on the primary action outranks a missing `alt` on a decorative image; a keyboard trap outranks a font file count.

For each: what is wrong, where (file and line), the concrete fix with the exact value or code, and effort (S/M/L). Never a principle where a value will do.

Separate **legal or gate-level blockers** (AA failures, keyboard inoperability, unreachable tasks) from **improvements**.

Write the accessibility results to `design/08-accessibility.md` with any deliberate exception recorded alongside its justification. An empty checklist is not a pass.

State the expected Lighthouse mobile scores before and after the fix list.

---
description: Audit accessibility, performance, and responsive behaviour as one prioritized fix list
argument-hint: [a11y | perf | responsive | all] [+ path or URL]
---

# /ux-audit — Pre-ship audit

**Path:** `src/commands/ux-audit.md`

Nobody runs three separate audits. They run one before shipping. Default scope is `all`.

Target and scope: $ARGUMENTS

Never interview for this — the artifact is in front of you.

Read `{{SKILL_PATH}}/references/07-craft-and-accessibility.md`. Add `references/08-motion-system.md` (performance budget) and `references/11-threejs-webgl.md` for `perf`.

---

## Scope: a11y

Work the gate in four groups and report each item as pass / fail / not applicable **with the specific evidence** — file and line, or the measured ratio. Never mark an item passed without checking it.

**Perceivable** — body contrast ≥4.5:1, large text and UI boundaries ≥3:1, verified in *both* themes; never color alone; meaningful `alt` and `alt=""` for decorative; readable at 200% zoom and 320px width; captions or transcript for media.

**Operable** — everything keyboard-reachable in a logical order; visible `:focus-visible` at ≥3:1; touch targets ≥44×44px (≥60×80px for children and seniors); skip link first in tab order; no keyboard traps, modals trap and restore focus; `prefers-reduced-motion` honored, nothing auto-advances without a pause control; nothing requires hover to be discoverable.

**Understandable** — persistent visible labels programmatically associated; errors identify the field, the problem, and the fix; consistent navigation with current page indicated; `<html lang>` declared.

**Robust** — semantic HTML first, ARIA only where semantics fall short; landmarks present; dynamic updates announced; screen-reader tested on the primary flow.

Automated tools catch roughly a third of real issues. The keyboard-only walkthrough of the primary flow is the highest-value manual check — do it every time.

---

## Scope: perf

Report: the LCP element and whether anything animates or delays it; CLS sources (unsized images, injected banners, layout-animating transitions); INP risks (scroll handlers, unthrottled pointer events, heavy re-renders); animation JS weight by library and whether two libraries duplicate capability; font loading strategy and file count; image formats, sizing, and lazy-loading; any WebGL cost.

Flag every animated property that is not `transform` or `opacity`.

Budget: LCP <2.5s, CLS <0.1, INP <200ms, Lighthouse mobile ≥90 with animations enabled. Animation JS ~50KB gzip for intensity 1–2, ~120KB for 3, plus a lazy 3D chunk for 4.

Profile assumptions against a mid-range Android on 4G, not a desktop.

---

## Scope: responsive

For each breakpoint (320 / 375 / 768 / 1024 / 1280 / 1440 / 1920) state what changes and why — information *priority*, not just shrinking.

Check: touch targets ≥44px; no horizontal overflow at 320px; readable at 200% zoom; `dvh` rather than `vh` for full-height sections; safe-area insets; sticky headers under 64px on mobile; tables that reflow rather than scroll blindly; hover-only affordances that disappear on touch; long-content cases (longest realistic headline, longest name, longest price).

Prefer intrinsic layout (`auto-fit` + `minmax`, `clamp()`, container queries) over adding breakpoints. Recommend a new breakpoint only where the layout actually breaks.

---

## Output

One list, not three. Merge findings across scopes and order by **user impact**, since a contrast failure on the primary CTA matters more than a missing `alt` on a decorative image.

For each: what's wrong, where (file and line), the concrete fix with the exact value or code, and effort (S/M/L). Never a principle where a value will do.

Separate anything that is a **legal or gate-level blocker** (AA failures, keyboard inoperability) from what is an improvement.

Write the accessibility results to `design/08-accessibility.md` with any deliberate exception recorded alongside its justification. An empty checklist is not a pass.

State the expected Lighthouse mobile score before and after the fix list.

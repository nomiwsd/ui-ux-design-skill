# Foundations — research, IA, and design theory

## Phase 0 recap — turning research into design inputs

Three artifacts come out of discovery and feed everything downstream:

1. **A one-sentence primary user.** "A busy working parent comparison-shopping on their phone in short bursts."
2. **The top 3 tasks.** Every screen gets judged on whether it makes these easier.
3. **The constraint list.** Brand, platform, tech, accessibility level, performance budget.

If real research isn't feasible (usually the case for freelance/client work), use proto-personas built from: the client's own description of their customers, competitor review sections, support tickets, sales call recordings, and analytics from any existing site. Label them as proto-personas so nobody mistakes them for validated research.

## Information architecture — do this before any visual work

**Sitemap.** List every page, grouped by level. Anything more than three levels deep on a marketing site is a red flag; users won't find it and neither will search engines.

**User flows.** Draw the step sequence for each of the top 3 tasks, as text is fine:

```
Task 1 — Start a trial
Landing (hero CTA) → Pricing (plan compare) → Signup (email + password)
  → Verify email → Onboarding checklist (3 steps) → First value moment
Drop-off risks: pricing page (unclear plan differences), signup (too many fields)
Design responses: comparison table with one "most popular" plan; 2-field signup, everything else deferred
```

**Content model.** For anything CMS-driven, define the entity fields *before* designing the card that displays them. Designing a card for content that doesn't exist is the most common cause of "the real site looks nothing like the mockup".

**Navigation depth rule.** The primary action must never be more than one click/tap from any entry point.

## Visual hierarchy

The eye should land on the most important element first, and the order after it should be deliberate. Tools, in order of strength:

1. **Size** — biggest wins, and nothing else comes close
2. **Weight and color contrast** — a 700-weight dark heading beats a 400-weight gray one
3. **Whitespace** — isolation reads as importance; crowding reads as filler
4. **Position** — top-left in LTR reading order, or optical center for hero content
5. **Color** — reserved accent color, used once per view for the primary action

Test: squint at the screen (or blur the screenshot to 8px). Whatever is still readable is the hierarchy you actually built. If everything blurs into one gray mass, the hierarchy is flat regardless of intent.

## Gestalt principles, practically applied

- **Proximity** — related items sit closer to each other than to unrelated ones. The single most common spacing bug is a label spaced equally between the field above and the field below, so it visually belongs to neither.
- **Similarity** — items that look alike are read as the same kind of thing. Two different button styles doing the same job is a lie about function.
- **Common region** — a shared background or border groups items more strongly than proximity alone. Use it when you can't afford the whitespace.
- **Continuity and alignment** — everything on an invisible grid reads as intentional. Floating, near-aligned elements read as amateur even when the person can't say why.
- **Figure/ground** — the interactive layer must clearly sit on top. This is exactly where glassmorphism and neumorphism fail when misused.

## Spacing system

Use one scale and never improvise a value:

```
4  8  12  16  24  32  48  64  96  128  (base-4)
```

- Component internals: 4–16
- Between related elements: 16–24
- Between component groups: 32–48
- Between page sections: 64–128 desktop, 48–80 mobile

Vertical rhythm matters more than horizontal. If a page feels "off" and you can't say why, the section spacing is usually inconsistent.

## Layout and grid

- 12-column grid, 24px gutters desktop; 4-column, 16px gutters mobile.
- Content max-width: 1200–1440px for marketing, 680–760px for long-form reading, full-width only for dashboards and media.
- Consistent page padding: 16–24px mobile, 40–80px desktop.
- Prefer CSS Grid for page layout and Flexbox for component internals.
- Optical alignment beats mathematical alignment for icons and type — nudge when it looks wrong, even if the numbers say it's centered.

## Consistency over novelty

A button looks and behaves identically everywhere. Spend novelty on the hero, an empty state, or a 404 — never on navigation, forms, or anything a user must operate under pressure.

## Mini design system (even for a one-page site)

Document once, reuse forever: color tokens, type styles, spacing scale, radius scale, shadow/elevation scale, motion tokens, and a component list with states. This is what makes a build read as one coherent product rather than a stack of one-off screens — and it is what lets an AI coding agent produce consistent output across many files without drifting.

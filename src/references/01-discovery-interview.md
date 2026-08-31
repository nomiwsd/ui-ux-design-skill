# Discovery Interview — the full question bank

The interview exists to make every later decision non-arbitrary. Ask in batches, offer defaults, never stall.

## Rules of asking

- **Batch it.** 8 questions per message maximum, numbered, so the user can answer `1c, 2 skip, 3 defaults`.
- **Always offer a default.** A developer with no design background often can't answer "what's your brand personality" cold. Give options: *"calm / precise / expensive"*, *"loud / playful / young"*, *"warm / human / handmade"*, *"technical / dense / serious"*.
- **Infer before asking.** If the user gave a URL, a repo, a Figma link, a logo, or existing code — read it first and *confirm* what you inferred instead of asking from zero: "I see Next.js + Tailwind and an existing green (#0F9D58) — I'll build around that green unless it's not fixed."
- **Two rounds maximum.** Anything still unknown after Round 2 becomes a labelled assumption in `00-brief.md`.
- **Never ask what you can decide.** Don't ask "what border radius do you want". Decide it, state it in one line, move on.

## Round 1 — audience and product (the answers that actually change the design)

**1. Product type.** SaaS site / web app or dashboard / e-commerce / corporate or institutional / portfolio or agency / content or media / marketing landing page / mobile-native app.
→ Determines conventions, page inventory, and which patterns are non-negotiable (`05-website-type-patterns.md`).

**2. What it does + the single primary conversion.** One sentence. If the answer names three equally important actions, push back once: "if a visitor does only one thing, which one?" A page with three primary CTAs has none.

**3. Primary user.** Age range, role, tech comfort, device split, context of use (commuting on a phone vs. focused at a desk).
→ Age band selects the adaptations in `06-age-inclusive-design.md`. Device split decides mobile-first vs. desktop-first. Context decides information density.

**4. Top 3 tasks.** What the primary user must be able to finish, written as verbs: "compare plans and start a trial", "find a part that fits my car", "book a callback". Every later layout decision gets checked against these three.

**5. Reference sites + competitors.** 2–3 URLs with one line each on what appeals. This is the fastest reliable signal on taste — far better than adjectives. If they can't name any, offer three well-known examples in the category and ask which is closest.

**6. Brand status + three adjectives.** Existing logo, colors, fonts, or greenfield. If a logo exists, sample its colors as the palette starting point rather than inventing a competing one.

**7. Trust level.** Money, health, legal, government, or children's data involved? High-trust products get conservative color, conventional layout, restrained motion, and heavy emphasis on clarity of state. Expressive styles (neubrutalism, glass everywhere, aggressive scroll hijacking) are a liability there.

**8. Content readiness.** Real copy and photography, or placeholders? Real product screenshots and real photography outperform generic illustration on conversion pages. With no imagery, type and layout have to carry the design — which changes the visual direction, not just the assets.

## Round 2 — build constraints

**1. Stack.** Framework, styling approach, existing component library, CMS, hosting. Decides how tokens are expressed and which animation libraries are practical.

**2. Animation intensity (1–4).** Defined in `08-motion-system.md`. Getting a number here prevents both under-delivery ("this feels dead") and over-delivery ("why does my hero take four seconds").

**3. 3D / WebGL appetite.** Yes / no / only if it earns its place. State the cost honestly: a Three.js hero is typically 150–600KB of JS plus real risk to LCP and battery on mid-range Android.

**4. Theming.** Light / dark / both. Both is the modern default for adult audiences and effectively mandatory for developer-facing products.

**5. Accessibility target.** AA is the floor. Ask whether there is a legal requirement (public sector, EU EAA, enterprise procurement) — it changes what can ship.

**6. Performance and SEO.** Target device class, network, and whether organic search matters. Decides whether the hero can be JS-driven at all.

**7. Page inventory.** The v1 page list. If unknown, propose the category-standard set and let them cut it.

**8. Fixed constraints or forbidden territory.** Existing design system, brand rules, a competitor aesthetic to avoid, RTL/i18n, legacy browser support, third-party widgets that will fight the design.

## Follow-up probes worth having ready

- Answer to "who is the user" is *"everyone"* → "Who would you be most upset to lose?" Design for them; everyone else is secondary.
- Reference sites contradict the product type (a fintech pointing at a neubrutalist portfolio) → name the tension, then propose the compromise: expressive hero, conventional product surfaces.
- An existing product exists → ask for analytics: device split, top entry pages, drop-off points. Real data beats every assumption in this skill.
- Wide age range → ask which end is commercially more valuable, then build the accessible baseline for the older/less-able end and layer density on top.
- "Make it look like Apple/Linear/Stripe" → these look expensive because of restraint: one accent color, a strict spacing scale, generous whitespace, real product imagery, and motion measured in milliseconds. Say that, then deliver it.

## Persona output format

Write 1–3 of these into `design/00-brief.md`. Keep them short enough that they actually get re-read.

```markdown
### Persona: "Maya, the overloaded ops lead"
- **Who:** 34, operations manager at a 40-person logistics firm, high tech comfort, desktop-heavy (85%)
- **Context:** Uses the product in 10-minute bursts between meetings, often on a second screen
- **Jobs to be done:** Spot today's exceptions fast; export a report her boss accepts; avoid re-entering data
- **Frustrations:** Dashboards that bury the one number she needs; multi-step exports; unexplained errors
- **Trust signals that matter:** Uptime transparency, named customers, clear data handling
- **Design implications:** Dense scannable tables over cards; keyboard shortcuts; export within one click of any view; plain-language empty and error states
```

## Gut-check before Phase 2

If you cannot complete the sentence *"This is for ______, who needs to ______, while ______"*, the interview isn't finished. Ask one more targeted question instead of designing on a guess.

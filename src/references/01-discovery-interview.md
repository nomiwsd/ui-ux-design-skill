# Discovery Interview — the full question bank

**Path:** `src/references/01-discovery-interview.md`

The interview exists to make every later decision non-arbitrary. Ask in batches, offer drafted answers, never stall.

## The core mechanic: draft the answers, don't request them

The user of this skill is usually a developer with no design training, often starting from one line ("a site for my friend's coffee roastery"). Asking them open questions produces thin answers, and thin answers produce generic design.

So **the agent answers its own questions first.** For every question, infer the most likely answer from the request, then present 3–4 concrete labelled options with a recommendation and a one-line consequence for each. The user replies in shorthand.

**Wrong** — an open question the user can't answer well:
> 3. Who is the primary user? Age range, role, tech comfort, device split.

**Right** — drafted options with visible consequences:
> **3. Primary user** — I'd guess:
> **a)** ☑ *recommended* — 28–45, urban, buys specialty coffee for home, high phone use (~75%), moderate price sensitivity → mobile-first, image-led, subscription framing
> **b)** 45–65, gift buyers and occasional purchasers → larger type, gifting flows, less subscription emphasis
> **c)** Wholesale/cafés — buying in volume → trade pricing, spec sheets, ordering account, a very different site
> **d)** Something else — tell me in a few words

Rules for the options:
- Each option must lead somewhere visibly different. Options that produce the same design are decoration.
- Mark exactly one as recommended, and make it the option a competent designer would pick from the evidence available.
- Keep the consequence to a clause. The user should see what their choice buys.
- Always include an escape option for "none of these".

Tell the user the reply format explicitly, once:
> Reply like `1b, 2 rec, 3a, 4 skip` — anything you skip I'll decide and flag as an assumption.

## Rules of asking

- **Batch it.** Max 8 questions per message, numbered.
- **Infer before asking.** Given a URL, repo, Figma link, logo, or existing code, read it first and *confirm* what you inferred rather than asking from zero: "I see Next.js + Tailwind and an existing green (#0F9D58) — I'll build around that green unless it's not fixed."
- **Two rounds maximum.** Anything still unknown after Round 2 becomes a labelled assumption in `00-brief.md`.
- **Never ask what you can decide.** Don't ask about border radius. Decide, state it in one line, move on.
- **Never ask two questions that produce the same decision.**

## Round 1 — audience and product

**1. Product type.** SaaS site / web app or dashboard / e-commerce / corporate or institutional / portfolio or agency / content or media / marketing landing page / mobile-native app.
→ Determines conventions and page inventory (`05-website-type-patterns.md`).

**2. What it does + the single primary conversion.** One sentence. If the answer names three equally important actions, push back once: "if a visitor does only one thing, which one?" A page with three primary CTAs has none.

**3. Primary user.** Age range, role, tech comfort, device split, context of use (commuting on a phone vs. focused at a desk).
→ Age band selects adaptations in `06-age-inclusive-design.md`. Device split decides mobile-first vs. desktop-first. Context decides information density.

**4. Top 3 tasks.** What the user must be able to finish, as verbs: "compare plans and start a trial", "find a part that fits my car". Every later layout decision is checked against these.

**5. Reference sites + competitors.** 2–3 URLs with one line each on what appeals — the fastest reliable signal on taste, far better than adjectives. If they can't name any, offer three from the category and ask which is closest. Convert each reference into the mechanism form from `00-anti-slop.md`: *what this does that we want / what we are deliberately not taking*.

**6. Brand status + three adjectives.** Existing logo, colors, fonts, or greenfield. If a logo exists, sample its colors rather than inventing a competing palette. Offer adjective *sets* rather than asking cold: *calm / precise / expensive* · *loud / playful / young* · *warm / human / handmade* · *technical / dense / serious* · *quiet / editorial / considered*.

**7. Trust level.** Money, health, legal, government, or children's data? High-trust products get conservative structure, conventional flows, restrained motion, and heavy emphasis on clarity of state — but *not* a generic execution (see the closing section of `00-anti-slop.md`).

**8. Content readiness.** Real copy and photography, or placeholders? Real product screenshots and photography outperform generic illustration on conversion pages. With no imagery, type and layout have to carry the design, which changes the visual direction rather than just the assets.

## Round 2 — build constraints

**1. Stack.** Framework, styling approach, existing component library, CMS, hosting.

**2. Animation intensity (1–4).** Defined in `08-motion-system.md`. A number here prevents both "this feels dead" and "why does my hero take four seconds".

**3. 3D / WebGL appetite.** Yes / no / only if it earns its place. State the cost honestly: a Three.js hero is typically 150–600KB of JS plus real risk to LCP and battery on mid-range Android.

**4. Theming.** Light / dark / both. Both is the modern default and effectively mandatory for developer-facing products.

**5. Accessibility target.** AA is the floor. Ask whether there's a legal requirement (public sector, EU EAA, enterprise procurement).

**6. Performance and SEO.** Target device class, network, whether organic search matters. Decides whether the hero can be JS-driven at all.

**7. Page inventory.** The v1 page list. If unknown, propose the category-standard set and let them cut it.

**8. Fixed constraints or forbidden territory.** Existing design system, brand rules, a competitor aesthetic to avoid, RTL/i18n, legacy browser support, third-party widgets that will fight the design.

## Two questions that are worth more than the rest

Ask these even in a compressed interview. They do more to prevent generic output than anything else in the bank:

**"What would make a visitor choose you over the obvious alternative?"** — this is the content of the hero, and the thing no template can supply.

**"Name a site in any industry whose feel you envy, and one you'd hate to be compared to."** — the second half is the more useful one. A named negative is a hard constraint the design can be checked against, and users answer it more confidently than they answer positive taste questions.

## Follow-up probes worth having ready

- "Who is the user" answered *"everyone"* → "Who would you be most upset to lose?" Design for them.
- References contradict the product type (a fintech pointing at a neubrutalist portfolio) → name the tension, propose the compromise: expressive brand surfaces, conventional product surfaces.
- An existing product exists → ask for analytics: device split, top entry pages, drop-off points. Real data beats every assumption here.
- Wide age range → ask which end is commercially more valuable, build the accessible baseline for the older end, layer density on top.
- "Make it look like Apple/Linear/Stripe" → these look expensive because of restraint: one accent, a strict scale, generous whitespace, real product imagery, motion in milliseconds. Say that, then deliver it — do not deliver a dark page with a purple gradient.

## Persona output format

Write 1–3 into `design/00-brief.md`. Short enough that they actually get re-read.

```markdown
### Persona: "Maya, the overloaded ops lead"
- **Who:** 34, operations manager at a 40-person logistics firm, high tech comfort, desktop-heavy (85%)
- **Context:** Uses the product in 10-minute bursts between meetings, often on a second screen
- **Jobs to be done:** Spot today's exceptions fast; export a report her boss accepts; avoid re-entering data
- **Frustrations:** Dashboards that bury the one number she needs; multi-step exports; unexplained errors
- **Trust signals that matter:** Uptime transparency, named customers, clear data handling
- **Vocabulary she uses:** "exceptions", "chasing", "the Monday report" — not "workflow optimization"
- **Design implications:** Dense scannable tables over cards; keyboard shortcuts; export one click from any view; plain-language empty and error states
```

The **vocabulary** line is not optional — it is what stops the copy sounding like every other product in the category.

## Gut-check before Phase 2

If you cannot complete the sentence *"This is for ______, who needs to ______, while ______"*, the interview isn't finished. Ask one more targeted question rather than designing on a guess.

Then, before moving on, write one line that a competitor in the same category could **not** write about their own product. If you can't, the brief is still generic and the design will be too.

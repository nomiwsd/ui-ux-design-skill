# Discovery — questions that change decisions

**Path:** `src/references/01-discovery.md`

Discovery produces stages 1–7 of the pipeline: context profile, users, jobs, tasks, content, business goal, trust and risk. Every question below names the decision it changes. A question that changes no decision was removed.

## The mechanic: draft the answers, do not request them

The user is usually a developer without design training, starting from one line. Open questions produce thin answers; thin answers produce generic design. So the agent answers its own questions first: infer the most likely answer from the request, present 3–4 lettered options with one marked recommended and a one-clause consequence each, and let the user reply in shorthand.

**Wrong:**
> 2. Who is the primary user?

**Right:**
> **2. Primary user** — from "site for my friend's coffee roastery" I'd guess:
> **a)** ☑ *recommended* — 28–45, buys specialty coffee for home, occasional visitor, ~75% phone → mobile-first, image-led, subscription framing, generous density
> **b)** 45–65, gift and occasional buyers → larger type, gifting flows, conventional structure
> **c)** Wholesale cafés ordering weekly → frequent, professional, order-history first; this is a product surface, not a brochure
> **d)** Something else — a few words is enough

Rules for options:
- Each option leads somewhere visibly different. Options producing the same design are padding.
- Exactly one is recommended, and it is what a competent designer would pick from the evidence.
- The consequence is a clause. The user should see what the choice buys.
- Always include an escape option.

Tell the user the reply format once: *"Reply like `1b, 2 rec, 3a, 4 skip` — anything skipped I decide and flag as an assumption."*

## Rules of asking

- **Infer before asking.** Given a URL, repo, Figma file, logo, or existing code, read it first and *confirm* what you found: "I see Next.js + Tailwind and an existing green `#0F9D58` — I'll build around that green unless it isn't fixed."
- **Batch it.** Max 8 questions per message, numbered. Two rounds maximum.
- **Never ask what you can decide.** Radius, motion level, theming, and 3D are derived from the context profile, not asked. State them as assumptions.
- **Never ask two questions that produce the same decision.**
- **Track by surface.** Round 1 is shared. Round 2 splits by marketing or product surface. Hybrid products (a store, a SaaS with a site and an app) answer both halves briefly.

---

## Round 1 — shared core (8 questions)

Each question lists the pipeline stage it feeds and the decisions it changes.

**1. What is this, and which surfaces are we designing?** Marketing site / landing page / web app / mobile app / e-commerce / content site / portfolio / institutional / design system / a mix.
→ *Stage 1.* Selects the fork per surface, which reference loads, and which gate applies.

**2. Primary user.** Expertise (novice ↔ expert), frequency (occasional ↔ frequent), role (casual ↔ professional), context of use (where, on what, in what state of attention), and any known abilities or constraints (age, vision, motor, language, reading level).
→ *Stages 1–2.* Sets density, disclosure, terminology, target size, motion tolerance, convention adherence, accessibility inputs.

**3. Secondary users.** Who else uses it and what they need that the primary user does not (an admin, a buyer's manager, a parent, a caregiver, a procurement reviewer).
→ *Stage 2.* Changes permissions, trust surfaces, information that must be printable or shareable, and whether one interface can serve both.

**4. Jobs and top tasks, with frequency.** What is each user trying to accomplish, in their words? Then the top 3 tasks as verbs, each tagged daily / weekly / occasional / once.
→ *Stages 3–4.* Frequency decides the path length each task can afford and whether recognition or speed wins. Every later layout decision is checked against these.

**5. Business objective and primary action.** What the organization needs to happen (sign-up, purchase, task completion time, fewer support tickets, retention, compliance). Then the *one* action a first-time user should take. If three actions are equally important, push back once: a surface with three primary actions has none.
→ *Stage 6.* Decides what dominates attention and what is secondary.

**6. Trust and risk.** What happens to the user if something goes wrong? Money, health, legal standing, children, employment, reputation, data? Regulatory constraints? What must the user see before committing?
→ *Stage 7.* Decides conservative vs expressive structure, confirmation and undo models, evidence placement, motion license.

**7. Content available.** Real copy? Real photography or product screenshots? Real testimonials, logos, numbers with permission? Data volume (10 rows or 10,000)? What is missing and will not exist at launch?
→ *Stage 5.* Content type (text / image / product / data / interaction-led) is set here. Missing content changes the direction, not just the assets. Missing evidence gets a marked slot, never a fabrication.

**8. Brand character, fixed assets, and competitors.** Existing logo, colors, fonts, guidelines? Then the brand position on four axes: conservative ↔ expressive, friendly ↔ authoritative, mass-market ↔ premium, playful ↔ serious. Then two or three competitors: what they claim, what they look like, and what this product must *not* be confused with.
→ *Stages 1, 11.* Brand axes govern deviation license and tone. Competitors govern differentiation and the "deliberately not" list. Offer axis positions as options, not adjective bundles; adjective sets steer toward a look.

---

## Round 2 — by surface, plus constraints

### Marketing surface (ask 4)

**M1. Objections.** The 3–5 real reasons a prospect does not act. Source: sales calls, support, reviews of competitors. → *Stage 8.* Each objection becomes a section or is cut; this is what produces section order.

**M2. Evidence inventory.** Customers who can be named, numbers that can be sourced, outcomes that can be quoted, credentials that can be verified. → *Stage 8.* Decides whether proof leads, supports, or is absent; absent proof changes the direction.

**M3. Traffic and message match.** Where visitors come from (ads, search, referral, direct) and what they were promised before arriving. → *Stage 8.* The first screen must echo the promise. Different sources may need different entry pages.

**M4. Decision journey.** How long from first visit to action? One visit or many? Who else is involved in the decision? → *Stage 8.* Decides page length, whether education precedes persuasion, and what must be printable or forwardable.

### Product surface (ask 5)

**P1. Entities and volume.** The main things the user works with (orders, patients, documents, tickets), how many, and how they relate. → *Stage 8.* Produces the navigation model and whether search or browse leads.

**P2. Workflows.** The 2–3 sequences a user actually performs, step by step, including where they wait on someone else. → *Stages 8–9.* Produces screen structure and what the home screen is for.

**P3. Roles and permissions.** Who can see, create, edit, approve, delete? Does the interface change by role? → *Stage 9.* Permission-aware UI, audit visibility, approval flows.

**P4. Input model and environment.** Keyboard-heavy, pointer, touch, mixed? Interruptions, offline, shared devices, multiple tabs, second screen? → *Stages 1, 9.* Keyboard model, autosave, state preservation, density.

**P5. Consequential actions.** What can be destroyed, sent, charged, or published, and can it be reversed? → *Stage 9.* Undo vs confirm vs soft-delete; distance between safe and dangerous controls.

### Constraints (ask up to 4, both surfaces)

**C1. Stack and existing systems.** Framework, styling, component library, CMS, design system, hosting. Read the repo if there is one.

**C2. Devices, network, performance.** Device split with numbers if they exist; target device class; network; whether organic search matters.

**C3. Accessibility.** Legal obligation (public sector, EU EAA, ADA, procurement) *and* known audience needs (older users, low vision, motor, cognitive, screen-reader users, low literacy). WCAG 2.2 AA is the floor either way.

**C4. Locale, language, and forbidden territory.** Languages and scripts, RTL, date and currency formats, legacy browsers, third-party widgets, brand rules, competitor aesthetics to avoid.

### Derived, not asked

State these as assumptions with their trace:
- **Theming:** one theme unless low-light use, long sessions, or platform expectation `[CONTEXT]`.
- **Motion level:** from user stress, frequency, and brand playfulness `[USER] [BRAND]`.
- **3D / WebGL:** only if the product is physical or spatial and the audience's devices allow it `[CONTENT] [CONTEXT]`.
- **Density:** from frequency × expertise × information volume `[USER] [CONTENT]`.

---

## Two questions worth more than the rest

Ask these even in a three-question run:

**"What would make someone choose you over the obvious alternative?"** This is the primary message for a marketing surface and the reason the product exists for a product surface. No template can supply it.

**"Name something whose feel you envy, and something you'd hate to be compared to."** The negative is the harder constraint and users answer it more confidently. Record every reference as a *mechanism*: what it does that we want, what we are deliberately not taking. A reference recorded as an appearance produces a copy.

## Follow-up probes

- "Everyone" as the user → "Who would you be most upset to lose?" Design for them.
- Wide expertise range → build for the novice; add density and shortcuts behind a control for the expert.
- Wide age range → accessible baseline for the oldest and least able; layer complexity on top.
- References contradict the surface (a fintech admiring a brutalist portfolio) → name the tension; propose expressive brand surfaces and conventional product surfaces.
- Existing product → ask for analytics: device split, entry pages, drop-offs, top tasks by volume. Data beats every assumption.
- "Make it like X" → name X's mechanism, then ask which part of the mechanism matters here.

---

## Output: the brief

Write to `design/00-brief.md` using the template in `11-storybook-template.md`. Required at the top:

```
Context profile: [novice|expert] · [casual|professional] · [occasional|frequent] ·
[informational|transactional] · [simple|complex] · [low|high-risk] · [exploratory|task-driven] ·
[conservative|expressive] · [friendly|authoritative] · [mass|premium] · [playful|serious] ·
[text|image|product|data|interaction]-led · [mobile|desktop]-first, [touch|keyboard|cross]
Surfaces: [surface → marketing|product] for each
```

Persona format — short enough to be re-read:

```markdown
### Persona: "[Name], the [role in five words]"
- **Who:** expertise, frequency, role, device split with a number, abilities/constraints
- **Context:** when, where, on what, in what state of attention or stress
- **Jobs to be done:** three, in their words
- **Top tasks:** three verbs, each with frequency
- **Motivations:** what they gain
- **Pain points:** what fails them today, specifically
- **Objections:** what stops them acting
- **Trust signals that matter:** what makes them believe
- **Vocabulary they use:** their words for the problem — governs the copy
- **Design implications:** what each line above forces, with tags
```

The vocabulary line is not optional. It is what stops copy sounding like the category.

## Gate before leaving discovery

Both must be true:

1. You can complete *"This is for ___, who needs to ___ [frequency], while ___, and if it goes wrong ___."*
2. You can write one sentence about this product that a direct competitor could not write about theirs.

If either fails, ask one more targeted question. Do not design on a guess when a question would fix it.

Then say the next command is `/ux-direction`, and that it returns three strategically different options to choose from, not a finished design.

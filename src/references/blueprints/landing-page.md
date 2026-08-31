# Blueprint — Landing page (single conversion)

**Path:** `src/references/blueprints/landing-page.md`
Section anatomy: `references/17-section-library.md` · Method: `blueprints/00-index.md`

A landing page is not a small website. It has **one** conversion, one audience, and usually one traffic source. Everything that doesn't serve that conversion is removed, including navigation.

## The defining constraints

- **One action.** Repeated 2–4 times down the page, identically worded. Two different CTAs halve both.
- **No primary nav**, or a logo-only header. Every navigation link is an exit.
- **Message match.** The headline echoes the ad, email, or link that brought them. A mismatch between the ad promise and the page headline is the single biggest source of bounce on paid traffic.
- **Length follows commitment.** A free download converts on one screen. A $400/month commitment or a high-consideration purchase needs a long page that answers every objection.

## Section inventory

Choose from these; the belief sequence decides the order and which are cut.

1. **Hero** — the promise, matched to the traffic source, with the CTA visible immediately.
2. **Risk reducer** — placed directly under the CTA, not at the bottom: "No card required", "Free returns", "Cancel anytime", "2-minute setup".
3. **The problem** — stated in the reader's words before any product claim. This is what earns the right to make a claim.
4. **The mechanism** — how it actually works, in one or two steps. Specific beats impressive.
5. **Evidence** — one strong quote with a named outcome outperforms three weak ones.
6. **Objection handling** — the 3–5 real reasons people don't buy, answered directly.
7. **Offer detail** — exactly what they get, what it costs, what happens next after the click.
8. **Repeat CTA** — same wording, same button, no new argument attached.
9. **Minimal footer** — legal, privacy, contact. Nothing else.

## Above the fold

Headline · one-line subhead · CTA · one credibility signal. On a 375×667 viewport, all four are visible without scrolling. This is the highest-leverage constraint on the page.

## Copy rules specific to landing pages

- Headline names the outcome and, where possible, the timeframe: "Get your deposit back in 14 days".
- Subhead handles the immediate "yes but" the headline creates.
- Button text is first-person outcome: "Start my free trial", "Send me the guide". Never "Submit".
- Say the price, or say plainly why you can't yet.
- One idea per section. A landing page that argues five things persuades on none.

## Form design

If the conversion is a form, it is the most important element on the page.

- Ask only what's needed to fulfil the promise. Every extra field costs completion.
- Email-only converts far better than email + name + company + phone. Collect the rest after.
- Put the form in the hero for low-commitment offers; at the bottom after the argument for high-commitment ones.
- State what happens next and when: "You'll get the guide by email in about a minute."
- Show the success state on the page, not a redirect to a bare thank-you route with no next step.

## Variants worth testing

Structure the blueprint so these are swappable: hero layout (split vs. type-led vs. product-first) · CTA wording · form length · evidence placement · long vs. short page.

## Speed

Landing pages usually run on paid traffic, where load time converts directly to cost. Budget: LCP under 2s on mid-range Android over 4G. No hero video that blocks paint, no web font that delays the headline, no animation library for a page with three transitions. CSS-only motion is almost always correct here.

## Acceptance criteria

- [ ] Exactly one conversion action, worded identically everywhere
- [ ] No primary navigation
- [ ] Headline matches the traffic source's promise
- [ ] Headline, subhead, CTA, and one credibility signal fit above the fold at 375×667
- [ ] The risk reducer sits adjacent to the first CTA
- [ ] Every section maps to a belief in the sequence
- [ ] Form asks only for what the offer requires
- [ ] Success state tells the user what happens next
- [ ] LCP under 2s on mid-range Android / 4G

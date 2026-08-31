# Anti-Slop — the file that stops this skill producing the average

**Path:** `src/references/00-anti-slop.md`

Read this **before** any other reference on any project that produces visual output. Everything else in this skill describes how to make a design correct. This file describes how to stop it being generic, which is a different and harder problem.

## Why generic output happens

An agent designing without constraint reproduces the statistical center of its training data. That center is a real, identifiable artifact: a 2021–2024 Tailwind-and-shadcn marketing page. It is not ugly. It is competent, forgettable, and instantly recognizable as machine-made — which is now itself a trust signal working against the product.

Three mechanisms produce it, and each has a countermeasure:

| Mechanism | Countermeasure |
|---|---|
| Example values in a reference get copied as output values | Every example in this skill is marked as illustrative; shipping an unmodified example is a build failure |
| One brief collapses to one obvious execution | Mandatory divergence: three distinct directions before any spec is written |
| Positive guidance alone doesn't prevent defaults | An explicit ban list that must be checked and reported against |

## The ban list

These are prohibited unless the brief contains a specific, written reason that overrides the ban. "It looks fine" is not a reason. When one is used, name it and its justification in the direction document.

**Layout**
- Centered hero with headline, subhead, two buttons stacked in the middle of the viewport
- Three equal-width feature cards in a row, each with an icon in a rounded square above a bold title and two lines of gray text
- Every section the same width, same vertical padding, same center alignment, top to bottom
- A section rhythm of: hero → logos → 3 cards → alternating image/text → testimonial cards → CTA band → footer
- Cards for content that isn't card-shaped (a paragraph of prose in a bordered box with a shadow)
- Full-width color bands used as the only device for separating sections

**Color**
- Indigo/violet accent (`#4F46E5`, `#6366F1`, `#8B5CF6`) unless the brand actually owns it
- Purple-to-blue, blue-to-cyan, or pink-to-orange linear gradients
- Gradient text on the headline
- Untinted Tailwind Slate/Gray/Zinc as the neutral ramp
- Accent color used on more than ~10% of the surface area

**Type**
- Inter, Poppins, Montserrat, Roboto, or Open Sans as the display face
- A single family doing display and body with no scale contrast (H1 at 2.5× body is not contrast, it's default)
- Headline and body in the same weight family with no tension between them

**Surface**
- One radius value on everything (`rounded-lg` everywhere)
- A single soft drop shadow on every card
- Borders at `#E5E7EB` on white
- Emoji as section markers or feature icons
- Generic 3D-render blob illustrations, isometric people illustrations, or abstract gradient mesh as the hero image

**Copy** — see `16-copy-voice.md` for the full treatment
- "Transform your workflow", "Supercharge", "Take your X to the next level", "Seamlessly", "Effortlessly", "Unlock the power of", "built for modern teams"
- Feature headings that are one abstract noun: "Analytics." "Security." "Speed."
- Placeholder testimonials from "Sarah Chen, CEO at TechCorp"

**Motion**
- Everything fading up 20px on scroll, in order, forever
- A hero that animates in while the user waits to read it

## The divergence law

**No specification is written from one direction.** Between the brief and the spec there is a mandatory fork: generate three directions that differ *structurally*, present them, and let a human choose. This is the single highest-leverage change in this skill — a design that survived a choice is not the average, because the average was one of the options that lost.

Three directions are only valid if they differ on at least four of these axes:

1. **Layout logic** — centered symmetry / editorial asymmetry / split-screen / grid-and-rule / dense-utilitarian / full-bleed image-led
2. **Type strategy** — which family carries personality, and the size ratio between display and body (a 6× ratio and a 2× ratio are different designs, not different sizes)
3. **Palette temperature and value** — light-dominant / dark-dominant / mid-tone / high-chroma-on-neutral / near-monochrome-with-one-signal
4. **Density** — generous editorial whitespace vs. deliberate information density. Both can be premium; they are opposites.
5. **Surface treatment** — flat with hairline rules / soft elevated cards / hard-edged blocks / paper-and-texture / glass over depth
6. **The signature element** (below)

Three palettes over the same layout are not three directions. If the three could be swapped by changing CSS variables alone, start over.

## The signature element

Every project ships **one** memorable, project-specific idea that a competitor could not paste into their own site without it looking stolen. It is what a person describes when asked what the site was like.

It must be cheap, tied to the product's actual subject matter, and it must not be the hero animation by default. Some shapes it can take:

- A structural device — a persistent index rail, an asymmetric column that never aligns, a numbered spine down the page
- A typographic device — the product's key number set at display scale, a repeating oversized word, a measured tabular data block treated as art
- A material device — one texture, one rule weight, one shadow behavior used consistently and nowhere else on the web
- A content device — real data visualized as the page background, actual product output used as the hero rather than a screenshot of it
- An interaction device — one interaction that demonstrates the product's value in the act of using it

State it in one sentence in the direction document. If it can't be stated in one sentence, it isn't one idea.

## Premium is subtraction, then one asymmetry

The reliable formula, in order of impact:

1. **Fewer colors than feels comfortable.** One accent. Everything else is the neutral ramp.
2. **More whitespace than feels comfortable**, distributed *unevenly*. Even spacing everywhere is what makes a page read as a template. Vary section rhythm deliberately: a tight section next to an open one creates pace.
3. **More type scale contrast than feels comfortable.** If display is 3× body, push to 5–6×. Small text can be genuinely small when the hierarchy is strong.
4. **One deliberate break in the grid.** Everything aligned to a 12-column grid reads as competent. One element that crosses the gutter, bleeds off the edge, or sits on a different rhythm reads as designed.
5. **Real content at real length.** Design with the longest realistic headline and the shortest realistic testimonial. Slop is what happens when a layout is built for content that doesn't exist.
6. **Detail at the 1px level.** Hairline rules at 6–10% opacity, optical alignment, tabular numerals, real quotation marks, tightened display tracking.

Effects come last, and mostly don't matter. A page with none of the above and a WebGL hero is still slop with a WebGL hero.

## Borrowing without copying

Reference sites are input, not templates. The correct use is to name the *mechanism*, never the appearance:

- Wrong: "like Linear" → produces a dark page with a purple gradient
- Right: "Linear's mechanism is extreme restraint plus one high-chroma signal color, tight tracking on a neutral grotesque, and product UI shown at real fidelity rather than illustrated" → that mechanism can be applied to a warm palette on a light background and will not look like Linear

For every reference, write one line in this form: **"What this does that we want: ___. What we are deliberately not taking: ___."**

## Self-check before presenting anything visual

Answer these in writing. An unanswered check is a failed check.

1. Which items from the ban list appear in this work, and what is the written justification for each?
2. What is the signature element, in one sentence?
3. Name three specific things that would be different if the audience were the opposite of the actual audience. If nothing would change, the design isn't responding to the brief.
4. Could this design be applied unchanged to a competitor in an unrelated industry? If yes, it is generic.
5. Squint test at 8px blur: is there a clear focal point and a deliberate second and third stop, or one gray mass?
6. Is the section rhythm varied, or is every section the same height and padding?
7. Is there exactly one accent, and is it used on ~10% or less of the surface?

## When generic is the right answer

Restraint is not the same as sameness, and convention has real value. Deviate less when: the product is high-trust (finance, health, government, legal), the users are seniors or in crisis, the interface is operated under time pressure, or the screen is dense and functional (dashboards, admin, checkout).

Even then the ban list mostly still applies — a conventional layout does not require an indigo accent and Inter. Convention governs *structure*; it does not require the default *execution*. The most conservative product in the world can have a considered palette, a real type pairing, and a signature detail.

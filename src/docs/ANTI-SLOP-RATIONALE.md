# Why each defense exists

**Path:** `src/docs/ANTI-SLOP-RATIONALE.md`

Notes for anyone maintaining this skill. Every defense below was added to fix an observed failure, not as a theory. Removing one brings its failure back.

## The failure being prevented

An agent designing without constraint reproduces the statistical center of its training data. That center is a specific, identifiable artifact: a 2021-2024 Tailwind-and-shadcn marketing page. Centered hero, indigo accent, Inter, three icon cards with rounded-square icons, uniform section padding, "Transform your workflow". It is not ugly. It is competent, forgettable, and now reads as machine-made — which is itself a trust signal working against the product.

## Defense 1 — the ban list (`references/00-anti-slop.md`)

**Fixes:** positive guidance alone does not prevent defaults. Telling an agent to "use restraint" produces the default; telling it "not indigo, not gradient text, not three icon cards" removes the default from the option set.

**Mechanism:** an explicit prohibition list plus a written self-check the agent must answer before presenting. Bans are overridable with a stated justification, so the list constrains without being a straitjacket.

## Defense 2 — mandatory divergence (`commands/ux-direction.md`)

**Fixes:** one brief collapsing to one obvious execution.

**Mechanism:** three directions differing on at least four structural axes, presented, human picks. Includes a validity test: if the three could be swapped by changing CSS variables alone, they are one direction in three colors and the agent restarts.

**This is the highest-leverage item in the skill.** If only one defense survived, it should be this one.

## Defense 3 — tripwire token values (`assets/tokens.template.*`)

**Fixes:** example values in a reference being copied as output values. The original templates shipped `#4F46E5` and the Tailwind Slate ramp, so every project shared a palette because the palette was sitting in the file ready to paste.

**Mechanism:** loud magenta and lime placeholders. Instructions saying "replace these" get ignored; a page that renders bright magenta cannot be ignored. This is a mechanism rather than an instruction, which is why it holds.

## Defense 4 — no canonical section order (`references/05-website-type-patterns.md`, `blueprints/`)

**Fixes:** the reference containing the slop template. The old file gave the SaaS section order as hero → logos → three cards → alternating → testimonials → pricing → FAQ → CTA → footer, which is the exact page every AI builds. An agent doesn't read that as conventions to know; it reads it as the outline to produce.

**Mechanism:** the belief-sequence method. Write what the persona must come to believe, in order; that list is the page. Two products in the same category with different buyers produce different pages.

## Defense 5 — section variants (`references/17-section-library.md`)

**Fixes:** even with a good section order, each individual section reverts to its default form.

**Mechanism:** every section carries at least three layout variants, the most conventional listed first and explicitly flagged as such, with a rule that variant 1 is never taken by reflex and the choice must be named in the blueprint.

## Defense 6 — composition craft (`references/15-composition.md`)

**Fixes:** the skill had deep coverage of tokens, motion, and accessibility — all checkable — and almost nothing on what actually makes a page look expensive.

**Mechanism:** explicit targets for scale contrast (past 3.5x), rhythm variation, asymmetry, density poles, and edge treatment. These are the differences between correct and good, and they were invisible to the skill before.

## Defense 7 — copy rules (`references/16-copy-voice.md`)

**Fixes:** an AI site is usually identified by its words before its pixels, and the skill had one small microcopy section.

**Mechanism:** a banned-construction list, length discipline per slot, and a hard rule against invented testimonials and statistics.

## Defense 8 — no stock assumption sentence

**Fixes:** the old commands hardcoded *"Assuming B2B SaaS, adults, medium tech comfort"* into eight files. Every project that skipped discovery was assumed to be B2B SaaS, which then selected flat style, Inter, indigo, and the standard homepage. The generic template was written into the fallback path.

**Mechanism:** assumptions must be inferred from the actual request and stated specifically.

## Defense 9 — build fidelity check (`commands/ux-build.md`)

**Fixes:** a build that technically follows the tokens while drifting back toward the default — uniform padding, no grid break, the signature element quietly dropped because it was awkward to implement.

**Mechanism:** an explicit check against the art direction at build time, reported pass/fail per item.

## Defense 10 — progressive disclosure

**Fixes:** an agent holding 25 reference files skims them and falls back on priors, which is the failure the whole skill exists to prevent.

**Mechanism:** `SKILL.md` is a router. Only `00-anti-slop.md` loads unconditionally on visual work; everything else loads when a command names it.

## What was deliberately not done

- **No hard prohibition on conventional design.** High-trust, senior-user, and dense operational products need convention. The ban list governs execution, not structure — the most conservative product can still have a considered palette, a real type pairing, and a signature detail.
- **No enforced novelty.** "Be different" produces bad design as reliably as "be safe" produces boring design. Every defense here forces a *choice*, not a deviation.
- **No fabrication to fill gaps.** Where content is missing, the skill shows a marked empty slot. A fabricated testimonial is a liability for the client, not a placeholder.

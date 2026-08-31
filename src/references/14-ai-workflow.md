# AI-Integrated Design Workflow

AI changed the workflow, not the goal. The goal is still a product a specific human can use easily and trusts.

## Where AI genuinely helps

- **Exploration speed** — many layout and style variations from one brief, so the work starts at refinement rather than a blank canvas.
- **Accessibility auditing** — contrast checks, alt-text drafts, and issue flagging at a scale and speed manual review can't match.
- **Research synthesis** — turning interview transcripts, survey results, and analytics into patterns.
- **Copy drafting** — microcopy, empty states, and error messages, which are usually written last and worst.
- **Implementation** — turning a complete spec into working components consistently across dozens of files. This is exactly why the storybook is written the way it is: a specification an agent can build from without drifting.
- **Runtime personalization** — adaptive content and layout based on real behavior, increasingly expected in 2026 products.
- **Generative UI** — modular components assembled dynamically from context. The designer's role shifts toward building and governing the system and its rules.

## Where human judgment has to lead

- **Brand strategy and emotional tone.** What a product should *feel* like is a values decision, not an optimization output.
- **Final creative direction.** AI generates options; a human picks based on brand fit, not on what tested best in isolation.
- **Privacy and ethics of personalization.** How much adaptation feels helpful versus invasive is a judgment call, and over-automating personal data is the fastest way to lose trust.
- **Critical review before shipping.** Treat AI-generated layouts, copy, and code as a fast first draft. Design that no one has actually looked at with intent is design that ships bugs.

## Designing the AI *in* the product

If the product will contain AI features (assistant, smart search, recommendations, adaptive dashboards), that belongs in Phase 0 alongside the personas — not bolted on later. Specify:

- **Where it appears** and what it replaces.
- **Latency states.** AI is slow and variable: streaming output, skeletons, and a visible stop control are part of the design, not the implementation.
- **Failure and uncertainty.** What the interface shows when the model is wrong, refuses, or is unsure. "Something went wrong" is not a design.
- **Trust surface.** Sources, confidence, and the ability to see or undo what the AI did.
- **User control.** A way to turn personalization off, and a plain statement of what data drives it.
- **Cost of being wrong.** The higher it is, the more the design should favor suggestion over automation.

## Practical honesty

When presenting AI-generated design work, say what was generated and what was decided. A client who later discovers that "the research" was invented loses trust in everything else in the document. Anything not verified belongs under **Assumptions** in the brief.

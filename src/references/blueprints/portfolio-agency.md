# Blueprint — Portfolio / creative agency

**Path:** `src/references/blueprints/portfolio-agency.md`
Section anatomy: `references/17-section-library.md` · Method: `blueprints/00-index.md`

The site is itself a work sample, so there is real licence for motion, bold type, and unconventional layout — and a correspondingly higher bar. A templated portfolio is worse than a plain one, because it demonstrates the thing the visitor is checking for.

## Page inventory

| Page | Purpose | Primary action | Priority |
|---|---|---|---|
| Home / index | Show the work immediately | Open a project | P0 |
| Project / case study | Prove capability and thinking | Contact | P0 |
| About | The person or team behind it | Contact | P1 |
| Contact | Start a conversation | Send enquiry | P0 |
| Services (agency) | Qualify the enquiry | Contact | P1 |
| Journal / notes | Demonstrate thinking | — | P2 |

## Home

The work is the content. Get to it fast — a full-screen brand statement before any work is a common and expensive mistake.

Options: a full-bleed project grid with generous type · one featured project at full viewport followed by an index · a text-led index where project names are set at display scale and the imagery appears on hover or focus (must have a touch equivalent).

Every project tile carries: client or project name, the discipline, the year, and one line on the outcome. A grid of untitled images makes a visitor work to understand what they're looking at.

## Project / case study

The most common portfolio failure is a page of pretty images with no explanation. A hiring manager or client is buying judgement, not renders.

Required per project: the brief and the constraint · what was actually decided and why · the process, including something that didn't work · the outcome, measured where possible · the role — what *you* did versus the team · the tools and the timeline.

Show work at real fidelity: full screens, not mockups floating on gradients. Device frames are optional and usually date the work.

## Motion and licence

This is the one category where intensity 3–4 is defensible. The constraints still hold: the site must be usable and readable with JavaScript disabled and with reduced motion on, the path to contact must never be buried under art direction, and a slow portfolio reads as an inability to ship.

Budget the showpiece. One memorable moment, executed precisely, beats effects on every section.

## Contact

Never buried. Present in the nav, at the end of every project, and as a page. State what you're available for, response time, and what to include in an enquiry. A form and a plain email address — some people will not use a form.

## Acceptance criteria

- [ ] Work is visible within the first screen
- [ ] Every project states role, outcome, and process, not just images
- [ ] Contact is reachable from any page in one action
- [ ] Fully usable with JS disabled and with reduced motion enabled
- [ ] Any hover-revealed content has a touch and keyboard equivalent
- [ ] Lighthouse mobile performance ≥90 despite the motion
- [ ] Images served in modern formats with correct sizing

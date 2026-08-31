# End-to-end recipes

## A new client site, from nothing

```
/ux-discover a site for a Lahore-based interior design studio, they want to look expensive
   → answer Round 1 and Round 2
/ux-storybook
   → read design/00-brief.md and design/05-page-blueprints.md, push back on anything wrong
   → edit design/tokens/tokens.css directly if you disagree with a color
/ux-build all
/ux-a11y src
/ux-perf
/ux-handoff developer
```

Expect to spend 10 minutes on the interview and the storybook review. That is the whole point —
it is where the design gets decided, and it is far cheaper than fixing it in code.

## A redesign of an existing site

```
/ux-critique https://theircurrentsite.com
/ux-discover redesign of the above, keep the logo and the green, everything else is open
/ux-storybook
/ux-build all
```

Run `/ux-critique` first: the critique becomes evidence for the client about why the redesign is
needed, and it feeds the "deliberately not" line in the brief.

## Adding premium animation to something already built

```
/ux-motion audit
   → it inventories the existing sections and proposes a MOT table at the intensity you pick
/ux-gsap MOT-01, MOT-03, MOT-05
/ux-framer modal, tabs, page transition
/ux-perf
```

Never skip `/ux-motion`. Implementing animations without the spec is how a site ends up with six
different durations and no reduced-motion fallback.

## Just the design system, no site

```
/ux-type calm, precise, expensive
/ux-color fintech, primary audience 30-50, existing brand blue #1E3A8A
/ux-tokens Next.js + Tailwind v4
/ux-components all
```

## Fixing dark mode someone else built

```
/ux-theme src/styles/globals.css
/ux-a11y src/styles
```

## Quick answers, no ceremony

The skill doesn't force the workflow on small questions:

```
what dark mode background and accent should I use for a purple brand?
is 14px body text ok for a docs site?
why does my hero feel cheap?
```

These get direct answers from the relevant reference file. The interview only kicks in when you
ask for something that has to be designed.

## Working across two IDEs

The `design/` folder is the handoff format. Do discovery and the storybook wherever you like, then:

```
/ux-handoff agent
```

It produces a paste-ready prompt that gives a fresh session in any IDE full context in one message.

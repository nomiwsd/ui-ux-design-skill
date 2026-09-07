# Responsive Behavior and Accessibility

**Path:** `src/references/05-responsive-accessibility.md`

Accessibility is a design input at every pipeline stage and a gate with evidence at the end. Responsive behavior is a set of per-region decisions about priority and interaction, not a shrink. WCAG 2.2 AA is the normal baseline for every project.

---

## 1. Accessibility by pipeline stage

| Stage | Decisions accessibility forces | Evidence |
|---|---|---|
| **Discovery** | Audience abilities (age, vision, motor, cognitive, language, assistive technology) recorded in the brief; legal obligation named | Brief §Users, §Constraints |
| **IA** | Heading structure is the document outline; one `h1`; landmarks (header, nav, main, footer, aside); page titles unique and descriptive; navigation consistent across pages; help in a consistent location (2.2 3.2.6) | IA doc |
| **Interaction model** | Keyboard model complete (every action reachable, logical order, Escape closes, no traps); focus visible and not obscured by sticky elements (2.2 2.4.11); targets ≥24×24 CSS px minimum, ≥44 on touch (2.2 2.5.8); every drag has a single-pointer alternative (2.2 2.5.7); no redundant entry in multi-step flows (2.2 3.3.7); authentication without cognitive tests, or with an alternative (2.2 3.3.8); time limits adjustable | Interaction section of IA doc |
| **Visual hierarchy and language** | Contrast 4.5:1 text, 3:1 large text, UI boundaries, focus indicators, meaningful graphics; color never the only carrier of meaning; type ≥16px body on web; zoom to 200% and reflow at 320px without loss; text spacing overrides survive | Contrast table in `04-typography-and-color.md` |
| **Components** | Every control has a name, role, value, and state exposed; labels visible and associated; errors identify field, problem, fix; disabled controls explained; icon-only controls have names | `05-components.md` a11y lines |
| **Responsive** | Content and function identical across breakpoints; orientation not locked; hover-only affordances have alternatives | Reflow table |
| **Motion** | `prefers-reduced-motion` honored everywhere including 3D; nothing flashes more than three times a second; auto-playing content has a pause; parallax and large zoom avoided or disabled | Motion spec reduced-motion column |
| **Copy** | Plain language; reading level suited to the audience; error messages written at design time; link text predicts destination; abbreviations expanded | Blueprints |
| **Implementation** | Semantic HTML first; ARIA only where semantics fall short; live regions for dynamic updates; `lang` declared; focus managed on route change and in dialogs | Build acceptance |

Accessibility that appears only in the last row was not designed. The self-check in `00-design-reasoning.md` asks where it changed a decision earlier.

---

## 2. WCAG 2.2 AA gate

Run against every project, in every theme, with evidence per item (file and line, measured ratio, or test description). An empty checklist is not a pass. Automated tools catch roughly a third of real issues; the keyboard-only walkthrough of the primary flow is the highest-value manual check.

**Perceivable**
- [ ] Text contrast ≥4.5:1; large text ≥3:1 (1.4.3)
- [ ] UI component boundaries, focus indicators, and meaningful graphics ≥3:1 (1.4.11)
- [ ] Verified independently in every theme
- [ ] Color never the only carrier of meaning; paired with icon, label, pattern, or position (1.4.1)
- [ ] Meaningful images have `alt` that states what they show; decorative images `alt=""` (1.1.1)
- [ ] Readable and functional at 200% zoom and at 320px width without horizontal scroll (1.4.4, 1.4.10)
- [ ] Text spacing overrides (line-height 1.5, paragraph 2×, letter 0.12em, word 0.16em) do not break layout (1.4.12)
- [ ] Orientation not locked unless essential (1.3.4)
- [ ] Video has captions; audio has a transcript (1.2.x)
- [ ] Content on hover or focus is dismissible, hoverable, persistent (1.4.13)

**Operable**
- [ ] Every interactive element reachable and operable by keyboard in a logical order (2.1.1, 2.4.3)
- [ ] No keyboard traps; dialogs trap intentionally and restore focus on close (2.1.2)
- [ ] Visible `:focus-visible` at ≥3:1; never `outline: none` without a replacement (2.4.7)
- [ ] **Focus not obscured** by sticky headers, footers, or overlays (2.4.11 — new in 2.2)
- [ ] **Target size ≥24×24 CSS px** with spacing, or an equivalent-sized alternative (2.5.8 — new in 2.2); ≥44×44 on touch surfaces by design
- [ ] **Dragging** has a single-pointer alternative (2.5.7 — new in 2.2)
- [ ] Skip-to-content first in tab order (2.4.1)
- [ ] Page titles unique and descriptive (2.4.2); link purpose clear from text (2.4.4)
- [ ] Motion honors `prefers-reduced-motion`; nothing auto-plays or auto-advances without a pause control (2.2.2, 2.3.3)
- [ ] Nothing flashes more than three times per second (2.3.1)
- [ ] Time limits adjustable or absent (2.2.1)
- [ ] Nothing requires hover to be discoverable

**Understandable**
- [ ] `<html lang>` declared; language changes marked (3.1.1, 3.1.2)
- [ ] Inputs have persistent visible labels programmatically associated (3.3.2)
- [ ] Errors identify the field, describe the problem, state the fix (3.3.1, 3.3.3)
- [ ] Consequential submissions are reversible, checked, or confirmed (3.3.4)
- [ ] **No redundant entry**: information already provided in the process is auto-filled or selectable (3.3.7 — new in 2.2)
- [ ] **Accessible authentication**: no cognitive function test (memorizing, transcribing, puzzles) without an alternative; paste allowed in password fields (3.3.8 — new in 2.2)
- [ ] Navigation consistent across pages; current page indicated (3.2.3)
- [ ] **Help** (contact, chat, FAQ) in a consistent location across pages (3.2.6 — new in 2.2)
- [ ] Focus and input do not trigger unexpected context changes (3.2.1, 3.2.2)

**Robust**
- [ ] Semantic HTML first; ARIA only where semantics fall short (4.1.2)
- [ ] Landmarks present: header, nav, main, footer (1.3.1)
- [ ] Dynamic updates announced via live regions where relevant (4.1.3)
- [ ] Tested with a real screen reader on the primary flow (VoiceOver or NVDA)

---

## 3. Cognitive accessibility

Applies to every audience; decisive for novices, occasional users, stressed users, older adults, and anyone with a cognitive or learning disability.

- **One primary decision per screen**; secondary decisions deferred or grouped
- **Consistent patterns**: the same action looks and behaves the same everywhere; navigation does not move
- **Plain language**: short sentences, common words, active voice, the user's vocabulary; reading level checked against the audience
- **Memory load**: never require remembering information from a previous screen; show it again (3.3.7)
- **Time**: no time pressure unless essential; save progress; allow return
- **Error tolerance**: forgiving input formats; undo; confirmation for consequential actions
- **Predictability**: link text and button labels say what will happen; no surprise context changes
- **Help in place**: instructions where the task happens, not in a separate help center
- **Distraction**: no auto-playing motion, carousels, or notifications competing with the task

---

## 4. Age and ability adaptations

Age is a proxy for ability distributions, not a stereotype. Design for the abilities present in the audience; use age bands to anticipate them.

### Children
- **3–5 (pre-literate):** icons, illustration, and voice lead; immediate audio-visual feedback; very large forgiving targets (≥60×80px); no fine-motor gestures; no time pressure or losing states.
- **6–8:** short words, active voice, icons paired with labels; light reward mechanics; navigation 1–2 levels deep.
- **9–12:** real navigation and decisions; instant feedback; non-punishing errors; do not talk down.
- **All children:** primary actions never at the very bottom edge (mis-taps); ads clearly distinct from content; parental gates before purchases, external links, and data sharing; design for the parent who must trust it too; COPPA, UK Age Appropriate Design Code, and regional equivalents are requirements.

### Teens and young adults (13–25)
High fluency; penalize anything that reads as "for kids" or dated; short patience for onboarding; social proof outweighs formal trust badges; distinct data-privacy handling for 13–17 in many regions.

### Adults (26–59)
Widest variance in literacy and tech comfort; "adult" alone tells you nothing — persona research matters most here. Usually task-focused: speed and clarity over delight. Assume interruption: preserve state, autosave.

### Older adults (60+)
The barrier is design that ignores physiological change, not willingness. **Vision:** larger base sizes with user scaling; high contrast; never color alone. **Motor:** larger targets and spacing; no precise dragging, multi-finger gestures, or timed interactions; no hover-only reveals. **Cognitive:** shallow consistent navigation; labelled icons; fewer choices per screen; visible help. **Trust:** plain-language errors; confirmation before irreversible actions; generous undo; preventing "I broke something" is the largest lever against abandonment. Familiar cues (a trash can, a physical-looking toggle) map better than abstract flat icons. Reduce motion by default.

### Low vision, screen-reader, motor, and cognitive users across all ages
Covered by the gate and §3. Verify with real assistive technology, not by inference.

### Wide-range products
One accessible, high-contrast, generous-target baseline that works for the least able users, plus a density or "simple / advanced" control that unlocks complexity for those who want it. Remember the setting; make switching back obvious.

---

## 5. Responsive behavior

Responsive design is a set of decisions per region, not a media query that stacks columns. For every major section (marketing) or screen region (product), decide and record one or more of:

| Behavior | Meaning | Typical for |
|---|---|---|
| **Reflows** | Columns reduce (4 → 2 → 1) with content unchanged | Card grids, feature rows |
| **Stacks** | Elements go vertical in a **stated** order, which may differ from desktop order | Hero copy and visual; form and summary |
| **Stays horizontal** | Keeps a row with a visible scroll cue | Tabs, step indicators, category chips |
| **Scrolls** | Becomes a horizontal rail | Image galleries, related items, KPI tiles |
| **Disappears** | Removed, with a statement of where the content or function goes | Decorative visuals; secondary columns; desktop-only shortcuts |
| **Changes priority** | Moves up or down because what matters on this device changed | Store: search up, editorial down; app: primary action up |
| **Becomes sticky** | Fixed on scroll, with height budgeted | Primary action bar, filter apply, cart total, step navigation |
| **Changes interaction model** | A different control does the same job | Hover → tap or long-press; sidebar → bottom tabs; filter panel → bottom sheet; mega-menu → accordion; table → column priority or cards; tooltip → inline text; drag → buttons |

### 5.1 Typical decisions by section or region

| Section / region | Mobile behavior that usually fits |
|---|---|
| Primary nav | Changes model: bar → full-height panel; app sidebar → bottom tabs (≤5) or drawer |
| Hero / first screen | Stacks copy first, then action, then visual; visual may shrink or disappear; action stays above the fold at 375×667 |
| Feature grid | Reflows to one column; if items are unequal, the lead stays first |
| Comparison table | Changes model: one column per option, or stays horizontal with sticky first column |
| Pricing | Stacks plans; recommended first; changes priority (toggle stays visible) |
| Data table | Changes model: column priority (2–3 visible, expand row for the rest) or cards; sticky header; never a blind horizontal scroll |
| Filters | Changes model: sidebar → bottom sheet with live count and apply; becomes sticky (apply button) |
| Forms | Already one column; keyboard-aware (input types, autocomplete); action becomes sticky above the keyboard |
| Cart / checkout summary | Changes priority: total and action become sticky; line items collapse |
| Gallery | Scrolls horizontally with a visible cue and dots; pinch to zoom |
| Footer | Reflows to accordion groups or a single column |
| Dashboard | Changes priority: the one number first; charts reflow to one column; tables to cards |
| Sidebar content (notes rail, related) | Disappears into an inline section after the main content, or a disclosure |

### 5.2 Rules

- Design mobile behavior by **priority**: what does this user need first on this device? It may not be what leads on desktop.
- Add a breakpoint where the layout actually breaks, not at device sizes by habit. Prefer intrinsic layout (`repeat(auto-fit, minmax())`, `clamp()`, container queries) over breakpoint proliferation.
- Touch targets ≥44×44 with spacing; hover-only affordances have a visible alternative.
- `dvh` not `vh` for full-height regions; safe-area insets respected.
- Sticky headers under 64px on mobile; total sticky chrome under 25% of the viewport.
- Test at 320px width and 200% zoom, both real conditions. Test with the longest real headline, name, and price.
- Reading order and DOM order match at every breakpoint.

### 5.3 Blueprint requirement

Every section or region in the blueprint carries a **Reflow** line naming the behavior(s) from the table and the order where it stacks. "Stacks" alone for every section is a failed reflow pass.

---

## 6. Audit checklist — responsive

- [ ] Every section or region has a reflow decision recorded, not just "stacks"
- [ ] Priority changes are deliberate and stated
- [ ] No horizontal overflow at 320px
- [ ] Readable and operable at 200% zoom
- [ ] Touch targets ≥44px with spacing on touch surfaces; ≥24px everywhere
- [ ] Hover-only affordances have alternatives
- [ ] Sticky chrome budgeted; focus never hidden behind it
- [ ] Tables and filters change interaction model rather than scrolling blindly
- [ ] `dvh` and safe-area insets used where relevant
- [ ] Long-content cases tested

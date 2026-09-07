# Visual System — hierarchy, typography, color, surfaces, composition

**Path:** `src/references/04-visual-system.md`

Load for pipeline stages 10–12 (visual hierarchy, design language, composition) and for tokens. Nothing here is chosen before the context profile, users, tasks, content, business goal, trust level, IA, and interaction model exist. Every value produced from this file carries a tag.

The core is thirteen durable principles: hierarchy, contrast, balance, rhythm, scale, proportion, alignment, grouping, density, whitespace, reading order, visual flow, emphasis. Styles are an appendix (§7) and are never defaults.

---

## 1. Visual hierarchy

The eye lands on one element first; the second and third are deliberate. This is the content hierarchy made visible, so it cannot be designed before the content hierarchy exists.

**Means, in order of strength:** size · weight and value contrast · isolation by space · position (top-left in LTR reading order, or the optical center for a single statement) · color (reserved, used once per view for the primary action).

Choose the means from the surface: a dense table builds hierarchy with weight and space, not size; a single-message page may use size. Using all five at once flattens everything.

**Test:** blur to 8px. Three stops visible, in the intended order. One gray mass means hierarchy is the root problem and nothing else matters until it is fixed.

---

## 2. Typography

Type is a reading system first and a brand voice second. Derive it from: **reading context** (glance / scan / read), **content length**, **density**, **brand character**, **platform**, **language and script**, **accessibility**.

### 2.1 Choosing faces by properties, not by list

Any list of "good fonts" becomes a repetition within a year. Choose by property, then name a face that has the properties, then check it is not the current default of the category.

| Property | Matters when |
|---|---|
| Large x-height, open apertures | Small sizes, dense UI, low-vision users, glance reading |
| Moderate width | Long measure, multilingual (narrow faces fail in German and Finnish; wide faces fail in tables) |
| Weight range (variable axis) | Hierarchy by weight in dense surfaces; one file, many weights |
| Distinct letterforms (I/l/1, O/0) | Data, codes, identifiers, forms |
| Tabular figures | Any numbers in columns |
| Script coverage | Arabic, Urdu, Devanagari, CJK, Cyrillic, Greek — check *before* pairing; many display faces have Latin only |
| Distinctiveness | The headline carries voice `[BRAND: expressive]`; irrelevant for tools and platform apps |
| Platform native (SF, Roboto, Segoe) | Native mobile apps; keyboard-heavy tools; when neutrality and rendering matter more than voice |
| Loading cost | Marketing on paid traffic; mobile on 4G; two files max, one preloaded |

**Number of faces:** one is complete for most products and platform apps. Two when the display role needs a voice the body cannot provide. A third only for mono or data. Fixed roles; a face never wanders.

**Pairing, when there are two:** contrast in one dimension (serif/sans, width, or weight), cohesion in the rest (era, x-height, proportion). Never two faces of the same sub-style.

**The ubiquity question:** a widely used face (Inter, Roboto, a system font) is a risk only when nothing else in the design is specific. It is correct when neutrality, script coverage, platform fit, or performance is the trace. A distinctive serif is a risk when it is the category's current signal for "premium." Either way, name the trace.

### 2.2 Type scale from reading context

Pick a ratio from how the surface is read, then generate; never hand-pick. The display-to-body ratio is a **consequence**.

| Reading context | Ratio | Display : body | WHEN |
|---|---|---|---|
| Dense, repeated, many values | 1.125–1.2 | ~1.5–2× | Tables, admin, trading, operations `[USER: frequent, expert]` |
| Standard product UI | 1.2–1.25 | ~2–2.5× | Most apps, forms, settings, dashboards |
| Marketing, mixed reading | 1.25–1.333 | ~2.5–3.5× | Sites read once, with headings that structure a page |
| Single message per screen | 1.414–1.618 | 4×+ | One statement carries the screen `[CONTENT: text-led] [BRAND: expressive]`; only when the longest real headline still fits at 375px |

Wider is not better. A 5× headline on a screen used daily is noise. A 1.8× headline on a launch page may be too quiet. Both are found by the blur test against the content hierarchy.

Use `clamp()` for fluid display sizes. Let small text be genuinely small (12–13px labels, captions) *when the surface is dense and the user is frequent*; never below 12px; never for body.

### 2.3 Baselines

| Element | Web | Native |
|---|---|---|
| Body | 16–18px; inputs never below 16px on mobile (iOS zooms) | Platform default (17pt iOS, 16sp Material), honoring system scaling |
| Body line-height | 1.5–1.7 reading; 1.4–1.5 dense UI | Platform |
| Heading line-height | 1.05–1.25 | |
| Measure | 45–75 characters; 60–75 for long reading | |
| Display tracking | −0.01 to −0.03em at 40px+ | |
| Small caps / eyebrows | +0.04 to +0.08em | |
| Body weight | ≥400; never thin weights for body or on colored backgrounds | |
| Weight contrast | Prefer a jump (400 → 600/700) over a style change | |

### 2.4 Language and script

Confirm the body face covers every script in scope before anything else. Arabic, Urdu, Devanagari, Thai, and CJK need larger sizes and taller line-heights than Latin at the same nominal size; set per-script adjustments. RTL mirrors layout, icons with direction, and progress; numerals and logos do not mirror. German, Finnish, Russian labels run 30–50% longer than English: design the longest, not the shortest.

### 2.5 Accessibility of type

Zoom to 200% without loss of content or function; text spacing overrides (WCAG 1.4.12) do not break layout; no justified text; body ≥400 weight; line length under 80 characters; headings are real headings; no text in images. For readers with dyslexia: generous letter and word spacing, left alignment, clear letterform distinction, no italics for long runs.

### 2.6 Loading

Self-host; variable woff2; `font-display: swap`; preload one file; fallback stack with `size-adjust` to limit shift; never more than three files.

---

## 3. Color architecture

Color is several systems that must not share hues by accident. Separate them before choosing any value.

### 3.1 Layers

| Layer | Contains | Rule |
|---|---|---|
| **Brand** | 1–3 hues from brand assets or chosen for differentiation | Used for identity and the primary action. More than one brand hue only when the brand owns them |
| **Semantic** | success · warning · danger · info | Fixed meanings; culturally checked; distinguishable in grayscale; each with an on-color |
| **State** | selected · hover · focus · active · disabled · visited | Derived from brand and neutrals; focus visible at ≥3:1 against everything it appears on; selected distinct from hover |
| **Surface** | canvas · surface · raised · inset · overlay · scrim | Elevation by lightness (dark themes) or shadow (light themes); never more surfaces than the layout has levels |
| **Text** | primary · secondary · muted · inverse · link · on-brand · on-semantic | Every pairing measured |
| **Border** | subtle · strong · focus | |
| **Data** (data-led products) | categorical (6–8, grayscale-distinct, colorblind-safe) · sequential · diverging · positive/negative/neutral | Never share a hue with brand or semantic; a chart's "positive" is not the brand hue |

### 3.2 Deriving brand hue

From existing assets first (sample the logo). Otherwise from **differentiation against named competitors** (if every competitor is blue, blue is a decision that needs a reason), **cultural context** of the audience (red, white, green, and gold carry different meanings by market), and **semantic needs** (a brand hue that collides with danger or success is a problem on a data surface). Do not derive from a color-psychology table; "blue means trust" is how every fintech became blue.

### 3.3 Neutrals

| WHEN | Neutral |
|---|---|
| Brand has a hue and surfaces are large | Tinted 2–5% toward the brand hue; unifies without adding color |
| Data, clinical, governmental, or content-heavy surfaces | Neutral gray; tint competes with data color and reads as brand over content |
| Photography-led | Neutral or tinted toward the photography's grade |
| Warm brand, text-led | Warm tint — a choice, not a synonym for "considered" |

Ramp of 7–9 steps. Middle steps must pass 4.5:1 as text on the canvas and be tested in both themes if both exist.

### 3.4 Distribution

| WHEN | Rule |
|---|---|
| Single primary action per view (marketing, landing) | Dominant neutral surfaces; supporting surfaces; **one** action color reserved for the action and active states, on a small share of the surface so the eye finds it |
| Multiple states and categories (apps, stores, data) | The action color is distinct from state and data colors; several hues are correct because several meanings exist |
| Image-led | Photography sets the palette; UI color recedes to neutrals and one action color |

"One accent" is a rule for the first row only.

### 3.5 Contrast

4.5:1 body; 3:1 large text (≥24px or ≥19px bold), UI boundaries, focus indicators, and graphical objects that carry meaning. Measured, per pairing, per theme, recorded in a table. APCA is a better predictor for dark themes; if a dark pairing passes ratio math and looks harsh, trust the eye and lighten.

### 3.6 Dark theme

**WHEN:** low-light use, long sessions, platform expectation (developer tools, media), or user preference data. Otherwise one theme done well is complete; a second theme is a cost.

**HOW:** designed, not inverted. Base around 8–12% lightness, never pure black (halation on OLED); text off-white, never pure white; elevation by lightness (each layer forward one step lighter), not heavier shadow; brand and semantic hues desaturated and lightened so they do not vibrate; every pairing re-measured; images and embeds checked (a white-background PNG is a glaring rectangle); `color-scheme: light dark` for form controls; the theme set before first paint.

### 3.7 Tokens

Name by role, never by value: `--action`, not `--blue-600`; `--surface-raised`, not `--gray-50`.

**Tiering — only when it removes a decision from a consumer:**

| Structure | WHEN |
|---|---|
| Flat semantic roles (`--text-primary`, `--action`, `--surface`) | One theme or two, one platform, one brand. Most projects. |
| Primitive → semantic (`--blue-600` → `--action`) | Two or more themes that remap the same primitives, or a data palette that needs named steps |
| Primitive → semantic → component (`--button-primary-bg`) | Multi-brand, multi-platform, or a design system with many consumers who must not touch semantics |

Do not create a tier that does not improve implementation. A three-tier system on a one-brand marketing site is complexity with no consumer.

Start from `assets/tokens.template.css`; every color value there is a tripwire and must be replaced.

---

## 4. Surfaces, radius, elevation, borders

Derive from brand axes, platform, and density.

**Radius:** one scale of 2–3 steps, held. Position on the sharp ↔ soft axis from brand (authoritative and technical toward sharp; friendly and consumer toward soft) and platform (follow the OS on native). Nested elements use inner = outer − padding; that is not mixing. Mixing unrelated radii in one view is the tell; a single value everywhere is a valid choice.

**Elevation:** shadow in light themes (a tight dark shadow plus a wide soft one reads better than one blurry mid shadow); lightness in dark themes; border or overlap when the surface is dense and shadows would stack. Use only as many elevation levels as the layout has.

**Borders vs space vs region:** separate with space when there is room and items are sequential; with a rule when space is scarce and content is sequential; with a region (card) when items are parallel and individually actionable, especially on touch where the whole region is the target `[Fitts]`.

**Iconography:** one set, one stroke weight; paired with labels unless universal; sized to the text they sit with.

**Imagery:** real over stock; if a stock image could be swapped for any other without loss, remove it. Consistent crop, grade, and aspect family across a surface. If good imagery is unavailable, say so and go type-led; a well-set type page beats bad photography.

---

## 5. Composition

### 5.1 Grid from content

| Grid | WHEN |
|---|---|
| 12-column, 24px gutters | Marketing pages mixing text and visuals; flexible spans |
| Content column + notes rail | Long reading with metadata, captions, or secondary information `[CONTENT: text-led]` |
| Modular / baseline grid with rules | Dense, data-forward, institutional |
| Full-bleed image grid | Image-led surfaces: photography, products, portfolios |
| Application grid (fixed nav + fluid content, 8px rhythm) | Product surfaces; content region fluid, chrome fixed |
| Single column, 45–75ch | Reading, forms, focused tasks, mobile |

Name the grid in the direction record. A page built without a named grid is built by accident.

### 5.2 Alignment
Everything on the grid. Optical alignment beats mathematical for icons and type. One intentional violation at most on a marketing page, and only when it is the element the reader should notice; none on forms, tables, or repeated-use screens.

### 5.3 Balance
**Symmetry** reads stable, calm, authoritative — right for single statements, forms, high-trust surfaces, and anything the user must operate under stress. **Asymmetry** reads dynamic — right when one side carries the weight (a visual beside copy, a lead item beside supporting items) or the brand is expressive. Split columns unevenly when one side is primary; equally when the two are peers. Neither is a default.

### 5.4 Rhythm
Spacing follows weight. A section that decides the reader's action gets room; the evidence that supports it sits close; a list of secondary items is tight. Reference and documentation surfaces are correctly uniform. Write the weights before the spacing; if the spacing came first, it is decoration.

### 5.5 Density
From the context profile (`03` §5). Marketing-generous on a daily-use surface and app-dense on a story that needs pacing are the two symmetric failures.

### 5.6 Whitespace
A grouping tool before an aesthetic one. Space inside a group is smaller than space between groups, always. Large whitespace on a task surface is not calm; it is distance between things the user needs together.

### 5.7 Reading order and visual flow
Text-heavy: readers scan an F; front-load the left edge and the first words of every block. Visual pages: guide a Z or a layered path with size and position. Long pages: layer-cake — headings that carry meaning alone, scanned before anything is read. Reading order and DOM order match (screen readers, keyboard).

### 5.8 Emphasis
One focal element per view, produced by the means in §1. When everything is emphasized, nothing is. When the primary action does not survive the blur test, the emphasis went elsewhere.

### 5.9 Proportion and scale
Relationships between elements follow their relationship in the content: a lead item is larger than its supporting items in proportion to how much more it matters. Type scale, spacing scale, and layout spans share a ratio family so the page reads as one system.

---

## 6. Composition checklist (conditional)

- [ ] Blur test shows first, second, third, matching the content hierarchy
- [ ] Grid named; alignment consistent; any violation is singular and is the intended focal point (marketing only)
- [ ] Balance chosen (symmetric / asymmetric) with a trace
- [ ] Spacing follows written weights (marketing) or the density decision (product)
- [ ] Type ratio traced to reading context; longest real headline tested at 375px
- [ ] Faces chosen by property; script coverage confirmed; trace recorded
- [ ] Color layers separated; action color distinct from state and data; every pairing measured in every theme
- [ ] Neutral tint decision traced
- [ ] Radius, elevation, and border logic traced to brand, platform, density
- [ ] Every image earns its place; treatment consistent
- [ ] No item from §7 present without its WHEN satisfied and its cost stated

---

## 7. Appendix — optional techniques, never defaults

Each is a technique with a narrow fit. Using one without its WHEN, or as a synonym for "modern" or "premium", is an untraced decision. Each also dates; a design built on one dates with it.

| Technique | WHEN it fits | Cost | Not for |
|---|---|---|---|
| **Bento grid** (unequal tiles in a fixed grid) | Features or content of genuinely unequal importance; the grid expresses the inequality | Reads as a card grid when tiles are equal; recognizable as a 2023–25 SaaS signal | Equal items; dense apps; any surface with more than ~8 items |
| **Aurora / mesh gradients** | Expressive brand; a hero with little text over it; contrast preserved by a scrim | Banding; text contrast; instantly recognizable; heavy on low-end GPUs when animated | Text-heavy surfaces; high-trust; anything data-led |
| **Glassmorphism** | Expressive consumer brand; a small number of floating elements (nav, one panel) over rich imagery | `backdrop-filter` cost on mobile; contrast depends on what scrolls behind; needs a solid fallback | Forms, tables, data, finance, healthcare, government |
| **Grain / noise** | Photography- or gradient-led surfaces where banding shows or a tactile quality is on-brand | Adds visual noise to text; a texture on a dashboard is a defect | Any reading or data surface |
| **Neubrutalism** | Indie, youth, or creative brands signalling distance from polished sameness | Low tolerance for content the client did not plan; accessibility of thick borders and saturated fills must be checked | Enterprise, health, finance, government |
| **Oversized editorial type** | One statement carries the screen; the brand is expressive; the longest real headline fits at 375px | Wastes the screen on repeated-use surfaces; the fastest current signal of "AI-designed premium" | Anything read more than once; dense products |
| **Hairline-rule editorial grid with margin notes** | Long text with real metadata or annotations `[CONTENT: text-led]` | Rules are not touch targets; an empty margin rail is dead space | Task surfaces; content without annotations |
| **Dark / glow / "futuristic"** | Developer tools with long sessions; media; brands whose product is visibly technical | Glare and halation if done as inversion; neon accents fail contrast; the look is the category's current default | Anything where "futuristic" is a request rather than a user need |
| **3D hero / WebGL** | The product is physical or spatial; the audience's devices can carry it; a poster fallback exists | 150–600KB, battery, LCP risk; see `09-threejs-webgl.md` | Decoration behind a headline; anything sitting behind the LCP element |
| **Cursor spotlight / magnetic buttons** | Pointer-fine devices; a playful brand; a portfolio | Invisible on touch; recognizable SaaS-2024 signal | Anything task-driven |
| **Scroll-driven storytelling** | Long narrative marketing page; a launch; the story has stages | Blocks keyboard and screen-reader flow if scroll is hijacked; must work with JS off | Product surfaces; anything repeated; high-trust |
| **Card-everything** | Items are parallel and individually actionable on touch | Prose in boxes reads as filler; card soup flattens hierarchy | Sequential content; dense tables |
| **Centered-everything** | Single statements; forms; symmetrical content | Loses hierarchy when items are unequal | Comparisons; content with a lead item |
| **Warm paper + one burnt accent** | A warm brand on a text-led surface | Now the most recognizable "anti-generic" default | As a synonym for "considered" |

Glass fallback, when glass is used:

```css
.glass { background: rgb(255 255 255 / .12); backdrop-filter: blur(16px) saturate(140%); }
@supports not (backdrop-filter: blur(1px)) { .glass { background: rgb(20 20 25 / .85); } }
```

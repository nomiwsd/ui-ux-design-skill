# Product UX — workflows, navigation, data, states, and repeated use

**Path:** `src/references/03-product-ux.md`

Load for any surface people *operate* rather than read once: web apps, dashboards, admin tools, enterprise systems, mobile apps, transactional commerce (product detail, cart, checkout, account), design systems. Marketing logic does not apply here: no hero, no section rhythm, no grid break, no signature element, no scroll reveal. A screen used daily is judged by how fast the task completes and how rarely it goes wrong.

---

## 1. Product information architecture

### 1.1 Entity model first

List the things users work with, their counts, relationships, and lifecycle states.

```
Entity        Count      Relationships               States
Order         10k/mo     has Customer, has Items     draft → placed → shipped → delivered → returned
Customer      2k         has Orders, has Notes       active / dormant
```

The entity model produces: what the navigation is organized around, whether search or browse leads (past ~50 items of one type, search leads), which lists need bulk actions, and which states need visible distinction.

### 1.2 Navigation model

Choose from the entity count, task frequency, and device. State the choice and its trace.

| Model | WHEN | Not when |
|---|---|---|
| **Sidebar** | Many entity types or areas; desktop; frequent users who benefit from persistent wayfinding | Mobile primary; ≤3 areas |
| **Top tabs** | 3–5 areas; content-heavy pages needing full width | Deep hierarchies |
| **Bottom tabs** (mobile) | 3–5 destinations; touch; frequent switching | More than 5 destinations |
| **Hub and spoke** | Occasional users doing one task at a time (portals, self-service); each task returns to the hub | Frequent multi-task use |
| **Master–detail** | Inspect-and-act on items from a list; desktop or tablet | Long forms per item |
| **Wizard / linear** | A task done once or rarely with a fixed sequence (setup, application, checkout) | Anything repeated |
| **Command surface** (palette, search-first) | Expert, keyboard-heavy, many destinations | Novice or occasional |

Most products combine two: a primary model and a command surface for experts. Never icons-only permanently in a collapsed sidebar; labels on hover and focus.

### 1.3 The home screen decision

The home screen has one job. Choose it from role and frequency:

| Home is… | WHEN |
|---|---|
| **Overview** (state of the whole) | Manager or owner role; the question is "how are we doing" |
| **Exceptions** (what needs action now) | Operational role; the day starts with problems to clear |
| **Task launcher** | Occasional users; a few clear verbs |
| **Last state** (resume where you left) | Frequent single-workflow users |
| **Feed or inbox** | Work arrives from others and is processed in order |

A grid of KPI cards is an overview. It is the wrong home for an operator, a novice, or a portal user.

### 1.4 Path-length budget

| Task frequency | Max actions from home | Implication |
|---|---|---|
| Many times a day | 1–2 | On the home screen or one click; keyboard shortcut |
| Daily | ≤2 | Primary navigation |
| Weekly | ≤3 | Secondary navigation or search |
| Occasional | Deeper allowed if information scent is strong | Guided flow acceptable |

If the top task exceeds its budget, the IA is wrong regardless of how it looks.

### 1.5 Screen inventory

| Screen | Purpose | Priority |
|---|---|---|
| App shell | Wayfinding, account, search, notifications | P0 |
| Home | The one job from §1.3 | P0 |
| Primary object list | Find, filter, act in bulk | P0 |
| Object detail | Inspect, edit, act | P0 |
| Create / edit | Add data with minimal friction | P0 |
| Search / command surface | Reach anything fast | P1 (P0 for experts) |
| Settings | Configure, by task not by table | P1 |
| Onboarding / first run | Reach first value | P0 for self-serve |
| Empty, loading, error, partial states | Every data view | P0 |
| Notifications, billing, admin, audit | By product | P1–P2 |

---

## 2. Strategic directions for product surfaces

Three directions that differ in how the product **works**, not how it looks. The human chooses; visual language follows.

### 2.1 Axes

| Axis | What changes |
|---|---|
| **Navigation model** | Sidebar vs tabs vs hub vs command-first |
| **Home strategy** | Overview-first vs exceptions-first vs task-first vs resume |
| **Density** | Rows or fields visible per screen; controlled by a toggle or fixed |
| **Disclosure strategy** | Everything visible vs primary/secondary/advanced tiers vs progressive per expertise |
| **Input priority** | Keyboard-first with shortcuts and a palette vs pointer-first vs touch-first |
| **State visibility** | Always-on status and sync indicators vs on-demand vs notification-driven |
| **Action model** | Inline editing vs modal forms vs dedicated pages; undo vs confirm |

### 2.2 Direction record

```markdown
### Direction A — "Exceptions-first, keyboard-driven"
**Strategy in one line:** the day starts with a queue of what needs action; everything else is one keystroke away.
**Navigation model:** [model] because [entities, frequency, device]
**Home:** [job] because [role, frequency]
**Density:** [dense / comfortable / toggle] because [frequency × expertise × volume]
**Disclosure:** [strategy] because [expertise range]
**Input priority:** [keyboard / pointer / touch] because [context]
**State visibility:** [strategy] because [risk, collaboration]
**Action model:** [inline / modal / page; undo / confirm] because [reversibility, frequency]
**Visual consequences:** type scale, color roles, surfaces, spacing — each with a tag
**Path length of top three tasks:** [n / n / n]
**Why this fits:** [persona]
**What it costs:** [what it is bad at]
**Differs from B and C on:** [axes]
```

Three directions with the same navigation model, home job, and density are one direction. Start over.

---

## 3. Interaction model

Decided before any visual value. Each item is recorded in `design/02-information-architecture.md` §Interaction.

### 3.1 Input model
Primary input per device; keyboard model (focus order, shortcuts for daily tasks, Escape closes, Enter submits, arrow keys in lists and tables, a discoverable shortcut list); touch model (gestures always have a visible alternative; no hover-only); pointer model (hover reveals are enhancements, never the only route).

### 3.2 Disclosure tiers
Primary (always visible), secondary (one action away), advanced (behind an explicit control, remembered). Assign every control to a tier. Most users never open the advanced tier; experts find it in one place.

### 3.3 Feedback tiers
Assign every action: **immediate** (<100ms: press, toggle, selection), **instant** (<400ms: navigation, filter, sort), **progress** (>1s: skeleton, bar, percent, cancel), **background** (>10s: leave and be notified). Optimistic UI for high-confidence actions with a quiet rollback.

### 3.4 State visibility
Where the user is (active nav, breadcrumb, title); what is saved (autosave indicator or explicit save with dirty-state guard, never ambiguous); what is syncing or stale; what is running in the background; who else is here, if collaborative.

### 3.5 Error prevention
Constrain input (pickers, formats, ranges); safe defaults; validate on blur for format, on submit for cross-field, never mid-keystroke; confirm consequential actions with the consequence stated; distance between destructive and safe controls; no time limits without extension.

### 3.6 Destructive-action model

| Reversibility × frequency | Model |
|---|---|
| Reversible, frequent | Do it, offer **undo** (toast with action, 5–10s, or a trash) |
| Reversible, rare | Undo, or a light confirm |
| Irreversible, rare, low blast radius | Confirm dialog stating the consequence; button names the action ("Delete 3 invoices") |
| Irreversible, high blast radius | Typed confirmation of the resource name; consequence stated; delay or cooling period where the law or risk warrants |
| Sends, charges, publishes | Preview of exactly what will happen; explicit confirm; receipt after |

Never rely on a disabled button as the only protection. Never place Delete adjacent to Save.

### 3.7 Permission-aware UI
For controls the current role cannot use: **hide** when the user should not know the capability exists; **disable with a reason** when they should know and may request access; **show read-only** when the data is theirs to see but not change. State the rule per control class. Audit trails visible where accountability matters `[TRUST]`.

### 3.8 Validation strategy
Format and required checks on blur; cross-field on submit; server errors mapped back to the field, not a banner alone; errors name the field, the problem, and the fix; success states only where reassuring (username available); input preserved across every failure; the submit button stays enabled and reports what is wrong.

---

## 4. Screen anatomy

### 4.1 App shell
Navigation with an unambiguous active state (fill or accent border, never weight alone) · workspace or account switcher if multi-tenant · global search or command surface · user menu · notification surface that does not interrupt · skip link. Collapse to icons with labels on hover and focus at narrow widths; switch to bottom tabs on mobile if the product has ≤5 areas.

### 4.2 Home / overview / dashboard
One job (§1.3). If overview: the single most important number with its period and comparison, secondary metrics visibly subordinate, then the detail or exceptions list. Every metric states its period. Charts: ≤6 series, direct labels over legends, never color alone, an empty and a loading state. If a dashboard needs a legend to be understood, restructure it.

### 4.3 List and table
Sticky header · sortable columns with visible direction · tabular numerals, right-aligned numbers, consistent decimals, units in the header · row actions available on focus as well as hover · selection with a count and bulk actions · pagination or virtualized scroll with a total · column visibility and density controls · filter and sort state in the URL. Row height and font size follow the density decision, not marketing spacing. On mobile: column priority (show 2–3, expand for more) or cards; never a blind horizontal scroll.

### 4.4 Search and filter
Filters grouped by facet; visible on desktop; bottom sheet with live count and apply on mobile; applied without full reload; state in the URL; clear-all; result count always visible; no-results is a designed state (what was searched, what to relax, an adjacent route). Search: recent searches, suggestions, typo tolerance where volume warrants, and a keyboard shortcut for experts.

### 4.5 Detail
Title and identity first; state badge; primary actions in one consistent place; secondary actions in a menu; related entities linked; edit inline or via a form according to §2.1; history or audit where accountability matters.

### 4.6 Create / edit forms
One column, one input per line `[TASK: completion time and error rate]` · labels above, always visible; never placeholder-as-label · correct `type`, `inputmode`, `autocomplete` on every field · group related fields with clear breaks · validation per §3.8 · autosave with visible saved state, or explicit save with a dirty guard · keyboard submit · every field justifies itself; defer what is not needed now (Tesler). Multi-step: show progress, allow back without loss, 3–4 steps, no redundant entry (WCAG 3.3.7).

### 4.7 Wizard / multi-step
For tasks done once or rarely. Progress visible; each step one decision; back never loses data; summary before commit; success state says what happens next.

### 4.8 Settings
Organized by task, not by database table; ≤6 groups; search when many; autosave or explicit save, never ambiguous; destructive settings isolated at the bottom with §3.6 protection.

### 4.9 Onboarding
A checklist with visible progress plus contextual hints, not a modal tour. Skippable, resumable. Reach one real outcome in the first session; defer everything not needed for it.

### 4.10 Notifications
In-app surface that does not interrupt; grouped; actionable inline where possible; a way to control volume. Consequential events also reach the user outside the app.

### 4.11 States — the most skipped work
Every list, table, search, chart, and detail needs all five:

- **Empty, first use** — what will appear, why it is empty, one clear first action. An onboarding moment, not an apology.
- **Empty, no results** — what was searched, what to relax, clear filters, an adjacent route.
- **Loading** — skeleton matching the layout past ~1s; nothing under ~300ms; reserve space.
- **Error** — plain language, no raw codes for general users, a retry, input preserved.
- **Partial or stale** — say so rather than showing a silently incomplete view.

### 4.12 Bulk actions
Selection model (checkbox column, shift-click range, select-all with a count that distinguishes page from all) · action bar appears with the count · destructive bulk actions follow §3.6 with the count in the button · progress and per-item failure reporting for long runs.

### 4.13 AI features inside the product
Specify at IA time, not later: where it appears and what it replaces · latency states (streaming, skeleton, a visible stop) · failure and uncertainty (what shows when the model is wrong, refuses, or is unsure) · trust surface (sources, confidence, see and undo what it did) · user control (turn it off; what data drives it) · cost of being wrong (the higher, the more the design favors suggestion over automation).

---

## 5. Density

Density is a decision from **frequency × expertise × information volume**, recorded with its trace.

| Profile | Density | Means |
|---|---|---|
| Daily · expert · high volume | Dense | 13–14px body, 32–36px rows, tight spacing, many columns |
| Daily · mixed expertise | Comfortable default with a compact toggle, remembered per user | 14–15px body, 40–44px rows |
| Occasional · novice | Generous | 16px body, 48px+ rows, fewer columns, more labels |
| Mobile, any | Touch targets ≥44px regardless of visual density; achieve density with information, not smaller targets | |

Dense does not mean inaccessible: contrast does not relax at small sizes (it matters more); targets stay ≥44px touch / ≥24px pointer via padding; zoom to 200% still works.

---

## 6. Trust on product surfaces

Consequences stated before commitment · receipts and confirmations after · audit visibility where accountability matters · status pages and incident honesty for anything operational · permissions transparent (why can't I do this) · data handling stated where data is entered. Evidence is not testimonials here; it is the system telling the truth about its state.

---

## 7. Category notes

### 7.1 Web app / dashboard
Marketing spacing on an application is one of the most common failures in generated design. Applications are usually comfortable-to-dense; that is correct, not a compromise. Home job from §1.3. Every data view has five states. Filter and view state in the URL. Keyboard complete including tables and dialogs. Density toggle when expertise varies.

**Acceptance:** every data view has five states · active navigation unmistakable and not weight-only · tabular numerals with consistent alignment · filter and view state in the URL · destructive actions per §3.6 · full keyboard operability · targets ≥44px on touch despite density · both themes verified on charts, code, embeds · top three tasks within their path budget.

### 7.2 Enterprise / document management system
Users: frequent, professional, mixed expertise, often under procedural constraint. Entities: many types with lifecycle and permissions. **Decisions that matter most:** the navigation model (usually sidebar + powerful search + saved views); permission-aware UI everywhere (§3.7); audit trails visible; bulk operations with per-item failure reporting; version history and comparison; consistent metadata display (title, type, owner, date, status, size) on every list; documents open in-app with a download route; long-running operations in the background with notification. **Avoid:** any marketing chrome; novelty in navigation; icon-only anything; hover-only actions (many users are on managed desktops with keyboards and assistive tech).

**Acceptance:** search returns in under 400ms or shows progress · every list shows consistent metadata · permissions explained, not just disabled · every destructive or publishing action per §3.6 · audit visible where required · keyboard complete · WCAG 2.2 AA verified (procurement requires it).

### 7.3 Mobile app
Follow platform conventions unless there is a strong reason not to `[Jakob]`: iOS HIG and Material for navigation placement, back behavior, sheets, pickers, type scale (iOS Dynamic Type sizes, Material type scale). Bottom tabs 3–5 with icon **and** label. Primary actions in the thumb zone (lower two-thirds). Targets ≥44×44pt with more spacing than desktop. Gestures always have a visible alternative. Safe areas (`env(safe-area-inset-*)`); `dvh` not `vh` on web. Assume interruption: preserve state on return; autosave. Offline: say what works and what does not. Text ≥16px in inputs to prevent zoom. Reduced motion honored; system font scaling honored.

**Home for mobile:** task launcher or last-state for most consumer apps; feed for content; exceptions for operational tools.

**Acceptance:** platform back behavior works · every primary action in the thumb zone · tabs have labels · gestures have alternatives · state survives interruption · type scales with system settings · targets ≥44pt · offline behavior designed.

### 7.4 Transactional commerce (detail, cart, checkout, account)
Home and category are marketing surfaces (`02` §3.3). These are product surfaces.

**Product detail — first screen on mobile:** image, name, price, variant selector, add to cart. Gallery with zoom and one scale or in-context shot; changing a variant changes the image; unavailable combinations visibly unavailable, never silently broken; delivery estimate near the buy button; returns window at the decision point; complete specs (missing specs cause returns); reviews with distribution not just average, filterable by variant; complements before alternatives.

**Cart:** editable inline; full cost including shipping and tax; one clear continue; a route back to browsing; free-shipping gap if there is one; persisted across sessions where accounts exist.

**Checkout:** guest option; minimum fields; progress shown; address autocomplete; saved payment methods; every cost visible before the final step; errors never wipe entered data; primary navigation removed (every link is an exit); confirmation states what happens next and how to change or cancel.

**Acceptance:** variant selection updates image, price, availability together · delivery and returns visible on detail · guest checkout available · no cost revealed late · cart and checkout errors preserve data · empty cart, no results, out of stock are designed states.

### 7.5 Design system
A design system is a product whose users are developers and designers. Apply this file to it.

**Token architecture:** primitive → semantic → component tiers only when the system serves more than one theme, platform, or brand; otherwise flat semantic roles. Never add a tier that does not remove a decision from a consumer. Name by role. See `04-visual-system.md` §4.6.

**Component API:** variants for meaning (primary, destructive), props for configuration (size, icon), slots for content. Every component ships every state (default, hover, focus-visible, active, disabled, loading, error, empty, selected where relevant) as a contract. Accessibility built in: names, roles, keyboard, focus management.

**Documentation:** each component has when-to-use and when-not-to, anatomy, all states rendered, do/don't pairs, and code. Documentation is the product's interface; apply §4 to it.

**Governance:** contribution path, deprecation policy, versioning, a changelog kept current.

**Acceptance:** every token has a role name and a reason · every component renders every state · a11y verified per component · docs show when-not-to-use · no component exists without a consumer.

---

## 8. Blueprint gate for product surfaces

- [ ] Entity model and navigation model written with traces
- [ ] Home screen job chosen from role and frequency
- [ ] Top three tasks within their path-length budget
- [ ] Interaction model (§3) recorded: input, disclosure, feedback tiers, state visibility, error prevention, destructive model, permissions, validation
- [ ] Density decided from frequency × expertise × volume
- [ ] Every data view has five states specified
- [ ] Keyboard model complete for keyboard-heavy contexts
- [ ] No marketing chrome: no hero, section rhythm, grid break, signature element, scroll reveal
- [ ] Reflow decisions per region (`05-responsive-accessibility.md` §5)
- [ ] Interchangeability question answered *no, because…* (`13-validation.md`)

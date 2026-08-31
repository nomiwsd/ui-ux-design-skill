# Blueprint — Web app / dashboard

**Path:** `src/references/blueprints/app-dashboard.md`
Section anatomy: `references/17-section-library.md` · Method: `blueprints/00-index.md`

Marketing-site spacing applied to an application is one of the most common failures in generated design. Applications are usually **utilitarian-dense** (see `references/15-composition.md`) — small type, tight spacing, high information per screen — and that is correct, not a compromise.

## Screen inventory

| Screen | Purpose | Priority |
|---|---|---|
| App shell (nav, search, account) | Wayfinding | P0 |
| Home / dashboard | Answer the one question that starts the day | P0 |
| Primary object list | Find and act in bulk | P0 |
| Object detail | Inspect and edit | P0 |
| Create / edit flow | Add data with minimal friction | P0 |
| Search / command palette | Reach anything fast | P1 |
| Settings | Configure | P1 |
| Onboarding / first run | Reach first value | P0 |
| Empty, loading, error states | Every data view | P0 |
| Notifications, billing, admin | Depends on product | P1–P2 |

## App shell

Sidebar or top nav with an unambiguous active state — background fill or accent border, never bold text alone. Workspace or account switcher if the product is multi-tenant. Global search or a command palette (`Cmd+K`). User menu. Notification surface that doesn't interrupt.

Collapse the sidebar to icons at narrow widths with labels on hover and focus. Never icons alone permanently — findability drops measurably.

## Dashboard

**One screen answers one question.** Decide what that question is before laying anything out.

Structure: the single most important number at display scale with its comparison period · secondary metrics visibly subordinate · then the detail or exceptions table. Every metric states its period ("vs. previous 30 days"). Every chart has an empty and loading state. Charts: ≤6 series, direct labels over legends, never colour alone.

If it needs a legend to be understood, restructure it.

## Object list and table

Sticky header · sortable columns with visible direction · tabular numerals, right-aligned numbers, consistent decimals, units in the header · row actions available on focus as well as hover · selection with a count and bulk actions · pagination or virtualized scroll with a total · column visibility and density controls · filters persisted in the URL.

On mobile, transpose rows to cards rather than horizontally scrolling a wide table blindly.

## Create / edit

One column, labels above fields, correct `type`/`inputmode`/`autocomplete`, validation on blur. Autosave with a visible saved state, or explicit save with a dirty-state guard on navigation — never ambiguous. Keyboard submit. Preserve input across every failure.

## Onboarding

A checklist with visible progress plus contextual tooltips, not a modal tour. Skippable and resumable. Get to one real outcome inside the first session — the "first value moment" from the IA flow — and defer everything not needed to reach it.

## States — the most commonly skipped work

Every list, table, search result, and chart needs all of:

- **Empty (first use)** — what will appear here, why it's empty, one clear first action
- **Empty (no results)** — what was searched, what to relax, a clear-filters action
- **Loading** — skeletons matching the eventual layout over ~1s; nothing under ~300ms
- **Error** — plain language, no raw codes, a retry, and input preserved
- **Partial / stale** — when some data loaded and some didn't, say so rather than showing a silently incomplete view

## Power-user affordances

Keyboard shortcuts with a discoverable list (`?`) · command palette · bulk actions · saved views and filters · undo on destructive actions rather than only confirmation dialogs · shareable URLs for every view state.

## Density and accessibility together

Dense does not mean inaccessible. Hit targets stay ≥44px on touch even when visual density is high — use padding rather than shrinking the target. Offer a density toggle (comfortable/compact) and remember it per user. Contrast requirements do not relax at small sizes; they matter more.

## Acceptance criteria

- [ ] Every data view has empty, loading, error, and no-results states
- [ ] Active navigation state is unmistakable and not weight-only
- [ ] Tables use tabular numerals with consistent alignment and decimals
- [ ] Filter and view state lives in the URL
- [ ] Destructive actions are undoable or confirmed by naming the resource
- [ ] Full keyboard operability including tables and dialogs
- [ ] Touch targets ≥44px despite dense visual layout
- [ ] Both themes verified including charts, code blocks, and third-party embeds

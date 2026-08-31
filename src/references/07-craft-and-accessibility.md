# Craft-Level Details and Accessibility

**Path:** `src/references/07-craft-and-accessibility.md`

## Navigation
- **Top nav**: best for 5–7 primary sections; one- or two-word labels; the highest-value action styled as a button, not a plain link.
- **Sidebar**: standard for SaaS and dashboards with deep content; collapsible on smaller screens; obvious active state.
- **Bottom tab bar (mobile)**: 3–5 destinations, icon + label.
- **Breadcrumbs**: for deep hierarchies (e-commerce categories, docs).
- Never bury the primary action more than one tap from any entry point.
- Sticky headers should shrink, not disappear and reappear; on mobile, keep them under 64px so they don't eat the viewport.

## Forms
- One column, one input per line. Multi-column forms increase completion time and error rate.
- Labels above the field. Never placeholder-as-label — placeholder text vanishes on typing and erases context.
- Inline validation on blur, not mid-keystroke. Success validation only where it's genuinely reassuring (username availability, card number).
- Group related fields with clear section breaks on long forms; show progress on multi-step forms.
- Errors state what went wrong **and** how to fix it: "Password needs at least 8 characters" beats "Invalid password".
- Use correct `type`, `inputmode`, and `autocomplete` — this alone dramatically improves mobile completion.
- Never disable the submit button as the only error signal; users can't tell why it's dead. Let them submit and show what's wrong.

## Empty, loading, and error states
- **Empty states** are an onboarding opportunity: explain what will appear here and give one clear first action. Design them for lists, search results, dashboards, and inboxes.
- **Loading**: skeleton screens matching the eventual layout beat spinners for anything over ~1 second. Reserve the space to avoid layout shift. Under ~300ms, show nothing at all — a flash of loader is worse than a small wait.
- **Errors**: plain language, no raw codes for general users, always paired with a next step (a retry button, not "Error 500"). Preserve user input across a failure.
- **Optimistic UI** for high-confidence actions (likes, toggles) with a quiet rollback on failure.

## Motion and micro-interactions
Full system in `08-motion-system.md`. The craft-level rules:
- Motion clarifies — it shows relationships, gives feedback, and directs attention to what changed.
- Functional transitions stay short (150–300ms).
- Always provide a `prefers-reduced-motion` fallback. This is a real accessibility need, not an edge case.
- The 2026 mood favors calm, purposeful micro-interactions; users are broadly overstimulated by high-motion interfaces.

## Iconography and imagery
- One icon set across the entire product; mixing outline and filled or different stroke weights reads as unpolished. (Lucide, Phosphor, and Heroicons are all safe defaults.)
- Pair icons with text labels unless the icon is genuinely universal.
- Real product screenshots and photography outperform generic illustration on conversion pages; illustration works better for abstract or emotional storytelling.
- Serve modern formats (AVIF/WebP), size images correctly, lazy-load everything below the fold, and set explicit dimensions to prevent layout shift. A beautiful hero that adds three seconds of load costs more conversions than it earns in polish.

## Responsive
- Mobile-first whenever research shows majority mobile use — increasingly the default unless the product is clearly desktop work.
- Common breakpoints: ~375 (mobile), ~768 (tablet), ~1024–1280 (small desktop), ~1440+ (large) — guidelines, not law. Add a breakpoint where the layout actually breaks.
- Rethink information *priority* per breakpoint rather than shrinking the desktop layout.
- Prefer intrinsic layout (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, `clamp()`, container queries) over breakpoint proliferation.
- Test at 320px width and at 200% browser zoom; both are real conditions and both break most sites.

## Microcopy
- Buttons describe the outcome: "Start free trial" beats "Submit".
- Plain, direct language for functional UI; save personality for marketing copy and onboarding moments.
- Destructive confirmations restate what will happen in plain terms, not a generic "Are you sure?" — and the confirm button names the action ("Delete 3 invoices").
- Write the error messages during design, not at the end. They are the highest-stress text in the product.

## Handoff
- The design system is the single source of truth: component library, tokens for color/spacing/type/motion, documented states.
- Hand off with specs and redlines, not just static mockups.
- Keep design and code tokens in sync (a shared JSON source exported to CSS variables) so an update happens in exactly one place.

---

## Accessibility gate (run against every project, in both themes)

**Perceivable**
- [ ] Body text contrast ≥4.5:1; large text ≥3:1; UI component boundaries and icons ≥3:1
- [ ] Contrast verified in *both* light and dark themes
- [ ] Never color alone to convey meaning — pair with icon, label, or pattern
- [ ] Images have meaningful `alt`; decorative images use `alt=""`
- [ ] Content readable and functional at 200% zoom and at 320px width
- [ ] Video/audio has captions or a transcript

**Operable**
- [ ] Every interactive element reachable and operable by keyboard, in a logical order
- [ ] Visible `:focus-visible` style with ≥3:1 contrast against its background — never `outline: none` without a replacement
- [ ] Touch targets ≥44×44px (≥60×80px for children and seniors)
- [ ] Skip-to-content link as the first focusable element
- [ ] No keyboard traps; modals trap focus intentionally and restore it on close
- [ ] Motion honors `prefers-reduced-motion`; nothing auto-plays or auto-advances without a pause control
- [ ] No content requires hover to be discoverable

**Understandable**
- [ ] Form inputs have persistent visible labels programmatically associated with them
- [ ] Errors identify the field, describe the problem, and state the fix
- [ ] Navigation is consistent across pages; the current page is indicated
- [ ] Language of the page is declared (`<html lang>`)

**Robust**
- [ ] Semantic HTML first; ARIA only where semantics fall short
- [ ] Landmarks present (`header`, `nav`, `main`, `footer`)
- [ ] Dynamic updates announced via live regions where relevant
- [ ] Tested with a real screen reader on at least the primary flow (VoiceOver or NVDA)

Automated tools (axe, Lighthouse) catch roughly a third of real issues. Keyboard-only navigation of the primary flow is the fastest high-value manual check — do it every time.

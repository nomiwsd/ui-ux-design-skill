# Blueprint — Blog / content / media

**Path:** `src/references/blueprints/content-blog.md`
Section anatomy: `references/17-section-library.md` · Method: `blueprints/00-index.md`

Typography *is* the product. A content site with excellent type and no illustration outperforms one with mediocre type and a full art budget.

## Page inventory

| Page | Purpose | Primary action | Priority |
|---|---|---|---|
| Article | The product itself | Read to the end | P0 |
| Index / archive | Find something worth reading | Open an article | P0 |
| Topic / tag | Depth in one subject | Open an article | P1 |
| Author | Credibility and body of work | Follow / subscribe | P1 |
| Home | Editorial front page | Open an article | P1 (P0 for media) |
| Subscribe | Convert a reader | Subscribe | P1 |
| About / contact / legal | Table stakes | — | P2 |

## Article page — the details that matter

**Header:** title as the largest type on the page · standfirst that adds context rather than repeating the title · author with photo · publish date, and update date when revised · reading time · topic tags. A strong type-only header often beats a cover image.

**Body**
- Measure 680–760px, body 18–20px, line-height 1.6–1.75
- Paragraph spacing rather than indentation
- Subheads every 3–5 paragraphs, as real `h2`/`h3` so the outline exists
- Links visibly distinct without relying on colour alone
- Figures with captions, allowed to break the measure deliberately
- Pull quotes that use text already in the article, not new claims
- Code blocks with language label, copy button, and horizontal scroll rather than wrapping
- Footnotes and citations for anything factual
- Tables that reflow on mobile

**Furniture:** reading progress indicator (welcome) · share controls that don't eat the measure · related articles at the end, chosen by topic not recency · a subscribe prompt after the content, never interrupting the first screen.

**Editorial devices that cost nothing and immediately separate this from a blog template:** a margin rail carrying notes, captions, and section numbers · a drop cap · section numbering · asymmetric figure placement · a running header showing the current section.

## Index / archive

Consistent excerpt length, real publish dates, topic filters, and a visible total count. Lead article can be given more weight — an index where every item has identical prominence gives the reader no help.

Pagination or a real "load more" button. Infinite scroll with an unreachable footer is a common and avoidable failure.

## Reading experience rules

- Nothing interrupts the first screen. Newsletter modals on entry are the fastest way to lose a first-time reader.
- Ads and prompts never sit inside the reading column.
- Sticky elements never reduce the measure below 60 characters.
- Dark mode is a genuine requirement for long-form reading, and it needs its own contrast pass — light grey on near-black fails more often than designers expect.
- Support user font scaling and 200% zoom without breaking the measure.

## SEO and structure

Semantic heading hierarchy with one `h1` · descriptive `alt` on every meaningful image · article structured data · canonical URLs · a real excerpt field in the content model rather than a truncated first paragraph · fast LCP, which for an article is almost always the title or the cover image.

## Content model

Define before designing the card: `title, slug, excerpt (max 160 chars), cover (16:9), author, publishedAt, updatedAt, tags[], readingTime, body`. Designing a card for fields that don't exist is the most common cause of the built site not matching the mockup.

## Acceptance criteria

- [ ] Measure between 60 and 75 characters at every breakpoint
- [ ] Body text 18px+ with line-height 1.6+
- [ ] Heading hierarchy is semantic and unbroken
- [ ] Nothing interrupts or overlays the first screen
- [ ] Both themes pass contrast on body, links, captions, and code
- [ ] Code blocks, pull quotes, figures, tables, and footnotes are all styled
- [ ] Index shows dates, topics, and a total count
- [ ] Article renders correctly at 320px and at 200% zoom

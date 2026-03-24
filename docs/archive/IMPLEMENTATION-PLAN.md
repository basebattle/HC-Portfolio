# HC-Portfolio: Granular Implementation Plan

**Date:** 2026-03-16
**Scope:** Impact Section overhaul, Portfolio Section targeted fixes, About Section image treatment
**Rule:** No changes outside the three sections below unless explicitly noted.

---

## Diagnosis: The Redundancy Problem

`ImpactMetrics.tsx` and `ProjectGrid.tsx` are structurally identical. Both render 10 projects grouped into the same 3-column domain grid (Clinical / Financial / Governance). The only difference is that ProjectGrid shows compact cards with hover expansion, while ImpactMetrics shows bullet lists. A visitor scrolling from Portfolio into Impact sees the same projects, same grouping, same visual hierarchy repeated. The Impact section adds zero new information architecture. It just restates project features in longer prose.

---

## WORKSTREAM 1: Portfolio Section (ProjectGrid.tsx) — 3 Targeted Changes

### Change 1A: Increase Archetype Label Font Size and Visibility

**Current state** (ProjectGrid.tsx, lines 13-14 in `DomainHeader`):
- Font: `var(--font-jetbrains-mono)` at `11px`, uppercase
- Count badge: `10px` JetBrains Mono
- Bottom border: `${color}4D` (30% opacity domain color)

**Target state:**
- Increase domain title font to `16px` (from 11px)
- Switch font from JetBrains Mono to `var(--font-dm-serif)` for display weight
- Keep uppercase and tracking, but add `letter-spacing: 0.12em` for breathing room
- Increase count badge to `12px`
- Add a subtle left-accent bar (3px solid domain color) before the title text
- Bottom border opacity bumped to `${color}80` (50% opacity) for stronger visual separation

**File:** `src/components/home/ProjectGrid.tsx`, `DomainHeader` component (lines 10-21)

---

### Change 1B: Fit 6 Clinical Cards in Same Vertical Space as 3 Financial Cards

**Current state** (ProjectGrid.tsx, line 81-96):
- Grid: `lg:grid-cols-12` with Clinical at `lg:col-span-5`, Financial at `lg:col-span-4`, Governance at `lg:col-span-3`
- All cards stack vertically in a single column within each domain
- 6 clinical cards stacked = roughly 2x the height of 3 financial cards

**Target state:**
- Clinical Intelligence column gets an internal 2-column sub-grid: `grid grid-cols-2 gap-4`
- 6 cards arranged as 3 rows of 2, matching the vertical height of Financial's 3 rows of 1
- Cards within the clinical sub-grid need tighter padding to fit (reduce from `14px` to `10px 12px`)
- The heroNumber box inside clinical cards gets slightly smaller (font-size from `32px` to `26px`)
- Hover expansion still works, but on hover the card should expand over its sibling using `position: relative; z-index: 20` so it doesn't push the grid layout

**Column width redistribution:**
- Clinical: `lg:col-span-5` (stays, but now internally 2-col)
- Financial: `lg:col-span-4` (stays)
- Governance: `lg:col-span-3` (stays)

**Alternative if clinical cards feel too cramped at 2-col within col-span-5:**
- Redistribute to Clinical `lg:col-span-6`, Financial `lg:col-span-3`, Governance `lg:col-span-3`
- This gives clinical sub-grid more breathing room

**Files:**
- `src/components/home/ProjectGrid.tsx` lines 82-96 (clinical column wrapper)
- `src/components/projects/ProjectCard.tsx` — add a `compact` prop that reduces padding and hero font size. Clinical cards get `compact={true}`.

**Hover behavior note:** When a compact clinical card expands on hover, it must use `absolute` positioning relative to its grid cell so it overlays rather than displacing sibling cards. Add `relative` to the parent grid cell and `absolute top-0 left-0 w-full z-20` to the expanded state.

---

### Change 1C: Fill Strategic Governance Column with Placeholder Content

**Current state:** Only 1 project (P07 HAIRA). The column looks barren compared to 6 clinical and 3 financial cards.

**Target state:** Add 1-2 placeholder cards below P07 that are visually distinct from real project cards (so visitors don't mistake them for live projects).

**Placeholder Card 1 — "Coming Soon: Blog Post"**
- Style: Same card dimensions but with a dashed border (`border-style: dashed`) instead of solid
- Background: slightly more transparent than project cards (`rgba(22,32,41,0.4)`)
- Content:
  - Small label: `COMING SOON` in `var(--font-jetbrains-mono)` at `10px`, Trust Blue color
  - Title: "AI Governance in Practice" in DM Sans
  - Subtitle: "A framework for responsible healthcare AI deployment" in italic DM Sans

**Placeholder Card 2 — Rewritten Strategic Quote/Insight**
Pick one of these real-world sources and completely rewrite the insight in original language (no direct quotes, no attribution that implies endorsement):

- **Source inspiration:** Dr. Atul Gawande's work on checklist-driven governance in complex clinical systems (from "The Checklist Manifesto" thesis applied to AI oversight). Rewrite as an original insight card.
- **Card content (entirely rewritten, not copied):**
  - Label: `STRATEGIC SIGNAL` in JetBrains Mono, Trust Blue
  - Body text (2-3 sentences): Something along these lines, but written fresh: "The organizations that will lead in healthcare AI won't be the ones with the best models. They'll be the ones that built governance into the workflow before the first model went live. Checklists, not committees, will separate the leaders from the litigated."
  - Attribution line: "Inspired by checklist-driven governance research" (no named individual)
  - Style: no heroNumber box, no hover expansion. Just a glassmorphism card with a left border in Trust Blue and the text content.

**File:** `src/components/home/ProjectGrid.tsx` — add these after the governance `projects.map()` loop, as static JSX inside the governance column div (lines 114-128).

---

## WORKSTREAM 2: Measured Impact Section (ImpactMetrics.tsx) — Full Overhaul

### 2.0: The New Framework — "Impact Topology"

Replace the current 3-column bullet dump with a narrative visualization that answers: "Where does this portfolio's impact concentrate, and who built it?"

**Layout concept: Three horizontal bands, stacked vertically, each telling a different layer of the impact story.**

---

### Band 1: "Impact Distribution" — Aggregate Numbers with Domain Color-Coding

**Purpose:** Show the portfolio's cumulative footprint at a glance, without repeating individual projects.

**Layout:** A single row of 5-6 large CountUpMetric cards, spanning full width. Each metric is color-coded to its primary domain.

**Metrics to display (pull from existing project data, aggregate where possible):**

| Metric | Value | Color | Source Projects |
|--------|-------|-------|----------------|
| FHIR Standards Implemented | 7 | Teal (#0D7377) | P01, P06, P08, P09, P10 |
| Agent Nodes Deployed | 12+ | Teal | P02 (6), P03 (6) |
| Claims Analyzed | 5,000 | Gold (#FF8F00) | P04 |
| HFMA KPIs Tracked | 12 | Gold | P03 |
| Governance Domains Covered | 7 | Blue (#1565C0) | P07 |
| $0 Infrastructure Cost | $0 | Gold | P05, P07 |

**Each metric card:**
- Large number using `CountUpMetric` with scroll animation
- Domain-colored accent (left border or number color)
- Below the number: a one-line label
- Below the label: small linked project references, e.g., "P01 · P06 · P08" where each P-code is a hyperlink (`<a href="/projects/{slug}">`) styled in the domain color

**Visual treatment:**
- Background: slightly lighter than section bg (`rgba(26,37,53,0.5)`)
- Cards use the existing glassmorphism style
- Horizontal scroll on mobile, full row on desktop

**File:** `src/components/home/ImpactMetrics.tsx` — replace the current `DOMAINS` data and 3-column grid entirely.

---

### Band 2: "The Intersection" — Venn/Node Diagram Positioning Piyush

**Purpose:** Visually demonstrate that these 10 projects span three distinct competency areas and that one person built all of them. This is the "subtle positioning" element.

**Layout:** A horizontal strip with three overlapping circles or a node-link diagram rendered in SVG or pure CSS.

**Option A — CSS Venn (simpler, recommended):**
- Three overlapping circles, each domain-colored with 15% opacity fill
- Circle labels: "Clinical Informatics", "Agentic AI", "Payer-Provider Operations"
- Project codes (P01-P10) placed inside the circles based on which domains they touch
- The center overlap region (where all three intersect) contains: "10 Projects. 1 Builder." in DM Serif Display
- Each P-code is a clickable hyperlink to `/projects/{slug}`, styled in its domain color

**Option B — Horizontal Node Graph (more visual, harder):**
- Three horizontal lanes (Clinical / Financial / Governance), each color-coded
- Projects as nodes placed along the lanes
- Cross-domain connections drawn as thin lines between projects that share infrastructure (e.g., P09 feeds P01, P02, P10 with synthetic patients)
- A central "architect" node connecting to all 10

**Recommendation:** Go with Option A (CSS Venn). It's cleaner, faster to build, and the Venn metaphor directly communicates "intersection" without over-engineering.

**Subtlety requirements:**
- No headline that says "I am a visionary." Let the visual do the work.
- The section header could be something like: "Where the work converges" in DM Serif, muted color
- The P-code hyperlinks do the heavy lifting. Clicking any one takes you to a live project, reinforcing that these aren't hypotheticals.
- Below the Venn, a single line in DM Sans, muted: "All 10 projects are open-source on GitHub" with a subtle GitHub icon link to `github.com/basebattle`. This is the "open-source credibility" signal without a billboard.

**File:** `src/components/home/ImpactMetrics.tsx` — add as the second visual band after the aggregate metrics.

---

### Band 3: "Impact Narrative" — The Story Thread

**Purpose:** Replace the bullet dump with a flowing narrative that connects the projects into a strategic arc.

**Layout:** A horizontal timeline or stacked card sequence showing project phases as chapters of a story.

**Structure:**
Three narrative blocks, each 2-3 sentences max, each followed by linked project references.

**Block 1: "The Data Layer"**
- Narrative: "Before an AI agent can reason about a patient, it needs clean, typed, terminology-resolved clinical data. The portfolio starts here: a standards-compliant FHIR bridge, a synthetic patient generator, and a clinical data gateway that serves three deployment modes from a single codebase."
- Linked projects: P01, P06, P09 (each as a colored chip/tag linking to `/projects/{slug}`)
- Accent color: Teal

**Block 2: "The Intelligence Layer"**
- Narrative: "With data flowing, the next layer applies clinical and financial reasoning. A prior auth pipeline that collapses 45-minute workflows. A CDS engine that scores drug interactions at 0.94 confidence. A revenue cycle dashboard benchmarked against HFMA standards. A denial workflow that catches problems before submission, not after."
- Linked projects: P02, P08, P03, P04 (colored chips)
- Accent colors: Mix of Teal and Gold

**Block 3: "The Governance Layer"**
- Narrative: "Intelligence without oversight is liability. The portfolio closes with a digital implementation of a peer-reviewed AI governance framework and a hospital-at-home monitoring system that bakes CMS compliance into every clinical decision."
- Linked projects: P07, P10, P05 (colored chips)
- Accent colors: Blue and Gold

**Visual treatment for each block:**
- Left accent bar in the dominant domain color
- Narrative text in DM Sans, `#ECEFF1`, `text-base leading-relaxed`
- Project chips: small rounded pill badges, domain-colored background at 15% opacity, domain-colored text, clickable
- Between blocks: a thin connecting line (1px, `rgba(255,255,255,0.06)`) to suggest flow

**File:** `src/components/home/ImpactMetrics.tsx` — add as the third band.

---

### Section Wrapper Changes

**Current section background:** `#1A2535` with `border-t border-b`

**New section background:** Keep `#1A2535` as base. Add a very subtle radial gradient bloom centered on Band 2 (the Venn):
```css
background: #1A2535;
/* Add via inline style or pseudo-element: */
/* radial-gradient(ellipse 60% 40% at 50% 50%, rgba(13,115,119,0.06) 0%, transparent 70%) */
```

**Section header:** Keep "Measured Impact" as the h2 but change the section label from "Impact" to "Impact Architecture" (signals a systems view, not a feature list).

---

## WORKSTREAM 3: About Section Image Treatment (AboutSection.tsx)

### Current State
- `speaker-bg.jpg` used as a CSS `background-image` on the section
- Covered by two overlay layers:
  - Layer 2: `backdrop-filter: blur(14px) saturate(0.35)`
  - Layer 3: `linear-gradient(135deg, rgba(15,25,35,0.82)...rgba(15,25,35,0.88))`
- The image is barely visible through heavy blur and dark tint
- Image positioned at `background-position: center 20%` (mobile) / `center top` (desktop)
- Content over it: blockquote + prose (left), credential cards (right)

### Target State

**Goal:** Make Piyush's image the visual anchor of the About section. Show the full-length image. Reduce blur so the person is clearly visible. The hero section's animated grid background is already strong enough as a visual opener, so the About section should carry the personal brand weight.

### Implementation Steps

**Step 3A: Switch from background-image to a dedicated `<Image>` element**
- Remove `backgroundImage` from the section's inline style (line 58)
- Add a Next.js `<Image>` component as a positioned element within the section
- On desktop (lg+): Place the image in the right column, replacing or sitting behind the credential cards
- On mobile: Place it as a full-bleed background behind the entire section (similar to current behavior, but with less blur)

**Step 3B: Desktop layout (lg+) — Full-length image in right column**
- Change the grid from `lg:grid-cols-2` to `lg:grid-cols-5` (3 cols prose, 2 cols image)
- Right column: the `<Image>` component, `object-cover`, full height of the section
- Image styling:
  - `object-position: center top` (show face and upper body)
  - Mask: softer radial gradient than the hero section. Something like: `radial-gradient(ellipse 80% 90% at 50% 30%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 85%)` — keeps the center sharp, fades only at edges
  - Opacity: `0.9` (up from the hero's `0.8`)
  - NO `mix-blend-screen` (that was for the hero's artistic treatment). Use `mix-blend-normal` or omit entirely for true-color rendering
  - Blur: NONE on the image itself. The image should be sharp.
- Credential cards: overlay on top of the lower portion of the image, with their existing glassmorphism background providing contrast
- This creates a "speaker at a conference" feel where the person is visible and the credentials float over the lower body

**Step 3C: Reduce/remove the overlay blur**
- Current overlay (lines 73-82): `blur(14px) saturate(0.35)` plus dark gradient
- New overlay: Remove `backdrop-filter` entirely on desktop. On mobile, reduce to `blur(4px) saturate(0.6)` so the image is recognizable even behind content
- Dark gradient: lighten from `0.82/0.70/0.88` opacity to `0.55/0.40/0.65` so the image shows through more prominently
- On mobile where text readability matters more, keep a slightly heavier tint but still lighter than current

**Step 3D: Image coverage for the last page**
- The user wants the image to visually "cover" the bottom of the page (About + Contact sections)
- Option: Let the image extend beyond the About section's bounds using `absolute` positioning that bleeds into the Contact section below
- Set the image container to `position: absolute; top: 0; right: 0; bottom: -200px; width: 40%` on desktop, with a gradient fade at the bottom edge
- The Contact section (`ContactSection.tsx`) would need `position: relative; z-index: 10` so its content sits above the bleeding image
- This creates a full-page visual where Piyush's image anchors the entire bottom half of the site

**Step 3E: Ensure the speaker-bg.jpg is the right asset**
- Verify `/public/images/speaker-bg.jpg` (1.1MB, exists) is the full-length photo the user wants showcased
- If it's a cropped headshot, the user will need to supply a full-length version
- The `hero-profile.png` referenced in `HeroSection.tsx` does NOT exist in `/public/`. This is a separate issue from the About section but worth noting: the hero section's right-column image is currently broken/missing.

**Files:**
- `src/components/home/AboutSection.tsx` — major restructure of layout, image treatment, overlay
- `src/components/home/ContactSection.tsx` — add `relative z-10` to ensure it layers above the bleeding image
- Potentially `src/app/page.tsx` — if the image bleed requires wrapping About + Contact in a shared container

---

## Execution Order (Dependency-Aware)

| Step | Workstream | Dependency | Estimated Complexity |
|------|-----------|------------|---------------------|
| 1 | 1A: Archetype label sizing | None | Low |
| 2 | 1C: Governance placeholder cards | None | Low |
| 3 | 1B: Clinical 2-col sub-grid | Depends on 1A (labels must fit narrower cards) | Medium |
| 4 | 2 Band 1: Aggregate metrics | None | Medium |
| 5 | 2 Band 3: Impact narrative | None (content writing) | Medium |
| 6 | 2 Band 2: Venn/intersection | None, but visually depends on Band 1+3 context | Medium-High |
| 7 | 3: About section image | None | Medium-High |
| 8 | Verify: `npm run build` passes | All above | Required |
| 9 | Verify: Mobile responsiveness at 375px | All above | Required |

---

## Files Modified (Summary)

| File | Workstream | Nature of Change |
|------|-----------|-----------------|
| `src/components/home/ProjectGrid.tsx` | 1A, 1B, 1C | DomainHeader restyle, clinical sub-grid, governance placeholders |
| `src/components/projects/ProjectCard.tsx` | 1B | Add `compact` prop for clinical sub-grid variant |
| `src/components/home/ImpactMetrics.tsx` | 2 | Full rewrite: 3 bands replacing 3-column bullet grid |
| `src/components/home/AboutSection.tsx` | 3 | Image extraction from bg, layout restructure, blur reduction |
| `src/components/home/ContactSection.tsx` | 3 | z-index adjustment for image bleed |
| `src/app/page.tsx` | 3 (possibly) | Wrapper div if image bleed needs shared container |

---

## What NOT to Change

- `src/data/projects.ts` — no data changes
- `src/components/home/HeroSection.tsx` — no changes (hero bg is "good enough" per user)
- `src/app/projects/[slug]/page.tsx` — no changes to detail pages
- Any component in `src/components/projects/` except ProjectCard.tsx
- Any component in `src/components/ui/`
- `src/components/layout/Navbar.tsx` and `Footer.tsx`
- Color palette, fonts, or design tokens

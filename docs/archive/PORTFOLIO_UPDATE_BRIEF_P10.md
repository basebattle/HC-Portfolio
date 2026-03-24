# Portfolio Update Brief — P10 Hospital-at-Home Intelligence Layer

**For:** AI agent maintaining `basebattle/hc-portfolio` (Next.js / Vercel)
**Date:** 2026-03-18
**Author:** Dr. Piyush Sharma (PT, MHA)
**Status:** ACTIONED — `src/data/projects.ts` already updated (see below). This brief documents what changed and why, for audit and future reference.

---

## Summary of Changes

Project 10 (`slug: hah-monitoring`) has been fully built and deployed. The portfolio entry has been updated in `src/data/projects.ts` to reflect the live application. Key deltas from the previous state:

| Field | Previous | Updated |
|---|---|---|
| `stack` | `["Next.js", "Python", "IoMT FHIR patterns", "FHIR Observation"]` | `["Python 3.12", "Streamlit", "Plotly", "Pandas", "NEWS2 Engine", "RAG Classifier"]` |
| `descriptor` | `"NEWS2 monitoring with CMS AHCaH waiver compliance"` | `"NEWS2 + RAG risk engine · CMS AHCaH waiver compliance"` |
| `veteran` | Brief single sentence | Expanded with 9 diagnoses, 42 CFR §412.65 citation |
| `bullets[0]` | `"NEWS2 scoring: 6 physiological parameters → RAG triage"` | `"NEWS2 scoring: 7 vitals → automated Red/Amber/Green RAG triage"` (corrected to 7) |
| `bullets[1]` | `"Census: 12 Green (0–4), 5 Amber (5–6), 3 Red (7+)"` | `"20-patient census: 12 Green · 5 Amber · 3 Red — real-time refresh"` |
| `bullets[2]` | `"Escalation queue auto-sorted by NEWS2 severity"` | `"AI Analysis Engine: RAG classifier synthesises NEWS2 + clinical notes"` |
| `bullets[3]` | `"CMS AHCaH waiver: all 10 conditions of participation checked"` | `"CMS AHCaH waiver: 10 conditions of participation tracked (42 CFR §412.65)"` |
| `live` | Already correct: `https://hah-intelligence.streamlit.app` | No change needed |

---

## What Was Built

### Application
A 5-page Streamlit dashboard deployed at `https://hah-intelligence.streamlit.app`:

1. **Landing page** (`app.py`) — Interactive hero with animated condition icons (pulsing heart for CHF, inflating lungs for COPD, rocking kidneys for DKA/CKD), stats bar, condition grid, 4-module guide, portfolio attribution
2. **Census Monitor** — 20-patient live telemetry table with NEWS2 risk stratification, coloured risk cards, Refresh Vitals button
3. **Patient Detail** — Per-patient animated condition banner, 7-vital grid, NEWS2 parameter breakdown, AI Analysis Engine panel with RAG synthesis + Plotly confidence gauge
4. **Active Alerts** — Auto-generated escalation queue sorted Critical → High → Medium → Low, with severity badges
5. **CMS Compliance** — 10 AHCaH waiver conditions tracked against 42 CFR §412.65

### Technical Architecture
- **Engine:** `engine/news2.py` (7-parameter NEWS2 scoring), `engine/rag_classifier.py` (RAG risk synthesis), `engine/alert_generator.py`
- **Data:** `data/simulator.py` (20-patient in-memory generator, `CONDITION_ICONS` dict, 9 diagnoses)
- **CSS design system:** #080F16 background, #00BFA5 teal, DM Serif Display / DM Sans / JetBrains Mono — matches portfolio aesthetic
- **HTML rendering:** All content blocks use `st.html()` (Streamlit 1.31+) to bypass CommonMark parser — prevents raw HTML from appearing as visible source code

### Conditions Coverage (9 diagnoses)
CHF Exacerbation, Heart Failure, COPD Exacerbation, Pneumonia, Cellulitis, Sepsis, UTI, Urosepsis, Diabetic Ketoacidosis, Chronic Kidney Disease, Post-Surgical

---

## Files Changed in `hc-portfolio` Repo

### `src/data/projects.ts`
- P10 entry: `stack`, `descriptor`, `veteran`, and all 4 `bullets` updated
- No other projects touched
- `live` URL was already correct from a prior update

### Nothing else needs changing
- Project card component renders dynamically from `projects.ts` — no JSX changes needed
- The slug (`hah-monitoring`) is unchanged — existing deep-link URLs remain valid
- `status: "Deployed"` and `phase: 3` were already correct

---

## Verification Checklist

After deploying this portfolio update:

- [ ] Visit `/projects/hah-monitoring` — verify stack chips show Python 3.12, Streamlit, Plotly, Pandas, NEWS2 Engine, RAG Classifier
- [ ] Verify the 4 bullets render with updated text
- [ ] Click the live URL badge → `https://hah-intelligence.streamlit.app` loads the dashboard
- [ ] Verify the descriptor line below the hero number shows the updated text

---

## Background: Why Streamlit, Not Next.js

The original `stack` entry listed Next.js because the project was planned as a web app. During build, Streamlit was selected because:
1. All clinical data engine code (NEWS2, RAG) is pure Python — no JS equivalent needed
2. Streamlit Community Cloud provides zero-cost persistent-process hosting (Vercel is serverless/Lambda and incompatible with Streamlit's WebSocket model)
3. Faster iteration: the entire 5-page app was built in a single session

The Vercel project `hah-intelligence` (`prj_myQ1O437qsLLfXUXeKk7T2Jhouos`) was never built — it is an orphaned shell. See Vercel Cleanup section below.

---

## Vercel Cleanup (Separate Action Required)

The old Vercel project for hah-intelligence is orphaned and can be safely deleted.

**Safe to delete:** `prj_myQ1O437qsLLfXUXeKk7T2Jhouos` (project name: `hah-intelligence`)
**Do NOT delete:** `prj_fChELlEU21sq3RXzRt1Vn5hmMQ5h` (project name: `hc-portfolio` — the portfolio itself)

See the Vercel deletion section below for CLI instructions.

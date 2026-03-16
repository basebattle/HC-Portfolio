# HEALTHCARE AI INNOVATION SHOWROOM

## Master Reference Document — MECE Framework

### All Projects, Links, Paths, Stacks, Features, and Architecture

**Last Updated:** March 2026
**Portfolio URL:** <https://hc-portfolio-zeta.vercel.app>
**GitHub Owner:** basebattle

---

## 1. HC-PORTFOLIO (The Website Itself)

### 1.1 Links

| Type | URL |
|------|-----|
| Live Site | <https://hc-portfolio-zeta.vercel.app> |
| GitHub Repo | <https://github.com/basebattle/HC-Portfolio> |
| Vercel Dashboard | <https://vercel.com/basebattle-2762s-projects/hc-portfolio/settings> |

### 1.2 Local Filepath

```text
~/Projects/12_HC-Portfolio/
```

### 1.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | DM Serif Display, DM Sans, JetBrains Mono (via next/font/google) |
| Deployment | Vercel (free Hobby tier, auto-deploy on push to main) |

### 1.4 Key Files to Edit

| File | Purpose | When to Edit |
|------|---------|-------------|
| `src/data/projects.ts` | SINGLE SOURCE OF TRUTH for all 10 project objects | When updating project status, URLs, descriptions, KPIs |
| `src/app/page.tsx` | Homepage (Hero, Grid, Impact, About, Contact) | When changing homepage sections |
| `src/app/projects/[slug]/page.tsx` | Dynamic Project Detail Page | When changing PDP layout or sections |
| `tailwind.config.ts` | Design tokens (colors, fonts) | When adjusting the design system |
| `src/styles/globals.css` | Global CSS, background color | When changing global styles |
| `src/components/home/HeroSection.tsx` | Hero section content | When updating headline, stats, CTAs |
| `src/components/home/AboutSection.tsx` | About narrative + credentials | When updating bio or credentials |

### 1.5 Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | #0F1923 | Every page, always dark |
| Primary Teal | #0D7377 | Clinical Intelligence accent, nav, CTAs |
| Accent Glow | #00BFA5 | Hover states, highlights |
| Deep Slate | #37474F | Body text on dark bg |
| Slate Mid | #607D8B | Secondary text |
| Slate Light | #ECEFF1 | Primary text on dark bg |
| Warm Gold | #FF8F00 | Financial metrics, impact numbers |
| Trust Blue | #1565C0 | Strategic Governance accent |
| Card Glass | rgba(22,32,41,0.7) + backdrop-blur-md + border-white/10 | All cards |

### 1.6 Architecture

```text
[Vercel Edge Network]
    ↕
[Next.js 15 App Router]
    ├── Static pages (pre-rendered at build time)
    ├── Dynamic routes: /projects/[slug] (generateStaticParams from projects.ts)
    └── No backend, no database, no API calls
        All content from projects.ts
```

### 1.7 Deployment

- Push to `main` branch on GitHub → Vercel auto-deploys
- Build command: `next build`
- No environment variables needed
- No backend services

---

## 2. PROJECT REGISTRY (P01–P10)

### Structure of this section

Each project covers: Links, Local Filepath, Tech Stack, Architecture, Deployment, Features, and the key file to edit for content changes.

---

### P01: FHIR-MCP Bridge — Clinical Intelligence Platform

**Category:** Clinical Intelligence | **Status:** Deployed | **Phase:** 1

#### 2.1.1 Links

| Type | URL |
|------|-----|
| Live Frontend | <https://v3-ehr-simulator.vercel.app> |
| GitHub Repo | <https://github.com/basebattle/FHIR-MCP-data-bridge> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/fhir-mcp-bridge> |

#### 2.1.2 Local Filepath

```text
~/Projects/03_System_Integration_MCP/fhir-mcp-bridge/
```

#### 2.1.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Python 3.12+, FastMCP framework, HTTPX, Pydantic v2, Uvicorn |
| Data Standard | HL7 FHIR R4 |
| Terminology | ICD-10, SNOMED CT, RxNorm, LOINC |
| Frontend | Next.js, React, Recharts (EHR simulator) |
| Deployment | Vercel (frontend) |

#### 2.1.4 Architecture

```text
[Next.js EHR Simulator on Vercel]
    ↕
[FastMCP Server (Python)]
    ├── FHIR Client (HTTPX)
    ├── Auth Manager (SMART on FHIR simulation)
    └── Terminology Service (multi-vocabulary resolution)
```

#### 2.1.5 Features

- MCP-native abstraction of HL7 FHIR R4 operations
- Pydantic v2 strict-mode model layer for type-safe clinical data
- Real-time terminology resolution across 4 code systems (ICD-10, SNOMED CT, RxNorm, LOINC)
- REST API gateway exposing MCP tools as standard HTTP endpoints
- Interactive Next.js simulated EHR frontend

---

### P02: Prior Authorization Pipeline

**Category:** Clinical Intelligence | **Status:** Deployed | **Phase:** 1

#### 2.2.1 Links

| Type | URL |
|------|-----|
| Live Frontend (Next.js) | <https://prior-auth-pipeline.vercel.app> |
| Live Frontend (Legacy Streamlit) | <https://priora-pipeline.streamlit.app> |
| GitHub Repo | <https://github.com/basebattle/prior-auth-pipeline> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/prior-auth> |

#### 2.2.2 Local Filepath

```text
~/Projects/02_Web_Cloud/prior-auth-pipeline/
```

#### 2.2.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Agent Orchestration | LangGraph (6-node DAG) |
| LLM | Anthropic Claude API |
| Frontend (v2) | Next.js 14, React 18, Tailwind CSS v3, Framer Motion, Recharts |
| Frontend (legacy) | Streamlit |
| Backend | FastAPI on Render (v2-nextjs branch) |

#### 2.2.4 Architecture

```text
[Next.js Dashboard on Vercel]
    ↕
[FastAPI Backend on Render]
    ↕
[LangGraph 6-Node Agent Pipeline]
    ├── Node 1: Intake Agent (CPT/ICD extraction, payer ID)
    ├── Node 2: Clinical Review Agent (CMS medical necessity)
    ├── Node 3: Provider Credentialing (CMS NPPES validation)
    ├── Node 4: Denial Risk Assessor (probabilistic scoring)
    ├── Node 5: Documentation Assembler (FHIR evidence bundle)
    └── Node 6: Decision Synthesis (confidence score + rationale)
```

#### 2.2.5 Features

- 6 specialized AI agent nodes in a LangGraph DAG
- Probabilistic denial risk assessment before submission
- CMS NPPES provider credentialing validation
- LCD/NCD clinical guideline cross-referencing
- Real-time FHIR-based EHR data extraction
- Human-readable determination with confidence score
- Dual deployment: legacy Streamlit (main branch) + Next.js (v2-nextjs branch)

#### 2.2.6 Key Branches

| Branch | Purpose |
|--------|---------|
| main | Legacy Streamlit deployment |
| v2-nextjs | Next.js frontend + FastAPI backend |

---

### P03: Revenue Cycle Management Dashboard

**Category:** Financial Optimization | **Status:** Deployed | **Phase:** 1

#### 2.3.1 Links

| Type | URL |
|------|-----|
| Live App | <https://payvider-dashboard.streamlit.app> |
| GitHub Repo | <https://github.com/basebattle/revenue-cycle-dashboard> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/rcm-dashboard> |

#### 2.3.2 Local Filepath

```text
~/Projects/02_Web_Cloud/revenue-cycle-dashboard/
```

#### 2.3.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Streamlit |
| Agent | LangGraph |
| LLM | Anthropic Claude API (Haiku for parsing, Sonnet for summaries) |
| Data | Pandas, SQLite (caching) |
| Charts | Plotly |
| Deployment | Streamlit Community Cloud |

#### 2.3.4 Architecture

```text
[Streamlit Dashboard on Streamlit Cloud]
    ├── 12 KPI Calculator (Pandas, HFMA formulas)
    ├── AI Query Agent (LangGraph + Claude)
    ├── Anomaly Detector
    ├── Report Generator (PowerPoint, Excel)
    └── SQLite Cache Layer
```

#### 2.3.5 Features

- 12 HFMA-benchmarked revenue cycle KPIs calculated in real time
- Natural language query interface (ask financial questions in plain English)
- Automated anomaly detection flagging revenue leakage
- Executive summary generation in natural language
- Report export (PowerPoint, Excel)
- Industry benchmark comparison (HFMA, MGMA reference data)

---

### P04: Claims Denial Workflow Agent

**Category:** Financial Optimization | **Status:** Deployed | **Phase:** 2

#### 2.4.1 Links

| Type | URL |
|------|-----|
| Live Dashboard | <https://claims-denial-agent.streamlit.app> |
| GitHub Repo | <https://github.com/basebattle/claims-denial-agent> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/claims-denial> |

#### 2.4.2 Local Filepath

```text
~/Projects/P04-Claims-Denial-Agent/
```

#### 2.4.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Agent Orchestration | LangGraph (4-node pipeline) |
| Backend | FastAPI |
| Dashboard | Streamlit |
| Database | Supabase Postgres (or local CSV) |
| Deployment | Streamlit Cloud (dashboard) + Render (backend) |

#### 2.4.4 Architecture

```text
[Streamlit Dashboard]  ←→  [FastAPI Backend]  ←→  [LangGraph Agent Pipeline]
                                    ↕
                           [Supabase/CSV Data]
    Agent Nodes:
    ├── Denial Intake Agent (CARC/RARC classification)
    ├── Root-Cause Analyzer (pattern aggregation, trend detection)
    ├── Remediation Agent (corrective action recommendations)
    └── Prevention Scorer (pending claim risk ranking)
```

#### 2.4.5 Features

- CARC/RARC denial taxonomy engine (top 50 codes mapped to 4 root-cause categories)
- Denial dashboard: volume by root cause, payer, service line, time period
- Prevention Score ranking pending claims by denial probability
- ROI model (10/20/30% prevention scenario calculator)
- Denial chain drill-down (submission → denial → appeal → resolution)
- 5,000 synthetic claims with 12% denial rate

---

### P05: VBC Reimbursement Analyzer

**Category:** Financial Optimization | **Status:** Deployed | **Phase:** 2

#### 2.5.1 Links

| Type | URL |
|------|-----|
| Live Dashboard | <https://vbc-analyzer.streamlit.app> |
| GitHub Repo | <https://github.com/basebattle/vbc-analyzer> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/vbc-analyzer> |

#### 2.5.2 Local Filepath

```text
~/Projects/P05-VBC-Analyzer/
```

#### 2.5.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Data Pipeline | dbt + Tuva Project (Apache 2.0) |
| Database | DuckDB (file-based, zero cost) |
| Dashboard | Streamlit |
| Charts | Plotly |
| Deployment | Streamlit Community Cloud |

#### 2.5.4 Architecture

```text
[Streamlit Dashboard]  ←→  [DuckDB (local file)]  ←→  [dbt + Tuva Project]
                                                            ↕
                                                   [Synthetic Claims CSV]
```

#### 2.5.5 Features

- Tuva Project integration (open-source claims-to-analytics dbt pipeline)
- Episode-level Total Cost of Care (TCOC) calculation for oncology
- Performance-based payment adjustment modeling
- Scenario sliders for CMS-HCC V28 risk-adjustment sensitivity
- Provider and payer mix cost comparison
- Runs entirely locally with DuckDB (zero cloud database cost)

---

### P06: FHIR-to-LLM Clinical Data Gateway

**Category:** Clinical Intelligence | **Status:** Deployed | **Phase:** 3

#### 2.6.1 Links

| Type | URL |
|------|-----|
| Live Frontend | <https://fhir-llm-gateway.vercel.app> |
| Live Backend | <https://fhir-llm-gateway.onrender.com> |
| GitHub Repo | <https://github.com/basebattle/fhir-llm-gateway> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/fhir-llm-gateway> |

#### 2.6.2 Local Filepath

```text
~/Projects/P06-FHIR-LLM-Gateway/
├── backend/     (FastAPI + MCP tools)
└── frontend/    (Next.js API Playground)
```

#### 2.6.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | FastAPI, FastMCP, HTTPX, Pydantic, python-dotenv |
| FHIR Server | Medplum Cloud (api.medplum.com/fhir/R4) |
| Auth | OAuth2 client_credentials (Medplum) |
| Frontend | Next.js 15, TypeScript, Tailwind CSS, Framer Motion |
| Deployment | Vercel (frontend) + Render (backend) |

#### 2.6.4 Architecture

```text
[Next.js Frontend on Vercel]
         ↕ (API calls)
[FastAPI Backend on Render]
    ├── Tri-Mode FHIR Client (fhir_client.py)
    │   ├── FHIR_MODE=static  → JSON from data/traces/ (deployed site)
    │   ├── FHIR_MODE=cloud   → Medplum API with OAuth2 (live demos)
    │   └── FHIR_MODE=local   → localhost:8080 (optional Docker)
    ├── MCP Tools: PatientLookup, ConditionSearch, CoverageLookup
    ├── Clinical Agent (3-tool chain)
    └── Reasoning Logger (audit trail)
```

#### 2.6.5 Key Files

| File | Purpose |
|------|---------|
| `backend/app/fhir_client.py` | Tri-mode FHIR client (THE core file) |
| `backend/.env` | Medplum credentials (NEVER committed) |
| `backend/.env.example` | Template with placeholders (committed) |
| `backend/data/traces/*.json` | Pre-captured FHIR R4 responses for static mode |
| `backend/scripts/capture_traces.py` | Utility to refresh traces from Medplum |

#### 2.6.6 Medplum Configuration

| Setting | Value |
|---------|-------|
| Project | Innovation-Showroom-FHIR |
| Client App | Innovation-Showroom-Gateway |
| Client ID | eb5bba04-2e3e-4c93-8651-3f9ac5c95202 |
| Base URL | <https://api.medplum.com/fhir/R4> |
| Token URL | <https://api.medplum.com/oauth2/token> |
| Auth Flow | OAuth2 client_credentials |
| Patients Loaded | 13 Synthea bundles |

#### 2.6.7 Features

- Tri-mode FHIR client (static/cloud/local)
- 3 MCP tools wrapping FHIR REST operations
- API Playground with 4-panel split view (Tool Selection, FHIR Request, FHIR Response, Agent Trace)
- Clinical scenario walkthrough (3-tool chain execution)
- SMART on FHIR OAuth 2.0 documentation page
- Bulk Data Access 2.0 documentation page
- Reasoning trace with timestamps

#### 2.6.8 Render Environment Variables

| Key | Value |
|-----|-------|
| FHIR_MODE | static |
| PYTHON_VERSION | 3.12.6 |

---

### P07: HAIRA Governance Assessment Tool

**Category:** Strategic Governance | **Status:** Deployed | **Phase:** 4

#### 2.7.1 Links

| Type | URL |
|------|-----|
| Live App | <https://haira-assessment.vercel.app> |
| GitHub Repo | <https://github.com/basebattle/haira-assessment> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/haira> |

#### 2.7.2 Local Filepath

```text
~/Projects/P07-HAIRA-Assessment/
```

#### 2.7.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Charts | Recharts (RadarChart) |
| Persistence | localStorage (initial), Supabase optional (future) |
| Deployment | Vercel (single app, no backend service) |

#### 2.7.4 Architecture

```text
[Next.js App on Vercel]
    ├── Assessment Wizard (35 questions, 7 domains)
    ├── Scoring Engine (domain averages, overall score, maturity level)
    ├── Results Dashboard (radar chart, recommendations, benchmarks)
    └── localStorage (state persistence, no backend needed)
        (Optional future: Supabase for cross-org benchmarking)
```

#### 2.7.5 Features

- 35 assessment questions across 7 HAIRA governance domains
- 5-level maturity scoring (Initial through Leading)
- 7-axis radar chart comparing scores against synthetic benchmarks
- Prioritized recommendations engine (sorted by lowest-scoring domains)
- Benchmark comparison showing percentile position
- Based on Hussein et al. 2026 (npj Digital Medicine)
- Blue (#1565C0) accent color (Strategic Governance category)

---

### P08: CDS Hooks + LLM Reasoning Engine

**Category:** Clinical Intelligence | **Status:** Deployed | **Phase:** 3

#### 2.8.1 Links

| Type | URL |
|------|-----|
| Live Frontend | <https://cds-analytics-app.vercel.app> |
| Live Backend | <https://cds-analytics.onrender.com> |
| GitHub Repo | <https://github.com/basebattle/cds-analytics> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/cds-hooks> |

#### 2.8.2 Local Filepath

```text
~/Projects/P08-CDS-Analytics/
├── backend/     (FastAPI CDS service)
└── frontend/    (Next.js simulated EHR)
```

#### 2.8.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | FastAPI, Pydantic, python-dotenv |
| CDS Standard | CDS Hooks v2.0.1 (HL7) |
| LLM | Static rationales (LLM_MODE=static), Claude API optional (live) |
| Rule Engine | JSON lookup tables (interaction_db, contraindication_db) |
| Frontend | Next.js 15, TypeScript, Tailwind CSS, Framer Motion |
| Deployment | Vercel (frontend) + Render (backend) |

#### 2.8.4 Architecture

```text
[Next.js Simulated EHR on Vercel]
         ↕ (CDS Hooks API calls)
[FastAPI CDS Service on Render]
    ├── Discovery Endpoint (GET /cds-services)
    ├── Order-Sign Hook Handler (POST /cds-services/med-safety-ai)
    │   ├── Rule Engine
    │   │   ├── interaction_checker.py (20 drug-drug interactions)
    │   │   └── contraindication_checker.py (15 drug-condition pairs)
    │   ├── LLM Reasoner (static rationales or Claude API)
    │   └── Card Builder (CDS Hooks v2.0.1 compliant)
    └── Reasoning Logger (audit trail with custom extension)
```

#### 2.8.5 Demo Scenarios

| Scenario | Patient | Draft Order | Current Med/Condition | Severity | Confidence |
|----------|---------|-------------|----------------------|----------|------------|
| Opioid + Benzo | 68yo male, chronic back pain | Diazepam 5mg | Oxycodone 10mg (active) | Critical | 0.94 |
| NSAID + Renal | 72yo female, CKD Stage 3 | Ibuprofen 400mg | eGFR 42 (CKD N18.3) | High | 0.91 |

#### 2.8.6 Features

- CDS Hooks v2.0.1 compliant service (order-sign hook)
- 20 drug-drug interactions + 15 contraindications in JSON lookup tables
- LLM-generated clinical rationales (static mode for deployment, live mode optional)
- Custom ai_reasoning_trace extension (namespaced: com.healthcareshowroom.ai_reasoning_trace)
- Simulated EHR prescribing interface
- AI reasoning audit trail (rule result → LLM reasoning → card generation)
- Side-by-side comparison: Traditional CDS vs LLM-Augmented CDS

#### 2.8.7 Render Environment Variables

| Key | Value |
|-----|-------|
| LLM_MODE | static |
| PYTHON_VERSION | 3.12.6 |

---

### P09: Synthetic Patient Cohort Generator

**Category:** Clinical Intelligence | **Status:** Deployed | **Phase:** 2

#### 2.9.1 Links

| Type | URL |
|------|-----|
| Live Dashboard | <https://synthea-cohort-generator.streamlit.app> |
| GitHub Repo | <https://github.com/basebattle/synthea-cohort-generator> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/synthea-cohorts> |

#### 2.9.2 Local Filepath

```text
~/Projects/P09-Synthea-Cohort-Generator/
```

#### 2.9.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Data Source | Synthea (pre-generated FHIR R4 bundles) |
| Dashboard | Streamlit |
| Charts | Plotly |
| Validation | CMS BSFCC public-use file comparison |
| Deployment | Streamlit Community Cloud |

#### 2.9.4 Architecture

```text
[Streamlit Dashboard on Streamlit Cloud]
    ├── Cohort Selection (3 preconfigured profiles)
    ├── Pre-Generated FHIR Bundles (static JSON in repo)
    ├── Validation Engine (compare vs CMS benchmarks)
    └── Data Passport Renderer (demographics, prevalence, quality scorecard)
```

#### 2.9.5 Cohort Profiles

| Profile | Patients | Age Range | Key Conditions |
|---------|----------|-----------|---------------|
| Oncology Prior Auth | 500 | 40-85 | Lung, breast, colorectal cancer |
| High-Risk Readmission | 300 | 55-90 | CHF, COPD, diabetes |
| Hospital-at-Home | 200 | 50-85 | Pneumonia, CHF, COPD exacerbation, cellulitis |

#### 2.9.6 Features

- 3 preconfigured cohort profiles with pre-generated data
- Data Passport per cohort (demographics, condition prevalence, utilization, CMS benchmark comparison)
- FHIR R4 Bundle output per patient
- Shareable JSON config export for reproducibility
- Data quality scorecard
- Approach A deployment (pre-generated, no live Synthea execution)

---

### P10: Hospital-at-Home Intelligence Layer

**Category:** Clinical Intelligence | **Status:** Deployed | **Phase:** 3

#### 2.10.1 Links

| Type | URL |
|------|-----|
| Live Dashboard | <https://hah-intelligence.streamlit.app> |
| GitHub Repo | <https://github.com/basebattle/hah-intelligence> |
| HC-Portfolio PDP | <https://hc-portfolio-zeta.vercel.app/projects/hah-monitoring> |

#### 2.10.2 Local Filepath

```text
~/Projects/P10-HaH-Intelligence/
```

#### 2.10.3 Tech Stack

| Layer | Technology |
|-------|-----------|
| Dashboard | Streamlit |
| Clinical Engine | NEWS2 scoring (Python) |
| Charts | Plotly |
| Data | Simulated vital signs (20 patients, JSON) |
| Deployment | Streamlit Community Cloud |

#### 2.10.4 Architecture

```text
[Streamlit Dashboard on Streamlit Cloud]
    ├── Data Simulator (20 patients, hourly vitals, random fluctuation)
    ├── NEWS2 Engine (6 physiological parameters → score)
    ├── RAG Classifier (Green 0-4, Amber 5-6, Red 7+)
    ├── Alert Generator (patients with NEWS2 >= 5)
    └── CMS Waiver Compliance Checklist (10 conditions of participation)
```

#### 2.10.5 Patient Distribution

| RAG Status | Count | NEWS2 Range | Clinical Action |
|-----------|-------|-------------|-----------------|
| Green | 12 | 0-4 | Routine monitoring |
| Amber | 5 | 5-6 | Increase monitoring to every 2 hours |
| Red | 3 | 7+ | Immediate clinical review required |

#### 2.10.6 Features

- NEWS2 scoring engine (6 parameters: RR, SpO2, temp, systolic BP, HR, consciousness)
- Patient census dashboard with RAG-status indicators
- 6 vital sign trend charts per patient (24h hourly data)
- Escalation alert queue (patients NEWS2 >= 5, sorted by severity)
- CMS Acute Hospital Care at Home waiver compliance checklist (10 items)
- Simulated vital sign fluctuation on refresh

---

## 3. CROSS-CUTTING REFERENCE

### 3.1 Deployment Platform Map

| Platform | Projects | Cost | Auto-Deploy |
|----------|----------|------|-------------|
| Vercel (free) | HC-Portfolio, P01 frontend, P02 frontend, P06 frontend, P07, P08 frontend | $0 | Yes (on git push) |
| Render (free) | P06 backend, P08 backend | $0 (cold starts after 15min inactivity) | Yes (on git push) |
| Streamlit Community Cloud | P02 legacy, P03, P04, P05, P09, P10 | $0 | Yes (on git push) |

### 3.2 All GitHub Repositories

| # | Repo | URL |
|---|------|-----|
| Portfolio | HC-Portfolio | github.com/basebattle/HC-Portfolio |
| P01 | FHIR-MCP-data-bridge | github.com/basebattle/FHIR-MCP-data-bridge |
| P02 | prior-auth-pipeline | github.com/basebattle/prior-auth-pipeline |
| P03 | revenue-cycle-dashboard | github.com/basebattle/revenue-cycle-dashboard |
| P04 | claims-denial-agent | github.com/basebattle/claims-denial-agent |
| P05 | vbc-analyzer | github.com/basebattle/vbc-analyzer |
| P06 | fhir-llm-gateway | github.com/basebattle/fhir-llm-gateway |
| P07 | haira-assessment | github.com/basebattle/haira-assessment |
| P08 | cds-analytics | github.com/basebattle/cds-analytics |
| P09 | synthea-cohort-generator | github.com/basebattle/synthea-cohort-generator |
| P10 | hah-intelligence | github.com/basebattle/hah-intelligence |

### 3.3 All Local Project Paths

```text
~/Projects/
├── 02_Web_Cloud/
│   ├── prior-auth-pipeline/            # P02
│   └── revenue-cycle-dashboard/        # P03
├── 03_System_Integration_MCP/
│   └── fhir-mcp-bridge/                # P01
├── 12_HC-Portfolio/                    # The portfolio website
├── P04-Claims-Denial-Agent/            # P04
├── P05-VBC-Analyzer/                   # P05
├── P06-FHIR-LLM-Gateway/               # P06
│   ├── backend/
│   └── frontend/
├── P07-HAIRA-Assessment/               # P07
├── P08-CDS-Analytics/                  # P08
│   ├── backend/
│   └── frontend/
├── P09-Synthea-Cohort-Generator/       # P09
└── P10-HaH-Intelligence/               # P10
```

### 3.4 Category → Project Mapping

| Category | Accent Color | Projects |
|----------|-------------|----------|
| Clinical Intelligence | Teal #0D7377 | P01 FHIR-MCP, P02 Prior Auth, P06 FHIR Gateway, P08 CDS Hooks, P09 Synthea, P10 HaH |
| Financial Optimization | Gold #FF8F00 | P03 RCM Dashboard, P04 Claims Denial, P05 VBC Analyzer |
| Strategic Governance | Blue #1565C0 | P07 HAIRA |

### 3.5 External Service Credentials

| Service | Purpose | Where Stored | Projects Using It |
|---------|---------|-------------|-------------------|
| Medplum | Cloud FHIR R4 server | P06 backend/.env (MEDPLUM_CLIENT_ID, MEDPLUM_CLIENT_SECRET) | P06 only |
| Anthropic Claude API | LLM for agent reasoning | Individual project .env files (ANTHROPIC_API_KEY) | P02, P03 (live mode only) |
| Vercel | Frontend hosting | Authenticated via CLI (npx vercel) | HC-Portfolio, P01, P02, P06, P07, P08 |
| Render | Backend hosting | Authenticated via dashboard | P06 backend, P08 backend |
| Streamlit Cloud | Dashboard hosting | Authenticated via GitHub OAuth | P02 legacy, P03, P04, P05, P09, P10 |

### 3.6 Known Issues and Workarounds

| Issue | Affected | Workaround |
|-------|----------|-----------|
| Python 3.14 incompatibility | Render, Streamlit Cloud | Set PYTHON_VERSION=3.12.6 env var (Render) or .python-version file with "3.12" (Streamlit) |
| Render cold starts (50s delay) | P06, P08 backends | Hit /health endpoint 1 min before demo to warm up |
| Synthea Coverage gap | P06 traces | coverage_search.json has 0 entries. CoverageLookup tool handles empty results gracefully |
| Antigravity repo naming | P08 | Named cds-analytics instead of cds-hooks-llm. HC-Portfolio projects.ts uses the actual name |
| npm EPERM on Antigravity sandbox | Next.js projects | Run npm install locally outside the Antigravity sandbox if needed |

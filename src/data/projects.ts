export interface Project {
  idx: string;
  name: string;
  slug: string;
  category: "Clinical Intelligence" | "Financial Optimization" | "Strategic Governance";
  status: "Deployed" | "Blueprint" | "Planned";
  phase: 1 | 2 | 3 | 4;
  oneLiner: string;
  metric: string;
  metricType: "financial" | "enabler" | "strategic";
  problem: string;
  evolution: [string, string];
  stack: string[];
  github: string | null;
  live: string | null;
  simulation?: string | null;
  deepDive?: string | null;
  features?: { name: string; benefit: string; icon?: "zap" | "shield" | "cpu" | "check" }[];
  kpis: string[];
  veteran: string;
  // NEW FIELDS FOR RESTRUCTURE:
  heroNumber: string;
  heroUnit: string;
  descriptor: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    idx: "01",
    name: "FHIR-MCP Clinical OS",
    slug: "fhir-mcp-bridge",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 1,
    oneLiner: "Full Clinical Intelligence Simulator — the first MCP-native healthcare data bridge with Agentic Reasoning Visualization and a High-Fidelity spatial-glassmorphism EHR UI.",
    metric: "Eliminates bespoke EHR integration engineering",
    metricType: "enabler",
    problem: "Every AI vendor trying to access clinical data faces the same wall: hundreds of proprietary FHIR API endpoints, each EHR system requiring custom integration code, and months of development before an agent can read a single patient record.",
    evolution: [
      "Standard, highly coupled API calls requiring custom integrations for every specific EHR and health system.",
      "Architected the first MCP-native healthcare data bridge with Agentic Reasoning Visualization — a live, node-based Reasoning Graph that maps LLM decisions tracking FHIR standards. Pydantic v2 strict-mode type safety and real-time terminology resolution across ICD-10, SNOMED CT, RxNorm, and LOINC."
    ],
    stack: ["Python 3.12+", "FastMCP", "Next.js", "Tailwind CSS", "Framer Motion", "HL7 FHIR R4", "Pydantic v2", "lucide-react"],
    github: "basebattle/FHIR-MCP-data-bridge",
    live: "https://v3-ehr-simulator.vercel.app/",
    simulation: "https://v3-ehr-simulator.vercel.app/simulator",
    deepDive: "https://github.com/basebattle/FHIR-MCP-data-bridge",
    features: [
      { name: "Agentic Reasoning Graph", benefit: "Live, node-based Reasoning Graph maps LLM decisions step-by-step against FHIR standards — full auditability.", icon: "cpu" },
      { name: "High-Fidelity Clinical UI", benefit: "Spatial-glassmorphism design with 21st.dev Magic UI: MagicCard hover spotlights, NumberTicker live stat rolling, BorderBeam pulsing alarms, AnimatedList event timelines.", icon: "zap" },
      { name: "Pydantic v2 Type Safety", benefit: "Enforces strict-mode validation at execution, removing runtime crashes when schemas evolve.", icon: "shield" }
    ],
    kpis: ["Data exchange latency reduced to sub-second", "Multi-vocabulary terminology resolution across 4 code systems", "Zero custom integration code per downstream agent"],
    veteran: "References TEFCA cross-network interoperability framework. Addresses the Azure API for FHIR retirement (September 2026) by demonstrating the migration-ready architecture pattern.",
    heroNumber: "4",
    heroUnit: "MCP TOOLS",
    descriptor: "Clinical Intelligence Simulator · Agentic Reasoning Graph · Glassmorphism EHR UI",
    bullets: [
      "4 MCP tools replace hundreds of raw FHIR API endpoints",
      "Live Reasoning Graph — node-based LLM decision trace per FHIR standard",
      "Interactive Micro-Interactions: MagicCard · NumberTicker · BorderBeam · AnimatedList",
      "Framer Motion + Tailwind spatial-glassmorphism — backdrop-filter: blur(24px)"
    ],
  },
  {
    idx: "02",
    name: "Prior Authorization Pipeline",
    slug: "prior-auth",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 4,
    oneLiner: "Multi-agent orchestration engine that predicts and preempts claim denials before submission, cutting authorization cycles from 14 days to 3.",
    metric: "$1.2M/yr projected impact",
    metricType: "financial",
    problem: "Prior authorization costs the US healthcare system $35 billion annually. 14 hours per physician per week. 85% of initial denials eventually overturned on appeal, meaning the denial was wrong but the delay was real.",
    evolution: [
      "Reactive manual chart reviews. Clinicians spending 45+ minutes per request assembling documentation that payers would reject for a single missing code.",
      "LangGraph-based multi-agent orchestration deploying 6 specialized AI nodes: probabilistic denial risk assessment, CMS NPPES provider credentialing, LCD/NCD guideline cross-referencing, and automated clinical evidence assembly from FHIR data."
    ],
    stack: ["Python 3.12+", "LangGraph", "Claude API", "Next.js 14", "React 18", "Tailwind CSS v3"],
    github: "basebattle/prior-auth-pipeline",
    live: "https://prior-auth-pipeline.vercel.app",
    features: [
      { name: "LangGraph Orchestration", benefit: "Manages state reliably across multi-phase async clinical tasks without drifting or deadlocking.", icon: "cpu" },
      { name: "Predictive Denial Risk Engine", benefit: "Intercepts and scores flags before submission, acting as an automated compliance governor.", icon: "shield" }
    ],
    kpis: ["Auth cycle time: 14 days to 3 days", "Denial rate: 12% to 5% (58% improvement)", "Clinical staff time per request: 45 min to under 5 min"],
    veteran: "References CMS NPPES provider validation, LCD/NCD clinical coverage determination, and payer-specific medical necessity criteria. Directly extends Optum Member Forms Agentic AI work.",
    heroNumber: "6",
    heroUnit: "AGENT NODES",
    descriptor: "LangGraph DAG automating 45-min clinical workflows",
    bullets: [
      "6-node DAG: Intake → Clinical Review → NPPES → Denial Risk → FHIR Bundle → Decision Synthesis",
      "Probabilistic denial risk scored before submission",
      "CMS NPPES provider credentialing as a dedicated agent node",
      "Dual deployment: Streamlit legacy + Next.js/FastAPI v2",
      "Validated: UI approval lifecycle for PAT-8829-X (12% risk)"
    ],
  },
  {
    idx: "03",
    name: "Revenue Cycle Dashboard",
    slug: "rcm-dashboard",
    category: "Financial Optimization",
    status: "Deployed",
    phase: 1,
    oneLiner: "AI-powered revenue cycle intelligence that turns 6 hours of CFO reporting into 30 seconds of automated analysis.",
    metric: "$1.6M/yr projected impact",
    metricType: "financial",
    problem: "Hospital CFOs make decisions on stale data. Monthly revenue reports take days to compile, arrive weeks late, and miss anomalies that compound into millions in lost revenue.",
    evolution: [
      "Manual Excel-based reporting with monthly lag, no anomaly detection, no ability for non-technical staff to interrogate financial data.",
      "AI analytics agent on LangGraph calculating 12 HFMA-benchmarked revenue cycle KPIs in real time. Automated anomaly detection. Natural language query interface for non-technical executives."
    ],
    stack: ["Python", "Streamlit", "LangGraph", "Claude API", "Pandas", "Plotly", "SQLite"],
    github: "basebattle/revenue-cycle-dashboard",
    live: "https://payvider-dashboard.streamlit.app",
    kpis: ["Days in A/R: 45 to 28 (38% improvement)", "Clean Claim Rate: 78% to 94%", "Admin cost as % revenue: 28% to 18%"],
    veteran: "Every KPI formula uses HFMA benchmark methodology. The NL query layer answers questions like 'Why did our denial rate spike in cardiology last quarter?' with data-backed explanations.",
    heroNumber: "12",
    heroUnit: "HFMA KPIS",
    descriptor: "AI-powered revenue cycle intelligence platform",
    bullets: [
      "12 HFMA-benchmarked KPIs calculated in real time",
      "6-node LangGraph: NL query → anomaly detect → PPT/Excel export",
      "LangSmith observability for end-to-end agent tracing",
      "Flags revenue leakage before it impacts cash flow"
    ],
  },
  {
    idx: "04",
    name: "Claims Denial Workflow Agent",
    slug: "claims-denial",
    category: "Financial Optimization",
    status: "Deployed",
    phase: 2,
    oneLiner: "Multi-agent denial prevention system mapping root causes before claims are submitted, targeting the $260 billion annual US denial problem.",
    metric: "$0.8M/yr projected savings (20% prevention rate)",
    metricType: "financial",
    problem: "Claims denials cost US health systems over $260 billion annually. The industry response is reactive: staff work denial queues after the fact for denials that should never have happened.",
    evolution: [
      "Reactive denial work queues with no root-cause taxonomy, no prevention scoring, and no cross-platform orchestration.",
      "Multi-agent LangGraph system integrating Gmail, Drive, Sheets, and Slack via MCP. CARC/RARC denial taxonomy engine mapping top 50 codes to structured root-cause hierarchy. Prevention Score predicting highest-risk pending claims."
    ],
    stack: ["Python", "LangGraph", "FastAPI", "MCP", "Streamlit"],
    github: "https://github.com/basebattle/claims-denial-agent",
    live: "https://claims-denial-agent.streamlit.app",
    kpis: ["Denial rate reduction from 12% to 9.6%", "CARC/RARC root-cause mapping: top 50 codes", "Rework cost avoidance and write-off reduction"],
    veteran: "References X12 835 remittance advice parsing, CARC/RARC denial taxonomy, and Change Healthcare Revenue Cycle Denials Index for baseline benchmarking.",
    heroNumber: "5K",
    heroUnit: "CLAIMS",
    descriptor: "CARC/RARC denial analytics with Prevention Scorer",
    bullets: [
      "50 CARC/RARC codes mapped to 4 root-cause categories",
      "5,000 synthetic claims at 12% denial rate baseline",
      "Prevention Scorer ranks pending claims pre-submission",
      "ROI model: 10 / 20 / 30% prevention scenario calculators"
    ],
  },
  {
    idx: "05",
    name: "VBC Reimbursement Analyzer",
    slug: "vbc-analyzer",
    category: "Financial Optimization",
    status: "Deployed",
    phase: 2,
    oneLiner: "Oncology-focused value-based care simulator modeling episode-level costs against CMS reimbursement tiers.",
    metric: "CMS Oncology Care Model financial impact modeling",
    metricType: "strategic",
    problem: "Health systems transitioning to value-based care cannot model financial impact because claims analytics are siloed and disconnected from CMS reimbursement logic. The 2026 Oncology Care Model changes make this a direct revenue risk.",
    evolution: [
      "Siloed claims data with no episode-level TCOC calculation or performance-based payment modeling.",
      "Fork of Tuva Project (Apache 2.0) with CMS Oncology Care Model mapping, episode-level TCOC, outlier flagging by provider and payer mix, and scenario sliders for risk-adjustment sensitivity."
    ],
    stack: ["dbt", "DuckDB", "Tuva Project", "Streamlit", "Python"],
    github: "https://github.com/basebattle/vbc-analyzer",
    live: "https://vbc-analyzer.streamlit.app",
    kpis: ["Episode-level TCOC calculation", "Performance-based payment adjustment modeling", "Risk-adjustment sensitivity across CMS-HCC V28"],
    veteran: "References episode-level TCOC analysis, CMS-HCC V28 risk-adjustment recalibration, and HFMA oncology episode cost benchmarks.",
    heroNumber: "$0",
    heroUnit: "INFRA COST",
    descriptor: "Episode TCOC and CMS-HCC V28 risk-adjusted modeling",
    bullets: [
      "Tuva Project (Apache 2.0) dbt pipeline — open-source standard",
      "DuckDB file-based engine: zero cloud database, zero cost",
      "Episode-level Total Cost of Care for oncology service lines",
      "CMS-HCC V28 risk-adjustment sliders for VBC scenario modeling"
    ],
  },
  {
    idx: "06",
    name: "FHIR-to-LLM Clinical Data Gateway",
    slug: "fhir-llm-gateway",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "Enterprise-grade upgrade of the FHIR-MCP Bridge, backed by Microsoft FHIR Server and Bulk Data Access 2.0.",
    metric: "Enterprise interoperability proof point for CTO personas",
    metricType: "strategic",
    problem: "The FHIR-MCP Bridge proves the concept but CTOs need to see it against an enterprise FHIR server with SMART on FHIR OAuth and Bulk Data Access to evaluate it seriously.",
    evolution: [
      "Project 01 demonstrates MCP-to-FHIR with a lightweight backend, sufficient for POC but not enterprise evaluation.",
      "Microsoft FHIR Server (Bulk Data Access 2.0, March 2026) as backend. Synthea patient bundles. API playground showing MCP tool invocations alongside FHIR responses and agent reasoning traces."
    ],
    stack: ["Microsoft FHIR Server", "FastMCP", "Synthea", "Next.js", "FastAPI", "Python"],
    github: "https://github.com/basebattle/fhir-llm-gateway",
    live: "https://fhir-llm-gateway.vercel.app",
    kpis: ["Enterprise FHIR backend latency", "Bulk Data Access 2.0 throughput", "SMART on FHIR auth compliance"],
    veteran: "References Azure API for FHIR retirement (September 2026) and migration to Azure Health Data Services. Cites TEFCA for cross-network interoperability.",
    heroNumber: "3",
    heroUnit: "FHIR MODES",
    descriptor: "Tri-mode FHIR client with Medplum Cloud integration",
    bullets: [
      "Static / Cloud / Local modes — one codebase, zero config change",
      "Medplum OAuth2 client_credentials, 13 Synthea patient bundles",
      "4-panel API Playground: Tool / Request / Response / Trace",
      "Full reasoning audit trail with timestamps per tool call"
    ],
  },
  {
    idx: "07",
    name: "HAIRA Governance Assessment Tool",
    slug: "haira",
    category: "Strategic Governance",
    status: "Deployed",
    phase: 4,
    oneLiner: "First operational implementation of the peer-reviewed HAIRA maturity model for healthcare AI governance readiness.",
    metric: "Governance maturity scoring across 7 clinical AI domains",
    metricType: "strategic",
    problem: "Healthcare organizations deploying AI have no actionable way to assess governance readiness. The HAIRA model (npj Digital Medicine, February 2026) synthesizes 35 frameworks into five maturity levels across seven domains but remains a paper exercise.",
    evolution: [
      "Static PDF governance checklists with no scoring, benchmarking, or prioritized recommendations.",
      "Web assessment tool across seven HAIRA domains with scored questionnaire items, radar chart governance profiles, recommendations engine, and anonymized benchmarking layer."
    ],
    stack: ["Next.js", "Supabase", "Recharts", "Tailwind CSS"],
    github: "basebattle/haira-assessment",
    live: "https://haira-assessment.vercel.app",
    kpis: ["Governance maturity score across 7 domains", "Benchmarking percentile vs. aggregate orgs", "Prioritized action items with effort/impact"],
    veteran: "Operationalizes Hussein et al. 2026. References ONC HTI-2 algorithmic transparency, NIST AI RMF Govern function, and pre-deployment clinical validation protocols.",
    heroNumber: "35",
    heroUnit: "QUESTIONS",
    descriptor: "First digital HAIRA governance framework — npj 2026",
    bullets: [
      "35 questions across 7 AI governance domains",
      "5-level maturity scoring: Initial through Leading",
      "7-axis RadarChart vs synthetic industry benchmarks",
      "No backend required — fully serverless, zero-cost Vercel deploy",
      "Based on Hussein et al. 2026, npj Digital Medicine"
    ],
  },
  {
    idx: "08",
    name: "CDS Hooks + LLM Reasoning Engine",
    slug: "cds-hooks",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "LLM-augmented clinical decision support embedding transparent AI reasoning directly into EHR workflows via HL7 CDS Hooks.",
    metric: "Algorithmic transparency for ONC HTI-2 compliance",
    metricType: "strategic",
    problem: "CDS Hooks implementations are rule-based and brittle, generating so many false positives that clinicians develop alert fatigue and dismiss everything. Nobody has demonstrated LLM-augmented CDS with transparent reasoning.",
    evolution: [
      "Rule-based CDS with high false-positive rates, no NL explanations, no algorithmic audit trail.",
      "Hybrid CDS responding to order-sign hook: rule-based logic augmented with LLM reasoning generating natural-language clinical rationales. AI reasoning trace panel for ONC HTI-2 auditability."
    ],
    stack: ["CDS Hooks v2.0.1", "cqf-ruler", "Claude API", "FHIR R4", "Next.js"],
    github: "https://github.com/basebattle/cds-analytics",
    live: "https://cds-analytics-app.vercel.app",
    kpis: ["CDS alert specificity improvement", "False-positive rate reduction", "Clinician recommendation acceptance rate"],
    veteran: "References CDS Hooks order-sign workflow, SMART on FHIR prefetch, CQL rule authoring, and HL7 Normative/Trial-Use ballot. Frames LLM augmentation as Clinical Reasoning Amplification.",
    heroNumber: "0.94",
    heroUnit: "CONFIDENCE",
    descriptor: "CDS Hooks v2.0.1 compliant LLM reasoning service",
    bullets: [
      "20 drug-drug interactions + 15 contraindications in rule engine",
      "Custom ai_reasoning_trace extension — full CDS audit trail",
      "Side-by-side: Traditional rule-based vs LLM-augmented CDS",
      "Demo: Opioid+Benzo critical alert, NSAID+Renal high severity"
    ],
  },
  {
    idx: "09",
    name: "Synthetic Patient Cohort Generator",
    slug: "synthea-cohorts",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 2,
    oneLiner: "Purpose-built synthetic patient cohorts validated against CMS public-use files, powering every AI validation scenario in the portfolio.",
    metric: "AI validation data infrastructure for the entire portfolio",
    metricType: "enabler",
    problem: "Every healthcare AI project needs test data. Real patient data requires IRB approval and months of procurement. Synthea generates generic populations but not purpose-built cohorts validated against real-world prevalence.",
    evolution: [
      "Generic synthetic patient generation with no cohort-level statistical validation.",
      "Streamlit control panel with preconfigured cohort profiles (Oncology, High-Risk Readmission, Hospital-at-Home). Validation against CMS public-use files. Data Passport pages for compliance review."
    ],
    stack: ["Synthea", "Python", "Streamlit", "Supabase", "CMS BSFCC"],
    github: "https://github.com/basebattle/synthea-cohort-generator",
    live: "https://synthea-cohort-generator.streamlit.app",
    kpis: ["Cohort statistical fidelity vs. CMS benchmarks", "Reproducibility via shareable JSON configs", "Data quality scorecard per cohort"],
    veteran: "References synthetic data validation against CMS public-use files, FHIR R4 Bundle transaction semantics, and IRB-exempt synthetic data pathways.",
    heroNumber: "1K",
    heroUnit: "FHIR PATIENTS",
    descriptor: "3 preconfigured FHIR R4 cohorts, CMS-validated",
    bullets: [
      "Oncology (500), High-Risk Readmission (300), HaH (200)",
      "FHIR R4 Bundle output per patient — feeds P01, P02, P06",
      "CMS BSFCC benchmark comparison validates clinical realism",
      "Data Passport: demographics, prevalence, utilisation scorecard"
    ],
  },
  {
    idx: "10",
    name: "Hospital-at-Home Intelligence Layer",
    slug: "hah-monitoring",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "Clinical Command Center for distributed care, applying NEWS2 risk scoring to remote patient monitoring data in real time across 9 diagnoses and 20 live patients.",
    metric: "CMS waiver compliance coverage for Hospital-at-Home programs",
    metricType: "strategic",
    problem: "CMS Hospital-at-Home waivers are expanding but health systems lack the clinical intelligence layer on top of RPM device data. Vital signs flow in but there is no automated triage, risk scoring, or escalation logic.",
    evolution: [
      "Raw device data without clinical risk interpretation or automated escalation.",
      "Python ingestion transforming RPM data into FHIR Observations. NEWS2 risk scoring (7 vitals → Red/Amber/Green RAG) with real-time escalation alerts. AI Analysis Engine synthesising NEWS2 scores with clinical notes. Every feature mapped to the 10 CMS AHCaH conditions of participation (42 CFR §412.65)."
    ],
    stack: ["Python 3.12", "Streamlit", "Plotly", "Pandas", "NEWS2 Engine", "RAG Classifier", "FHIR R4"],
    github: "https://github.com/basebattle/hah-intelligence",
    live: "https://hah-intelligence.streamlit.app",
    deepDive: "https://github.com/basebattle/hah-intelligence#readme",
    kpis: ["NEWS2 escalation accuracy across 7 vitals", "Time-to-clinician-alert on RAG status change", "10 CMS AHCaH conditions of participation tracked"],
    veteran: "References CMS Acute Hospital Care at Home waiver conditions (42 CFR §412.65), NEWS2 clinical deterioration scoring, FHIR Observation vital-signs profile, and IEEE 11073 RPM interoperability. Covers 9 diagnoses: CHF, COPD, Pneumonia, Cellulitis, Sepsis, UTI, DKA, CKD, and Post-Surgical.",
    heroNumber: "20",
    heroUnit: "PATIENTS LIVE",
    descriptor: "NEWS2 + RAG risk engine · CMS AHCaH waiver · FHIR Observations",
    bullets: [
      "NEWS2 scoring: 7 vitals → automated Red/Amber/Green RAG triage",
      "20-patient census: 12 Green · 5 Amber · 3 Red — real-time refresh",
      "AI Analysis Engine: RAG classifier synthesises NEWS2 + clinical notes",
      "CMS AHCaH waiver: 10 conditions of participation tracked (42 CFR §412.65)",
      "9 diagnoses: CHF · COPD · Pneumonia · Sepsis · DKA · CKD + more"
    ],
  }
];

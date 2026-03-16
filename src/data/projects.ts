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
  kpis: string[];
  veteran: string;
}

export const projects: Project[] = [
  {
    idx: "01",
    name: "FHIR-MCP Bridge",
    slug: "fhir-mcp-bridge",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 1,
    oneLiner: "The first MCP-native healthcare data bridge, turning 200+ FHIR API endpoints into a single AI-callable interface.",
    metric: "Eliminates bespoke EHR integration engineering",
    metricType: "enabler",
    problem: "Every AI vendor trying to access clinical data faces the same wall: hundreds of proprietary FHIR API endpoints, each EHR system requiring custom integration code, and months of development before an agent can read a single patient record.",
    evolution: [
      "Standard, highly coupled API calls requiring custom integrations for every specific EHR and health system.",
      "Architected the first MCP-native healthcare data bridge, abstracting HL7 FHIR R4 operations into semantically meaningful clinical tools with Pydantic v2 strict-mode type safety and real-time terminology resolution across ICD-10, SNOMED CT, RxNorm, and LOINC."
    ],
    stack: ["Python 3.12+", "FastMCP", "HTTPX", "HL7 FHIR R4", "Pydantic v2", "Uvicorn"],
    github: "basebattle/FHIR-MCP-data-bridge",
    live: "https://v3-ehr-simulator.vercel.app",
    kpis: ["Data exchange latency reduced to sub-second", "Multi-vocabulary terminology resolution across 4 code systems", "Zero custom integration code per downstream agent"],
    veteran: "References TEFCA cross-network interoperability framework. Addresses the Azure API for FHIR retirement (September 2026) by demonstrating the migration-ready architecture pattern."
  },
  {
    idx: "02",
    name: "Prior Authorization Pipeline",
    slug: "prior-auth",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 1,
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
    kpis: ["Auth cycle time: 14 days to 3 days", "Denial rate: 12% to 5% (58% improvement)", "Clinical staff time per request: 45 min to under 5 min"],
    veteran: "References CMS NPPES provider validation, LCD/NCD clinical coverage determination, and payer-specific medical necessity criteria. Directly extends Optum Member Forms Agentic AI work."
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
    veteran: "Every KPI formula uses HFMA benchmark methodology. The NL query layer answers questions like 'Why did our denial rate spike in cardiology last quarter?' with data-backed explanations."
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
    veteran: "References X12 835 remittance advice parsing, CARC/RARC denial taxonomy, and Change Healthcare Revenue Cycle Denials Index for baseline benchmarking."
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
    veteran: "References episode-level TCOC analysis, CMS-HCC V28 risk-adjustment recalibration, and HFMA oncology episode cost benchmarks."
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
    veteran: "References Azure API for FHIR retirement (September 2026) and migration to Azure Health Data Services. Cites TEFCA for cross-network interoperability."
  },
  {
    idx: "07",
    name: "HAIRA Governance Assessment Tool",
    slug: "haira",
    category: "Strategic Governance",
    status: "Planned",
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
    github: null,
    live: null,
    kpis: ["Governance maturity score across 7 domains", "Benchmarking percentile vs. aggregate orgs", "Prioritized action items with effort/impact"],
    veteran: "Operationalizes Hussein et al. 2026. References ONC HTI-2 algorithmic transparency, NIST AI RMF Govern function, and pre-deployment clinical validation protocols."
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
    veteran: "References CDS Hooks order-sign workflow, SMART on FHIR prefetch, CQL rule authoring, and HL7 Normative/Trial-Use ballot. Frames LLM augmentation as Clinical Reasoning Amplification."
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
    veteran: "References synthetic data validation against CMS public-use files, FHIR R4 Bundle transaction semantics, and IRB-exempt synthetic data pathways."
  },
  {
    idx: "10",
    name: "Hospital-at-Home Intelligence Layer",
    slug: "hah-monitoring",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "Clinical Command Center for distributed care, applying NEWS2 risk scoring to remote patient monitoring data in real time.",
    metric: "CMS waiver compliance coverage for Hospital-at-Home programs",
    metricType: "strategic",
    problem: "CMS Hospital-at-Home waivers are expanding but health systems lack the clinical intelligence layer on top of RPM device data. Vital signs flow in but there is no automated triage, risk scoring, or escalation logic.",
    evolution: [
      "Raw device data without clinical risk interpretation or automated escalation.",
      "Python ingestion transforming RPM data into FHIR Observations. NEWS2 risk scoring with real-time escalation alerts. Clinician dashboard with RAG-status indicators and trending vitals. Every feature mapped to CMS waiver compliance."
    ],
    stack: ["Next.js", "Python", "IoMT FHIR patterns", "FHIR Observation"],
    github: "https://github.com/basebattle/hah-intelligence",
    live: "https://hah-intelligence.streamlit.app",
    kpis: ["NEWS2 escalation accuracy", "Time-to-clinician-alert", "CMS waiver compliance coverage"],
    veteran: "References CMS Acute Hospital Care at Home waiver conditions, NEWS2 clinical deterioration scoring, FHIR Observation vital-signs profile, and IEEE 11073 RPM interoperability."
  }
];

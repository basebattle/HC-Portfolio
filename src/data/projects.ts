export interface Project {
  idx: string;
  name: string;
  slug: string;
  category: "Clinical Intelligence" | "Financial Optimization" | "Strategic Governance";
  status: "Deployed" | "Blueprint" | "Planned" | "WIP";
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
  heroNumber: string;
  heroUnit: string;
  descriptor: string;
  bullets: string[];
  context?: string;
  approach?: string;
  outcome?: string;
  role?: string;
  visual?: string;
}

export const projects: Project[] = [
  {
    idx: "Project 01",
    name: "Agentic FHIR-MCP Bridge",
    slug: "fhir-mcp-bridge",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 1,
    oneLiner: "MCP-native healthcare data bridge with Agentic Reasoning Visualization and a High-Fidelity glassmorphism EHR UI.",
    metric: "Sub-second integration latency",
    metricType: "enabler",
    problem: "Proprietary EHR silos require custom code for every AI agent, creating a 'connectivity wall' that delays clinical AI deployment by months.",
    evolution: [
      "Brittle, highly-coupled API calls requiring manual mapping for every clinical data access request.",
      "Built a node-based Reasoning Graph that maps LLM decisions step-by-step against HL7 FHIR standards using Pydantic v2 strict-mode type safety."
    ],
    stack: ["Python", "FastMCP", "Next.js", "Tailwind", "Framer Motion", "Pydantic v2"],
    github: "https://github.com/basebattle/FHIR-MCP-data-bridge",
    live: "https://v3-ehr-simulator.vercel.app/",
    simulation: "https://v3-ehr-simulator.vercel.app/simulator",
    features: [
      { name: "Reasoning Graph", benefit: "Live node-trace of AI logic against FHIR standards.", icon: "cpu" },
      { name: "Spatial UI", benefit: "Premium glassmorphism EHR interface for clinical review.", icon: "zap" }
    ],
    kpis: ["99% reduction in custom integration code", "Sub-second terminology resolution", "100% decision auditability"],
    veteran: "Directly addresses the Azure API for FHIR retirement by providing a reasoning-access alternative.",
    heroNumber: "4",
    heroUnit: "MCP TOOLS",
    descriptor: "Clinical Intelligence Simulator · Agentic Reasoning Graph",
    bullets: [
      "4 MCP tools replace hundreds of FHIR API endpoints",
      "Live Reasoning Graph for clinical decision audit trails",
      "High-fidelity spatial-glassmorphism design language"
    ],
    context: "Interoperating with clinical systems traditionally requires hundreds of bespoke API integrations.",
    approach: "Built the first MCP-native healthcare data bridge that uses agentic reasoning to map decisions.",
    outcome: "Ensured 100% auditability via the visible Reasoning Graph.",
    role: "Lead Architect.",
    visual: "/images/clinical-mcp.png",
  },
  {
    idx: "Project 02",
    name: "Prior Authorization Pipeline",
    slug: "prior-auth",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 4,
    oneLiner: "Multi-agent orchestration engine that predicts and preempts claim denials before submission.",
    metric: "Reduced cycle from 14 to 3 days",
    metricType: "financial",
    problem: "Prior authorization costs the US system $35B annually, with 85% of initial denials eventually overturned on appeal.",
    evolution: [
      "Manual chart review assembly process taking 45+ minutes per clinical request.",
      "LangGraph-based multi-agent orchestration evaluating guidelines, provider credentials, and evidence assembly autonomously."
    ],
    stack: ["Python", "LangGraph", "Claude API", "Next.js", "FastAPI"],
    github: "https://github.com/basebattle/prior-auth-pipeline",
    live: "https://prior-auth-pipeline.vercel.app",
    features: [
      { name: "LangGraph DAG", benefit: "Robust clinical state management across async tasks.", icon: "cpu" },
      { name: "Compliance Governor", benefit: "Intercepts and scores flags before submission.", icon: "shield" }
    ],
    kpis: ["Auth cycle: 14 days to 3 days", "Denial rate: 12% to 5%", "Staff time: 45 min to < 5 min"],
    veteran: "Directly extends Optum Member Forms Agentic AI implementations.",
    heroNumber: "6",
    heroUnit: "AGENT NODES",
    descriptor: "LangGraph DAG automating 45-min clinical workflows",
    bullets: [
      "6-node execution DAG: Intake → Review → Decision Synthesis",
      "Probabilistic denial risk scored before final submission",
      "CMS NPPES provider validation as a dedicated agent node"
    ],
    context: "Prior authorization delays care and consumes 14+ hours of physician time weekly.",
    approach: "Designed a 6-node LangGraph DAG that automates clinical evidence assembly.",
    outcome: "Reduced authorization cycles by 78% and clinical manual effort by 85%.",
    role: "Principal Developer.",
  },
  {
    idx: "Project 03",
    name: "Revenue Cycle Dashboard",
    slug: "hcls-revenue-cycle",
    category: "Financial Optimization",
    status: "Deployed",
    phase: 2,
    oneLiner: "Predictive dashboard mapping revenue leakage via agentic auditing nodes.",
    metric: "12% leakage reduction",
    metricType: "financial",
    problem: "Revenue leakage is often invisible until monthly reports, which are arrival weeks late for any real-time correction.",
    evolution: [
      "Static monthly Excel reports with no anomaly detection capabilities.",
      "Multi-agent auditing nodes that flag transactional outliers in real-time based on HFMA benchmarks."
    ],
    stack: ["Python", "Streamlit", "LangGraph", "Claude API", "Pandas"],
    github: "https://github.com/basebattle/revenue-cycle-dashboard",
    live: "https://payvider-dashboard.streamlit.app",
    kpis: ["Days in A/R: 45 to 28", "Clean Claim Rate: 78% to 94%", "Admin cost: 28% to 18%"],
    veteran: "Every KPI uses HFMA-benchmarked calculation methodology.",
    heroNumber: "12",
    heroUnit: "HFMA KPIS",
    descriptor: "AI-powered revenue cycle intelligence platform",
    bullets: [
      "12 HFMA-benchmarked KPIs calculated in real time",
      "Anomaly detection flags revenue leakage near-instantly",
      "LangGraph-based natural language query interface"
    ],
    context: "Hospital CFOs rely on stale reports that miss transaction-level leakage patterns.",
    approach: "Developed auditing agents that monitor transactional volume against historical denial patterns.",
    outcome: "Turned hours of manual reporting into seconds of automated analysis.",
    role: "Full-stack Developer.",
    visual: "/images/revcycle-arch.png",
  },
  {
    idx: "Project 04",
    name: "Claims Denial Workflow Agent",
    slug: "claims-denial",
    category: "Financial Optimization",
    status: "Deployed",
    phase: 2,
    oneLiner: "Multi-agent denial prevention system mapping root causes before claims are submitted.",
    metric: "$0.8M/yr projected savings",
    metricType: "financial",
    problem: "Claims denials cost US health systems over $260 billion annually, mostly due to reactive manual handling.",
    evolution: [
      "Reactive denial work queues with no root-cause taxonomy or prevention scoring.",
      "Multi-agent LangGraph system integrating Gmail, Drive, Sheets, and Slack via MCP for structured root-cause hierarchy."
    ],
    stack: ["Python", "LangGraph", "FastAPI", "MCP", "Streamlit"],
    github: "https://github.com/basebattle/claims-denial-agent",
    live: "https://claims-denial-agent.streamlit.app",
    kpis: ["Denial rate: 12% to 9.6%", "CARC/RARC root-cause mapping", "Rework cost avoidance"],
    veteran: "References X12 835 remittance advice parsing and CARC/RARC denial taxonomy.",
    heroNumber: "5K",
    heroUnit: "CLAIMS",
    descriptor: "CARC/RARC denial analytics with Prevention Scorer",
    bullets: [
      "50 CARC/RARC codes mapped to 4 root-cause categories",
      "Prevention Scorer ranks pending claims pre-submission",
      "ROI model: 10/20/30% prevention scenario calculators"
    ],
    context: "Health systems lose billions to underpaid claims due to lack of pre-submission risk scoring.",
    approach: "Architected a LangGraph system with specialized nodes for CARC/RARC taxonomy mapping.",
    outcome: "Identified $0.8M in annual preventable revenue leakage.",
    role: "Architect & Lead Developer.",
    visual: "/images/governance-framework.png",
  },
  {
    idx: "Project 05",
    name: "VBC Reimbursement Analyzer",
    slug: "vbc-analyzer",
    category: "Financial Optimization",
    status: "Deployed",
    phase: 2,
    oneLiner: "Oncology-focused value-based care simulator modeling episode-level costs.",
    metric: "CMS Oncology Care Model impact modeling",
    metricType: "strategic",
    problem: "Health systems cannot model the financial impact of transitioning to value-based care due to siloed data.",
    evolution: [
      "Siloed claims data with no episode-level TCOC calculation.",
      "Fork of Tuva Project (Apache 2.0) with CMS OCM mapping and episode-level TCOC."
    ],
    stack: ["dbt", "DuckDB", "Tuva Project", "Streamlit", "Python"],
    github: "https://github.com/basebattle/vbc-analyzer",
    live: "https://vbc-analyzer.streamlit.app",
    kpis: ["Episode-level TCOC calculation", "Risk-adjustment sensitivity (CMS-HCC V28)"],
    veteran: "References CMS-HCC V28 risk-adjustment recalibration methodology.",
    heroNumber: "$0",
    heroUnit: "INFRA COST",
    descriptor: "Episode TCOC and CMS-HCC V28 risk-adjusted modeling",
    bullets: [
      "Tuva Project (Apache 2.0) dbt pipeline",
      "DuckDB file-based engine: zero cloud database cost",
      "CMS-HCC V28 risk-adjustment sliders for scenario modeling"
    ],
    context: "Health systems lack tools to model OCM 2026 reimbursement changes.",
    approach: "Deployed a DuckDB+dbt pipeline to model episode-level costs with real-time risk sliders.",
    outcome: "Created zero-cost infrastructure for high-fidelity VBC scenario modeling.",
    role: "Solution Architect.",
    visual: "/images/vbc-strategy.png",
  },
  {
    idx: "Project 06",
    name: "FHIR-to-LLM Clinical Data Gateway",
    slug: "fhir-llm-gateway",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "Enterprise-grade FHIR gateway backed by Microsoft FHIR Server.",
    metric: "Enterprise interoperability proof point",
    metricType: "strategic",
    problem: "CTOs need to see LLM agents working against enterprise FHIR servers with SMART on FHIR OAuth.",
    evolution: [
      "POC bridge with lightweight backend.",
      "Microsoft FHIR Server integration with Bulk Data Access 2.0 and Synthea patient bundles."
    ],
    stack: ["Microsoft FHIR Server", "FastMCP", "Synthea", "Next.js", "FastAPI"],
    github: "https://github.com/basebattle/fhir-llm-gateway",
    live: "https://fhir-llm-gateway.vercel.app",
    kpis: ["Enterprise FHIR backend latency", "SMART on FHIR auth compliance"],
    veteran: "References Azure API for FHIR retirement (September 2026) and migration to Azure Health Data Services.",
    heroNumber: "3",
    heroUnit: "FHIR MODES",
    descriptor: "Tri-mode FHIR client with Medplum Cloud integration",
    bullets: [
      "Static / Cloud / Local modes — one codebase",
      "Medplum OAuth2 client_credentials integration",
      "4-panel API Playground: Tool / Request / Response / Trace"
    ],
    context: "Enterprises require robust OAuth2 and bulk data for clinical AI validation.",
    approach: "Upgraded the P01 bridge with Tri-mode client support and real-time reasoning traces.",
    outcome: "Demonstrated 100% interoperability with enterprise FHIR standards.",
    role: "Backend Architect.",
    visual: "/images/clinical-mcp.png",
  },
  {
    idx: "Project 07",
    name: "HAIRA Governance Assessment Tool",
    slug: "haira",
    category: "Strategic Governance",
    status: "Deployed",
    phase: 4,
    oneLiner: "Implementation of the Hussein et al. HAIRA maturity model for AI governance.",
    metric: "Governance maturity scoring",
    metricType: "strategic",
    problem: "Healthcare orgs lack actionable ways to assess governance readiness for clinical AI deployment.",
    evolution: [
      "Static PDF governance checklists with no objective scoring.",
      "Web assessment tool across seven HAIRA domains with radar-chart profiles and recommendations."
    ],
    stack: ["Next.js", "Supabase", "Recharts", "Tailwind CSS"],
    github: "https://github.com/basebattle/haira-assessment",
    live: "https://haira-assessment.vercel.app",
    kpis: ["Governance maturity score", "Benchmarking percentile", "Prioritized action items"],
    veteran: "Operationalizes Hussein et al. 2026 (npj Digital Medicine).",
    heroNumber: "35",
    heroUnit: "QUESTIONS",
    descriptor: "First digital HAIRA governance framework — npj 2026",
    bullets: [
      "35 questions across 7 AI governance domains",
      "5-level maturity scoring: Initial through Leading",
      "Based on Hussein et al. 2026, npj Digital Medicine"
    ],
    context: "Organizations struggle to operationalize peer-reviewed governance frameworks.",
    approach: "Digitized the HAIRA model into a serverless Next.js assessment tool.",
    outcome: "Provided a standardized audit tool currently used to bridge policy-to-operations gaps.",
    role: "Project Lead.",
    visual: "/images/dt-playbook.png",
  },
  {
    idx: "Project 08",
    name: "CDS Hooks + LLM Reasoning Engine",
    slug: "cds-hooks",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "LLM-augmented clinical decision support via HL7 CDS Hooks.",
    metric: "Algorithmic transparency for ONC HTI-2",
    metricType: "strategic",
    problem: "Traditional CDS implementations are brittle and generate significant alert fatigue.",
    evolution: [
      "Rule-based CDS with no NL explanations or audit trails.",
      "Hybrid CDS responding to order-sign hook with LLM-generated clinical rationales."
    ],
    stack: ["CDS Hooks v2.0.1", "cqf-ruler", "Claude API", "FHIR R4"],
    github: "https://github.com/basebattle/cds-analytics",
    live: "https://cds-analytics-app.vercel.app",
    kpis: ["CDS alert specificity", "False-positive reduction"],
    veteran: "References ONC HTI-2 algorithmic transparency requirements.",
    heroNumber: "0.94",
    heroUnit: "CONFIDENCE",
    descriptor: "CDS Hooks v2.0.1 compliant LLM reasoning service",
    bullets: [
      "Rule engine augmented with LLM reasoning",
      "Custom ai_reasoning_trace extension for auditability",
      "Demo: Opioid+Benzo critical alert with NLRationale"
    ],
    context: "Alert fatigue leads to high clinician dismissal rates.",
    approach: "Augmented HL7 CDS Hooks with an LLM engine that generates transparent rationales.",
    outcome: "Improved alert specificity and clinician acceptance.",
    role: "Integration Engineer.",
  },
  {
    idx: "Project 09",
    name: "Synthetic Patient Cohort Generator",
    slug: "synthea-cohorts",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 2,
    oneLiner: "Synthetic patient cohorts validated against CMS public-use files.",
    metric: "AI validation data infrastructure",
    metricType: "enabler",
    problem: "Healthcare AI development is blocked by privacy hurdles and lack of validated test data.",
    evolution: [
      "Generic synthetic patient generation with no statistical validation.",
      "Streamlit control panel with preconfigured cohorts validated against CMS benchmarks."
    ],
    stack: ["Synthea", "Python", "Streamlit", "CMS BSFCC"],
    github: "https://github.com/basebattle/synthea-cohort-generator",
    live: "https://synthea-cohort-generator.streamlit.app",
    kpis: ["Cohort statistical fidelity", "Data quality scorecard"],
    veteran: "References synthetic data validation against CMS public-use files.",
    heroNumber: "1K",
    heroUnit: "FHIR PATIENTS",
    descriptor: "3 preconfigured FHIR R4 cohorts, CMS-validated",
    bullets: [
      "Oncology, Readmission, and HaH cohorts",
      "FHIR R4 Bundle output per patient",
      "CMS BSFCC benchmark comparison for realism"
    ],
    context: "Privacy hurdles often block clinical innovation.",
    approach: "Engineered a cohort generator producing CMS-validated FHIR R4 bundles.",
    outcome: "Created a reusable data infrastructure powering the entire portfolio.",
    role: "Data Architect.",
  },
  {
    idx: "Project 10",
    name: "Hospital-at-Home Intelligence Layer",
    slug: "hah-monitoring",
    category: "Clinical Intelligence",
    status: "Deployed",
    phase: 3,
    oneLiner: "Clinical Command Center applying NEWS2 risk scoring to RPM data.",
    metric: "CMS waiver compliance coverage",
    metricType: "strategic",
    problem: "Health systems lack the intelligence layer needed to operationalize CMS Hospital-at-Home waivers.",
    evolution: [
      "Raw RPM device data without clinical interpretation.",
      "NEWS2 risk scoring with real-time escalation alerts mapped to CMS AHCaH conditions."
    ],
    stack: ["Python", "Streamlit", "NEWS2 Engine", "RAG Classifier", "FHIR R4"],
    github: "https://github.com/basebattle/hah-intelligence",
    live: "https://hah-intelligence.streamlit.app",
    kpis: ["NEWS2 escalation accuracy", "CMS AHCaH waiver compliance"],
    veteran: "References 42 CFR §412.65 for AHCaH conditions.",
    heroNumber: "20",
    heroUnit: "PATIENTS LIVE",
    descriptor: "NEWS2 + RAG risk engine · CMS AHCaH waiver",
    bullets: [
      "NEWS2 scoring: 7 vitals → Red/Amber/Green RAG triage",
      "AI Analysis Engine: Synthesises NEWS2 + clinical notes",
      "CMS AHCaH waiver: 10 conditions of participation tracked"
    ],
    context: "The AHCaH waiver requires intelligent triage of distributed data.",
    approach: "Built a Python ingestion layer with NEWS2 risk scoring and AI synthesis.",
    outcome: "Established a compliant monitoring layer for core CMS criteria.",
    role: "Lead Architect.",
  },
  {
    idx: "Project 11",
    name: "Healthcare LLMs: Moving from Experimentation to Production",
    slug: "healthcare-llms-production",
    category: "Strategic Governance",
    status: "WIP",
    phase: 4,
    oneLiner: "Why the true hurdle for clinical AI isn't model parameter count, but the quality of terminology-resolved FHIR infrastructure.",
    metric: "Read Article",
    metricType: "strategic",
    problem: "The healthcare industry focuses on parameter sweeps rather than the deterministic data plumbing required for clinical viability.",
    evolution: [
      "Fragmented, buzzword-heavy AI implementations that fail to scale.",
      "A principled approach toward reasoning infrastructure and data provenance."
    ],
    stack: ["Strategic Planning", "FHIR", "AI Governance"],
    github: null,
    live: "/404",
    kpis: ["Clinical Data Viability", "Terminology Resolution Rate"],
    veteran: "A systemic overview of AI transition challenges.",
    heroNumber: "6",
    heroUnit: "MIN READ",
    descriptor: "Strategic transition thesis for clinical AI",
    bullets: [
      "Evaluating terminology-resolved infrastructure",
      "Moving beyond parameter counts in clinical AI",
      "The true cost of fragmented interoperability"
    ],
    context: "Authored in March 2026.",
    approach: "Examines the systemic hurdles blocking clinical AI deployment.",
    outcome: "Provides a roadmap for terminology-resolved infrastructure.",
    role: "Author."
  },
  {
    idx: "Project 12",
    name: "Prior Auth: Solving the $35B Burden",
    slug: "prior-authorization-burden",
    category: "Strategic Governance",
    status: "WIP",
    phase: 4,
    oneLiner: "How multi-agent orchestration and LangGraph are collapsing 14-day authorization cycles into sub-3-day workflows.",
    metric: "Read Article",
    metricType: "strategic",
    problem: "Prior authorization costs the US system $35B annually, creating massive clinical friction and denying care.",
    evolution: [
      "Manual chart reviews taking 45+ minutes per clinical request.",
      "Multi-agent workflows collapsing authorization cycles."
    ],
    stack: ["Multi-Agent Orchestration", "LangGraph", "Clinical NLP"],
    github: null,
    live: "/404",
    kpis: ["Authorization Cycle Compression", "Denial Rate Reduction"],
    veteran: "Explores the financial and clinical impacts of prior auth.",
    heroNumber: "5",
    heroUnit: "MIN READ",
    descriptor: "Multi-agent resolution for $35B friction",
    bullets: [
      "Collapsing 14-day cycles to sub-3-day workflows",
      "Automated clinical evidence assembly via agents",
      "Impact on physician burnout and administrative cost"
    ],
    context: "Authored in January 2026.",
    approach: "Analyzes the technological pathways to solve prior auth.",
    outcome: "A detailed breakdown of LangGraph orchestration impact.",
    role: "Author."
  }
];

"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Data ────────────────────────────────────────────────────────────────────

const DOMAINS = [
  {
    name: "Clinical Intelligence",
    color: "#0D7377",
    projects: [
      {
        id: "P01",
        name: "FHIR-MCP Bridge",
        bullets: [
          <>First MCP-native FHIR R4 bridge — reduces EHR integration surface from hundreds of API endpoints to <strong style={{ color: "#0D7377" }}>4</strong> semantically meaningful clinical tool calls</>,
          <>Real-time terminology resolution across <strong style={{ color: "#0D7377" }}>4</strong> code systems: ICD-10-CM, SNOMED CT, RxNorm, LOINC — simultaneously per patient query</>,
          <>Pydantic v2 strict-mode model layer enforces type safety across the MCP boundary — <strong style={{ color: "#0D7377" }}>zero</strong> runtime type errors in deployed build</>,
          <>Next.js 16 EHR Simulator enables HIPAA-compliant AI development: full patient chart simulation with <strong style={{ color: "#0D7377" }}>no PHI exposure risk</strong></>,
        ],
      },
      {
        id: "P02",
        name: "Prior Authorization Pipeline",
        bullets: [
          <><strong style={{ color: "#0D7377" }}>6-node</strong> LangGraph DAG automates a workflow requiring <strong style={{ color: "#0D7377" }}>45+ minutes</strong> of clinical staff time per request — to near-real-time processing</>,
          <>Probabilistic denial risk assessment runs <strong style={{ color: "#0D7377" }}>before submission</strong> — identifying documentation gaps and code mismatches at the point of care</>,
          <>CMS NPPES provider credentialing validation integrated as a dedicated agent node — eliminates manual NPI verification step</>,
          <>Dual deployment: legacy Streamlit (main branch) + Next.js/FastAPI (v2-nextjs branch on Render) — <strong style={{ color: "#0D7377" }}>zero</strong> migration downtime</>,
        ],
      },
      {
        id: "P06",
        name: "FHIR-to-LLM Clinical Data Gateway",
        bullets: [
          <>Tri-mode FHIR client (static/cloud/local) — <strong style={{ color: "#0D7377" }}>single codebase</strong> serves demo, live, and development environments without code changes</>,
          <>Medplum Cloud integration: <strong style={{ color: "#0D7377" }}>13</strong> Synthea patient bundles, OAuth2 client_credentials flow, Innovation-Showroom-FHIR project</>,
          <><strong style={{ color: "#0D7377" }}>4-panel</strong> API Playground (Tool Selection / FHIR Request / FHIR Response / Agent Trace) — full observability of LLM-to-FHIR call chain</>,
        ],
      },
      {
        id: "P08",
        name: "CDS Hooks + LLM Reasoning Engine",
        bullets: [
          <>CDS Hooks <strong style={{ color: "#0D7377" }}>v2.0.1 compliant</strong> — interoperable with any HL7-conformant EHR</>,
          <>Rule engine: <strong style={{ color: "#0D7377" }}>20</strong> drug-drug interactions + <strong style={{ color: "#0D7377" }}>15</strong> drug-condition contraindications encoded in JSON lookup tables</>,
          <>Custom ai_reasoning_trace extension (com.healthcareshowroom.ai_reasoning_trace) — provides <strong style={{ color: "#0D7377" }}>full audit trail</strong> from rule evaluation through LLM reasoning to card generation: addresses clinical AI explainability requirements</>,
          <>Demo fidelity: Opioid+Benzo (<strong style={{ color: "#0D7377" }}>0.94</strong> confidence), NSAID+Renal CKD (<strong style={{ color: "#0D7377" }}>0.91</strong>)</>,
        ],
      },
      {
        id: "P09",
        name: "Synthetic Patient Cohort Generator",
        bullets: [
          <><strong style={{ color: "#0D7377" }}>3</strong> preconfigured FHIR R4 cohorts: <strong style={{ color: "#0D7377" }}>500</strong> oncology patients (lung/breast/colorectal), <strong style={{ color: "#0D7377" }}>300</strong> high-risk readmission (CHF/COPD/diabetes), <strong style={{ color: "#0D7377" }}>200</strong> hospital-at-home (pneumonia/CHF/COPD exacerbation)</>,
          <>CMS BSFCC public-use file benchmark comparison — validates synthetic cohort clinical realism against federal reference data</>,
          <>FHIR R4 Bundle output per patient — direct integration with P01/P02/P06</>,
        ],
      },
      {
        id: "P10",
        name: "Hospital-at-Home Intelligence Layer",
        bullets: [
          <>NEWS2 scoring engine (<strong style={{ color: "#0D7377" }}>6</strong> physiological parameters) applied to <strong style={{ color: "#0D7377" }}>20</strong> simulated patients: <strong style={{ color: "#0D7377" }}>12</strong> Green (0–4), <strong style={{ color: "#0D7377" }}>5</strong> Amber (5–6), <strong style={{ color: "#0D7377" }}>3</strong> Red (7+)</>,
          <>CMS Acute Hospital Care at Home waiver compliance checklist: all <strong style={{ color: "#0D7377" }}>10</strong> conditions of participation implemented and checkable</>,
          <>Escalation alert queue auto-sorted by NEWS2 severity — automates clinical triage decisions across full patient census</>,
        ],
      },
    ],
  },
  {
    name: "Financial Optimization",
    color: "#FF8F00",
    projects: [
      {
        id: "P03",
        name: "Revenue Cycle Management Dashboard",
        bullets: [
          <><strong style={{ color: "#FF8F00" }}>12</strong> HFMA-benchmarked KPIs calculated in real time: Days in A/R, Clean Claim Rate, Collection Rate, Denial Rate, Net Collection Rate and <strong style={{ color: "#FF8F00" }}>7</strong> others — with industry benchmark comparison (MGMA/HFMA)</>,
          <><strong style={{ color: "#FF8F00" }}>6-node</strong> LangGraph pipeline: query_parser → analysis_engine → anomaly_detector → benchmark_comparator → summary_writer → report_generator (PowerPoint/Excel/Plotly)</>,
          <>Automated anomaly detection flags deviations in revenue cycle metrics before they impact cash flow — shift from monthly review to <strong style={{ color: "#FF8F00" }}>real-time alerting</strong></>,
          <>LangSmith observability integrated for end-to-end agent tracing, prompt debugging, and LLM output quality evaluation</>,
        ],
      },
      {
        id: "P04",
        name: "Claims Denial Workflow Agent",
        bullets: [
          <>CARC/RARC taxonomy engine maps top <strong style={{ color: "#FF8F00" }}>50</strong> denial codes to <strong style={{ color: "#FF8F00" }}>4</strong> root-cause categories — enabling systemic pattern analysis across <strong style={{ color: "#FF8F00" }}>5,000</strong> synthetic claims at <strong style={{ color: "#FF8F00" }}>12%</strong> denial rate</>,
          <>ROI model with <strong style={{ color: "#FF8F00" }}>10/20/30%</strong> prevention scenario calculators — enables CFO-level business case construction for denial prevention investment</>,
          <>Prevention Scorer ranks pending claims by denial probability <strong style={{ color: "#FF8F00" }}>before submission</strong> — prospective risk management rather than reactive denial appeal</>,
          <>Denial chain drill-down: submission → denial → appeal → resolution — full lifecycle visibility per claim</>,
        ],
      },
      {
        id: "P05",
        name: "VBC Reimbursement Analyzer",
        bullets: [
          <>Tuva Project (Apache 2.0) dbt pipeline integration — open-source claims-to-analytics standard used by leading US health systems</>,
          <>Episode-level Total Cost of Care (TCOC) calculation for oncology service lines — the foundational metric of all VBC contracts</>,
          <>CMS-HCC V28 risk-adjustment sensitivity analysis via interactive scenario sliders — actuarial-grade modeling without actuarial cost</>,
          <>DuckDB analytical engine: <strong style={{ color: "#FF8F00" }}>zero</strong> cloud database cost, file-based, runs entirely locally — <strong style={{ color: "#FF8F00" }}>$0</strong> infrastructure for production analytics</>,
        ],
      },
    ],
  },
  {
    name: "Strategic Governance",
    color: "#1565C0",
    projects: [
      {
        id: "P07",
        name: "HAIRA AI Governance Assessment Tool",
        bullets: [
          <>First digital implementation of the HAIRA framework (Hussein et al. 2026, npj Digital Medicine) — peer-reviewed academic foundation for all <strong style={{ color: "#1565C0" }}>35</strong> assessment questions</>,
          <><strong style={{ color: "#1565C0" }}>7</strong> governance domains, <strong style={{ color: "#1565C0" }}>5-level</strong> maturity scoring (Initial → Leading), <strong style={{ color: "#1565C0" }}>7-axis</strong> RadarChart with synthetic industry benchmark comparison</>,
          <>Prioritised recommendations engine sorted by lowest-scoring domain — directs improvement effort to highest-leverage governance gaps</>,
          <>Fully serverless: localStorage state persistence, zero-cost Vercel deployment, no backend — any healthcare organisation can self-assess in <strong style={{ color: "#1565C0" }}>15 minutes</strong> without a consulting engagement</>,
        ],
      },
    ],
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function ImpactMetrics() {
  return (
    <section
      id="impact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b"
      style={{
        background: "#1A2535",
        borderColor: "rgba(255,255,255,0.06)"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <AnimateIn from="bottom" delay={0}>
          <SectionLabel className="block mb-6">Impact</SectionLabel>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.07}>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-16"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#ECEFF1" }}
          >
            Measured Impact
          </h2>
        </AnimateIn>

        {/* ── MECE Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {DOMAINS.map((domain, i) => (
            <AnimateIn key={domain.name} from="bottom" delay={0.15 + i * 0.1}>
              <div className="flex flex-col gap-8">
                {/* Domain Header */}
                <div className="flex items-center gap-3 border-b pb-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="w-4 h-4 shrink-0 rounded-sm" style={{ background: domain.color }} />
                  <h3
                    className="text-xl font-semibold tracking-wide"
                    style={{ fontFamily: "var(--font-dm-sans)", color: domain.color }}
                  >
                    {domain.name}
                  </h3>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-10">
                  {domain.projects.map((project) => (
                    <div key={project.name} className="flex flex-col gap-4">
                      {/* Project Title */}
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-md"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "rgba(232,237,240,0.6)",
                            fontFamily: "var(--font-jetbrains-mono)"
                          }}
                        >
                          {project.id}
                        </span>
                        <h4
                          className="text-lg font-medium"
                          style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
                        >
                          {project.name}
                        </h4>
                      </div>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-3">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span
                              className="mt-2.5 w-1.5 h-[2px] shrink-0 rounded-full"
                              style={{ background: "#0D7377" }}
                            />
                            <p
                              className="text-[15px] leading-relaxed"
                              style={{ fontFamily: "var(--font-dm-sans)", color: "#ECEFF1" }}
                            >
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft, Github, Globe, FileText } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

export default function PlaybookPage() {
  return (
    <main className="min-h-screen bg-background relative pt-32 pb-24 overflow-hidden selection:bg-neon-teal/30">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <AnimateIn delay={0.1}>
          <Link 
            href="/#solutions" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </AnimateIn>

        {/* Header */}
        <AnimateIn delay={0.2}>
          <header className="mb-16 border-b border-white/10 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-neon-teal/50" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neon-teal">
                Methodology Playbook
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-foreground" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Digital Transformation Methodology: <br />
              <span className="text-neon-teal italic">The Cognitive Health Stack</span>
            </h1>
          </header>
        </AnimateIn>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-normal prose-h2:text-white prose-h2:mt-16 prose-h2:mb-6 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white" style={{ fontFamily: "var(--font-dm-sans)" }}>
          
          <AnimateIn delay={0.3}>
            {/* Executive Summary */}
            <h2 style={{ fontFamily: "var(--font-dm-serif)" }}>Executive Summary</h2>
            <p>
              Modern healthcare systems are currently trapped in a state of &quot;digital lethargy.&quot; Legacy infrastructure and fragmented data silos act as a tax on clinical outcomes and operational margins. This playbook outlines a four-pillar methodology designed to transition healthcare organisations from reactive entities into proactive, intelligence-led systems.
            </p>
            <p className="p-6 rounded-2xl bg-white/5 border border-white/10 italic text-white/90 shadow-xl my-8">
              The core thesis is simple: <strong className="text-neon-teal">Readiness governs the Interoperability layer, which in turn enables Efficiency and safe Care Delivery.</strong> By treating AI governance not as a hurdle but as the foundational substrate, we unlock sub-second data liquidity. This allows for the automation of administrative friction and the deployment of real-time clinical risk triage. We are no longer building better databases. We are building the &quot;Reasoning Layer&quot; for the hospital of the future.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            {/* Phase 1 */}
            <h2 className="flex items-center gap-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
              <span className="text-neon-blue font-mono text-2xl opacity-50">01</span> Phase 1: Readiness
              <span className="text-lg text-slate-400 font-sans tracking-tight ml-2 border-l border-white/10 pl-4">(Structural and Cultural Governance)</span>
            </h2>
            <p>
              Transformation fails when technology outpaces policy. This phase establishes the ethical and technical guardrails required for clinical AI. We do not deploy until the organisation is architecturally prepared.
            </p>
            <ul className="space-y-4 marker:text-neon-blue">
              <li>
                <strong className="text-white">The HAIRA 35-Point Audit:</strong> We employ the Health AI Risk Assessment (HAIRA) framework to evaluate 35 critical points across data lineage, bias mitigation, and clinical safety.
              </li>
              <li>
                <strong className="text-white">Maturity Benchmarking:</strong> We assess the cultural readiness of clinical staff to ensure that AI tools augment rather than disrupt established workflows.
              </li>
              <li>
                <strong className="text-white">Governance as a Catalyst:</strong> By formalising risk at the start, we eliminate the &quot;pilot purgatory&quot; that stalls most digital initiatives.
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.5}>
            {/* Phase 2 */}
            <h2 className="flex items-center gap-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
              <span className="text-neon-teal font-mono text-2xl opacity-50">02</span> Phase 2: Interoperability
              <span className="text-lg text-slate-400 font-sans tracking-tight ml-2 border-l border-white/10 pl-4">(From Static Silos to Reasoning Access)</span>
            </h2>
            <p>
              Data at rest is a liability. Data in motion is an asset. Most systems struggle with legacy FHIR implementations that suffer from high latency. Our approach shifts the focus toward &quot;Reasoning Access.&quot;
            </p>
            <ul className="space-y-4 marker:text-neon-teal">
              <li>
                <strong className="text-white">The MCP Framework:</strong> We implement the Model Context Protocol (MCP) to provide LLMs and agents with real-time, secure access to clinical data.
              </li>
              <li>
                <strong className="text-white">Sub-Second Integration:</strong> By optimising the FHIR-MCP bridge, we achieve sub-second latency. This ensures that the &quot;Reasoning Layer&quot; operates on the most current patient state.
              </li>
              <li>
                <strong className="text-white">Eliminating Silos:</strong> We move beyond simple data exchange. We create a unified fabric where telemetry, labs, and imaging are instantly available for algorithmic analysis.
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.6}>
            {/* Phase 3 */}
            <h2 className="flex items-center gap-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
              <span className="text-neon-pink font-mono text-2xl opacity-50">03</span> Phase 3: Efficiency
              <span className="text-lg text-slate-400 font-sans tracking-tight ml-2 border-l border-white/10 pl-4">(The Autonomous Revenue Lifecycle)</span>
            </h2>
            <p>
              Administrative overhead is the primary driver of healthcare burnout and margin erosion. We target the most expensive manual processes within the revenue cycle to fund the broader transformation.
            </p>
            <ul className="space-y-4 marker:text-neon-pink">
              <li>
                <strong className="text-white">Prior-Auth &amp; Denials:</strong> We deploy agentic workflows to handle complex clinical documentation. This achieves a <strong className="text-neon-pink">80% reduction in manual review</strong> for Prior-Authorisation and Denials.
              </li>
              <li>
                <strong className="text-white">Admin Automation:</strong> By automating high-volume, low-complexity tasks, we redirect human capital toward patient-facing roles.
              </li>
              <li>
                <strong className="text-white">Operational Margin Expansion:</strong> This phase ensures the digital transformation programme is self-funding by recapturing lost revenue and reducing the cost to collect.
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.7}>
            {/* Phase 4 */}
            <h2 className="flex items-center gap-4" style={{ fontFamily: "var(--font-dm-serif)" }}>
              <span className="text-white font-mono text-2xl opacity-50">04</span> Phase 4: Care Delivery
              <span className="text-lg text-slate-400 font-sans tracking-tight ml-2 border-l border-white/10 pl-4">(The Kinetic Command Centre)</span>
            </h2>
            <p>
              The final phase applies this intelligence to the clinical bedside. We transform the hospital into a &quot;Kinetic Environment&quot; where data informs immediate life-saving action.
            </p>
            <ul className="space-y-4 marker:text-white">
              <li>
                <strong className="text-white">Intelligent Command Centres:</strong> We centralise data into a real-time &quot;brain&quot; for the hospital. This allows for precise bed management and resource allocation.
              </li>
              <li>
                <strong className="text-white">NEWS2 Risk Triage:</strong> We implement automated NEWS2 (National Early Warning Score) tracking. The system identifies deteriorating patients minutes or hours before a physical code is called.
              </li>
              <li>
                <strong className="text-white">Predictive Staffing:</strong> By analysing real-time patient acuity and inflow, we predict staffing requirements with surgical precision. This reduces agency spend and improves nurse-to-patient ratios.
              </li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.8}>
            {/* Conclusion */}
            <hr className="my-16 border-white/10" />
            <h2 style={{ fontFamily: "var(--font-dm-serif)" }}>Conclusion: Scaling Intelligence</h2>
            <p>
              Digital transformation is not a destination. It is the continuous refinement of an organisation&apos;s &quot;Cognitive Stack.&quot; By following this four-pillar methodology, healthcare systems move away from manual, error-prone processes and toward a state of <strong className="text-white">Autonomous Orchestration</strong>.
            </p>
            <p>
              When Readiness, Interoperability, and Efficiency converge, the result is a safer, more resilient Care Delivery model. We are not just digitising old workflows. We are re-architecting healthcare for the age of intelligence.
            </p>

            {/* Quick Links Nav */}
            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link 
                href="/#impact"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-neon-teal/10 flex items-center justify-center text-neon-teal">
                   <FileText size={18} />
                </div>
                <div>
                   <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Impact</span>
                   <span className="text-sm font-serif text-white/60">View Metrics</span>
                </div>
              </Link>
              <Link 
                href="/#portfolio"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                   <Globe size={18} />
                </div>
                <div>
                   <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Portfolio</span>
                   <span className="text-sm font-serif text-white/60">See Implementations</span>
                </div>
              </Link>
              <a 
                href="https://github.com/basebattle"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                   <Github size={18} />
                </div>
                <div>
                   <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white">Github</span>
                   <span className="text-sm font-serif text-white/60">Source Code</span>
                </div>
              </a>
            </div>
          </AnimateIn>

        </div>
      </div>
    </main>
  );
}

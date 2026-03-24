"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Database, FileText, ArrowRight } from "lucide-react";

interface FlowNodeProps {
  icon: any;
  label: string;
  color: string;
}

function FlowNode({ icon: Icon, label, color }: FlowNodeProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative group"
      style={{ boxShadow: `0 0 20px ${color}11` }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-${color}/40 transition-colors`}>
        <Icon size={24} style={{ color }} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
        {label}
      </span>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
           style={{ backgroundColor: color, filter: "blur(15px)" }} />
    </motion.div>
  );
}

function FlowArrow({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center px-2">
      <motion.div 
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight size={20} className="text-slate-700" style={{ color: `${color}44` }} />
      </motion.div>
    </div>
  );
}

export default function ProjectFlowChart({ idx, color }: { idx: string; color: string }) {
  // Define custom flows per project category or specific project
  const renderFlow = () => {
    switch (idx) {
      case "Project 01":
        return (
          <div className="flex items-center justify-center gap-2 py-10">
            <FlowNode icon={Database} label="FHIR R4" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={Cpu} label="MCP Bridge" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={Zap} label="LLM Reasoning" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={FileText} label="Audit Trace" color={color} />
          </div>
        );
      case "Project 02":
        return (
          <div className="flex items-center justify-center gap-2 py-10">
            <FlowNode icon={FileText} label="Intake" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={Cpu} label="Agent Nodes" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={ShieldCheck} label="Compliance" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={Zap} label="Decision" color={color} />
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center gap-2 py-10">
            <FlowNode icon={Database} label="Data Ingest" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={Cpu} label="Agent Core" color={color} />
            <FlowArrow color={color} />
            <FlowNode icon={Zap} label="Strategic Output" color={color} />
          </div>
        );
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 mt-12 mb-20">
      <div className="flex items-center gap-3">
        <div className="w-8 h-[1px] bg-white/10" />
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Architecture Flow
        </span>
      </div>
      <div className="p-8 rounded-[32px] bg-white/[0.01] border border-white/[0.05] overflow-x-auto">
        {renderFlow()}
      </div>
    </div>
  );
}

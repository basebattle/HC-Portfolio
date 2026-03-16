"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, ShieldCheck, Cpu } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

interface Feature {
    name: string;
    benefit: string;
    icon?: "zap" | "shield" | "cpu" | "check";
}

const ICONS = {
    zap: Zap,
    shield: ShieldCheck,
    cpu: Cpu,
    check: CheckCircle2,
};

export default function InterstitialFeatures({ features }: { features?: Feature[] }) {
    // If no features are provided, we don't render the section.
    // We can provide a basic fallback or simply return null.
    if (!features || features.length === 0) return null;

    return (
        <section className="flex flex-col gap-6 py-8">
            <AnimateIn delay={0.1}>
                <div className="flex flex-col gap-2">
                    <h3
                        className="text-2xl font-normal"
                        style={{
                            fontFamily: "var(--font-dm-serif)",
                            color: "#E8EDF0",
                        }}
                    >
                        Engineering at Scale: Key Features
                    </h3>
                    <p
                        className="text-sm"
                        style={{
                            color: "rgba(232,237,240,0.55)",
                            fontFamily: "var(--font-dm-sans)",
                        }}
                    >
                        A high-level technical breakdown of core capabilities and user outcomes.
                    </p>
                </div>
            </AnimateIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, i) => {
                    const Icon = feature.icon ? ICONS[feature.icon] : ICONS.check;
                    return (
                        <AnimateIn key={i} delay={0.15 + i * 0.1}>
                            <motion.div
                                whileHover={{ y: -2 }}
                                className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-200"
                                style={{
                                    background: "rgba(22,32,41,0.6)",
                                    borderColor: "rgba(255,255,255,0.08)",
                                }}
                            >
                                <div
                                    className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg"
                                    style={{
                                        background: "rgba(0,191,165,0.1)",
                                        color: "#00BFA5",
                                    }}
                                >
                                    <Icon size={20} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h4
                                        className="text-base font-medium"
                                        style={{
                                            color: "#E8EDF0",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {feature.name}
                                    </h4>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{
                                            color: "rgba(232,237,240,0.5)",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {feature.benefit}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimateIn>
                    );
                })}
            </div>
        </section>
    );
}

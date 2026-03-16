"use client";

import Link from "next/link";
import { Github, ExternalLink, PlayCircle } from "lucide-react";
import type { Project } from "@/data/projects";

// A utility wrapper for a button-like link to avoid repeating styles
function ActionButton({
    href,
    disabled,
    title,
    icon: Icon,
    label,
    variant,
}: {
    href: string;
    disabled?: boolean;
    title?: string;
    icon: React.ElementType;
    label: string;
    variant: "outline" | "solid" | "accent";
}) {
    const isSolid = variant === "solid";
    const isAccent = variant === "accent";

    const baseStyles =
        "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm transition-all duration-150 whitespace-nowrap outline-none";

    const variants = {
        outline:
            "text-white/80 hover:text-white border border-white/20 hover:bg-white/5",
        solid: disabled
            ? "bg-white/10 text-white/40 cursor-not-allowed"
            : "bg-[#0D7377] text-white hover:bg-[#0D7377]/80",
        accent: "bg-[#FF8F00] text-black hover:bg-[#FF8F00]/90 font-medium",
    };

    const className = `${baseStyles} ${variants[variant]}`;

    if (disabled) {
        return (
            <span className={className} title={title || "Coming Soon"}>
                <Icon size={14} className="mr-1.5" />
                {label}
            </span>
        );
    }

    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className={className} title={title}>
            <Icon size={14} className="mr-1.5" />
            {label}
        </Link>
    );
}

export default function ProjectActions({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap gap-2 w-full mt-4">
            {/* GitHub Button */}
            {project.github && (
                <ActionButton
                    href={`https://github.com/${project.github}`}
                    icon={Github}
                    label="Code"
                    variant="outline"
                />
            )}

            {/* Live Demo Button - Disabled if null */}
            <ActionButton
                href={project.live || "#"}
                disabled={!project.live}
                icon={ExternalLink}
                label="Live Demo"
                title={!project.live ? "Coming Soon" : "View Live Demo"}
                variant="solid"
            />

            {/* Simulation Button - Hidden if null */}
            {project.simulation && (
                <ActionButton
                    href={project.simulation}
                    icon={PlayCircle}
                    label="Simulation"
                    variant="accent"
                />
            )}
        </div>
    );
}

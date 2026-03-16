"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AwardBadgeProps {
    src: string;
    alt: string;
    delay?: number;
}

export default function AwardBadge({ src, alt, delay = 0 }: AwardBadgeProps) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay, type: "spring", stiffness: 300 }}
            className="relative flex items-center justify-center p-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg group overflow-hidden"
            style={{ width: "90px", height: "90px" }}
        >
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute -inset-full top-0 z-50 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-glint" />
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center gap-1">
                {src ? (
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain drop-shadow-2xl"
                    />
                ) : (
                    <span className="text-[10px] font-bold text-white/70 leading-tight uppercase font-mono">
                        {alt}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

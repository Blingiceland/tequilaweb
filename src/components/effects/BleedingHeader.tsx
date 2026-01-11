"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BleedingHeaderProps {
    children: ReactNode;
    className?: string;
    dripColor?: string;
}

export default function BleedingHeader({ children, className = "", dripColor = "#ff0000" }: BleedingHeaderProps) {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* The Text Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Drips Container - Absolute positioned to hang off the text */}
            <div className="absolute top-[85%] left-0 w-full h-24 pointer-events-none z-0 flex justify-around px-4 opacity-90">
                {/* Generated drips */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: [0, 40 + Math.random() * 40] }} // Grow down
                        transition={{
                            duration: 2 + Math.random() * 2, // Slow viscous growth
                            delay: i * 0.5, // Staggered start
                            repeat: Infinity,
                            repeatDelay: 3 + Math.random() * 5, // Wait a while before re-dripping
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="w-1.5 md:w-2 rounded-b-full"
                        style={{
                            backgroundColor: dripColor,
                            boxShadow: `0 0 8px ${dripColor}`,
                            // Random horizontal offset within its "slot"
                            marginLeft: `${(Math.random() - 0.5) * 40}px`
                        }}
                    >
                        {/* Drip Tip Highlight - slightly darker/different for depth if possible, but keeping simple for now */}
                        <div className="w-full h-1/2 rounded-b-full bg-black/20" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

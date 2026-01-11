"use client";

import { useState, useEffect } from "react";

interface NeonBorderSegmentProps {
    side: "top" | "right" | "bottom" | "left";
    color: string;
}

const NeonBorderSegment = ({ side, color }: NeonBorderSegmentProps) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.85) {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 80 + Math.random() * 120);
            }
        }, 2000 + Math.random() * 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    const baseClass = "absolute transition-opacity duration-75";
    const glowColor = color === "red"
        ? "shadow-[0_0_10px_rgba(255,0,0,0.8),0_0_20px_rgba(255,0,0,0.4)]"
        : color === "green"
            ? "shadow-[0_0_10px_rgba(57,255,20,0.8),0_0_20px_rgba(57,255,20,0.4)]"
            : "shadow-[0_0_10px_rgba(217,70,239,0.8),0_0_20px_rgba(217,70,239,0.4)]";

    const borderColor = color === "red"
        ? "bg-red-600"
        : color === "green"
            ? "bg-[#39ff14]"
            : "bg-[#d946ef]";

    const positions = {
        top: "top-0 left-0 right-0 h-[3px]",
        right: "top-0 right-0 bottom-0 w-[3px]",
        bottom: "bottom-0 left-0 right-0 h-[3px]",
        left: "top-0 left-0 bottom-0 w-[3px]",
    };

    return (
        <div
            className={`${baseClass} ${positions[side]} ${borderColor} ${glowColor} ${isGlitching ? "opacity-0" : "opacity-100"
                }`}
        />
    );
};

interface NeonMenuHeaderProps {
    text: string;
    color: "red" | "green" | "purple";
}

export default function NeonMenuHeader({ text, color }: NeonMenuHeaderProps) {
    const textColor = color === "red"
        ? "text-red-600"
        : color === "green"
            ? "text-[#39ff14]"
            : "text-[#d946ef]";

    const glowColor = color === "red"
        ? "drop-shadow-[0_0_15px_rgba(255,0,0,0.9)] drop-shadow-[0_0_30px_rgba(255,0,0,0.5)]"
        : color === "green"
            ? "drop-shadow-[0_0_15px_rgba(57,255,20,0.9)] drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]"
            : "drop-shadow-[0_0_15px_rgba(217,70,239,0.9)] drop-shadow-[0_0_30px_rgba(217,70,239,0.5)]";

    return (
        <div className="relative inline-block px-8 py-6 bg-zinc-950/50">
            {/* Neon Border Segments */}
            <NeonBorderSegment side="top" color={color} />
            <NeonBorderSegment side="right" color={color} />
            <NeonBorderSegment side="bottom" color={color} />
            <NeonBorderSegment side="left" color={color} />

            {/* Text */}
            <h2
                className={`text-3xl md:text-4xl font-bold font-[family-name:var(--font-nosifer)] ${textColor} ${glowColor} tracking-widest uppercase`}
            >
                {text}
            </h2>
        </div>
    );
}

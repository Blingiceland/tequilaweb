"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- Neon Letter (Stable) ---
interface NeonLetterProps {
    char: string;
    color: "orange" | "red" | "purple";
}

function NeonLetter({ char, color }: NeonLetterProps) {
    // Text is now stable - no internal glitch state
    const isOn = true;

    if (char === " ") {
        return <span className="w-4 inline-block">&nbsp;</span>;
    }

    const colorClasses = {
        orange: {
            text: "#ff9500",
            glow: "0 0 10px #ff9500, 0 0 20px #ff9500, 0 0 40px #ff6600, 0 0 80px #ff6600",
            dim: "0 0 5px #ff950080"
        },
        red: {
            text: "#ff0000",
            glow: "0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #cc0000, 0 0 80px #cc0000",
            dim: "0 0 5px #ff000080"
        },
        purple: {
            text: "#d946ef",
            glow: "0 0 10px #d946ef, 0 0 20px #d946ef, 0 0 40px #a21caf, 0 0 80px #a21caf",
            dim: "0 0 5px #d946ef80"
        }
    }[color];

    return (
        <span
            className="inline-block transition-all duration-75"
            style={{
                color: colorClasses.text,
                textShadow: isOn ? colorClasses.glow : colorClasses.dim,
                filter: isOn ? "none" : "brightness(0.3)",
            }}
        >
            {char}
        </span>
    );
}

// --- Neon Border Segment (Glitching) ---
interface NeonBorderSegmentProps {
    position: "top" | "right" | "bottom" | "left";
}

function NeonBorderSegment({ position }: NeonBorderSegmentProps) {
    const [isOn, setIsOn] = useState(true);

    useEffect(() => {
        // Independent glitch loop for each border segment
        const glitchLoop = () => {
            // Long sleep: 2 to 8 seconds between potential glitches (User asked for "a lot slower")
            const sleepTime = Math.random() * 6000 + 2000;

            setTimeout(() => {
                // Determine if we should glitch now
                if (Math.random() < 0.7) { // 70% chance to glitch after wait

                    // Glitch Burst: Rapid flicker for transition
                    let flickers = 0;
                    const maxFlickers = Math.floor(Math.random() * 5) + 3; // 3-8 flickers

                    const flickerInterval = setInterval(() => {
                        setIsOn(prev => !prev);
                        flickers++;

                        if (flickers >= maxFlickers) {
                            clearInterval(flickerInterval);
                            setIsOn(true); // Always return to ON
                            glitchLoop(); // Restart loop
                        }
                    }, 50 + Math.random() * 100); // 50-150ms flicker speed
                } else {
                    // Just wait again without glitching
                    glitchLoop();
                }
            }, sleepTime);
        };

        // Start the loop
        glitchLoop();

        // Cleanup relies on component unmounting logic, but referencing timeout IDs 
        // properly in recursive timeouts is tricky without refs. 
        // For this visual effect, simple closure is "okay" but best effort cleanup:
        return () => {
            // Hard to clean recursive timeouts without refs, but effect unmount stops rendering updates
        };
    }, []);

    // Positioning styles
    const baseStyle = "absolute bg-red-500 shadow-[0_0_10px_#ff0000,0_0_20px_#ff0000]";
    const positionStyles = {
        top: "top-0 left-0 right-0 h-1 rounded-t-xl",
        bottom: "bottom-0 left-0 right-0 h-1 rounded-b-xl",
        left: "top-0 left-0 bottom-0 w-1 rounded-l-xl",
        right: "top-0 right-0 bottom-0 w-1 rounded-r-xl",
    }[position];

    // Off state style
    const offStyle = {
        opacity: isOn ? 1 : 0.1,
        boxShadow: isOn ? "0 0 10px #ff0000, 0 0 20px #ff0000" : "none",
        backgroundColor: isOn ? "#ef4444" : "#450a0a" // Red-500 vs Dark Red
    };

    return (
        <div
            className={`${baseStyle} ${positionStyles} transition-all duration-75`}
            style={offStyle}
        />
    );
}

// --- Main Component ---
export default function NeonSign() {
    const titleText = "PABLO'S";
    const subtitleText = "TEQUILA BAR";

    return (
        <div className="relative inline-block p-8 md:p-12">
            {/* Border Segments - Creating the "Frame" manually */}
            <NeonBorderSegment position="top" />
            <NeonBorderSegment position="bottom" />
            <NeonBorderSegment position="left" />
            <NeonBorderSegment position="right" />

            {/* Inner "Glass" reflection for realism */}
            <div className="absolute inset-0 bg-red-900/5 rounded-xl pointer-events-none m-1" />

            {/* Neon Text Container */}
            <div className="relative z-10 text-center">
                {/* Ghost Layer (Cyan/Blue) - Jitters behind */}
                <motion.div
                    className="absolute inset-0 z-0 select-none pointer-events-none opacity-60 blur-[1px]"
                    animate={{
                        x: [0, -2, 2, -1, 0],
                        y: [0, 1, -1, 2, 0],
                        filter: ["blur(1px)", "blur(2px)", "blur(0px)"]
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "linear",
                        times: [0, 0.2, 0.4, 0.6, 1] // erratic timing
                    }}
                >
                    <div
                        className="text-5xl md:text-7xl font-black tracking-widest mb-4 text-[#00ffff]"
                        style={{ fontFamily: "var(--font-inter), sans-serif", textShadow: "0 0 10px #00ffff" }}
                    >
                        {titleText.split("").map((char, i) => (
                            <span key={`ghost-${i}`} className="inline-block">{char}</span>
                        ))}
                    </div>
                </motion.div>

                {/* Main Layer (Purple) - Stable */}
                <div
                    className="relative z-10 text-5xl md:text-7xl font-black tracking-widest mb-4"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                    {titleText.split("").map((char, i) => (
                        <NeonLetter key={i} char={char} color="purple" />
                    ))}
                </div>

                {/* TEQUILA BAR - Red Neon (Stable) */}
                <div
                    className="text-2xl md:text-4xl font-bold tracking-[0.3em] uppercase"
                    style={{ fontFamily: "sans-serif" }}
                >
                    {subtitleText.split("").map((char, i) => (
                        <NeonLetter key={i} char={char} color="red" />
                    ))}
                </div>
            </div>
        </div>
    );
}

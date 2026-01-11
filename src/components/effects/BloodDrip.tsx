"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function BloodDrip() {
    const { theme } = useTheme();

    if (theme !== "vampire") return null;

    return (
        <div className="absolute top-0 left-0 w-full h-0 pointer-events-none z-40">
            <div className="flex justify-around">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0.8 }}
                        animate={{
                            height: [0, 80 + Math.random() * 50, 80 + Math.random() * 50],
                            opacity: [0.8, 0.8, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 2,
                            ease: "easeIn"
                        }}
                        className="w-2 rounded-b-full bg-[var(--color-vampire-secondary)] shadow-[0_0_10px_var(--color-vampire-secondary)]"
                        style={{ marginLeft: `${Math.random() * 20}px` }}
                    />
                ))}
            </div>
        </div>
    );
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "lounge" | "vampire";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isManualOverride: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("lounge");
  const [isManualOverride, setIsManualOverride] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      if (isManualOverride) return;

      const now = new Date();
      const hour = now.getHours();

      // "Midnight" logic: Let's assume Vampire mode is from 00:00 to 06:00
      const isVampireTime = hour >= 0 && hour < 6;

      const targetTheme = isVampireTime ? "vampire" : "lounge";
      
      if (theme !== targetTheme) {
        setTheme(targetTheme);
      }
    };

    // Check immediately
    checkTime();

    // Check every minute
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, [theme, isManualOverride]);

  useEffect(() => {
    // Apply theme to body
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsManualOverride(true);
    setTheme((prev) => (prev === "lounge" ? "vampire" : "lounge"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isManualOverride }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

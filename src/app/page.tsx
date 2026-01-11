"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Wine, Zap } from "lucide-react";
import CocktailMenu from "@/components/CocktailMenu";
import { useState } from "react";
import BookingForm from "@/components/BookingForm";
import VhsOverlay from "@/components/effects/VhsOverlay";
import BloodDrip from "@/components/effects/BloodDrip";
import BloodyCursor from "@/components/effects/BloodyCursor";
import SpookyAudio from "@/components/effects/SpookyAudio";
import AudioControl, { SoundProfile } from "@/components/effects/AudioControl";
import GlitchText from "@/components/effects/GlitchText";
import NeonSign from "@/components/effects/NeonSign";

export default function Home() {
  const { theme, toggleTheme, isManualOverride } = useTheme();

  // Audio State
  const [isMuted, setIsMuted] = useState(false);
  const [soundProfile, setSoundProfile] = useState<SoundProfile>("random");

  const isLounge = theme === "lounge";

  const scrollToReservation = () => {
    const section = document.getElementById('reservation-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <VhsOverlay />
      <BloodDrip />
      <BloodyCursor />
      <AudioControl
        isMuted={isMuted}
        onMuteToggle={setIsMuted}
        currentProfile={soundProfile}
        onProfileChange={setSoundProfile}
      />
      <SpookyAudio isMuted={isMuted} profile={soundProfile} />
      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-[2000ms]">
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          {isLounge ? (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-lounge-primary)] opacity-80" />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-vampire-secondary)_0%,_transparent_70%)] opacity-20 animate-pulse" />
          )}
        </div>

        {/* Manual Toggle Switch (Top Right) */}
        <button
          onClick={toggleTheme}
          className="absolute top-6 right-6 p-2 rounded-full border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all z-50 cursor-pointer"
          title="Toggle Time Warp"
        >
          {isLounge ? <Moon size={24} /> : <Sun size={24} />}
        </button>

        {/* Main Content Container */}
        <div className="z-10 text-center max-w-4xl px-6">

          {/* Animated Title */}
          <div className="min-h-32 mb-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isLounge ? (
                <motion.h1
                  key="lounge-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="text-6xl md:text-8xl font-serif tracking-widest text-[var(--color-lounge-text)]"
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  TEQUILA
                  <span className="block text-4xl md:text-6xl mt-4 tracking-widest font-light opacity-80">
                    LOUNGE
                  </span>
                </motion.h1>
              ) : (
                <motion.div
                  key="vampire-title"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                >
                  <NeonSign />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Description / Vibe Text */}
          <div className="h-24 mb-12">
            <AnimatePresence mode="wait">
              {isLounge ? (
                <motion.p
                  key="lounge-desc"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-lg md:text-xl font-light italic leading-relaxed"
                >
                  "A hidden sanctuary behind the wooden door. Fine spirits, hushed conversations, and the warmth of old leather."
                </motion.p>
              ) : (
                <motion.p
                  key="vampire-desc"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#d946ef] drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]"
                  style={{ fontFamily: 'var(--font-nosifer)' }}
                >
                  "Enter at your own risk. The night is young, and we are thirsty."
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToReservation}
            className={`
              px-12 py-4 rounded-full text-lg font-bold tracking-[0.2em] transition-all duration-300
              ${isLounge
                ? 'bg-[#d4a017] text-black hover:bg-[#b8860b] shadow-lg border border-[#ffd700]/30'
                : 'bg-red-950/80 text-red-500 border border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:text-red-400 hover:border-red-400 hover:shadow-red-500/50'
              }
            `}
            style={{ fontFamily: isLounge ? 'var(--font-cinzel)' : 'var(--font-nosifer)' }}
          >
            {isLounge ? "RESERVE A TABLE" : "JOIN THE RITUAL"}
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-0 right-0 text-center opacity-50 z-20 pointer-events-none">
          <p className="text-sm">{isLounge ? "Open until midnight." : "Open until dawn."}</p>
          <p className="text-xs mt-2 animate-bounce">Scroll down</p>
          {isManualOverride && <p className="text-[10px] mt-2 opacity-50 uppercase">(Manual Time Override Active)</p>}
        </div>

      </main>

      {/* Sections that appear "below" the fold */}
      <HeroSection>
        <div className="w-full">
          <CocktailMenu />
        </div>
        <div id="reservation-form" className="w-full">
          <BookingForm />
        </div>
      </HeroSection>
    </>
  );
}

function HeroSection({ children }: { children: React.ReactNode }) {
  return <div className="relative z-10 w-full min-h-screen flex flex-col items-center">{children}</div>;
}

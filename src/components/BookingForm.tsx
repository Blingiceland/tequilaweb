"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingForm() {
    const { theme } = useTheme();
    const isLounge = theme === "lounge";

    // Form States: 'DETAILS' -> 'RIDDLE' -> 'PACT'
    const [step, setStep] = useState<'DETAILS' | 'RIDDLE' | 'PACT'>('DETAILS');
    const [formData, setFormData] = useState({ name: '', guests: '2', time: '22:00', email: '' });
    const [riddleAnswer, setRiddleAnswer] = useState('');
    const [errorShake, setErrorShake] = useState(false);

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLounge) {
            // Lounge skips riddle
            setStep('PACT');
        } else {
            // Vampire goes to Riddle
            setStep('RIDDLE');
        }
    };

    const handleRiddleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const answer = riddleAnswer.toLowerCase().trim();
        // Accepted answers
        if (['tequila', 'agave', 'blood', 'soul'].some(a => answer.includes(a))) {
            setStep('PACT');
        } else {
            // Shake effect
            setErrorShake(true);
            setTimeout(() => setErrorShake(false), 500);
        }
    };

    return (
        <div className="py-20 px-6 w-full max-w-2xl mx-auto mb-20 text-center">
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`p-10 rounded-lg border-2 transition-all duration-700 relative overflow-hidden
          ${isLounge
                        ? 'border-[var(--color-lounge-accent)] bg-[var(--color-lounge-primary)]/50'
                        : 'border-[var(--color-vampire-secondary)] bg-black shadow-[0_0_50px_rgba(255,0,60,0.15)]'
                    }`}
            >
                {/* Vampire Glow Effect */}
                {!isLounge && <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-vampire-secondary)] shadow-[0_0_20px_var(--color-vampire-secondary)] animate-pulse" />}

                <h2 className={`text-3xl mb-8 font-bold ${isLounge ? 'font-serif text-[var(--color-lounge-text)]' : 'font-sans uppercase tracking-[0.2em] text-[var(--color-vampire-text)]'}`}>
                    {step === 'PACT'
                        ? (isLounge ? "Reservation Confirmed" : "PACT SEALED")
                        : (isLounge ? "Reserve Your Table" : "REQUEST AN AUDIENCE")}
                </h2>

                {/* STEP 1: DETAILS */}
                {step === 'DETAILS' && (
                    <motion.form
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onSubmit={handleDetailsSubmit} className="space-y-6 text-left"
                    >
                        <div>
                            <label className={`block text-xs uppercase tracking-widest mb-2 opacity-70 ${!isLounge && 'text-[var(--color-vampire-accent)]'}`}>Name</label>
                            <input
                                type="text" required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full p-3 bg-transparent border-b-2 focus:outline-none transition-colors ${isLounge ? 'border-[var(--color-lounge-accent)] text-[var(--color-lounge-text)]' : 'border-zinc-800 focus:border-[var(--color-vampire-secondary)] text-white'}`}
                                placeholder={isLounge ? "John Doe" : "Mortal Name"}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className={`block text-xs uppercase tracking-widest mb-2 opacity-70 ${!isLounge && 'text-[var(--color-vampire-accent)]'}`}>Guests</label>
                                <input
                                    type="number" min="1" required
                                    value={formData.guests}
                                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                                    className={`w-full p-3 bg-transparent border-b-2 focus:outline-none transition-colors ${isLounge ? 'border-[var(--color-lounge-accent)] text-[var(--color-lounge-text)]' : 'border-zinc-800 focus:border-[var(--color-vampire-secondary)] text-white'}`}
                                />
                            </div>
                            <div>
                                <label className={`block text-xs uppercase tracking-widest mb-2 opacity-70 ${!isLounge && 'text-[var(--color-vampire-accent)]'}`}>Time</label>
                                <input
                                    type="time" required
                                    value={formData.time}
                                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                                    className={`w-full p-3 bg-transparent border-b-2 focus:outline-none transition-colors ${isLounge ? 'border-[var(--color-lounge-accent)] text-[var(--color-lounge-text)]' : 'border-zinc-800 focus:border-[var(--color-vampire-secondary)] text-white'}`}
                                />
                            </div>
                        </div>
                        <div>
                            <label className={`block text-xs uppercase tracking-widest mb-2 opacity-70 ${!isLounge && 'text-[var(--color-vampire-accent)]'}`}>Email</label>
                            <input
                                type="email" required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full p-3 bg-transparent border-b-2 focus:outline-none transition-colors ${isLounge ? 'border-[var(--color-lounge-accent)] text-[var(--color-lounge-text)]' : 'border-zinc-800 focus:border-[var(--color-vampire-secondary)] text-white'}`}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-4 mt-8 font-bold tracking-widest transition-all duration-300 transform hover:scale-[1.02] ${isLounge ? 'bg-[var(--color-lounge-highlight)] text-white' : 'bg-[var(--color-vampire-secondary)] text-white shadow-[0_0_20px_var(--color-vampire-secondary)]'}`}
                        >
                            {isLounge ? "CONFIRM BOOKING" : "PROCEED"}
                        </button>
                    </motion.form>
                )}

                {/* STEP 2: RIDDLE (Vampire Only) */}
                {step === 'RIDDLE' && (
                    <motion.form
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        onSubmit={handleRiddleSubmit}
                        className={`space-y-8 text-center ${errorShake ? 'animate-shake' : ''}`}
                    >
                        <div className="text-[var(--color-vampire-text)] text-lg italic opacity-80 font-serif">
                            "I have no voice, but I tell stories.<br />
                            I have no life, but I grant immortality.<br />
                            What am I?"
                        </div>
                        <input
                            type="text" autoFocus
                            value={riddleAnswer}
                            onChange={e => setRiddleAnswer(e.target.value)}
                            placeholder="Answer the Gatekeeper..."
                            className="w-full text-center text-2xl p-4 bg-transparent border-b-2 border-[var(--color-vampire-accent)] text-[var(--color-vampire-secondary)] focus:outline-none uppercase tracking-widest"
                        />
                        <button
                            type="submit"
                            className="w-full py-4 font-bold tracking-[0.3em] bg-transparent border-2 border-[var(--color-vampire-secondary)] text-[var(--color-vampire-secondary)] hover:bg-[var(--color-vampire-secondary)] hover:text-white transition-all"
                        >
                            SUBMIT OFFERING
                        </button>
                    </motion.form>
                )}

                {/* STEP 3: PACT (Success) */}
                {step === 'PACT' && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8">
                        {isLounge ? (
                            <div className="text-[var(--color-lounge-text)]">
                                <p className="text-xl mb-4">Thank you, {formData.name}.</p>
                                <p className="opacity-70">We await your arrival at {formData.time} with {formData.guests} guests.</p>
                            </div>
                        ) : (
                            <div className="relative border p-8 border-[var(--color-vampire-secondary)] bg-zinc-900/90 text-left font-mono text-xs md:text-sm text-red-500 shadow-[inset_0_0_50px_rgba(255,0,0,0.2)]">
                                <div className="absolute top-2 right-2 border-2 border-red-600 p-1 transform rotate-12 opacity-80">
                                    <span className="text-xl font-black text-red-600 animate-pulse">ACCEPTED</span>
                                </div>

                                <p className="mb-4 text-center text-white/50">--- BLOOD PACT CONTRACT #666 ---</p>
                                <p className="mb-4">
                                    I, <span className="font-bold text-white text-lg border-b border-red-600">{formData.name}</span>, HEREBY PLEDGE MY SOUL TO PABLOS TEQUILA BAR.
                                </p>
                                <p className="mb-4">
                                    DATE: <span className="text-white">TONIGHT</span> <br />
                                    TIME: <span className="text-white">{formData.time}</span> <br />
                                    VESSALS: <span className="text-white">{formData.guests}</span>
                                </p>
                                <p className="mb-8 italic opacity-70">
                                    "Enter freely and of your own will. Leave some of the happiness you bring."
                                </p>
                                <div className="w-full h-16 border-b-2 border-dashed border-red-900 flex items-end justify-center pb-2 relative">
                                    <span className="font-serif text-3xl text-red-600 opacity-90 rotate-[-5deg] absolute bottom-2">{formData.name}</span>
                                    <span className="text-[10px] text-red-900 opacity-50 absolute bottom-[-20px]">(Signed in Blood)</span>
                                </div>
                            </div>
                        )}
                        <button onClick={() => setStep('DETAILS')} className="mt-8 text-xs underline opacity-50 hover:opacity-100">Make another reservation</button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

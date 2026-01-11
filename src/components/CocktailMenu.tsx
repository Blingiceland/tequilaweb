"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import NeonMenuHeader from "./effects/NeonMenuHeader";
import Image from "next/image";

interface Drink {
    name: string;
    description: string;
    price: string;
    vampireName?: string;
    vampireDesc?: string;
    image?: string;
}

const ELIXIRS: Drink[] = [
    {
        name: "Classic Margarita",
        description: "Tequila Blanco, Cointreau, fresh lime juice, salt rim.",
        price: "2400 ISK",
        vampireName: "The Sanguine Saint",
        vampireDesc: "Tequila infused with blood orange, black salt rim.",
        image: "/images/The_Sanguine_Saint.png"
    },
    {
        name: "Tequila Sunrise",
        description: "Tequila, orange juice, grenadine syrup.",
        price: "2200 ISK",
        vampireName: "Eternal Sunset",
        vampireDesc: "Layered shadows, pomegranate molasses, orange haze.",
        image: "/images/Eternal_Sunset.png"
    },
    {
        name: "Paloma",
        description: "Tequila, grapefruit soda, lime wedge.",
        price: "2300 ISK",
        vampireName: "Graveyard Dust",
        vampireDesc: "Mezcal, tart grapefruit, smoked volcanic salt.",
        image: "/images/Graveyard_Dust.png"
    },
    {
        name: "Añejo Old Fashioned",
        description: "Añejo Tequila, agave syrup, angostura bitters.",
        price: "2800 ISK",
        vampireName: "Stake Through The Heart",
        vampireDesc: "Extra Añejo, spicy bitters, garnished with a wooden spike.",
        image: "/images/A_Stake_Through_The_Heart.png"
    },
    {
        name: "Negroni",
        description: "Tequila, Campari, Sweet Vermouth.",
        price: "2600 ISK",
        vampireName: "Crimson Peak",
        vampireDesc: "Smoky and bitter. A Negroni for the immortal.",
        image: "/images/Crimson_Peak.png"
    },
    {
        name: "Margarita",
        description: "Tequila, lime, salt.",
        price: "2400 ISK",
        vampireName: "La Llorona",
        vampireDesc: "Ghost's tears. Salty, dry, and razor sharp.",
        image: "/images/La_Llorona.png"
    },
    {
        name: "Ginger Cocktail",
        description: "Tequila, ginger, currants.",
        price: "2500 ISK",
        vampireName: "Lucifer's Reach",
        vampireDesc: "Spicy ginger bleeding with sweet currants.",
        image: "/images/Lucifers_Reach.png"
    },
    {
        name: "Blackberry Basil",
        description: "Tequila, basil, blackberries.",
        price: "2700 ISK",
        vampireName: "Midnight Garden",
        vampireDesc: "Fresh basil and crushed dark blackberries.",
        image: "/images/Midnight_Garden.png"
    },
];

const POTIONS: Drink[] = [
    {
        name: "Blanco Shot",
        description: "Pure Blue Agave, unaged.",
        price: "1500 ISK",
        vampireName: "Holy Water",
        vampireDesc: "Crystal clear Agave with a hidden inferno. (Spicy)",
        image: "/images/Holy_Water.png"
    },
    {
        name: "Reposado Shot",
        description: "Rested in oak barrels.",
        price: "1700 ISK",
        vampireName: "Earth's Blood",
        vampireDesc: "Oak-aged, deep, and earthy.",
        image: "/images/The_Antidote.png"
    },
    {
        name: "Añejo Shot",
        description: "Aged 1-3 years.",
        price: "2000 ISK",
        vampireName: "Ancient Rot",
        vampireDesc: "Thick, black, and herbal-sweet.",
        image: "/images/Venom.png"
    },
    {
        name: "Coffee Tequila",
        description: "Rich coffee infusion.",
        price: "1600 ISK",
        vampireName: "Coffin Nail",
        vampireDesc: "Jet black Coffee-Agave fusion.",
        image: "/images/Coffin_Nail.png"
    },
    {
        name: "Chili Tequila",
        description: "Spicy kick.",
        price: "1600 ISK",
        vampireName: "Hellfire",
        vampireDesc: "Smoked Mezcal and blazing chili heat.",
        image: "/images/Hellfire.png"
    },
    {
        name: "Mezcal Joven",
        description: "Smoky agave spirit.",
        price: "1800 ISK",
        vampireName: "Smoke & Mirrors",
        vampireDesc: "Pure bonfire smoke and wood.",
        image: "/images/Smoke_And_Mirrors.png"
    },
    {
        name: "Coconut Tequila",
        description: "Tropical sweetness.",
        price: "1600 ISK",
        vampireName: "Pale Ghost",
        vampireDesc: "Ice cold cacao and cream. Dessert for the dead.",
        image: "/images/Pale_Ghost.png"
    },
    {
        name: "Herbal Shot",
        description: "Secret herbal blend.",
        price: "1900 ISK",
        vampireName: "Viper Bite",
        vampireDesc: "Electric melon and numbing herbs.",
        image: "/images/Viper_Bite.png"
    },
];

const TEQUILAS: Drink[] = [
    {
        name: "Don Julio 1942",
        description: "Añejo, warm oak, vanilla, roasted agave.",
        price: "4500 ISK",
        vampireName: "The 1942 Purge",
        vampireDesc: "Aged in isolation since the dark times.",
    },
    {
        name: "Clase Azul Reposado",
        description: "Smooth, caramel, vanilla, iconic ceramic bottle.",
        price: "5500 ISK",
        vampireName: "Blue Soul",
        vampireDesc: "Trapped spirit in a ceramic prison.",
    },
    {
        name: "Fortaleza Blanco",
        description: "Pure, stone-crushed, citrus, olive, earth.",
        price: "2900 ISK",
        vampireName: "Fortress of Bone",
        vampireDesc: "Crushed stone and mineral essence.",
    },
    {
        name: "Reserva de la Familia",
        description: "Extra Añejo, cognac-like, complex wood.",
        price: "4900 ISK",
        vampireName: "Family Secret",
        vampireDesc: "Buried in the cellar for generations.",
    },
    {
        name: "Casa Dragones Joven",
        description: "Master blend, pear, spice, clean finish.",
        price: "5900 ISK",
        vampireName: "Dragon's Blood",
        vampireDesc: "Clear fire from the beast itself.",
    },
    {
        name: "Maestro Dobel Diamante",
        description: "Cristalino, filtered añejo, smooth sweetness.",
        price: "2400 ISK",
        vampireName: "Diamond Dust",
        vampireDesc: "Invisible age, crystal clear deception.",
    },
    {
        name: "Cascahuín Tahona",
        description: "High proof, unfiltered, rustic agave.",
        price: "2600 ISK",
        vampireName: "Stone Crusher",
        vampireDesc: "Raw, brutal, heavy earth weight.",
    },
    {
        name: "Ocho Añejo",
        description: "Single estate, terroir driven, oak spice.",
        price: "2100 ISK",
        vampireName: "Eight Eternities",
        vampireDesc: "Time is a flat circle.",
    },
];

export default function CocktailMenu() {
    const { theme } = useTheme();
    const isLounge = theme === "lounge";

    const containerClass = `p-6 border transition-all duration-500 rounded-sm
    ${isLounge
            ? 'border-[var(--color-lounge-highlight)] bg-black/20 text-[var(--color-lounge-text)]'
            : 'border-[var(--color-vampire-accent)] bg-black/60 shadow-[0_0_10px_rgba(255,0,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] text-[var(--color-vampire-text)]'
        }`;

    const tequilaListClass = `p-4 border-b transition-all duration-300 flex justify-between items-center group
    ${isLounge
            ? 'border-[var(--color-lounge-highlight)]/30 hover:bg-[var(--color-lounge-highlight)]/10 text-[var(--color-lounge-text)]'
            : 'border-[var(--color-vampire-secondary)]/30 hover:bg-[var(--color-vampire-secondary)]/10 text-[var(--color-vampire-text)]'
        }`;

    return (
        <div className="py-20 px-6 w-full max-w-6xl mx-auto">

            {/* ELIXIRS SECTION */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-24">
                <div className="text-center mb-12">
                    {isLounge ? (
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-lounge-text)]">
                            Today's Signatures
                        </h2>
                    ) : (
                        <NeonMenuHeader text="TODAY'S ELIXIRS" color="red" />
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ELIXIRS.map((drink, index) => (
                        <motion.div
                            key={`elixir-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-lg ${isLounge
                                ? 'bg-[var(--color-lounge-secondary)] border border-[var(--color-lounge-accent)]'
                                : 'bg-zinc-950/80 border border-zinc-800 hover:border-[var(--color-vampire-secondary)]'
                                } transition-all duration-300 hover:scale-105`}
                        >
                            {/* Image */}
                            {drink.image && (
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={drink.image}
                                        alt={isLounge ? drink.name : (drink.vampireName || drink.name)}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className={`text-lg font-bold ${!isLounge && 'uppercase tracking-wider text-[var(--color-vampire-secondary)]'
                                        }`}>
                                        {isLounge ? drink.name : (drink.vampireName || drink.name)}
                                    </h3>
                                    <span className={`text-sm opacity-80 whitespace-nowrap ml-2 ${!isLounge && 'text-[var(--color-vampire-accent)] font-mono'
                                        }`}>
                                        {drink.price}
                                    </span>
                                </div>
                                <div className={`h-px w-full my-2 ${isLounge ? 'bg-[var(--color-lounge-highlight)] opacity-30' : 'bg-gradient-to-r from-[var(--color-vampire-secondary)] to-transparent'
                                    }`} />
                                <p className={`text-xs opacity-90 ${isLounge ? 'font-light italic' : 'font-bold tracking-wide'
                                    }`}>
                                    {isLounge ? drink.description : (drink.vampireDesc || drink.description)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* TEQUILA LIBRARY SECTION - TEMPORARILY REMOVED */}
            {/* User will add comprehensive tequila list later */}
            {/*
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-24">
                <div className="text-center mb-12">
                    {isLounge ? (
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-lounge-text)]">
                            Tequila Library
                        </h2>
                    ) : (
                        <BleedingHeader dripColor="#d946ef">
                            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-nosifer)] text-[#d946ef] tracking-widest">
                                FORBIDDEN STOCKS
                            </h2>
                        </BleedingHeader>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {TEQUILAS.map((drink, index) => (
                        <motion.div
                            key={`tequila-${index}`}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={tequilaListClass}
                        >
                            <div className="flex flex-col">
                                <span className={`text-lg font-bold ${!isLounge && 'uppercase text-[var(--color-vampire-highlight)]'}`}>
                                    {isLounge ? drink.name : (drink.vampireName || drink.name)}
                                </span>
                                <span className="text-xs opacity-60">
                                    {isLounge ? drink.description : (drink.vampireDesc || drink.description)}
                                </span>
                            </div>
                            <span className={`font-mono text-sm ${isLounge ? 'opacity-80' : 'text-[var(--color-vampire-accent)]'}`}>
                                {drink.price}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            */}


            {/* POTIONS SECTION */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="text-center mb-12">
                    {isLounge ? (
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-lounge-text)] opacity-80">
                            Agave Spirits
                        </h2>
                    ) : (
                        <NeonMenuHeader text="POTIONS" color="green" />
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {POTIONS.map((drink, index) => (
                        <motion.div
                            key={`potion-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-lg ${isLounge
                                ? 'bg-[var(--color-lounge-secondary)] border border-[var(--color-lounge-accent)]'
                                : 'bg-zinc-950/80 border border-zinc-800 hover:border-[var(--color-vampire-green)]'
                                } transition-all duration-300 hover:scale-105`}
                        >
                            {/* Image */}
                            {drink.image && (
                                <div className="relative w-full aspect-square overflow-hidden">
                                    <Image
                                        src={drink.image}
                                        alt={isLounge ? drink.name : (drink.vampireName || drink.name)}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className={`text-base font-bold ${!isLounge && 'uppercase tracking-wider text-[var(--color-vampire-green)]'
                                        }`}>
                                        {isLounge ? drink.name : (drink.vampireName || drink.name)}
                                    </h3>
                                    <span className={`text-xs opacity-80 whitespace-nowrap ml-2 ${!isLounge && 'text-[var(--color-vampire-green)] font-mono'
                                        }`}>
                                        {drink.price}
                                    </span>
                                </div>
                                <div className={`h-px w-full my-2 ${isLounge ? 'bg-[var(--color-lounge-highlight)] opacity-30' : 'bg-gradient-to-r from-[var(--color-vampire-green)] to-transparent'
                                    }`} />
                                <p className={`text-xs opacity-90 ${isLounge ? 'font-light italic' : 'font-bold tracking-wide'
                                    }`}>
                                    {isLounge ? drink.description : (drink.vampireDesc || drink.description)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

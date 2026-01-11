"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

interface Drink {
    name: string;
    description: string;
    price: string;
    vampireName?: string;
    vampireDesc?: string;
}

const ELIXIRS: Drink[] = [
    {
        name: "Classic Margarita",
        description: "Tequila Blanco, Cointreau, fresh lime juice, salt rim.",
        price: "2400 ISK",
        vampireName: "The Sanguine Saint",
        vampireDesc: "Tequila infused with blood orange, black salt rim.",
    },
    {
        name: "Tequila Sunrise",
        description: "Tequila, orange juice, grenadine syrup.",
        price: "2200 ISK",
        vampireName: "Eternal Sunset",
        vampireDesc: "Layered shadows, pomegranate molasses, orange haze.",
    },
    {
        name: "Paloma",
        description: "Tequila, grapefruit soda, lime wedge.",
        price: "2300 ISK",
        vampireName: "Graveyard Dust",
        vampireDesc: "Mezcal, tart grapefruit, smoked volcanic salt.",
    },
    {
        name: "Añejo Old Fashioned",
        description: "Añejo Tequila, agave syrup, angostura bitters.",
        price: "2800 ISK",
        vampireName: "Stake Through The Heart",
        vampireDesc: "Extra Añejo, spicy bitters, garnished with a wooden spike.",
    },
    {
        name: "Espresso Martini",
        description: "Tequila Reposado, coffee liqueur, fresh espresso.",
        price: "2600 ISK",
        vampireName: "Midnight Wake",
        vampireDesc: "Cold brew, dark cacao, and a drop of adrenaline.",
    },
    {
        name: "Spicy Margarita",
        description: "Tequila, jalapeño simple syrup, lime, tajin.",
        price: "2500 ISK",
        vampireName: "Diablo's Breath",
        vampireDesc: "Ghost pepper infused tequila, red chili rim.",
    },
    {
        name: "Oaxaca Negroni",
        description: "Mezcal, Campari, Sweet Vermouth.",
        price: "2700 ISK",
        vampireName: "Blood Pact",
        vampireDesc: "Bitter red herbs, smoke, and an iron finish.",
    },
    {
        name: "Tequila Cosmo",
        description: "Blanco, cranberry, lime, triple sec.",
        price: "2400 ISK",
        vampireName: "Crimson Veil",
        vampireDesc: "Deep red berry reduction, citrus essence.",
    },
    {
        name: "Blue Lagoon",
        description: "Tequila, Blue Curacao, lemonade.",
        price: "2200 ISK",
        vampireName: "Spirit Mist",
        vampireDesc: "Glowing blue tonic, dry ice fog.",
    },
    {
        name: "Tommy's Margarita",
        description: "Tequila, agave nectar, lime juice.",
        price: "2300 ISK",
        vampireName: "Venomous Kiss",
        vampireDesc: "Pure agave venom, sour citrus bite.",
    },
];

const POTIONS: Drink[] = [
    {
        name: "Blanco Shot",
        description: "Pure Blue Agave, unaged.",
        price: "1500 ISK",
        vampireName: "Holy Water",
        vampireDesc: "Burns the unworthy.",
    },
    {
        name: "Reposado Shot",
        description: "Rested in oak barrels.",
        price: "1700 ISK",
        vampireName: "Earth's Blood",
        vampireDesc: "Aged in coffin wood.",
    },
    {
        name: "Añejo Shot",
        description: "Aged 1-3 years.",
        price: "2000 ISK",
        vampireName: "Ancient Rot",
        vampireDesc: "Dark, decaying sweetness.",
    },
    {
        name: "Coffee Tequila",
        description: "Rich coffee infusion.",
        price: "1600 ISK",
        vampireName: "Coffin Nail",
        vampireDesc: "Black as night, twice as dead.",
    },
    {
        name: "Chili Tequila",
        description: "Spicy kick.",
        price: "1600 ISK",
        vampireName: "Hellfire",
        vampireDesc: "Liquid brimstone.",
    },
    {
        name: "Mezcal Joven",
        description: "Smoky agave spirit.",
        price: "1800 ISK",
        vampireName: "Smoke & Mirrors",
        vampireDesc: "Inhaling a bonfire.",
    },
    {
        name: "Coconut Tequila",
        description: "Tropical sweetness.",
        price: "1600 ISK",
        vampireName: "Pale Ghost",
        vampireDesc: "Sweet, white, and vanishing.",
    },
    {
        name: "Herbal Shot",
        description: "Secret herbal blend.",
        price: "1900 ISK",
        vampireName: "Viper Bite",
        vampireDesc: "Green poison, instant paralysis.",
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
                <h2 className={`text-4xl md:text-5xl text-center mb-12 font-bold 
            ${isLounge ? 'font-serif text-[var(--color-lounge-text)]' : 'font-[family-name:var(--font-nosifer)] text-[var(--color-vampire-secondary)] tracking-widest'}`}
                >
                    {isLounge ? "Signatures" : "ELIXIRS"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ELIXIRS.map((drink, index) => (
                        <motion.div
                            key={`elixir-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={containerClass}
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className={`text-xl font-bold ${!isLounge && 'uppercase tracking-wider text-[var(--color-vampire-secondary)]'}`}>
                                    {isLounge ? drink.name : (drink.vampireName || drink.name)}
                                </h3>
                                <span className={`text-lg opacity-80 whitespace-nowrap ml-4 ${!isLounge && 'text-[var(--color-vampire-accent)] font-mono'}`}>
                                    {drink.price}
                                </span>
                            </div>
                            <div className={`h-px w-full my-2 ${isLounge ? 'bg-[var(--color-lounge-highlight)] opacity-30' : 'bg-gradient-to-r from-[var(--color-vampire-secondary)] to-transparent'}`} />
                            <p className={`text-sm opacity-90 ${isLounge ? 'font-light italic' : 'font-bold tracking-wide'}`}>
                                {isLounge ? drink.description : (drink.vampireDesc || drink.description)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* TEQUILA LIBRARY SECTION */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-24">
                <h2 className={`text-3xl md:text-4xl text-center mb-12 font-bold 
            ${isLounge ? 'font-serif text-[var(--color-lounge-text)]' : 'font-[family-name:var(--font-nosifer)] text-[var(--color-vampire-highlight)] tracking-widest'}`}
                >
                    {isLounge ? "Tequila Library" : "FORBIDDEN STOCKS"}
                </h2>

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

            {/* POTIONS SECTION */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <h2 className={`text-3xl md:text-4xl text-center mb-12 font-bold 
            ${isLounge ? 'font-serif text-[var(--color-lounge-text)] opacity-80' : 'font-[family-name:var(--font-nosifer)] text-[var(--color-vampire-accent)] tracking-widest'}`}
                >
                    {isLounge ? "Agave Spirits" : "POTIONS"}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {POTIONS.map((drink, index) => (
                        <motion.div
                            key={`potion-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={`p-4 text-center border transition-all duration-300 rounded-sm
                ${isLounge
                                    ? 'border-[var(--color-lounge-accent)] hover:border-[var(--color-lounge-highlight)]'
                                    : 'border-zinc-800 hover:border-[var(--color-vampire-secondary)] bg-zinc-950/80 hover:scale-105'
                                }`}
                        >
                            <h3 className={`font-bold mb-1 ${!isLounge && 'text-[var(--color-vampire-text)] uppercase text-sm'}`}>
                                {isLounge ? drink.name : (drink.vampireName || drink.name)}
                            </h3>
                            <p className={`text-xs mb-2 opacity-70`}>
                                {isLounge ? drink.description : (drink.vampireDesc || drink.description)}
                            </p>
                            <span className={`text-sm font-mono ${isLounge ? 'text-[var(--color-lounge-highlight)]' : 'text-[var(--color-vampire-accent)]'}`}>
                                {drink.price}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

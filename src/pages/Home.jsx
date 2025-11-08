import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  // Define custom bronze gradient for reusable use on text and buttons
  const bronzeGradient = "bg-gradient-to-r from-amber-600 to-amber-800";
  const bronzeTextGradient =
    "bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 bg-clip-text text-transparent";

  // **1. Main container is set to deep black background (bg-stone-950)**
  return (
    <div className="bg-stone-950 min-h-screen py-24">
      <div className="container mx-auto px-6">
        {/* --- Hero Section --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section (md:order-1 for mobile readability) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:order-1 order-2"
          >
            {/* **Styled Title: Elegant, modern font with a bronze metallic sheen** */}
            <h1
              className={`
                text-5xl md:text-7xl font-extralight mb-6 leading-tight 
                ${bronzeTextGradient} 
                drop-shadow-lg
            `}
            >
              Mayfield West <br /> Kebabs & Charcoal Chicken
            </h1>

            {/* **Text Color adjusted for dark background and styled with serif font** */}
            <p className="text-xl text-stone-300 mb-10 max-w-lg font-serif italic">
              "Discover the authentic taste of freshly grilled kebabs, charcoal
              chicken, and classic Mediterranean flavors — cooked to perfection
              using our family’s three-generation-old recipes."
            </p>

            <div className="flex gap-4">
              {/* **Button styled with dark bronze gradient and prominent shadow** */}
              <Link
                to="/menu"
                className={`
                  px-8 py-4 rounded-xl ${bronzeGradient} text-white font-semibold text-lg uppercase
                  shadow-xl shadow-amber-900/50 
                  hover:scale-[1.03] hover:brightness-110 
                  transition-all duration-300
                `}
              >
                View Menu
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative md:order-2 order-1"
          >
            {/* **Image Container: Subtle dark background and elegant rounded corners** */}
            <div className="w-full h-[400px] md:h-[500px] bg-stone-900 rounded-3xl overflow-hidden shadow-2xl shadow-black/80">
              <img
                // 🌟 UPDATED PATH: Image from the public folder root
                src="/kebabs.jpg"
                alt="Signature Kebabs & Charcoal Chicken"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                // Placeholder fallback added for development
                onError={e => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x600/1c1917/ffffff?text=HERO+IMAGE";
                }}
              />
            </div>

            {/* **Subtle Bronze Glow Effect on the Image Border** */}
            <div className="absolute inset-0 rounded-3xl ring-4 ring-amber-700/30 pointer-events-none" />
          </motion.div>
        </div>

        {/* --- Features Section --- */}
        <motion.section
          className="mt-28 grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            {
              title: "Culinary Precision",
              desc:
                "Prepared daily using premium ingredients and authentic techniques.",
              icon: "🔪"
            },
            {
              title: "Seamless Service",
              desc:
                "Order online or pick up from our Mayfield West store — quick & easy.",
              icon: "🛎️"
            },
            {
              title: "Legacy Recipes",
              desc:
                "Three generations perfecting flavors you can’t find anywhere else.",
              icon: "📜"
            }
          ].map((f, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ delay: i * 0.1 }}
              // **Card styling: Dark background, bronze border on hover**
              className="group p-8 rounded-xl shadow-xl shadow-black/60 bg-stone-900 
                         hover:shadow-amber-900/70 hover:ring-2 hover:ring-amber-700 
                         hover:-translate-y-2 transition-all duration-300 border-t border-amber-800/10"
            >
              {/* **Icon style: Bronze accent color** */}
              <div className="text-4xl mb-4 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h4 className="font-semibold text-xl mb-2 text-stone-100">
                {f.title}
              </h4>
              <p className="text-base text-stone-400">
                {f.desc}
              </p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container py-16 text-gray-900">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-gray-800 bg-clip-text text-transparent leading-tight">
            Mayfield West <br /> Kebabs & Charcoal Chicken
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Discover the authentic taste of freshly grilled kebabs, charcoal
            chicken, and classic Mediterranean flavors — cooked to perfection
            using our family’s three-generation-old recipes.
          </p>

          <div className="flex gap-4">
            <Link
              to="/menu"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
            >
              VIEW MENU
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full h-80 md:h-96 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
            <img
              src="/images/hero-kebab.jpg" // add a real image in public/images
              alt="Kebabs & Charcoal Chicken"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
        className="mt-20 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {[
          {
            title: "Freshly Cooked",
            desc:
              "Prepared daily using premium ingredients and authentic techniques.",
            icon: "🔥"
          },
          {
            title: "Takeaway & Delivery",
            desc:
              "Order online or pick up from our Mayfield West store — quick & easy.",
            icon: "🚗"
          },
          {
            title: "Family Recipes",
            desc:
              "Three generations perfecting flavors you can’t find anywhere else.",
            icon: "🍗"
          }
        ].map((f, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-2xl shadow-md bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {f.icon}
            </div>
            <h4 className="font-semibold text-lg mb-2 text-gray-800">
              {f.title}
            </h4>
            <p className="text-sm text-gray-600">
              {f.desc}
            </p>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}

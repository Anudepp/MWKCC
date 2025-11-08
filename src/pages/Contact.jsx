import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // Reusable styles for the premium theme, mirrored from Menu.jsx/Home.jsx
  const BRONZE_ACCENT = "text-amber-500";
  const TEXT_PRIMARY = "text-stone-100";
  const TEXT_SECONDARY = "text-stone-400";
  const CARD_BG = "bg-stone-900";
  const CARD_BORDER = "border-amber-700/30";
  const BRONZE_GRADIENT =
    "bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 bg-clip-text text-transparent";
  const HOVER_SHADOW = "hover:shadow-lg hover:shadow-black/70";

  const MAP_ADDRESS = "402 Maitland Rd, Mayfield West NSW 2304";
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    MAP_ADDRESS
  )}`;
  const EMAIL_ADDRESS = "mwkcc@hotmail.com";

  // Simple Map Pin Icon SVG
  const MapPinIcon = props =>
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21.7C17.3 17 20 13 20 10A8 8 0 0 0 12 2a8 8 0 0 0-8 8c0 3 2.7 7 8 11.7z" />
      <circle cx="12" cy="10" r="3" />
    </svg>;

  return (
    // **Page Background: Deep Black**
    <div className="bg-stone-950 min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* **Title: Consistent Bronze Gradient and Font** */}
          <h1
            className={`text-5xl md:text-6xl font-extralight text-center mb-10 tracking-widest ${BRONZE_GRADIENT}`}
          >
            Find Us
          </h1>

          {/* Contact Details Card */}
          <div
            className={`${CARD_BG} p-8 rounded-xl shadow-2xl shadow-black/80 border ${CARD_BORDER} space-y-8`}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Information */}
              <div className="space-y-6">
                <h2 className={`text-3xl font-semibold ${BRONZE_ACCENT}`}>
                  Our Details
                </h2>

                {/* Address Block */}
                <div>
                  <p className={`font-bold text-lg ${TEXT_PRIMARY} mb-1`}>
                    Address
                  </p>
                  <p className={`text-base ${TEXT_SECONDARY}`}>
                    {MAP_ADDRESS}
                  </p>
                </div>

                {/* Email Block (NEW) */}
                <div>
                  <p className={`font-bold text-lg ${TEXT_PRIMARY} mb-1`}>
                    For all enquiries & orders
                  </p>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className={`text-base ${BRONZE_ACCENT} hover:text-amber-300 transition-colors`}
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>

                {/* Hours Block */}
                <div>
                  <p className={`font-bold text-lg ${TEXT_PRIMARY} mb-1`}>
                    Trading Hours
                  </p>
                  <p className={`text-base ${TEXT_PRIMARY} font-semibold`}>
                    Wed – Sat:
                  </p>
                  <p className={`text-base ${TEXT_SECONDARY}`}>
                    11:00 AM – 08:30 PM
                  </p>
                  <p className={`text-base ${TEXT_PRIMARY} font-semibold mt-2`}>
                    Closed:
                  </p>
                  <p className={`text-base ${TEXT_SECONDARY}`}>
                    Sunday, Monday, Tuesday
                  </p>
                </div>
              </div>

              {/* Map Link / Interactive Element (UPDATED) */}
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-80 rounded-xl overflow-hidden shadow-2xl border border-amber-700/50 flex flex-col items-center justify-center p-4 bg-stone-900/50 backdrop-blur-sm group hover:bg-stone-800 transition duration-300"
              >
                <MapPinIcon
                  className={`w-16 h-16 ${BRONZE_ACCENT} mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <p
                  className={`text-xl font-bold ${TEXT_PRIMARY} group-hover:text-amber-300 transition-colors`}
                >
                  Find Us on Google Maps
                </p>
                <p className={`text-sm ${TEXT_SECONDARY} text-center mt-1`}>
                  {MAP_ADDRESS}
                </p>
                <span
                  className={`text-xs mt-3 px-3 py-1 rounded-full ${BRONZE_ACCENT} border border-amber-700/50 bg-stone-950/50`}
                >
                  Click to Open
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

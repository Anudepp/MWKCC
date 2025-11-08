import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const ORDER_URL = "https://tcpsvr121.clickpos.net/fpod/";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Theme constants
  const BRONZE_ACCENT = "text-amber-500";
  const BRONZE_CTA_BG = "bg-amber-700";
  const BRONZE_GRADIENT =
    "bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 bg-clip-text text-transparent";
  const TEXT_LIGHT = "text-stone-100";
  const TEXT_SECONDARY_DARK = "text-stone-400";
  const NAVBAR_BG = "bg-stone-950/95 backdrop-blur-sm"; // Dark, slightly blurred background
  const HOVER_SHADOW = "hover:shadow-lg hover:shadow-black/70";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    // **HEADER: Sticky, Dark, and Translucent**
    <header
      className={`${NAVBAR_BG} sticky top-0 z-50 shadow-2xl shadow-black/70 border-b border-amber-800/20`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-amber-800/20 rounded-full flex items-center justify-center text-xl font-extrabold text-amber-300 border border-amber-700/50 group-hover:scale-105 transition-transform duration-300">
            M
          </div>
          <div>
            {/* **Logo Title: Bronze Gradient** */}
            <div
              className={`text-xl font-extrabold leading-tight ${BRONZE_GRADIENT} tracking-wider`}
            >
              Mayfield West
            </div>
            <div className={`text-xs ${TEXT_SECONDARY_DARK}`}>
              Kebabs & Charcoal Chicken
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link =>
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-all duration-300 text-base uppercase tracking-wider 
                ${isActive
                  ? `${BRONZE_ACCENT} font-bold border-b-2 border-amber-500`
                  : `${TEXT_LIGHT} font-medium hover:${BRONZE_ACCENT}`}`}
            >
              {link.label}
            </NavLink>
          )}

          {/* **ORDER ONLINE Button: Primary Bronze CTA Style** */}
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ml-4 px-6 py-3 ${BRONZE_CTA_BG} ${TEXT_LIGHT} rounded-full text-sm font-bold uppercase tracking-widest
              shadow-lg shadow-amber-900/60
              hover:bg-amber-600 hover:scale-[1.03] transition-all duration-300
            `}
          >
            ORDER ONLINE
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-md border border-amber-700/50 ${BRONZE_ACCENT} hover:bg-amber-900/20 transition`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Dark Themed) */}
      <AnimatePresence>
        {open &&
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-stone-900 border-t border-amber-700/50 shadow-xl shadow-black/80 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {navLinks.map(link =>
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  // Mobile link styling
                  className={`py-3 ${TEXT_LIGHT} font-semibold border-b border-stone-800/50 hover:${BRONZE_ACCENT} transition-colors last:border-b-0`}
                >
                  {link.label}
                </Link>
              )}

              {/* Mobile CTA Button */}
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`mt-4 w-full text-center px-4 py-3 ${BRONZE_CTA_BG} ${TEXT_LIGHT} rounded-lg font-bold uppercase tracking-widest transition-all duration-300 hover:bg-amber-600`}
              >
                ORDER ONLINE
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>
  );
}

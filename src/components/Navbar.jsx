import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const ORDER_URL = "https://tcpsvr121.clickpos.net/fpod/";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-[#A67C52]">
            MWK
          </div>
          <div>
            <div className="text-lg font-extrabold text-gray-900 leading-tight">
              Mayfield West Kebabs & Charcoal Chicken
            </div>
            <div className="text-xs text-gray-500">
              402 Maitland Rd, Mayfield NSW 2304
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link =>
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${isActive
                  ? "text-[#A67C52] font-semibold"
                  : "text-gray-700 hover:text-[#A67C52]"}`}
            >
              {link.label}
            </NavLink>
          )}

          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-[#A67C52] text-white rounded-full text-sm font-semibold shadow hover:bg-[#8B5E34] transition-all"
          >
            ORDER ONLINE
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open &&
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {navLinks.map(link =>
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="py-2 text-gray-700 font-medium hover:text-[#A67C52] transition-colors"
                >
                  {link.label}
                </Link>
              )}

              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="py-2 text-[#A67C52] font-semibold"
              >
                ORDER ONLINE
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>
  );
}

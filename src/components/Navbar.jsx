import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ORDER_URL = "https://tcpsvr121.clickpos.net/fpod/";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-primary">
            MWK
          </div>
          <div>
            <div className="text-lg font-extrabold">
              Mayfield West Kebabs & Charcoal Chicken
            </div>
            <div className="text-xs text-gray-500">
              402 Maitland Rd, Mayfield NSW 2304
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"}
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"}
          >
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"}
          >
            Contact
          </NavLink>

          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 btn-primary"
          >
            ORDER ONLINE
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded border">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open &&
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="flex flex-col px-6 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">
              Home
            </Link>
            <Link to="/menu" onClick={() => setOpen(false)} className="py-2">
              Menu
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2">
              About
            </Link>
            <Link to="/gallery" onClick={() => setOpen(false)} className="py-2">
              Gallery
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">
              Contact
            </Link>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-primary font-semibold"
            >
              ORDER ONLINE
            </a>
          </div>
        </motion.div>}
    </header>
  );
}

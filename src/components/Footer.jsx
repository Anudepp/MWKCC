import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand Info */}
        <div className="flex flex-col md:flex-row items-center md:items-baseline text-center md:text-left gap-2 md:gap-4">
          <h4 className="text-white font-semibold text-base">
            Mayfield West Kebabs & Charcoal Chicken
          </h4>
          <p className="text-gray-400 text-sm">
            402 Maitland Rd, Mayfield NSW 2304
          </p>
          <p className="text-gray-400 text-sm">
            Wed–Sat 11:00AM – 08:30PM | Closed Sun–Tue
          </p>
        </div>

        {/* Divider (visible on desktop) */}
        <div className="hidden md:block h-6 w-px bg-gray-700" />

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/menu" className="hover:text-white transition-colors">
            Menu
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-2 text-xs text-gray-500">
        © {new Date().getFullYear()} MWKCC. All rights reserved.
      </div>
    </footer>
  );
}

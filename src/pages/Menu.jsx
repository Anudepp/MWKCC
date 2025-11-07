import React, { useState } from "react";
import { motion } from "framer-motion";
import menuData from "../data/menuData";

const tabs = [
  { key: "kebabs", label: "Kebabs" },
  { key: "burgers", label: "Burgers" },
  { key: "snackPacks", label: "Snack Packs" },
  { key: "charcoalChicken", label: "Charcoal Chicken" },
  { key: "fromTheFryer", label: "From The Fryer" },
  { key: "saladsAndSauces", label: "Salads & Sauces" },
  { key: "drinks", label: "Drinks" },
  { key: "greekSouvlaGyros", label: "Greek Souvla & Gyros" },
  { key: "catering", label: "Catering" }
];

export default function Menu() {
  const [active, setActive] = useState("kebabs");

  const PriceList = ({ prices }) =>
    <div className="text-right text-sm text-[#FFD700]">
      {Object.entries(prices).map(
        ([k, v]) =>
          typeof v === "object"
            ? <div key={k} className="mt-1">
                <div className="font-semibold text-[#FFD700]">
                  {k}
                </div>
                {Object.entries(v).map(([sub, price]) =>
                  <div key={sub}>
                    {sub}: ${price.toFixed(2)}
                  </div>
                )}
              </div>
            : <div key={k}>
                {k}: ${v.toFixed(2)}
              </div>
      )}
    </div>;

  const renderItems = data => {
    if (!data) return <p>No data available.</p>;

    return (
      <div className="space-y-6">
        {/* Basic Items */}
        {data.items &&
          <div className="space-y-4">
            {data.items.map((it, idx) =>
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.02 }}
                className="bg-[#1A1A1A]/90 text-[#F9F6EE] border border-[#A67C52] p-4 rounded-2xl shadow-lg hover:scale-[1.01] transition-all"
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <div className="font-semibold text-[#FFD700]">
                      {it.name}
                    </div>
                    {it.desc &&
                      <div className="text-sm text-gray-300">
                        {it.desc}
                      </div>}
                    {it.note &&
                      <div className="text-xs text-red-400 mt-1">
                        {it.note}
                      </div>}
                  </div>
                  <div className="text-right text-sm text-[#FFD700]">
                    {it.sizes
                      ? it.sizes.map(s =>
                          <div key={s.label}>
                            {s.label}: ${s.price.toFixed(2)}
                          </div>
                        )
                      : it.price
                        ? `$${it.price.toFixed(2)}`
                        : it.prices
                          ? <PriceList prices={it.prices} />
                          : it.priceText ? it.priceText : null}
                  </div>
                </div>

                {it.addOns &&
                  <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
                    {it.addOns.map((a, i) =>
                      <li key={i}>
                        {a.name} — ${a.price.toFixed(2)}
                      </li>
                    )}
                  </ul>}

                {it.details &&
                  <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
                    {it.details.map((d, i) =>
                      <li key={i}>
                        {d.name}: ${d.price.toFixed(2)}
                        {d.per && ` per ${d.per}`}
                        {d.perDozen && ` / Dozen: $${d.perDozen.toFixed(2)}`}
                        {d.note && ` (${d.note})`}
                      </li>
                    )}
                  </ul>}
              </motion.div>
            )}
          </div>}

        {/* Extras */}
        {data.extras &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Extras
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {data.extras.map((extra, idx) =>
                <li
                  key={idx}
                  className="flex justify-between bg-[#2B2B2B] px-3 py-2 rounded-lg border border-[#A67C52]"
                >
                  <span>
                    {extra.name}
                  </span>
                  <span className="text-[#FFD700]">
                    {extra.price
                      ? `$${extra.price.toFixed(2)}`
                      : extra.priceText}
                  </span>
                </li>
              )}
            </ul>
          </div>}

        {/* Meals */}
        {data.meals &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Meals</h3>
            <div className="space-y-3">
              {data.meals.map((m, i) =>
                <div
                  key={i}
                  className="bg-[#1A1A1A]/90 border border-[#A67C52] rounded-lg p-3"
                >
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold text-[#FFD700]">
                        {m.name}
                      </div>
                      {m.desc &&
                        <div className="text-sm text-gray-300">
                          {m.desc}
                        </div>}
                    </div>
                    <div className="text-[#FFD700] font-medium">
                      ${m.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>}

        {/* Snack Pack Prices */}
        {data.prices &&
          !data.items &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Options
            </h3>
            <PriceList prices={data.prices} />
          </div>}

        {/* Boxes */}
        {data.boxes &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Boxes</h3>
            <div className="space-y-3">
              {data.boxes.map((b, i) =>
                <div
                  key={i}
                  className="bg-[#1A1A1A]/90 border border-[#A67C52] rounded-lg p-3"
                >
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold text-[#FFD700]">
                        {b.name}
                      </div>
                      {b.desc &&
                        <div className="text-sm text-gray-300">
                          {b.desc}
                        </div>}
                    </div>
                    <PriceList prices={b.prices} />
                  </div>
                </div>
              )}
            </div>
          </div>}

        {/* Salads & Sauces */}
        {data.salads &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Salads
            </h3>
            {data.salads.map((s, i) =>
              <div
                key={i}
                className="flex justify-between bg-[#2B2B2B] p-3 rounded-lg border border-[#A67C52] mb-2"
              >
                <span>
                  {s.name}
                </span>
                <span className="text-[#FFD700]">
                  ${s.price.toFixed(2)}
                </span>
              </div>
            )}
          </div>}

        {data.sauces &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Sauces
            </h3>
            {data.sauces.map((s, i) =>
              <div
                key={i}
                className="flex justify-between bg-[#2B2B2B] p-3 rounded-lg border border-[#A67C52] mb-2"
              >
                <span>
                  {s.name}
                </span>
                <span className="text-[#FFD700]">
                  ${s.price.toFixed(2)}
                </span>
              </div>
            )}
          </div>}

        {/* Greek Souvla & Gyros */}
        {data.souvla &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Greek Souvla
            </h3>
            {data.souvla.map((s, i) =>
              <div
                key={i}
                className="flex justify-between bg-[#2B2B2B] p-3 rounded-lg border border-[#A67C52] mb-2"
              >
                <span>
                  {s.name}
                </span>
                <span className="text-[#FFD700]">
                  ${s.price.toFixed(2)}
                </span>
              </div>
            )}
          </div>}

        {data.gyros &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Gyros</h3>
            {data.gyros.map((g, i) =>
              <div
                key={i}
                className="flex justify-between bg-[#2B2B2B] p-3 rounded-lg border border-[#A67C52] mb-2"
              >
                <span>
                  {g.name}
                </span>
                <span className="text-[#FFD700]">
                  ${g.price.toFixed(2)}
                </span>
              </div>
            )}
          </div>}

        {data.souvlaBox &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              {data.souvlaBox.name}
            </h3>
            <div className="text-sm text-gray-300 mb-2">
              {data.souvlaBox.desc}
            </div>
            <PriceList prices={data.souvlaBox.prices} />
          </div>}

        {/* Catering specific */}
        {data.note &&
          <p className="text-sm text-gray-300 italic">
            {data.note}
          </p>}

        {/* Sauces Available (Kebabs) */}
        {data.saucesAvailable &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Available Sauces
            </h3>
            <p className="text-sm text-gray-300">
              {data.saucesAvailable.join(", ")}
            </p>
          </div>}

        {/* Gluten-free info */}
        {data.glutenFreePitta &&
          <div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              Gluten-Free Pitta
            </h3>
            <p className="text-sm text-gray-300">
              Available for an extra ${data.glutenFreePitta.price.toFixed(2)}
            </p>
          </div>}
      </div>
    );
  };

  return (
    <div className="container py-12 font-['Poppins']">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-[#FFD700] drop-shadow-lg tracking-wide">
        Our Menu
      </h1>

      <div className="bg-[#0F0F0F]/90 rounded-2xl shadow-lg overflow-hidden border border-[#A67C52]/50">
        {/* Tabs */}
        <div className="flex flex-wrap md:flex-nowrap bg-gradient-to-r from-[#8B0000] via-[#A67C52] to-[#000000] text-white">
          {tabs.map(t =>
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-3 md:flex-1 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${active ===
              t.key
                ? "bg-[#FFD700]/30 text-[#FFD700]"
                : "hover:bg-[#FFD700]/10"}`}
            >
              {t.label}
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-6 bg-[#1C1C1C]">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {renderItems(menuData[active])}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";

// 1. Full menu data defined here to keep the component self-contained
const menuData = {
  kebabs: {
    title: "Kebabs",
    note:
      "Standard price includes lettuce, tomato, cooked onion and your choice of sauce",
    items: [
      {
        name: "Lamb",
        sizes: [
          { label: "Small", price: 14.0 },
          { label: "Regular", price: 18.5 }
        ]
      },
      {
        name: "Chicken",
        sizes: [
          { label: "Small", price: 13.0 },
          { label: "Regular", price: 17.0 }
        ]
      },
      {
        name: "Mixed",
        sizes: [
          { label: "Small", price: 13.5 },
          { label: "Regular", price: 18.0 }
        ]
      },
      {
        name: "Seafood (fish, calamari or prawns)",
        sizes: [
          { label: "Small", price: 13.0 },
          { label: "Regular", price: 16.5 }
        ]
      },
      {
        name: "Falafel",
        sizes: [
          { label: "Small", price: 10.0 },
          { label: "Regular", price: 12.0 }
        ]
      },
      { name: "Chicken Schnitzel", sizes: [{ label: "Single", price: 17.0 }] }
    ],
    extras: [
      { name: "Cheese", price: 1.5 },
      { name: "Tabouli", price: 1.5 },
      { name: "Chips", price: 1.0 },
      { name: "Bacon", price: 3.5 },
      { name: "Pickles", price: 1.0 },
      { name: "Pineapple", price: 2.0 },
      { name: "Halloumi", price: 3.5 },
      { name: "Extra meat", priceText: "prices vary" }
    ],
    saucesAvailable: [
      "BBQ",
      "Tomato",
      "Chilli",
      "Sweet Chilli",
      "Mayonnaise",
      "Hummus",
      "Sour Cream",
      "Tzatziki",
      "Peri Peri",
      "Lemon & Herb",
      "Garlic Toum",
      "Mustard"
    ],
    glutenFreePitta: { price: 3.0 }
  },

  burgers: {
    title: "Burgers",
    items: [
      {
        name: "Plain Burger",
        price: 11.5,
        desc: "Beef pattie, lettuce, tomato, onion & beetroot",
        addOns: [
          { name: "Bacon", price: 3.5 },
          { name: "Pineapple", price: 2.0 },
          { name: "Egg", price: 1.0 },
          { name: "Cheese", price: 1.5 },
          { name: "Extra Pattie", price: 5.0 }
        ]
      },
      {
        name: "Works Burger",
        price: 18.5,
        desc:
          "Beef pattie, lettuce, tomato, onion, beetroot, bacon, cheese, pineapple & egg"
      },
      {
        name: "Big George Burger (double meat + double cheese + double bacon)",
        price: 22.5
      },
      {
        name: "Bacon & Egg Roll",
        price: 8.5,
        desc: "Bacon, egg + your choice of sauce"
      },
      {
        name: "Seafood Burger (fish, calamari or prawn)",
        price: 17.0,
        desc: "Lettuce, tomato & cheese; mayo or tartare"
      },
      {
        name:
          "Chicken Burger (chicken schnitzel, lettuce, tomato & cheese + mayonnaise)",
        price: 17.0
      }
    ]
  },

  snackPacks: {
    title: "Snack Packs",
    note:
      "Choice of meats, cheese, cooked onion & choice of sauce on a layer of chips",
    sizes: ["Small", "Medium", "Large", "Family"],
    prices: {
      chicken: { Small: 15.0, Medium: 23.0, Large: 33.0, Family: 58.0 },
      lamb: { Small: 17.0, Medium: 28.0, Large: 42.0, Family: 70.0 },
      mixed: { Small: 16.0, Medium: 26.0, Large: 38.0, Family: 66.0 }
    },
    boxes: [
      {
        name: "Papou Jim Box 'PJ'",
        desc: "Medium snack pack + 1/4 charcoal chicken + your choice of salad",
        prices: { chicken: 35.0, lamb: 40.0, mixed: 37.0 }
      },
      {
        name: "Super Box",
        desc: "Large snack pack + 1/2 charcoal chicken + your choice of salad",
        prices: { chicken: 52.0, lamb: 60.0, mixed: 57.0 }
      }
    ]
  },

  charcoalChicken: {
    title: "Charcoal Chicken",
    items: [
      { name: "1/4 Chicken", price: 8.0 },
      { name: "1/2 Chicken", price: 11.5 },
      { name: "Full Chicken", price: 21.0 },
      { name: "2 Full Chickens", price: 40.0 }
    ],
    meals: [
      {
        name: "Meal 1",
        desc: "1/4 Chicken + Medium Chips + Can of Drink",
        price: 18.0
      },
      {
        name: "Meal 1 (600ml)",
        desc: "1/4 Chicken + Medium Chips + 600ml Drink",
        price: 19.5
      },
      {
        name: "Meal 2",
        desc: "1/2 Chicken + Medium Chips + Can of Drink",
        price: 21.0
      },
      {
        name: "Meal 2 (600ml)",
        desc: "1/2 Chicken + Medium Chips + 600ml Drink",
        price: 22.5
      },
      {
        name: "Meal 3",
        desc: "Full Chicken + Large Chips + 1.25 litre Drink",
        price: 36.0
      },
      {
        name: "Meal 4",
        desc: "2 x Full Chickens + 1 x Family Chips + 2 x 1.25 litre Drinks",
        price: 64.0
      }
    ]
  },

  fromTheFryer: {
    title: "From the Fryer",
    items: [
      {
        name: "Chips",
        sizes: [
          { label: "Small", price: 4.5 },
          { label: "Medium", price: 6.5 },
          { label: "Large", price: 9.5 },
          { label: "Family", price: 18.0 }
        ]
      },
      { name: "Sweet Potato Fries", price: 11.0 },
      { name: "Potato Cake", price: 2.0 },
      { name: "Onion Rings", price: 10.0 },
      { name: "Chicken Nuggets (x3)", price: 2.0 },
      { name: "Chicken Schnitzel", price: 8.0 },
      { name: "Pluto Pup", price: 6.0 },
      { name: "Pineapple Fritter", price: 3.0 },
      { name: "Fish (Hoki) - battered", price: 11.0 },
      { name: "Fish (Hoki) - crumbed", price: 11.0 },
      { name: "Cocktail Fish (x6)", price: 15.0 },
      { name: "Crumbed Calamari (x6)", price: 15.0 },
      { name: "Crumbed Prawns (x6)", price: 15.0 }
    ]
  },

  saladsAndSauces: {
    title: "Salads & Sauces",
    items: [
      { name: "Small Salad", price: 6.0 },
      { name: "Medium Salad", price: 11.0 },
      { name: "Large Salad", price: 15.0 },
      { name: "Tzatziki", price: 2.5 },
      { name: "Peri Peri", price: 2.5 },
      { name: "Lemon & Herb", price: 2.5 },
      { name: "Garlic Toum", price: 2.5 },
      { name: "Gravy", price: 2.0 }
    ]
  },

  drinks: {
    title: "Drinks",
    items: [
      { name: "375ml can", price: 4.0 },
      { name: "600ml bottle", price: 6.0 },
      { name: "1.25 litre bottle", price: 7.0 },
      { name: "Sports Drink", price: 6.5 },
      { name: "600ml Water", price: 3.5 }
    ]
  },

  greekSouvlaGyros: {
    title: "Greek Style Souvla / Gyros / Souvla Box",
    items: [
      { name: "Greek Gyros - Chicken", price: 17.0 },
      { name: "Greek Gyros - Lamb", price: 18.5 },
      { name: "Greek Gyros - Mixed", price: 18.0 },
      {
        name: "Greek Souvla Box (Chicken)",
        desc: "200g meat, chips, Greek salad, 1 pita & tzatziki",
        price: 31.0
      },
      {
        name: "Greek Souvla Box (Lamb)",
        desc: "200g meat, chips, Greek salad, 1 pita & tzatziki",
        price: 35.0
      },
      {
        name: "Greek Souvla Box (Mixed)",
        desc: "200g meat, chips, Greek salad, 1 pita & tzatziki",
        price: 33.0
      },
      { name: "500g Chicken Souvla", price: 40.0 },
      { name: "1kg Chicken Souvla", price: 65.0 },
      { name: "500g Lamb Souvla", price: 50.0 },
      { name: "1kg Lamb Souvla", price: 80.0 }
    ]
  },

  catering: {
    title: "Catering Menu",
    items: [
      {
        name: "Chicken Platters - 2 whole chickens",
        price: 40.0,
        note: "each chicken cut into 4 pieces"
      },
      {
        name: "Greek Style Souvla Meats (500g)",
        prices: { Chicken: 40.0, Lamb: 50.0 }
      },
      {
        name: "Greek Style Souvla Meats (1kg)",
        prices: { Chicken: 65.0, Lamb: 80.0 }
      },
      { name: "Salad Platters", priceText: "$45 feeds between 8-12 people" },
      {
        name: "Hot Food Platters",
        details: [
          { name: "Cocktail Fish", price: 3.0, per: "piece", perDozen: 30.0 },
          { name: "Crumbed Prawns", price: 3.0, per: "piece", perDozen: 30.0 },
          {
            name: "Crumbed Calamari",
            price: 3.0,
            per: "piece",
            perDozen: 30.0
          },
          { name: "Falafels", price: 1.0, per: "piece", perDozen: 10.0 },
          {
            name: "Hot Chips - Family Box",
            price: 18.0,
            note: "feeds 6 people"
          },
          { name: "Sweet Potato Fries", price: 11.0 },
          { name: "Halloumi", price: 3.5 },
          { name: "Pita Bread", price: 1.0 }
        ]
      }
    ]
  }
};
// --------------------------------------------------------

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

  // Reusable styles for the premium theme
  const BRONZE_ACCENT = "text-amber-500";
  const TEXT_PRIMARY = "text-stone-100";
  const TEXT_SECONDARY = "text-stone-400";
  const CARD_BG = "bg-stone-900";
  const CARD_BORDER = "border-amber-700/30";
  const BRONZE_GRADIENT = "bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 bg-clip-text text-transparent";
  const HOVER_SHADOW = "hover:shadow-lg hover:shadow-black/70";

  const PriceList = ({ prices }) =>
    <div className={`text-right text-sm ${BRONZE_ACCENT}`}>
      {Object.entries(prices).map(
        ([k, v]) =>
          typeof v === "object"
            ? <div key={k} className="mt-1">
                <div className="font-semibold text-amber-300">
                  {k}
                </div>
                {Object.entries(v).map(([sub, price]) =>
                  <div key={sub} className="text-sm">
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
    if (!data || Object.keys(data).length === 0) return <p className={TEXT_SECONDARY}>Select a category to view items...</p>;

    return (
      <div className="space-y-8">
        {/* Basic Items (Handles all 'items' arrays including Salads/Sauces and Greek Souvla/Gyros) */}
        {data.items &&
          <div className="space-y-4">
            {data.items.map((it, idx) =>
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                // **Item Card Styling: Dark background, subtle bronze border, elevated shadow on hover**
                className={`${CARD_BG} ${TEXT_PRIMARY} ${CARD_BORDER} border p-5 rounded-xl shadow-md ${HOVER_SHADOW} hover:scale-[1.005] transition-all duration-300`}
              >
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    {/* **Item Name: Bronze Accent Color** */}
                    <div className={`font-semibold text-xl ${BRONZE_ACCENT} font-serif tracking-wide`}>
                      {it.name}
                    </div>
                    {it.desc &&
                      <div className={`text-sm ${TEXT_SECONDARY} max-w-lg italic`}>
                        {it.desc}
                      </div>}
                    {it.note &&
                      <div className="text-xs text-red-400 mt-1">
                        * {it.note}
                      </div>}
                  </div>
                  {/* **Price Display: Bronze Accent Color** */}
                  <div className={`text-right font-semibold ${BRONZE_ACCENT}`}>
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
                  <ul className={`mt-3 text-sm ${TEXT_SECONDARY} list-disc ml-5`}>
                    <p className="text-amber-600 font-medium mt-2">Add Ons:</p>
                    {it.addOns.map((a, i) =>
                      <li key={i}>
                        {a.name} — ${a.price.toFixed(2)}
                      </li>
                    )}
                  </ul>}

                {it.details &&
                  <ul className={`mt-3 text-sm ${TEXT_SECONDARY} list-disc ml-5`}>
                    {/* Title for the details section (used primarily in Catering) */}
                    <p className="text-amber-600 font-medium mt-2">Platter Options:</p>
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

        {/* --- Non-Item Sections (Extras, Meals, Boxes) --- */}
        {data.extras && renderSection(data.extras, "Extras & Add-ons", true)}
        {data.meals && renderSection(data.meals, "Chicken Meal Deals", false)}
        {/* Snack Pack Boxes */}
        {data.boxes && renderSection(data.boxes, "Special Boxes", false)}


        {/* Snack Pack Prices (Used only by 'snackPacks') */}
        {data.prices && !data.items && (
          <div>
            <h3 className={`text-3xl font-light ${BRONZE_ACCENT} mb-4 border-b border-amber-700/50 pb-2`}>
              Meat Selection Prices
            </h3>
            <div className={`${CARD_BG} ${CARD_BORDER} border rounded-lg p-4 shadow-md`}>
                <PriceList prices={data.prices} />
            </div>
          </div>
        )}

        {/* Notes, Sauces Available, Gluten-Free Info */}
        {data.note && <p className={`text-sm ${TEXT_SECONDARY} italic mt-4`}>* Note: {data.note}</p>}
        
        {data.saucesAvailable && 
          <div className="mt-6">
            <h3 className={`text-xl font-semibold ${BRONZE_ACCENT} mb-2`}>
              Available Sauces
            </h3>
            <p className={`text-sm ${TEXT_SECONDARY}`}>
              {data.saucesAvailable.join(", ")}
            </p>
          </div>
        }
        
        {data.glutenFreePitta && 
          <div className="mt-6 p-4 rounded-xl border border-amber-700/50 bg-stone-900">
            <h3 className={`font-semibold text-lg text-amber-300`}>
              Gluten-Free Pitta Option
            </h3>
            <p className={`text-sm ${TEXT_SECONDARY}`}>
              Available for an extra ${data.glutenFreePitta.price.toFixed(2)} on any kebab.
            </p>
          </div>
        }
      </div>
    );
  };
  
  // Reusable function to render sections like Extras, Meals, and Boxes
  const renderSection = (items, title, isExtra) => (
    <div>
      <h3 className={`text-3xl font-light ${BRONZE_ACCENT} mb-4 border-b border-amber-700/50 pb-2`}>
        {title}
      </h3>
      {/* Layout adjusts for "Extras" category */}
      <div className={`space-y-3 ${isExtra ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3' : 'space-y-3'}`}>
        {items.map((item, idx) => {
          const content = (
            <>
              {/* Item Name */}
              <div className={`font-semibold ${TEXT_PRIMARY}`}>
                {item.name}
              </div>
              {/* Price */}
              <span className={`font-semibold ${BRONZE_ACCENT} flex-shrink-0`}>
                {item.price ? `$${item.price.toFixed(2)}` : item.priceText}
                {/* For complex prices inside meals/boxes */}
                {item.prices && <PriceList prices={item.prices} />}
              </span>
              {item.desc && <div className={`text-xs ${TEXT_SECONDARY} italic w-full`}>{item.desc}</div>}
            </>
          );

          // Card wrapper for all section items
          return (
            <div
              key={idx}
              className={`
                ${CARD_BG} px-4 py-3 rounded-lg ${CARD_BORDER} border shadow-md transition-all duration-300 ${HOVER_SHADOW}
                ${isExtra ? 'flex justify-between items-start gap-2' : 'space-y-1'}
                `}
            >
                {/* Render content directly, using flex for extras */}
                {content}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    // **Page Background: Deep Black**
    <div className="bg-stone-950 min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* **Menu Title: Consistent Bronze Gradient and Font** */}
        <h1 className={`text-6xl font-extralight text-center mb-10 tracking-widest ${BRONZE_GRADIENT}`}>
       Menu
        </h1>

        {/* **Main Menu Container: Subtle Dark Card with Bronze Border** */}
        <div className={`bg-black/60 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden border border-amber-700/30`}>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap md:flex-nowrap bg-stone-900 border-b border-amber-700/50">
            {tabs.map(t =>
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`
                  px-4 py-4 md:flex-1 text-sm font-semibold tracking-wide uppercase transition-all duration-300 
                  ${active === t.key
                    ? "bg-amber-800/20 text-amber-500 border-b-2 border-amber-600 shadow-inner shadow-black/50" // Active bronze highlight
                    : "text-stone-300 hover:bg-stone-800/50 hover:text-amber-400"}
                `}
              >
                {t.label}
              </button>
            )}
          </div>

          {/* Menu Content */}
          <div className="p-6 md:p-10 bg-black/50">
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
    </div>
  );
}
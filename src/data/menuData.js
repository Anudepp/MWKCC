// Full menu data extracted from the provided images.
// Keep this file as the single source of truth for the Menu page.

const menuData = {
  kebabs: {
    title: "Kebabs",
    note: "Standard price includes lettuce, tomato, cooked onion and your choice of sauce",
    items: [
      { name: "Lamb", sizes: [{ label: "Small", price: 14.00 }, { label: "Regular", price: 18.50 }] },
      { name: "Chicken", sizes: [{ label: "Small", price: 13.00 }, { label: "Regular", price: 17.00 }] },
      { name: "Mixed", sizes: [{ label: "Small", price: 13.50 }, { label: "Regular", price: 18.00 }] },
      { name: "Seafood (fish, calamari or prawns)", sizes: [{ label: "Small", price: 13.00 }, { label: "Regular", price: 16.50 }] },
      { name: "Falafel", sizes: [{ label: "Small", price: 10.00 }, { label: "Regular", price: 12.00 }] },
      { name: "Chicken Schnitzel", sizes: [{ label: "Single", price: 17.00 }] }
    ],
    extras: [
      { name: "Cheese", price: 1.50 },
      { name: "Tabouli", price: 1.50 },
      { name: "Chips", price: 1.00 },
      { name: "Bacon", price: 3.50 },
      { name: "Pickles", price: 1.00 },
      { name: "Pineapple", price: 2.00 },
      { name: "Halloumi", price: 3.50 },
      { name: "Extra meat", priceText: "prices vary" }
    ],
    saucesAvailable: [
      "BBQ", "Tomato", "Chilli", "Sweet Chilli", "Mayonnaise", "Hummus",
      "Sour Cream", "Tzatziki", "Peri Peri", "Lemon & Herb", "Garlic Toum", "Mustard"
    ],
    glutenFreePitta: { price: 3.00 }
  },

  burgers: {
    title: "Burgers",
    items: [
      {
        name: "Plain Burger",
        price: 11.50,
        desc: "Beef pattie, lettuce, tomato, onion & beetroot",
        addOns: [
          { name: "Bacon", price: 3.50 },
          { name: "Pineapple", price: 2.00 },
          { name: "Egg", price: 1.00 },
          { name: "Cheese", price: 1.50 },
          { name: "Extra Pattie", price: 5.00 }
        ]
      },
      { name: "Works Burger", price: 18.50, desc: "Beef pattie, lettuce, tomato, onion, beetroot, bacon, cheese, pineapple & egg" },
      { name: "Big George Burger (double meat + double cheese + double bacon)", price: 22.50 },
      { name: "Bacon & Egg Roll", price: 8.50, desc: "Bacon, egg + your choice of sauce" },
      { name: "Seafood Burger (fish, calamari or prawn)", price: 17.00, desc: "Lettuce, tomato & cheese; mayo or tartare" },
      { name: "Chicken Burger (chicken schnitzel, lettuce, tomato & cheese + mayonnaise)", price: 17.00 }
    ]
  },

  snackPacks: {
    title: "Snack Packs",
    note: "Choice of meats, cheese, cooked onion & choice of sauce on a layer of chips",
    sizes: ["Small", "Medium", "Large", "Family"],
    prices: {
      chicken: { Small: 15.00, Medium: 23.00, Large: 33.00, Family: 58.00 },
      lamb: { Small: 17.00, Medium: 28.00, Large: 42.00, Family: 70.00 },
      mixed: { Small: 16.00, Medium: 26.00, Large: 38.00, Family: 66.00 }
    },
    boxes: [
      { name: "Papou Jim Box 'PJ'", desc: "Medium snack pack + 1/4 charcoal chicken + your choice of salad", prices: { chicken: 35.00, lamb: 40.00, mixed: 37.00 } },
      { name: "Super Box", desc: "Large snack pack + 1/2 charcoal chicken + your choice of salad", prices: { chicken: 52.00, lamb: 60.00, mixed: 57.00 } }
    ]
  },

  charcoalChicken: {
    title: "Charcoal Chicken",
    items: [
      { name: "1/4 Chicken", price: 8.00 },
      { name: "1/2 Chicken", price: 11.50 },
      { name: "Full Chicken", price: 21.00 },
      { name: "2 Full Chickens", price: 40.00 }
    ],
    meals: [
      { name: "Meal 1", desc: "1/4 Chicken + Medium Chips + Can of Drink / 600ml Drink", price: 18.00 },
      { name: "Meal 1 (600ml)", desc: "1/4 Chicken + Medium Chips + 600ml Drink", price: 19.50 },
      { name: "Meal 2", desc: "1/2 Chicken + Medium Chips + Can of Drink", price: 21.00 },
      { name: "Meal 2 (600ml)", desc: "1/2 Chicken + Medium Chips + 600ml Drink", price: 22.50 },
      { name: "Meal 3", desc: "Full Chicken + Large Chips + 1.25 litre Drink", price: 36.00 },
      { name: "Meal 4", desc: "2 x Full Chickens + 1 x Family Chips + 2 x 1.25 litre Drinks", price: 64.00 }
    ]
  },

  fromTheFryer: {
    title: "From the Fryer",
    items: [
      { name: "Chips", sizes: [{ label: "Small", price: 4.50 }, { label: "Medium", price: 6.50 }, { label: "Large", price: 9.50 }, { label: "Family", price: 18.00 }] },
      { name: "Sweet Potato Fries", price: 11.00 },
      { name: "Potato Cake", price: 2.00 },
      { name: "Onion Rings", price: 10.00 },
      { name: "Chicken Nuggets (x3)", price: 2.00 },
      { name: "Chicken Schnitzel (from fryer listing)", price: 8.00 },
      { name: "Pluto Pup", price: 6.00 },
      { name: "Pineapple Fritter", price: 3.00 },
      { name: "Fish (Hoki) - battered", price: 11.00 },
      { name: "Fish (Hoki) - crumbed", price: 11.00 },
      { name: "Cocktail Fish (per piece)", price: 3.00 },
      { name: "Cocktail Fish (x6)", price: 15.00 },
      { name: "Cocktail Fish (x12)", price: 30.00 },
      { name: "Crumbed Calamari (per serve)", price: 3.00 },
      { name: "Crumbed Calamari (x6)", price: 15.00 },
      { name: "Crumbed Calamari (x12)", price: 30.00 },
      { name: "Crumbed Prawn (per piece)", price: 3.00 },
      { name: "Crumbed Prawns (x6)", price: 15.00 },
      { name: "Crumbed Prawns (x12)", price: 30.00 }
    ],
    notes: "Sauce tubs available"
  },

  saladsAndSauces: {
    title: "Salads & Sauces",
    salads: [
      { name: "Small Salad", price: 6.00 },
      { name: "Medium Salad", price: 11.00 },
      { name: "Large Salad", price: 15.00 }
    ],
    sauces: [
      { name: "Tzatziki", price: 2.50 },
      { name: "Peri Peri", price: 2.50 },
      { name: "Lemon & Herb", price: 2.50 },
      { name: "Garlic Toum", price: 2.50 },
      { name: "Gravy", price: 2.00 }
    ]
  },

  drinks: {
    title: "Drinks",
    items: [
      { name: "375ml can", price: 4.00 },
      { name: "600ml bottle", price: 6.00 },
      { name: "1.25 litre bottle", price: 7.00 },
      { name: "Sports Drink", price: 6.50 },
      { name: "600ml Water", price: 3.50 }
    ]
  },

  greekSouvlaGyros: {
    title: "Greek Style Souvla / Gyros / Souvla Box",
    souvla: [
      { name: "500g Chicken", price: 40.00 },
      { name: "1kg Chicken", price: 65.00 },
      { name: "500g Lamb", price: 50.00 },
      { name: "1kg Lamb", price: 80.00 }
    ],
    gyros: [
      { name: "Greek Gyros - Chicken", price: 17.00 },
      { name: "Greek Gyros - Lamb", price: 18.50 },
      { name: "Greek Gyros - Mixed", price: 18.00 }
    ],
    souvlaBox: {
      name: "Greek Souvla Box",
      desc: "200g meat, chips, greek salad, 1 pita & tzatziki",
      prices: { Chicken: 31.00, Lamb: 35.00, Mixed: 33.00 }
    }
  },

  catering: {
    title: "Catering Menu",
    items: [
      { name: "Chicken Platters - 2 whole chickens", price: 40.00, note: "each chicken cut into 4 pieces" },
      { name: "Greek Style Souvla Meats (500g)", prices: { Chicken: 40.00, Lamb: 50.00 } },
      { name: "Greek Style Souvla Meats (1kg)", prices: { Chicken: 65.00, Lamb: 80.00 } },
      { name: "Salad Platters", priceText: "$45 feeds between 8-12 people" },
      {
        name: "Hot Food Platters",
        details: [
          { name: "Cocktail Fish", price: 3.00, per: "piece", perDozen: 30.00 },
          { name: "Crumbed Prawns", price: 3.00, per: "piece", perDozen: 30.00 },
          { name: "Crumbed Calamari", price: 3.00, per: "piece", perDozen: 30.00 },
          { name: "Falafels", price: 1.00, per: "piece", perDozen: 10.00 },
          { name: "Hot Chips - Family Box", price: 18.00, note: "feeds 6 people" },
          { name: "Sweet Potato Fries", price: 11.00 },
          { name: "Halloumi", price: 3.50 },
          { name: "Pita Bread", price: 1.00 }
        ]
      }
    ]
  }
}

export default menuData

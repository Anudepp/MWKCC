// Full menu data (standardized structure across all sections)

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

  // ✅ Fixed section: unified format
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

  // ✅ Fixed section: unified format
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

export default menuData;

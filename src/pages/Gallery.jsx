import React from "react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Spicy Chicken Kebabs",
      category: "Kebab",
      imageUrl: "./public/kebabs.jpg",
      alt: "Spicy Chicken Kebabs on a platter"
    },
    {
      title: "Gourmet Beef Burger",
      category: "Burger",
      imageUrl: "./public/burger.jpg",
      alt: "Gourmet Beef Burger with fries"
    },
    {
      title: "Fresh Caesar Salad",
      category: "Salad",
      imageUrl: "./public/salad.jpg",
      alt: "Fresh Caesar Salad in a bowl"
    },
    {
      title: "Signature Dipping Sauces",
      category: "Sauces",
      imageUrl: "./public/Sauces.jpg",
      alt: "Assortment of dipping sauces"
    },
    {
      title: "Tropical Mixed Drink",
      category: "Drinks",
      imageUrl: "./public/drinks.jpg",
      alt: "Refreshing tropical cocktail"
    },
    {
      title: "Vegetarian Halloumi Wrap",
      category: "Kebab",
      imageUrl: "./public/Wrap.jpg",
      alt: "Vegetarian Halloumi Wrap"
    },
    {
      title: "Charcoal chicken",
      category: "Chicken",
      imageUrl: "./public/CharcoalChicken.jpg",
      alt: "Charcoal chicken"
    }
  ];

  return (
    // **Deep Black Background with subtle texture/border**
    <div className="bg-stone-950">
      <div className="container mx-auto py-24 px-6">
        {/* Heading - Clean, elegant font */}
        <div className="text-center mb-16">
          <h2 className="text-7xl font-serif font-normal text-white tracking-widest mb-4 drop-shadow-lg">
            The Chef's Collection
          </h2>
          <p className="text-lg text-stone-400 max-w-3xl mx-auto">
            A meticulously curated presentation of our kitchen's finest
            achievements.
          </p>
        </div>

        {/* Image Grid - Focus on image quality and subtle framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {galleryItems.map((item, index) =>
            <div
              key={index}
              // **Card Styling: Stronger shadow, subtle hover lift**
              className="group relative overflow-hidden rounded-lg bg-black transition duration-700 ease-in-out hover:shadow-2xl hover:shadow-amber-900/70 transform hover:-translate-y-1"
            >
              {/* Image with Dark Fade Overlay */}
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-80 object-cover transition duration-700 group-hover:opacity-80"
                loading="lazy"
              />

              {/* **Bronze Overlay for Text** */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex items-end">
                <div>
                  <span className="text-sm font-medium uppercase tracking-widest text-amber-600">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-light text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

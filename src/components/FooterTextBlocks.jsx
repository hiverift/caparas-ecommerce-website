import React from "react";

const FooterLinks = [
  {
    title: "POPULAR CATEGORY",
    items: [
      ["Dinner Set", "https://www.earthstore.in/collections/dinnerware"],
      ["Cup - Mug", "https://www.earthstore.in/collections/new-drinkware"],
      ["Tea Sets", "https://www.earthstore.in/collections/cup-sets"],
      ["Platters", "https://www.earthstore.in/collections/platters-dips"],
      ["Bowls", "https://www.earthstore.in/collections/bowl"],
      ["Snack Bowl", "https://www.earthstore.in/collections/bowl"],
      ["With Kettle", "https://www.earthstore.in/collections/cup-sets"],
      ["Dinner Plate", "https://www.earthstore.in/collections/dinnerware"],
      [
        "Multipurpose Jar Set",
        "https://www.earthstore.in/collections/multipurpose-jar-containers",
      ],
      ["Vases & Planters", "https://www.earthstore.in/collections/planters"],
    ],
  },
  {
    title: "SPECIAL COLLECTIONS",
    items: [
      ["Farewell Gifts", "https://www.earthstore.in/collections/sale"],
      ["Gifts for Women", "https://www.earthstore.in/collections/womenaccessories"],
      ["Wedding Gifts", "https://www.earthstore.in/collections/home-decore"],
      ["New Celebration Gifts", "https://www.earthstore.in/collections/home-decore"],
      ["Friendship Gifts", "https://www.earthstore.in/collections/friendship-mugs"],
    ],
  },
  {
    title: "GIFTS FOR RELATIONSHIPS",
    items: [
      ["Gifts for Wife", "https://www.earthstore.in/collections/womenaccessories"],
      ["Gifts for Husband", "https://www.earthstore.in/collections/coffee-mugs"],
      ["Gifts for Sister", "https://www.earthstore.in/collections/womenaccessories"],
      ["Gifts for Brother", "https://www.earthstore.in/collections/friendship-mugs"],
      ["Gifts for Friends", "https://www.earthstore.in/collections/friendship-mugs"],
      ["Gifts for Mother", "https://www.earthstore.in/collections/tableware-collections"],
      ["Gifts for Father", "https://www.earthstore.in/collections/coffee-mugs"],
      ["Gifts for Girlfriend", "https://www.earthstore.in/collections/womenaccessories"],
      ["Gifts for Boyfriend", "https://www.earthstore.in/collections/travel-mug"],
      ["Gifts for Family", "https://www.earthstore.in/collections/home-decore"],
    ],
  },
  {
    title: "SEARCHES",
    items: [
      ["Soup Bowls with Spoons", "https://www.earthstore.in/collections/bowl"],
      ["Barni", "https://www.earthstore.in/collections/multipurpose-jar-containers"],
      ["Coffee Mugs", "https://www.earthstore.in/collections/coffee-mugs"],
      ["Tumbler", "https://www.earthstore.in/collections/travel-mug"],
      ["Home Essentials", "https://www.earthstore.in/collections/home-essentials"],
      ["Home Decor", "https://www.earthstore.in/collections/home-decore"],
      ["Accessories", "https://www.earthstore.in/collections/womenaccessories"],
    ],
  },
];

const FooterTextBlocks = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-10">
      {FooterLinks.map((block, idx) => (
        <div key={idx} className="mb-6">
          <p className="text-[#d6c0b3] text-sm font-bold mb-1">
            {block.title}
          </p>

          <p className="text-[#d6c0b3] text-xs leading-relaxed">
            {block.items.map((i, index) => (
              <span key={index}>
                <a href={i[1]} className="hover:underline text-[#d6c0b3]">
                  {i[0]}
                </a>
                {index < block.items.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterTextBlocks;

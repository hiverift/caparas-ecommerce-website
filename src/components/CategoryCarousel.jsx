import React from "react";

import tableware from "../assets/tableware.png";
import cookware from "../assets/cookware.png";
import drinkware from "../assets/drinkware.png";
import tray from "../assets/tray.png";
import glassware from "../assets/glassware.png";
import bowls from "../assets/bowls.png";
import accessories from "../assets/accessories.png";
import diffuser from "../assets/diffuser.png";
import decor from "../assets/decor.png";
import cupsets from "../assets/cupsets.png";
import jars from "../assets/jars.png";
import organizer from "../assets/organizer.png";

// ❌ interface hata diya
// ❌ TypeScript types remove
// ✔ Plain JS Array rakha

const categories = [
  { img: tableware, label: "Tableware", link: "/Tableware" },
  { img: cookware, label: "Cookware", link: "/Cookware" },
  { img: drinkware, label: "Drinkware", link: "/Drinkware" },
  { img: tray, label: "Serving Tray", link: "/Tray" },
  { img: glassware, label: "Glassware", link: "/Glassware" },
  { img: bowls, label: "Bowls", link: "/Bowl" },
  { img: accessories, label: "Accessories", link: "/Womenaccessories" },
  { img: diffuser, label: "Diffusers", link: "/Aromadiffusers" },
  { img: decor, label: "Decor", link: "/HomeDecore" },
  { img: cupsets, label: "Cup Sets", link: "/CupSets" },
  { img: jars, label: "Jars", link: "/Jars" },
  { img: organizer, label: "Organizers", link: "/Organizer" },
];

const CategoryCarousel = () => {
  return (
    <div className="w-full py-6 bg-white flex justify-center">
      <div className="w-full max-w-[1440px] px-4">

        {/* Mobile scroll, Desktop NO scroll */}
        <div
          className="
            flex gap-8 py-4
            overflow-x-auto 
            scrollbar-hide
            lg:overflow-visible lg:justify-between
          "
        >
          {categories.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="flex flex-col items-center min-w-[90px] hover:opacity-80 transition"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-24 h-24 object-contain"
                />
              </div>

              <span className="text-[#212121] text-sm font-medium mt-2">
                {item.label}
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategoryCarousel;

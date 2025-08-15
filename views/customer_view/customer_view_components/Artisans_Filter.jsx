"use client";
import React, { useState } from "react";

const Artisans_Filter = () => {
  const [active, setActive] = useState(0);
  const filters = [
    "All",
    "Individuals",
    "Category",
    "State",
    "Gender",
    "Rating",
  ];

  return (
    <div className="flex gap-3 mb-4">
      {filters.map((filter, index) => (
        <div
          key={index}
          className={`p-1 px-4 rounded-full w-fit cursor-pointer ${
            index == active ? "bg-[#02846B]" : "bg-[#F5F5F5]"
          }`}
          onClick={() => setActive(index)}
        >
          <p
            className={`${
              index == active ? "text-[#ffffff]" : "text-[#141414]"
            }`}
          >
            {filter}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Artisans_Filter;

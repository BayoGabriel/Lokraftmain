"use client"
import React from "react";

const Artisans_Data_Display = () => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-6 justify-between">
      {Array.from({ length: 10 }).map((item, index) => (
        <div key={index}>
          <img src="kayode.png" alt="" className="rounded-xl" />
          <h6>Kayode Kasum</h6>
          <p>Make Up Artist</p>
          <p>Yaba</p>
        </div>
      ))}
    </div>
  );
};

export default Artisans_Data_Display;

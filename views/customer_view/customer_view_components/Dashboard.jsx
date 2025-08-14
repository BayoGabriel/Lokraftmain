"use client";
import Link from "next/link";
import { useState } from "react";

const Dashboard = () => {
  const filters = [
    "All",
    "Individuals",
    "Category",
    "State",
    "Gender",
    "Rating",
  ];

  const [active, setActive] = useState(0);
  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2 bg-white">
      <div className="flex gap-3">
        <div className="w-[80%]">
          <h4 className="font-bold text-2xl">Artisans</h4>
          <div className="flex justify-between items-center my-4 mt-2">
            <p>Available in your area</p>
            <Link href={"#"} className="text-sm text-[#02846B]">
              See All
            </Link>
          </div>
          <div className="flex gap-3 mb-4">
            {filters.map((filter, index) => (
              <div
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
          <div className="flex flex-wrap gap-x-4 gap-y-6">
            {Array.from({ length: 10 }).map((item, index) => (
              <div>
                <img src="kayode.png" alt="" className="rounded-xl" />
                <h6>Kayode Kasum</h6>
                <p>Make Up Artist</p>
                <p>Yaba</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[40%] gap-6">Blank</div>
      </div>
    </div>
  );
};

export default Dashboard;

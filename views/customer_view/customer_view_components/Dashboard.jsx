"use client"
import Link from "next/link";
import Artisans_Filter from "./Artisans_Filter";
import Artisans_Data_Display from "./Artisans_Data_Display";
import Bids from "./Bids";
import Right_Side from "./Right_Side";

const Dashboard = () => {
  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2">
      <div className="flex gap-3">
        <div className="w-[80%]">
          <h4 className="font-bold text-2xl">Artisans</h4>
          <div className="flex justify-between items-center my-4 mt-2">
            <p>Available in your area</p>
            <Link href={"#"} className="text-sm text-[#02846B]">
              See All
            </Link>
          </div>
          <Artisans_Filter />
          <Artisans_Data_Display />
          <Bids />
        </div>
        <div className="w-[30%]">
          <Right_Side/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

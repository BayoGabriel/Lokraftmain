import Link from "next/link";
import React from "react";
import Bids_Data_Display from "./Bids_Data_Display";

const Bids = () => {
  return (
    <div>
      <h4 className="font-bold text-2xl">Bids Submitted</h4>
      <div className="flex justify-between items-center my-4 mt-2">
        <p>Track Your Submitted Bids</p>
        <Link href={"#"} className="text-sm text-[#02846B]">
          See All
        </Link>
      </div>
      <Bids_Data_Display />
    </div>
  );
};

export default Bids;

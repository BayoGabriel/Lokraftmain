import React from "react";

const Bids_Data_Display = () => {
  return (
    <div className="flex justify-between gap-x-4 gap-y-6">
      {Array.from({ length: 4 }).map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <div className="bg-white shadow-xl p-4 rounded-lg flex flex-col gap-2 justify-center items-center">
            <p>Nov</p>
            <p>16</p>
          </div>
          <div>
            <h6>Plumbing</h6>
            <p className="text-sm">Make Up Artist</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bids_Data_Display;

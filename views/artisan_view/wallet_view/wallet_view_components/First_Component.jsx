"use client"
import { Coins, First_Circle, Second_Circle } from "@/public/svg";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useArtisanContext } from "@/context/Artisan_Context";

const First_Component = () => {
  const { showBalance, toggleBalance } = useArtisanContext();

  return (
    <div className="flex relative flex-col px-6 py-10 gap-4 rounded-[20px] bg-white items-start my-4">
      <div className="flex items-center gap-2">
        <span className="text-[#333333] encode-sans">Your balance</span>
        <button
          onClick={toggleBalance}
          className="text-[#02846B80] hover:text-[#02846B] transition-colors"
        >
          {showBalance ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </button>
      </div>

      <p className="text-[#333333] encode-sans text-[50px] font-[600]">
        {showBalance ? "100,000,000" : "********"}
      </p>

      <div className="absolute h-[100%] right-[20%] top-0">
        <Coins />
      </div>
      <div className="absolute right-[30%] bottom-0">
        <First_Circle />
      </div>
      <div className="absolute right-[0%] bottom-0">
        <Second_Circle />
      </div>
    </div>
  );
};

export default First_Component;

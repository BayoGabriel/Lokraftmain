"use client";

import { useArtisanContext } from "../../../../context/Artisan_Context";

export default function Quote_Summary({ onSend }) {
  const { totalBudget } = useArtisanContext();
  const youWillReceive = totalBudget * 0.95;

  return (
    <div className="mt-6 space-y-3">
      <div className="flex justify-between">
        <span>Total Project budget</span>
        <span className="font-semibold">{totalBudget.toLocaleString()}</span>
      </div>
      <div className="flex justify-between font-medium">
        <span>You will receive</span>
        <span className="text-xl font-bold">{youWillReceive.toLocaleString()}</span>
      </div>
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={onSend}
          className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-md"
        >
          Send quote
        </button>
        <button className="bg-white border py-3 px-4 rounded-md">Cancel</button>
      </div>
    </div>
  );
}

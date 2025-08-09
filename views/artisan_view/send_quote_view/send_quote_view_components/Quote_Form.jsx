"use client";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import { useArtisanContext } from "../../artisan_view_component/Artisan_View_Modal";
import Quote_Items from "./Quote_Items";
import Quote_Summary from "./Quote_Summary";

export default function Quote_Form() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { additionalInfo, setAdditionalInfo, submitQuote } = useArtisanContext();

  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div
        className="flex rounded-[10px] items-center justify-between cursor-pointer mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h6 className="text-lg font-medium text-gray-800">Project Materials</h6>
        {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </div>
      {isExpanded && <Quote_Items />}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Additional information/request</h3>
        <textarea
          placeholder="Write here..."
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className="w-full h-24 px-3 py-2 bg-gray-100 rounded-md text-sm resize-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <Quote_Summary onSend={submitQuote} />
    </div>
  );
}

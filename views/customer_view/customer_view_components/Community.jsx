"use client";

import { Community_Icon } from "@/public/svg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Community = ({ 
  title = "Community",
  icon: CustomIcon = Community_Icon,
  isNew = true,
  newBadgeText = "New",
  newBadgeColor = "bg-green-500",
  isExpanded = false,
  onToggle = () => {},
  children,
  expandedContent = "Community content goes here...",
  className = "",
  buttonClassName = "",
  contentClassName = ""
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${buttonClassName}`}
      >
        <div className="flex items-center gap-2">
          <CustomIcon />
          <span className="font-medium text-gray-900">{title}</span>
          {isNew && (
            <span className={`px-2 py-1 text-xs font-medium text-white ${newBadgeColor} rounded-full`}>
              {newBadgeText}
            </span>
          )}
        </div>
        {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className={`p-4 pt-0 border-t border-gray-100 ${contentClassName}`}>
          {children ? children : (
            <p className="text-sm text-gray-600">{expandedContent}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Community;
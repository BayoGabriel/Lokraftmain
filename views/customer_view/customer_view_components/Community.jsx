import { FiChevronDown, FiChevronUp, FiUsers } from "react-icons/fi";

const Community = ({ 
  isNew = true,
  isExpanded = false,
  onToggle = () => {}
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <FiUsers className="text-gray-600" size={20} />
          <span className="font-medium text-gray-900">Community</span>
          {isNew && (
            <span className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
              New
            </span>
          )}
        </div>
        {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 pt-0 border-t border-gray-100">
          <p className="text-sm text-gray-600">Community content goes here...</p>
        </div>
      )}
    </div>
  );
};
export default Community
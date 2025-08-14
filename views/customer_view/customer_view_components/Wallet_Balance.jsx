import { FiChevronDown, FiTrendingUp } from "react-icons/fi";

const Wallet_Balance = ({ 
  balance = 142860,
  currency = "₦",
  period = "November",
  showTrend = true,
  onSeeMore = () => {}
}) => {
  const formatBalance = (amount) => {
    return amount.toLocaleString();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          Available Balance on Wallet
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Amount • {period}</span>
          <FiChevronDown size={16} />
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl font-bold text-gray-900">
            {currency} {formatBalance(balance)}
          </span>
          {showTrend && (
            <FiTrendingUp className="text-green-500" size={24} />
          )}
        </div>
      </div>
      
      <button 
        // onClick={onSeeMore}
        className="text-green-600 hover:text-green-700 font-medium text-sm"
      >
        See more
      </button>
    </div>
  );
};
export default Wallet_Balance
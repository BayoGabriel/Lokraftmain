

// Community Component
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

// Wallet Balance Component
const WalletBalance = ({ 
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
        onClick={onSeeMore}
        className="text-green-600 hover:text-green-700 font-medium text-sm"
      >
        See more
      </button>
    </div>
  );
};

// Demo Component showing all three
const Demo = () => {
  const [messagesExpanded, setMessagesExpanded] = React.useState(true);
  const [communityExpanded, setCommunityExpanded] = React.useState(false);

  return (
    <div className="max-w-md mx-auto space-y-4 p-4 bg-gray-50 min-h-screen">
      <Messages 
        isExpanded={messagesExpanded}
        onToggleExpand={() => setMessagesExpanded(!messagesExpanded)}
        onSeeAll={() => console.log('See all messages clicked')}
      />
      
      <Community 
        isExpanded={communityExpanded}
        onToggle={() => setCommunityExpanded(!communityExpanded)}
      />
      
      <WalletBalance 
        onSeeMore={() => console.log('See more wallet details clicked')}
      />
    </div>
  );
};

export default Demo;
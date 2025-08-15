import { Artisan_Person, Balance_Icon, Bid_Icon, Yellow_Icon } from '@/public/svg';
import { FaEdit, FaUsers } from 'react-icons/fa';

const Ewallet = () => {
  const walletData = [
    {
      icon: <Balance_Icon/>,
      value: '₦1k',
      label: 'Available Balance',
      change: '+8% from yesterday',
      bgColor: 'bg-[#02846B4D]',
      cardBg: 'bg-[#02846B4D]'
    },
    {
      icon: <Yellow_Icon/>,
      value: '₦300',
      label: 'Total Expenses',
      change: '+5% from yesterday',
      bgColor: 'bg-[#FFCC004D]',
      cardBg: 'bg-[#FFCC004D]'
    },
    {
      icon: <Bid_Icon/>,
      value: '5',
      label: 'Bids Sent',
      change: '+1,2% from yesterday',
      bgColor: 'bg-[#DCFCE7]',
      cardBg: 'bg-[#DCFCE7]'
    },
    {
      icon: <Artisan_Person/>,
      value: '8',
      label: 'Artisans Service',
      change: '0,5% from yesterday',
      bgColor: 'bg-[#E9712433]',
      cardBg: 'bg-[#E9712433]'
    },
  ];

  return (
    <div className="bg-white h-full p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-800">e-Wallet</h4>
          <p className="text-gray-500">Total amount in wallet</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
          <span>📤</span>
          <span>Export</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {walletData.map((item, index) => (
          <div key={index} className={`p-6 text-nowrap rounded-2xl ${item.cardBg}`}>
            <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mb-4`}>
              {item.icon}
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{item.value}</div>
            <div className="text-gray-600 text-sm mb-2">{item.label}</div>
            <div className="text-blue-500 text-xs">{item.change}</div>
          </div>
        ))}
      </div>

      <button className="px-6 bg-[#02846B] text-white py-2 rounded-lg font-medium hover:bg-[#02846ae3] transition-colors">
        Add Money
      </button>
    </div>
  );
};
export default Ewallet

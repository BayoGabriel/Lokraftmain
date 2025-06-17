import { FiCreditCard } from "react-icons/fi"

const WalletCard = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FiCreditCard className="w-5 h-5 text-gray-500 mr-2" />
          <h3 className="font-semibold text-gray-800">Wallet Balance</h3>
        </div>
        <a href="#" className="text-sm text-green-600 hover:text-green-700">
          view wallet
        </a>
      </div>

      <div className="text-3xl font-bold text-gray-800 mb-1">₦500,000,000</div>
      <p className="text-sm text-gray-500">Available balance</p>
    </div>
  )
}

export default WalletCard

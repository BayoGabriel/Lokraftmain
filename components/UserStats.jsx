import { FiTrendingUp } from "react-icons/fi"

const UserStats = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <FiTrendingUp className="w-5 h-5 text-gray-500 mr-2" />
        <h3 className="font-semibold text-gray-800">Your Stats</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">₦50,000</div>
          <p className="text-sm text-gray-500">Total earnings</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">50</div>
          <p className="text-sm text-gray-500">Total jobs</p>
        </div>
      </div>
    </div>
  )
}

export default UserStats

import { FiSearch, FiMail, FiBell } from "react-icons/fi"
import Image from "next/image"
import { TechncianDp } from "@/public"
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-medium text-gray-800">Hello Grace,</h1>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="search anything"
              className="w-full pl-10 pr-4 py-2 bg-[#D9D9D954] border border-gray-200 rounded-[70px] focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="relative">
            <FiMail className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              50
            </span>
          </div>

          <div className="relative">
            <FiBell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>

          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Image src={TechncianDp} alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import { FullColorLogo } from "@/public"
import Image from "next/image"
import Link from "next/link"
import {
  FiGrid,
  FiFileText,
  FiCreditCard,
  FiMessageSquare,
  FiUser,
  FiUsers,
  FiBook,
  FiSettings,
  FiLogOut,
} from "react-icons/fi"

const Sidebar = () => {
  const menuItems = [
    { icon: FiGrid, label: "Dashboard", active: true },
    { icon: FiFileText, label: "Bids", active: false },
    { icon: FiCreditCard, label: "Wallet", active: false },
    { icon: FiMessageSquare, label: "Messages", active: false },
    { icon: FiUser, label: "Profile", active: false },
    { icon: FiUsers, label: "Community", active: false, badge: "new" },
    { icon: FiBook, label: "Courses", active: false },
    { icon: FiSettings, label: "Settings", active: false },
  ]

  return (
    <aside className="bg-white w-[20%] border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={FullColorLogo} alt="logo"/>
        </Link>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active ? "bg-[#02846B] text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link
          href="#"
          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <FiLogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar

"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
} from "react-icons/fi";
import { FullColorLogo } from "@/public";

const defaultMenuItems = [
  { icon: <FiGrid className="w-5 h-5" />, label: "Dashboard", path: "/artisan-dashboard" },
  { icon: <FiFileText className="w-5 h-5" />, label: "Bids", path: "/artisan-dashboard/bid" },
  { icon: <FiCreditCard className="w-5 h-5" />, label: "Wallet", path: "/artisan-dashboard/wallet" },
  { icon: <FiMessageSquare className="w-5 h-5" />, label: "Messages", path: "/artisan-dashboard/messages" },
  { icon: <FiUser className="w-5 h-5" />, label: "Profile", path: "/artisan-dashboard/profile" },
  { icon: <FiUsers className="w-5 h-5" />, label: "Community", path: "/artisan-dashboard/community", badge: "new" },
  { icon: <FiBook className="w-5 h-5" />, label: "Courses", path: "/artisan-dashboard/courses" },
  { icon: <FiSettings className="w-5 h-5" />, label: "Settings", path: "/artisan-dashboard/settings" },
];

const defaultFooterItem = {
  icon: <FiLogOut className="w-5 h-5" />,
  label: "Logout",
  path: "#",
};

export default function Sidebar({
  menuItems = defaultMenuItems,
  footerItem = defaultFooterItem,
}) {
  const pathname = usePathname();

  const renderFooter = () => {
    if (!footerItem) return null;

    if (!footerItem.path && !footerItem.label) {
      return <div className="p-4 border-t border-gray-200">{footerItem}</div>;
    }

    return (
      <div className="p-4 border-t border-gray-200">
        <Link
          href={footerItem.path}
          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {footerItem.icon}
          <span className="font-medium">{footerItem.label}</span>
        </Link>
      </div>
    );
  };

  return (
    <aside className="bg-white w-full border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={FullColorLogo} alt="logo" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-[#02846B] text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {renderFooter()}
    </aside>
  );
}

import Sidebar from "@/components/Sidebar";
import Header from "@/views/artisan_view/artisan_view_component/Header";
import Modal from "@/views/artisan_view/send_quote_view/send_quote_view_components/Modal";
import CustomerProvider from "@/context/Customer_Context";
import { CiHome, CiMenuKebab, CiSettings } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { MdOutlineEngineering, MdOutlineGroups } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";
import { Green_Bg } from "@/public/svg";

export default function RootLayout({ children }) {
  return (
    <CustomerProvider>
      <div className="flex gap-2 w-full bg-white">
        <div className="w-[20%] bg-white">
          <Sidebar
            menuItems={[
                { icon: <CiHome className="w-5 h-5" />, label: "Home", path: "/customer-dashboard" },
                { icon: <MdOutlineEngineering className="w-5 h-5" />, label: "Artisans", path: "/customer-dashboard/artisan" },
                { icon: <SlPicture className="w-5 h-5" />, label: "Bid", path: "/customer-dashboard/bid" },
                { icon: <LuWallet className="w-5 h-5" />, label: "Wallet", path: "/customer-dashboard/wallet" },
                { icon: <FiMessageSquare className="w-5 h-5" />, label: "Messages", path: "/customer-dashboard/messages" },
                { icon: <MdOutlineGroups className="w-5 h-5" />, label: "Community", path: "/customer-dashboard/community" },
                { icon: <FaLink className="w-5 h-5" />, label: "Category", path: "/customer-dashboard/category" },
                { icon: <CgProfile className="w-5 h-5" />, label: "Profile", path: "/customer-dashboard/profile" },
                { icon: <CiSettings className="w-5 h-5" />, label: "Settings", path: "/customer-dashboard/settings" },
                { icon: <CiMenuKebab className="w-5 h-5" />, label: "More", path: "/customer-dashboard/more" },
            ]}
            footerItem={
                <div className="text-center relative text-white">
                    <div className="w-full"> <Green_Bg/></div>
                </div>
            }
            />
        </div>
        <main className="w-[78%]">
          <Header />
          <div>{children}</div>
        </main>
      </div>
      <Modal />
    </CustomerProvider>
  );
}

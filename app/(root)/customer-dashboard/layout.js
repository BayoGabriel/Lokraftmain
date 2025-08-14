import Sidebar from "@/components/Sidebar";
import Header from "@/views/artisan_view/artisan_view_component/Header";
import Modal from "@/views/artisan_view/send_quote_view/send_quote_view_components/Modal";
import CustomerProvider from "@/views/customer_view/customer_view_components/Customer_View_Modal";
import { CiHome } from "react-icons/ci";

export default function RootLayout({ children }) {
  return (
    <CustomerProvider>
      <div className="flex gap-2 w-full bg-gray-50">
        <div className="w-[20%] bg-white">
          <Sidebar
            menuItems={[
                { icon: <CiHome className="w-5 h-5" />, label: "Home", path: "/" }
            ]}
            footerItem={
                <div className="text-center p-6 bg-green-700 text-white">
                Custom Footer Content
                </div>
            }
            />
        </div>
        <main className="w-[78%]">
          {/* <Header /> */}
          <div>{children}</div>
        </main>
      </div>
      <Modal />
    </CustomerProvider>
  );
}

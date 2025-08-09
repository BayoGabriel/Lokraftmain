import Sidebar from "@/components/Sidebar";
import ArtisanProvider from "@/views/artisan_view/artisan_view_component/Artisan_View_Modal";
import Header from "@/views/artisan_view/artisan_view_component/Header";
import Modal from "@/views/artisan_view/send_quote_view/send_quote_view_components/Modal";

export default function RootLayout({ children }) {
  return (
    <ArtisanProvider>
      <div className="flex gap-2 w-full bg-gray-50">
        <div className="w-[20%] bg-white">
          <Sidebar />
        </div>
        <main className="w-[78%]">
          <Header />
          <div>{children}</div>
        </main>
      </div>
      <Modal />
    </ArtisanProvider>
  );
}

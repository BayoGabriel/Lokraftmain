"use client";

import { useArtisanContext } from "../../artisan_view_component/Artisan_View_Modal";


export default function Modal() {
  const { modalOpen, setModalOpen } = useArtisanContext();

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white text-[#333333] encode-sans p-10 rounded-[20px] shadow-lg text-center">
        <h4 className="text-3xl font-bold mb-2">Congratulations!</h4>
        <p className="mb-2">Your quote has been sent to the customer.</p>
        <button
          onClick={() => setModalOpen(false)}
          className="mt-40 cursor-pointer bg-teal-600 text-white px-10 py-4 rounded-[10px]"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

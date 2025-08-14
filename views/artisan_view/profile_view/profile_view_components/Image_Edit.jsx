"use client";

import { useArtisanContext } from "../../../../context/Artisan_Context";

export default function Image_Edit() {
  const {
    modalOpen,
    setModalOpen,
    addressData,
    handleInputChange,
    handleSave,
    handleCancel,
  } = useArtisanContext();

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-lg font-bold mb-4">Edit Address</h2>
        {Object.keys(addressData).map((field) => (
          <input
            key={field}
            value={addressData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            placeholder={field}
            className="border w-full mb-2 p-2"
          />
        ))}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => {
              handleCancel();
              setModalOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              handleSave();
              setModalOpen(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

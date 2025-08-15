"use client";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { useArtisanContext } from "../../../../context/Artisan_Context";

export default function Quote_Items() {
  const { quoteItems, addNewItem, removeItem, updateItem } = useArtisanContext();

  return (
    <div className="space-y-4">
      {quoteItems.map((item, index) => (
        <div key={item.id}>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Item {index + 1}</span>
            {quoteItems.length > 1 && (
              <button onClick={() => removeItem(item.id)} className="text-red-500">
                <FiTrash2 size={16} />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Item name"
              value={item.name}
              onChange={(e) => updateItem(item.id, "name", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-100 rounded-md text-sm"
            />
            <input
              type=""
              placeholder="Cost"
              value={item.cost}
              onChange={(e) => updateItem(item.id, "cost", e.target.value)}
              className="px-3 py-2 bg-gray-100 rounded-md text-sm"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <button onClick={addNewItem} className="flex items-center gap-2 text-sm font-medium">
          <FiPlus size={16} /> Add new item
        </button>
      </div>
    </div>
  );
}

"use client"
import { FiEdit3, FiChevronRight } from 'react-icons/fi';
import { useArtisanContext } from '../../artisan_view_component/Artisan_View_Modal';

const Address_Info = () => {
  const { setIsEditing, isEditing, addressData, handleSave, handleCancel, handleInputChange } = useArtisanContext()

  return (
    <div className="mt-20 py-4 mx-6 bg-[#F6F6F9]">
      <div className="flex items-center gap-6 mb-6">
        <h6 className="text-xl font-semibold text-gray-900">Address information</h6>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors duration-200 font-medium"
        >
          <FiEdit3 size={16} />
          {isEditing ? 'CANCEL' : 'EDIT'}
        </button>
      </div>
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              COUNTRY
            </label>
            {isEditing ? (
              <input
                type="text"
                value={addressData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            ) : (
              <p className="text-gray-900 font-medium">{addressData.country}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              STATE
            </label>
            {isEditing ? (
              <input
                type="text"
                value={addressData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            ) : (
              <p className="text-gray-900 font-medium">{addressData.state}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              CITY
            </label>
            {isEditing ? (
              <input
                type="text"
                value={addressData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            ) : (
              <p className="text-gray-900 font-medium">{addressData.city}</p>
            )}
          </div>
          <div className="">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              STREET ADDRESS
            </label>
            {isEditing ? (
              <input
                type="text"
                value={addressData.streetAddress}
                onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            ) : (
              <p className="text-gray-900 font-medium">{addressData.streetAddress}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              ZIP CODE
            </label>
            {isEditing ? (
              <input
                type="text"
                value={addressData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            ) : (
              <p className="text-gray-900 font-medium">{addressData.zipCode}</p>
            )}
          </div>
          <div className="">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              SUBMITTED DOCUMENT
            </label>
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              View utility bill
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
        {isEditing && (
          <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Address_Info;
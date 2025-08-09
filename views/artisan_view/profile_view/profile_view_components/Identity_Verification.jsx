import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Identity_Verification = () => {
  const identityData = {
    documentType: 'NIN',
    documentNumber: '97357655113',
    bvn: '27676559113',
    issuingCountry: 'Nigeria',
    issuedDate: '09 July, 1990',
    expiryDate: '31 JAN,3030',
    dateOfBirth: '14 Feb, 1987'
  };

  return (
    <div className="my-4 mx-6 bg-[#F6F6F9]">
      {/* Header */}
      <div className="mb-6">
        <h6 className="text-xl font-semibold text-gray-900">Identity Verification</h6>
      </div>

      {/* Identity Card */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              DOCUMENT TYPE
            </label>
            <p className="text-gray-900 font-medium">{identityData.documentType}</p>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              DOCUMENT NUMBER
            </label>
            <p className="text-gray-900 font-medium">{identityData.documentNumber}</p>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              BVN
            </label>
            <p className="text-gray-900 font-medium">{identityData.bvn}</p>
          </div>

          {/* Second Row */}
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              ISSUING COUNTRY
            </label>
            <p className="text-gray-900 font-medium">{identityData.issuingCountry}</p>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              ISSUED DATE
            </label>
            <p className="text-gray-900 font-medium">{identityData.issuedDate}</p>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              EXPIRY DATE
            </label>
            <p className="text-gray-900 font-medium">{identityData.expiryDate}</p>
          </div>

          {/* Third Row */}
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              DATE OF BIRTH
            </label>
            <p className="text-gray-900 font-medium">{identityData.dateOfBirth}</p>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              SUBMITTED DOCUMENT
            </label>
            <button className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              View NIN
              <FiChevronRight size={16} />
            </button>
          </div>

          {/* Empty third column for alignment */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Identity_Verification;
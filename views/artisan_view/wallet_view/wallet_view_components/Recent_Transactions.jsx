"use client"
import { IoChevronForward } from 'react-icons/io5';
import { MdOutlineReceiptLong } from 'react-icons/md';
import { useArtisanContext } from '../../../../context/Artisan_Context';
import Transactions from '@/data/artisan_data/Transactions';

const Recent_Transactions = () => {


  const { showBalance } = useArtisanContext();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h6 className="text-lg font-semibold text-gray-900">Recent Transactions</h6>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          See all
        </button>
      </div>

      <div className="overflow-x-auto">
      {showBalance ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">DATE</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">AMOUNT</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TYPE</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">DESCRIPTION</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">STATUS</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {Transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-4 text-sm text-gray-600">{transaction.date}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{transaction.amount}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{transaction.type}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{transaction.description}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">{transaction.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <IoChevronForward className="w-5 h-5 text-gray-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <MdOutlineReceiptLong className="text-5xl mb-3" />
          <p className="text-sm font-medium">No transactions yet</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Recent_Transactions;

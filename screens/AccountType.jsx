"use client"
import { FiArrowLeft } from "react-icons/fi"
import Logo from "@/components/reusables/Logo"

const AccountType = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <div className="text-right text-gray-600">
            <div className="text-sm">Step 2/3</div>
            <div className="font-medium">Account type</div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => onNavigate("sign-in")}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-12"
        >
          <FiArrowLeft />
          Back
        </button>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-teal-700 mb-4 max-w-4xl mx-auto leading-tight">
            What kind of account would you like to open today
          </h1>
        </div>

        {/* Account Type Cards */}
        <div className="flex gap-8 justify-center mb-16">
          <div
            onClick={() => onNavigate("registration")}
            className="bg-blue-200 rounded-3xl p-12 w-80 h-80 flex flex-col justify-center items-center cursor-pointer hover:bg-blue-300 transition-colors"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">As an individual</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              You are advised to use Lokraft in line with our{" "}
              <span className="font-semibold">Acceptable Use Policy.</span> You can
            </p>
          </div>

          <div
            onClick={() => onNavigate("registration")}
            className="bg-purple-200 rounded-3xl p-12 w-80 h-80 flex flex-col justify-center items-center cursor-pointer hover:bg-purple-300 transition-colors"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">As an SME</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              You are advised to use Lokraft in line with our{" "}
              <span className="font-semibold">Acceptable Use Policy.</span> You can
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            You are advised to use Lokraft in line with our{" "}
            <span className="font-semibold underline cursor-pointer">Acceptable Use Policy.</span> You cannot use a
            personal account for an SME account
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccountType

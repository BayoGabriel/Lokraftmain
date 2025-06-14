"use client"
import { FiTool, FiUsers, FiBuilding } from "react-icons/fi"
import ProgressBar from "@/components/reusables/ProgressBar"

const UserCategory = ({ onNavigate }) => {
  const carouselImages = ["/images/user-category.png"]

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Carousel */}
      <div className="flex-1 relative bg-teal-700">
        <div className="absolute top-8 left-8 z-10">
          <ProgressBar currentStep={1} totalSteps={3} />
        </div>

        <div className="h-full flex flex-col justify-center items-center p-12">
          <div className="bg-blue-200 rounded-3xl p-8 mb-8 max-w-md">
            <div className="bg-white rounded-2xl p-6 mb-6 relative">
              <img src="/images/user-category.png" alt="Profile" className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="absolute -bottom-2 -right-2 bg-teal-600 rounded-full p-3">
                <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">Abiiade Ogechukwu</h3>
            </div>
          </div>

          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4 text-orange-300">Create Your Profile</h2>
            <p className="text-lg">
              Tell your story and introduce
              <br />
              your brand.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between text-white text-sm">
          <span>© Lokraft. 2025</span>
          <div className="flex gap-8">
            <span>Help center</span>
            <span>Terms of service</span>
          </div>
        </div>
      </div>

      {/* Right Side - Category Selection */}
      <div className="flex-1 flex flex-col justify-center px-12 bg-white">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-12">Select user category</h1>

          <div className="space-y-6">
            <div
              onClick={() => onNavigate("selfie-capture")}
              className="bg-orange-400 hover:bg-orange-500 rounded-2xl p-8 cursor-pointer transition-colors group"
            >
              <div className="flex flex-col items-center text-center text-white">
                <FiTool className="w-12 h-12 mb-4" />
                <span className="text-xl font-semibold">Artisan</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate("selfie-capture")}
              className="bg-purple-500 hover:bg-purple-600 rounded-2xl p-8 cursor-pointer transition-colors group"
            >
              <div className="flex flex-col items-center text-center text-white">
                <FiUsers className="w-12 h-12 mb-4" />
                <span className="text-xl font-semibold">Customer</span>
              </div>
            </div>

            <div
              onClick={() => onNavigate("selfie-capture")}
              className="bg-yellow-600 hover:bg-yellow-700 rounded-2xl p-8 cursor-pointer transition-colors group"
            >
              <div className="flex flex-col items-center text-center text-white">
                <FiBuilding className="w-12 h-12 mb-4" />
                <span className="text-xl font-semibold">Company</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCategory

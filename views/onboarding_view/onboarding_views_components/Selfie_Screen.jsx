"use client"

import { motion } from "framer-motion"
import { IoArrowBack } from "react-icons/io5"
import Header from "./Header"

const Selfie_Screen = ({ onNext, onBack, step, totalSteps }) => {
  const handleContinue = () => {
    onNext()
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
      <Header step={step} totalSteps={totalSteps} title="Selfie image" />

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 md:mb-8">
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>

        <div className="max-w-md mx-auto">
          <div className="bg-teal-700 rounded-2xl p-6 md:p-12 text-white text-center">
            <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Portrait Selfie</h1>
            <p className="text-sm mb-6 md:mb-8 opacity-90">
              Please ensure that you have enough light in your environment and make sure you are steady for us to
              capture your face properly.
            </p>

            <div className="mb-6 md:mb-8">
              <div className="w-32 h-40 md:w-48 md:h-64 bg-white rounded-2xl mx-auto opacity-80 flex items-center justify-center">
                <span className="text-4xl md:text-6xl text-gray-400">📷</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="bg-yellow-400 text-black px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Continue
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selfie_Screen

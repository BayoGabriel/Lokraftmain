"use client"

import { motion } from "framer-motion"
import { IoArrowBack } from "react-icons/io5"
import Header from "./Header"

export default function SelfieScreen({ onNext, onBack }) {
  const handleContinue = () => {
    onNext()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header step={5} totalSteps={5} title="Selfie image" />

      <div className="container mx-auto px-8 py-12">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8">
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>

        <div className="max-w-md mx-auto">
          <div className="bg-teal-700 rounded-2xl p-12 text-white text-center">
            <h1 className="text-2xl font-bold mb-6">Portrait Selfie</h1>
            <p className="text-sm mb-8 opacity-90">
              Please ensure that you have enough light in your environment and make sure you are stead for us to capture
              your face properly.
            </p>

            <div className="mb-8">
              <div className="w-48 h-64 bg-white rounded-full mx-auto opacity-80"></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="bg-yellow-400 text-black px-12 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Continue
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

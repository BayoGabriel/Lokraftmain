"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { IoArrowBack } from "react-icons/io5"
import Header from "./Header"

export default function AccountTypeScreen({ onNext, onBack, onSelect, selected }) {
  const [selectedType, setSelectedType] = useState(selected)

  const handleTypeSelect = (type) => {
    setSelectedType(type)
    onSelect(type)
  }

  const handleNext = () => {
    if (selectedType) {
      onNext()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header step={2} totalSteps={5} title="Account type" />

      <div className="container mx-auto px-8 py-12">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8">
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-teal-700 text-center mb-16">
            What kind of account would you like to open today
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTypeSelect("individual")}
              className={`bg-[#B6E0EB] p-12 pt-40 rounded-2xl text-center transition-all duration-200 ${
                selectedType === "individual" ? "ring-4 ring-offset-2 ring-blue-400" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">As an individual</h3>
              <p className="text-gray-600">
                You are advised to use Lokraft in line with our{" "}
                <span className="font-semibold underline">Acceptable Use Policy</span>. You can
              </p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTypeSelect("sme")}
              className={`bg-[#DCD4FF] p-12 pt-40 rounded-2xl text-center transition-all duration-200 ${
                selectedType === "sme" ? "ring-4 ring-offset-2 ring-purple-400" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">As an SME</h3>
              <p className="text-gray-600">
                You are advised to use Lokraft in line with our{" "}
                <span className="font-semibold underline">Acceptable Use Policy</span>. You can
              </p>
            </motion.button>
          </div>

          <div className="text-center text-gray-600 mb-8">
            <p>
              You are advised to use Lokraft in line with our{" "}
              <span className="font-semibold underline">Acceptable Use Policy</span>. You cannot use a personal account
              for an SME account
            </p>
          </div>

          {selectedType && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
              <button
                onClick={handleNext}
                className="bg-teal-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Continue
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

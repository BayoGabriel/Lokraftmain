"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { IoArrowBack } from "react-icons/io5"
import Header from "./Header"

const Account_Type_Screen = ({ onBack, onSelect, selected, step, totalSteps }) => {
  const [selectedType, setSelectedType] = useState(selected)

  const handleTypeSelect = (type) => {
    setSelectedType(type)
    onSelect(type)
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-y-auto">
      <Header step={step} totalSteps={totalSteps} title="Account type" />

      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-6 md:mb-8">
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-teal-700 text-center mb-8 md:mb-16">
            What kind of account would you like to open today
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTypeSelect("individual")}
              className={`bg-[#B6E0EB] p-6 md:p-12 pt-20 md:pt-40 rounded-2xl text-center transition-all duration-200 min-h-[200px] md:min-h-[300px] ${
                selectedType === "individual" ? "ring-4 ring-offset-2 ring-blue-400" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">As an individual</h3>
              <p className="text-sm md:text-base text-gray-600">
                You are advised to use Lokraft in line with our{" "}
                <span className="font-semibold underline">Acceptable Use Policy</span>. You can
              </p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleTypeSelect("sme")}
              className={`bg-[#DCD4FF] p-6 md:p-12 pt-20 md:pt-40 rounded-2xl text-center transition-all duration-200 min-h-[200px] md:min-h-[300px] ${
                selectedType === "sme" ? "ring-4 ring-offset-2 ring-purple-400" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">As an SME</h3>
              <p className="text-sm md:text-base text-gray-600">
                You are advised to use Lokraft in line with our{" "}
                <span className="font-semibold underline">Acceptable Use Policy</span>. You can
              </p>
            </motion.button>
          </div>

          <div className="text-center text-gray-600 mb-8 px-4">
            <p className="text-sm md:text-base">
              You are advised to use Lokraft in line with our{" "}
              <span className="font-semibold underline">Acceptable Use Policy</span>. You cannot use a personal account
              for an SME account
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account_Type_Screen

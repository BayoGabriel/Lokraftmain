"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { IoArrowBack } from "react-icons/io5"
import Header from "./Header"

const Email_Confirmation_Screen = ({ onNext, onBack }) => {
  const [code, setCode] = useState(["", "", "", "", ""])
  const inputRefs = useRef([])

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.every((digit) => digit !== "")) {
      onNext()
    }
  }

  const isComplete = code.every((digit) => digit !== "")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header step={4} totalSteps={5} title="Email Confirmation" />

      <div className="container mx-auto px-8 py-12">
        <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8">
          <IoArrowBack className="text-xl" />
          <span>Back</span>
        </button>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Verify Your Email</h1>
            <p className="text-gray-600 text-center mb-8">
              Kindly input the code sent to your email to complete your registration.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex justify-center space-x-3 mb-8">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
                    maxLength={1}
                  />
                ))}
              </div>

              <div className="text-center mb-8">
                <button type="button" className="text-teal-600 hover:text-teal-700 font-medium">
                  Resend code
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!isComplete}
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  isComplete
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Email_Confirmation_Screen
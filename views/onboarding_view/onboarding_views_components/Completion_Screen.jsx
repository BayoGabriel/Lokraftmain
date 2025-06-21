"use client"

import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

const Completion_Screen = ({ userCategory }) => {
  const getDashboardUrl = () => {
    switch (userCategory) {
      case "artisan":
        return "/artisan-dashboard"
      case "customer":
        return "/customer-dashboard"
      case "company":
        return "/company-dashboard"
      default:
        return "/dashboard"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-6 md:mb-8"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 relative">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-2xl md:text-4xl text-orange-400" />
            </div>
            <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 bg-orange-300 rounded-full"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
        >
          Profile Setup complete
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-8 md:mb-12"
        >
          Congratulations! You are all setup
        </motion.p>

        <motion.a
          href={getDashboardUrl()}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-block"
        >
          Goto dashboard
        </motion.a>
      </div>
    </div>
  )
}

export default Completion_Screen

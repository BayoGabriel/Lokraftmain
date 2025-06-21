"use client"

import { motion } from "framer-motion"
import { FaCheckCircle } from "react-icons/fa"

const Completion_Screen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <FaCheckCircle className="text-4xl text-orange-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-300 rounded-full"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Profile Setup complete
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-12"
        >
          Congratulations! You are all setup
        </motion.p>

        <motion.a
          href="/dashboard"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
        >
          Goto dashboard
        </motion.a>
      </div>
    </div>
  )
}
export default Completion_Screen
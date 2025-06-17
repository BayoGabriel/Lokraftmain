"use client"

import { motion } from "framer-motion"
import { FaStar, FaEllipsisV } from "react-icons/fa"

export default function ArtisanCard({ artisan, index = 0 }) {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -4,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative p-4 flex justify-center">
        <motion.img
          src={artisan.image || "/placeholder.svg?height=80&width=80"}
          alt={artisan.name}
          className="w-20 h-20 rounded-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.div
          className="absolute top-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaEllipsisV />
        </motion.div>
      </div>

      <div className="px-4 pb-4 text-center">
        <h3 className="font-semibold text-gray-900 mb-1">{artisan.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{artisan.profession}</p>
        <p className="text-xs text-gray-500 mb-2">{artisan.location}</p>

        {artisan.rating && (
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
                  <FaStar
                    className={`text-sm ${i < Math.floor(artisan.rating) ? "text-orange-400" : "text-gray-300"}`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm text-gray-600">{artisan.rating}</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

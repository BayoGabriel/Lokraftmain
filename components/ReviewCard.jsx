"use client"

import { motion } from "framer-motion"
import { FaStar, FaThumbsUp } from "react-icons/fa"

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      className="bg-teal-600 text-white rounded-xl p-5 mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-3 mb-3">
        <motion.img
          src={review.avatar || "/placeholder.svg?height=50&width=50"}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
          whileHover={{ scale: 1.1 }}
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold">{review.name}</span>
            {review.verified && (
              <motion.span
                className="bg-white bg-opacity-20 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                ✓
              </motion.span>
            )}
          </div>

          <motion.div
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }}>
                <FaStar className="text-sm text-orange-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <span className="text-sm text-teal-100">{review.date}</span>
      </div>

      <motion.p
        className="leading-relaxed mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {review.text}
      </motion.p>

      {review.images && review.images.length > 0 && (
        <motion.div
          className="flex gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {review.images.map((img, index) => (
            <motion.div
              key={index}
              className="w-15 h-15 rounded-lg overflow-hidden bg-white bg-opacity-10"
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <img
                src={img || "/placeholder.svg"}
                alt={`Review image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="flex justify-end">
        <motion.button
          className="flex items-center gap-2 text-sm text-teal-100 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaThumbsUp />
          Helpful
        </motion.button>
      </div>
    </motion.div>
  )
}

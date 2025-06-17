"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import ReviewCard from "@/components/ReviewCard"
import { FaStar } from "react-icons/fa"

const reviews = [
  {
    id: 1,
    name: "Adesuwa Ngozi",
    text: "Kayode is an excellent plumber. He's punctual, professional, and does great work. He explains things clearly and charges fair prices. Kayode is my go-to plumber, and I highly recommend him.",
    date: "June 2, 2019",
    avatar: "/placeholder.svg?height=50&width=50",
    verified: true,
    images: [
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
    ],
  },
  {
    id: 2,
    name: "Adesuwa Ngozi",
    text: "Kayode is an excellent plumber. He's punctual, professional, and does great work. He explains things clearly and charges fair prices. Kayode is my go-to plumber, and I highly recommend him.",
    date: "June 2, 2019",
    avatar: "/placeholder.svg?height=50&width=50",
    verified: true,
    images: [
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
      "/placeholder.svg?height=60&width=60",
    ],
  },
]

const ratingBreakdown = [
  { stars: 5, count: 12, percentage: 80 },
  { stars: 4, count: 5, percentage: 33 },
  { stars: 3, count: 4, percentage: 27 },
  { stars: 2, count: 2, percentage: 13 },
  { stars: 1, count: 0, percentage: 0 },
]

export default function ReviewsPage() {
  const [withPictures, setWithPictures] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />

      <main className="lg:ml-64 p-4 lg:p-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Reviews List */}
          <div className="xl:col-span-3">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <motion.h2
                  className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  25 Reviews
                </motion.h2>

                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <input
                    type="checkbox"
                    id="withPictures"
                    checked={withPictures}
                    onChange={(e) => setWithPictures(e.target.checked)}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="withPictures" className="text-sm text-gray-600 cursor-pointer">
                    With Pictures
                  </label>
                </motion.div>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <ReviewCard key={review.id} review={review} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Rating Summary Sidebar */}
          <div className="space-y-4">
            {/* Overall Rating */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center mb-6">
                <motion.div
                  className="text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  4.3
                </motion.div>

                <motion.div
                  className="flex justify-center gap-1 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <FaStar className={`text-lg ${i < 4 ? "text-orange-400" : "text-gray-300"}`} />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  15 ratings
                </motion.p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {ratingBreakdown.map((rating, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <div className="flex gap-1 min-w-20">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xs ${i < rating.stars ? "text-orange-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>

                    <div className="flex-1 bg-gray-200 rounded-full h-2 relative overflow-hidden">
                      <motion.div
                        className="bg-green-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${rating.percentage}%` }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
                      />
                    </div>

                    <span className="text-sm text-gray-600 min-w-6 text-right">{rating.count}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Client Info */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">About the client</h3>

              <div className="space-y-3">
                {["Payment method verified", "Phone number verified", "Phone number verified"].map(
                  (verification, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {verification}
                    </motion.div>
                  ),
                )}

                <motion.div
                  className="flex items-center gap-2 pt-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-orange-400 text-sm" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0</span>
                </motion.div>

                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  5.00 of 3 reviews
                </motion.p>

                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  Yaba, Lagos
                </motion.p>

                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  15 Jobs Posted
                </motion.p>

                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  Member since Jan, 2025
                </motion.p>
              </div>
            </motion.div>

            {/* Write Review Button */}
            <motion.div
              className="bg-teal-600 rounded-2xl p-5 text-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="btn bg-white text-teal-600 hover:bg-gray-100 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✏️ Write a Review
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LuCrown } from "react-icons/lu";
import { FiChevronLeft, FiChevronRight, FiMapPin, FiStar } from "react-icons/fi"
import { MdVerified } from "react-icons/md"
import top from "@/public/top.png"
import toprated from "@/public/toprated.svg"
import top2 from "@/public/top2.png"
import Image from "next/image"
const artisansData = [
  {
    id: 1,
    name: "Babajide Aminu",
    location: "Akoka, Lagos",
    jobSuccess: 93,
    image: top,
    verified: true,
    topRated: true,
  },
  {
    id: 2,
    name: "Abiade Ogechukwu",
    location: "Victoria Island, Lagos",
    jobSuccess: 91,
    image: top2,
    verified: true,
    topRated: true,
  },
  {
    id: 3,
    name: "Mariam Ufon",
    location: "Ikeja, Lagos",
    jobSuccess: 90,
    image: top,
    verified: true,
    topRated: true,
  },
  {
    id: 4,
    name: "Ahmed Bello",
    location: "Surulere, Lagos",
    jobSuccess: 95,
    image: top2,
    verified: true,
    topRated: true,
  },
  {
    id: 5,
    name: "Grace Okafor",
    location: "Lekki, Lagos",
    jobSuccess: 88,
    image: top,
    verified: true,
    topRated: true,
  },
]

export default function TopRatedArtisans() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % artisansData.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + artisansData.length) % artisansData.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleArtisans = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % artisansData.length
      visible.push(artisansData[index])
    }
    return visible
  }

  return (
    <section className="w-full mx-auto pl-6 md:pl-12 lg:pl-36 py-12 md:py-20">
        <div className="flex items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h2 text-[#DD7E02]"
          >
            Top Rated
            <br />
            Artisan's
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 overflow-hidden">
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 items-start justify-center"
          >
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 disabled:opacity-50"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 disabled:opacity-50"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
          {getVisibleArtisans().map((artisan, index) => (
            <motion.div
              key={`${artisan.id}-${currentIndex}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <Image
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg flex items-center gap-2 font-semibold text-gray-800">
                    {artisan.name}
                  </h3>
                  {artisan.verified && <MdVerified className="w-4 h-4 text-[#02846B]" />}
                </div>

                <div className="flex items-center gap-1 text-black mb-4">
                  <FiMapPin className="w-4 h-4 text-[#02846B]" />
                  <span className="text-sm">{artisan.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <div className="bg-white border-2 border-[#02846B] flex items-center justify-center p-1 text-[#02846B] rounded-full">
                      <LuCrown/>
                    </div>
                    <span className="text-sm text-gray-600">{artisan.jobSuccess}% Job Success</span>
                  </div>
                  {artisan.topRated && (
                    <div className="flex items-center gap-1 px-2 py-1 ">
                      <Image src={toprated} alt="toprated" className="w-3 h-3" />
                      <span className="text-xs text-black font-medium">Top rated</span>
                    </div>
                  )}
                </div>
                  <div className="">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="py-2 px-6 border rounded-full border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      View profile
                    </motion.button>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  )
}

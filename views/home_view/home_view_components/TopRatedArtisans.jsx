"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LuCrown } from "react-icons/lu"
import { FiChevronLeft, FiChevronRight, FiMapPin } from "react-icons/fi"
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
  const [itemsToShow, setItemsToShow] = useState(1)

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3)
      else if (window.innerWidth >= 768) setItemsToShow(2)
      else setItemsToShow(1)
    }

    updateItemsToShow()
    window.addEventListener("resize", updateItemsToShow)

    return () => window.removeEventListener("resize", updateItemsToShow)
  }, [])

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
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % artisansData.length
      visible.push(artisansData[index])
    }
    return visible
  }

  return (
    <section className="w-full mx-auto container px-4 sm:px-6 md:px-12 lg:pl-36 py-8 sm:py-12 md:py-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold text-[#DD7E02] mb-4 sm:mb-0"
        >
          Top Rated
          <br />
          Artisan's
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-3 items-center justify-center"
        >
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 disabled:opacity-50"
          >
            <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 disabled:opacity-50"
          >
            <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
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
                src={artisan.image || "/placeholder.svg"}
                alt={artisan.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-base sm:text-lg flex items-center gap-2 font-semibold text-gray-800">
                  {artisan.name}
                </h3>
                {artisan.verified && <MdVerified className="w-4 h-4 text-[#02846B]" />}
              </div>

              <div className="flex items-center gap-1 text-black mb-4">
                <FiMapPin className="w-4 h-4 text-[#02846B]" />
                <span className="text-xs sm:text-sm">{artisan.location}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <div className="bg-white border-2 border-[#02846B] flex items-center justify-center p-1 text-[#02846B] rounded-full">
                    <LuCrown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">{artisan.jobSuccess}% Job Success</span>
                </div>
                {artisan.topRated && (
                  <div className="flex items-center gap-1 px-2 py-1">
                    <Image src={toprated || "/placeholder.svg"} alt="toprated" className="w-3 h-3" />
                    <span className="text-xs text-black font-medium">Top rated</span>
                  </div>
                )}
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-2 px-4 sm:px-6 border rounded-full border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors duration-200 text-sm"
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

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Carousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [cards.length])

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center space-x-2 mb-4 flex-shrink-0">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[6px] w-[142px] rounded-[30px] transition-all duration-300 ${
              index === currentIndex ? " bg-[#D8D96B]" : "bg-[#F4F2F2]"
            }`}
          />
        ))}
      </div>
      <div className="flex-1 overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            {cards[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
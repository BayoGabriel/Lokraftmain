"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
import FAQ_Data from "@/constants/data/FAQ_Data"

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="w-full mx-auto container px-4 sm:px-6 md:px-12 lg:px-36 py-8 sm:py-12 md:py-20">
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[25px] font-[800] text-black mb-2 sm:mb-4">FAQ</h1>
          <h4 className="text-[#8E59FF] text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-[700] leading-[100%] tracking-[0px]">
            Frequently Asked
          </h4>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col gap-6 sm:gap-8">
            {FAQ_Data
              .filter((_, i) => i % 2 === 0)
              .map((item, index) => {
                const actualIndex = FAQ_Data.findIndex((f) => f === item)
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(actualIndex)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700 font-medium pr-4 text-sm sm:text-base">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openItems.has(actualIndex) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        {openItems.has(actualIndex) ? (
                          <CiCircleMinus className="w-5 h-5 text-gray-500" />
                        ) : (
                          <CiCirclePlus className="w-5 h-5 text-gray-500" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openItems.has(actualIndex) && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden origin-top"
                        >
                          <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            {FAQ_Data
              .filter((_, i) => i % 2 !== 0)
              .map((item, index) => {
                const actualIndex = FAQ_Data.findIndex((f) => f === item)
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(actualIndex)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="text-gray-700 font-medium pr-4 text-sm sm:text-base">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openItems.has(actualIndex) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        {openItems.has(actualIndex) ? (
                          <CiCircleMinus className="w-5 h-5 text-gray-500" />
                        ) : (
                          <CiCirclePlus className="w-5 h-5 text-gray-500" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openItems.has(actualIndex) && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden origin-top"
                        >
                          <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import tell from "@/public/tell.svg"
import Image from "next/image"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const steps = [
    {
      title: "Tell Us What You Need",
      description: "Share the details of your project or service requirements.",
      color: "text-green-600",
    },
    {
      title: "Get Matched Instantly",
      description: "We'll connect you with the best artisan for the job in your area.",
      color: "text-blue-600",
    },
    {
      title: "Enjoy Hassle-Free Service",
      description: "Sit back and relax while our professional gets the job done.",
      color: "text-purple-600",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="w-full container mx-auto px-4 sm:px-6 md:px-12 lg:px-36 py-8 sm:py-12 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold text-start text-[#D62837] mb-8 sm:mb-12 lg:mb-16"
      >
        How it works
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden order-2 lg:order-1"
        >
          <Image
            src={tell || "/placeholder.svg"}
            alt="LOKRAFT platform interface"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="pt-4 sm:pt-6 lg:pt-10 order-1 lg:order-2">
          {steps.map((step, index) => {
            const isActive = activeStep === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className={`how-it-works-step pl-4 sm:pl-6 py-3 sm:py-4 mb-6 sm:mb-8 border-l-4 sm:border-l-8 transition-all duration-700 ${
                  isActive ? "border-[#FBBB00]" : "border-gray-200"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`title-${isActive}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`text-lg sm:text-xl md:text-2xl lg:text-[25px] font-bold transition-colors duration-700 ${
                      isActive ? "text-[#02846B]" : "text-[#757575]"
                    }`}
                  >
                    {step.title}
                  </motion.h3>
                </AnimatePresence>
                <p
                  className={`mt-2 text-sm sm:text-base transition-colors duration-700 ${
                    isActive ? "text-black" : "text-[#757575]"
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import who from "@/public/who.png"

export default function WhoWeAre() {
  return (
    <div className="bg-[#02846B] text-white min-h-[400px] sm:min-h-[500px] lg:h-[670px] py-8 sm:py-12 lg:pt-[118px] lg:pb-0 flex items-center lg:items-end justify-center lg:justify-end px-4 sm:px-6 md:px-12 lg:pl-36">
      <div className="w-full flex flex-col lg:flex-row h-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full items-center lg:items-start justify-center flex-1 text-center lg:text-left mb-8 lg:mb-0"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold mb-4 sm:mb-6"
          >
            Who we are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xs sm:max-w-md lg:max-w-lg"
          >
            LOKRAFT is an online marketplace that connects artisans with demand for their services using location and
            task complexity data to match taskers with customers embedded with a rigorous artisan vetting protocol,
            ensuring a high-quality experience for the users.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-auto lg:h-full flex items-end justify-center lg:justify-end"
        >
          <Image
            src={who || "/placeholder.svg"}
            alt="LOKRAFT team - Three professional artisans showcasing their craft tools and skills"
            className="max-w-full h-auto lg:h-full object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}

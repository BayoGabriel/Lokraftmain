"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import who from "@/public/who.png"

export default function WhoWeAre() {
  return (
    <div className="bg-[#02846B] text-white h-[670px] lg:pt-[118px] pb-0 flex items-end justify-end  pl-6 md:pl-12 lg:pl-36">
      <div className="w-full flex h-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col h-full items-start justify-center flex-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h2 mb-6"
          >
            Who we are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed max-w-lg"
          >
            LOKRAFT is an online marketplace that connects artisans with demand for their services using location and
            task complexity data to match taskers with customers embedded with a rigorous artisan vetting protocol,
            ensuring a high-quality experience for the users.
          </motion.p>
        </motion.div>

        <motion.div
          // initial={{ opacity: 0, x: 30 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          className="h-full"
        >
          <motion.div
          >
            <Image
              src={who}
              alt="LOKRAFT team - Three professional artisans showcasing their craft tools and skills"
              className=""
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
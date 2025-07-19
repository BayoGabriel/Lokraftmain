"use client"

import { motion } from "framer-motion"
import one from "@/public/one.png"
import two from "@/public/two.png"
import three from "@/public/three.png"
import four from "@/public/four.png"
import Image from "next/image"

export default function Benefits() {
  return (
    <div className="gradient mx-auto">
      <div className="w-full container mx-auto px-4 sm:px-6 md:px-12 lg:px-36 py-8 sm:py-12 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold text-[#E97124] mb-4 sm:mb-6"
        >
          We Exist to
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[27px] text-[#333333] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mb-8 sm:mb-12"
        >
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in 3
          minutes and 5 clicks.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div>
              <Image src={one || "/placeholder.svg"} alt="Peace of mind" className="w-full rounded-[15px] sm:rounded-[25px]" />
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-[31px] font-bold text-[#333333]">
                Give you peace of mind
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] text-[#333333]">
                Every artisan in our network is thoroughly vetted for skills, experience, and professionalism.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div>
              <Image src={two || "/placeholder.svg"} alt="Save time" className="w-full rounded-[15px] sm:rounded-[25px]" />
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-[31px] font-bold text-[#333333]">
                Save your precious time
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] text-[#333333]">
                Our professionals are committed to delivering quality work within agreed timelines.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div>
              <Image src={three || "/placeholder.svg"} alt="Safety" className="w-full rounded-[15px] sm:rounded-[25px]" />
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-[31px] font-bold text-[#333333]">
                Ensure your safety
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] text-[#333333]">
                We conduct background checks to ensure you are working with trustworthy individuals.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <div>
              <Image src={four || "/placeholder.svg"} alt="Value for money" className="w-full rounded-[15px] sm:rounded-[25px]" />
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-[31px] font-bold text-[#333333]">
                Offer value for your hard-earned money
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] text-[#333333]">
                No hidden costs, no surprises. Get clear and fair pricing for every project upfront.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

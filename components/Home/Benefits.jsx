"use client"

import { motion } from "framer-motion"
import one from "@/public/one.png"
import two from "@/public/two.png"
import three from "@/public/three.png"
import four from "@/public/four.png"
import Image from "next/image"
export default function Benefits() {
  return (
    <div className="w-full gradient mx-auto px-6 md:px-12 lg:px-36 py-12 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[85px] font-bold text-[#E97124] mb-6"
      >
        We Exist to
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[27px] text-[#333333] max-w-2xl mb-12"
      >
        Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in 3
        minutes and 5 clicks.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <div className="">
            <Image src={one} alt="Peace of mind" className="w-full rounded-[25px]" />
            <h3 className="mt-6 text-[31px] font-bold text-[#333333]">Give you peace of mind</h3>
            <p className="mt-3 text-[21px] text-[#333333]">
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
          <div className="">
            <Image src={two} alt="Peace of mind" className="w-full rounded-[25px]" />
            <h3 className="mt-6 text-[31px] font-bold text-[#333333]">Save your precious time</h3>
            <p className="mt-3 text-[21px] text-[#333333]">
              Our professionals are committed to delivering quality work within agreed timelines.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden"
        >
          <div className="">
            <Image src={three} alt="Peace of mind" className="w-full rounded-[25px]" />
            <h3 className="mt-6 text-[31px] font-bold text-[#333333]">Ensure your safety</h3>
            <p className="mt-3 text-[21px] text-[#333333]">
              We conduct background checks to ensure you are working with trusthworthy individuals.
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
          <div className="">
            <Image src={four} alt="Peace of mind" className="w-full rounded-[25px]" />
            <h3 className="mt-6 text-[31px] font-bold text-[#333333]">Offer value for your hard-earned money</h3>
            <p className="mt-3 text-[21px] text-[#333333]">
              No hidden costs, no surprises. Get clear and fair pricing for every project upfront.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

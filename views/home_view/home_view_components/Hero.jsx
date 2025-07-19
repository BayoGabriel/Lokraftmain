"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import plumber from "@/public/plumber.svg"
import ac from "@/public/ac.svg"
import tailor from "@/public/tailor.svg"
import makeup from "@/public/makeup.svg"
import Carpentry from "@/public/Carpentry.svg"
import shoe from "@/public/shoe.svg"
import painter from "@/public/painter.svg"
import man from "@/public/man.png"
import woman from "@/public/woman.png"
import { AiOutlinePlayCircle } from "react-icons/ai"

export default function Hero() {
  const professions = [
    { src: plumber, label: "Plumber" },
    { src: Carpentry, label: "Carpenter" },
    { src: tailor, label: "Fashion Designer" },
    { src: makeup, label: "Makeup Artist" },
    { src: ac, label: "HVAC Technicians" },
    { src: shoe, label: "Shoe Maker" },
    { src: painter, label: "Painter" },
  ]

  return (
    <div className="w-full mx-auto container px-4 sm:px-6 md:px-12 lg:px-36 py-8 sm:py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[93px] font-black tracking-tight leading-tight">
          <span className="text-gray-800">FIND A TRUSTED</span>
          <br />
          <span className="text-[#E97124]">PLUMBER</span>
          <span className="text-gray-800"> NEAR YOU!</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[21px] text-[#333333] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4"
        >
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in
          3 minutes and 5 clicks.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
      >
        <div className="w-full sm:w-3/4 bg-gray-200 rounded-lg p-3 sm:p-4 flex items-center">
          <select className="w-full bg-transparent text-gray-700 py-2 px-2 sm:px-4 text-sm sm:text-base focus:outline-none">
            <option>Choose the service you need</option>
            <option>Plumbing</option>
            <option>Carpentry</option>
            <option>Fashion Design</option>
            <option>Makeup</option>
            <option>HVAC</option>
            <option>Shoe Making</option>
            <option>Painting</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 text-sm sm:text-base"
        >
          Book a Service
        </motion.button>
      </motion.div>

      <div className="overflow-hidden w-full mt-8 sm:mt-12">
        <motion.div
          className="flex w-max gap-6 sm:gap-8 md:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            duration: 20,
          }}
        >
          {[...professions, ...professions].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.label}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <span className="text-xs sm:text-sm text-center">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 sm:mt-12 w-full flex relative flex-col lg:flex-row lg:justify-between lg:items-center relative bg-[#02846B] rounded-[25px] sm:rounded-[40px] lg:rounded-[73px] "
      >
        <div className="hidden lg:block">
          <Image src={man || "/placeholder.svg"} alt="man" className="rounded-bl-[73px]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center lg:flex-1">
          <h3 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] text-[#EDF1C9] leading-tight">
            See how <br className="hidden sm:block" /> lokraft works
          </h3>
          <div className="bg-[#D8D96B] text-base sm:text-lg md:text-xl lg:text-[26px] rounded-[15px] sm:rounded-[25px] flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
            <span className="text-[#020101]">Watch a demo</span>
            <AiOutlinePlayCircle />
          </div>
          <span className="text-lg sm:text-xl lg:text-[24px] text-white">Only takes 3 mins</span>
        </div>

        <div className="hidden lg:block">
          <Image className="rounded-br-[73px]" src={woman || "/placeholder.svg"} alt="woman" />
        </div>
      </motion.div>
    </div>
  )
}

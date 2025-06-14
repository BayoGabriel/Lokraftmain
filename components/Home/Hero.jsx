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
import { AiOutlinePlayCircle } from "react-icons/ai";

export default function Hero() {
  const professions = [
    { src: plumber, label: "Plumber" },
    { src: Carpentry, label: "Carpenter" },
    { src: tailor, label: "Fashion Designer" },
    { src: makeup, label: "Makeup Artist" },
    { src: ac, label: "HVAC Technicians" },
    { src: shoe, label: "Shoe Maker" },
    { src: painter, label: "Painter" },
  ];
  return (
    <div className="w-full mx-auto px-6 md:px-12 lg:px-36 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-[93px] font-black tracking-[0px]">
          <span className="text-gray-800">FIND A TRUSTED</span>
          <br />
          <span className="text-[#E97124]">PLUMBER</span>
          <span className="text-gray-800"> NEAR YOU!</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-[21px] text-[#333333] max-w-3xl mx-auto"
        >
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in
          3 minutes and 5 clicks.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
      >
        <div className="w-full md:w-3/4 bg-gray-200 rounded-lg p-4 flex items-center">
          <select className="w-full bg-transparent text-gray-700 py-2 px-4 focus:outline-none">
            <option>Choose the service you need</option>
            <option>Plumbing</option>
            <option></option>
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
          className="w-full md:w-auto px-8 py-4 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          Book a Service
        </motion.button>
      </motion.div>
      <div className="overflow-hidden w-full mt-12">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }} // move left continuously
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20, // adjust speed
        }}
      >
        {/* Duplicate items to ensure seamless loop */}
        {[...professions, ...professions].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 items-center justify-center min-w-[120px]"
          >
            <Image src={item.src} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 w-full justify-between items-center flex relative bg-[#02846B] rounded-[73px] lg:pr-6"
      >
        <Image src={man} alt="man"/>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="uppercase font-bold text-[50px] text-center text-[#EDF1C9]">See how <br /> lokraft works</h3>
          <div className="bg-[#D8D96B] text-[26px] rounded-[25px] flex items-center gap-2 px-8 py-4">
            <span className="text-[#020101]">Watch a demo</span>
            <AiOutlinePlayCircle />
          </div>
          <span className="text-[24px] text-white">Only takes 3 mins</span>
        </div>
        <Image className="rounded-bl-[73px]" src={woman} alt="man"/>
      </motion.div>
    </div>
  )
}

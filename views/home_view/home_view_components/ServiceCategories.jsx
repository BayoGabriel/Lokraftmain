"use client"

import { motion } from "framer-motion"
import { FaFaucet, FaHammer, FaTshirt, FaPaintBrush } from "react-icons/fa"
import { GiShoe } from "react-icons/gi"
import { MdOutlineAir } from "react-icons/md"
import { IoColorPaletteOutline } from "react-icons/io5"

export default function ServiceCategories() {
  const categories = [
    { name: "Plumber", icon: <FaFaucet size={24} /> },
    { name: "Carpenter", icon: <FaHammer size={24} /> },
    { name: "Fashion Designer", icon: <FaTshirt size={24} /> },
    { name: "Makeup Artiste", icon: <IoColorPaletteOutline size={24} /> },
    { name: "HVAC Technicians", icon: <MdOutlineAir size={24} /> },
    { name: "Shoe maker", icon: <GiShoe size={24} /> },
    { name: "Painter", icon: <FaPaintBrush size={24} /> },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="service-card flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center text-gray-700">{category.icon}</div>
            <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

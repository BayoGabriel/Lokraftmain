"use client"

import { motion } from "framer-motion"
import { FaAnchor, FaGem, FaLightbulb, FaHandsHelping, FaUsers } from "react-icons/fa"

export default function OurValues() {
  const values = [
    {
      title: "Trust",
      description: "We prioritize transparency, reliability, and integrity in every connection we facilitate.",
      icon: <FaAnchor size={24} />,
    },
    {
      title: "Quality",
      description:
        "We hold ourselves and our network to the highest standards, ensuring consistent excellence in every project.",
      icon: <FaGem size={24} />,
    },
    {
      title: "Innovation",
      description:
        "By leveraging technology, we aim to transform the informal sector and make service delivery seamless and efficient.",
      icon: <FaLightbulb size={24} />,
    },
    {
      title: "Empowerment",
      description:
        "We are committed to empowering artisans and skilled workers by providing them with resources and opportunities they need to succeed.",
      icon: <FaHandsHelping size={24} />,
    },
    {
      title: "Community Impact",
      description:
        "We believe in creating a positive ripple effect by improving livelihoods and fostering economic growth across communities.",
      icon: <FaUsers size={24} />,
    },
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
    <div className="w-full mx-auto container px-4 sm:px-6 md:px-12 lg:px-36 py-8 sm:py-12 md:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold text-[#F9A607] text-center mb-8 sm:mb-12 lg:mb-16"
      >
        Our Values
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="value-card pb-[20px] bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg border-[#757575] border-[0.5px] transition-all duration-300"
          >
            <div className="value-icon w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#94D227] text-white rounded-full mb-3 sm:mb-4 transition-transform duration-300">
              {value.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{value.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import {
  FaWrench,
  FaBolt,
  FaTh,
  FaHammer,
  FaPaintBrush,
  FaCube,
  FaUtensils,
  FaBreadSlice,
  FaPalette,
  FaCut,
  FaTruck,
  FaLeaf,
  FaBroom,
  FaEdit,
  FaDesktop,
  FaMobile,
  FaSnowflake,
  FaHome,
} from "react-icons/fa"

const iconMap = {
  Plumber: FaWrench,
  Electrician: FaBolt,
  Tiler: FaTh,
  Carpenter: FaHammer,
  Painter: FaPaintBrush,
  Mason: FaCube,
  Chef: FaUtensils,
  Baker: FaBreadSlice,
  "Makeup Artiste": FaPalette,
  Tailor: FaCut,
  "Hair Stylist": FaCut,
  "Delivery Personnel": FaTruck,
  Barber: FaCut,
  "Spa Therapists": FaLeaf,
  Gardener: FaLeaf,
  "Residential Cleaner": FaBroom,
  Shoemaker: FaEdit,
  "Computer Repairer": FaDesktop,
  "Phone Technician": FaMobile,
  "HVAC Technicians": FaSnowflake,
  "Home Appliance Technicians": FaHome,
}

export default function CategoryIcon({ category, onClick, index = 0 }) {
  const IconComponent = iconMap[category] || FaWrench

  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-15 h-15 bg-teal-600 rounded-xl flex items-center justify-center text-white group-hover:bg-teal-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <IconComponent className="text-2xl" />
      </motion.div>
      <span className="text-xs text-center text-gray-700 font-medium max-w-20 leading-tight">{category}</span>
    </motion.div>
  )
}

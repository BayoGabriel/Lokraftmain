"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Carousel from "../../../components/Carousel"
import { Abi, Abi2, Abi1, Company, Customer, Artisan } from "@/public"
import Image from "next/image"

export default function User_Category_Screen({ onSelect, selected }) {
  const [selectedCategory, setSelectedCategory] = useState(selected)

  const categories = [
    { id: "artisan", name: "Artisan", icon: Artisan, color: "bg-[#F9A607]" },
    { id: "customer", name: "Customer", icon: Customer, color: "bg-[#8E59FF]" },
    { id: "company", name: "Company", icon: Company, color: "bg-[#BEB234]" },
  ]

  const carouselCards = [
    {
      id: 1,
      content: (
        <div className="text-white h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <Image src={Abi || "/placeholder.svg"} alt="abi" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="flex-shrink-0 px-4">
            <h5 className="text-[24px] md:text-[30px] font-[700] text-[#D8D96B] text-center">Create Your Profile</h5>
            <p className="text-[14px] md:text-[16px] font-[400] text-center">
              Tell your story and introduce your brand.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="text-white h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <Image src={Abi1 || "/placeholder.svg"} alt="abi" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="flex-shrink-0 px-4">
            <h5 className="text-[24px] md:text-[30px] font-[700] text-[#D8D96B] text-center">
              Get access to quality jobs
            </h5>
            <p className="text-[14px] md:text-[16px] font-[400] text-center">
              As artisan on Lokraft are sure of getting jobs that match your skills
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="text-white h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <Image src={Abi2 || "/placeholder.svg"} alt="abi" className="object-contain max-w-full max-h-full" />
          </div>
          <div className="flex-shrink-0 px-4">
            <h5 className="text-[24px] md:text-[30px] font-[700] text-[#D8D96B] text-center">Increase your earnings</h5>
            <p className="text-[14px] md:text-[16px] font-[400] text-center">
              Tell your story and introduce your brand.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    onSelect(categoryId)
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col max-md:gap-10 md:flex-row overflow-hidden">
      <div className="w-full md:w-1/2 bg-[#054F43] h-1/2 md:h-full flex px-8 md:px-20 gap-5 py-6 md:py-10 flex-col items-center justify-between">
        <div className="w-full flex-1 flex flex-col min-h-0">
          <Carousel cards={carouselCards} />
        </div>
        <div className="flex items-center w-full justify-evenly text-white text-xs md:text-sm flex-shrink-0">
          <span>© Lokraft. 2025</span>
          <span>Help center</span>
          <span>Terms of service</span>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center h-1/2 md:h-full overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
            Select user category
          </h1>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {categories.slice(0, 2).map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategorySelect(category.id)}
                className={`${category.color} text-white p-4 md:p-8 rounded-2xl flex flex-col items-center justify-center space-y-2 md:space-y-4 h-32 md:h-40 transition-all duration-200 ${
                  selectedCategory === category.id ? "ring-4 ring-offset-2 ring-gray-400" : ""
                }`}
              >
                <Image src={category.icon || "/placeholder.svg"} alt="image" className="w-8 h-8 md:w-auto md:h-auto" />
                <span className="font-semibold text-sm md:text-lg">{category.name}</span>
              </motion.button>
            ))}
          </div>

          <div className="flex justify-start mb-6 md:mb-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategorySelect("company")}
              className={`bg-yellow-600 text-white p-4 md:p-8 rounded-2xl flex flex-col items-center justify-center space-y-2 md:space-y-4 h-32 md:h-40 w-full sm:w-48 transition-all duration-200 ${
                selectedCategory === "company" ? "ring-4 ring-offset-2 ring-gray-400" : ""
              }`}
            >
              <Image src={Company || "/placeholder.svg"} alt="image" className="w-8 h-8 md:w-auto md:h-auto" />
              <span className="font-semibold text-sm md:text-lg">Company</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

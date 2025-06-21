"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Carousel from "../../../components/Carousel"
import { Abi, Abi2, Abi1, Company, Customer, Artisan } from "@/public"
import Image from "next/image"

export default function User_Category_Screen({ onNext, onSelect, selected }) {
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
            <Image src={Abi} alt="abi" className="object-contain"/>
          </div>
          <div className="flex-shrink-0">
            <h5 className="text-[30px] font-[700] text-[#D8D96B] text-center">Create Your Profile</h5>
            <p className="text-[16px] font-[400] text-center">Tell your story and introduce your brand.</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="text-white h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center ">
            <Image src={Abi1} alt="abi" className="object-contain"/>
          </div>
          <div className="flex-shrink-0">
            <h5 className="text-[30px] font-[700] text-[#D8D96B] text-center">Get access to quality jobs</h5>
            <p className="text-[16px] font-[400] text-center">As artisan on Lokraft are sure of getting jobs that match your skills</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="text-white h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <Image src={Abi2} alt="abi" className="object-contain"/>
          </div>
          <div className="flex-shrink-0">
            <h5 className="text-[30px] font-[700] text-[#D8D96B] text-center">Increase your earnings</h5>
            <p className="text-[16px] font-[400] text-center">Tell your story and introduce your brand.</p>
          </div>
        </div>
      ),
    },
  ]

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId)
    onSelect(categoryId)
  }

  const handleNext = () => {
    if (selectedCategory) {
      onNext()
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
        <div className="w-1/2 bg-[#054F43] h-full flex px-20 gap-5 py-10 flex-col items-center justify-between">
          <div className="w-full flex-1 flex flex-col">
            <Carousel cards={carouselCards} />
          </div>
          <div className="flex items-center w-full justify-evenly text-white text-sm flex-shrink-0">
            <span>© Lokraft. 2025</span>
            <span>Help center</span>
            <span>Terms of service</span>
          </div>
        </div>

        <div className="w-1/2 p-12 flex flex-col justify-center h-full overflow-y-auto">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">Select user category</h1>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {categories.slice(0, 2).map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`${category.color} text-white p-8 rounded-2xl flex flex-col items-center justify-center space-y-4 h-40 transition-all duration-200 ${
                    selectedCategory === category.id ? "ring-4 ring-offset-2 ring-gray-400" : ""
                  }`}
                >
                  <Image src={category.icon} alt="image" />
                  <span className="font-semibold text-lg">{category.name}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategorySelect("company")}
                className={`bg-yellow-600 text-white p-8 rounded-2xl flex flex-col items-center justify-center space-y-4 h-40 w-48 transition-all duration-200 ${
                  selectedCategory === "company" ? "ring-4 ring-offset-2 ring-gray-400" : ""
                }`}
              >
                <Image src={Company} alt="image" />
                <span className="font-semibold text-lg">Company</span>
              </motion.button>
            </div>

            {selectedCategory && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Continue
              </motion.button>
            )}
          </div>
        </div>
    </div>
  )
}
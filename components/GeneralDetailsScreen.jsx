"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { IoArrowBack, IoChevronDown } from "react-icons/io5"
import Carousel from "./Carousel"
import Header from "./Header"
import Image from "next/image"
import { Slide } from "@/public"

export default function GeneralDetailsScreen({ onNext, onBack, formData, updateFormData }) {
  const [agreed, setAgreed] = useState(false)

  const carouselCards = [
    {
      id: 1,
      content: (
        <Image src={Slide} alt="image" className=""/>
      ),
    },
    {
      id: 2,
      content: (
        <Image src={Slide} alt="image"/>
      ),
    },
    {
      id: 3,
      content: (
        <Image src={Slide} alt="image"/>
      ),
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (agreed) {
      onNext()
    }
  }

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value })
  }

  return (
    <div className="bg-gray-50 grid max-h-screen grid-cols-2 gap-2">
        {/* Left side - Image/Carousel */}
        <div className="">
          <Image src={Slide} className="object-contain w-full h-full" alt="alsi"/>
        </div>

        {/* Right side - Form */}
        <div className=" p-12">
          <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8">
            <IoArrowBack className="text-xl" />
            <span>Back</span>
          </button>

          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">General details</h1>
            <p className="text-gray-600 mb-8">We would like to know more about you</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="johndoe@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <div className="relative">
                    <select
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="lagos">Lagos</option>
                      <option value="abuja">Abuja</option>
                      <option value="kano">Kano</option>
                    </select>
                    <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Local Government (LGA)</label>
                  <div className="relative">
                    <select
                      value={formData.lga}
                      onChange={(e) => handleInputChange("lga", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="ikeja">Ikeja</option>
                      <option value="victoria-island">Victoria Island</option>
                      <option value="lekki">Lekki</option>
                    </select>
                    <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skill/Services</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none">
                    <option value="">Select 2 max</option>
                    <option value="tailoring">Tailoring</option>
                    <option value="carpentry">Carpentry</option>
                    <option value="plumbing">Plumbing</option>
                  </select>
                  <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  By clicking, you confirm that you have read and agree to the Terms and Conditions governing Lokraft.
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!agreed}
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  agreed ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next and continue
              </motion.button>
            </form>
          </div>
        </div>
    </div>
  )
}

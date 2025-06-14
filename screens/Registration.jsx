"use client"

import { useState } from "react"
import Logo from "@/components/reusables/Logo"
import Button from "@/components/reusables/Button"
import Input from "@/components/reusables/Input"
import Select from "@/components/reusables/Select"
import Carousel from "@/components/reusables/Carousel"
import { Car, Car2, Car3 } from "@/public"
const Registration = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "Johndoe@email.com",
    phone: "",
    state: "",
    lga: "",
    skills: "",
    agreeToTerms: false,
  })

  const carouselImages = [
    Car,
    Car2,
    Car3
  ]

  const stateOptions = [
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
    { value: "kano", label: "Kano" },
  ]

  const lgaOptions = [
    { value: "ikeja", label: "Ikeja" },
    { value: "victoria-island", label: "Victoria Island" },
    { value: "lekki", label: "Lekki" },
  ]

  const skillOptions = [
    { value: "tailoring", label: "Tailoring" },
    { value: "carpentry", label: "Carpentry" },
    { value: "plumbing", label: "Plumbing" },
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Carousel */}
      <div className="flex-1 relative">
        <Carousel images={carouselImages} className="h-full" />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col px-12 py-8 bg-white overflow-y-auto">
        <div className="max-w-lg mx-auto w-full">
          <div className="mb-8">
            <Logo />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">General details</h1>
              <p className="text-gray-600">We would like to know more about you</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First name"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                />
                <Input
                  label="Last name"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Email address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <Input
                  label="Phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="State"
                  options={stateOptions}
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  placeholder="Select"
                />
                <Select
                  label="Local Government (LGA)"
                  options={lgaOptions}
                  value={formData.lga}
                  onChange={(e) => handleInputChange("lga", e.target.value)}
                  placeholder="Select"
                />
              </div>

              <Select
                label="Skill/Services"
                options={skillOptions}
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                placeholder="Select 2 max"
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                  className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                  By clicking, you confirm that you have read and agree to the Terms and Conditions governing Lokraft.
                </label>
              </div>

              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => onNavigate("email-confirmation")}
              >
                Next and continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration

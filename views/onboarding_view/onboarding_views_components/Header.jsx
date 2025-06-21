"use client"

import { FullColorLogo } from "@/public"
import Image from "next/image"
const Header = ({ step, totalSteps, title }) => {
  const progress = (step / totalSteps) * 100

  return (
    <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className=""><Image src={FullColorLogo} className=""/></div>
        <div className="flex items-start flex-col gap-2">
          <span className="text-sm text-gray-500">
            {step} of {totalSteps}
          </span>
          <span>{title}</span>
        </div>
        
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-teal-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}

export default Header

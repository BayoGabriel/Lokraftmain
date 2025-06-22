"use client"

import Image from "next/image"
import { FiMapPin, FiClock } from "react-icons/fi"

const Card = ({ job, isSelected, onClick }) => {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-all ${
        isSelected ? "border-teal-500 bg-[#F5F2FF]" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={() => onClick(job)}
    >
      <div className="flex gap-3 flex-col">
        <Image src={job.image || "/placeholder.svg"} alt={job.title} className="w-16 h-16 rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
            <FiMapPin className="w-3 h-3" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
            <FiClock className="w-3 h-3" />
            <span>Posted {job.postedTime}</span>
          </div>
          <div className="font-semibold text-gray-900">₦{job.price.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}
export default Card
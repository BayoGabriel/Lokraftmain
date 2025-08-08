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
        <Image src={job.image} alt={job.title} className="w-full rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="font-[500] text-[#333333] mb-1">{job.title}</h3>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <FiMapPin className="w-3 h-3" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <FiClock className="w-3 h-3" />
              <span>Posted {job.postedTime}</span>
            </div>
          </div>
          <div className="font-semibold text-gray-900">₦{job.price.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}
export default Card
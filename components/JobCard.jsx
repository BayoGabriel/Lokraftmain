"use client"
import { FiMapPin, FiClock } from "react-icons/fi"

const JobCard = ({ job, isActive = false, onClick }) => {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
        isActive ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <div className="mb-3">
        <img src={job.image || "/placeholder.svg"} alt={job.title} className="w-full h-32 object-cover rounded-lg" />
      </div>

      <h3 className="font-semibold text-gray-800 mb-2">{job.title}</h3>

      <div className="flex items-center text-sm text-gray-500 mb-2">
        <FiMapPin className="w-4 h-4 mr-1" />
        <span>{job.location}</span>
        <FiClock className="w-4 h-4 ml-4 mr-1" />
        <span>Posted {job.timeAgo}</span>
      </div>

      <div className="text-lg font-bold text-gray-800">₦{job.price.toLocaleString()}</div>
    </div>
  )
}

export default JobCard

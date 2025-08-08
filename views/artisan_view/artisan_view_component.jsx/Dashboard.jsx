"use client"

import { useState } from "react"
import Job_List from "./Job_List"
import Job_Detail from "./Job_Detail"
import { BedFrame } from "@/public"
import Wallet_Balance from "./Wallet_Balance"
import Stats from "./Stats"
import Active_Bids from "./Active_Bids"

const mockJobs = [
  {
    id: 1,
    title: "Bed Frame Repair",
    location: "Alaba, Lagos",
    postedTime: "5mins ago",
    price: 50000,
    image: BedFrame,
    description:
      "We are seeking a skilled designer to craft an engaging information document in PDF format using Canva. The ideal candidate should have experience in document design and a strong understanding of visual typography, and color schemes. Attention to detail and the ability to effectively present information visually are crucial. If you have a portfolio showcasing your design work, we would love to see it. This project will involve working closely with our team to ensure the document aligns with our branding guidelines and effectively communicates our message.",
    timeline: "April 29 - April 30, 2025",
    projectType: "One-time",
    client: {
      rating: 5.0,
      reviewsCount: 5,
      totalReviews: 3,
      location: "Yaba, Lagos",
      jobsPosted: 15,
      memberSince: "Jan, 2025",
    },
  },
  {
    id: 2,
    title: "HVAC System Repair",
    location: "Alaba, Lagos",
    postedTime: "20mins ago",
    price: 50000,
    image: BedFrame,
    description:
      "Looking for an experienced HVAC technician to repair our air conditioning system. The unit is not cooling properly and may need parts replacement. Must have experience with commercial HVAC systems.",
    timeline: "May 1 - May 3, 2025",
    projectType: "One-time",
    client: {
      rating: 4.8,
      reviewsCount: 12,
      totalReviews: 15,
      location: "Victoria Island, Lagos",
      jobsPosted: 8,
      memberSince: "Mar, 2024",
    },
  },
]

const Dashboard = () => {
  const [selectedJob, setSelectedJob] = useState(mockJobs[0])

  const handleJobSelect = (job) => {
    setSelectedJob(job)
  }

  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2 bg-white">
      <h3 className="text-[#333333] text-[24px] font-[700]">Jobs For You</h3>
      <div className="flex gap-4">
        <button className="rounded-[5px] px-[14px] py-[9px] border border-gray-500 text-[12px]">Best Matches</button>
        <button className="rounded-[5px] px-[14px] py-[9px] border border-gray-500 text-[12px]">Most Recent</button>
      </div>
      <div className="flex gap-3">
        <div className="w-[30%]">
        <Job_List jobs={mockJobs} selectedJob={selectedJob} onJobSelect={handleJobSelect} />
        </div>
        <div className="w-[50%]">
        <Job_Detail job={selectedJob} />
        </div>
        <div className="flex flex-col w-[30%] gap-2">
          <Wallet_Balance/>
          <Active_Bids/>
          <Stats/>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
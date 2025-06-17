"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import JobCard from "@/components/JobCard"
import JobDetail from "@/components/JobDetail"
import WalletCard from "@/components/WalletCard"
import ActiveBids from "@/components/ActiveBids"
import UserStats from "@/components/UserStats"
import one from "@/public/img1.png"
import two from "@/public/img2.png"
import three from "@/public/img3.png"
import four from "@/public/img4.png"
const Dashboard = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [activeFilter, setActiveFilter] = useState("best-matches")

  const jobs = [
    {
      id: 1,
      title: "Bed Frame Repair",
      location: "Akoka, Lagos",
      timeAgo: "5mins ago",
      price: 50000,
      image: one,
      description:
        "We are seeking a creative designer to craft an engaging information document in PDF format using Canva. The ideal candidate should have experience in document design and a strong understanding of layout, typography, and color schemes. Attention to detail and the ability to effectively present information visually are crucial. If you have a portfolio showcasing your design work, we would love to see it. This project will involve working closely with our team to ensure the document aligns with our branding guidelines and effectively communicates our message.",
      budget: 50000,
      timeline: "April 28 - April 30, 2025",
      projectType: "One-time",
      client: {
        rating: 5.0,
        reviewCount: 3,
        location: "Yaba, Lagos",
        jobsPosted: 15,
        memberSince: "Jan, 2025",
      },
    },
    {
      id: 2,
      title: "HVAC System Repair",
      location: "Akoka, Lagos",
      timeAgo: "20mins ago",
      price: 50000,
      image: two,
      description: "Looking for an experienced HVAC technician to repair our air conditioning system.",
      budget: 50000,
      timeline: "May 1 - May 3, 2025",
      projectType: "One-time",
      client: {
        rating: 4.5,
        reviewCount: 8,
        location: "Victoria Island, Lagos",
        jobsPosted: 25,
        memberSince: "Dec, 2024",
      },
    },
    {
      id: 3,
      title: "Toilet Pressure Cleaning",
      location: "Akoka, Lagos",
      timeAgo: "40mins ago",
      price: 50000,
      image: three,
      description: "Need professional toilet pressure cleaning services for residential property.",
      budget: 50000,
      timeline: "April 29 - April 30, 2025",
      projectType: "One-time",
      client: {
        rating: 4.8,
        reviewCount: 12,
        location: "Ikoyi, Lagos",
        jobsPosted: 8,
        memberSince: "Mar, 2025",
      },
    },
    {
      id: 4,
      title: "Birthday Photoshoot",
      location: "Akoka, Lagos",
      timeAgo: "1hour ago",
      price: 50000,
      image: four,
      description: "Professional photographer needed for birthday celebration photoshoot.",
      budget: 50000,
      timeline: "May 5 - May 5, 2025",
      projectType: "One-time",
      client: {
        rating: 5.0,
        reviewCount: 6,
        location: "Lekki, Lagos",
        jobsPosted: 3,
        memberSince: "Feb, 2025",
      },
    },
  ]

  const handleJobSelect = (job) => {
    setSelectedJob(job)
  }

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 flex-col gap-2">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Jobs Section */}
            <div className="lg:col-span-2">
              {/* <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Jobs For You</h2>

                <div className="flex space-x-4 mb-6">
                  <button
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      activeFilter === "best-matches"
                        ? "border-gray-800 bg-gray-800 text-white"
                        : "border-gray-300 text-gray-600 hover:border-gray-400"
                    }`}
                    onClick={() => setActiveFilter("best-matches")}
                  >
                    Best matches
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      activeFilter === "most-recent"
                        ? "border-gray-800 bg-gray-800 text-white"
                        : "border-gray-300 text-gray-600 hover:border-gray-400"
                    }`}
                    onClick={() => setActiveFilter("most-recent")}
                  >
                    Most recent
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {jobs.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      isActive={selectedJob?.id === job.id}
                      onClick={() => handleJobSelect(job)}
                    />
                  ))}
                </div>
              </div> */}

              {/* Job Detail */}
              {/* <div className="mt-6">
                <JobDetail job={selectedJob} />
              </div> */}
            </div>

            {/* Right Sidebar */}
            {/* <div className="space-y-6">
              <WalletCard />
              <ActiveBids />
              <UserStats />
            </div> */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

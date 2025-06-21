"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import one from "@/public/img1.png"
import two from "@/public/img2.png"
import three from "@/public/img3.png"
import four from "@/public/img4.png"

export default function RootLayout({ children }) {
  const [selectedJob, setSelectedJob] = useState(null)
  const [activeFilter, setActiveFilter] = useState("best-matches")

  

  const handleJobSelect = (job) => {
    setSelectedJob(job)
  }

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="flex gap-2">
        <Sidebar />

        <main className="flex-1 flex-col gap-2">
          <Header />
          <div className="mt-2">{children}</div>
        </main>
      </div>
    </div>
  )
}


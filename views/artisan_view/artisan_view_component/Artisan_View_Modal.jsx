"use client"

import { createContext, useState, useContext, Fragment } from "react"
import Header from "./Header"
import Sidebar from "@/components/Sidebar"
import { Mock_Jobs } from "@/data/artisan_data/Mock_Jobs"

const AppContext = createContext()

export const useArtisanContext = () => useContext(AppContext)

export default function RootLayout({ children }) {
  const [showBalance, setShowBalance] = useState(false)
  const [selectedJob, setSelectedJob] = useState(Mock_Jobs[0])

  const handleJobSelect = (job) => {
    setSelectedJob(job)
  }

  const toggleBalance = () => {
    setShowBalance((prev) => !prev)
  }

  const value = {
    showBalance,
    toggleBalance,
    selectedJob,
    handleJobSelect,
    Mock_Jobs,
  }

  return (
    <AppContext.Provider value={value}>
      <Fragment>
        <div className="flex gap-2 w-full bg-gray-50">
          <div className="w-[20%] bg-white">
            <Sidebar />
          </div>
          <main className="w-[78%]">
            <Header />
            <div>{children}</div>
          </main>
        </div>
      </Fragment>
    </AppContext.Provider>
  )
}

"use client"

import Job_List from "./Job_List"
import Job_Detail from "./Job_Detail"
import Wallet_Balance from "./Wallet_Balance"
import Stats from "./Stats"
import Active_Bids from "./Active_Bids"
import { useArtisanContext } from "../../../context/Artisan_Context"

const Dashboard = () => {
  const { selectedJob, handleJobSelect, Mock_Jobs } = useArtisanContext()

  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2 bg-white">
      <h3 className="text-[#333333] text-[24px] font-[700]">Jobs For You</h3>
      <div className="flex gap-4">
        <button className="rounded-[5px] px-[14px] py-[9px] border border-gray-500 text-[12px]">Best Matches</button>
        <button className="rounded-[5px] px-[14px] py-[9px] border border-gray-500 text-[12px]">Most Recent</button>
      </div>
      <div className="flex gap-3">
        <div className="w-[30%]">
          <Job_List jobs={Mock_Jobs} selectedJob={selectedJob} onJobSelect={handleJobSelect} />
        </div>
        <div className="w-[50%]">
          <Job_Detail job={selectedJob} />
        </div>
        <div className="flex flex-col w-[40%] gap-6">
          <Wallet_Balance />
          <Active_Bids />
          <Stats />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

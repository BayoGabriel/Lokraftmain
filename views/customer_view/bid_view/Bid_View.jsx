"use client"

import Job_Detail from "@/views/artisan_view/artisan_view_component/Job_Detail"
import Right_Side from "../customer_view_components/Right_Side"
import Job_List from "@/views/artisan_view/artisan_view_component/Job_List"
import { useGlobalContext } from "@/context/Global_Context"


const Bid_View = () => {
  const { selectedJob, handleJobSelect, Mock_Jobs } = useGlobalContext()

  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2 bg-white">
      <h3 className="text-[#333333] text-[24px] font-[700]">Your Bids</h3>
      <div className="flex gap-4">
        <button className="rounded-[5px] px-[14px] py-[9px] border border-gray-500 text-[12px]">Best Matches</button>
        <button className="rounded-[5px] px-[14px] py-[9px] border border-gray-500 text-[12px]">Most Recent</button>
      </div>
      <div className="flex gap-3">
        <div className="w-[30%]">
          <Job_List jobs={Mock_Jobs} selectedJob={selectedJob} onJobSelect={handleJobSelect} />
        </div>
        <div className="w-[40%]">
          <Job_Detail showSendQuote={false} job={selectedJob} />
        </div>
        <div className="w-[30%]">
          <Right_Side/>
        </div>
      </div>
    </div>
  )
}

export default Bid_View

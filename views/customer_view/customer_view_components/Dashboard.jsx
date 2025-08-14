"use client"
import Right_Side from "./Right_Side"

const Dashboard = () => {

  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2">
      <div className="flex gap-3">
        <div className="w-[70%]">
            Vee
        </div>
        <div className="w-[30%]">
          <Right_Side/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

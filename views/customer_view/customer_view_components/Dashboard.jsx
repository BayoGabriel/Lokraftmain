"use client"
import Info_Icon from "@/public/svg/Info_Icon"
import Community from "./Community"
import Wallet_Balance from "./Wallet_Balance"
import { Social_Links } from "@/public/svg"
import Messages from "./Messages"

const Dashboard = () => {

  return (
    <div className="rounded-[20px] flex flex-col gap-4 border border-gray-50 p-2">
      <div className="flex gap-3">
        <div className="w-[70%]">
            Vee
        </div>
        <div className="flex flex-col w-[30%] gap-6">
          <Wallet_Balance/>
          <div className="flex flex-col gap-2">
            <Community/>
            <Community 
              isNew = {false}
              title="News and Information"
              icon={Info_Icon}
            />
            <Community 
              isNew = {false}
              title="Social Media"
              icon={Social_Links}
            />
          </div>
          <Messages/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

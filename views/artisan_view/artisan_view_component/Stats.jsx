import { Stats_Bg, Stats_Icon } from "@/public/svg"
import Link from "next/link"

const Stats = ({absoluteImg = <Stats_Bg />, title="Wallet Balance", number=50, linkurl = "/wallet", icon = <Stats_Icon/>, amount= "N500,000,000", description= "Available balance"}) => {
  return (
    <div className="flex w-full bg-[#F5F2FF] flex-col gap-4 p-6 relative">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
                <span>{icon}</span>
                <span>{title}</span>
            </div>
        </div>
        <div className="flex gap-6">
            <div className="flex flex-col gap-1">
                <span>{amount}</span>
                <span>{description}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span>{number}</span>
                <span>Total Jobs</span>
            </div>
        </div>
        <div className="absolute bottom-0 right-0">
            {absoluteImg}
        </div>
    </div>
  )
}

export default Stats
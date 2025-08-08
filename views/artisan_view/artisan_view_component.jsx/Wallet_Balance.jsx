import { Wallet_Absolute_Img, Wallet_Icon } from "@/public/svg"
import Link from "next/link"

const Wallet_Balance = ({absoluteImg = <Wallet_Absolute_Img />, title="Wallet Balance", linkText="view wallet", linkurl = "/wallet", icon = <Wallet_Icon/>, amount= "N500,000,000", description= "Available balance"}) => {
  return (
    <div className="flex w-full bg-[#F5F2FF] flex-col gap-4 p-6 relative">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
                <span>{icon}</span>
                <span>{title}</span>
            </div>
            <Link href={linkurl}>{linkText}</Link>
        </div>
        <div className="flex flex-col gap-2">
            <span>{amount}</span>
            <span>{description}</span>
        </div>
        <div className="absolute bottom-0 right-0">
            {absoluteImg}
        </div>
    </div>
  )
}

export default Wallet_Balance
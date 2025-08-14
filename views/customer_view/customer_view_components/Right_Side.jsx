import Overfloat_Bg from "@/public/svg/Overfloat_Bg"
import Community from "./Community"
import Messages from "./Messages"
import Wallet_Balance from "./Wallet_Balance"
import { Social_Links } from "@/public/svg"
import Info_Icon from "@/public/svg/Info_Icon"

const Right_Side = () => {
  return (
    <div className="flex relative flex-col w-full min-h-[500px] gap-6">
        <div className="absolute right-0 top-[5%]">
        <Overfloat_Bg/>
        </div>
        <div className="absolute right-0 bottom-[5%]">
        <Overfloat_Bg/>
        </div>
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
  )
}

export default Right_Side
"use client"
import Ewallet from "./wallet_view_components/Ewallet"
import ArtisanSatisfaction from "./wallet_view_components/Artisan_Satisfaction"
import TopServicesRequested from "./wallet_view_components/Top_Services_Requested"
import Nigerian_Map from "./wallet_view_components/Nigerian_Map"
const Wallet_View = () => {
  return (
    <div>
        <div className="flex gap-4 my-4">
          <div className="w-[60%]">
            <Ewallet />
          </div>
          <div className="w-[40%]">
            <ArtisanSatisfaction />
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="w-[60%]">
            <TopServicesRequested />
          </div>
          <div className="w-[40%]">
            <Nigerian_Map />
          </div>
        </div>
    </div>
  )
}

export default Wallet_View
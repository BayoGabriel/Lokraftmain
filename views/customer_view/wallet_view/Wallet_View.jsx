"use client"
import Ewallet from "./wallet_view_components/Ewallet"
import ArtisanSatisfaction from "./wallet_view_components/Artisan_Satisfaction"
import TopServicesRequested from "./wallet_view_components/Top_Services_Requested"
const Wallet_View = () => {
  return (
    <div>
        <div className="flex gap-4">
        <Ewallet />
        <ArtisanSatisfaction />
        </div>
        <TopServicesRequested />
    </div>
  )
}

export default Wallet_View
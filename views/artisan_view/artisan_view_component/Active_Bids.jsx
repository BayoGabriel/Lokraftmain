import { BidImage } from "@/public"
import Bid from "./Bid"
import Link from "next/link"

const Active_Bids = () => {
    const Bid_Data = [
        {
            image: BidImage,
            style: 'bg-[#B41C2DD4]',
            text: 'Fix a leaking pipe and canal in Sangotedo, Lagos',
            url: '/bidss'
        },
        {
            image: BidImage,
            style: 'bg-[#94430C]',
            text: 'Fix a leaking pipe and canal in Sangotedo, Lagos',
            url: '/bidss'
        },
        {
            image: BidImage,
            style: 'bg-[#4C169C]',
            text: 'Fix a leaking pipe and canal in Sangotedo, Lagos',
            url: '/bidss'
        },
        {
            image: BidImage,
            style: 'bg-[#274E63]',
            text: 'Fix a leaking pipe and canal in Sangotedo, Lagos',
            url: '/bidss'
        }
    ]
  return (
    <div className="flex flex-col bg-[#FEF7EE] rounded-[6px] p-3 gap-4">
        <div className="flex items-center gap-10 justify-center">
            <h6>Active Bids</h6>
            <Link href={"/active-bids"}>See all bids</Link>
        </div>
        <div className="flex flex-col gap-4">
            {Bid_Data.map((item, index) => (
                <Bid 
                    key={index}
                    text={item.text}
                    url={item.url}
                    imgSrc={item.image}
                    style={item.style}
                />
            ))}
        </div>
    </div>
  )
}

export default Active_Bids
import { BidImage } from "@/public"
import Link from "next/link"

const Bid = ({imgSrc, text, url, style}) => {
  return (
    <div className={`rounded-[10px] p-4 flex items-center justify-between w-full ${style}`}>
        <img src={imgSrc} alt="te" className="rounded-full"/>
        <p className="">
            {text}
        </p>
        <Link className="p-2 rounded-[10px] bg-white" href={url}>
            view bid
        </Link>
    </div>
  )
}

export default Bid
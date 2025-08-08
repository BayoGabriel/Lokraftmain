import Image from "next/image"
import Link from "next/link"

const Bid = ({imgSrc, text, url, style}) => {
  return (
    <div className={`rounded-[10px] p-4 flex items-center gap-2 justify-between w-full ${style}`}>
        <Image src={imgSrc} alt="te" className="rounded-full"/>
        <p className="text-sm text-white">
            {text}
        </p>
        <Link className="p-2 rounded-[10px] text-[14px] text-nowrap bg-white" href={url}>
            view bid
        </Link>
    </div>
  )
}

export default Bid
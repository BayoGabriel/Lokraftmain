import { BannerImage, ProfilePicture } from "@/public"
import { Edit } from "@/public/svg"
import Image from "next/image"

const Heading = () => {
  return (
    <div className="relative">
        <Image src={BannerImage} alt="BannerImage" className="w-full"/> 
        <Image src={ProfilePicture} alt="BannerImage" className="absolute top-[40%] w-[200px] left-[3%]"/>
        <div className="absolute p-2 bg-[#F6F6F9] top-6 right-10 cursor-pointer rounded-full">
            <Edit/>
        </div>
    </div>
  )
}

export default Heading
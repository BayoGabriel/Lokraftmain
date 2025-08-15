import { WorldMap } from "@/public"
import Image from "next/image"

const Nigerian_Map = () => {
  return (
    <div className="bg-white w-full p-6 h-full rounded-lg shadow-sm">
      <h4 className="text-2xl font-bold text-[#222B45] mb-6">Artisans by Location</h4>
      <Image src={WorldMap} alt="World Map" className="w-full"/>
    </div>
  )
}

export default Nigerian_Map
import { IoEyeOffOutline } from "react-icons/io5"

const First_Component = () => {
  return (
    <div className="flex flex-col px-6 py-10 rounded-[20px] bg-white items-start my-4">
        <div className="flex items-center gap-2">
            <span className="text-[#333333] encode-sans">Your balance</span>
            <IoEyeOffOutline className="text-[#02846B80]" />
        </div>
    </div>
  )
}

export default First_Component
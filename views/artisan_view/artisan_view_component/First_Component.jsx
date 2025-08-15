import { Yellow1, Yellow2 } from '@/public'
import Image from 'next/image'
import React from 'react'

const First_Component = ({
  text = "BONUS UP TO 60% OFF ARTISANS BOOKING",
  containerClass = "bg-[#F9A607] px-6 py-2 my-4 rounded-[8px]"
}) => {
  return (
    <div className={`w-full flex items-center justify-between ${containerClass}`}>
      {typeof text === "string" ? (
        <h3 className='text-[33px] font-[800] text-black'>{text}</h3>
      ) : (
        text
      )}
      <div className="flex items-center gap-8">
        <Image src={Yellow1} alt="yellow" />
        <Image src={Yellow2} alt="yellow" />
      </div>
    </div>
  )
}

export default First_Component

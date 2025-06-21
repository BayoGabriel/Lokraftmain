import { Yellow1, Yellow2 } from '@/public'
import Image from 'next/image'
import React from 'react'

const First_Component = () => {
  return (
    <div className='w-full bg-[#F9A607] flex items-center justify-between px-6 py-2 rounded-[8px]'>
        <h3 className='text-[33px] font-[800] text-black'>BONUS UP TO 60% OFF ARTISANS BOOKING</h3>
        <div className="flex items-center gap-8">
            <Image src={Yellow1} alt='yellow'/>
            <Image src={Yellow2} alt='yellow'/>
        </div>
    </div>
  )
}

export default First_Component
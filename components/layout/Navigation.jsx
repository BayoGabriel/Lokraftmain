import React from 'react'
import Image from 'next/image'
import { GreenBg, MainLogo } from '@/public'

const Navigation = () => {
  return (
    <div className='w-full max-lg:h-[60px] lg:h-[120px] bg-[#02846B] flex items-center justify-center relative'>
      <Image src={GreenBg} className='w-full h-full max-md:hidden object-contain' alt="lf"/>
      <Image 
        src={MainLogo} 
        alt='logo' 
        className='absolute top-1/2 left-1/2 max-lg:h-[3em] h-[10em] -translate-x-1/2 -translate-y-1/2 z-10'
      />
    </div>
  )
}

export default Navigation

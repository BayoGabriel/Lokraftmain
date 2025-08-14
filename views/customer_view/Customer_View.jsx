import React from 'react'
import Dashboard from './customer_view_components/Dashboard'
import First_Component from '../artisan_view/artisan_view_component/First_Component'

const Customer_View = () => {
  return (
    <div>
      <First_Component 
        containerClass='bg-[#FFFEE1] rounded-[20px] my-4'
        text={
          <div className="flex flex-col px-4">
            <span className="text-2xl uppercase text-[#02846B] font-bold">Bonus</span>
            <h4 className="text-[33px] font-[800] text-black">UP TO <span className='text-[#02846B]'>60%</span> OFF ARTISANS BOOKING</h4>
          </div>
        }
      />
      <Dashboard/>
    </div>
  )
}

export default Customer_View
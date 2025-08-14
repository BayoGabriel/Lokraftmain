import Customer_View from '@/views/customer_view/Customer_View'
import Customer_View_Modal from '@/context/Customer_Context'
import React, { Fragment } from 'react'

const Customer_Dashboard = () => {
  return (
    <Fragment>
        <Customer_View_Modal>
            <Customer_View/>
        </Customer_View_Modal>
    </Fragment>
  )
}

export default Customer_Dashboard
import Artisan_View from '@/views/artisan_view/Artisan_View'
import Artisan_View_Modal from '@/views/artisan_view/artisan_view_component.jsx/Artisan_View_Modal'
import React, { Fragment } from 'react'

const Artisan_Dashboard = () => {
  return (
    <Fragment>
        <Artisan_View_Modal>
            <Artisan_View/>
        </Artisan_View_Modal>
    </Fragment>
  )
}

export default Artisan_Dashboard
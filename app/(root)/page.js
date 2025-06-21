import Home_View from '@/views/home_view/Home_View'
import Home_View_Modal from '@/views/home_view/home_view_components/Home_View_Modal'
import React, { Fragment } from 'react'

const Home_Page = () => {
  return (
    <Fragment>
      <Home_View_Modal>
        <Home_View/>
      </Home_View_Modal>
    </Fragment>
  )
}

export default Home_Page
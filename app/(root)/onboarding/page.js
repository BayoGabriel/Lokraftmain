import Onboarding_View from '@/views/onboarding_view/Onboarding_View'
import Onboarding_View_Modal from '@/views/onboarding_view/onboarding_views_components/Onboarding_View_Modal'
import React, { Fragment } from 'react'

const Onboarding = () => {
  return (
    <Fragment>
      <Onboarding_View_Modal>
        <Onboarding_View/>
      </Onboarding_View_Modal>
    </Fragment>
  )
}

export default Onboarding
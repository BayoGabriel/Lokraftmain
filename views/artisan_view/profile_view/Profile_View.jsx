import React, { Fragment } from 'react'
import Address_Info from './profile_view_components/Address_Info'
import Heading from './profile_view_components/Heading'
import Identity_Verification from './profile_view_components/Identity_Verification'
import Image_Edit from './profile_view_components/Image_Edit'

const Profile_View = () => {
  return (
    <Fragment>
        <Heading/>
        <Address_Info/>
        <Identity_Verification/>
        <Image_Edit/>
    </Fragment>
  )
}

export default Profile_View
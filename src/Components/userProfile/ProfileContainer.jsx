import React from 'react'
import ProfileSideBar from './ProfileSideBar'
import ProfileContent from './ProfileContent'

const ProfileContainer = () => {
  return (
    <>
    <div className='flex'>
    <ProfileSideBar/>
    <ProfileContent/>
    </div>
    </>
  )
}

export default ProfileContainer
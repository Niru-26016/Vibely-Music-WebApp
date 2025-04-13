import React from 'react'
import { Outlet } from 'react-router-dom'

const AlbumLandingContent = () => {
  return (
    <div className='basics-[85%] h-[calc(100vh-70px)]  mt-[70px] ml-[16%]'>
        <Outlet/>
    </div>
  )
}

export default AlbumLandingContent
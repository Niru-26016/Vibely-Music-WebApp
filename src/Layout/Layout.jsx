import React from 'react'
import NavBarContainer from '../Components/NavBarBlock/NavBarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <>
    <Toaster/>
    <NavBarContainer/>
    <Outlet/>
    </>
  )
}

export default Layout
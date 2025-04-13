import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBarContainer = () => {
  return (
    <header className='w-[100vw] h-[70px] bg-gradient-to-r from-[#000000] via-[#3f4149] to-[#000000] flex justify-between items-center px-6 shadow-lg fixed top-0 z-20 hover:shadow-2xl transition-shadow duration-300'>
        <Logo />
        <Menu />
    </header>
  )
}

export default NavBarContainer
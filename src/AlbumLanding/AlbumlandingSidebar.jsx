import React from 'react'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi'
import { LuDiscAlbum } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const AlbumlandingSidebar = () => {
  return (
    <aside className='basis-[17%] bg-gradient-to-b from-[#000000] via-[#36383e] to-[#000000] text-amber-50 h-[100vh] fixed mt-[70px]'>
        <nav className='w-full p-7'>
            <ul className='w-full flex flex-col'>
                <li className='py-3 px-6 mb-3 bg-[#6f00ffaa] hover:bg-[#8884f5] active:bg-[#be8dffaa] rounded-2xl flex items-center gap-2 w-full'> 
                    <span className='text-2xl'><GiHamburgerMenu/></span>
                    <span className='text-xl tracking-wider'>Explore</span>
                </li>
                <li>
                    <NavLink to={"/"}  end className={({isActive})=>`${isActive ? "bg-[#6f00ffaa] hover:bg-[#be8dffaa] active:bg-[#be8dffaa]":""} py-3 px-6 bg-[#6f00ffaa] hover:bg-[#8884f5] active:bg-[#be8dffaa] cursor-pointer flex items-center gap-2 rounded-xl w-full`}>
                        <span className='text-2xl'><LuDiscAlbum/></span>
                        <span className='text-xl'>Popular Albums</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default AlbumlandingSidebar
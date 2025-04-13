import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <aside className='w-[15%] min-h-[calc(100vh)] bg-gray-900 text-white font-semibold text-lg fixed top-0 flex flex-col'>
      <h1 className='text-center text-xl py-4 border-b border-gray-700'>Admin Panel</h1>
      <nav className='w-full'>
        <ul className='w-full p-4 mt-4'>
          <li>
            <NavLink 
              to={"/admin"} 
              className={({isActive}) => 
                isActive 
                  ? 'text-white text-base font-semibold py-2 px-4 bg-blue-600 rounded block' 
                  : 'text-gray-400 text-base font-semibold py-2 px-4 hover:bg-gray-800 hover:text-white rounded block'
              }>
              Create Album
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AdminSideBar
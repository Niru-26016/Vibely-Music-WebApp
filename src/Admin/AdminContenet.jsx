import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminContenet = () => {
  return (
    <section className=' basis-[85%] min-h-[calc(100vh-70px)] bg-gray-500 mt-[70px] ml-[14%] '>
      <div className='w-full h-full flex items-center justify-center'>
        <Outlet/>
      </div>
    </section>
  )
}

export default AdminContenet
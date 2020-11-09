import React from 'react'
import NavBar from '../navbar'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col md:flex-row font-nunito w-screen'>
      <div className='flex-row w-full md:flex-col md:w-2/12 md:h-screen'>
        <NavBar />
      </div>
      <div className='flex-col p-6 w-100 md:w-10/12  '>
        {children}
      </div>
    </div>
  )
}



import React from 'react'
import NavBar from '../navbar'

export default function Layout({ children}) {
  return (
    <div className='flex  flex-row font-nunito w-screen  h-100 lg:h-screen'>
      <div className='flex-col w-2/12  h-100 lg:h-screen'>
        <NavBar />
      </div>
      <div className='flex-col w-10/12 p-6 h-100 lg:h-screen bg-salmon-dark '>
        {children}
      </div>
    </div>
  )
}
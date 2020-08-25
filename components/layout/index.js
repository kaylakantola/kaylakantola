import React from 'react'
import NavBar from '../navbar'

export default function Layout({ children}) {
  return (
    <div className='flex  flex-row font-nunito w-screen h-screen'>
      <div className='flex-col w-2/12 '>
        <NavBar />
      </div>
      <div className='flex-col w-10/12 p-6'>
        {children}
      </div>
    </div>
  )
}
import React from 'react'
import NavBar from '../navbar'

export default function Layout({ children}) {
  return (
    <div className='flex-col font-nunito w-screen h-screen'>
      <NavBar />
      <div className='flex flex-col flex-1 w-full p-4'>
        {children}
      </div>
    </div>
  )
}
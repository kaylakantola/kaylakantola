import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const links = ['about', 'work']




export default function Header(props) {
  const router = useRouter()
  return(
    <div className='w-screen flex flex-row items-center bg-turquoise text-white h-12'>
      <Link  href={`/`}>
        <a className="cursor-pointer px-4 flex items-center flex-row">
          <div className="text-xl text-salmon-light">KAYLA KANTOLA</div>
        </a>
      </Link>
      <div className={`flex items-start`}>
        {links.map(link => (
          <Link href={`/${link}`}>
            <a className={`${router.pathname.includes(link) ? 'font-bold' : 'font-thin hover:underline'} cursor-pointer capitalize px-4`}>
              {link}
            </a>
          </Link>))}
      </div>


    </div>
  )
}
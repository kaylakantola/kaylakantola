import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const links = ['about', 'work']




export default function NavBar(props) {
  const router = useRouter()
  return(
    <div className='flex flex-col items-center bg-turquoise text-white h-full p-4 '>
      <Link  href={`/`}>
        <a className="cursor-pointer flex items-center flex-row shadow-lg">
          <img src={"/images/kayla_square.png"} alt="kayla"/>
        </a>
      </Link>
      <div className="w-full h-0 lg:h-auto lg:pt-1 text-xl justify-left text-salmon invisible lg:visible">Kayla Kantola</div>
      <div className="w-full  text-xs justify-left text-salmon-light invisible lg:visible">Software Engineer</div>
      <div className={`flex w-full flex-col lg:py-4  `}>
        {links.map(link => (
          <Link href={`/${link}`}>
            <a className={`${router.pathname.includes(link) ? 'font-bold' : 'font-thin hover:underline'} cursor-pointer capitalize py-2 text-lg`}>
              {link}
            </a>
          </Link>))}
      </div>


    </div>
  )
}

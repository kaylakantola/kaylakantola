import React from 'react'
import Link from "next/link";


export default function DisplayItemLink({title, children, href}) {

  return (
    <Link href={href}>
    <div  className="shadow-lg w-full bg-salmon-light cursor-pointer rounded-md p-4">
      <div className="text-xl lg:text-2xl w-full pb-2 px-4">
        {title}
      </div>
      <div className=" w-full">
        {children}
      </div>
    </div>
    </Link>
  )
}
import React from 'react'


export default function DisplayItem({title, children}) {

  return (
    <div  className="shadow-lg w-full bg-salmon-light rounded-md p-4">
        <div className="text-xl lg:text-2xl w-full pb-2 px-4">
          {title}
        </div>
      <div className=" w-full">
        {children}
      </div>
    </div>
  )
}
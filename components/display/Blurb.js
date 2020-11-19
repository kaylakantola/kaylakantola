import React from "react";

export default function Blurb({children}) {
  return (<div className="p-4 flex flex-col justify-center align-center text-espresso-dark">
    {children}
  </div>)
}
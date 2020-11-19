import React from "react";
import {DisplayItem, Blurb} from '../../components/display'


function Status() {
  return (
    <div className="font-nunito">
    <main>
      <div className="text-2xl lg:text-4xl text-espresso-dark">
       STATUS
      </div>
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 text-espresso-dark"}>

        <DisplayItem title={"https://wwww.kaylakantola.com/api/health"}>
          <Blurb>
           Some blurb
          </Blurb>
        </DisplayItem>
      </div>

    </main>
  </div>)
}

export default Status
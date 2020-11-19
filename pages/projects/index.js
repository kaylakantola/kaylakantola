import React from "react";
import {DisplayItemLink, Blurb} from '../../components/display'



function Projects() {

  return (
    <div className="font-nunito">
      <main>
        <div className="text-2xl lg:text-4xl text-espresso-dark">
          PROJECTS
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 text-espresso-dark"}>

          <DisplayItemLink title={"Lazy Shapes"} href={"/projects/lazy-shapes"}>
            <Blurb>
             Draw a general, non-precise shape. Assign different known values on each side, and transform into an accurate drawing of the shape.
            </Blurb>
          </DisplayItemLink>

        </div>

      </main>
    </div>)
}


export default Projects
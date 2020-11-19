import React from "react";
import {LazyShapes} from '../../components/LazyShapes'

function LazyShapesPage() {

  return (
    <div className="font-nunito">
      <main>
        <div className="text-2xl lg:text-4xl text-espresso-dark">
          LAZY SHAPES
        </div>
        <div>
          <LazyShapes />
        </div>

      </main>
    </div>)
}


export default LazyShapesPage
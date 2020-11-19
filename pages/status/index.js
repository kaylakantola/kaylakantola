import React, {useState, useEffect} from "react";
import {DisplayItem, Blurb} from '../../components/display'


function Status() {
  const [status, setStatus] = useState("Healthy as ...")

  const fetchStatus = async () => {
    const response = await fetch('/api/health', {
      method: 'GET',
      credentials: 'same-origin',
    }).then(res => res.text())
      .catch(console.log)
    setStatus(response)
  }

  useEffect(() => {
    if (status === "Healthy as ...") {
      fetchStatus()
    }
  }, [])

  return (
    <div className="font-nunito">
      <main>
        <div className="text-2xl lg:text-4xl text-espresso-dark">
          STATUS
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 text-espresso-dark"}>

          <DisplayItem title={"API"}>
            <Blurb>
              {status}
            </Blurb>
          </DisplayItem>
        </div>

      </main>
    </div>)
}


export default Status
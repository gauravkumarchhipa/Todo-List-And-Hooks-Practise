import React from 'react'
import { useState } from 'react';
const Shortcircuitevalu = () => {
    const [demo, setdemo] = useState("Himanshu");
    console.log(setdemo);
  return (
    <div>
        {/* && , ||  */}

        <h1>{demo || "Himanshu Joshi"}</h1>
        <h1>{demo && <><h3>Hello Gaurav</h3></>}</h1>
    </div>
  )
}

export default Shortcircuitevalu
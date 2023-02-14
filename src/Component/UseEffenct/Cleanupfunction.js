import React from 'react'
import { useState, useEffect } from 'react'

const Cleanupfunction = () => {
    const [widhCount, setWidhCount] = useState(window.screen.width);

    const actualWidht = ()=>{
        setWidhCount(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", actualWidht);
        // console.log("first")

        return ()=>{
            window.removeEventListener("resize", actualWidht);
            // console.log("second")
        }
    });

  return (
    <div>
        <p>Actual size of the window is : </p>
        <h1>{widhCount}</h1>
    </div>
  )
}

export default Cleanupfunction
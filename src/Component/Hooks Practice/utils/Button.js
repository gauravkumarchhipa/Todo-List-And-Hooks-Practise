import React, { useEffect, useState } from 'react'

const Button1 = ({fetchData}) => {
    console.log("I am Gaurav");
    const [num, setNum]= useState("");

    useEffect(() => {
      setNum(fetchData(5));
    }, [fetchData])
    
  return (
    <div>
        This is Button <p>{num}</p>
    </div>
  )
}

export default (Button1)
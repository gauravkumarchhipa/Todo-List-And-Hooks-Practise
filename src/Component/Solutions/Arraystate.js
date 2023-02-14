import React from 'react'
import { useState } from 'react';
const Arraystate = () => {
    const bioData = [
        {id : 0, Name : "Gaurav", Age : 23},
        {id : 1, Name : "Himanshu", Age : 24}
    ]
    // console.log(typeof bioData);

    const [myArray, setMyArray] = useState(bioData);

    const clearArray=()=>{
        setMyArray([]);
    }
  return (
    <>
    <br/>
    <h1>Array using UseState</h1>
        {
            myArray.map((curEle) => {
                return <h1 key={curEle.id}>Name : {curEle.Name} & Age : {curEle.Age} </h1>
            })
        }
        <button type="button" className="btn btn-primary" onClick={clearArray}>Clear</button>
    </>
  )
}

export default Arraystate
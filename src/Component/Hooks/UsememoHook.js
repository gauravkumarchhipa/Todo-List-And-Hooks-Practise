import React from 'react'
import { useState, useMemo } from 'react';

const UseMemoHook = () => {
  const [myNum, setmyNum] = useState(0);
  const [show, setShow] = useState(true);
  
  const getvalue = ()=>{
    return setmyNum(myNum + 1);
  };

  const countNumber = (num)=>{
    console.log("num", num);
    for (let i=0; i<= 10000; i++){}
    return num;
  }
  const checkData = useMemo(()=>{
    return countNumber(myNum);
  }, [myNum]);

  
  // const checkData = countNumber(myNum);
  

  return (
    <>
      <button type="button" className="btn btn-danger" onClick={getvalue} >Counter</button>
      <p>My new number : 
        {checkData}  
        </p>
      <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </>
  )
}

export default UseMemoHook
import React from 'react'
import {useState } from 'react'
import useCustomeHooks2 from './useCustomeHooks2';
const CustomeHooks = () => {

  const [count, setCount] = useState(0);
  
  useCustomeHooks2(count);

  return (
     <div className='container'>
        <h1>{count}</h1>
        <button type="button" className="btn btn-primary" onClick={()=> setCount(count+1)}>click</button>
    </div>
  )
}

export default CustomeHooks
import React from 'react'
import {useState, useEffect } from 'react'

const Useeffect2 = () => {

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        // console.log("1");
        if(count > 0){
            document.title = `Todo (${count})`
        }else{
            document.title = `Todo`
        }
    }, [count]);
    // console.log("2");

  return (
    <div className='container'>
        <h1>{count}</h1>
        <button type="button" className="btn btn-primary" onClick={()=> setCount(count+1)}>click</button>
    </div>
  )
}

export default Useeffect2
import React from 'react'
import {useState, useEffect } from 'react'

const Useeffect = () => {

    const [count, setCount] = useState(0);
    console.log(`count "hello"`)
    
    useEffect(()=>{
        if(count > 0){
            document.title = `Todo (${count})`
            console.log(`count "hi"`)
        }else{
            document.title = `Todo`
        }
        console.log(count)
    })

  return (
    <div className='container'>
        <h1>{count}</h1>
        <button type="button" className="btn btn-primary" onClick={()=> setCount(count+1)}>click</button>
    </div>
  )
}

export default Useeffect
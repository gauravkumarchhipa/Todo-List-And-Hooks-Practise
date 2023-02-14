import React from 'react'
import { useRef, useState, useEffect } from 'react'

const UseRefHooks = () => {
    const inputRef = useRef(null);
    const handleInput = ()=>{
        console.log("first")
        inputRef.current.value = "1000";
        inputRef.current.focus();
        inputRef.current.style.color = "red";
        // inputRef.current.style.display = "none";
    }

    const count = useRef(0);
    const [text, setText] = useState('');

    useEffect(()=>{
        count.current = count.current + 1;

    })

  return (
    <div className='container'> 
    <br/>
        <label htmlFor="exampleInputEmail1">click Button</label>
          <input type="text" ref={inputRef} className="form-control" placeholder="click Button" autoComplete='off'/>
        
        <br/>
        <button type="submit" className="btn btn-primary" onClick={handleInput}>handle Input</button><br/><br/>

        <label htmlFor="exampleInputEmail1">Enter text </label>
          <input type="text" value= {text} onChange={(e)=>setText(e.target.value)} className="form-control" placeholder="Enter any text" autoComplete='off'/>
        
        <br/>
        <h1>Render count : {count.current}</h1>
    </div>
  )
}

export default UseRefHooks
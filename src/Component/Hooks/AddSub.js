import React from 'react'
import {useState} from 'react'

const AddSub = () => {

    const [count, setCount] = useState(0);
    
  return (
    <div className='container'>
      <br/><br/><br/>
        <button type="button" className="btn btn-primary" onClick={()=> setCount(count+1)}>Add</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{count }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary" onClick={()=> setCount(count-1)}>Sub</button>
    </div>
  )
}

export default AddSub
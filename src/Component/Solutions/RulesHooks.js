// Always Write it inside the command or function
// Component name must be PascalCase
// we can directly import or we can directly write it using React.RulesHooks
// Don't call Hooks inside loops, conditions or nested function.


import { useState } from "react"
import React from 'react'

const RulesHooks = () => {
    const [myName, setMyName] = useState('Rules');
    
    const Rulesbtn = ()=>{
        let val = myName;
        (val === 'Rules') ?  setMyName("Thank you") : setMyName('Rules');
        
    }
  return (
    <div>
        <br/>
        <h1>{myName}</h1>
        <p>Always Write it inside the command or function </p>
          <p>Component name must be PascalCase</p>
          <p>we can directly import or we can directly write it using React.RulesHooks</p>
         <p>Don't call Hooks inside loops, conditions or nested function.</p>
        <button type="button" className="btn btn-primary" onClick={Rulesbtn}>change</button>

    </div>
  )
}

export default RulesHooks
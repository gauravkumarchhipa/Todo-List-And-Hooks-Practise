import React, { useState } from 'react';
const Togglebtn = () =>{
  const [myName, setMyName] = useState("World");
  const Togglebt=()=>{

    let val = myName;

    if(val === 'World'){
        setMyName('India');
    }
    else{
        setMyName('World');
    }

  }
  return (
    <div>
        <br/>
        <h1>Toggle Button</h1>
        <h3>{myName}</h3>
        <button type="button" className="btn btn-primary" onClick={Togglebt}>change</button>
    </div>
  );
}
export default Togglebtn;

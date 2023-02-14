import React, { useState } from 'react';
const ChangeState = () =>{
  const [myName, setmyName] = useState("World");

  const changeName=()=>{
    setmyName('India');  
  }
  
  return (
    <div>
        <h1>Change State</h1>
        <h3>{myName}</h3>
        <button type="button" className="btn btn-primary" onClick={changeName}>change</button>
    </div>
  );
}
export default ChangeState;
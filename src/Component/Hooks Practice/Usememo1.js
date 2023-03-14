// without useMemo

// import React from 'react'
// import { useState } from 'react';

// const Usememo = () => {
//   const [show, setShow] = useState(true);
//   const id = Math.random() *5;
//   return (
//     <>
//       <p>My new number - {id}
//         </p>
//       <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
//         {show ? "You clicked me" : "Click me plz"}
//       </button>
//     </>
//   )
// }
// export default Usememo

//////////////////////////////*************************************************************** */
// //////////////////// using Usestate and useeffect //////////

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react';

// const Usememo = () => {
//   const [show, setShow] = useState(true);

//   const [id, setId] = useState("");

//     useEffect(() => {
//       setId(Math.random() * 5);
//     }, [])

//   return (
//     <>
//       <p>My new number - {id}
//         </p>
//       <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
//         {show ? "You clicked me" : "Click me plz"}
//       </button>
//     </>
//   )
// }

// export default Usememo


//////////////****************************************************** */
/////////////////  Use Memo  //////////////////

// import React from 'react'
// import { useState, useMemo } from 'react';

// const Usememo = () => {
//   const [show, setShow] = useState(true);
//     const id = useMemo(()=>{
//         return Math.random() * 5;
//     },[]);

//   return (
//     <>
//       <p>My new number - {id}
//         </p>
//       <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
//         {show ? "You clicked me" : "Click me plz"}
//       </button>
//     </>
//   )
// }
// export default Usememo




//////////////****************************************************** */
/////////////////  Use Memo cache data //////////////////

// import React from 'react'
// import { useState, useMemo } from 'react';

// const generateId = ()=>{
//     const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     let result = "";
//     for (let i=0; i<35; i++){
//         const randomNumber = ~~(Math.random() * 26);
//         result += str[randomNumber]
//     }
//     return result;
// }

// const Usememo = () => {
//   const [show, setShow] = useState(true);
//   const [val, setVal] = useState("");

// //   const randomId = generateId();
  
//   const randomId = useMemo(generateId,[val]);

//   return (
//     <>
//         <h1 style={{fontWeight : "100", letterSpacing : 2}}>
//             #{randomId}
//         </h1>
//       <input 
//         type={"text"} 
//         value={val} 
//         onChange={(e)=> setVal(e.target.value)} 
//         placeholder={"Text..."} />
//         <br/><br/>
//       <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
//         {show ? "You clicked me" : "Click me plz"}
//       </button>
//     </>
//   )
// }
// export default Usememo


//////////////****************************************************** */
/////////////////  Use Memo cache data //////////////////

// import React from 'react'
// import { useState, useMemo } from 'react';
// import { checkAvailability } from './utils/features';
// import { generateId } from './utils/features';

// const Usememo = () => {
//   const [show, setShow] = useState(false);
//   const [val, setVal] = useState("");
//   const [username, setUsername] = useState("");
  
//   const usernameAvailable = useMemo(checkAvailability,[username]);
  
//   const randomId = useMemo(generateId,[val]);

//   return (
//     <>
//         <h1 style={{fontWeight : "100", letterSpacing : 2}}>
//             #{randomId}
//         </h1>
//       <input 
//         type={"text"} 
//         value={val} 
//         onChange={(e)=> setVal(e.target.value)} 
//         placeholder={"Text..."} />
//         <br/><br/>
//         <div style={{padding : "1rem"}}>
//             <label>Username</label>
//             <input type='text' value={username}
//             onChange={(e)=> setUsername(e.target.value)}
//             placeholder='username'/>
//         </div>

//         <p style={{fontSize : "0.7rem", color : usernameAvailable ? "green" : "red"}}>
//         {usernameAvailable ? "username Available" : "username Already Taken"}
//       </p>

//       <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
//         {show ? "You clicked me" : "Click me plz"}
//       </button>
//     </>
//   )
// }
// export default Usememo



// /////////////Use Callback

import React, { useCallback } from 'react'
import { useState} from 'react';
import Button1 from './utils/Button'

const Usememo = () => {
    const [show, setShow] = useState(false);

    const fetchData = useCallback((pow = 1 )=>{
        return Math.random() *25 * pow;
    },[]);
  return (
    <>
        <Button1 fetchData={fetchData}/>

      <button type="button" className="btn btn-primary" onClick={()=> setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </>
  )
}
export default Usememo


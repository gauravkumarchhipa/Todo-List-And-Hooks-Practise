// ... spread operator

import React from 'react'
import { useState } from 'react';

const UsestateObject = () => {
  const [myObject, setmyObject] = useState({
    myName : "Gaurav", myAge : 23, degree : "MCA"
  });
  const changeObject = ()=>{
    setmyObject({...myObject, myName : "Himanshu"});
  }
  return(
  <div>
      <h1>Name: {myObject.myName} & Age : {myObject.myAge} & Degree : {myObject.degree}</h1>
      <button type="button" className="btn btn-primary" onClick={changeObject}>Update</button>
  </div>
  )
}

export default UsestateObject
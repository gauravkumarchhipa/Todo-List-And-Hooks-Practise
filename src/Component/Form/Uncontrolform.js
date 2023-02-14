import { useRef } from "react"
import React from 'react'
import { useState } from "react";

const Uncontrolform = () => {

  // it like a useState only and its preserve the value. No rerender
  const Uname = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e)=>{
    e.preventDefault();
    // console.log(Uname.current.value);
    const name = Uname.current.value;
    name === "" ? alert("please fill the data") : setShow(true);
  }

  return (
    <div className='container'>
      <br/><br/>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <div className='container'><br/><br/>
          <form action='' onSubmit={submitForm}>
            <div className="col-sm-10">
            <label htmlFor="exampleInputEmail1">User Name</label>
              <input type="text" ref={Uname} className="form-control" id="userName" placeholder="Enter Your Name" autoComplete='off'/>
            </div><br/>

            <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button><br/><br/>
            <p>{ show ? `Your Name is ${Uname.current.value}` : ""}</p>
            </div>
          </form>
          </div>       
        </div>
      </div>
    </div>
  )
}
export default Uncontrolform
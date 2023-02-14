import React from 'react'
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry = { email : email, password : password}; 
    setAllEntry([...allEntry ,newEntry]);
  }

  return (
    <div className='container'><br/><br/>
      <form action='' onSubmit={submitForm}>
        <div className="col-sm-10">
        <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="emailAddress" autoComplete='off'
          value={email} onChange={(e)=> setEmail(e.target.value)} 
          />
        </div><br/>
        
        <div className="col-sm-10">
        <label htmlFor="exampleInputEmail1">Email Password</label>
          <input type="password" className="form-control"  id="inputPassword" placeholder="Password" autoComplete='off'
          value={password} onChange={(e)=> setPassword(e.target.value)} 
          />
        </div>
        <br/><br/>
        <div className="col-sm-10">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form><br/><br/>

      <div>
        {
          allEntry.map( (curElem) => {
            return(
              <div>
                <p><b>Your Email is : </b>{curElem.email}</p>
                <p><b>Your Password is : </b>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Login
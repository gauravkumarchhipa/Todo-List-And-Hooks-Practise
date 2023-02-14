import React from 'react'
import { FcApproval } from "react-icons/fc";

const Api = ({users}) => {
  return (
    <>
    <h2>List of Users</h2>
        <div className='container-fluid mt-5'>
            <div className='row text-center'>

                {
                    users.map((curElem)=>{
                        // object destructuring
                        const{id, login, followers_url}= curElem;
                        return(
                            <div className='col-10 col-md-4 mt-5' key={id}>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={curElem.avatar_url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    
                                    <p className="card-text">{login} <FcApproval/></p>
                                    <p className="card-text">{followers_url}</p>
                                </div>
                                </div>
            
                            </div>
                        )
                    })
                }

            </div>

        </div>
    </>
  )
}

export default Api
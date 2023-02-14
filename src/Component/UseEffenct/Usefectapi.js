import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Usefectapi = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());

        // const data = await response.json();
        // console.log(data);

    }

    useEffect(()=>{
        getUsers();
    },[]);

  return (
    <>
        <h2>List of Users</h2>
        <div className='container-fluid mt-5'>
            <div className='row text-center'>

                {
                    users.map((curElem)=>{
                        return(
                            <div className='col-10 col-md-4 mt-5' key={curElem.id}>
                            <div className="card" style={{width: "18rem"}}>
                                <img src={curElem.avatar_url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">{curElem.login}</p>
                                    <p className="card-text">{curElem.followers_url}</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
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

export default Usefectapi
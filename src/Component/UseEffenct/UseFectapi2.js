import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../loading/Loading'
import Api from '../loading/Api'

const Usefectapi2 = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async() => {
        try{
            
            const response = await fetch('https://api.github.com/users');
            setLoading(false);
            setUsers(await response.json());

        }catch(error){
            setLoading(false);
            console.log("my error is" + error);
        }
    }

    useEffect(()=>{
        getUsers();
    },[]);

    if(loading){
        return <Loading/>
    }

  return (
    <>
        <Api users={users}/>
    </>
  )
}

export default Usefectapi2
import React from 'react'
import { useState } from 'react'
import UseCallbackHooks2 from './UseCallbackHooks2';
import { useCallback } from 'react';

const UseCallbackHooks = () => {
    const [countone, setCountone]= useState(0);
    const [counttwo, setCounttwo]= useState(0);

    const getItem = useCallback(()=>{
        console.log(counttwo+1 , counttwo-1);
        for(let i=0; i<10; i++){}
        console.log('getitems')
        return [counttwo+1 , counttwo-1]
    },[counttwo])

    // const getItem = ()=>{
    //     console.log(counttwo+1 , counttwo-1);
    //     for(let i=0; i<10; i++){}
    //     console.log('getitems')
    //     return [counttwo+1 , counttwo-1]
    // };

    

  return (
    <>
    <h1>Hello</h1>
        <button type="button" className="btn btn-primary" onClick={()=>setCountone(countone+1)}> count One : {countone}
        </button>
            &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary" onClick={()=>setCounttwo(counttwo+1)} >count Two : {counttwo}
        </button>
        <UseCallbackHooks2 getItem={getItem}/>
        
    
    </>
  )
}

export default UseCallbackHooks
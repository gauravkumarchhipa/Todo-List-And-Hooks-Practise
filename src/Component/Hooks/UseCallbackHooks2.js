import React, { useEffect } from 'react'
import { useState } from 'react'

const UseCallbackHooks2 = ({getItem}) => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(getItem)
    },[getItem])

  return (
    <>
        {items && items.map(item => {
            return <div key={item}>{item}</div>
        })}
    </>
  );
}

export default UseCallbackHooks2
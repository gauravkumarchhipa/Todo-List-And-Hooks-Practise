import React from 'react'
import { Rollnumber } from './UseContextHooks';
import { useContext } from 'react';

const UseContextHooks2 = () => {
  const name = useContext(Rollnumber);
  return (
    <div><h1>Roll Number is{name}</h1>
    </div>
  )
}

export default UseContextHooks2
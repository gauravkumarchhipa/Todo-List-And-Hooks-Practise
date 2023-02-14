import React from 'react'
import { BioData } from './UseContextHooks';
import { useContext } from 'react';

const UseContextHooks3 = () => {
  const name = useContext(BioData);
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default UseContextHooks3
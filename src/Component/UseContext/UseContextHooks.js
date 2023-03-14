import React from 'react'
import UseContextHooks2 from './UseContextHooks2'
import { createContext } from 'react'

export const BioData = createContext();

const UseContextHooks = () => {
  return (
    <BioData.Provider value={"Gaurav"}>
      <div><UseContextHooks2 
      // name={"Gaurav"}
      /></div>
    </BioData.Provider>
  )
}

export default UseContextHooks
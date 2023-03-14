import React from 'react'
import { createContext } from 'react'
import UseContextHooks3 from './UseContextHooks3';
import UseContextHooks2 from './UseContextHooks2';

export const BioData = createContext();

export const Rollnumber = createContext();

const UseContextHooks = () => {
  return (
    <>
    <BioData.Provider value={"Gaurav"}>
      <div><UseContextHooks3 /></div>
    </BioData.Provider>

    <Rollnumber.Provider value={"16"}>
      <div>
        <UseContextHooks2/>
      </div>
    </Rollnumber.Provider>

    </>
  )
}

export default UseContextHooks
import React from 'react'
import {useReducer} from 'react'

const initialState = 0;

const reducer = (state, action)=>{
    console.log(state, action);
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
    return state;
}

const UseReducer1 = () => {    
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='container'>
        <br/><br/>
        <button type="button" className="btn btn-primary" onClick={()=> dispatch({type : "INCREMENT"})}>Add</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{state }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary" onClick={()=> dispatch({type : "DECREMENT"})}>Sub</button>
    </div>
  )
}

export default UseReducer1
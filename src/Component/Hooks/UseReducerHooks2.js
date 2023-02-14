import React from 'react'
import {useReducer} from 'react'

const initialState = {count: 0};
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

const UseReducer2 = () => {    
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='container'>
    <br/><br/>
    <button type="button" className="btn btn-primary" onClick={()=> dispatch({type : "increment"})}>Add</button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count: {state.count}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" className="btn btn-primary" onClick={()=> dispatch({type : "decrement"})}>Sub</button>
    </div>
  )
}

export default UseReducer2
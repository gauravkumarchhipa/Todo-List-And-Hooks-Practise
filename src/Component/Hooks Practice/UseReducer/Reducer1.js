import React from 'react'
import { useReducer } from 'react';

const initialState = {age : 0, name : "gaurav"};
const reducer = (state1, action)=>{
    if (action.type === "increment_age"){
        return{
            age : state1.age + 1
        };
    }
    if (action.type === "decrement_age"){
        return{
            age : state1.age - 1
        }
    }
    if(action.type === "multiply_age"){
        return{
            age : state1.age * 2
        }
    }
    if(action.type === "division_age"){
        return{
            age : state1.age / 2
            // age : state.age + Math.random()
        }
    }
    if(action.type === "name_age"){
        return{
            age : state1.age +2,
            name : state1.name = "gaurav chhipa"
        }
    }
}

const Reducer1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <div>
        <button onClick={()=>{dispatch({type: 'increment_age'})}}>Increment</button>
        <button onClick={()=>{dispatch({type: 'multiply_age'})}}>multiply*2</button>
        <p>Your age is {state.age} and your name is {state.name}</p>
        <button onClick={()=>{dispatch({type : 'decrement_age'})}}>Decrement</button>
        <button onClick={()=>{dispatch({type: 'division_age'})}}>division/2</button><br/><br/>
        <button onClick={()=>{dispatch({type: 'name_age'})}}>name_age</button>
    </div>
  )
}
export default Reducer1
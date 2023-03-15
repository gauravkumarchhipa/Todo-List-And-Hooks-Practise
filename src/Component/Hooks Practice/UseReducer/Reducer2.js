import React, { useReducer } from 'react'

const initialstate = {age : 0, name : "gaurav"};
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment_age' : {
            return{
                name : state.name,
                age : state.age + 1
            };
        }
        case 'name_change' : {
            return{
                name : action.nextname,
                age : state.age
            }
        }
        default : {

        }
    }
}

const Reducer2 = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);

    const handlebuttonclick = ()=>{
        dispatch({
            type : 'increment_age'
        });
    }
    
    const handleChange = (e)=>{
        dispatch({
            type : "name_change",
            nextname : e.target.value
        });
    }
    
  return (
    <div>
        <input type='text' placeholder='enter your name' value={state.name} onChange={handleChange}/><br/><br/>
        <button onClick={handlebuttonclick}>Increment</button>
        <p>your age is {state.age} & your name is {state.name}</p>
    </div>
  )
}

export default Reducer2
import React from 'react'
import UseCallbackHooks3 from './UseCallbackHooks3';
import { useCallback } from 'react';
import { useState } from 'react';

const UseCallbackHooks4 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = ()=>{
        setCount(count + 1);
    };

    const addTodo = useCallback(() =>{
        setTodos((prev) => [...prev, `new Entry`]);
    },[]);

    // const addTodo = () =>{
    //     setTodos((prev) => [...prev, `new Entry`]);
    // };

  return (
    <div>
        <UseCallbackHooks3 todos={todos} addTodo={addTodo}/>
        <hr/>
        <div>
            Count : {count}&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" onClick={increment}>Add</button>
        </div>
    </div>
  )
}

export default UseCallbackHooks4
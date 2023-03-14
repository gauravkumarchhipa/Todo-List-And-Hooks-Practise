import {memo} from 'react'

const UseCallbackHooks3 = ({todos, addTodo}) => {
  console.log("child render")
  return (
    <>
    <h2>My Todos</h2>
    {todos.map((todo, index)=>{
      return <p key={index }>{todo + index}</p>
      
    })}
    <button type="button" className="btn btn-primary" onClick={addTodo}>Add Todo</button>
    
    </>
  )
}

export default memo(UseCallbackHooks3)
import React from 'react'
import { useState } from 'react';

const Todo = () => {

  

    const bioData = [
        {id : 0, Name : "Gaurav", Age : 23},
        {id : 1, Name : "Himanshu", Age : 24},
        {id : 2, Name : "Amit", Age : 25},
        {id : 3, Name : "Ankit", Age : 22}
    ]

    const [myArray, setMyArray] = useState(bioData);

    const clearArray=()=>{
        setMyArray([]);
    }
    const removeElem=(id)=>{
        // alert(id);
        const myNewArray = myArray.filter((curEle) =>{
            return curEle.id !== id;
        })
        setMyArray(myNewArray);
    }
  return (
    <div className='container'>
       <br/>
         <h1>Array using UseState</h1>
        {
            myArray.map((curEle) => {
                return(
                <h1 key={curEle.id}>Name : {curEle.Name} & Age : {curEle.Age} 
                <button type="button" className="btn btn-primary" onClick={()=>removeElem(curEle.id)}>Remove</button>
                </h1>
                );
            })
        }
        <button type="button" className="btn btn-primary" onClick={clearArray}>Clear</button>
    </div>
  )
}

export default Todo
// LocalStorage
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

// to get the data from local storage
const getLocalItems = () => {
    let list1 = localStorage.getItem('lists1');
    if(list1){
        return JSON.parse(localStorage.getItem('lists1'));
    }else {
        return [];
    }
}
 
const Todo2 = () => {

    
    const [inputData, setInputData] = useState("");
    const [item, setItem]= useState(getLocalItems());

    const addItem = () =>{
        if(!inputData){
        }
        else{
        setItem([...item, inputData]);
        setInputData('');
        }
    }

    const deleteItem = (id) =>{
        const updateditems = item.filter((ele, ind)=> {
            return ind !== id;
        });
        setItem(updateditems);
    }

    const removeAll = ()=>{
        setItem([]);
    }

    // add data to local storage
    useEffect(() => {
        localStorage.setItem("lists1", JSON.stringify(item));
    }, [item]);
    

  return (
    <>
        <section className="vh-100" style={{backgroundColor : '#fff'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card rounded-3">
                    <div className="card-body p-4">

                        <h4 className="text-center my-3 pb-3">To Do App</h4>
                        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
              <div className="col-12">
                <div className="form-outline">
                    
                  <input type="text" id="form1" className="form-control" 
                  value={inputData} onChange={(e)=> setInputData(e.target.value)} />
                  <label className="form-label" htmlFor="form1">Enter a task here</label>
                </div>
              </div>

              <div className="col-12">
                <button type="button" className="btn btn-primary" onClick={addItem}>Add</button>
              </div>
            </form>

            <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
  
                  {
                    item.map((ele, ind)=>{
                        return(
                            <tr key={ind}>
                                <th scope="row" >{ind + 1}</th>
                                <td>{ele}</td>
                                <td>In progress</td>
                                <td>
                                <div className='eachItem' key={ind}>
                                <button type="button" className="btn btn-danger" onClick={()=>deleteItem(ind)}>Delete</button>
                                </div>
                            </td>
                            </tr>
                        )
                    })
                }               
            </tbody>
        </table>
        <br/>
        <button type="submit" className="btn btn-danger" onClick={removeAll}>remove All</button>  

        </div>
        </div>
        </div>
        </div>
     </div>
    </section>
    </>
  )
}
export default Todo2
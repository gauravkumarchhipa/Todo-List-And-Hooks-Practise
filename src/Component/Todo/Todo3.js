// LocalStorage
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// to get the data from local storage
const getLocalItems = () => {
    let list = localStorage.getItem('lists');
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }else {
        return [];
    }
}

const Todo3 = () => {

    
    const [inputData, setInputData] = useState("");
    const [item, setItem]= useState(getLocalItems());
    const [toggleSubmit, settoggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    // Toast
    const emptyalert = () => toast("Please Enter a Task");
    const Deletetask = () => toast("Task is deleted");
    const edittask = () => toast("Task is Updated");
    const Removeall = () => toast("All Task is Removed");
    
    const addItem = () =>{
        if(!inputData){
            emptyalert();
        }else if(inputData && !toggleSubmit){
            setItem(
                item.map((ele) =>{
                    if(ele.id === isEditItem){
                        return{...ele, name:inputData}
                        
                    }
                    return ele;
                })
                
            )
            settoggleSubmit(true);
            setInputData("");
            setIsEditItem(null);

        }
        else{
            const allInputdata = {id: new Date().getTime().toString(), name : inputData}
            setItem([...item, allInputdata]);
            setInputData('');
        }
    }

    const deleteItem = (index) =>{
        const updateditems = item.filter((ele)=> {
            return index !== ele.id;
            
        });
        setItem(updateditems);
    }

    const editItem = (id) =>{
        let newEditItem = item.find((ele)=>{
            return ele.id === id
        });
        settoggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
        
    }

    const removeAll = ()=>{
        setItem([]);
    }

    // add data to local storage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(item));
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
                {
                    toggleSubmit ?  <button type="button" className="btn btn-primary" onClick={addItem}>Add</button> : 
                    <button type="button" className="btn btn-primary" onClick={()=>{addItem(); edittask();}} >Update</button> 
                }
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
                            <tr key={ele.id}>
                                <th scope="row">{ind + 1}</th>
                                <td>{ele.name}</td>
                                <td>In progress</td>
                                <td>
                                <div className='eachItem' key={ele.id}>
                                <button type="button" className="btn btn-danger" onClick={()=>{deleteItem(ele.id); Deletetask();}}>Delete</button>
                                &nbsp; &nbsp; &nbsp;
                                <button type="button" className="btn btn-primary" onClick={()=>editItem(ele.id)}>Edit</button>
                                </div>
                            </td>
                            </tr>
                        )
                    })
                }               
            </tbody>
        </table>
        <br/>
        <button type="submit" className="btn btn-danger" onClick={()=>{removeAll(); Removeall();}}>remove All</button>  

        </div>
        </div>
        </div>
        </div>
     </div>
    </section>
    </>
  )
}
export default Todo3
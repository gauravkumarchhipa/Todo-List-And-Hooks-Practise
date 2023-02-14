import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toastify = () => {
        const notify = () => toast("Your Login is Successful");
  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={notify}>Notify!</button>
        <ToastContainer/>
    </div>
  )
}

export default Toastify
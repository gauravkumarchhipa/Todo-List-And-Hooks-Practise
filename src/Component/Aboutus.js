import React from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Aboutus = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    // console.log(navigate);
  return (
    <div>
        <h1>Hello this page is {location.pathname.replace("/", '')}</h1>
        <button type="button" className="btn btn-primary" onClick={() => navigate(-1)} >Go Back</button>
    </div>
  )
}

export default Aboutus
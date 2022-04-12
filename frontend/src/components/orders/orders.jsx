import React, {useState, useEffect } from 'react'
import Axios from 'axios'
//import { useSelector } from 'react-redux'
import './MenuSection.css'
const Orders = () => {
    
  let navigate = useNavigate();
    const Admin = () => {
    navigate("/admin")
  }
    const Items = () => {
    navigate("/menu:1")
  }
 
  return (
    <div>
      <h1>Admin Order Page</h1>
      <button className="btn" type="submit" onClick={Admin} >Return to Admin Page</button>
      <button className="btn" type="submit" onClick={Items} >See Items</button>
    </div>
  );
}

export default orders
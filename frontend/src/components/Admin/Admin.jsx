import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Admin(){

  let navigate = useNavigate();


  return (
    let navigate = useNavigate();
    const Orders = () => {
    navigate("/orders")
  }
    const Items = () => {
    navigate("/menu:1")
  }
    return (
    <div>
      <h1>Orders</h1>
      <button className="btn" type="submit" onClick={Orders} >See Orders</button>
    </div>
    <div>
      <h1>Items</h1>
      <button className="btn" type="submit" onClick={Items} >See Items</button>
    </div>
  );
};
};
  
export default Admin;
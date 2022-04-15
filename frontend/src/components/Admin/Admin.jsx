import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Admin(){

  let navigate = useNavigate();


  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick ={() =>{
        navigate("/modifyUser");
      }}>
        Admin Page
      </button>

      <button onClick ={() =>{
        navigate("/menu1");
      }}>
        View/Edit Inventory
      </button>

      <button onClick ={() =>{
        //navigate("/orders");
      }}>
        View Orders
      </button>
    </div>
  );
};
/*return (
  <div>
    <h1>Orders</h1>
    <button className="btn" type="submit" onClick={Orders} >See Orders</button>
  </div>
  <div>
    <h1>Items</h1>
    <button className="btn" type="submit" onClick={Items} >See Items</button>
  </div>
);*/

  
export default Admin;
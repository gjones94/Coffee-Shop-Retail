import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Admin(){

  let navigate = useNavigate();


  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick ={() =>{
        navigate("/Admin");
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
  
export default Admin;
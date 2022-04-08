import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux'
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function AdminUser(){

  let navigate = useNavigate();


  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick ={() =>{
        navigate("/AdminUser");
      }}>
        Admin Page
      </button>

      <button onClick ={() =>{
        navigate("/menu/" + 1);
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
  
export default AdminUser;
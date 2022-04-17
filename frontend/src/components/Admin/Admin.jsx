import React from "react";
import './Admin.css';
import {useNavigate } from "react-router-dom";


function Admin({admin}){

  let navigate = useNavigate();

  const users = () => {
      navigate("/ModifyUser");
  }
  const discounts = () => {
      navigate("/Discounts")
  }
  const inventory = () => {
      navigate("/Menu")
  }
  const orders = () => {
      //alert("Not ready yet");
      navigate("/Orders")
  }
  admin = 1; //DELETE THIS LATER
  if(admin !== 1){
      return(
        <h1 className="heading"> UNAUTHORIZED<span>ACCESS</span></h1>
      )
  }


  return(
    <>
     <div className="create_discount">
                <h1 className="heading"> Admin <span>Portal</span></h1>
                <div className="create_page">
                    <div className="logo">
                        <img className="create_logo" src="./images/logo.png" alt="" />
                    </div>
                        <span className="input_label" >Users</span>
                        <button className="btn" type="submit" onClick={users} >Users</button>
                        <span className="input_label">Discounts</span>
                        <button className="btn" type="submit" onClick={discounts} >Discounts</button>
                        <span className="input_label">Inventory</span>
                        <button className="btn" type="submit" onClick={inventory} >Inventory</button>
                        <span className="input_label">Orders</span>
                        <button className="btn" type="submit" onClick={orders} >Orders</button>
                </div>
        </div>
    </>
  )
}
  
export default Admin;
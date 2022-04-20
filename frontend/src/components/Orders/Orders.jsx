import React, {useState, useEffect } from 'react'
import {useNavigate } from "react-router-dom";
import Axios from 'axios'
//import { useSelector } from 'react-redux'
import './Orders.css'

function Orders({admin}){

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
  


    //redirect people who logout back to home
    if(admin == null){
        navigate('/home');
    }

  admin = 1; // REMOVE LATER
  if(admin !== 1){
      return(
        <h1 className="heading"> UNAUTHORIZED<span>ACCESS</span></h1>
      )
  }


  return(
    <>
     <div className="Orders">
                <h1 className="heading"> Admin Order <span>Portal</span></h1>
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
                </div>
        </div>
    </>
  )
}
  
export default Orders;
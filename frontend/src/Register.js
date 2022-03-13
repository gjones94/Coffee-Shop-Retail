import React, {useState,useEffect} from "react";
import './App.css';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";



function Register(){

    const [frontEmail, setEmail] = useState("")
    const [frontName, setName] = useState("")
    const [frontLast, setLast] = useState("")
    const [frontPW, setPW] = useState("")
    const [frontConfirm, setConfirm] = useState("")
    const [frontAddress, setAddress] = useState("")
    const [frontNumber, setNumber] = useState("")



    const submitInfo = () =>{
        Axios.post("/api/register/insert",{
        //Axios.post("http://localhost:3001/api/register/insert",{
        PassName: frontName,
        PassLast: frontLast,
        PassEmail: frontEmail,
        PassAddress: frontAddress,
        PassNumber: frontNumber,
        PassPw : frontPW,
        

        });
    }

    return(
        <div className ="Register"> <h1>Register</h1>
        <div className ='input'>
            <label> First Name</label>
            <input
                type="text"
                name="frontName"
                onChange={(e)=> {
                    setName(e.target.value)
                }}/>
                <label>Last Name</label>
            <input
                type="text"
                name="frontLast"
                onChange={(e)=> {
                    setLast(e.target.value)
                }}/>

                <label>Phone Number</label>
            <input
                type="text"
                name="frontNumber"
                onChange={(e)=> {
                    setNumber(e.target.value)
                }}/>
                
             <label>Email</label>
            <input
                type="text"
                name="frontEmail"
                onChange={(e)=> {
                    setEmail(e.target.value)
                }}/>
                <label>Address</label>
                <input
                    type="text"
                    name="frontAddress"
                    onChange={(e)=> {
                        setAddress(e.target.value)
                    }}/>
                <label>Password</label>
            <input
                type="password"
                name="frontPW"
                onChange={(e)=> {
                    setPW(e.target.value)
                }}/>
                <label>Confirm Password</label>
            <input
                type="password"
                name="frontConfirm"
                onChange={(e)=> {
                    setConfirm(e.target.value)
                }}/>
            
            <button onClick ={submitInfo}>Register</button>


            
            </div>
           
        </div>
    );



};

export default Register

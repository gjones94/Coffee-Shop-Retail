

import * as React from 'react';
import {useState,useEffect} from "react";
import './Login.css';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import Register from '../Register/Register';

const Login = ({uid, admin, onLogin}) => {

  let navigate = useNavigate();

  const [frontName, setName] = useState("");
  const [frontPassword, setPassword] = useState("");

  const goRegister = () => {
    navigate("/Register")
  }
  
  const loginCheck = () =>{
    Axios.post("/api/login/auth",{
      PassName : frontName,
      PassPW : frontPassword,
    }).then((response) => {
      if (response.data === "USERERR"){
        alert("User not found, please register with us!")
      }else if (response.data === "PASSERR"){
        alert("Incorrect combination of username and password");
      }else{
          console.log("HERE");
          let users = JSON.parse(JSON.stringify(response.data));
          console.log(users);
          console.log(users[0].user_id, users[0].user_admin)
          onLogin(users[0].user_first_name, users[0].user_id, users[0].user_admin);
          navigate("/home");
      }
    });

  }

  //this is just for debugging
  const handleSubmit = (event) =>{
    event.preventDefault();	
  }

  return (
    <div className="login">
      <h1 className="heading"> Log <span> In </span></h1>
      <div className="login__page">

        <div className="logo">
          <img className="login__logo" src="./images/logo.png" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <span className="login__email" >Email Address:</span>
          <input 
            value={frontName} 
            onChange={event => setName(event.target.value)}
            className="login__input" 
          />

          <span className="login__password">Password:</span>
          <input 
            value={frontPassword} 
            onChange={event => setPassword(event.target.value)}
            className="login__input" 
            type="password" 
            placeholder="Password" 
            required 
          />

          <button className="btn" type="submit" onClick={loginCheck} >Log In</button>
          <button className="btn" type="submit" onClick={goRegister} >Register</button>
          <span className="login__head2">Sign Up for emails to get special news and offers</span>
          <span className="login__head3">By signing up, you agree to our <span className="underlineHead3">Privacy Policy</span> and <span className="underlineHead3">Terms of Use</span></span>
        </form>

      </div>
    </div>
  );
}

export default Login;

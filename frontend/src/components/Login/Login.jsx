
import React, {useState,useEffect} from "react";
import './Login.css';
import Axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Login() {

  let navigate = useNavigate();

  const [frontName, setName] = useState("");
  const [frontPassword, setPassword] = useState("");
  const [UserList, makeList] = useState([])
  const [responseText,setresponseText] = useState("")

  useEffect(() => {
      Axios.get("/api/get").then((response) => {
      	makeList(response.data)
      });
    
  },[]);

  const submitInfo = () => {
    let PwStrength = 0;
    while (PwStrength == 0){
        if (/\d/.test(frontPassword)){
            if(/[a-z]/.test(frontPassword)){
                if(/[A-Z]/.test(frontPassword)){
            PwStrength = 1;
            setresponseText([frontName] +" Has been registered \n Welcome to Beans & Leaves!")
                }}
        }else {
            setresponseText("Password is too weak")
            submitInfo()}
    }
    Axios.post("api/insert",{

      PassName : frontName,
      PassPW : frontPassword,
    });
  
    makeList([...UserList, {Name: frontName , Password : frontPassword},]);
  };

  //DELETE this, it was a test
  const goHome = () => {
	  navigate("/about")	
  }
  
  const loginCheck = () =>{
    alert("Login check callled") //debugging purposes
    Axios.post("/api/login/auth",{
      PassName : frontName,
      PassPW : frontPassword,
    }).then((response) => {
     
      if (response.data == "Found"){
        alert("FOUND"); 
        navigate("/home")
      }else{
	      alert("NOT FOUND"); 
	      navigate("/about")
      }

    });
  }

  const handleSubmit = (event) =>{
	event.preventDefault();	
	alert(`The name you entered was : ${frontName}`);
  }

  return (
    <div className="login">
      <h1 className="heading"> Log <span> In </span></h1>
      <div className="login__page">
        <div className="logo">
          <img className="login__logo" src="./images/menu-3.png" alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <span className="login__email" >Email Address:</span>
          <input 
            value={frontName} 
            onChange={event => setName(event.target.value)}
            //className="login__input" 
	    //#type="email" 
            //placeholder="Email" 
            //required 
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
	  <button className="btn" type="submit" onClick={goHome} >GO HOME</button>
          <button className="btn" type="submit" onClick={loginCheck} >Log In</button>
          <span className="login__head2">Sign Up for emails to get special news and offers</span>
          <button className="btn" type="submit" onClick={loginCheck} >Create your Account</button>
          <span className="login__head3">By signing up, you agree to our <span className="underlineHead3">Privacy Policy</span> and <span className="underlineHead3">Terms of Use</span></span>
        </form>
      </div>
      .
    </div>
  );
}

export default Login;

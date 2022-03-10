
import React, {useState,useEffect} from "react";
import './App.css';
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
      //Axios.get("http://localhost:3001/api/get").then((response) => {
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
      Axios.post("/api/insert",{
        PassName : frontName,
        PassPW : frontPassword,
      });
    
      makeList([
        ...UserList,
        {Name: frontName ,
        Password : frontPassword},
      ]);
  };

  const loginCheck = () =>{
  
    Axios.post("/api/login/auth",{
      PassName : frontName,
      PassPW : frontPassword,
    }).then((response) => {
        if (response.data == "Found"){
          navigate("/Home")
        }
    });
  }
  
  return (
    
    <div className="Login"> <h1>LOGIN</h1>
    <div className='input'>

      <label> Username</label>
    <input 
      type="text" 
      name="frontName"
      onChange={(e) => {
        setName(e.target.value);
      }} 
      />
    
    <label> Password</label>
    <input 
      type ="text" 
      name="frontPassword"
      onChange={(e) => {
      setPassword(e.target.value);
    }} 
    />
     <label>{responseText}</label>

    <button onClick={submitInfo}>Register</button>
    <button onClick ={loginCheck}
    >Login</button>

    {UserList.map((val)=> {
      return (
      <div className ="userList">
        <label>
          Name: {val.Name} Password: {val.Password}
        </label>
      </div> );
    })}
    </div> 
  </div>
  );
}

export default Login;

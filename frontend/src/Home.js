import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Home(){

  let navigate = useNavigate();


  return (
    <div>
      <h1>Home Page</h1>
      <button onClick ={() =>{
        navigate("/Login");
      }}>
        Login
      </button>

      <button onClick ={() =>{
        navigate("/About");
      }}>
        About Us
      </button>

      <button onClick ={() =>{
        navigate("/Product");
      }}>
        Product
      </button>
      
    </div>
  );
};
  
export default Home;
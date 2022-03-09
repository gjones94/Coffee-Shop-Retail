import React, {useState,useEffect} from "react";
import './App.css';
import Axios from 'axios';
import Login from "./Login";

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
  useNavigate,
} from "react-router-dom";

import Home from "./Home";



function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Home />
    </div>

  );
}

export default App;

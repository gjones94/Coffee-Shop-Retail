import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Login from './Login';
import About from './About';
import Product from './Product';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path ="/" element ={<App />}/>
      <Route path ="/Home" element={<Home />} />
      <Route path ="/Login" element={<Login />}/>
      <Route path ="/About" element={<About />}/>
      <Route path ="/Product" element={<Product />}/>

    </Routes>
  </Router>,
  document.getElementById("root")
);



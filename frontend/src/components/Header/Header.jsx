import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const NavBar = () => {
    const handleMenuBtn = () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');

    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    }

    const handleSearchBox = () => {
        let navbar = document.querySelector('.navbar');
        let searchForm = document.querySelector('.search-form');

        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
    }


    return (
        <>

            <div className="header">

                {/* eslint-disable-next-line */}
                <div className="logo">
                    <img src={'./images/logo.png'} alt="" /> 

                </div>

                <nav className="navbar">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <span className="header__navItems">Home</span>
                     </Link>
                    <Link style={{textDecoration: 'none'}} to="/menu0">
                        <span className="header_navItems">Products</span>
                     </Link>
                    <Link style={{textDecoration: 'none'}} to="/reviews">
                        <span className="header__navItems">Reviews</span>
                     </Link>
                    <Link style={{textDecoration: 'none'}} to="/about">
                        <span className="header__navItems">About</span>
                     </Link>
                    <Link style={{textDecoration: 'none'}} to="/contact">
                        <span className="header_navItems">Contact</span>
                     </Link>
                    <Link style={{textDecoration: 'none'}} to="/login">
                        <span className="header__navItems">Login</span>
                     </Link>
                     <Link style={{textDecoration: 'none'}} to="/admin">
                        <span className="header__navItems">admin</span>
                     </Link>
                </nav>
                <div className="icons">
                    <div className="fas fa-search" id="search-btn" onClick={handleSearchBox}></div>
                    <div className="fas fa-shopping-cart" id="cart-btn"></div>
                    <div className="fas fa-bars" id="menu-btn" onClick={handleMenuBtn}></div>
                    {/* 
                    <div className="fas fa-user" id ="user-btn"></div>
                    */}
                </div>

                <div className="search-form">
                    <input type="search" id="search-box" placeholder="Search" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </div>
                


            </div>
            
        </>
    )
}

export default NavBar

import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {

    return (
        <>

            <section className="footer">
                <nav className="links">
                    <Link style={{textDecoration: 'none'}} to="/">
                        <span className="header__navItems">Home</span>
                     </Link>
                    <Link style={{textDecoration: 'none'}} to="/menu">
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
                        <span className="header__navItems">Login</span>
                     </Link>
                </nav>              
                <div className="credit">Group 13 | all rights reserved</div>
                
                </section> 
            
        </>
    )
}


export default Footer

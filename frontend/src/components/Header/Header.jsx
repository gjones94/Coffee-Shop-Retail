import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const NavBar = ({u_name ,uid, admin, signOut}) => {
    const handleMenuBtn = () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
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
                    {/* User Not Signed In */}
                    {uid == null &&
                        <Link style={{textDecoration: 'none'}} to="/login">
                        <span className="header__navItems">Log In</span>
                        </Link>
                    }
                    {/* User is an admin */}
                    {admin === 1 &&
                        <Link style={{textDecoration: 'none'}} to="/admin">
                            <span className="header__navItems">Admin</span>
                        </Link>
                    }
                </nav>
                    <div className="icons">
                        {uid != null &&
                            <div className="heading"> {u_name} </div>
                        }
                        {uid != null && 
                            <Link className="fas fa-shopping-cart" style={{textDecoration: 'none'}} to="/cart"></Link>
                        }
                        {uid != null &&
                        <div>
                            <button className="btn" type="submit" onClick={signOut}>Sign Out</button>
                        </div> 
                        }
                        <div className="fas fa-bars" id="menu-btn" onClick={handleMenuBtn}></div>
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

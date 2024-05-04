import React from 'react';
import './Header.css'
import { Link, Outlet } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";




function Header() {
  
  return (
    <div className='container-fluid'>
        <div className='header'>
            <div className='header-container '>
                <nav className="navbar  navbar-expand-lg ">
                <div className="container-fluid">
                
                    <div className='logo-container'>
                        <div className='logoimg'>
                            <img src="../Assets/logo.png" alt='Shop-logo' />
                        </div>
                        <div className='logotxt'>
                            <h1 className='logoname'>Texas Burger</h1>
                        </div>
                    </div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon hamburger-icon">   
                        <FaBars />
                    </span>
                    </button>
                    <div className=" mainmenu  collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link menu-list" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="services">Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
                </div>
        </div>
        <Outlet />

    </div>
  )
}

export default Header

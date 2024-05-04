import React from 'react'
import './Footer.css'
import { FaRegEnvelope } from "react-icons/fa6";


function Footer() {
  return (
    <div>
        <div className='Footer container-fluid'>
            <div className="logo">
                <a href="index.html" className="logo">Texas Burger</a>
            </div>
            <div className='address-container'>
                <div className='address-subcontainer'>
                    <p className='address'>Restaurant St, Delicious City,
                        London 9578, UK
                        <span>Booking : +88-123-123456</span>
                    </p>
                    <a href=''>Get Direction →</a>
                </div>
                <div className='number-booking'>
                    <p>Monday - Friday : 8AM - 9PM
                    <span>Saturday - Sunday : 8AM - 11PM</span>
                    </p>
                    <button className='btn-book'>Book A Table</button>
                </div>
            </div>

            <div className='newsletter-container'>
                <div>
                    <h1>GET NEWS & OFFERS</h1>
                    <p>Subscribe us & Get 25% Off.</p>
                    <div className='email container-fluid'>
                        <input type='email' placeholder='Email' />
                        < FaRegEnvelope className='email-icon'/>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
                <div className="social">
                    <div className="social-icons">
                        <a href="">Linkedin</a> 
                        <a href="">Twitter</a>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                        <a href="">Youtube</a>
                    </div>
                </div>
            </div>
            <div className='footer-mainmenu'>
                <ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About US</a></li>
                    <li><a href=''>Services</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>

            </div>
            <div className='copyright'>
                <p>© 2024 Texas Burger. All Rights Reserved |<span> Crafted by HVK</span></p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer

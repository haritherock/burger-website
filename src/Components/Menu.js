import React from 'react'
import './Menu.css'
import { Link, Outlet } from 'react-router-dom'

function Menu() {
  return (
    <div className='Menu-container container-fluid'>
        <div className='menu-labels'>
            <div className='menu-head'>
                <h1>Our Menus</h1>
            </div>
        </div>
    </div>
  )
}

export default Menu

import React from 'react'
import Menu from '../Components/Menu'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import './Menulayout.css'
import Carousel from '../Components/Carousel'

function Menulayout() {
  return (
    <div>
        <Menu/>
        <div className='menu-list'>
            <ul>
                <li><Link to='/services'>Burgers</Link></li>
                <li><Link to='salads'>Salads</Link></li>
                <li><Link to='deserts'>Deserts</Link></li>
            </ul>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Menulayout

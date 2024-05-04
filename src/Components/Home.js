import React from 'react'
import './Home.css'
import Menu from './Menu'
import Footer from './Footer'
import Carousel from './Carousel'

function Home() {
  return (
    <div className='container-fluid'>
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-sub1'>
                    <div className='hero-sub1-1'>
                        <h1>SUPER DELICIOUS<span>BURGER</span></h1>
                        <p>Feel Hunger! Order your Favorite Burger</p>
                    </div>
                    <div className='hero-sub1-2'>
                        <p>A Burger makes for a quick midweek meal or weekend BBQ's with friends! Crispy seasoned chicken breast, 
                            topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo.
                        </p>
                        <button className='shopnow'>Shop Now</button>
                    </div>
                </div>
                <div className='hero-sub2'>
                    <img className='hero-img' src='./Assets/Hero-Section-img.png' alt='hero-img' />
                </div>
            </div>

            <div className='offer1'>
                <div className='burger-offer-container'>
                    <div className='burger-offer'>
                        <h3>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href=''>Buy Online</a>
                    </div>
                    <div>
                        <img className='offer-img' src='./Assets/offer-img1.png' alt='offer-img' />
                    </div>
                    
                </div>
                <div className='softdrinks-offer-container'>
                    <div className='softdrinks-offer'>
                        <h3>BUY 1 COKE GET MORE FREE 1 COKE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href=''>Buy Online</a>
                    </div>
                    <div>
                        <img  className='offer-img' src='./Assets/offer-img2.png' alt='offer-img' />
                    </div>
                </div>
            </div>
            <div className='about-container'>
                <div className='about-img'>
                    <img className='about-img' src='./Assets/Burger-and-Fries.jpg' />
                </div>
                <div className='about-shop'>
                    <h3>FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE</h3>
                    <p>At Texas Burger™, we are committed to serving our customers the best burgers at the best price possible. 
                        Fresh is not just a buzzword we use in our restaurants, nor do we place efficiency before the quality of our food. To us, fresh means fresh meat, fresh vegetables, and fresh bread, which is why you will not find any freezers in our restaurants.
                    </p>
                    <div>
                        <ul>
                            <li>Best Price</li>
                            <li>Best Service</li>
                            <li>Best Quality</li>
                            <li>Fresh Ingredient</li>
                            <li>Health Protocol</li>
                            <li>Home Delivery</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        <Carousel />
        <Footer/>
    </div>
  )
}

export default Home

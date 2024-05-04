import React from 'react'
import  './Aboutus.css'
import Footer from './Footer'

function Aboutus() {
  return (
    <div>
      <div className='about-container1 container-fluid'>
        <div className='about-head'>
          <div className='about-head-sub'>
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className='start'>
          <div className='start-sub'>
            <h1>THE START</h1>
            <p className='ourstory-para'>Texas Burger™ was born in 2013 after a fruitless search for a good old-fashioned hamburger. During his days in the financial industry, Jacques traveled the world and discovered that the best food, anywhere in the world, could be found in restaurants that had a limited menu. With the hamburger being one of his favourite foods, Jacques frequented many hamburger spots during his travels.</p><p> Back home in Toronto, 
              the inability to find a well-made classic hamburger was particularly frustrating to him. Despite Toronto being a hub for restaurants, and hamburgers, he simply could not find the delicious old-fashioned fresh burger he was seeking. It felt as though restaurants were trying too hard to be different and innovative, overcomplicating a simple concept.</p>
          </div>
          <div className='start-sub'>
            <img className='burger5' src='../Assets/Double-Cheeseburger.jpg' />
          </div>
        </div>
        <div className='start'>
          <div className='start-sub'>
            <img className='burger5' src='../Assets/chicken-patties.jpg' />
          </div>
          <div className='start-sub'>
            <h1>OUR CORE VALUES</h1>
            <p className='ourstory-para'>At Texas Burger™, we are committed to serving our customers the best burgers at the best price possible. Fresh is not just a buzzword we use in our restaurants, nor do we place efficiency before the quality of our food. To us, fresh means fresh meat, fresh vegetables, and fresh bread, which is why you will not find any freezers in our restaurants.
            We use the highest-grade Chicken (100% Indian Chicken) that is ground daily to our specifications, </p><p>which is why Texas Burger™ has earned its reputation as the Premium burger brand in the Greater Toronto Area.
            For as long as Texas Burger™ exists, we promise to serve the best tasting burgers and fries in the market at the best possible prices — every single time.</p>
          </div>
        </div>
        <div className='start'>
          <div className='start-sub'>
            <h1>THE FUTURE</h1>
            <p>As our Texas Burger™ fandom grows, so does our company. Our Texas Burger fans know what they like, and they keep coming back for more. Since our first store opened at Leslie Street and 16th Avenue in Richmond Hill, our customers' loyalty has only increased!
            We know what our customers want, and we promise to continue to deliver! We know that our greatness is in our 100% fresh and filler-free Indian Chicken. And we will never cut corners to save on cost.
            The bottom line? Our burgers Taste Good like a Hamburger Should®!</p>
          </div>
          <div className='start-sub'>
            <img className='burger5' src='../Assets/future.jpg' />
          </div>
        </div>
        <div className='start'>
          <div className='start-sub'>
            <img className='burger5' src='../Assets/ourstory1.jpg' />
          </div>
          <div className='start-sub'>
            <h1>OUR STORY</h1>
            <p className='ourstory-para'>Texas Burger™ opened its first doors on September 3, 2013 in Richmond Hill, Ontario. It quickly grew into a neighbourhood hot spot, with line-ups out the door during the lunchtime rush. The success followed Texas Burger™ to Toronto’s Church Street with the opening of the second store in November 2014.
                Texas Burger™ continued to expand, opening in Vaughan in February 2018 and then North York in September 2018. 
                </p><p className='ourstory-para'>The Richmond Hill location was expanded to double its original size in February 2016. This was followed by a second North York store on Yonge Street in August 2019, Airport Road in Mississauga in October 2019 and Dixie Road, also in Mississauga, in November 2019.
                We are so excited to announce that our next location is slated for a January 2021 opening, on Steeles Avenue at Woodbine!</p><p>And Our Story Continues....
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus

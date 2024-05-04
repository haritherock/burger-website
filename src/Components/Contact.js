import React from 'react'
import './Contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <div className='contact'>
      <div className='map'>
        <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21994.712849506664!2d77.6320253966048!3d12.962082102497225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c8cd193e4b%3A0xb9872173025bdd5b!2sTexas%20burgers!5e0!3m2!1sen!2sin!4v1714411635320!5m2!1sen!2sin" style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact

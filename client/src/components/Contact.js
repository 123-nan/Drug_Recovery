import React from 'react'
import './Contact.css'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
    
    
    <div className="contact-section">
        <div className="contact-info">
        <h1 className='contacthead mb-3'>CONTACT US</h1>
            <div> <i className="fa-solid fa-location-dot"></i>Address , City , Country</div>
            <div> <i className="fa-solid fa-envelope"></i>contact@email.com</div>
            <div> <i className="fa-solid fa-phone"></i>+91-9732157821</div>
            <div> <i className="fa-solid fa-clock"></i>Mon-Fri 8:00 AM to 5:00PM</div>
        </div>

        <div className="contact-form mt-5 pt-4">
        
        <form className="contact" action="" method="post">
            <input type="text" name="name" className="text-box" placeholder="Your name" required/>
            <input type="email" name="email" className="text-box" placeholder="Your email" required/>
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
            <input type="submit" name="submit" className="send-btn mt-2 mb-3 px-4 py-2" value="Send"/>
        </form>
        </div>

    </div>

    <Footer/>
    
    </>
  )
}

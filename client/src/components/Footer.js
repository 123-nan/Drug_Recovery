import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer p-1">
        <h1 className='tophead m-5'>Cure Street</h1>
       <div className='m-5'>
        <ul class="nav justify-content-center">
            <li class="footeritem">
                <a class="nav-link footeritem" href="/">HOME</a>
            </li>
            <li class="footeritem">
                <a class="nav-link footeritem" href="/about">ABOUT</a>
            </li>
            <li class="footeritem">
                <a class="nav-link footeritem" href="/testimonial">TESTIMONIAL</a>
            </li>
            <li class="footeritem">
                <a class="nav-link footeritem" href="/blog">BLOG</a>
            </li>
            <li class="footeritem">
                <a class="nav-link footeritem" href="/contact">CONTACT US</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

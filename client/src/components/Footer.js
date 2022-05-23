import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer p-5">
        <h1 className='footerhead m-5'>Cure Street</h1>
       <div className='m-5'>
        <ul class="nav justify-content-center">
            <li class="footeritem">
                <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="footeritem">
                <a class="nav-link" href="/about">ABOUT</a>
            </li>
            <li class="footeritem">
                <a class="nav-link" href="/testimonial">TESTIMONIAL</a>
            </li>
            <li class="footeritem">
                <a class="nav-link " href="/blog">BLOG</a>
            </li>
            <li class="footeritem">
                <a class="nav-link " href="/contact">CONTACT US</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

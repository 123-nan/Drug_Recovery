import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <>
    
    <div class="footer-dark">
        <footer>
            <div class="containerfooter mx-5">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Features</h3>
                        <ul>
                            <li>Therapist Appointment</li>
                            <li>Chat </li>
                            {/* <li>Video Call</li> */}
                            <li>Generate Report</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Quick Links</h3>
                        <ul>
                            <li ><a href="/">Home </a></li>
                            <li ><a href="/about">About </a></li>
                            <li ><a href="/testimonial">Testimonial</a></li>
                            <li ><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Cure Street</h3>
                        <p>Founded in 2022,Cure Street is an on-demand,digital primary healthcare platform which offers professional services that can be availed from the comfort of home,office or anywhere you are comforatble at.
                            Cure Street's endeavour has always been to make good health more accessible,reliable and hassle-free to all.</p>
                    </div>
                    <div class="col item social">
                        <a href="/"><i class="icon ion-social-facebook"></i></a>
                        <a href="/"><i class="icon ion-social-twitter"></i></a>
                        <a href="/"><i class="icon ion-social-snapchat"></i></a>
                        <a href="/"><i class="icon ion-social-instagram"></i></a>
                        </div>
                </div>
                <p class="copyright">Cure Street © 2022</p>
            </div>
        </footer>
    </div>
    
    

    </>
  )
}


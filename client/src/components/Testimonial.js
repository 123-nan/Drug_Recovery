import React from 'react'
import Footer from './Footer'
import './Testimonial.css'

export default function Testimonial() {
  return (
   <>
   <div className="test pb-5">
   <h1 className='testhead py-4 '>What Our Client's Say</h1>

   <div className="testcontainer mx-5 p-3">
        <h3>Shristi Rode -24 years</h3>
        <p>I had a comfortable experience as the treatment helped me to get rid of my addictions with excellent
            assistance and support from the Doctor. I will recommend Cure Street to everyone who is in great need.</p>
    </div>

    <div className="testcontainer mx-5 p-3">
        <h3>Dhruv Singhal -29 years</h3>
        <p>I had already consulted few doctors before,but all in vain.But Cure Street provided me proper healing,by
            providing me the effective medication prescribed by the Doctor.The therapy sessions were indeed great and
            helped me leave my addiction behind.</p>
    </div>

    <div className="testcontainer mx-5 p-3">
        <h3>Abeeda Khan -34 years</h3>
        <p>It was a positive healing experience for me.We have individual therapy sessions which can be scheduled with
            the Doctor,which served as a turning point in my recovery from alcohol addiction.</p>
    </div>

    <div className="testcontainer mx-5 p-3">
        <h3>Harish Singh -30 years</h3>
        <p>It was a detailed treatment and the doctors and therapists guided me throughout my journey.I was able to work
            remotely with the help of abundant amenities and would definitely recommend Cure Street for people needing
            help with addiction problems.</p>
    </div>

    <div className="testcontainer mx-5 p-3">
        <h3>Rukhsana Khatoon-45 years</h3>
        <p>After much worry,grief and blocked attempts to navigate my son's healthcare,the
            professionalism,kindness,compassion shown to my son by Cure Street Doctors, succeeded any avenue I had
            endured.5 stars to these fine individuals who shall remain in my memory.</p>
    </div>

    <div className="testcontainer mx-5 p-3">
        <h3>Priyam Rai-22 years</h3>
        <p>I just want to say that Cure Street is a wonderful thing,it helped me when I was in the worst possible phase
            of my life.I couldn't have done without Cure Street!</p>
    </div>
    </div>
    <Footer/>
   
   </>
  )
}

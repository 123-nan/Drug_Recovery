import React from 'react'
import '../styles/Footer.css'
import '../styles/Home.css'
import Footer from '../components/Footer'
import privacypic from "../components/images/patient_conf.jpg"


export default function Home() {
    return (
        <>
         <div className='row'>

             <div className="privacy p-5 ">
                <h1 className='pt-3'>What happens in your Clinic, Stays in your Clinic</h1>
                <h3 className='p-5'>When patients book an appointment from the Cure Street app, the patient is linked only to you. That's the reason Cure Street is the most trusted Health-tech brand among users in India.</h3>
                <img src={privacypic} alt="..."/> 
            </div>
             <div className='col-7'>

             </div>

         </div>

           <Footer/> 
        </>
    )
}

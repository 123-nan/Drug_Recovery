import React from 'react'
import Footer from './Footer'
import "../style/Home.css"
import privacypic from "./images/patient_conf.jpg"

export default function Home() {
  return (
    <>
    
    <div className="row background pt-3 ">
        <div className="col"></div>
        <div className="col"></div>
        <div className=" col heading  my-5 p-5 mr-5 ">
            <h1 className="headinghome mt-5 text-center">TAKE CARE OF YOUR BODY<br/>IT'S THE ONLY PLACE YOU HAVE TO LIVE</h1>
        {/* <h1 className="headinghome">THING IS YOUR HEALTH</h1> THE MOST VALUABLE THING IS YOUR HEALTH*/}
        </div>    
    </div>
    <div className="privacy p-5 ">
        <h1 className='pt-3'>What happens in your Clinic, Stays in your Clinic</h1>
        <h3 className='p-5'>When patients book an appointment from the Cure Street app, the patient is linked only to you. That's the reason Cure Street is the most trusted Health-tech brand among users in India.</h3>
        <img src={privacypic} alt="..."/> 
    </div>
    <div className="drugs">
        <div className=" drugscontent col-md-6 m-5 py-5">
            <p>DRUGS , Drugs is sequence of only 5 alpahbets  but a danger to life . The “teen years” is when most adolescents do experiment with their life .There are many dangers that come along with drug use. The biggest hazard is dying. Drugs could cause habit, brain harm, liver failure, and many different serious health problems. This is a serious issue and  should be undoubtedly be taken into consideration.
            </p>
        </div>
    </div>
    <Footer/>
    </>
  )
}

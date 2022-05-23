import React from 'react'
import "./About.css"

export default function About() {
  return (
    <>
    
    <h1 className="abouthead  mx-5">About Us</h1>
    <div className="about-section p-5">

        <p className="text">Founded in 2022,Cure Street is an on-demand,digital primary healthcare platform which offers professional
            services that can be availed from the comfort of home,office or anywhere you are comforatble at.
            Cure Street's endeavour has always been to make good health more accessible,reliable and hassle-free to
            all.
            With the help of Cure Street,users can instantly consult doctors online all through the tap or click of a
            button.
        </p>
        <p className="text">Cure Street provides unique recovery experience for individuals struggling with alcohol and drug use problems ans
            provides valuable assistance and information for managing your health,and support to those who seek
            information.People generally hesitate in talking about addictions because it is still a taboo in many
            countries,so with Cure Street people can talk about their condition freely without being judged at any time.
            <br/>You can trust our services which are credible.
        </p>

    </div>
    <h2 className='aboutsechead'>Our Treatment Approach</h2>
    <div className="row m-3 ">
        <div className="col p-5">
            <div className="card">
                <h2>Highlights of our Treatment Approach</h2>
                <ul>
                    <li>Preparation of individualized plans.</li>
                    <li>24*7 accessibility provided to patients.</li>
                    <li>Electronic Medical Records for confidentiality.</li>
                </ul>
            </div>
        </div>

        <div className="col p-5">
            <div className="card">
                <h2>Our three simple principles</h2>
                <ul>
                    <li>It should be in the best interest of the client. </li>
                    <li>It should improve outcomes of abstinence and recovery.</li>
                    <li>It should remain confidential.</li>
                </ul>

            </div>
        </div>

    </div>

    </>
  )
}

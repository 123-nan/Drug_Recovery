import React from 'react'
import "../styles/About.css"
import Footer from '../components/Footer' 

export default function About() {
  return (
    <>
    <div className="about pb-5">
    <h1 className="abouthead  mx-5 mb-5 pt-5">About Us</h1>
    <div className="about-section mx-5 px-5">

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
    <h2 className='aboutsechead mt-5'>Our Treatment Approach</h2>
    
        <div className=" gridalign  col-12 pb-5">
            <div className=" cardabout p-5">
                <h2>Highlights of our Treatment Approach</h2>
                <ul>
                    <li>Preparation of individualized plans.</li>
                    <li>24*7 accessibility provided to patients.</li>
                    <li>Electronic Medical Records for confidentiality.</li>
                </ul>
            </div>
        </div>

        <div className=" gridalign  col-12 pb-5 ">
            <div className="cardabout p-5">
                <h2>Our three simple principles</h2>
                <br/>
                <ul>
                    <li>It should be in the best interest of the client. </li>
                    <li>It should improve outcomes of abstinence and recovery.</li>
                    <li>It should remain confidential.</li>
                </ul>

        </div>

    </div>

    <h2 className='aboutsechead'>What Our User's Say</h2>
    <div className="row px-5">
        <div className="col-md-4 col-12 p-2">
            <div className="cardabout p-4">
                <h2>Monica Dixit - 28 years</h2>
                <p>This website is an incredible source of knowledge and comfort for me. I'm going through one of the
                    hardest times of my life mentally, and you have made me feel less alone.</p>
            </div>
        </div>


        <div className="col-md-4 col-12 p-2">
            <div className=" cardabout p-4">
                <h2>Shashank Pandey - 21 years</h2>

                <p>Cure Street is a life-saving site and no doubt makes people's lives better through knowledge,
                    information, and tools. I personally want to thank you for the assistance it has provided me.</p>
            </div>
        </div>


        <div className="col-md-4 col-12 p-2">
            <div className=" cardabout p-4">

                <h2>Manoj Agrawal - 45 years</h2>

                <p>It is so nice to have a website like yours that is not trying to sell you something and providing us
                    security
                    at all times. This means a whole lot to me. It makes me feel cared about.</p>

            </div>
        </div>
    </div>

    <h2 className='aboutsechead pt-5 pb-3'>Our Ad-Free Policy</h2>
        <p className="text about-section  px-5 mx-5  p-5">
            Cure Street does not accept advertising or sponsored content of any kind. Our website is 100% free of ads and corporate influence and always will be.
        You can trust our independence and intentions. We're not trying to sell you anything, collect your private information, or make money on you. Our only goal is to get you the assistance you need, when you need it.<br/>
       without any ulterior motives or annoying ads getting in the way of the help you're looking for.
        </p>
        </div>
<Footer/>
    </>
  )
}

import React from 'react'
import '../styles/Footer.css'
import '../styles/Home.css'
import Footer from '../components/Footer'
import privacypic from "../components/images/patient_conf.jpg"
import doc from "../components/images/doc1.jpg"
import drugrecovery from "../components/images/drugrecovery.jpg"


export default function Home() {
    return (
        <>
            <div className="homeback">
                <div className="row  py-5">
                    <div className="col-md-6 col-12">
                    </div>
                    <div className="col-md-6 col-12 mt-5 py-5">
                        <h1 className='homehead pb-5 px-2'>WELCOME TO CURE STREET</h1>
                        <ul>
                            <li className="homelist">Take First Step Towards De-addiction</li>
                            <li className="homelist">Experienced Clinical Care Team</li>
                            <li className="homelist">100% Confidentiality</li>
                            <li className="homelist">Can Take Up Treatment Anonymously</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row expert p-5">
                <div className="col-md-7 p-5">
                    <h2 className='homehead px-4 py-4'>IN EXPERT HANDS</h2>
                    <ul type='square'>
                        <li className="expertlist">Internationally certified Clinical and Operations teams with vast experience Councelling</li>
                        <li className="expertlist">Senior leadership team with qualified and experienced Specialist Doctors in the field of Therapy</li>
                        <li className="expertlist">Experienced therapist team curated on the basis of counselling domain expertise</li>
                    </ul>
                </div>

                <div className="col-md-4 mx-5s p-5">
                    
                        <img src={doc} alt='...' style={{height:'250px', width:'200px'}}/>
                    
                </div>

            </div>


             
             
            <div className="privacy col-12 p-5 ">
                <h1 className='homehead pt-3'>What happens in your Clinic, Stays in your Clinic</h1>
                <h3 className='homelist p-5'>When patients book an appointment from the Cure Street app, the patient is linked only to you. That's the reason Cure Street is the most trusted Health-tech brand among users in India.</h3>
                <img src={privacypic} alt="..." className='px-5' style={{height:'450px', width:'750px'}}/> 
            </div>
             

            <div className="row cure p-5">
                <div className="col-md-8 p-5">
                    <h2 className="homehead pb-4">GET RID OF YOUR ADDICTION AT CURE STREET</h2>
                    <p>Cure Street provides unique recovery experience for individuals struggling with alcohol and drug use problems ans
                    provides valuable assistance and information for managing your health,and support to those who seek
                    information.People generally hesitate in talking about addictions because it is still a taboo in many
                    countries,so with Cure Street people can talk about their condition freely without being judged at any time.</p>
                    
                    <p>Cure Street's endeavour has always been to make good health more accessible,reliable and hassle-free to
                    all.</p>
                    
                    <p>
                    With the help of Cure Street,users can instantly consult doctors online all through the tap or click of a
                    button and can freely chat or have a face time with their therapist.
                    </p>
                </div>
                <div className="col-md-4 col-12 p-5 ">
                <img src={drugrecovery} alt='...' style={{height:'250px', width:'400px'}}/>
                </div>

            </div>


            {/* <div className="facility">
                 <h2 className='homehead text-center p-5'>WHY CHOOSE CURE STREET?</h2>
                 <div className="row">
                     <div className="facimg"></div>
                     <div className="facimg"></div>
                     <div className="facimg"></div>
                 </div>
                 <div className="row">
                     <div className="facimg"></div>
                     <div className="facimg"></div>
                     <div className="facimg"></div>
                 </div>
             </div> */}
           <Footer/> 
        </>
    )
}

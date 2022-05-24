import React from 'react'
import image from "./images/img1.jpeg"
import img2 from "./images/6.jpg"
import img3 from "./images/img2.png"
import img4 from "./images/img3.png"
import img5 from "./images/1.jpg"
import './Blog.css'
import Footer from './Footer'

export default function Blog() {
    return (
      <>
    <div className="mx-5 px-5">
        <h2 className="py-4 text-center bloghead">BLOGS</h2>


        <div className="card mb-5">
            <h3 className="card-title pt-4 pb-3 text-center blogtitle">Why You Should Have a Support System in Recovery</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={image} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 px-5 card-body">
                    
                    <p class="card-text">Having a support system and having your own support group makes recovery last. When you go to a treatment center to get help for your addictions, you’ll be assigned a counselor. It is the counselor’s responsibility to assist you in setting objectives and learning recovery-related skills. This includes techniques to form a peer support structure once you return home</p>
                    <p>Although drug rehabs and holistic treatment programs are often believed to be more effective, countless people have had great success in support groups, indicating that there is something about the support group format that is highly effective for recovery.</p>
                    <p>A support system is just a collection of people who are close to you and will listen to you when you need it. Even if they don’t have any constructive advise to offer, simply listening can provide a similar sense of release as a visit with a counselor or therapist. Consider a support system for someone in recovery to use as a sounding board.</p>
                </div>
             </div>
        </div>  

        <div className="card my-5">
            <h3 className="card-title pt-4 pb-3 text-center blogtitle">Long Term Effects of Drug Addiction</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img2} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 px-5 card-body">
                    
                    <p class="card-text">Drug addiction can lead to numerous physical and mental health problems in the future. Drug addiction causes long-term changes to the brain which makes quitting almost impossible. Examples of physical health problems are lung cancer, heart disease, liver damage, and kidney failure. Mental health problems that can occur are depression or anxiety. It is possible to reverse all of these health problems through long-term drug addiction treatment, and to start learning how to live without drugs.</p>
                    
                    <p>The brain and addiction work like a reward system, the neurotransmitter, dopamine rewards the brain every time a drug is taken. Dopamine, comes in large doses in the brain, which creates an overwhelming amount of pleasure or euphoria. Overstimulating the brain with dopamine creates changes to the brain. Too much dopamine can make your brain produce less dopamine. This happens because your brain already has too much dopamine from taking the drugs. The result of this is why most long-term drug users feel depressed or lethargic.</p>
                </div>
             </div>
        </div> 

        <div className="card my-5">
            <h3 className="card-title pt-4 pb-3 text-center blogtitle">Why Sober Living Homes Are Important</h3>
            
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img3} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 px-5 card-body">
                    
                    <p class="card-text">Behavioral Crossroads works with many detox programs. Detox and drug addiction recovery both present significant challenges. Detox is difficult because you’re trying to rid the body of toxic substances. Many people experience significant withdrawal symptoms during the detox process. To relieve the discomfort, people often have to receive medical treatment to control the symptoms they experience during detox.</p>
                    <p>After detox is over, people can begin the process of drug addiction recovery. This is an intense process that aims to get to the root cause of the addiction. Done correctly at a reputable drug rehab center, rehab treatment will actually empower people to enjoy long-term sobriety.</p>
                    <p>However, many people find that maintaining sobriety after treatment is not easy. Returning to the same place and hanging out with the same people after completing rehab can put a person at risk for suffering a relapse.</p>
                </div>
             </div>
        </div> 


        <div className="card my-5">
            <h3 className="card-title pt-4 pb-3 text-center blogtitle">What is post-acute withdrawal syndrome?</h3>
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img4} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 px-5 card-body">
                    
                    <p class="card-text">Following medically supervised detox from highly addictive substances, most people experience a short phase of physical discomfort, otherwise known as acute withdrawal.  Acute withdrawal can produce more dangerous health consequences—even life-threatening complications if detox isn’t done in a supervised setting. But there’s more to drug and alcohol withdrawal than physical symptoms of discomfort. While acute withdrawal refers primarily to the body’s process of healing, a second phase of withdrawal symptoms, known as post-acute withdrawal syndrome, or PAWS. Post-Acute Withdrawal, which occurs after acute withdrawal is over and may last up to two years. Post-acute withdrawal encompasses physical and psychological symptoms and may be very difficult to overcome without preparation and professional support. Post-acute withdrawal symptoms often peak at around six months and can be severe enough to derail the recovery process.</p>
                    <div className="symptom ">
                      <h5>Symptoms of PAWS:</h5>
                    <ul>
                      <li>Sudden, intense mood swings</li>
                      <li>Depression and anxiety</li>
                      <li>Inability to think clearly or concentrate</li>
                      <li>Variable energy levels</li>
                      <li>Sleep disturbances or insomnia</li>
                      <li>Acute sensitivity to stress</li>
                      <li>Problems with physical coordination</li>
                      <li>Obsessive thoughts</li>
                    </ul>
                    </div>
                </div>
             </div>
        </div>

        <div className="card my-5">
            <h3 className="card-title pt-4 pb-3 mx-5 px-5 text-center blogtitle">Alcohol Addiction</h3>
            
            <div className="row">
                <div class="col-md-4 p-4">
                    <img src={img5} class="img-fluid rounded-start"  alt="..."/>
                </div>
                <div className=" col-md-8 px-5 card-body">
                    
                    <p class="card-text">People all across the globe suffer from alcohol addiction. It claims lives every day, making it deadly and dangerous for anyone dealing with it, both the individuals with alcoholism as well as their family and friends. Finding treatment for this disorder may seem impossible, especially to those who feel that it has a stranglehold on their lives, but there are options. Looking into New Jersey alcohol treatment centers is one of the best options available to you. It gives you access to a professional, high quality facility full of people who are there to help.</p>
                    <p>Anyone currently suffering with addiction should reach out to addiction centers as a way to improve their mental and physical health, find stable support, and have a team of people ready to help both medically and emotionally. Centers in New Jersey will offer top of the line professionals, equipment, and spaces that focus solely on the treatment of alcohol addiction. This makes a treatment for alcohol addiction possible, putting normalcy and a bright future within everyone’s grasps. It is something that you can rely on and that can help you to live a better tomorrow.</p>
                </div>
             </div>
        </div> 
        </div>
<Footer/>
    </>
    )
}

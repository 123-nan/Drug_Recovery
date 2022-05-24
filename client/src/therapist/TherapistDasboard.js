import React from 'react'


import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function TherapistDasboard() {
  return (
    <>
    <div className="dashboard">
        <h1 className="dash_head  mb-2 px-5 pt-5">Dashboard</h1>
            
        <div className="row my-2 rows">
            <div className="card col justify-content-center m-5 p-2 cols-4">
            <img src="" class="card-img-top" alt="..."/>
           <div className="card-body">   
                <a href="/therapist-detail" className="btn1">Patients</a>
            </div>
            </div>
            <div className="card col m-5 p-2 cols-4" >
            <img src="" class="card-img-top" alt="..."/>
            <div className="card-body">
                
                <Link to="/therapist-appointment" className="btn1">Appointments</Link>
            </div>
            </div>
            <div className="card col m-5 p-2 cols-4">
            <img src="" class="card-img-top" alt="..." sytle={{height:'10'}}/>
            <div className="card-body">
                
                <a href="/" className="btn1">Schedule</a>
            </div>
            </div>
        </div>
        </div>  
        <Footer/>
        </>
  )
}


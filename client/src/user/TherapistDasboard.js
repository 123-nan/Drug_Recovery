import React from 'react'
import patcover from "./images/patientcov.jpg"
import appcover from "./images/app_cover.jpg"
import schcover from "./images/schedule_cover.jpg"
import "./Dashboard.css"

export default function TherapistDasboard() {
  return (
    <>
    <div className="dashboard">
        <h1 className="dash_head mx-5 mb-2 px-5 pt-5">Dashboard</h1>
            
        <div className="row mx-5 my-2">
        <div className="card col justify-content-center m-5 p-2" style={{width: '18rem'}}>
            <img src={patcover} class="card-img-top" alt="..."/>
           <div className="card-body">   
                <a href="/therapist-detail" className="btn1">Patients</a>
            </div>
            </div>
            <div className="card col m-5 p-2" style={{width: '18rem'}}>
            <img src={appcover} class="card-img-top" alt="..."/>
            <div className="card-body">
                
                <a href="/" className="btn1">Appointments</a>
            </div>
            </div>
            <div className="card col m-5 p-2" style={{width: '18rem'}}>
            <img src={schcover} class="card-img-top" alt="..." sytle={{height:'10'}}/>
            <div className="card-body">
                
                <a href="/" className="btn1">Schedule</a>
            </div>
            </div>
        </div>
        </div>  
        </>
  )
}


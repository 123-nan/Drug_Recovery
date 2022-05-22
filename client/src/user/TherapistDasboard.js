import React from 'react'
import patcover from "./images/patientcov.jpg"
import appcover from "./images/app_cover.jpg"
import schcover from "./images/schedule_cover.jpg"

export default function TherapistDasboard() {
  return (
    <>
        <h1 className="mx-5 my-2 px-5">Dashboard</h1>
            
        <div className="row mx-5 my-2">
        <div className="card col justify-content-center m-5 p-2" style={{width: '18rem'}}>
            <img src={patcover} class="card-img-top" alt="..."/>
           <div className="card-body">   
                <a href="/therapist-detail" className="btn btn-primary">Patients</a>
            </div>
            </div>
            <div className="card col m-5 p-2" style={{width: '18rem'}}>
            <img src={appcover} class="card-img-top" alt="..."/>
            <div className="card-body">
                
                <a href="/" className="btn btn-primary">Appointments</a>
            </div>
            </div>
            <div className="card col m-5 p-2" style={{width: '18rem'}}>
            <img src={schcover} class="card-img-top" alt="..." sytle={{height:'10'}}/>
            <div className="card-body">
                
                <a href="/" className="btn btn-primary">Schedule</a>
            </div>
            </div>
        </div>
            
        </>
  )
}


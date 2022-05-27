import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../styles/Footer.css'
import patcover from "../user/images/patientcov.jpg"
import appcover from "../user/images/app_cover.jpg"
import schcover from "../user/images/schedule_cover.jpg"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const  TherapistDasboard = () => {

    const {user} = useSelector((state) => ({...state}));
    const id = user.user._id;
    const history = useHistory();

    const handleSchedule = ()=>{

        history.push(`/edit-schedule/${id}`);

    }

  return (
    <>
    <div className="dashboard">
        <h1 className="dash_head  mb-2 px-5 pt-5">Dashboard</h1>
            
        <div className="row py-2 rows gridalign">
            
            <div className="card col-md-6 col-12 m-5 p-2" style={{width:'18rem'}}  >
            <img src={appcover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to="/therapist-appointment" className="btn1">Appointments</Link>
            </div>
            </div>
            <div className="card col-md-6 col-12 m-5 p-2" style={{width:'18rem'}} >
            <img src={schcover} class="card-img-top" alt="..." sytle={{height:'10'}}/>
            <div className="card-body">
                
                <button className="btn1" onClick={handleSchedule} >Schedule</button>
            </div>
            </div>
        </div>
        </div>  
        <Footer/>
        </>
  )
}


export default TherapistDasboard
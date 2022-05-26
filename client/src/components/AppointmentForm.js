import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Home.css'
import '../styles/Footer.css'
import { useSelector } from 'react-redux'

const AppointmentForm = ({ puid, time, status,pname,tname}) => {

  const history = useHistory();
  const user = useSelector((state) => ({...state}));

  let hour = time.substring(0,2);
  console.log(hour);
  let minute = time.substring(3,5);
  let date = time.substring(6,8);
  let month = time.substring(9,11);
  let year = time.substring(12,17);
  const currentDay = new Date(Date.now()).getDate();
  const currentMonth = new Date(Date.now()).getMonth();
  const currentYear = new Date(Date.now()).getFullYear();
  const currentHour = new Date(Date.now()).getHours();
  const currentMinute = new Date(Date.now()).getMinutes();
  let flag = true;
  if(currentYear > year)
  {flag = false; console.log("y")}
  else if(currentMonth > month)
  {flag = false; console.log("m")}
  else if(currentDay > date)
  flag = false;
  else if(currentHour > hour)
  {flag = false; console.log("h")}
  else if(currentMinute > minute && currentHour == hour)
  {flag = false; console.log(currentMinute,minute);}
  else
  flag = true;
  console.log(currentDay,currentMonth,currentYear,currentHour,currentMinute);


  const handleClick = () =>{
    history.push(`/joinroom/${puid}`);
  }

  const generateReport = () =>{
    history.push(`/pdf-form/${puid}`);
  }

  const cancelorgen = (e) =>{

    
    console.log(e.user);
    if(e.user.u == "therapist")
    return <button className='btn btn-danger  text-white border-round cardbtn m-1' onClick={generateReport}>Generate Report</button>
    return <button className='btn btn-danger  text-white border-round cardbtn m-1' >Cancel</button>

  }

  return (
    <>

      <div className="component text-center col-md-3 m-5 gridalign">
        <div className="card" style={{width:"18rem"}}>
          <div class="card-header background-v text-white">
            {time.substring(6,16)}
          </div>
          <div class="card-body">
            <h5 class="card-title">Patient : {pname}</h5>
            {user.u=="patient"?<h5 class="card-title">Therapist : {tname}</h5>:<></>}
            <h6 class="card-title">Time : {time.substring(0,5)}</h6>
            {!flag ?cancelorgen(user):<button className='btn btn-primary text-white border-round cardbtn' onClick={handleClick}>Open</button>}
            {(user.u=="patient" && flag) && <button className='btn btn-danger  text-white border-round cardbtn m-1'>Cancel</button>}
          </div>

        </div>
      </div>

    </>
  )
}

export default AppointmentForm;

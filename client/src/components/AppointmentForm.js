import React from 'react'
import { useHistory } from 'react-router-dom'

const AppointmentForm = ({ puid, time, status,pname,tname}) => {

  const history = useHistory();

  const handleClick = () =>{
    // Logic to click or nor for now let it be click

   

    history.push(`/joinroom/${puid}`);

  }

  return (
    <>

      <div className="component text-center col-md-3 m-5">
        <div className="card">
          <div class="card-header ">
            {time}
          </div>
          <div class="card-body">
            <h5 class="card-title">Patient : {pname}</h5>
            <h5 class="card-title">Therapist : {tname}</h5>
            {status ?<button className='btn btn-danger' disabled>Appointment Closed</button>:<button className='btn btn-primary' onClick={handleClick}>Appointment Open</button>}

          </div>

        </div>
      </div>

    </>
  )
}

export default AppointmentForm;

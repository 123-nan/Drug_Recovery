import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Home.css'

const ReportForm = ({report,base64,tname,time}) => {

  const history = useHistory();
  const date = new Date(time).getDate() +":"+ new Date(time).getMonth() + ":"+ new Date(time).getFullYear();


  const downloadPdf = () =>{
    var win = window.open(base64, '_blank');
  win.focus();
  }

  return (
    <>

      <div className="component text-center col-md-3 m-5">
        <div className="card">
          <div class="card-header background-violet text-white">
            {report}
          </div>
          <div class="card-body">
            <h5 class="card-title">Therapist : {tname}</h5>
            <h6 class="card-title">Date : {date}</h6>
            
          <button className='btn border border-primary' onClick={downloadPdf}>Download</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default ReportForm;

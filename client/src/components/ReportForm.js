import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Home.css'
import axios from 'axios'
import jsPDF from 'jspdf'

const ReportForm = ({report,base64,tname,time}) => {

  const history = useHistory();
  const date = new Date(time).getDate() +":"+ new Date(time).getMonth() + ":"+ new Date(time).getFullYear();

  console.log(base64);




  


  const downloadPdf = async () =>{
  

  
  const linkSource = base64;
  const downloadLink = document.createElement("a");
  const fileName = "vct_illustration.pdf";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
 
    



  }

  return (
    <>

      <div className="component text-center col-md-3 m-5">
        <div className="card">
          <div class="card-header background-v text-white">
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

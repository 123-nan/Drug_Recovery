import React from 'react'
import "../styles/PdfForm.css"
import Footer from './Footer'
import jsPDF from 'jspdf'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PdfForm() {


  const uid = "628a5c164eff7cb26e0f2f88"
  const monday = ["10:00","12:00","15:00","18:00","20:00"]
  const tuesday = ["10:00","12:00","15:00","18:00","20:00"]
  const wednesday = ["10:00","12:00","15:00","18:00","20:00"]
  const friday = ["10:00","12:00","15:00","18:00","20:00"]
  const saturday = ["10:00","12:00","15:00","18:00","20:00"]
  const sunday = ["10:00","12:00","15:00","18:00","20:00"]
  const thrusday = ["10:00","12:00","15:00","18:00","20:00"]
  const name = "Piyush"

  axios.post('http://localhost:8003/api/update-schedule-therapist', {
    uid,monday,tuesday,wednesday,thrusday,friday,saturday,sunday,name
  })
  .then(function (response) {
    console.log(response);
    
  })
  .catch(function (error) {
    console.log(error);
  });




  return (
    <>
    <div className="pdfform">


</div>
    <Footer/>
    </>
  )
}

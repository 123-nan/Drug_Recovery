import React from 'react'
import "../styles/PdfForm.css"
import Footer from './Footer'

export default function PdfForm() {
  return (
    <>
    <div className="pdfform">
   <form  className="pdf-form">

        <h2 className='pdfhead'>MEDICAL REPORT</h2>
        
        <label for="patientname">Patient's Name</label>
        <input type="text" placeholder="Patient's name" id="patientname"/>

        <label for="doctorname">Doctor's Name</label>
        <input type="text" placeholder="Doctor's name" id="doctorname"/>

        <label for="inputAddress">Chief Complaint</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Drug Addiction"/>
    
        <label for="inputAddress2">Allergies</label>
        <textarea rows={4} type="text" class="form-control" id="inputAddress2" placeholder="Allergies with Something"/>
        
        <label for="inputAddress">Diagnosis</label>
        <textarea rows={4} type="text" class="form-control" id="inputAddress" placeholder="Drug Addict"/>
        
        <label for="inputAddress2">General Advice</label>
        <textarea rows={4} type="text" class="form-control" id="inputAddress2" placeholder="Meditation"/>
       
       <button className="pdfbutton">Generate PDF</button>

   </form>
</div>
    <Footer/>
    </>
  )
}

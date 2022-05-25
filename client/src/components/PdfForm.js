import React from 'react'
import "../styles/PdfForm.css"

export default function PdfForm() {
  return (
    <>
    <div className='pdf-back '>
    <form className='pdf-form col-md-6'>
        <h1 className='medicalhead mb-5'>MEDICAL REPORT</h1>
        <div class="form-group mb-3 ">
            <label for="patientname">Patient's Name</label>
            <input type="patient" class="form-control" id="patientname" placeholder="Patient"/>
        </div>
        <div class="form-group  mb-3">
            <label for="doctorname">Doctor's Nmae</label>
            <input type="password" class="form-control" id="doctorname" placeholder="Doctor"/>
        </div>
        <div class="form-group mb-3">
            <label for="inputAddress">Chief Complaint</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Diet for Weight Loss"/>
        </div>
        <div class="form-group mb-3">
            <label for="inputAddress2">Allergies</label>
            <textarea rows={4} type="text" class="form-control" id="inputAddress2" placeholder="Allergies with Something"/>
        </div>
        <div class="form-group mb-3">
            <label for="inputAddress">Diagnosis</label>
            <textarea rows={4} type="text" class="form-control" id="inputAddress" placeholder="Diet for Weight Loss"/>
        </div>
        <div class="form-group mb-3">
            <label for="inputAddress2">General Advice</label>
            <textarea rows={4} type="text" class="form-control" id="inputAddress2" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
        </div>
        <div class="form-group mb-3">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
                ALL THE FIELDS FILLED OUT ABOVE ARE CORRECT AND VERIFIED
            </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Generate PDF</button>
    </form>
</div>
    
    </>
  )
}

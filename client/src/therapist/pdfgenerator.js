// import '@progress/kendo-theme-material/dist/all.css'
import React from 'react';
import {useRef,useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios';
import { jsPDF } from "jspdf";
import { useParams } from 'react-router-dom';
import { uploadreport } from '../actions/auth';
import { useSelector } from 'react-redux';

const PdfGenerator= () => {

    const uuid = useParams().id;
    const {user} = useSelector((state) => ({...state}));
    var name="Report";

    const puid = user.user._id;
    const tname = user.user.name;
    const doc = new jsPDF();


    const [patientname,setPatientName] = useState();
    const [doctorname,setDoctorName] = useState();
    const [chiefComplaint,setChiefcomplaint] = useState();
    const [allergies,setAllergies] = useState();
    const [diagonosis,setDiagonosis] = useState();
    const [generalAdvice,setGeneralAdvice] = useState();
    



    const handleClick= async () =>{

       
        
        
        // doc.addImage(logo, 'JPEG', 15, 40, 180, 160)

        // doc.addPage("a4","p");
        try{
        doc.text('Medical Report',90,10);
        doc.text(new Date(Date.now()).getDate() + "/" + new Date(Date.now()).getMonth() + "/" + new Date(Date.now()).getFullYear(),170,10);
        doc.setFontSize(10);
        doc.line(5,15,200,15,'S');

        doc.text('Cure Street',10,25);
        doc.text('GSTIN:025000SD40D1F41F',140,25);
        doc.text('Expert in Caring',140,30);
        doc.text('Yamuna Gate, TeliarGanj',140,35);
        doc.text('Prayagraj, Uttar Pradesh 229001',140,40);

        doc.line(5,45,200,45,'S');
       

        console.log(patientname,doctorname,chiefComplaint,allergies,diagonosis,generalAdvice)
        
        
        doc.text('Patient',10,50) 
        doc.text(patientname,10,57);


        doc.text('Doctor',140,50) 
        doc.text(doctorname,140,57);



        doc.text('Chief Complaint',10,90);
        doc.line(10,92,40,92,'S');
        doc.text(chiefComplaint,20,100);

        doc.text('Allergies',10,110);
        doc.line(10,112,40,112,'S');
        doc.text(allergies,20,120);

        doc.text('Diagnosis',10,140);
        doc.line(10,142,40,142,'S');
        doc.text(diagonosis,20,150);

        doc.text('General Advice',10,160);
        doc.line(10,162,40,162,'S');
        doc.text(generalAdvice,20,170);
       


        doc.text('Digitally Signed By',137,250);
        doc.text(doctorname,140,260);
        







        doc.save("a.pdf");
        var report = doc.output('datauri');
        window.localStorage.setItem('report',report);
        }
        catch(err)
        {
          toast.dark("Enter all field");
        }


       
        
       

    }

    const uploadPDF = async () =>{
      var report = window.localStorage.getItem('report');
      var reportname = "Drug Report"
      console.log(uuid,puid);
      const time = new Date(Date.now());

      await axios.post('http://localhost:8003/api/upload-report', {
          uuid,puid,report,reportname,tname,time
        })
        .then(function (response) {
          toast.success("PDF Uploaded")
          window.localStorage.removeItem('report');
                    })
        .catch(function (error) {
          toast.dark("Failed To Upload");
          window.localStorage.removeItem('report');
        });
    }

    return (
       
      <div className="pdfform">
      <div  className="pdf-form">
   
           <h2 className='pdfhead'>MEDICAL REPORT</h2>
           
           <label for="patientname">Patient's Name</label>
           <input type="text" placeholder="Patient's name" id="patientname" onChange={(e) => setPatientName(e.target.value)}/>
   
           <label for="doctorname">Doctor's Name</label>
           <input type="text" placeholder="Doctor's name" id="doctorname" onChange={(e) => setDoctorName(e.target.value)}/>
   
           <label for="inputAddress">Chief Complaint</label>
           <input type="text" class="form-control" id="inputAddress" placeholder="Drug Addiction" onChange={(e) => setChiefcomplaint(e.target.value)}/>
       
           <label for="inputAddress2">Allergies</label>
           <textarea rows={4} type="text" class="form-control" id="inputAddress2" placeholder="Allergies with Something" onChange={(e) => setAllergies(e.target.value)}/>
           
           <label for="inputAddress">Diagnosis</label>
           <textarea rows={4} type="text" class="form-control" id="inputAddress" placeholder="Drug Addict" onChange={(e) => setDiagonosis(e.target.value)}/>
           
           <label for="inputAddress2">General Advice</label>
           <textarea rows={4} type="text" class="form-control" id="inputAddress2" placeholder="Meditation"onChange={(e) => setGeneralAdvice(e.target.value)}/>
          
          <button className="pdfbutton" onClick={handleClick}>Generate PDF</button>

          <button className="pdfbutton" onClick={uploadPDF}>Upload PDF</button>
   
   
      </div>
   </div>
     
    )
 
};
export default PdfGenerator;
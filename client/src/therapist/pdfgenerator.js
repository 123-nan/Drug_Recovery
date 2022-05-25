// import '@progress/kendo-theme-material/dist/all.css'
import React from 'react';
import {useRef} from 'react'
import { jsPDF } from "jspdf";

const PdfGenerator= () => {

    const pdfExportComponent = useRef(null);
    const handleClick=() =>{

       
        
        const doc = new jsPDF();
        // doc.addImage(logo, 'JPEG', 15, 40, 180, 160)

        // doc.addPage("a4","p");
        doc.text('Medical Report',90,10);
        doc.setFontSize(10);
        doc.line(5,15,200,15,'S');

        doc.text('Cure Street',10,25);
        doc.text('GSTIN:025000SD40D1F41F',140,25);
        doc.text('Expert in Caring',140,30);
        doc.text('Yamuna Gate, TeliarGanj',140,35);
        doc.text('Prayagraj, Uttar Pradesh 229001',140,40);

        doc.line(5,45,200,45,'S');
       


        
        
        doc.text('Patient',10,50) 
        doc.text('Piyush Jaiswal',10,57);


        doc.text('Doctor',140,50) 
        doc.text('Piyush Jaiswal',140,57);



        doc.text('Chief Complaint',10,90);
        doc.line(10,92,40,92,'S');
        doc.text('Diet for Weight Loss',20,100);

        doc.text('Allergies',10,110);
        doc.line(10,112,40,112,'S');
        doc.text('Allergies with Someone',20,120);
        doc.text('Allergies with Akriti',20,125);
        doc.text('Allergies with Piyush',20,130);

        doc.text('Diagnosis',10,140);
        doc.line(10,142,40,142,'S');
        doc.text('Diet for Weight Loss',20,150);

        doc.text('General Advice',10,160);
        doc.line(10,162,40,162,'S');
        doc.text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',20,170);
        doc.text('Lorem Ipsum is simply dummy text of the printing and typesetting industry',20,175);
        doc.text('Lorem Ipsum is simply dummy text of the printing and typesetting ',20,180);
        doc.text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',20,185);
        doc.text('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ',20,190);


        doc.text('Digitally Signed By',137,250);
        doc.text('Piyush Jaiswal',140,260);







        doc.save("a.pdf");
        
        var x = doc.output('datauri');
        console.log(x);

    }

    return (
       
        <div id="check">
        <h1 onClick={handleClick}>
            Piyush
        </h1>
        </div>
     
    )
 
};
export default PdfGenerator;
import {useState,useEffect} from 'react';
import axios from 'axios';
import PdfGenerator from '../therapist/pdfgenerator';
import ReportForm from '../components/ReportForm';
import { useParams } from 'react-router-dom';

const MedicalRecord = () =>{
    const params = useParams();
    const uuid = params.id;

    const [data,setData] = useState();
    const [customList,setCustomList] = useState([]);

       useEffect(() =>{
        axios.post('http://localhost:8003/api/get-report', {
            uuid
          })
          .then(function (response) {
            console.log(response.data);
            setCustomList(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
       },[])

   
      
       


     

    return (
        <>
        <div className="row p-5 m-l-5 text-center">
        {customList != null &&  customList.map((list) => <ReportForm report={list.reportname} base64={list.report} tname={list.tname} time={list.time}/>)}
        
        </div>
        </>

    )

}

export default MedicalRecord;
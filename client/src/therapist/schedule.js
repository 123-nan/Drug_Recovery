import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from "axios";
import BookingCard from "../components/BookingCard";
import '../styles/Footer.css'
import Footer from "../components/Footer";


const Schedule = () => {

    const params = useParams();
    const uid = params.id;
    let therapist;

    const [data,setData] = useState();

       useEffect(() =>{
        axios.post('http://localhost:8003/api/schedule-therapist', {
            uid
          })
          .then(function (response) {
            console.log(response.data[0]);
            setData(response.data[0]);
          })
          .catch(function (error) {
            console.log(error);
          });
       },[])

   
       let customList;
       if(data!=null)
       {
        customList = new Array();
        for (const key in data) {

            if(key!="_id" && key!="uid" && key !="createdAt" && key!="updatedAt" && key !="__v" && key != "name" && key != "sunday")
            {

                // console.log(`${key}: ${data[key]}`);
                const obj = {
                    day:key,
                    date:data[key]
                };
                customList.push(obj);
            }
            if(key === "name")
            therapist = data[key];

            
        }
       }


    //    if(customList!=null)
    //    customList.map((list) => console.log(list.day,list.date));

    return (
        <>
        <h1 className="tophead mt-5">Book Your Slot</h1>
        <div className="row p-5 m-l-5 text-center">
        {customList != null &&  customList.map((list) => <BookingCard uuid={uid} day={list.day} list={list.date} tname={therapist}/>)}
        </div>
        <Footer/>
        </>

    )
}

export default Schedule;
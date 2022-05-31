import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios";


const NewSchedule = () => {


    const d = { 
        name: "Dr Abdul Khan", 
        uid: "6287f086abeba6975d8c5d4c",
        monday: [{ time: "10:00", avail: true },{ time: "13:00", avail: true },{ time: "15:00", avail: true },{ time: "17:00", avail: true },{ time: "19:00", avail: true }], 
        tuesday: [{ time: "12:00", avail: true },{ time: "13:00", avail: true },{ time: "15:00", avail: true },{ time: "17:00", avail: true },{ time: "22:00", avail: true }], 
        wednesday: [{ time: "13:00", avail: true },{ time: "15:00", avail: true },{ time: "16:00", avail: true },{ time: "17:00", avail: true },{ time: "20:00", avail: true }], 
        thrusday: [{ time: "08:30", avail: false },{ time: "10:30", avail: false },{ time: "11:30", avail: false },{ time: "14:30", avail: false },{ time: "15:30", avail: false }], 
        friday: [{ time: "22:00", avail: true },{ time: "23:00", avail: true }], 
        saturday: [{ time: "12:30", avail: false },{ time: "02:30", avail: false },{ time: "22:30", avail: false },{ time: "23:30", avail: false },{ time: "24:30", avail: false }] 
    }

    useEffect(() => {
        axios.post('http://localhost:8003/api/update-schedule-therapist', {
            
            d
            

          })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}, [])


return (
    <>
        <h1 className="tophead mt-5">My Schedule</h1>

    </>

)
}

export default NewSchedule;
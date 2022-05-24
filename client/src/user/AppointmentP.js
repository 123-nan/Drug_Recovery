import {useEffect,useState} from 'react';
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import AppointmentForm from '../components/AppointmentForm'
import '../styles/Footer.css'

export default function AppointmentP() {

  const {user} = useSelector((state) => ({...state}))

  const puid = user.user._id;

  const [list,setList] = useState([]);

  useEffect(() =>{
    axios.post('http://localhost:8003/api/get-appointmet-patient', {
        puid
      })
      .then(function (response) {
      
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
   },[])

  if(list)
  list.map((l) => console.log(l));
  


  return (
    <>
    <h1 className="tophead mt-5 " >Appointments</h1>
     <div className="row p-5 m-l-5">
    {list.map((l) => <AppointmentForm time={l.time} puid={l.puid} status={l.status} pname={l.pname} tname={l.tname}/>)}
    </div>
    </>
  )
}

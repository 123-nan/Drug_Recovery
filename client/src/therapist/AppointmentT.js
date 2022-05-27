import {useEffect,useState} from 'react';
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import AppointmentForm from '../components/AppointmentForm'
import '../styles/Footer.css'
import Footer from '../components/Footer';

export default function AppointmentT() {

  const {user} = useSelector((state) => ({...state}))

  const uuid = user.user._id;

  console.log(uuid)

  const [list,setList] = useState([]);

  useEffect(() =>{
    axios.post('http://localhost:8003/api/get-appointmet-therapist', {
        uuid
      })
      .then(function (response) {
      
        response.data.sort(function(a, b) {
          return parseFloat(a.price) - parseFloat(b.price);
      });

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
    <div className='row gridalign'>
    {list.map((l) => <AppointmentForm time={l.time} puid={l.puid} status={l.status} pname={l.pname}/>)}
    </div>
    <Footer/>
    </>
  )
}

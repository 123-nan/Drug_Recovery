import {useEffect,useState} from 'react';
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import AppointmentForm from '../components/AppointmentForm'

export default function AppointmentT() {

  const {user} = useSelector((state) => ({...state}))

  const uuid = user.user._id;

  const [list,setList] = useState([]);

  useEffect(() =>{
    axios.post('http://localhost:8003/api/get-appointmet-therapist', {
        uuid
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
    
    {list.map((l) => <AppointmentForm time={l.time} puid={l.puid} status={l.status} pname={l.pname}/>)}
    
    </>
  )
}

import axios from "axios";
import TherapistCard from "../components/TherapistCard";
import {useEffect,useState} from  'react'
import '../styles/Footer.css'
import Footer from "../components/Footer";

const TherapistDetail =({history}) =>{
  
    const [listoftherapist,setList] = useState();
   


    useEffect(() => {
        let list;
        axios.get(`${process.env.REACT_APP_API}/therapist`).then(function(response){
            setList(response.data);
            console.log(response.data);
        })
        
    }, [])



    return (
        <>   
        <h1 className="tophead mt-5 mb-3 " >Therapists</h1>
        <div className="row flex pb-5  ml-5 px-5">
        {listoftherapist!=null &&  listoftherapist.map((list) => <TherapistCard name={list.name} age={list.age} gender={list.gender} experience={list.experience} qualification={list.qualification} image={list.image}
         id={list._id}
        />)}
        </div>
        <Footer/>
     </>
    )
}
export default TherapistDetail
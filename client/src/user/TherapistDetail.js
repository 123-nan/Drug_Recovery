import axios from "axios";
import TherapistCard from "../components/TherapistCard";
import {useEffect,useState} from  'react'

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
        <div className="row p-5 m-l-5">
        {listoftherapist!=null &&  listoftherapist.map((list) => <TherapistCard name={list.name} age={list.age} gender={list.gender} experience={list.experience} qualification={list.qualification} image={list.image}/>)}
        </div>
        
     </>
    )
}
export default TherapistDetail
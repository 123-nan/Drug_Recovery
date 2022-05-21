import axios from "axios";

const TherapistDetail =({history}) =>{
  

 

    axios.get(`${process.env.REACT_APP_API}/therapist`).then(function(response){
        console.log(response.data);
    })


    return (
        <h1>dashboard

            
        </h1>
    )
}
export default TherapistDetail
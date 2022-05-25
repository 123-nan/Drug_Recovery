import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../styles/Navbar.css"
import '../styles/Footer.css'


const TherapistCard = ({name,age,gender,experience,image,id}) => {
  
    console.log(name);
    if(gender == 'F')
    gender="Female"
    else
    gender="Male"

    const history = useHistory();

    function handleClick(e){

        history.push(`/therapist-detail/schedule/${id}`);
        
    }

    return (
             <>
            <div className="col-md-4 col-sm-6 col-12 border-secondary gridalign">
            <div className="card text-center my-4 mx-2 p-5 background-cadet " style={{width:'300px'}} >
                <img className="card-img-top" style={{height:'140px'}} src={image}/>
                <div className="card-body " style={{color:'black'}}>
                    <h5 className="card-title text-sans"  >{name}</h5>
                    <p className="card-text text-sans">He/She is one of the best doctor available</p>
                </div>
                <ul className="list-group list-group-flush p-1" >
                    <li className="list-group-item p-1">Age - {age}</li>
                    <li className="list-group-item p-1">{gender}</li>
                    <li className="list-group-item p-1">Experience {experience} Years</li>
                </ul>
                <div className="card-body">
                    <button className="btn border-secondary btnlogin" onClick={handleClick}>Book Slot</button>
                   
                </div>

            </div>
            </div>
           
            </>
       
    )

}
export default TherapistCard;
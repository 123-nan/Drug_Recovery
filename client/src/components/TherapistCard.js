import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



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
            <div className="col-sm-6">
            <div className="card text-center m-5 p-5" style={{width: '18rem'}}>
                <img className="card-img-top" src={image}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">He is the one of the best doctor available</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Age - {age}</li>
                    <li className="list-group-item">{gender}</li>
                    <li className="list-group-item">Experience {experience}</li>
                </ul>
                <div className="card-body">
                    <button className="btn" onClick={handleClick}>Book Slot</button>
                    <Link to="/" className="card-link">Send A message</Link>
                </div>

            </div>
            </div>
           
            </>
       
    )

}
export default TherapistCard;
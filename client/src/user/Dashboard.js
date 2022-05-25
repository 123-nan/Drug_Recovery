import { useSelector,userSelector,useStore } from "react-redux"
import cover from "./images/cover.jpg"
import appcover from "./images/app_cover.jpg"
import recordcover from "./images/recover.jpg"
import '../styles/Dashboard.css'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import '../styles/Footer.css'

const DashBoard =() =>{

    const {user}= useSelector((state) => ({...state}));

    const puid = user.user._id;
    const history = useHistory();


    const medicalRecords =()=>{
         history.push(`/reports/${puid}`);
    }



    return (
       <>
       <div className="dashboard">
        <h1 className=" dash_head  px-5 pt-5 ">Dashboard</h1>
        
        <div className="row pb-2 gridalign">
            <div className="card col-md-4 col-12 m-5 p-2" style={{width:'18rem'}} >
            <img src={cover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to="/therapist-detail" className="btn1 text-sans">Therapists</Link>
            </div>
            </div>
            <div className="card col-md-4 col-12 m-5 p-2"  style={{width:'18rem'}}  >
            <img src={appcover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <Link to="/patient-appointment" className="btn1 text-sans">Appointments</Link>
            </div>
            </div>
            <div className="card col-md-4 col-12 m-5 p-2"  style={{width:'18rem'}}  >
            <img src={recordcover} class="card-img-top" alt="..." sytle={{height:'10'}}/>
            <div className="card-body">
                <button className="btn1 text-sans text-violet" onClick={medicalRecords}>Medical Records</button>
            </div>
            </div>
        </div>
            </div>
            <Footer/>
        </>
    )
}
export default DashBoard
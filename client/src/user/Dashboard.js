import { useSelector,userSelector,useStore } from "react-redux"
import cover from "./images/cover.jpg"
import appcover from "./images/app_cover.jpg"
import recordcover from "./images/recover.jpg"
import "./Dashboard.css"

const DashBoard =() =>{

    const {user}= useSelector((state) => ({...state}));


    return (
       <>
       <div className="dashboard">
        <h1 className=" dash_head mx-5 mb-2 px-5 pt-5 ">Dashboard</h1>
            
        <div className="row mx-5 my-2">
        <div className="card col justify-content-center m-5 p-2" style={{width: '18rem'}}>
            <img src={cover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <a href="/therapist-detail" className="btn1">Therapists</a>
            </div>
            </div>
            <div className="card col m-5 p-2" style={{width: '18rem'}}>
            <img src={appcover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <a href="/" className="btn1">Appointments</a>
            </div>
            </div>
            <div className="card col m-5 p-2" style={{width: '18rem'}}>
            <img src={recordcover} class="card-img-top" alt="..." sytle={{height:'10'}}/>
            <div className="card-body">
                <a href="/" className="btn1">Medical Records</a>
            </div>
            </div>
        </div>
            </div>
        </>
    )
}
export default DashBoard
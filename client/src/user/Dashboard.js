import { useSelector,userSelector,useStore } from "react-redux"
import cover from "./images/cover.jpg"
import "./Dashboard.css"

const DashBoard =() =>{

    const {user}= useSelector((state) => ({...state}));


    return (
       <>
        <h1 className="m-2 px-5">Dashboard</h1>
            {/* {JSON.stringify(user)} */}
        <div className="row m-5">
        <div className="card col-md-4 m-5 p-2" style={{width: '18rem'}}>
            <img src={cover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div className="card col-md-4 m-5 p-2" style={{width: '18rem'}}>
            <img src={cover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div className="card col-md-4 m-5 p-2" style={{width: '18rem'}}>
            <img src={cover} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
            
        </>
    )
}
export default DashBoard
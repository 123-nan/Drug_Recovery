import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Joinroom= () => {

   const params = useParams();

   const {user} = useSelector((state) => ({...state}));
   
   var flag = true;

   if(user.u == "patient")
   flag = false;

   console.log(params.id);
    
    const history = useHistory();
    const handleClick = (e) =>{
         history.push(`/chat-room/${params.id}`);
    }
    
    const handleVideo = (e) => {
          history.push(`/video-room/${params.id}`);
    }

    return (
      <>
      <div className="row" style={{marginTop:'100px'}}>
          <div className="col center join-room-margin">
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hfomI1TzdkzLWP7mRIzV39W3eqnEKJdq6g&usqp=CAU" alt="Card image cap" />
      <div className="card-body">
       <h5 className="card-title">Join Chat Here</h5>
       <p className="card-text">Shy of Video? Chat Here</p>
       <button class="btn btn-primary text-sans" onClick={handleClick}>Join Chat</button>
      </div>
     </div>
     </div>
     <div className="col center join-room-margin">
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top video-logo"  src="https://www.oasisalignment.com/wp-content/uploads/2018/07/video-icon.png" alt="Card image cap" />
      <div className="card-body">
       <h5 className="card-title">Join Video</h5>
       <p className="card-text">Get Detailed Advice on Video Call</p>
       <button class="btn btn-primary text-sans" onClick={handleVideo}>Join Video</button>
      </div>
     </div>
     </div>
    

     </div>
      </>
    )

}


export default Joinroom;
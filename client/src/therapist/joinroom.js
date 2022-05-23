import { useHistory } from "react-router-dom";
const Joinroom= () => {


    
    const history = useHistory();
    const handleClick = (e) =>{
         history.push('/chat-room');
    }

    return (
      <>
      <div className="row">
          <div className="col center">
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/drug-recovery-5c4fe.appspot.com/o/joinchat.png?alt=media&token=71562efb-b2f6-419a-b68b-cdca3747ae5a" alt="Card image cap" />
      <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <button class="btn btn-primary" onClick={handleClick}>Join Chat</button>
      </div>
     </div>
     </div>
     <div className="col center">
      <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/drug-recovery-5c4fe.appspot.com/o/joinchat.png?alt=media&token=71562efb-b2f6-419a-b68b-cdca3747ae5a" alt="Card image cap" />
      <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <button class="btn btn-primary" onClick={handleClick}>Join Video</button>
      </div>
     </div>
     </div>
     </div>
      </>

    )

}


export default Joinroom;
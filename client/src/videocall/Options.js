import { useContext, useState } from "react";
import { SocketContext } from "./socket";
const Option = ({ children }) => {

    const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);

    const [idToCall, setIdToCall] = useState('');

    
    console.log("ME",me);

    return (<div className="video-large-div">

        <div className="video-large-div">
        <input type="text" className="input-video" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="video-large-div">
        <input type="text" className="input-video" placeholder="Paste ID" onChange={(e) => setIdToCall(e.target.value)} />
        </div>


        {
            callAccepted && !callEnded ? (
                <button onClick={leaveCall}> Hang User</ button>
            ) : ( <button className="input-button" onClick={() => callUser(idToCall)}> Call User</button>)
        }


        {children}
    </div>
    )

}


export default Option;













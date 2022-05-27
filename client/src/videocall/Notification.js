import { useContext } from "react";
import { SocketContext } from "./socket";

const Notification = () => {

    const { answerCall, call, callAccepted,me } = useContext(SocketContext);

    console.log(call);
    return (
        <>
          

                <div>

                    <h1>{call.name} is calling</h1>

                    <button onClick={answerCall}>

                        Answer Call

                    </button>

                </div>
            


            
        </>
    )

}


export default Notification;













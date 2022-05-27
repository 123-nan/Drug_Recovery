import { useContext } from "react";
import { SocketContext } from "./socket";


const VideoCall = () => {


    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div className="video-large-div">
            {stream && (
                <>
                <video className="video-div" playsInline ref={myVideo} muted autoPlay />
                </>
            )}
            {
                callAccepted && !callEnded &&(
                    <>
                    <h1>{call.name}</h1>
                    <video className="video-div" playsInline ref={userVideo} muted autoPlay />
                    </>
                )
            }

            <h3>{call.name}</h3>
            
        </div>
    )

}


export default VideoCall;













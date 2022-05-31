import { io } from "socket.io-client";
import { useState,useEffect } from 'react';
const socket = io.connect("http://localhost:8003");


const SocketConn = () => {

    const [mid, setMid] = useState();
    const [uid, setUid] = useState();

    const handleClick = async () => {
        
            await socket.emit("userconnect",{
                 displayName:uid,
                 meeting_id:mid
             })
        

    }
    useEffect(()=>{
        socket.on("inform", (data)=>{
            console.log("Informed",data);
       })

    },[socket])

    
    return (
        <>
            <input type="text" placeholder="Meeting ID" onChange={(e) => setMid(e.target.value)} />
            <input type="text" placeholder="User ID" onChange={(e) => setUid(e.target.value)} />

            <button onClick={handleClick}>Socket Connection</button>
        </>
    )
}

export default SocketConn;
import io from 'socket.io-client'
import '../therapist/chatroom'
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Peer from 'simple-peer';

import { useState, useEffect } from 'react';
const socket = io.connect("http://localhost:8003");
const VideoChatRoom = () => {

    ;
    const { user } = useSelector((state) => ({ ...state }));

    const id = user.user._id;
    const username = user.user.name;
    const room = id;
    const [stream, setStream] = useState(null);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    const joinRoom = () => {

        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            console.log("User with room id", room);
        }
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
            myVideo.current.srcObject = currentStream;
            setStream(currentStream);


        })
    }


    const sendMessage = async () => {

        const peer = new Peer({ initiator: true, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data });
        })
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        })


        socket.on('callaccepted', (signal) => {
            peer.signal(signal);
        })
    }

    const AcceptCall = async () => {
        console.log("answer to call");

        const peer = new Peer({ initiator: false, trickle: false, stream });
        peer.on('signal', (data) => {
            socket.emit('answercall', { signal: data, to: id });
        })
        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        })
       // peer.signal(call.signal);
    }


    useEffect(() => {

        socket.on("receive_message", (data) => {
            console.log("R", data.message);

        })


    }, [socket]);







    return (
        <>

            <video className="video-div" playsInline ref={myVideo} muted autoPlay />
            <video className="video-div" playsInline ref={myVideo} muted autoPlay />

            <div className="row joinroom_row_margin">
                <div className="col center">
                    <div className="card joinroom_uppercard_margin">

                        <div className="card-body overflow-auto text-white background-violet">
                            <div className='input_margin'>
                                <label className='text-black'>NAME:</label>
                                <input className='input_margin_joinroom' type="text" placeholder="John..." value={username} disabled />
                            </div>
                            <div className='input_margin'>
                                <label className='text-black'>UUID:</label>
                                <input className='input_margin_joinroom' type="text" placeholder="ROOM ID..." value={room} disabled />
                            </div>
                            <p className="card-text text-black">Join Chat to start Chatting</p>
                            <button class="btn btn-primary text-black" onClick={joinRoom} > Join Chat</button>
                            <button class="btn btn-primary text-black" onClick={sendMessage} > Join Chat</button>
                            <button class="btn btn-primary text-black" onClick={AcceptCall} > Join Chat</button>
                        </div>


                    </div>
                </div>
            </div>





        </>
    )


}


export default VideoChatRoom;
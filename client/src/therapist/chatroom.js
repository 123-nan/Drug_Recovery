import io from 'socket.io-client'

import { useState, useEffect } from 'react';
const socket = io.connect("http://localhost:8003");
const ChatRoom = () => {

    const username = "Patient";
    const room = "628945726ac8f53531481526";
    const [message, setMessage] = useState("");
    const [messageList,setMessageList] = useState([]);

    const joinRoom = () => {

        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            console.log("User with room id", room);
        }
    }

    const sendMessage = async () => {
        if (message !== "") {
            const messageData = {
                message: message,
                room: room,
                author: username,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }

            await socket.emit("send_message", messageData);
        }
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data.message);
            setMessageList((list) => [...list,data.message]);
            
        })
    }, [socket]);


    return (
        <>

            <div className="row">
                <div className="col center">
                    <div className="card" style={{ width: '18rem' }}>

                        <div className="card-body overflow-auto">
                            <input type="text" placeholder="John..." value={username} disabled />
                            <input type="text" placeholder="ROOM ID..." value={room} disabled />
                            <p className="card-text">Join Chat to start Chatting</p>
                            <button class="btn btn-primary" onClick={joinRoom} > Join Chat</button>
                        </div>


                    </div>
                </div>
            </div>

            <div className="row m-1">
                <div className="col center">
                    <div className="card border border-success" style={{ width: '18rem' }}>
                        <div className="card-body" style={{ height: 'auto' }}>
                            {messageList.map((msg) => {return <h4>{msg }</h4>})}
                         </div>   
                        <input type="text" placeholder="message" onChange={(e) => { setMessage(e.target.value) }} />
                        <button class="btn btn-primary" onClick={sendMessage} > Send Message</button>
                        </div>
                    
                </div>
            </div>



        </>
    )

}



export default ChatRoom;
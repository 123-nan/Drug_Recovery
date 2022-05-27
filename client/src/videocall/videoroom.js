
import '../therapist/chatroom'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useState, useEffect } from 'react';



const VideoRoom = () =>{


    const id = useParams().id;
    const { user } = useSelector((state) => ({ ...state }));
    console.log(user);
    const username = user.user.name;
    const room = id;
    const history  = useHistory();

    const joinRoom = () =>{

        history.push(`/video-call/${room}`);
        
    }

    return(

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
                            <p className="card-text text-black">Join Video to start Meeting</p>
                            <button class="btn btn-primary text-black" onClick={joinRoom} > Join Video</button>
                        </div>


                    </div>
                </div>
            </div>
    )
}

export default VideoRoom
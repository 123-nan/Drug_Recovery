import '../styles/Profile.css'
import { useState } from 'react';
const Profile = () => {

    const [acc,setAcc] = useState(true);
    const [pass,setPass] = useState(false);
    


    const handleAccount = () =>{
           setAcc(true)
           setPass(false)
           console.log("acc")
    }
    const handlePassword = () =>{
           setPass(true)
           setAcc(false)
           console.log("pass")

    }   
    console.log("a");
     return (
        <div className='rowa'>

            <div className='col-4a'>

                <div className='col-12a text-center border-bottom'>
                <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className='rounded-circle profile-imagea p-1 m-5' />
                </div>

                <div className='col-12a p-3  text-center' >
                <h5 className='right-button' onClick={handleAccount}>Account</h5>
                </div>
                
                <div className='col-12a p-3  text-center' >
                <h5 onClick={handlePassword}>Password</h5>
                </div>
                <div className='col-12a p-3  text-center' >
                <h5>Notification</h5>
                </div>
                <div className='col-12a p-3 text-center' >
                <h5>Privacy</h5>
                </div>
                <div className='col-12a p-3 text-center' >
                <h5>Setting</h5>
                </div>


            </div>
            <div className='col-8a right-col-12a  text-white'>

                { acc && <div className='col-12a text-center p-5'>
                    <h4>Account Setting</h4>

                    <div className='col-12a text-center p-3'>
                    <label>First Name : </label>
                    <input type="text" placeholder='Your Name' />
                    </div>

                    <div className='col-12a text-center p-3'>
                    <label>Last Name : </label>
                    <input type="text" placeholder='Last Name' />
                    </div>


                    <div className='col-12a  text-center p-3'>
                    <label>Your Email : </label>
                    <input type="text" placeholder='Your Email' />
                    </div>


                    <div className='col-12a text-center p-3'>
                    <label>Your Company : </label>
                    <input type="text" placeholder='Your Company' />
                    </div>


                    <div className='col-12a text-center p-3'>
                    <label>Blood Group : </label>
                    <input type="text" placeholder='lood Group' />
                    </div>


                    <div className='col-12a text-center p-3'>
                    <label>Designation</label>
                    <input type="text" placeholder='Designation' />
                    </div>

                    <button disabled="" class="loginbutton">Update</button>

                </div>}

                {pass && <div className='col-12a text-center p-5'>
                    <h4>Password Setting</h4>

                    <div className='col-12a text-center p-3'>
                    <label>Previous Password : </label>
                    <input type="text" placeholder='previous password' />
                    </div>

                    <div className='col-12a text-center p-3'>
                    <label>New Password : </label>
                    <input type="text" placeholder='New Password' />
                    </div>


                    <div className='col-12a  text-center p-3'>
                    <label>Repeat New Password : </label>
                    <input type="text" placeholder='Repeat New Password' />
                    </div>


                    

                    <button disabled="" class="loginbutton">Update</button>

                </div>}

                

            </div>


        </div>
    )
}

export default Profile;
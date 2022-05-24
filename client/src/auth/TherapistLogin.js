import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { therapistlogin } from '../actions/auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';

const TherapistLogin =({history}) =>{

    const dispatch = useDispatch();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
 
 
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("SEND DATA",{email,password});
        try{
            let res = await therapistlogin({email,password});
            console.log('LOGIN RESPONSE',res);
            if(res.data){
                console.log("SAVE USER RES IN REDUX AND LOCAL STORAGE");
                
            }
            console.log(res.data);
            window.localStorage.setItem('auth',JSON.stringify(res.data));
            dispatch({
                type:"LOGGED_IN_USER",
                payload:res.data,
            })
    

            toast.success("Logged In");
            history.push("/");
        }
        catch(err)
        {
            console.log(err);
            toast.error(err.response.data);
        }
    }

    return (
        <>
        <div className="container-fluid h1 p-5 text-center background-violet">
         <h1 className='text-sans text-white'>Therapist Login</h1>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-3'>
                    <LoginForm 
                    handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword}
                    />
               
                </div> 
            </div>
        </div>
        <Footer/>
        </>
    )

}

export default TherapistLogin;
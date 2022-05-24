import {useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from '../components/RegisterForm';
import { register } from '../actions/auth';
import Footer from '../components/Footer';

const Register =({history}) =>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
   

    console.log(process.env.REACT_APP_API);

    const handleSubmit = async (e) => {
       e.preventDefault();
      
        try{
          const res =  await register({
              name,email,password,age,gender
          });
       
       console.log("REGISTER USER ==>",res);
       toast("Regsister Succesffully");
       history.push("/login");
    }
       catch(error){
           console.log(error);
           toast(error.response.data);
       }
    };

  

   
    return (
        <>
        <div className="container-fluid h1 p-5 text-center background-violet">
           <h1 className='text-white text-sans'>Register</h1>
        </div>

       
        <div className='container'>
         <div className='row'>
             <div className='col-md-8 offset-md-3'>
                 <RegisterForm 
                  handleSubmit={handleSubmit}
                  name={name}
                  setName={setName}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  age={age}
                  setAge={setAge}
                  gender={gender}
                  setGender={setGender}
                 />
             </div>
         </div>
        </div>
        <Footer/>
        </>
    )

}

export default Register;
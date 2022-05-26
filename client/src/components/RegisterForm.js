import '../styles/Register.css'

const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword,age,setAge,gender,setGender}) => (

<>

<div className="registerform">
   <form onSubmit={handleSubmit} className="register-form">
       <h3>Register</h3>

       <label for='name'>Your name</label>
        <input className='reginput' type="text" placeholder="Enter Name" id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}/>

       <label for="regemail">Email</label>
       <input className='reginput' type="text" placeholder="Enter Email" id="regemail"
       value={email}
       onChange={(e) => setEmail(e.target.value)}/>

       <label for="regpassword">Password</label>
       <input className='reginput' type="password" placeholder="Password" id="regpassword"
       value={password}
       onChange={(e) => setPassword(e.target.value)}/>

        <label for='age'>Age</label>
        <input className='reginput' type="text" placeholder="Enter Age" id='age'
        value={age}
        onChange={(e) => setAge(e.target.value)}/>

        <label for='gender'>Gender</label>
        
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked
        value={'m'}
        onChange={(e) => setGender(e.target.value)}/>
        <label class="form-check-label mb-3  text-sans text-violet" for="flexRadioDefault1">
            Male
        </label>
        </div>

        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
        value={'f'}
        onChange={(e) => setGender(e.target.value)}/>
        <label class="form-check-label mb-3  text-sans text-violet" for="flexRadioDefault2">
            Female
        </label>
        </div>

       <button disabled={!email || !password ||!name || !age ||!gender} className="registerbutton">Register</button>

   </form>
</div>

</>
)


export default RegisterForm;



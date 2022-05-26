import '../styles/Login.css'


const LoginForm= ({handleSubmit,email,setEmail,password,setPassword,user}) => (


<>
<div className="loginform">
   <form onSubmit={handleSubmit} className="login-form">
       <h3>{user=="patient"?"Login Here":"Therapist Login"}</h3>
       <label for="email">Email</label>
       <input type="text" placeholder="Enter Email" id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}/>

       <label for="password">Password</label>
       <input type="password" placeholder="Password" id="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
       <button disabled={!email || !password} className="loginbutton">Submit</button>

   </form>
</div>

</>

)


export default LoginForm;
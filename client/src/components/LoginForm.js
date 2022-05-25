import '../styles/Login.css'


const LoginForm= ({handleSubmit,email,setEmail,password,setPassword}) => (
<>
<div className="loginform">
    <div class="backgroundlogin">
       <div class="shape"></div>
       <div class="shape"></div>
   </div>
   <form onSubmit={handleSubmit} className="login-form">
       <h3>Login Here</h3>
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
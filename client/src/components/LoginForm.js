
const LoginForm= ({handleSubmit,email,setEmail,password,setPassword}) => (<form onSubmit={handleSubmit} className="m-5">
    

<div className='form-group mb-3'>
    <label className='form-label mb-3 text-sans text-violet'>Email</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}/>
</div>

<div className='form-group mb-3'>
    <label className='form-label mb-3 text-sans text-violet'>Password</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}/>
</div>

<button disabled={!email || !password} className='btn btn-primary' style={{background:'darkblue'}}>Submit</button>

</form>)


export default LoginForm;
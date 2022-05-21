
const LoginForm= ({handleSubmit,email,setEmail,password,setPassword}) => (<form onSubmit={handleSubmit} className="mt-3">
    

<div className='form-group mb-3'>
    <label className='form-label mb-3'>Email</label>
    <input type="text" className="form-control"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}/>
</div>

<div className='form-group mb-3'>
    <label className='form-label mb-3'>password</label>
    <input type="text" className="form-control"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}/>
</div>

<button disabled={!email || !password} className='btn btn-primary'>Submit</button>

</form>)


export default LoginForm;
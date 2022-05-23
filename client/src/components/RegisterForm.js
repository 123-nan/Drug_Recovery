
const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword,age,setAge,gender,setGender}) => (<form onSubmit={handleSubmit} className="m-5">
    
<div className='form-group mb-3'>
    <label className='form-label mb-3'>Your name</label>
    <input type="text" className="form-control"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}/>
</div>
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
<div className='form-group mb-3'>
    <label className='form-label mb-3'>password</label>
    <input type="text" className="form-control"
    placeholder="Enter Age"
    value={age}
    onChange={(e) => setAge(e.target.value)}/>
</div>
<div className='form-group mb-3'>
    <label className='form-label mb-3'>password</label>
    <input type="text" className="form-control"
    placeholder="Enter Gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}/>
</div>

<button className='btn btn-primary'>Submit</button>

</form>)


export default RegisterForm;
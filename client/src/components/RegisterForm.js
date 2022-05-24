
const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword,age,setAge,gender,setGender}) => (<form onSubmit={handleSubmit} className="m-5">
    
<div className='form-group mb-3'>
    <label className='form-label mb-3 text-sans text-violet'>Your name</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}/>
</div>
<div className='form-group mb-3'>
    <label className='form-label mb-3 text-sans text-violet'>Email</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}/>
</div>

<div className='form-group mb-3'>
    <label className='form-label mb-3 tetx-sans text-violet'>Password</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}/>
</div>
<div className='form-group mb-3'>
    <label className='form-label mb-3 text-sans text-violet'>Age</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Age"
    value={age}
    onChange={(e) => setAge(e.target.value)}/>
</div>
<div className='form-group mb-3'>
    <label className='form-label mb-3  text-sans text-violet'>Gender</label>
    <input type="text" className="form-control border border-primary text-sans"
    placeholder="Enter Gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}/>
</div>

<button className='btn btn-primary text-sans' style={{background:'darkblue'}}>Submit</button>

</form>)


export default RegisterForm;
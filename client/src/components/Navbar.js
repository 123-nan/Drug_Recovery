import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Navbar(props) {

  const {user} = useSelector((state) => ({...state}));
  


 const dispatch = useDispatch();
  function logout(){
    dispatch({
      type:"LOGOUT",
      payload:null,
    })
    window.localStorage.removeItem("auth");
   // history.push("/login");
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <a className="navbar-brand ml-5" href="/">{props.title}</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 px-2">

        <li className="nav-item ">
          <a className="nav-link active color:white" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">Therapists</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        
        <li className="nav-item ">
          <a className="nav-link" href="/">Report</a>
        </li>

      {  user && user.token && <li className="nav-item ">
          <button className="btn btn-danger" onClick={logout}>Log Out</button>
        </li>}
        
      </ul>

      <ul className="nav justify-content-end">
        <li className="nav-item nav-link" style={{color: "brown"}}>Login</li>
               
        <li className="nav-item nav-link" style={{color: "brown"}}>SignUp</li>
              
                 {/* {user&& <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                    <Link to='/profile'>
                        <li className="dropdown-item">My Profile</li>
                    </Link>
                    <Link to='/dailyintake'>
                        <li className="dropdown-item">Report</li>
                    </Link>
                        <li className="dropdown-item" onClick={logOutHandler}>LogOut</li>
                    </ul>
                    </div>} */}

        </ul>
      
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes={
    title: PropTypes.string
}

Navbar.defaultProps={
    title: "Set title here"
}
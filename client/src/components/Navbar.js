import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
import './Navbar.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import logo from "./images/logo.jpg"

export default function Navbar(props) {

  const {user} = useSelector((state) => ({...state}));
  
 const history = useHistory();

 const dispatch = useDispatch();
  function logout(){
    dispatch({
      type:"LOGOUT",
      payload:null,
    })
    window.localStorage.removeItem("auth");
    history.push("/login");
  }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <a className="navbar-brand ml-5" href="/">
    <img src={logo} alt="" width="50" height="50" class="d-inline-block align-text-top"/>
      {props.title}</a>
    
      {/* {  user && user.token && <li className="nav-item ">
          <button className="btn btn-danger" onClick={logout}>Log Out</button>
        </li>} */}
        

      <ul className="nav  justify-content-end">

        {!user&& <Link to='/login' className="anchors">
          <li className="nav-item nav-link" >Login</li>
          </Link>}
               
        {!user&& <Link to='/register' className="anchors">
            <li className="nav-item nav-link" >SignUp</li>
          </Link>}
              
          {user&& user.token &&  <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               Profile
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
            <Link to='/dashboard'>
                <li className="dropdown-item">Dashboard</li>
            </Link>
            <Link to='/'>
                <li className="dropdown-item">Report</li>
            </Link>
             <li className="dropdown-item" onClick={logout}>LogOut</li>
            </ul>
       </div>}

        </ul>
      
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
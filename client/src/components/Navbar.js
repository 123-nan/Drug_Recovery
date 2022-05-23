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
  // console.log(user.user.name);
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <a className="navbar-brand ml-5" href="/">
    <img src={logo} alt="" width="50" height="50" class="d-inline-block align-text-top"/>
      {props.title}</a>    

      <ul className="nav  justify-content-end">

        {!user&& <Link to='/login' className="anchors">
          <button type="button " class="btn btn-primary">Login</button>
          </Link>}
               
        {!user&& <Link to='/register' className="anchors">
        <button type="button nav-item" class="btn btn-primary mx-3">SignUp</button>
          </Link>}

          {!user && <li className="nav-item nav-link">Are you a Therapist? Login Here -></li>}

          {!user&& <Link to='/therapist-login' className="anchors">
            <li className="nav-item nav-link" >Login</li>
          </Link>}
              
          {user && user.token &&  <div class="dropdown">
            <button class="profile_btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               {user.user.name}
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
            <Link to='/dashboard'>
                <li className="dropdown-item dropitem">Dashboard</li>
            </Link>
            <Link to='/therdashboard'>
                <li className="dropdown-item dropitem"> Therapist Dashboard</li>
            </Link>
             <li className="dropdown-item dropitem" onClick={logout}>LogOut</li>
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
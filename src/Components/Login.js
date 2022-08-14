import React from 'react';
import "../utils/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
   <>
   
   <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    <Link to="/main">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </Link>
    <a href="#"  style={{marginLeft:"15px"}} >
      <span></span>
      <span></span>
      <span></span>
      <span ></span>
      Cancel
    </a>
  </form>
</div>
   
   
   </>
  )
}

export default Login
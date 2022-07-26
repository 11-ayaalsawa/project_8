
import React, {useState} from 'react'
import './Login.css'

import {useSelector,useDispatch } from 'react-redux';
import {login} from "../actions/index";



function Login() {
    const dispatch=useDispatch();
    const admin=useSelector(state=>state.login.admin);
    const error=useSelector(state=>state.login.error);

        if(admin != ''){
            window.location.href = "/Home";
        }
    
      
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

const LoginFun=(e)=>{
    e.preventDefault();
    dispatch(login(email,password))
}
  return (
    <>



<div class="form-wrapper">
  
  <h1>Login</h1>
  <form>
    <div class="form-item">
      <label for="email"></label>
      <input type="email" name="email" required="required" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}></input>
    </div>
    <div class="form-item">
      <label for="password"></label>
      <input type="password" name="password" required="required" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <div id='Error-div'>
            <span>{error}</span>
        </div>
    <div class="button-panel">
      <input type="submit" class="button" title="LogIn" value="Login" onClick={(e)=> LoginFun(e)}></input>
    </div>
  </form>
  <div class="form-footer">
  </div>
</div>
</>
  )
}

export default Login
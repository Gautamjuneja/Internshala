import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className='loginCont'>
        <div className="inLog">
            <h2>Signin to your PopX account</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="inp">
                <label htmlFor="" className='labl'>Email Address</label>
                <input type="text" name="email" id="" placeholder='Enter email address'/>
                <label htmlFor="" className='labl'>Password</label>

                <input type='text' name='password' placeholder='Enter password' />
                <button className='loginButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login;
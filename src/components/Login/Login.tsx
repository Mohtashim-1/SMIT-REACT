import React from 'react'
import InputControl from '../InputControl/InputControl'
import './Login.css'
import Registration from '../Registration/Registration';
import Signup from '../../Signup';
import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className="main-container">
    <div className='container'>
      <div className='innerBox'>
        <h1 className='heading'>Login</h1>
        <InputControl label="Email" placeholder="Enter E-mail" />
        <InputControl label="password" placeholder="Enter Password" />
        <button>Login</button>
        <p>Already have an Accound?{""}
          <span className='span-signup'>
            <Link to="../../Signup.tsx" className='span-signup' >Sign Up</Link>
            {/* <a href="../SignUp/Signup.tsx">Sign Up</a> */}
          </span>
        </p>
      </div>
    </div>
    </div>
    
  )
}

export default Login;
import React, { useState } from 'react';
import { 
    useSignInWithEmailAndPassword,
     useSignInWithFacebook,
      useSignInWithGithub,
       useSignInWithGoogle
     } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
   /*  const emailRef = useRef('')
    const passwordRef = useRef('') */
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle] = useSignInWithGoogle(auth);
      const [signInWithGithub] = useSignInWithGithub(auth);
      const [signInWithFacebook] = useSignInWithFacebook(auth);
      
      if(user){
        navigate(from,{replace:true})
      }
      const handleSubmit=e=>{
          e.preventDefault();
          /* const setemail = email.target.value;
          const setpassword= password.target.value; */
          signInWithEmailAndPassword(email,password)
      }
      const alterReg =()=>{
          navigate('/register')
      }
    
    return (
        <div className='login-box'>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input onBlur={handleEmail}
                     type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group my-4">
                    <label>Password</label>
                    <input onBlur={handlePassword}  
                    type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div>
                <button type="submit" className="btn btn-dark btn-lg ">Login</button>
                </div>
                <p className="forgot-password text-right">
                    Are you new here <span onClick={alterReg} className='lnk-btn' >Register?</span>
                </p>
                <hr />
                <div>
                    <button onClick={()=>signInWithGoogle(email,password)}
                     className='btn btn-success btn-lg'>Google</button>
                    <button onClick={()=>signInWithFacebook(email,password)}
                     className='btn btn-success btn-lg mx-2'>Facebook</button>
                    <button onClick={()=>signInWithGithub(email,password)}
                     className='btn btn-success btn-lg'>Github</button>
                </div>
                </form>
                
            
        </div>
    );
};

export default Login;
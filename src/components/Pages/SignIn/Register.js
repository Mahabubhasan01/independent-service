import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SignIn.css'

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    

    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle,user1] = useSignInWithGoogle(auth);
      const [signInWithGithub,user2] = useSignInWithGithub(auth);
      const [signInWithFacebook,user3] = useSignInWithFacebook(auth);
        const email = emailRef.current.value;
        const password= passwordRef.current.value;
      const handleSubmit=e=>{
          e.preventDefault();
          
          createUserWithEmailAndPassword(email,password)
      }
      console.log(handleSubmit)
      const alterLog=()=>{
          navigate('/login')
      }
      if(user ||user1 || user2 || user3 ){
          navigate('/home')
      }

    return (
        <div className='login-box'>
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group my-4">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group my-4">
                    <label>Password</label>
                    <input ref={passwordRef}  type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div>
                <button type="submit" className="btn btn-dark btn-lg ">Register</button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <span onClick={alterLog} className='lnk-btn' >log in?</span>
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

export default Register;
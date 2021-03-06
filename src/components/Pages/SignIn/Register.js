import {
  useCreateUserWithEmailAndPassword,  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import Loading from "../../Shared/Loading";

import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading,error] =useCreateUserWithEmailAndPassword(auth, 
    { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  if (user ) {
    
  } 

  let errorMsg;
  const handleSubmit = (event) => {
    event.preventDefault();
    if(error){
      
      errorMsg= (<p>Your email and password do not match</p>)
    }
    createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName: name });
    navigate("/home");
  };

  const alterLog = () => {
    navigate("/login");
  };
   
  if (updating || loading) {
    return <Loading></Loading>;
  }
  

  return (
    <div className="login-box">
      <div className="custom-login">
        <form onSubmit={handleSubmit}>
          {errorMsg}
          <h3 className="text-dark text-center"> Please Register Here</h3>
          <div className="form-group">
            <label>First name</label>
            <input
              onBlur={handleName}
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group my-4">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group my-4">
            <label>Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div>
            <button type="submit" className="btn btn-dark btn-lg ">
              Register
            </button>
            
          </div>
          <p className="forgot-password text-right">
            Already registered 
            <span onClick={alterLog} className="lnk-btn ms-2">
              log in?
            </span>
          </p>
          <hr />
          <div>
            <button
              onClick={() => signInWithGoogle(email, password)}
              className="btn btn-dark btn-lg"
            >
              Google
            </button>
            <button
              onClick={() => signInWithFacebook(email, password)}
              className="btn btn-dark btn-lg mx-2"
            >
              Facebook
            </button>
            <button
              onClick={() => signInWithGithub(email, password)}
              className="btn btn-dark btn-lg"
            >
              Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

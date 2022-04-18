import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
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
    const [name,setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user,loading] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3] = useSignInWithFacebook(auth);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName: name });
    navigate("/home");
  };

  const alterLog = () => {
    navigate("/login");
  };
  if(updating || loading){
      return <Loading></Loading>
  }
  if (user || user1 || user2 || user3) {
    navigate("/home");
  }

  return (
    <div className="login-box">
      <div className="custom-login">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>
          <div className="form-group">
            <label>First name</label>
            <input onBlur={handleName}
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
            Already registered{" "}
            <span onClick={alterLog} className="lnk-btn">
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

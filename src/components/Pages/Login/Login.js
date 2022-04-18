import { async } from "@firebase/util";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";

const Login = () => {
  /*  const emailRef = useRef('')
    const passwordRef = useRef('') */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3] = useSignInWithFacebook(auth);
  if (user || user1 || user2 || user3) {
    navigate("/home");
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please your right email address");
    }
  };
  const alterReg = () => {
    navigate("/register");
  };

  return (
    <div className="login-box">
      <div className="custom-login">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Login</h3>
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
              Login
            </button>
          </div>
          <span
            className="mt-3 text-primary"
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
          >
            {" "}
            <p onClick={resetPassword}>Forget Password</p>
          </span>
          <p className="forgot-password text-right">
            Are you new here{" "}
            <span onClick={alterReg} className="lnk-btn">
              Register?
            </span>
          </p>
          <hr />
          <div>
            <button
              onClick={() => signInWithGoogle(email, password)}
              className="btn btn-success btn-dark"
            >
              Google
            </button>
            <button
              onClick={() => signInWithFacebook(email, password)}
              className="btn btn-success btn-dark mx-2"
            >
              Facebook
            </button>
            <button
              onClick={() => signInWithGithub(email, password)}
              className="btn btn-success btn-dark"
            >
              Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

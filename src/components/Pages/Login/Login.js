import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-box'>
            <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group my-4">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div>
                <button type="submit" className="btn btn-dark btn-lg ">Register</button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <Link className='lnk' to={<Login></Login>}>log in?</Link>
                </p>
                <hr />
                <div>
                    <button className='btn btn-success btn-lg'>Google</button>
                    <button className='btn btn-success btn-lg mx-2'>Facebook</button>
                    <button className='btn btn-success btn-lg'>Github</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
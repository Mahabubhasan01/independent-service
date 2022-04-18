import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import logo from './indigo.png'

const CustomNavbar = () => {
  return (
   <div className="top">
      <div className=" top-bar ">
      <nav className="navbar navbar-black top-bar  d-flex justify-content-between align-items-center">
        <span className="logo"><Link className="navbar-brand" to="home">
              <img src={logo} alt="" /> || PhotoGrapher
            </Link> </span>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item text-black">
                  <Link
                    className="nav-link active "
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="services">
                    Services
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="blogs">
                    Blogs
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="checkout">
                    Checkout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
      
    </div>
   </div>
  );
};

export default CustomNavbar;

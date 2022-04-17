import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import img from '../../../alia.jpg'

const CustomNavbar = () => {
  return (
   <div className="top">
      <div className=" top-bar ">
      <nav className="navbar navbar-black top-bar mb-4  d-flex justify-content-between">
        <span><Link className="navbar-brand" to="home">
              Indigo || PhotoGrapher
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
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
      <div className="top-two">
        <div className="container top-one">
          <div>
            <h1>“There is one thing  the <br /> photograph  must  contain,<br /> the humanity of the moment.”</h1>
          </div>
          <div>
            <p>This is for simple</p>
            <button className="btn-top">Check out</button>
          </div>
          </div>
        <div className="top-right">
          <div>
          <img className="img-fluid" src={img} alt="" />
          <h3>Fashion</h3>
          </div>
          <div>
          <img className="img-fluid" src={img} alt="" />
          <h3>Fashion</h3>
          </div>
          <div>
          <img className="img-fluid" src={img} alt="" />
          <h3>Fashion</h3>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CustomNavbar;

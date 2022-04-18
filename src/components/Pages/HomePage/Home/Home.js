import React from "react";
import useCustomHook from "../../../Shared/Customhook";
import Footer from "../../Footer/Footer";
import Package from "./Package";
import img from "../../../../alia.jpg";
import './Home.css'

const Home = () => {
  let [packages] = useCustomHook();
  const threeServices = packages.slice(0,3);
  return (
    <div className="top">
      <div className="top-two">
        <div className="container top-one">
          <div className="mt-5">
            <h1>
              “There is one thing the <br /> photograph must contain,
              <br /> the humanity of the moment.”
            </h1>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus cupiditate ex omnis aut deleniti tempora minima quas hic odit.</p>
            <button className="btn-top">Check out</button>
          </div>
        </div>
        <div className="top-right">
          <div>
            <img className="img-fluid" src="https://i.ibb.co/PmT3cRd/Family-Day-1-300x300.jpg" alt="" />
            <div className="d-flex justify-content-center align-items-center mt-3 mr-5"
            style={{marginLeft:'10px'}}>
              <p style={{height:'2px',width:'25px'}} className="bg-info" ></p><h5 className="ms-2 mb-3">  Family</h5>
              </div>
          </div>
          <div>
            <img className="img-fluid" src="https://i.ibb.co/PYLbrk3/5a6721e5d049aad4e9356387b69fbdc6.jpg" alt="" />
            <div className="d-flex justify-content-center align-items-center mt-3 mr-5">
              <p style={{height:'2px',width:'25px'}} className="bg-info" ></p><h5 className="ms-2 mb-3">Model</h5>
              </div>
          </div>
          <div>
            <img className="img-fluid" src={img} alt="" />
            <div className="d-flex justify-content-center align-items-center mt-3 mr-5">
              <p style={{height:'2px',width:'25px'}} className="bg-info" ></p><h5 className="ms-2 mb-3">  Weeding</h5>
              </div>
          </div>
        </div>
      </div>
      <div className="top-bar">
        <div className="row container mx-auto ">
          {threeServices.map((p) => (
            <Package key={p.id} p={p}></Package>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

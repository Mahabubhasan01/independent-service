import React from "react";
import useCustomHook from "../../../Shared/Customhook";
import CheckOut from "../../CheckOut/CheckOut";
import Footer from "../../Footer/Footer";
import Package from "./Package";
import img from "../../../../alia.jpg";
import './Home.css'

const Home = () => {
  let [packages, setPackages] = useCustomHook();
  const threeServices = packages.slice(0,3);
  return (
    <div className="top">
      <div className="top-two">
        <div className="container top-one">
          <div>
            <h1>
              “There is one thing the <br /> photograph must contain,
              <br /> the humanity of the moment.”
            </h1>
          </div>
          <div>
            <p>This is for simple</p>
            <button className="btn-top">Check out</button>
          </div>
        </div>
        <div className="top-right">
          <div>
            <img className="img-fluid" src="https://i.ibb.co/PmT3cRd/Family-Day-1-300x300.jpg" alt="" />
            <h3> Family</h3>
          </div>
          <div>
            <img className="img-fluid" src="https://i.ibb.co/PYLbrk3/5a6721e5d049aad4e9356387b69fbdc6.jpg" alt="" />
            <h3>Model</h3>
          </div>
          <div>
            <img className="img-fluid" src={img} alt="" />
            <h3>Weeding</h3>
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

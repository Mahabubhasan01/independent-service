import React from "react";
import useCustomHook from "../../../Shared/Customhook";
import CheckOut from "../../CheckOut/CheckOut";
import Footer from "../../Footer/Footer";
import Package from "./Package";
import img from "../../../../alia.jpg";

const Home = () => {
  let [packages, setPackages] = useCustomHook();
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
      <div className="top-bar">
        <div className="row container mx-auto ">
          {packages.map((p) => (
            <Package key={p.id} p={p}></Package>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

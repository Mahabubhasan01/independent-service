import React from "react";
import useCustomHook from "../../../Shared/Customhook";
import Footer from "../../Footer/Footer";
import Package from "./Package";
import img from "../../../../alia.jpg";
import "./Home.css";

const Home = () => {
  let [packages] = useCustomHook();
  const threeServices = packages.slice(0, 3);
  return (
    <div className="top">
      <div className="top-two d-md-flex">
        <div className="container top-one">
          <div className="mt-5 left-site">
            <h1>
              “There is one thing the <br /> photograph must contain,
              <br /> the humanity of the moment.”
            </h1>
            <p>
              “To me, photography is an art of observation. It’s about finding
              something interesting in an ordinary place… I’ve found it has
              little to do with the things you see and everything to do with the
              way you see them.”
            </p>
            <button className="btn-top mt-5 ms-5 ">Check out</button>
          </div>
        </div>
        <div className="top-right">
          <div>
            <img
              className="img-fluid"
              src="https://i.ibb.co/PmT3cRd/Family-Day-1-300x300.jpg"
              alt=""
            />
            <div
              className="d-flex justify-content-center align-items-center mx-auto mt-3 "
              style={{ marginLeft: "10px" }}
            >
              <p
                style={{ height: "2px", width: "25px" }}
                className="bg-info"
              ></p>
              <h5 className="ms-2 mb-3"> Family</h5>
            </div>
          </div>
          <div>
            <img
              className="img-fluid"
              src="https://i.ibb.co/PYLbrk3/5a6721e5d049aad4e9356387b69fbdc6.jpg"
              alt=""
            />
            <div className="d-flex justify-content-center align-items-center mt-3 mx-auto">
              <p
                style={{ height: "2px", width: "25px" }}
                className="bg-info"
              ></p>
              <h5 className="ms-2 mb-3">Model</h5>
            </div>
          </div>
          <div>
            <img className="img-fluid" src={img} alt="" />
            <div className="d-flex justify-content-center align-items-center mt-3 mx-atuo">
              <p
                style={{ height: "2px", width: "25px" }}
                className="bg-info"
              ></p>
              <h5 className="ms-2 mb-3"> Weeding</h5>
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

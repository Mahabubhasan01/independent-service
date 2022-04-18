import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="d-flex " style={{ margin: "100px" }}>
      <div className="card text-white  mb-3 " style={{ maxWidth: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            Difference between authorization and authentication
          </h5>
          <p className="card-text text-dark">
            Authentication is the system that takes data from the user for
            example any requirement of document which need to access. After
            share date or store then this data checking verifying and until
            final result submission for work authorization
          </p>
        </div>
      </div>
      <div
        className="card text-dark mb-3 mx-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            What other services does firebase provide other than
            authentication
          </h5>
          <p className="card-text">
            There are many way auth your problem like auth0 okta and so more.
            And you can also use this auth provider mostly in your react
            framework
          </p>
        </div>
      </div>
      <div className="card text-dark  mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            What other services does firebase provide other than authentication
          </h5>
          <p className="card-text">
            Firebase provide any other authentication like unity for game auth,
            database system,remote config ,firebase ml,cloud function cloud
            messaging,backend ,hosting,ios,android and so on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

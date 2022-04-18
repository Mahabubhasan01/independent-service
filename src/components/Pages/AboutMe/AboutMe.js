import React from "react";
import name from'./Mahabub.jpg'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="about-box">
          <div className="about" >
            <img className="img-fluid" src={name} alt="..." />
            
              <h5 >Mahabub Hasan</h5>
              <p >
               Hey I am Mahabub . I am student and live in south state of district Noakhali. I like to play with program of codding like any language.
               I am so curious need to know new thing in the world.
               Stay foolish stay hungry called steb Jobs
              </p>
            </div>
          </div>

  );
};

export default AboutMe;

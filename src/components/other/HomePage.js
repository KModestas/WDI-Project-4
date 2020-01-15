import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <video src="../assets/concert.mov" autoPlay="true" loop="true" />
      <div className="overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="aboutText col-sm-12 col-md-12 col-lg-8">
              <p>
                Euphoria is the ultimate web app for tracking upcoming gigs in
                London. Are you ready?
              </p>
              <Link to="/gigs" className="proceed">
                Let's go!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

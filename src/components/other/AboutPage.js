import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage =()=> {
  return(
    <div>
      <video src="../assets/concert.mov" autoPlay="true" loop="true" />
      <div className="overlay">
        <div className="aboutText">
          <p>Euphoria  is the ultimate webpage for keeping track of your favourite, most anticipated upcoming gigs in London. Register an account, search for a gig and click the track button. Are you ready?</p>
          <Link to="/" className="proceed">Hell Yeah!</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

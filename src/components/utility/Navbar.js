import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  // preventDefault tops refresh. Also ends the session by logging user out and then redirecting them to the homepage. This function is called when you click on the logout button down below.
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  // return different navbar items based on wether or not the user is authenticted (logged in)
  return(
    <nav>
      { <h1 className="darkBackground"><Link to="/">EUPHORIA</Link></h1> }
      { <h2 className="darkBackground"> Live Music In London </h2>}
      { !Auth.isAuthenticated() && <Link className="navLinks darkBackground" to="/login">Login</Link>}
      {' '}
      { !Auth.isAuthenticated() && <Link className="navLinks darkBackground" to="/register">Register</Link> }
      {' '}
      { Auth.isAuthenticated() && <Link className="navLinks darkBackground" to="/profile"> Profile </Link> }
      {' '}
      { Auth.isAuthenticated() && <a className="navLinks darkBackground" href="#" onClick={logout}>Logout</a> }
    </nav>
  );
};



export default withRouter(Navbar);

// withRouter is a HOC that is returning my Navbar component and consequently giving it access to match, history.

// history is an array that logs all of your passed routes

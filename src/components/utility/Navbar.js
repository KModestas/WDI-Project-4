import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav>
      {  <h1 className="darkBackground"><Link to="/">EUPHORIA</Link></h1> }
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

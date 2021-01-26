import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Navbar.css';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render(){
    return (
      <div className="Navbar">
        <div className="container-fuid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold" > Conference</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
import React from 'react';
import '../components/styles/Navbar.css';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render(){
    return (
      <div className="Navbar">
        <div className="container-fuid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold" >Conference</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
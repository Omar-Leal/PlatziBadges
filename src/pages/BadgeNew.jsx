import React from 'react';

import '../components/styles/BadgesNew.css';
import Navbar from '../components/Navbar.jsx';
import Badge from '../components/badge.jsx'
import header from '../images/badge-header.svg';


class BadgeNew extends React.Component {
  render(){
    return(
      <div>
          <Navbar/>

          <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="header"/>
          </div>

          <div className="container">
            <div className="row">
              <div className="col">
                <Badge
                 name="Omar Enrique"
                 lastName="Leal Ramos"
                 occupation="Front End Developer"
                 Twitter="Omar_Leal" 
                   
                
                />

              </div>

            </div>

          </div>
      </div>
  
    )
  }
}


export default BadgeNew;
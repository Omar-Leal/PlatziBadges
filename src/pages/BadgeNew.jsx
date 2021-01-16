import React from 'react';

import '../components/styles/BadgesNew.css';

import Navbar from '../components/Navbar.jsx';
import Badge from '../components/badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx';


import header from '../images/badge-header.svg';


class BadgeNew extends React.Component {
  render(){
    return(
      <section>
        <Navbar/>
          <figure className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="header"/>
          </figure>

          <div className="container">
            <div className="row">
              <article className="col-6">
                <Badge
                 name="Omar Enrique"
                 lastName="Leal Ramos"
                 occupation="Front End Developer"
                 Twitter="Omar_Leal"
                 />
              </article>

              <article className="col-6">
                <BadgeForm />
              </article>

            </div>
          </div>
      </section>
                             



  
    )
  }
}


export default BadgeNew;
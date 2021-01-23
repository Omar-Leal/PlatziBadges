import React from 'react';

import '../components/styles/BadgesNew.css';


import Badge from '../components/badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx';


import header from '../images/badge-header.svg';


class BadgeNew extends React.Component {
  state = { form: {

  }};

  handleChangle = e => {    
    this.setState({
      form: {

        ...this.state.form,
        [e.target.name]: e.target.value,
        
      },
    })
  }

  render(){
    return(
      <React.Fragment>
        
          <figure className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="header"/>
          </figure>

          <div className="container">
            <div className="row">
              <article className="col-6">
                <Badge
                 name={this.state.form.name}
                 lastName={this.state.form.lastName}
                 occupation={this.state.form.occupation}
                 email={this.state.form.email}
                 Twitter={this.state.form.Twitter}
                 
                 />
              </article>

              <article className="col-6">
                <BadgeForm onChange={this.handleChangle} />
              </article>

            </div>
          </div>
      </React.Fragment>                          
 
    )
  }
}


export default BadgeNew;
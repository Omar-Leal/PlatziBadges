import React from 'react';

import '../components/styles/BadgesNew.css';
import header from '../images/logo-conf.svg';


import Badge from '../components/badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx';

import api from '../api';


class BadgeNew extends React.Component {
  state = { 
    form: {
      
    },
};

  handleChangle = e => {    
    this.setState({
      form: {

        ...this.state.form,
        [e.target.name]: e.target.value,
        
      },
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })

    try {
      await api.badges.create(this.state.form) 
      this.setState({
        loading: false,
        
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error,

      })
    }

  }

  render(){
    return(
      <React.Fragment>        
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="header"/>
        </div>

          <div className="container">
            <div className="row">
              <article className="col-6">
                <Badge
                 name={this.state.form.name || 'NAME'}
                 lastName={this.state.form.lastName || 'LAST_NAME'}
                 jobTitle={this.state.form.jobTitle || 'OCCUPATION'}
                 email={this.state.form.email || 'EMAIL'}
                 twitter={this.state.form.twitter || 'TWITTER'}
                 
                 />
              </article>

              <article className="col-6">
                <BadgeForm 
                onChange={this.handleChangle}
                onSubmit={this.handleSubmit}
                formValues={this.state.form} 
                />
              </article>

            </div>
          </div>
      </React.Fragment>                          
 
    )
  }
}


export default BadgeNew;
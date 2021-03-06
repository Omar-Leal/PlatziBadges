import React from 'react';

import Badge from '../components/badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx';
import api from '../api';
import PageLoading from '../components/PageLoading.jsx';

import '../components/styles/BadgesNew.css';
import header from '../images/logo-conf.svg';





class BadgeNew extends React.Component {
  state = { 
    loading: false,
    error: null,
    form: {
      name: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      
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
        loading: false
        
      })

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error: error,

      })
    }

  }

  render(){
    if (this.state.loading) {
      return <PageLoading />;
    }
    
    return(
      <React.Fragment>        
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image img-fluid" src={header} alt="header"/>
        </div>

          <div className="container">
            <div className="BadgeNew__container">
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
                <h1 className="form__title">Place your info here</h1>
                <BadgeForm 
                onChange={this.handleChangle}
                onSubmit={this.handleSubmit}
                formValues={this.state.form} 
                error={this.state.error}
                />
              </article>

            </div>
          </div>
      </React.Fragment>                          
 
    )
  }
}


export default BadgeNew;
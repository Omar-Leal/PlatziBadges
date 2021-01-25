import React from 'react';

import Badge from '../components/badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx';
import api from '../api';


import '../components/styles/BadgeEdit.css';
import header from '../images/logo-conf.svg';





class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
      name: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      
    },
};

componentDidMount() {
  this.fetchData();
}

fetchData = async (e) => {
  this.setState({
    loading: true,
    error: null
  })

  try {
    const data = await api.badges.read(
      this.props.match.params.badgeId
    )


    this.setState({
      loading: false, 
      form: data,
    })
  } catch (error) {
    this.setState({
      loading: false,
      error: error
    })
  }



}

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
      await api.badges.update(this.props.match.params.badgeId, this.state.form) 
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
    
    return(
      <React.Fragment>        
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="header"/>
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
              <h1>Edit Info</h1>
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


export default BadgeEdit;
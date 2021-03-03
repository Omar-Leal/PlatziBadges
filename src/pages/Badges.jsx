import React from 'react';
import { Link } from 'react-router-dom';

import BadgesList from '../components/BadgesList.jsx';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import API from '../data/db.json'


import '../components/styles/Badges.css';
import confLogo from '../images/badge-header.svg';


class Badges extends React.Component {
  state = {
      loading: true,
      error: null,
      data: undefined,      
  }; 

  componentDidMount() {
    this.fetchData()



    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const data = await API.badges;
        this.setState({
          loading: false,
          data: data
        })

    } catch (error) {
        this.setState({
          loading: false,
          data: error
        })
    }
  }

  render(){
    if(this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }


    return (
      <React.Fragment>
         
        <div className="Badges" >
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="logito" />
            </div>
          </div>

          <div className="Badge__container">
            <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">New Badges!
                </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges__container" >
              {this.state.loading && <MiniLoader />}
                <BadgesList badges={this.state.data} />
                                
              </div>

            </div>


          </div>


        </div>

      </React.Fragment>

    )
  }
}

export default Badges;
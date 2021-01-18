import React from 'react';
import logo from '../images/badge-header.svg';
import avatar from '../images/avatar.png';
import './styles/Badge.css';



class Badge extends React.Component {  
   render(){
    const {
      name,
      lastName,
      occupation,
      email,         
      Twitter
    } = this.props;

    return (
      <div className="Badge">
          <div className="Badge__header">
              <img src={logo} alt="Logo de conferencia" />
          </div>  
          <div className="Badge__section-name">
              <img className="Badge__avatar" src={avatar} alt="Avatar"/>
              <h1>{name}<br/>{lastName}</h1>        
          </div>
          <div className="Badge__section-info">
              <h3>{occupation}</h3>
              <div>@{Twitter}</div>
              <div>{email}</div>
          </div>

          <div className="Badge__footer "></div>

      </div>   
    );
  }
}

export default Badge;
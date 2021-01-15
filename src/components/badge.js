import React from 'react';

import confLogo from '../images/badge-header.svg';



class Badge extends React.Component {
  
  render(){
    return (
      <div>
      <div>
          <img src="{confLogo}" alt="Logo" />
      </div>

      <div>
          <img src="" alt="Avatar"/>
          <h1>Omar<br/>Leal</h1>        
      </div>

      <div>
        <p>Front-End Developer</p>
        <p>@Omar_Leal</p>

      </div>

    </div>   
    );
  }
}

export default Badge;
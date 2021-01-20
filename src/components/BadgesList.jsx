import React from 'react';


class BadgesList extends React.Component {
  render(){
     return (
        <ul className="Badges__card-container" >
            {this.props.badges.map((Badge) => {
              return (
                <div class="cards">
                <div class="cards__preview">                  
                  <h2>{Badge.firstName}</h2>
                  <h2>{Badge.lastName}</h2>                  
                </div>
                <div class="card-info">                  
                  <h6>{Badge.twitter}</h6>
                  <h3>{Badge.jobTitle}</h3>
                  
                </div>
              </div>
              )
              }) 
            
            }      
        </ul>
     )
  }
}

export default BadgesList;
import React from 'react';


class BadgesList extends React.Component {
  render(){
     return (
        <ul className="Badges__card-container"  >
            {this.props.badges.map((Badge, index) => {
              return (
                <div className="cards" key={index} >
                <div className="cards__preview" >                  
                  <h2>{Badge.firstName} </h2>
                  <h2>{Badge.lastName} </h2>                  
                </div>
                <div className="card-info" >                  
                  <h6>{Badge.twitter} </h6>
                  <h3>{Badge.jobTitle} </h3>
                  <p><strong>Email: </strong><i>{Badge.email} </i></p>
                  
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
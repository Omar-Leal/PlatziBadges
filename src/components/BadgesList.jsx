import React from 'react';


class BadgesList extends React.Component {
  render(){
     return (
        <ul className="list-unstyled" >
            {this.props.badges.map((Badge) => {
              return (
                    <li key={Badge.id} >
                      <p>{Badge.firstName} {Badge.lastName}</p>
                    </li>
              )
              }) 
            
            }      
        </ul>
     )
  }
}

export default BadgesList;
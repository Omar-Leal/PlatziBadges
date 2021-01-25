import React from 'react'
import { Link } from 'react-router-dom'


import Badge from '../components/badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import '../components/styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'



function BadgeDetails (props) {
  const badge = props.badge;
  return (
    <div>
        <div className="BadgeDetails__hero ">
          <div className="container">
            <div className="row">
              <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
              </div>                
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.name} {badge.lastName}</h1>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                name={badge.name}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col">
              <h2>ACTIONS</h2>
                <div>
                  <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                    Edit
                  </Link>
                </div>
                 <div>                   
                    <button onClick={props.onOpenModal}  className="btn btn-danger">Delete</button>  
                    <DeleteBadgeModal 
                    onClose={props.onCloseModal}
                    isOpen={props.modalIsOpen}
                    onDeleteBadge={props.onDeleteBadge}
                    
                    /> 
                   
                 </div> 

              
            </div>
          </div>
        </div>

      </div>
  )
}

export default BadgeDetails;
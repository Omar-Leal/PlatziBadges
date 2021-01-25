import React from 'react'

import Modal from './Modal'

function DeleteBadgeModal (props) {
  return (
    <Modal
    isOpen={props.isOpen}
    onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Are your Sure?</h1>
        <p>You are about to delete this badge.</p>
          <di>
            <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
            <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
          </di>
      </div>
    </Modal> 
  )

}

export default DeleteBadgeModal;
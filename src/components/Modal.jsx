import React from 'react'
import reactDOM from 'react-dom'

import '../components/styles/Modal.css'


function Modal (props) {
  if (!props.isOpen) {
    return null;
  }

  return reactDOM.createPortal(
    <div className="modal">
      <div className="Modal__container">
        <button className="Modal__close-button">X</button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')    
    );
}

export default Modal;


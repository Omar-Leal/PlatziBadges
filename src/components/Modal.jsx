import React from 'react'
import reactDOM from 'react-dom'

import './styles/Modal.css';


function Modal (props) {
  if (!props.isOpen) {
    return null;
  }

  return reactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button 
        onClick={props.onClose}
        className="Modal__close-button">X</button>
        {props.children}
      </div>
    </div>,
    document.getElementById('mod')    
    );
}

export default Modal;


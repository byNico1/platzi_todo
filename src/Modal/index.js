import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

function modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export default modal
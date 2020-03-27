import React from 'react'
import "./InfoContainer.scss"

const InfoContainer = ({ children }) => {
  return (
    <div className="info-container">
      {children}
    </div>
  )
}

export default InfoContainer
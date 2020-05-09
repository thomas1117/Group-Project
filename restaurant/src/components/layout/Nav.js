import React from 'react'
import logo from '../../images/logo.svg'
import '../../styles/Nav.css'

export default () => {
  return (
    <nav className="nav">
      <div>
        <img src={logo} />
      </div>
      <div>
        <div className="icon-box">social media</div>
      </div>
    </nav>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { cssStyles } from '../config/AppConfig'

const MiniNavBar = ({link,mg}) => (
    <div className="navbar m-auto" style={cssStyles.lookNavbar}>
      <div className="col-xs-2">
        <img className="logo-image" alt="logo" src={cssStyles.logo.navBar}></img>
      </div>
      <div className="col-xs-2 text-right">
        <img className="user-image-small" alt="back" src="./images/user-button-black.png"></img>
        {(mg)?mg:'Guest'}</div>
    </div>
)


export default MiniNavBar

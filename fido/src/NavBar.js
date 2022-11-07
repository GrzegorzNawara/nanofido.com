import React from 'react'
import { Link } from 'react-router-dom'
import { cssStyles, cfgMode } from './config/AppConfig'
//import debug from './debug'

const NavBar = ({mg}) => (
  <div className='navbar align-items-center p-3 mb-2 bg-white border-bottom box-shadow'>
    <div className="col-xs-6">
      <Link className="navbar-brand my-0 mx-auto" to='/' title="logo">
        <img className="logo-image" alt="logo" src={cssStyles.logo.navBar}></img></Link>
    </div>
    <div className="h5 col-xs-6 text-right color-black80 my-2">
      <img className="user-image" alt="back" src="./images/user-button-dark.png"></img>
      {(mg)?mg:'Guest'} {cfgMode}</div>
  </div>
)

export default NavBar

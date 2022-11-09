import React from 'react'
import { Link } from 'react-router-dom'
import { cssStyles, cfgMode } from '../config/AppConfig'

const MiniNavBar = ({link,state}) => (
    <div className="navbar m-auto bg-white">
      <div className="col-xs-2">
        <Link to={link} title="logo"><img className="back-image" alt="back" src="./images/back-button-dark.png"></img></Link>
      </div>
      <div className="col-xs-2 text-right color-black80">
        <img className="user-image-small" alt="back" src="./images/user-button-dark.png"></img>
        {(state.mg)?state.mg:(state.nameTag && state.nameTagSaved)?state.nameTag:'Guest'} {cfgMode}</div>
    </div>
)


export default MiniNavBar

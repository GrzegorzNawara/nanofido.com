import React from 'react'
import { Link } from 'react-router-dom'
import { cssStyles } from '../config/AppConfig'

const MiniNavBar = ({state,workshop,person}) => (
    <div className="navbar m-auto" style={cssStyles.lookNavbar}>
      <div className="col-xs-2">
        <img className="logo-image" alt="logo" src={cssStyles.logo.navBar}></img>
      </div>
      {(person)?<div>
        {Math.round(state.x/100)} {Math.round(state.y/100)} 
      </div>:null}
      {(person)?
        <div className="col-xs-2 text-right">
          <img className="user-image-small" alt="back" src="./images/user-button-black.png"></img>
          {(person)?state.people.filter(p=>p.id===person)[0].name:null}
        </div>:null}
    </div>
)


export default MiniNavBar

import React from 'react'
import { Link } from 'react-router-dom';
import { cssStyles } from '../config/AppConfig'
//import debug from '../debug'

const Brick = ({ title, subtitle, workshopId, look, linkTo }) => (
  <div className="col-12 px-1">
    <a href={'https://mirotalk.up.railway.app/join/'+workshopId} target="Chat" >
      <div className="rounded p-3 m-1 mb-2 align-items-center" style={cssStyles.lookChat} >
        <h4>{title}</h4>
        <div>{subtitle}</div>
      </div>
    </a>
  </div>
)

export default Brick

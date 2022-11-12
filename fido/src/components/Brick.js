import React from 'react'
import { Link } from 'react-router-dom';
import { cssStyles } from '../config/AppConfig'
//import debug from '../debug'

const Brick = ({ title, subtitle, look, linkTo }) => (
  <div className="col-12 px-1">
    <Link to={(linkTo)?linkTo:'./'}>
      <div className="rounded p-3 m-1 mb-2 align-items-center" style={cssStyles[look]} >
        <h4>{title}</h4>
        <div>{subtitle}</div>
      </div>
    </Link>
  </div>
)

export default Brick

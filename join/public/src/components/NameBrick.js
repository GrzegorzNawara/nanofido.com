import React from 'react'
import { Link } from 'react-router-dom';
import { cssStyles } from '../config/AppConfig'
//import debug from '../debug'

const NameBrick = ({ title, subtitle, score, look, linkTo }) => (
  <div className="col-12 px-1">
    <div className="rounded p-3 m-1 mb-2 align-items-center" style={cssStyles[look]} >
      <h4>{title}</h4>
      <div>{subtitle}</div>
      
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" ariaLabel="Large" ariaDescribedBy="inputGroup-sizing-sm" />
        <div className="input-group-prepend">
          <span className="btn btn-outline-secondary" id="inputGroup-sizing-lg">OK</span>
        </div>
      </div>

      <div>{localStorage.getItem('me')}</div>
      

    </div>
  </div>
)

export default NameBrick

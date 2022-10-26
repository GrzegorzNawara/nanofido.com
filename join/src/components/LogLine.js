import React from 'react'
//import debug from '../debug'

const LogLine = ({ sprint, time, text }) => (
  <div className="row">
    <div className="col-2">{sprint}</div>
    <div className="col-2">{time}</div>
    <div className="col-8">{text}</div>
  </div>
)

export default LogLine

import React from 'react'
import simWriteMsg from '../database/simWriteMsg'
import { cssStyles } from '../config/AppConfig'
//import debug from '../debug'

const NameBrick = ({workshopId, title, subtitle, look, state, setState }) => (
  <div className="col-12 px-1">
    <div className="rounded p-3 m-1 mb-2 align-items-center" style={cssStyles[look]} >
      <h4>{title}</h4>
      
      <div className="input-group input-group-lg">
        <input 
          onChange={(e)=>setState({...state, nameTag:e.target.value, nameTagSaved:0})}
          type="text" 
          className="form-control" 
          aria-label="Large" 
          aria-describedby="inputGroup-sizing-sm" />
        <div className="input-group-prepend">
          {(state.nameTag!=='')?<span className={(state.nameTagSaved)?"btn btn-success":"btn btn-danger"} id="inputGroup-sizing-lg"
          onClick={()=>{
            console.log(state);
            setState({...state, nameTagSaved:1})
            simWriteMsg({
              workshop:workshopId,
              person:localStorage.getItem('me'),
              cmd:'TAG',
              name:state.nameTag })
          }}>{(state.nameTagSaved)?'OK':'SAVE'}</span>:null}
        </div>
      </div>
      

    </div>
  </div>
)

export default NameBrick

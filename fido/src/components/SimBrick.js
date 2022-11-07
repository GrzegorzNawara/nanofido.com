import React from 'react'
import { cssStyles, cfgSimWWW, translationsPL } from '../config/AppConfig'
import { teamNamesEN, teamNamesPL } from '../config/mapGen'
//import debug from '../debug'

class SimBrick extends React.Component {

  render() {

  const teamNames=(this.props.lang==='PL')?teamNamesPL:teamNamesEN
  const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word
  const sim=this.props.sim  
  const timer=(sim.time)?""+Math.round((sim.time-sim.startTime)/60)+"'":''
  let status=''
  if(sim.time)
    status=tr("RUNNING")+' '+timer
  if(sim.pauseActive)
    status=tr("PAUSED")+' '+Math.round((sim.pauseActive-sim.startTime-sim.pauseTotalTime)/60)+"'"
  if(sim.gameOver)
    status=tr("THE END")

  return (

  <React.Fragment>
  <div className="col px-1 align-items-center">
    <a href={cfgSimWWW+'/#/'+this.props.id+'/'+this.props.titleCnt+'/'+this.props.workshopId+'/'+this.props.lang}>
      <div className="text-center rounded p-3 m-1"
           style={(sim.gameOver)?cssStyles['lookSimulationOver']:cssStyles[this.props.look]} >

        <h2 className="text-nowrap">
          {(sim.gameOver)?<img style={{height:'16px', marginRight:'15px', verticalAlign:'baseline'}} src="./images/lock-img.png" alt="Locked"/>:null}{teamNames[this.props.titleCnt]}
        </h2>
        {status}
        <br/>{(sim.time)?sim.VP:''}
      </div>
    </a>
  </div>
  {(this.props.titleCnt===1)?<div className="w-100"></div>:null}

  {(this.props.titleCnt==1 && this.props.iteration>1)?<div className="col-12 text-center"><h2>{tr('YEAR')} {this.props.iteration-1}</h2></div>:null}
  </React.Fragment>
)}}

export default SimBrick

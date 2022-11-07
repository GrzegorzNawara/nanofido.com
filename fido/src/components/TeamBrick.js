import React from 'react'
import { cssStyles, cfgSimWWW, translationsPL } from '../config/AppConfig'
import { terrain, goods, playerName, cityNamesEN, cityNamesPL, teamNamesEN, teamNamesPL } from '../config/mapGen'
import debug from '../debug'


class TeamBrick extends React.Component {

  render() {

  const teamNames=(this.props.lang==='PL')?teamNamesPL:teamNamesEN
  const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word

  return (

  <React.Fragment>
  <div className="col px-1 align-items-center">
    <a
      href={(this.props.stats && this.props.stats['gameOver'])?window.location.href:cfgSimWWW+'/#/'+this.props.workshopId+'/'+((localStorage.getItem('sparta.sim.team'))?localStorage.getItem('sparta.sim.team'):0)+'/'+this.props.titleCnt+'/'+this.props.lang}

      onClick={()=>{
        if(this.props.running){
          localStorage.setItem('sparta.sim.team',this.props.titleCnt)
          this.props.setState({titleCnt:this.props.titleCnt})
          return true;
        }
        return false;
      }}>
      <div className="text-center rounded p-3 m-1"
           style={(localStorage.getItem('sparta.sim.team')===''+this.props.titleCnt)?cssStyles['lookTeamActive']:(!this.props.running)?cssStyles['lookTeamOver']:cssStyles['lookTeamInactive']} >

        <h2 className="text-nowrap m-0">
          {(!this.props.running && localStorage.getItem('sparta.sim.team')!==''+this.props.titleCnt)?<img style={{height:'16px', marginRight:'15px', verticalAlign:'baseline'}} src="./images/lock-img.png" alt="Locked"/>:null}
          <span>{teamNames[this.props.titleCnt]}</span>
        </h2>

      </div>
    </a>
  </div>
  {(this.props.titleCnt===1)?<div className="w-100"></div>:null}
  {(this.props.titleCnt==1 && this.props.roundNumber>1)?<div className="col-12 text-center"><h2>{tr('ROUND')} {this.props.roundNumber-1}</h2></div>:null}
  </React.Fragment>
)}}

export default TeamBrick

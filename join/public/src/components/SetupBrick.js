import React from 'react'
import { cssStyles, cfgSimWWW } from '../config/AppConfig'
//import debug from '../debug'

const artemisNames=['ZERO','AGROTEX','BIG-POL','CENTAURIA','DURALEX','EXPOLAMP','ORG-06',
          'ORG-07','ORG-08','ORG-09','Juliet','Kilo','Lima','Mike','November','Oscar',
          'Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey',
          'Xray','Yankee'];
const SetupBrick = ({ title, subtitle,
    workshopId,
    score, look, id, artemisCount, linkTo, sort, stats}) => (
  <div className="col px-1 align-items-center">
    <a href={(Date.now()-sort>99999*3600000)?window.location.href:cfgSimWWW+'/#/'+workshopId+'/'+id+'/'+((title>24)?'Team'+title:artemisNames[title])}>
      <div className="text-center rounded p-3 m-1"
           style={(Number(Date.now().toString())-Number(sort)>99999*60*60*1000 ||
             (stats && stats[id] && stats[id]['Status']==='Game Over'))
              ?cssStyles['lookSimulationOver']:cssStyles[look]} >
        <h2 className="text-nowrap">
          {(Date.now()-sort>99999*3600000)?<img style={{height:'16px', marginRight:'15px', verticalAlign:'baseline'}} src="./images/lock-img.png" alt="Locked"/>:null}
          {(title>9)?'ORG-'+title:''+artemisNames[title]}
        </h2>
        <div>{'ZBUDUJ FIRMĘ'}</div>
        { (stats && stats[id])?
          <div>{stats[id]['Result']+'/'+stats[id]['MaxResult']} VP
            <a href={cfgSimWWW+'/#/results/'+id+'/'+((title>24)?'Deep'+title:artemisNames[title])}>
              <img className="ml-3" style={{ height:'30px', width:'auto' }} alt="chart" src="./images/chart-button.png"></img>
            </a>
          </div>
          :<div>&nbsp;</div> }
      </div>
    </a>
  </div>
)

export default SetupBrick

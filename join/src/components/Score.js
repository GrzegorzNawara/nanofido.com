import React from 'react'
import { terrain, goods, playerName, cityNamesEN, cityNamesPL, teamNamesEN, teamNamesPL } from '../config/mapGen'
import { cfgPathSim, translationsPL } from '../config/AppConfig'
import MyChart from './MyChart'
import MyChart2 from './MyChart2'
import MyChart3 from './MyChart3'
import MyChart4 from './MyChart4'
import MyChart5 from './MyChart5'
import debug from '../debug'

class Score extends React.Component {
render() {
  const state=this.props.simState
  const teamNames=(this.props.lang==='PL')?teamNamesPL:teamNamesEN
  const cityNames=(this.props.lang==='PL')?cityNamesPL:cityNamesEN
  const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word
  let islandsCnt=4//(state && state.islandsInitialized)?state.islandsInitialized-1:0
  let teamCnt=(state && state.teamsInitialized)?state.teamsInitialized:0
  let teamTotalVP=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  let teamTotalPOP=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  let bestTeamOnIsland=[0,0,0,0,0]
  let popTotal=0
  if(state && state.islands)
    state.islands.map((i,ii)=>{
      popTotal+=i.pop
      bestTeamOnIsland[ii]=0
      i.teams.map((t,ti)=>{
        if(t.vp>i.teams[bestTeamOnIsland[ii]].vp) bestTeamOnIsland[ii]=ti;
      })})
  if(state && state.islands)
    state.islands.map((i,ii)=>{
      i.teams.map((t,ti)=>{
        (ii>0 && t.vp>0 && islandsCnt<ii)?islandsCnt=ii:islandsCnt=islandsCnt;
        (ii>0 && t.vp>0 && teamCnt<ti)?teamCnt=ti:teamCnt=teamCnt;
        if(ii>0 && t.vp>0) teamTotalVP[ti]+=t.vp;
        (bestTeamOnIsland[ii]===ti)?teamTotalPOP[ti]+=i.pop:teamTotalPOP[ti]+=0;
      })})
  let maxScore=0

  return(
  <div
    className="text-center p-3"
    onClick={()=>window.history.back()}
    style={{
    backgroundColor:"#ffffff",
    color:'#555555',
    fontFamily:'Ubuntu',
    zIndex:10
  }}>



    {(state && state.chart && state.chart.val)?
    <div className="row pb-4">
      <div className="col-12 col-md-12 my-2 py-3" style={{ width: '100%', height:'400px'}}>
        <h3>{tr("Civilisation Power")}</h3>
        <MyChart state={state} data={state.chart.val} cityNames={cityNames} lang={this.props.lang} />
      </div>
    </div>:null}

    <table className="table table-striped table-hover">
      <thead><tr>
        <th></th>
        <th>{tr('Population')}</th>
      {teamNames.map((tn,teamId)=>(teamId===0 || teamId>teamCnt)?null:
        <th key={'h'+teamId} className="text-right">{(teamId===0)?'':teamNames[teamId]}
        </th>)}
        <th></th>
      </tr></thead>
      <tbody>
    {(state && state.islands)?state.islands.map((island,islandId)=>
      (islandId>0 && islandId<=islandsCnt)?
        <tr>
          <td className="text-left">{cityNames[islandId]}</td>
          <td className="text-center">{island.pop}</td>
          {island.teams.map((team,teamId)=>((teamId>0 && teamId<=teamCnt))?
          <td className="text-right">
             {Math.round(team.vp)}
          </td>:null)}
          <td></td>
        </tr>:null):null}
        <tr>

          <td className="text-left h5">{tr('Total')}</td>
          <td>{popTotal}</td>
          {teamNames.map((tn,teamId)=>(teamId>0 && teamId<=teamCnt)?
          <td key={'h'+teamId} className="text-right h5">{<b>{Math.round(teamTotalVP[teamId])}</b>}
          </td>:null)}
          <td></td>
        </tr>
        <tr>
          <td></td>
        {teamNames.map((tn,teamId)=>(teamId>teamCnt)?null:
          <td key={'h'+teamId} className="text-right h5">{(teamId===0)?tr('People Saved'):<b>{Math.round((state.vp)?state.vp[teamId]:0)}</b> }
          </td>)}
          <td></td>
        </tr>

        <tr>
          <td></td>
        {teamNames.map((tn,teamId)=>(teamId>teamCnt)?null:
          <td key={'h'+teamId} className="text-right">{(teamId===0)?tr('Civilisation Influence'):<span>{Math.round((state.vp)?teamTotalVP[teamId]+state.vp[teamId]:teamTotalVP[teamId])}</span> }
          </td>)}
          <td></td>
        </tr>
      </tbody>
    </table>

    <hr />

    {(state && state.chart && state.chart.val)?
    <div className="row pb-4">
    {teamNames.map((tn,teamId)=>(teamId===0 || teamId>teamCnt)?null:
      <div className="col-12 col-md-12 my-2 py-3" style={{ width: '100%', height:'500px'}}>
        <h3>{teamNames[teamId]}
        </h3>
        <MyChart2
          state={state}
          lang={this.props.lang}
          labelA={tr("Goods Delivered")}
          labelB={tr("Goods Gathered")}
          labelC={tr("Factories")}
          labelD={tr("People Saved")}
          labelE={tr('Civilisation Influence')}
          labelF={tr('Enemies')}
          maxScoreLeft={
            Math.max.apply(null,[1,2,3,4]
            .map(t=>Math.max.apply(null,state.chart.val.map(d=>d["b"+t]))
            ))
          }
          maxScoreLeft2={
            Math.max.apply(null,[1,2,3,4]
            .map(t=>Math.max.apply(null,state.chart.val.map(d=>d["e"+t]))
            ))
          }
          maxScoreRight={
            Math.max.apply(null,[1,2,3,4]
            .map(t=>Math.max.apply(null,state.chart.val.map(d=>d["v"+t]+d["s"+t]))
            ))
          }
          maxScoreRight2={
            Math.max.apply(null,[1,2,3,4]
            .map(t=>Math.max.apply(null,state.chart.val.map(d=>d["f"+t]))
            ))
          }
          data={state.chart.val.map((d)=>({
            time:d.t,
            [tr('Enemies')]:Math.round(d["e"+teamId]),
            [tr('Civilisation Influence')]:Math.round(d["v"+teamId]+d["s"+teamId]),
            [tr("Factories")]:Math.round(d["f"+teamId]),
            [tr("Goods Delivered")]:d["t"+teamId],
            [tr("Goods Gathered")]:d["b"+teamId],
            [tr("People Saved")]:Math.round(d["s"+teamId]),
          }))} />
      </div>
    )}
    </div>:null}


    {(0 && state && state.chart && state.chart.val)?
    <div className="row pb-4">
    {teamNames.map((tn,teamId)=>(teamId===0 || teamId>teamCnt)?null:
      <div className="col-12 col-md mx-0 px-0 my-2 py-3" style={{ width: '100%', height:'400px'}}>
        <h3>{teamNames[teamId]}</h3>
        <MyChart4
          state={state}
          cityNames={cityNames}
          maxScore={maxScore}
          data={[0,1,2,3,4,5].filter((i)=>i<=islandsCnt).map((is)=>
          ({
            name:cityNames[is],
            vp:(state && state.chart && state.chart.tms['t'+teamId]['i'+is] && state.chart.tms['t'+teamId]['i'+is].vp)?state.chart.tms['t'+teamId]['i'+is].vp:0
          })
        )} />
      </div>
    )}
    {teamNames.map((tn,teamId)=>(teamId===0 || teamId>teamCnt)?null:
      <div className="col-12 col-md mx-0 px-0 my-2 py-3" style={{ width: '100%', height:'400px'}}>
        <h3>{teamNames[teamId]}</h3>
        <MyChart5
          state={state}
          cityNames={cityNames}
          maxScore={maxScore}
          data={[0,1,2,3,4,5].filter((i)=>i<=islandsCnt).map((is)=>
          ({
            name:cityNames[is],
            vp:(state && state.chart && state.chart.tms['t'+teamId]['i'+is] && state.chart.tms['t'+teamId]['i'+is].vp)?state.chart.tms['t'+teamId]['i'+is].vp:0,
            goods:(state && state.chart && state.chart.tms['t'+teamId]['i'+is] && state.chart.tms['t'+teamId]['i'+is].goods)?state.chart.tms['t'+teamId]['i'+is].goods:0
          })
        )} />
      </div>
    )}
    </div>:null}

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
)}}

export default Score

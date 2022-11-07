import React from 'react'
import Brick from './components/Brick'
import SimBrick from './components/SimBrick'
import TeamBrick from './components/TeamBrick'
import SetupBrick from './components/SetupBrick'
import { cfgPathSim, translationsPL } from './config/AppConfig'
import debug from './debug'


class Bricks extends React.Component {
  artemisSim = {}
  myBricks = []
  state = {}
  getStatsTimer = null

  getStats = () => {
    clearInterval(this.getStatsTimer);
    if(this.props.bricks && this.props.bricks.filter((b)=>b.type==='SIM').length>0){
      fetch('https://api.ignifer-labs.com/sparta/api_read_results.php',{
        method: 'post',
        body: JSON.stringify(
          this.props.bricks.filter((b)=>b.type==='SIM').map((b)=>(b.id))
      )})
        .then(result => result.json())
        .then(result => this.setState({ simStats: result }));
      //this.getStatsTimer = setInterval(()=> this.getStats(), 8000);
    } else {
      //this.getStatsTimer = setInterval(()=> this.getStats(), 2000);
    }
  }
  

  render() {
    const lang=this.props.lang
    const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word

    this.spartaSim = { clear:false, actualSort:0, lastSort:0, count:0, result:0, users:0 };

    let simCnt=0;
    let last=0;
    let iteration=0
    let stat=[]

    this.myBricks = this.props.bricks.slice()
      .filter(b => b.id)
      .sort((a,b)=>-a.sort.localeCompare(b.sort))
      .reverse()
      .map((b,i,ba) => {
        if(b.type!=='SIM') return b;
        (i>0 && b['sort']-last<600000)?simCnt=simCnt+1:simCnt=1;
        (i>0 && b['sort']-last<600000)?iteration=iteration:iteration++;
        if(!stat[iteration]) stat[iteration]={result:0, users:0}
        last=b['sort'];
        stat[iteration]=(!this.state.simStats || !this.state.simStats[b.id])?{ result:0, users:0 }:
          {
            result: stat[iteration].result+this.state.simStats[b.id]['Result'],
            users: stat[iteration].users+this.state.simStats[b.id]['Users']
          }
        return {...b, simCnt, title:'', iteration};
      });

    return (
      <div>
        <div className="container">

        <div className="row py-3 justify-content-center">
        {(iteration===0)?null:<h2 className="col-12 text-center">{tr('YEAR')} {iteration}</h2>}
        {
          this.myBricks.reverse().map((r, i) => {
            switch (r.type) {
              case 'DOCUMENT': return (
                  <Brick key={'brick'+i} title={r.title} subtitle={r.subtitle}
                    look={JSON.parse(r.params).look}
                    linkTo={r.super+'/doc/'+JSON.parse(r.params).doc} />
                )
              case 'SIM':
                return (
                    <React.Fragment key={'brick-f'+i}>
                      <SimBrick key={'brick'+i} title={r.title+' '+r.simCnt}
                        subtitle={r.subtitle}
                        titleCnt={r.simCnt}
                        iteration={r.iteration}
                        running={r.running}
                        lang={lang}
                        roundNumber={r.roundNumber}
                        workshopId={this.props.workshopId}
                        sim={(this.props.state.sim && this.props.state.sim[r.id])?this.props.state.sim[r.id]:[]}
                        id={r.id} stats={this.state[r.id]} sort={r['sort']}
                        look={JSON.parse(r.params).look} />
                    </React.Fragment>
                )
                case 'SCORE':
                return (
                  <Brick key={'brick'+i} title={r.title} subtitle={r.subtitle}
                    linkTo={"/"+r.owner+"/"+r.super+"/score"}
                    lang={lang}
                    look={JSON.parse(r.params).look} />
                )
              default:return (
                <Brick key={'brick'+i} title={r.title} subtitle={r.subtitle}
                  look={JSON.parse(r.params).look} />
              )
            }
          })
        }
        </div>
      </div>
      </div>
    )
  }
}

export default Bricks

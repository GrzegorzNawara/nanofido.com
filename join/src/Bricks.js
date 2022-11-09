import React from 'react'
import Brick from './components/Brick'
import NameBrick from './components/NameBrick'
import { translationsPL } from './config/AppConfig'
//import debug from './debug'


class Bricks extends React.Component {
  artemisSim = {}
  myBricks = []
  state = {}
  getStatsTimer = null

  getStats = () => {
    clearInterval(this.getStatsTimer);
    
  }
  

  render() {
    const lang=this.props.lang
    const tr = (word,lang=this.props.lang) => (lang==='PL')?translationsPL[word]:word

    this.spartaSim = { clear:false, actualSort:0, lastSort:0, count:0, result:0, users:0 };

    this.myBricks = this.props.bricks.slice()
      .filter(b => b.id)
      .sort((a,b)=>-a.sort.localeCompare(b.sort))
      .reverse()

    return (
      <div>
        <div className="container">

        <div className="row py-3 justify-content-center">
        {
          this.myBricks.reverse().map((r, i) => {
            switch (r.type) {
              case 'DOCUMENT': return (
                  <Brick key={'brick'+i} title={r.title} subtitle={r.subtitle}
                    look={JSON.parse(r.params).look}
                    linkTo={r.super+'/doc/'+JSON.parse(r.params).doc} />
                )
              case 'NAMEBRICK': return (
                <NameBrick key={'brick'+i}
                  state={this.props.state} 
                  setState={(state) => this.props.setState(state)} 
                  workshopId={this.props.workshopId}
                  title={r.title} 
                  subtitle={r.subtitle}
                  look={JSON.parse(r.params).look}
                  linkTo="" />
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

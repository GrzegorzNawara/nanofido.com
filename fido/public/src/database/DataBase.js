import React from 'react'
import lastMod from './lastMod'
import listWorkshopsByOwner from './listWorkshopsByOwner'
import getWorkshopByPin from './getWorkshopByPin'
import listBricks from './listBricks'
import simReadState from './simReadState'
//import debug from '../debug'

class DataBase extends React.Component {
  lastMod=0

  checkLastMod = () => {
    clearInterval(this.checkLastModTimer);

      if(this.props.query==='loadWorkshops')
        lastMod('',
        (lastMod) => {
          if(this.lastMod!==lastMod){
              this.loadWorkshops()
              this.lastMod=lastMod
        }})

      if(this.props.query==='loadBricks')
        lastMod(this.props.owner,
        (lastMod) => {
          if(this.lastMod!==lastMod){
              this.loadBricks()
              this.lastMod=lastMod
        }})

    this.checkLastModTimer = setInterval(this.checkLastMod, 4000);
  }

  checkSimStatus = () => {
    clearInterval(this.checkSimStatusTimer);

      if(this.props.state && this.props.state.bricks)
        this.props.state.bricks.forEach((b,i)=>{
          if(b.type==='SIM' && (!this.props.state.sim || !this.props.state.sim[b.id] || this.props.state.sim[b.id].gameOver===0)){
            simReadState(b.id,
              (simState) => {
                this.props.onSimStateLoaded({ simState })})
          }
        })

    this.checkSimStatusTimer = setInterval(this.checkSimStatus, 10000);
  }

  loadWorkshops = () => {
    getWorkshopByPin(this.props.pin,
      (pinWorkshop) => this.props.onDataLoaded({ pinWorkshop }))

    if(this.props.mg)
    listWorkshopsByOwner(this.props.mg,
      (mgWorkshops) => this.props.onDataLoaded({ mgWorkshops }))
  }

  loadBricks = () => {
    listBricks(this.props.owner, this.props.workshopId,
      ({bricks, workshop}) => {
        if(!workshop) window.history.back()
        this.props.onDataLoaded({ bricks, workshop })})
  }

  componentDidMount(){
    this.checkLastMod()
    this.checkSimStatus()
  }

  componentWillUnmount() {
    clearInterval(this.checkLastModTimer)
    clearInterval(this.checkSimStatusTimer)
  }

  componentDidUpdate(prevProps) {
    if( this.props.pin!==prevProps.pin || this.props.mg!==prevProps.mg )
      this.lastMod=0
  }

  render() { return null }
}

export default DataBase

import React from 'react'
import { Link } from 'react-router-dom';
import { cssStyles } from '../config/AppConfig'
import debug from '../debug'

class Fidomap extends React.Component {
  constructor(props) {
    super(props)
    this.checkPosTimer=null
  }

  checkPos = () => {
    debug(document.getElementById( "fidomap-div" ).scrollLeft,'BUM')
  }

  componentDidMount(){
    this.checkPosTimer = setInterval(this.checkPos, 2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.checkPosTimer)
  }


  render() { 
    const state=this.props.state

    return (
    <div id="fidomap-div" 
    onScroll={(e)=> {
      this.props.setState({
        ...state,
        x:document.getElementById( "fidomap-div" ).scrollLeft,
        y:document.getElementById( "fidomap-div" ).scrollTop
      })
      debug(state,'SCROLL')}}
    className="fidomap-container">
      <img id="fidomap" src="./images/map1.png" />
    </div>
  )}
}

export default Fidomap
